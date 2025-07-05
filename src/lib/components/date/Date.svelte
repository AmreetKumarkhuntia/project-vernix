<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import Ripple from '../ripple/Ripple.svelte';

  import type { DateProps } from './props';

  export let selectedDate: DateProps['selectedDate'] = new Date();
  export let format: DateProps['format'] = 'MM/DD/YYYY';
  export let disabled: DateProps['disabled'] = false;
  export let expanded: DateProps['expanded'] = false;
  export let zIndex: number = 1;
  export let years: number[] = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const position = tweened(
    {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    },
    {
      duration: 50,
      easing: cubicOut,
    }
  );

  let showCalendar = expanded;

  let dateElements: (HTMLDivElement | null)[] = [];

  let rippleContainer: Ripple | null = null;

  let currentMonth = selectedDate
    ? selectedDate.getMonth()
    : new Date().getMonth();
  let currentYear = selectedDate
    ? selectedDate.getFullYear()
    : new Date().getFullYear();

  $: daysInMonth = getDaysInMonth(currentYear, currentMonth);

  $: handleTransitionOfActiveElement(selectedDate), selectedDate;

  function formatDate(date: Date, fmt: string = 'MM/DD/YYYY') {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());

    return fmt
      .replace(/YYYY/g, yyyy.toString())
      .replace(/MM/g, mm.toString())
      .replace(/DD/g, dd.toString());
  }

  function toggleCalendar() {
    if (!disabled && !expanded) {
      showCalendar = !showCalendar;
    }
  }

  function getDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({ date: new Date(date), isOtherMonth: false });
      date.setDate(date.getDate() + 1);
    }

    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      days.unshift({ date: null, isOtherMonth: true });
    }

    return days;
  }

  function handleMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    currentMonth = parseInt(target.value, 10);
    position.set({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    });
  }

  function handleYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    currentYear = parseInt(target.value, 10);
    position.set({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    });
  }

  function handleTransitionOfActiveElement(date: Date | null | undefined) {
    if (date === null || date === undefined) {
      return;
    }
    const index = daysInMonth.findIndex((d) => isSameDay(d.date, date));
    if (index !== -1) {
      const el = dateElements[index];
      if (el) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
        position.set({
          top: offsetTop,
          left: offsetLeft,
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }
  }

  function selectDate(date: Date) {
    selectedDate = date;
    if (!expanded) {
      showCalendar = false;
    }
  }

  function isSameDay(
    d1: Date | null | undefined,
    d2: Date | undefined
  ): boolean {
    let isSameDay =
      d1 &&
      d2 &&
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    isSameDay = isSameDay ?? false;

    return isSameDay;
  }

  onMount(() => {
    handleTransitionOfActiveElement(selectedDate);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="date-container"
  class:date-disabled={disabled}
  class:date-expanded={expanded}
  style="--z-index: {zIndex};"
>
  {#if !expanded}
    <div class="date-selected" on:click={toggleCalendar}>
      {#if selectedDate}
        {formatDate(selectedDate, format)}
      {/if}
    </div>
  {/if}

  <div class="date-calendar" class:date-calendar-inactive={!showCalendar}>
    <div class="date-header">
      <select bind:value={currentMonth} on:change={handleMonthChange}>
        {#each months as month, i}
          <option value={i}>{month}</option>
        {/each}
      </select>
      <select bind:value={currentYear} on:change={handleYearChange}>
        {#each years as year}
          <option value={year}>{year}</option>
        {/each}
      </select>
    </div>
    <div class="date-days">
      <div
        class="date-day-selected-highlight"
        style="top: {$position.top}px; left: {$position.left}px; width: {$position.width}px; height: {$position.height}px;"
      >
        <Ripple bind:this={rippleContainer} zIndex={zIndex + 10} selfTrigger={false} />
      </div>
      {#each ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as day}
        <div class="date-day-name">{day}</div>
      {/each}
      {#each daysInMonth as day, i}
        <div
          class="date-day"
          class:date-day-selected={isSameDay(day.date, selectedDate)}
          class:date-day-other-month={day.isOtherMonth}
          on:click={(event) => {
            const target = event.currentTarget;
            const mouseEvent = event;
            if(rippleContainer) {
              rippleContainer.createRipple(target, mouseEvent);
            }
            if (day.date) selectDate(day.date);
          }}
          bind:this={dateElements[i]}
        >
          {day.date ? day.date.getDate() : ''}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .date-container {
    position: relative;
    display: inline-block;
  }

  .date-selected {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
  }

  .date-container.date-disabled .date-selected {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }

  .date-calendar {
    position: absolute;
    top: 100%;
    padding: 12px;
    left: 0;
    z-index: var(--z-index);
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: var(--date-calendar-width, auto);
  }

  .date-calendar-inactive {
    display: none;
  }

  .date-expanded .date-calendar {
    position: static;
  }

  .date-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }

  .date-days {
    position: relative;
    display: grid;
    grid-template-columns: repeat(7, 40px);
    grid-template-rows: repeat(7, 40px);
    gap: 2px;
    padding: 8px;
    width: 100%;
  }

  .date-day-name {
    font-weight: bold;
  }

  .date-day-name,
  .date-day {
    text-align: center;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date-day {
    cursor: pointer;
    z-index: calc(var(--z-index) + 3);
  }

  .date-day.date-day-selected {
    color: white;
  }

  .date-day-selected-highlight {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #007bff;
    border-radius: 100%;
    z-index: calc(var(--z-index) + 1);
    transition:
      top 0.4s,
      left 0.4s,
      width 0.4s,
      height 0.4s;
  }

  .date-day.date-day-other-month {
    color: #ccc;
  }
</style>

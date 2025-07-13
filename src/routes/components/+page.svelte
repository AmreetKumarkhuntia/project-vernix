<script lang="ts">
  // import '$css/default-theme.css';
  // import '$css/improved-theme.css';
  import '$css/improved-theme-2.css';
  import 'prismjs/themes/prism-tomorrow.css';

  import {
    Button,
    InputField,
    Navbar,
    Breadcrumbs,
    Header,
    Modal,
    Accordion,
    Flyer,
    WrapperText,
    LazyLoader,
    Avatar,
    Card,
    ProgressBar,
    FileUploader,
    Code,
    TimeLine,
    DropDown,
    Carousal,
    RadioGroup,
    SideNav,
    Date,
    Checkbox,
    type FlyerProps,
  } from '$lib/index';
  import type { FlyerType } from '$lib/components/flyer/props';
  import type {
    NavbarProps,
    NavigationOptions,
  } from '$components/navbar/props';

  import { writable } from 'svelte/store';
  import { headerIcon, profileIcon } from '$lib/constants/staticIcons';
  import type { BreadcrumbItem } from '$lib/components/breadcrumbs/props';
  import type {
    TimeLineDetails,
    TimeLineEventType,
  } from '$components/timeLine/props';
  import type { DropdownItem } from '$components/dropDown/props';
  import type { SideNavItem } from '$lib/components/sideNav/props';
  import Tooltip from '$lib/components/tooltip/Tooltip.svelte';
  import Ripple from '$lib/components/ripple/Ripple.svelte';
  import Toggle from '$lib/components/toggle/Toggle.svelte';
  import RightArrow from '$lib/components/svgs/RightArrow.svelte';
  import LeftArrow from '$lib/components/svgs/LeftArrow.svelte';
  import UpArrow from '$lib/components/svgs/UpArrow.svelte';
  import DownArrow from '$lib/components/svgs/DownArrow.svelte';

  let rippleContainer: Ripple | null = null;

  let sideNavItems: SideNavItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      href: '/products',
      expanded: true,
      children: [
        {
          label: 'Electronics',
          href: '/products/electronics',
          children: [
            {
              label: 'Phones',
              href: '/products/electronics/phones',
            },
            {
              label: 'Laptops',
              href: '/products/electronics/laptops',
            },
          ],
        },
        {
          label: 'Books',
          href: '/products/books',
        },
      ],
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  let inputValue = writable('');
  let flyerCount = 0;
  let showModal: boolean = false;

  const openModal = () => {
    showModal = true;
  };

  const getFlyerProps = (i: number): FlyerProps => ({
    position: 'bottom-right',
    flyerType: ['success', 'warning', 'alert', 'summary'][i % 4] as FlyerType,
    title: `Flyer ${i + 1}`,
    duration: 3000,
    closeAfterDuration: 500,
    flyerLeftImage: null,
  });

  const openFlyer = () => {
    flyerCount++;
  };

  const handleModalClose = () => {
    showModal = false;
  };

  const handleInput = (e: Event) => {
    inputValue.set((e.target as HTMLInputElement).value);
  };

  const handleButtonClick = () => {
    inputValue.update((value) => `Hello, ${value}!`);
  };

  const demoNavigationProps: NavigationOptions[] = [
    {
      id: 'home',
      title: 'HOME',
      navigationURL: '/',
    },
    {
      id: 'about',
      title: 'ABOUT',
      navigationURL: '/about',
    },
    {
      id: 'github',
      title: 'GITHUB',
      navigationURL: '/github',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      navigationURL: '/github',
    },
    {
      id: 'dev-to',
      title: 'Dev.to',
      navigationURL: '/github',
    },
  ];

  let activeNav = 'home';

  const demoNavbarProps: NavbarProps = {
    navigationOptions: demoNavigationProps,
  };

  function handleNavClick(navigationOption: NavigationOptions) {
    activeNav = navigationOption.id;
  }

  const events: TimeLineDetails[] = [
    {
      dateStart: '01-01-2020',
      dateEnd: '31-02-2024',
      position: 'Student',
      description:
        'Completed a Bachelor’s in Computer Science, focusing on software development and data structures.',
      name: 'University of XYZ',
      event: 'education' as TimeLineEventType,
      location: 'New York, USA',
      alignment: 'left',
      link: null,
    },
    {
      dateStart: '01-02-2024',
      dateEnd: '01-02-2027',
      position: 'Software Engineer',
      description:
        'Developed scalable web applications and collaborated with cross-functional teams.',
      name: 'Company X',
      event: 'work' as TimeLineEventType,
      location: 'San Francisco, USA',
      alignment: 'left',
      link: 'https://www.companyx.com',
    },
    {
      dateStart: '02-02-2027',
      dateEnd: 'present',
      position: 'Senior Software Engineer',
      description:
        'Leading a team in software design, mentoring developers, and driving innovation.',
      name: 'Company Y',
      event: 'work' as TimeLineEventType,
      location: 'London, UK',
      alignment: 'right',
      link: 'https://www.companyy.com',
    },
  ];

  const demoBreadcrumbItems: BreadcrumbItem[] = [
    { index: '1', text: 'Home', href: '/' },
    { index: '2', text: 'Products', href: '/products' },
    { index: '3', text: 'Electronics', href: '/products/electronics' },
    {
      index: '4',
      text: 'Components',
      href: '/products/electronics/Components',
    },
  ];

  let dropDownItems: DropdownItem[] = [
    {
      label: 'Option 1',
      id: '1',
      action: () => console.log('Option 1 selected'),
      active: false,
    },
    {
      label: 'Option 2',
      id: '2',
      action: () => console.log('Option 2 selected'),
      active: false,
    },
    {
      label: 'Option 3',
      id: '3',
      action: () => console.log('Option 3 selected'),
      active: true,
    },
    {
      label: 'Option 4',
      id: '4',
      action: () => console.log('Option 4 selected'),
      active: false,
    },
    {
      label: 'Option 5',
      id: '5',
      action: () => console.log('Option 5 selected'),
      active: false,
    },
  ];

  let radioOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  let selectedRadio = '1';
  let checked = false;

  let exampleCode = ``;
</script>

<div class="page-container">
  <div class="side-nav-container">
    <SideNav items={sideNavItems} />
  </div>
  <div class="main-content">
    <div class="view-components">
      <h1>Svelte + TypeScript + CSS Variables Example</h1>
      <Modal isOpen={showModal} onClose={handleModalClose}>
        <Header hLevel={4}>My Modal Title</Header>
        <p>This is the content of the modal.</p>
      </Modal>
      {#each Array(flyerCount) as _, i}
        <Flyer isVisible={true} flyerProps={getFlyerProps(i)}>
          This is flyer #{i + 1}
        </Flyer>
      {/each}

      <div class="view-padding">
        <p>{$inputValue}</p>
      </div>
      <div class="view-padding">
        <InputField placeholder="Your Name" onInput={handleInput} />
      </div>
      <div class="view-padding">
        <Button onClick={handleButtonClick} size={'large'}>Greet Me</Button>
        <Button onClick={openModal} size={'large'}>Open Modal</Button>
        <Button onClick={openFlyer} size={'large'}>Add Flyer</Button>
      </div>
      <div class="view-padding">
        <Navbar
          navbarProps={demoNavbarProps}
          activeNavigation={activeNav}
          onClick={handleNavClick}
        >
          <div slot="left">
            <img
              src={headerIcon}
              alt="header icon"
              style="height: 40px; width: 40px;"
            />
          </div>
          <div slot="right">
            <img
              src={profileIcon}
              alt="profile icon"
              style="height: 40px; width: 40px;"
            />
          </div>
        </Navbar>
      </div>
      <div class="view-padding">
        <Navbar
          navbarProps={demoNavbarProps}
          navbarAlignment="vertical"
          activeNavigation={activeNav}
          onClick={handleNavClick}
        >
          <div slot="left">
            <img
              src={headerIcon}
              alt="header icon"
              style="height: 40px; width: 40px;"
            />
          </div>
          <div slot="right">
            <img
              src={profileIcon}
              alt="profile icon"
              style="height: 40px; width: 40px;"
            />
          </div>
        </Navbar>
      </div>
      <div class="view-padding">
        <Breadcrumbs items={demoBreadcrumbItems} />
      </div>

      <div class="view-padding">
        <Header hLevel={1}>This is a H1 heading</Header>
      </div>

      <div class="view-padding">
        <Header hLevel={2}>This is a H2 heading</Header>
      </div>

      <div class="view-padding">
        <Header hLevel={3}>This is a H3 heading</Header>
      </div>

      <div class="view-padding">
        <Header hLevel={4}>This is a H4 heading</Header>
      </div>

      <div class="view-padding">
        <Header hLevel={5}>This is a H5 heading</Header>
      </div>

      <div class="view-padding">
        <Header hLevel={6}>This is a H6 heading</Header>
      </div>

      <div class="view-padding">
        <LazyLoader className="lazy-loader-test">
          <Header hLevel={1}>This is a Lazy Loader</Header>
        </LazyLoader>
      </div>

      <div class="view-padding">
        <Accordion>
          <span slot="accordion-title">Accordion Title 2</span>
          <p>Accordion content goes here.</p>
        </Accordion>
      </div>

      <div class="view-padding">
        <Header hLevel={1}>
          <WrapperText />
        </Header>
      </div>

      <div class="view-padding">
        <Avatar dataType={'svg'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path
              d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
            ></path>
          </svg>
        </Avatar>
      </div>

      <div class="view-padding">
        <ProgressBar />
      </div>

      <div class="view-padding">
        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>

        <Card>
          <div class="card-content">
            This is the custom content for my card.
          </div>
        </Card>
      </div>

      <div class="view-padding">
        <Code>
          {`
  const greeting = 'Hello, world!';

  function greet(name) {
    return greeting + ' Welcome, ' + name + '!';
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  const users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];

  function displayUserInfo(user) {
    return user.firstName + ' ' + user.lastName + ' is ' + user.age + ' years old.';
  }

  function filterUsersByAge(minAge) {
    return users.filter(function(user) {
      return user.age >= minAge;
    });
  }

  console.log(greet(user.firstName));
  console.log(displayUserInfo(user));
  console.log(filterUsersByAge(30));
  `}
        </Code>
      </div>

      <div class="view-padding">
        <TimeLine {events} />
      </div>
      <div class="view-padding">
        <DropDown
          buttonLabel={'Select Dropdown'}
          zIndex={100}
          items={dropDownItems}
        />
      </div>
      <div class="view-padding">
        <DropDown
          buttonLabel={'DROPDOWN MENU'}
          items={dropDownItems}
          multi={true}
        />
      </div>

      <div class="view-padding">
        <FileUploader />
      </div>

      <div class="view-padding">
        <RadioGroup
          legend="Select an option"
          name="radio-group"
          options={radioOptions}
          bind:selectedValue={selectedRadio}
        />
      </div>

      <div class="view-padding">
        <Carousal length={3}>
          <div class="carousel-slide">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="carousel-slide">
            <p>
              Nulla facilisi. Aenean nec eros ut orci lobortis tempor. Aliquam
              erat volutpat. Nulla at auctor purus, a suscipit risus. Etiam
              euismod velit a sem condimentum, sit amet tincidunt enim luctus.
              Integer scelerisque orci non leo tempus, id lobortis nunc
              sollicitudin.
            </p>
          </div>

          <div class="carousel-slide">
            <p>
              Vestibulum congue nisi sit amet viverra. Curabitur convallis,
              nulla ac vehicula feugiat, odio justo gravida nulla, nec tempor
              erat odio id neque. Nulla vitae lectus eget elit ullamcorper
              maximus id ac risus. Morbi et mauris non sapien tincidunt
              vulputate a in erat.
            </p>
          </div>
        </Carousal>
      </div>
      <div class="view-padding">
        <SideNav items={sideNavItems} />
      </div>
      <div class="view-padding">
        <Tooltip position="top">
          <span slot="tooltip-content">This is the tooltip content yeah</span>
          <div>Hey its a little tip for you! You wills see a tooltip popup</div>
        </Tooltip>
      </div>
      <div class="view-padding">
        <Tooltip position="bottom">
          <span slot="tooltip-content">This is the tooltip content yeah</span>
          <div>
            Hey its a little tip for you! You wills see a tooltip popup bottom
          </div>
        </Tooltip>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="view-padding">
        <div class="test-ripple">
          <Ripple bind:this={rippleContainer}>
            Hey this is a test for ripple effect. Click me!
          </Ripple>
        </div>
      </div>
      <div class="view-padding">
        <Date />
      </div>
      <div class="view-padding">
        <Date zIndex={101} expanded={true} />
      </div>
      <div class="view-padding">
        <div class="svgs-container">
          <RightArrow />
        </div>
        <div class="svgs-container">
          <LeftArrow />
        </div>
        <div class="svgs-container">
          <UpArrow />
        </div>
        <div class="svgs-container">
          <DownArrow />
        </div>
      </div>
      <div class="view-padding">
        <Toggle />
      </div>
      <div class="view-padding">
        <Checkbox label="Checkbox" bind:checked />
        <Checkbox label="Disabled" disabled={true} />
        <Checkbox label="Disabled Checked" disabled={true} checked={true} />
      </div>
    </div>
  </div>
</div>

<style>
  .side-nav-container {
    display: block;
    width: 300px;
    height: auto;
  }

  .page-container {
    display: flex;
    padding: 0;

    min-width: 100vw;
    min-height: 100vh;
  }

  .main-content {
    flex-grow: 1;
    width: calc(100% - 300px);
  }

  .view-components {
    width: 90%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .view-padding {
    padding: 2%;
    padding-left: 0px;
    padding-right: 0px;

    --input-height: 220px;
    width: 80%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .test-ripple {
    --ripple-width: 80%;
    --ripple-height: 80%;
    --ripple-padding: 10%;
    background-color: var(--tertiary-color);
    border-radius: 20px;
    overflow: hidden;
    width: 420px;
  }

  .svgs-container {
    height: 42px;
    width: 42px;
  }
</style>

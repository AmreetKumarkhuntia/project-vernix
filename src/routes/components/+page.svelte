<script lang="ts">
  import '$css/default-theme.css';
  import 'prismjs/themes/prism-tomorrow.css';

  import Button from '$components/Button.svelte';
  import InputField from '$components/InputField.svelte';
  import Navbar from '$components/navbar/Navbar.svelte';
  import type {
    NavbarProps,
    NavigationOptions,
  } from '$components/navbar/props';

  import { writable } from 'svelte/store';
  import { headerIcon, profileIcon } from '$lib/constants/staticIcons';
  import type { BreadcrumbItem } from '$components/breadcrumbs/props';
  import BreadCrumbs from '$components/breadcrumbs/BreadCrumbs.svelte';
  import Header from '$components/Header.svelte';
  import Modal from '$components/modal/Modal.svelte';
  import Accordion from '$components/accordion/Accordion.svelte';
  import Flyer from '$components/flyer/Flyer.svelte';
  import WrapperText from '$components/wrapperText/WrapperText.svelte';
  import LazyLoader from '$components/lazyLoader/LazyLoader.svelte';
  import Avatar from '$components/avatar/Avatar.svelte';
  import Card from '$components/card/Card.svelte';
  import ProgressBar from '$components/progressBar/ProgressBar.svelte';
  import FileUploader from '$components/fileUploader/FileUploader.svelte';
  import Code from '$components/code/Code.svelte';
  import type {
    TimeLineDetails,
    TimeLineEventType,
  } from '$components/timeLine/props';
  import TimeLine from '$components/timeLine/TimeLine.svelte';
  import type { DropdownItem } from '$components/dropDown/props';
  import DropDown from '$components/dropDown/DropDown.svelte';

  let inputValue = writable('');
  let showFlyer = false;
  let showModal = false;

  const openModal = () => {
    showModal = true;
  };

  const openFlyer = () => {
    showFlyer = true;
  };

  const handleModalClose = () => {
    showModal = false;
  };

  const handleFlyerClose = () => {
    showFlyer = false;
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

  const demoNavbarProps: NavbarProps = {
    showLeftImage: true,
    leftImageURL: headerIcon,
    navigationOptions: demoNavigationProps,
    showRightImage: true,
    rightImageURL: profileIcon,
  };

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
  ];

  let exampleCode = `
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
  console.log(filterUsersByAge(30));`;
</script>

<div class="view-components">
  <h1>Svelte + TypeScript + CSS Variables Example</h1>
  <Modal isOpen={showModal} onClose={handleModalClose}>
    <Header hLevel={4}>My Modal Title</Header>
    <p>This is the content of the modal.</p>
  </Modal>
  <Flyer isVisible={showFlyer} onClose={handleFlyerClose}>
    Success flyer shown to user.
  </Flyer>

  <div class="view-padding">
    <p>{$inputValue}</p>
  </div>
  <div class="view-padding">
    <InputField placeholder="Your Name" onInput={handleInput} />
  </div>
  <div class="view-padding">
    <Button onClick={handleButtonClick} size={'large'}>Greet Me</Button>
    <Button onClick={openModal} size={'large'}>Open Modal</Button>
    <Button onClick={openFlyer} size={'large'}>Show Flyer</Button>
  </div>
  <div class="view-padding">
    <Navbar navbarProps={demoNavbarProps} onClick={(e) => console.log(e)} />
  </div>
  <div class="view-padding">
    <Navbar navbarProps={demoNavbarProps} navbarAlignment="vertical" />
  </div>
  <div class="view-padding">
    <BreadCrumbs items={demoBreadcrumbItems} />
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
      <p>Accordion content goes here.</p>
    </Accordion>
  </div>

  <div class="view-padding">
    <Header hLevel={1}>
      <WrapperText />
    </Header>
  </div>

  <div class="view-padding">
    <Avatar alt="User" />
  </div>

  <div>
    <ProgressBar />
  </div>

  <div class="view-padding">
    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>

    <Card>
      <div class="card-content">This is the custom content for my card.</div>
    </Card>
  </div>

  <div class="view-padding">
    <Code code={exampleCode} />
  </div>

  <div class="view-padding">
    <Header hLevel={2}>
      <WrapperText text="TIMELINE" />
    </Header>
    <TimeLine {events} />
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
</div>

<style>
  .view-components {
    padding: 5%;
  }
  .view-padding {
    padding: 2%;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;

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
</style>

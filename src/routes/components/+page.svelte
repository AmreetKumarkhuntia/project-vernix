<script lang="ts">
  // import '$css/default-theme.css';
  import '$css/improved-theme.css';
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
    type FlyerProps,
  } from '$lib/index';
  import type {
    NavbarProps,
    NavigationOptions,
  } from '$components/navbar/props';

  import { writable } from 'svelte/store';
  import { headerIcon, profileIcon } from '$lib/constants/staticIcons';
  import type { BreadcrumbItem } from '$components/breadCrumbs/props';
  import type {
    TimeLineDetails,
    TimeLineEventType,
  } from '$components/timeLine/props';
  import type { DropdownItem } from '$components/dropDown/props';

  let inputValue = writable('');
  let showFlyer: boolean = false;
  let showModal: boolean = false;
  let flyerProps: FlyerProps = {
    position: 'bottom-right',
    flyerType: 'summary',
    title: null,
    duration: 3000,
    flyerLeftImage: null,
    inTransition: null,
    outTransition: null,
  };

  const openModal = () => {
    showModal = true;
  };

  const openFlyer = () => {
    showFlyer = true;
  };

  const openFlyer2 = () => {
    flyerProps = {
      position: 'top-right',
      flyerType: 'warning',
      title: null,
      duration: 3000,
      flyerLeftImage: null,
      inTransition: null,
      outTransition: null,
    };
    showFlyer = true;
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
    {
      label: 'Option 4',
      id: '4',
      action: () => console.log('Option 4 selected'),
      active: true,
    },
    {
      label: 'Option 5',
      id: '5',
      action: () => console.log('Option 5 selected'),
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
  <Flyer bind:isVisible={showFlyer} {flyerProps}
    >Success flyer shown to user.</Flyer
  >

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
    <Button onClick={openFlyer2} size={'large'}>Show Flyer 2</Button>
  </div>
  <div class="view-padding">
    <Navbar navbarProps={demoNavbarProps} onClick={(e) => console.log(e)} />
  </div>
  <div class="view-padding">
    <Navbar navbarProps={demoNavbarProps} navbarAlignment="vertical" />
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

  <div class="view-padding">
    <Carousal length={3}>
      <div class="carousel-slide">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div class="carousel-slide">
        <p>
          Nulla facilisi. Aenean nec eros ut orci lobortis tempor. Aliquam erat
          volutpat. Nulla at auctor purus, a suscipit risus. Etiam euismod velit
          a sem condimentum, sit amet tincidunt enim luctus. Integer scelerisque
          orci non leo tempus, id lobortis nunc sollicitudin.
        </p>
      </div>

      <div class="carousel-slide">
        <p>
          Vestibulum congue nisi sit amet viverra. Curabitur convallis, nulla ac
          vehicula feugiat, odio justo gravida nulla, nec tempor erat odio id
          neque. Nulla vitae lectus eget elit ullamcorper maximus id ac risus.
          Morbi et mauris non sapien tincidunt vulputate a in erat.
        </p>
      </div>
    </Carousal>
  </div>
</div>

<style>
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
</style>

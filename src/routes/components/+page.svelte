<script lang="ts">
    import "$css/defaultTheme.css";
    import Button from "$components/Button.svelte";
    import InputField from "$components/InputField.svelte";
    import Navbar from "$components/navbar/Navbar.svelte";
    import type {
        NavbarProps,
        NavigationOptions,
    } from "$components/navbar/props";

    import { writable } from "svelte/store";
    import { headerIcon, profileIcon } from "$lib/constants/staticIcons";
    import type { BreadcrumbItem } from "$components/breadcrumbs/props";
    import BreadCrumbs from "$components/breadcrumbs/BreadCrumbs.svelte";
    import Header from "$components/Header.svelte";
    import Modal from "$components/modal/Modal.svelte";
    import Accordion from "$components/accordion/Accordion.svelte";
    import Flyer from "$components/flyer/Flyer.svelte";

    let inputValue = writable("");
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
            id: "home",
            title: "HOME",
            navigationURL: "/",
        },
        {
            id: "about",
            title: "ABOUT",
            navigationURL: "/about",
        },
        {
            id: "github",
            title: "GITHUB",
            navigationURL: "/github",
        },
        {
            id: "linkedin",
            title: "LinkedIn",
            navigationURL: "/github",
        },
        {
            id: "dev-to",
            title: "Dev.to",
            navigationURL: "/github",
        },
    ];

    const demoNavbarProps: NavbarProps = {
        showLeftImage: true,
        leftImageURL: headerIcon,
        navigationOptions: demoNavigationProps,
        showRightImage: true,
        rightImageURL: profileIcon,
    };

    const demoBreadcrumbItems: BreadcrumbItem[] = [
        { index: "1", text: "Home", href: "/" },
        { index: "2", text: "Products", href: "/products" },
        { index: "3", text: "Electronics", href: "/products/electronics" },
    ];
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
        <Button onClick={handleButtonClick} size={"large"}>Greet Me</Button>
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
        <Accordion>
            <p>Accordion content goes here.</p>
        </Accordion>
    </div>
    <div class="view-padding">
        <Button onClick={openModal} size={"large"}>Open Modal</Button>
    </div>
    <div class="view-padding">
        <Button onClick={openFlyer} size={"large"}>Show Flyer</Button>
    </div>
</div>

<style>
    .view-components {
        padding: 5%;
    }
    .view-padding {
        padding: 1%;
        padding-left: 0px;
        padding-right: 0px;
        width: 100;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

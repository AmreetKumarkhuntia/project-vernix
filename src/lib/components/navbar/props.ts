import { headerIcon, profileIcon } from "$lib/constants/staticIcons"

export type NavigationOptions = {
    id: string,
    title: string,
    navigationURL: string
}

export type NavbarProps = {
    showLeftImage: boolean,
    leftImageURL: string | null,
    navigationOptions: NavigationOptions[],
    showRightImage: boolean,
    rightImageURL: string | null
}

export type NavbarAlignment = "horizontal" | "vertical";

const defaultNavigationOptions: NavigationOptions[] = [
    {
        id: "home",
        title: "Home",
        navigationURL: "/"
    },
    {
        id: "about",
        title: "About",
        navigationURL: "/about"
    },
    {
        id: "github",
        title: "Github",
        navigationURL: "/github"
    }
]


export const defaultNavbarProps: NavbarProps = {
    showLeftImage: true,
    leftImageURL: headerIcon,
    navigationOptions: defaultNavigationOptions,
    showRightImage: true,
    rightImageURL: profileIcon
}
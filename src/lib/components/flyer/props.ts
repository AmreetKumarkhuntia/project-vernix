import type { TransitionWrapper } from "$components/transitions";

export const defaultInTransition: TransitionWrapper = {
    transition: { x: 40, duration: 400 },
    transitionType: "fly-and-fade",
};

export const defaultOutTransition: TransitionWrapper = {
    transition: { x: 40, duration: 400 },
    transitionType: "fly-and-fade",
};

export const defaultDescription: string = "No description to show";

export type FlyerType = 'alert' | 'summary' | 'warning' | 'success' | 'custom';
export type FylerPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left";

export type FlyerProps = {
    position: FylerPosition,
    flyerType: FlyerType | null,
    title: string,
    duration: number,
    flyerLeftImage: string | null,
    description: string | null;
    inTransition: TransitionWrapper | null,
    outTransition: TransitionWrapper | null
}

export const defaultFlyerProps: FlyerProps = {
    position: "top-right",
    flyerType: "success",
    title: "Summary",
    duration: 3000,
    flyerLeftImage: null,
    description: null,
    inTransition: null,
    outTransition: null,
}
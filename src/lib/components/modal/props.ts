import type { TransitionWrapper } from "$components/transitions";

export type ModalProps = {
    inTransition: TransitionWrapper;
    outTransition: TransitionWrapper;
    closeButtonProp: string | HTMLElement | null;
}

export const defaultModalProps: ModalProps = {
    inTransition: {
        transitionType: "fly-and-fade",
        transition: { x: 0, y: 100, duration: 300 },
    },
    outTransition: {
        transitionType: "fly-and-fade",
        transition: { x: 0, y: -100, duration: 300 },
    },
    closeButtonProp: null
}
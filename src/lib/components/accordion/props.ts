export type AccordionProps = {
    closeButtonContent?: string;
    title?: string;
    duration?: number;
    onToggle?: (isClose: boolean) => void;
};

export let defaultAccordionProps: AccordionProps = {
    closeButtonContent: "&times;",
    title: "Accordion Title",
    duration: 300,
    onToggle: () => { }
};

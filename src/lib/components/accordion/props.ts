export type AccordionProps = {
    closeButtonContent: string | null;
    title: string | null;
    duration: number | null;
    onToggle: (isClose: boolean) => void | null;
};

export let defaultAccordionProps: AccordionProps = {
    closeButtonContent: "&times;",
    title: "Accordion Title",
    duration: 300,
    onToggle: () => { }
};

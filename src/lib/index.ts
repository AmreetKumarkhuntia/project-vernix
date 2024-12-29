// TODO: export icons also in vergins/icons

export { default as Accordion } from './components/accordion/Accordion.svelte';
export { default as Avatar } from './components/avatar/Avatar.svelte';
export { default as Breadcrumbs } from './components/breadCrumbs/BreadCrumbs.svelte';
export { default as Card } from './components/card/Card.svelte';
export { default as Code } from './components/code/Code.svelte';
export { default as DropDown } from './components/dropDown/DropDown.svelte';
export { default as FileUploader } from './components/fileUploader/FileUploader.svelte';
export { default as Flyer } from './components/flyer/Flyer.svelte';
export { default as LazyLoader } from './components/lazyLoader/LazyLoader.svelte';
export { default as Modal } from './components/modal/Modal.svelte';
export { default as Navbar } from './components/navbar/Navbar.svelte';
export { default as NavbarMenu } from './components/navbar/NavMenu.svelte';
export { default as ProgressBar } from './components/progressBar/ProgressBar.svelte';
export { default as TimeLine } from './components/timeLine/TimeLine.svelte';
export { default as WrapperText } from './components/wrapperText/WrapperText.svelte';
export { default as Button } from './components/Button.svelte';
export { default as Header } from './components/Header.svelte';
export { default as InputField } from './components/InputField.svelte';
export { default as Carousal } from './components/carousel/Carousel.svelte';

export * from './components/transitions';

//TYPES EXPORT
export type { AccordionProps } from './components/accordion/props';
export type { AvatarDataType } from './components/avatar/props';
export type { BreadcrumbItem } from './components/breadCrumbs/props';
export type { CodeProps } from './components/code/props';
export type { DropdownItem } from './components/dropDown/props';
export type { FileUploaderProps } from './components/fileUploader/props';
export type {
  FlyerType,
  FlyerPosition,
  FlyerProps,
} from './components/flyer/props';
export type { LazyLoaderProps } from './components/lazyLoader/props';
export type { ModalProps } from './components/modal/props';
export type { NavigationOptions, NavbarProps } from './components/navbar/props';
export type {
  TimeLineEventType,
  TimeLineDetailsAlignment,
  TimeLineDetails,
  TimeLineProps,
} from './components/timeLine/props';
export type {
  DrawElement,
  TransitionParamsEnum,
  TransitionEnum,
  TransitionWrapper,
  FlyAndFadeParams,
  FlyDirectionParams,
  ExtendInDirectionParams,
  NoTransitionParams,
} from './components/transitions/types';
export type {
  WrapFromDirection,
  WrapperTextProps,
} from './components/wrapperText/props';

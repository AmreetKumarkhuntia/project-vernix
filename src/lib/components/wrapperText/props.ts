export type WrapFromDirection = 'top' | 'bottom' | 'left' | 'right' | 'none';

export type WrapperTextProps = {
    wrapFrom: WrapFromDirection;
    enableWrapOnLoad: boolean | null;
    enableHoverGlitch: boolean | null;
}

export const defaultWrapperTextProps: WrapperTextProps = {
    wrapFrom: 'top',
    enableWrapOnLoad: true,
    enableHoverGlitch: null
}
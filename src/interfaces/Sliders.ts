export interface CallToAction {
    url: string,
    label?: string
}

export interface FullscreenSliderElement {
    title: string;
    subtitle?: string;
    image: string;

    callToAction?: CallToAction;
}

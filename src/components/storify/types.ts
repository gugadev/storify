interface IStory {
    src: string;
    placeholder: string;
    visible: boolean;
    previewVisible: boolean;
}
interface IStorify {
    duration: number;

    effect: string;

    startAt: number;

    withShadow: boolean;

    radius: number;

    height: number;

    width: number;
}
interface IAnimationHandler {
    onAnimationEnd: () => void;
}

export {IStory, IStorify, IAnimationHandler};

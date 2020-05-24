import {Component, Prop, h, Element, Host, Listen} from "@stencil/core";
import {IStory, IStorify, IAnimationHandler} from "./types";

@Component({
    tag: "x-storify",
    styleUrl: "./storify.scss",
})
export class Storify implements IStorify {
    @Element() el: HTMLElement;

    @Prop() duration = 5000;

    @Prop() effect = "fade";

    @Prop() startAt = 0;

    @Prop({attribute: "withshadow"}) withShadow = false;

    @Prop() radius = 0;

    @Prop() height = 480;

    @Prop() width = 320;

    private children: IStory[] = [];

    @Listen("animationEnds")
    onAnimationEnds() {
        this.goNext();
    }

    componentDidLoad() {
        const stories = this.el.querySelectorAll("x-storify-story");
        this.children = Array.from(stories) as IStory[];
        this.renderNewImage();
    }

    goPrevious = () => {
        this.startAt =
            this.startAt > 0 ? this.startAt - 1 : this.children.length - 1;
        this.renderNewImage();
    };

    goNext = () => {
        this.startAt =
            this.startAt < this.children.length - 1 ? this.startAt + 1 : 0;
        this.renderNewImage();
    };

    _onOrientationChange = () => {
        const $width = this.width;
        const $height = this.height;
        this.width = $height;
        this.height = $width;
    };

    renderNewImage() {
        this.children.forEach((story: IStory, i) => {
            // eslint-disable-next-line no-param-reassign
            story.visible = this.startAt === i;
        });
    }

    render() {
        const style = {
            boxShadow: this.withShadow
                ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                : "none;",
            height: `${this.height}px`,
            width: `${this.width}px`,
            borderRadius: `${this.radius}px`,
        };
        return (
            <Host style={style}>
                <x-storify-progress
                    segments={this.children.length}
                    duration={this.duration}
                    currentIndex={this.startAt}
                />
                <section class="touch-panel">
                    <div onClick={this.goPrevious} />
                    <div onClick={this.goNext} />
                </section>
                <slot></slot>
            </Host>
        );
    }
}

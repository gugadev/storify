/* eslint-disable no-underscore-dangle */
import {Component, Element, Prop, h, Event, EventEmitter} from "@stencil/core";
import {IAnimationHandler} from "./types";

@Component({
    tag: "x-storify-progress",
    styleUrl: "./progress.scss",
})
export class Progress {
    @Element() el: HTMLElement;

    @Event() animationEnds: EventEmitter<void>;

    /**
     * Count of images
     */
    @Prop() segments = 0;

    /**
     * Current image index to show
     */
    @Prop({attribute: "currentindex"}) currentIndex = 0;

    /**
     * Pprogress' animation duration
     */
    @Prop() duration = 0;

    /**
     * Object that
     * contains the handler for onanimationend event.
     */
    @Prop() handler: IAnimationHandler = {
        onAnimationEnd: () => {},
    };

    /**
     * Current animation
     */
    private animation: Animation;

    componentDidLoad() {
        this.updateProgress();
    }

    componentDidUpdate() {
        this.updateProgress();
    }

    render() {
        const indexes = Array.from({length: 5}, (_, i) => i);
        return indexes.map(i => (
            <section
                class="progress__bar"
                style={{width: `calc(100% / ${this.segments || 1})`}}
            >
                <div id={`track-${i}`} class="bar__track"></div>
            </section>
        ));
    }

    /**
     * Called every time this component is updated.
     * An update for this component means that a
     * 'previous' or 'next' was clicked. Because of
     * it, we need to cancel the previous animation
     * in order to run the new one.
     */
    updateProgress() {
        if (this.animation) {
            this.animation.cancel();
        }

        const i = this.currentIndex;
        const track = this.el.querySelector(`#track-${i}`);

        if (track) {
            const animProps = {
                width: ["0%", "100%"],
            };
            const animOptions: KeyframeAnimationOptions = {
                duration: this.duration,
                iterations: 1,
            };
            this.animation = track.animate(animProps, animOptions);
            this.animation.onfinish = () => {
                this.animationEnds.emit();
            };
        }
    }
}

import {Component, Prop, h, Element} from "@stencil/core";
import cn from "classnames";
import {IStory} from "./types";

@Component({
    tag: "x-storify-story",
    styleUrl: "./story.scss",
})
export class Story implements IStory {
    @Element() el: HTMLElement;

    /**
     * Image absolute or relative url
     */
    @Prop() src = "";

    /**
     * Placeholder for lazy loading
     * Use low quality image placeholders for this.
     * It can be an URL or a base64 string
     */
    @Prop() placeholder = "";

    /**
     *  Checks if an image is available to show
     */
    @Prop() visible = false;

    /**
     * Determines if the placeholder is visible
     * Local use only
     */
    @Prop() previewVisible = true;

    /**
     * Determines if an image was uploaded
     * Local use only
     */
    private loaded = false;

    /**
     * Executed on load event.
     * Remove the preview class.
     */
    onImageLoad = () => {
        const placeholder = this.el.querySelector(".placeholder");
        placeholder.animate(
            {
                opacity: [1, 0],
            },
            {
                duration: 1000,
                fill: "forwards",
            }
        );
        this.loaded = true;
    };

    /**
     * If the current image is not loaded yet,
     * we add the url to the src attribute and
     * add a preview class to show a blur
     */
    componentDidUpdate() {
        if (this.visible && !this.loaded) {
            const img = this.el.querySelector(".story") as HTMLImageElement;
            img.src = img.getAttribute("data-src");
        }
    }

    render() {
        const opacity = `${this.visible ? 1 : 0}`;
        const className = cn(
            "stories__container__story",
            this.visible ? "visible" : ""
        );

        return (
            <div class={className} style={{opacity}}>
                <img
                    class="story"
                    data-src={this.src}
                    onLoad={this.onImageLoad}
                />
                <img class="placeholder" src={this.placeholder} />
            </div>
        );
    }
}

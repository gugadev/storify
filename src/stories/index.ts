import {
  LitElement,
  customElement,
  property,
  html
} from 'lit-element'
import styles from './index.pcss'
import '../progress'
import { Story } from '../story'

@customElement('wc-stories')
class WCStories extends LitElement {

  /**
   * @description
   * Total time in view of each image
   */
  @property({ type: Number }) duration = 5000
  
  /**
   * @NoImplemented
   * @description
   * Effect of transition.
   * @version 0.0.1 Only support for fade effect.
   */
  @property({ type: String }) effect = 'fade'
  
  /**
   * @description
   * Initial index of image to show at start
   */
  @property({ type: Number }) startAt = 0
  
  /**
   * @description
   * Enables or disables the shadow of the container
   */
  @property({ type: Boolean }) withShadow = false

  /**
   * @description
   * Sets an optional border radius.
   */
  @property({ type: Number }) radius = 0

  @property({ type: Number }) height = 480

  @property({ type: Number }) width = 320

  /**
   * Handles the animationend event of the
   * <progress> animation variable.
   */
  private handler = {
    onAnimationEnd: () => {
      this.startAt = 
        this.startAt < this.children.length - 1
        ? this.startAt + 1
        : 0
      this.renderNewImage()
    }
  }

  /**
   * When tap on left part of the card,
   * it shows the previous story if any
   */
  goPrevious = () => {
    this.startAt = 
      this.startAt > 0
      ? this.startAt - 1
      : 0
    this.renderNewImage()
  }

  /**
   * When tap on right part of the card,
   * it shows the next story if any, else
   * shows the first one.
   */
  goNext = () => {
    this.startAt = 
      this.startAt < this.children.length - 1
      ? this.startAt + 1
      : 0
    this.renderNewImage()
  }

  render() {
    return html`
      <wc-stories-progress
        segments="${this.children.length}"
        duration="${this.duration}"
        current="${this.startAt}"
        .handler="${this.handler}"
      >
      </wc-stories-progress>
      <section class="touch-panel">
        <div @click="${this.goPrevious}"></div>
        <div @click="${this.goNext}"></div>
      </section>
      <!-- Children -->
      <slot></slot>
      <style>
        ${styles.toString()}
        :host {
          border-radius: ${this.radius}px;
          box-shadow: ${
            this.withShadow
            ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
            : 'none;'
          }
          height: ${this.height}px;
          width: ${this.width}px;
        }
      </style>
    `
  }

  /**
   * Detects device orientation and invert
   * the component dimensions.
   */
  _onOrientationChange = () => {
    const _width = this.width
    const _height = this.height

    this.width = _height
    this.height = _width
  }

  firstUpdated() {
    window.addEventListener('orientationchange', this._onOrientationChange)
    this.renderNewImage()
  }

  /**
   * Iterate over children stories to know
   * which story we need to render.
   */
  renderNewImage() {
    Array.from(this.children).forEach((story: Story, i) => {
      if (story instanceof Story) {
        story.visible = this.startAt === i
      }
    })
  }
}

export { WCStories }

import {
  LitElement,
  html,
  property,
  customElement
} from 'lit-element'
import styles from './index.pcss'
import 'core-js/modules/es6.array.from' // array polyfills

@customElement('wc-stories-progress')
class Progress extends LitElement {

  /**
   * @description count of images
   */
  @property({ type: Number }) segments = 0
  
  /**
   * @description current image index to show
   */
  @property({ type: Number, attribute: 'current' }) currentIndex = 0

  /**
   * @description progress' animation duration
   */
  @property({ type: Number }) duration = 0

  /**
   * @description object that
   * contains the handler for onanimationend event.
   */
  @property({ type: Object }) handler: any = {}

  /**
   * Current animation
   */
  private animation: Animation

  render() {
    const images = Array.from({ length: this.segments}, (_, i) => i)

    return html`
      ${
        images.map(i => (
          html`
            <section
              class="progress__bar"
              style="width: calc(100% / ${this.segments || 1})"
            >
              <div id="track-${i}" class="bar__track">
              </div>
            </section>
          `
        ))
      }
      <style>
        ${styles.toString()}
      </style>
    `
  }

  /**
   * Called every time this component is updated.
   * An update for this component means that a
   * 'previous' or 'next' was clicked. Because of
   * it, we need to cancel the previous animation
   * in order to run the new one.
   */
  updated() {
    if (this.animation) { this.animation.cancel() }

    const i = this.currentIndex
    const track = this.shadowRoot.querySelector(`#track-${i}`)

    if (track) {
      const animProps: PropertyIndexedKeyframes = {
        width: ['0%', '100%']
      }
      const animOptions: KeyframeAnimationOptions = {
        duration: this.duration,
        iterations: 1
      }
      this.animation = track.animate(animProps, animOptions)
      this.animation.onfinish = this.handler.onAnimationEnd || function () {}
    }
  }
}

export { Progress }

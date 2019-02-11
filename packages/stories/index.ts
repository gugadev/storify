import {
  LitElement,
  customElement,
  property,
  html
} from 'lit-element'
import styles from './index.pcss'
import '../story'
import '../progress'

@customElement('wc-stories')
class WCStories extends LitElement {

  @property({ type: Number }) duration = 5000
  
  @property({ type: Array }) images: string[] = []
  
  @property({ type: String }) effect = 'fade'

  @property({ type: Number }) height = 480

  @property({ type: Number }) width = 320

  @property({ type: Number }) current = 0

  handler = {
    onAnimationEnd: () => {
      this.current = 
        this.current < this.images.length - 1
        ? this.current + 1
        : 0
    }
  }

  goPrevious = () => {
    this.current = 
      this.current > 0
      ? this.current - 1
      : 0
  }

  goNext = () => {
    this.current = 
      this.current < this.images.length - 1
      ? this.current + 1
      : 0
  }

  render() {
    return html`
      <wc-stories-progress
        segments="${this.images.length}"
        duration="${this.duration}"
        current="${this.current}"
        .handler="${this.handler}"
      >
      </wc-stories-progress>
      <section class="touch-panel">
        <div @click="${this.goPrevious}"></div>
        <div @click="${this.goNext}"></div>
      </section>
      ${
        this.images.map((image: string, i: number) => (
          html`
            <wc-stories-story
              url="${image}"
              ?visible="${i === this.current}"
            >
            </wc-stories-story>
          `
        ))
      }
      <style>
        ${styles.toString()}
        :host {
          height: ${this.height}px;
          width: ${this.width}px;
        }
      </style>
    `
  }
}

export { WCStories }

import {
  LitElement,
  html,
  customElement,
  property
} from 'lit-element'
import styles from './index.pcss'
import '../progress'

@customElement('wc-stories-story')
class Story extends LitElement {

  /**
   * @description image absolute or relative url
   */
  @property({ type: String }) src = ''
  /**
   * @description checks if an image is available to show
   */
  @property({ type: Boolean }) visible = false

  render() {
    const opacity = /* this.visible ? 1 : 0 */ 1

    return html`
      <div class="${this.cssClass}">
        <img src="${this.src}" />
      </div>
      <style>
        ${styles.toString()}
        :host {
          opacity: ${opacity};
        }
      </style>
    `
  }

  get cssClass() {
    return [
      'stories__container__story',
      this.visible ? 'visible' : ''
    ].join(' ')
  }
}

export { Story }

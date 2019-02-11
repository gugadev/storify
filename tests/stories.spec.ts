/**
 * @author Gustavo Garzaki
 * 
 * Suite case. The demo contains
 * 5 pictures with 5 seconds of
 * delay between them.
 */
describe('Suite case', () => {

  beforeAll(async () => {
    try {
      await page.goto('http://localhost:4444')
    } catch (e) {
      console.error(e)
    }
  })

  it ('Should render', async () => {
    const container = await page.evaluate(() => (
      document
      .querySelector('wc-stories')
      .shadowRoot
      .querySelector('.wc-stories')
    ))
    expect(container).not.toBeUndefined()
  })

  it ('Should have 5 stories', async () => {
    const stories = await page.evaluate(() => (
      document
      .querySelector('wc-stories')
      .shadowRoot
      .querySelectorAll('wc-stories-story')
      .length
    ))
    expect(stories).toBe(5)
  })
})

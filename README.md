<h1 align="center">wc 🌐 stories</h1>

<p align="center">
Instagram/Whatsapp stories like built on Web Components and Web Animations API.
</p>

<br />

<!--
```
<custom-element-demo>
  <template>
    <head>
      <script src="https://unpkg.com/web-animations-js@2.3.1/web-animations.min.js"></script>
      <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.7/custom-elements-es5-adapter.js"></script>
      <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.7/webcomponents-loader.js"></script>
      <script defer src="https://unpkg.com/@gugadev/wc-stories@0.0.3/index.js"></script>
    </head>
    <wc-stories width="320" height="480" withShadow>
      <wc-stories-story src="https://gugadev.github.io/wc-stories/img/01.jpg"></wc-stories-story>
      <wc-stories-story src="https://gugadev.github.io/wc-stories/img/02.jpg"></wc-stories-story>
      <wc-stories-story src="https://gugadev.github.io/wc-stories/img/03.jpg"></wc-stories-story>
      <wc-stories-story src="https://gugadev.github.io/wc-stories/img/04.jpg"></wc-stories-story>
      <wc-stories-story src="https://gugadev.github.io/wc-stories/img/05.jpg"></wc-stories-story>
    </wc-stories>
  </template>
</custom-element-demo>
```
-->


## Demos

| [<img src="https://i.imgur.com/BNb7jEK.png?1" height="24"/>]() <br/>Vanilla JS | [<img src="https://i.imgur.com/PWBviOu.png?1" height="24"/>]() <br/> Angular | [<img src="https://i.imgur.com/vttMVID.png?1" height="24"/>]() <br/> React | [<img src="https://i.imgur.com/Xfm7eKj.png?1" height="24"/>]() <br/> Vue |
|------------|---------|-------|-----|
| <a href="https://gugadev.github.io/wc-stories" target="_blank">Link</a>          | <a href="https://angular-yhsvse.stackblitz.io/" target="_blank">Link</a>       | <a href="https://react-zf2tfr.stackblitz.io/" target="_blank">Link</a>     | <a href="https://vue-et4qky.stackblitz.io/" target="_blank">Link</a>   |

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions

---

## 📦 Install

```bash
npm i @gugadev/wc-stories
```

## 💡 What's the prupose of it?

Just fun 🙂. I love learn and code, so, this every time I have free time, pick some crazy idea or got inspiration from another projects and make it. 😋

## 🦄 Inspiration

When I saw the project of Mohit, [react-insta-stories](https://github.com/mohitk05/react-insta-stories), immediately wanted to know how complicated it would be to do the same thing using **Web Components**. So, I built this. Thanks, Mohit! 😃 

## ⚙️ How it works?

There are three components working together:

- `<wc-stories-story>`: this component shows a image. The maximun size of an image is the containers viewport.
- `<wc-stories-progress`>: this component shows the progress bar at top the the container. It uses **Web Animations API** to run it. If we change of image (clicking on left/right), the previous animation is cancelled.
- `<wc-stories>`: this is the main component. This one harbor the two components above. Here is the logic for control which image should be revealed, what happen if the user
clicks on left or right side, etc.

## 🚀 How to run?

After install depenencies, you just need to run `yarn start`. Once the server was started, go to [localhost:4444](http://127.0.0.1:4444) and see it in action.

## 🛠️ How to build?

Execute the `yarn build` command to compile the source code and get the ES5 equivalent. Compiled code will be available on `dist/` folder.

## 🙋 How to use it in my web/app?

First, we need to add the needed polyfills:

- `@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js`
- `@webcomponents/webcomponentsjs/webcomponents-loader.js`.
- `web-animations-js/web-animations.min.js`

### Web Components/Vanilla JavaScript
If you're using Web Components or vanilla JavaScript, just put the `wc-stories` tag inside your HTML and pass it the array of images:

```html
<wc-stories height="480" width="320" withShadow>
  <wc-stories-story src="/img/01.jpg"></wc-stories-story>
  <wc-stories-story src="/img/02.jpg"></wc-stories-story>
  <wc-stories-story src="/img/03.jpg"></wc-stories-story>
  <wc-stories-story src="/img/04.jpg"></wc-stories-story>
  <wc-stories-story src="/img/05.jpg"></wc-stories-story>
</wc-stories>
```

### React

If you're using React, use the component as is. Instead of passing raw values you can use `state` to
store the component configuration:

```javascript
export class MyComponent extends React.Component {
  this.state = {
    width: 320,
    height: 480,
    withShadow: true,
    stories: [
      '/path/to/image',
      '/path/to/image',
      '/path/to/image',
      ...
    ]
  }
  render() {
    return (
      <wc-stories
        width={this.state.height}
        height={this.state.width}
        withShadow={this.state.withShadow}
      >
      {
        this.state.stories.map(story => (
          <wc-stories-story src={story} />
        ))
      }
      </wc-stories>
    )
  }
}
```

### Angular

If you're using Angular, put the component inside your template. Like React, you can put the configuration inside the controller instead passing raw values:

```html
<template>
  ...
  <wc-stories [width]="storiesWidth" [height]="storiesHeight" withShadow>
    <wc-stories-story *ngFor="let story of stories" [src]="story">
    </wc-stories-story>
  </wc-stories>
</template>
```

```typescript
@Component({
  ...
})
class MyComponent implements OnInit {

  ngOnInit() {
    stories = [
      '/path/to/image',
      '/path/to/image',
      '/path/to/image',
      ...
    ]
  }
}
```

###  Vue

If you're using Vue, put the component inside your template. Like React, you can put the configuration inside the controller instead passing raw values:

```html
<wc-stories :width="storiesWidth" :height="storiesHeigh" :withShadow="withShadow">
  <wc-stories-story v-if="story of stories" :src="story"></wc-stories>
</wc-stories>
```

```javascript
export default {
  data: () => ({
    width: 320,
    height: 480,
    withShadow: tre,
    stories: [
      '/path/to/image',
      '/path/to/image',
      '/path/to/image',
      ...
    ]
  })
}
```

## 🆕 Lazy Loading

There are several ways to lazy loading images like _Low quality image placeholders_ and _progressive images_. This feature relies on the first one, so, in order to enable it, you need to pass, along with the images, the placeholders too.

**Tip:** you can generate lightweight svg LQIP from high resolution images using [sqip](https://github.com/technopagan/sqip).

```html
<wc-stories height="667" width="375" withShadow>
  <wc-stories-story src="img/01.jpg" placeholder="img/01.ph.svg"></wc-stories-story>
  <wc-stories-story src="img/02.jpg" placeholder="img/02.ph.svg"></wc-stories-story>
  <wc-stories-story src="img/03.jpg" placeholder="img/03.ph.svg"></wc-stories-story>
  <wc-stories-story src="img/04.jpg" placeholder="img/04.ph.svg"></wc-stories-story>
  <wc-stories-story src="img/05.jpg" placeholder="img/05.ph.svg"></wc-stories-story>
</wc-stories>
```

## 🚧 Roadmap

- [x] Implement Typescript
- [x] Implement PostCSS.
- [x] Make builds with Webpack.
- [x] Compile down to ES5.
- [x] Control animation's flow.
- [x] Orientation device support.
- [ ] Add mobile swipe support.
- [ ] Add more transition effects.
- [x] Add lazy loading support.
- [ ] Improve suite case.
- [x] Add demo page.
- [x] Publish the package to npm.

## 🙌 Contribute

If you found this project interesting, I'm glade to
receive updates, new features or fixes 🙂. Just
fork the project, create your branch, make your changes
and send your Pull Request! 😃

## 📖 API

### `<wc-stories>`

- `radius <number>:`: border radius. Default: 0.
- `startAt <number>`: initial image index to show. Default: 0.
- `duration <number>`: visibility time of images and animation.
- `height <number>`: self-explanatory.
- `width <number>`: self-explanatory.
- `withShadow <boolean>`: enable or disable drop shadow.

### `<wc-stories-story>`

- `src`: image relative or absolute URL
- `placeholder`: an image URL or a base64 string.

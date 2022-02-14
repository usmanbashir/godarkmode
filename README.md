# goDarkMode

A simple library for switching between Dark & Light mode on your website. It does this by managing the CSS class `dark` on your document element. **goDarkMode** is compatible with **TailwindCSS** and **Next.js**. But, you can also use it standalone in a vanilla JS project.

## Installation

Using npm:

```
$ npm install godarkmode
```

Using yarn:

```
$ yarn add godarkmode
```

Using unpkg CDN:
```
<script src="https://unpkg.com/godarkmode/goDarkMode.js"></script>
```

## Usage

**goDarkMode** is pretty simple. There is nothing to configure and it only has a single
method, `.goDarkMode``:

```JavaScript
// On a users first visit to the website, pick
// a mode based on their default OS settings.
//
// On future visits, just pick their saved choice.
const mode = goDarkMode('auto') // => 'dark' || 'light'


// For the website to use the dark mode either
// based on your preference or the users pick
// via the UI.
//
// You just need to specify the dark mode.
const mode = goDarkMode('dark') // => 'dark'


// For the website to use the light mode either
// based on your preference or the users pick
// via the UI.
//
// You just need to specify the light mode.
const mode = goDarkMode('light') // => 'light'
```

## Usage with Next.js

To avoid the package from breaking your Next.js build as it is only meant to be used in a browser environment. You need to install the `next-transpile-modules` package and configure your `next.config.js` file accordingly.

```JavaScript
// next.config.js

const withTM = require('next-transpile-modules')(['godarkmode'])

module.exports = withTM({
  reactStrictMode: true,
})
```

Followed by wherever you are calling the `goDarkMode` method, make sure to check it is only called when running inside of a browser environment.

```JavaScript
typeof window !== 'undefined' && goDarkMode('auto');
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/usmanbashir/godarkmode/issues)
- Fix bugs and [submit pull requests](https://github.com/usmanbashir/godarkmode/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

## Credit

**goDarkMode** is made by [Usman Bashir](https://usmanbashir.com). Keep in touch with me by subscribing to [The Weekly Dispatch](https://twd.usm.io/) newsletter.

## License

[MIT](./LICENSE.txt)
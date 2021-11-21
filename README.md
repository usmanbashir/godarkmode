# goDarkMode

A simple library for switching between Dark & Light mode on your website. It does this by
managing the `dark` CSS class on your document. **goDarkMode** is also fully compatible with
TailwindCSS, as it was originally designed to be used with it.

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
<script src="https://unpkg.com/godarkmode/index.js"></script>
```

## Usage

**goDarkMode** is pretty simple. There is nothing to configure and it only has a single
method, `.goDarkMode``:

```JavaScript
// On users first visit to the website, pick
// a mode based on their default OS settings.
//
// On future visits, just pick their saved choice.
const mode = goDarkMode({mode: 'auto'}); // => 'dark' || 'light'


// For the website to use the dark mode either
// based on your preference or the users pick
// via the UI.
//
// You just need to specify the dark mode.
const mode = goDarkMode({mode: 'dark'}); // => 'dark'


// For the website to use the light mode either
// based on your preference or the users pick
// via the UI.
//
// You just need to specify the light mode.
const mode = goDarkMode({mode: 'light'}); // => 'light'
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/usmanbashir/godarkmode/issues)
- Fix bugs and [submit pull requests](https://github.com/usmanbashir/godarkmode/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

## Credit

**goDarkMode** is made by [Usman Bashir](https://usmanbashir.com). Keep in touch with me by subscribing to my [The Weekly Dispatch](https://twd.usm.io/) newsletter.

## License

[MIT](./LICENSE.txt)
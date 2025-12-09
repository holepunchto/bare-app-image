# bare-app-image

AppImage packaging tools for Bare.

```
npm i bare-app-image
```

## Usage

```js
const { createAppImage } = require('bare-app-image')

await createAppImage('./path/to/my.AppDir', './app.AppImage')
```

## API

#### `await createAppImage(source[, destination][, options])`

Options include:

```js
options = {
  compression,
  sign,
  key
}
```

## License

Apache-2.0

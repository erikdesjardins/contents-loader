# contents-loader [![Build Status](https://travis-ci.org/erikdesjardins/contents-loader.svg?branch=master)](https://travis-ci.org/erikdesjardins/contents-loader)

Webpack loader to import the contents of a directory.

For a directory structure like:

```
└── abc
    ├── foo.js
    ├── bar.js
    ├── baz.js
    ├── somethingElse.txt
    └── styles.css
```

`contents-loader!./abc/` generates code like:

```js
import * as _0 from "./abc/foo.js";
import * as _1 from "./abc/bar.js";
import * as _2 from "./abc/baz.js";
export default { "foo.js": _0, "bar.js": _1, "baz.js": _2 };
```

If you're using vanilla Webpack, this loader has little advantage over the [built-in](https://webpack.js.org/guides/dependency-management/#require-context) `require.context('./abc', false, /\.js$/)`. If, however, you're using [`webpack-rollup-loader`](https://github.com/erikdesjardins/webpack-rollup-loader) or similar, `require.context` will only be processed by Webpack, resulting in suboptimal code generation.

## Installation

`npm install --save-dev contents-loader`

## Usage

```js
// trailing slash is important
import modules from 'contents-loader!./path/to/directory/';

// use the `match` option to specify which files to import
// (defaults to `/\.js$/i`)
import images from 'contents-loader?match=\\.png$!./path/to/images/';
```

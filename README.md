# directory-loader [![Build Status](https://travis-ci.org/erikdesjardins/directory-loader.svg?branch=master)](https://travis-ci.org/erikdesjardins/directory-loader)

Webpack loader to import all files in a directory.

For a directory structure like:

```
└── abc
    ├── foo.js
    ├── bar.js
    ├── baz.js
    ├── somethingElse.txt
    └── styles.css
```

`directory-loader!./abc/` generates code like:

```js
import * as foo from './abc/foo.js';
import * as bar from './abc/bar.js';
import * as baz from './abc/baz.js';
export { foo, bar, baz };
```

If you're using vanilla Webpack, this loader has little advantage over the [built-in](https://webpack.js.org/guides/dependency-management/#require-context) `require.context('./abc', false, /\.js$/)`. If, however, you're using [`webpack-rollup-loader`](https://github.com/erikdesjardins/webpack-rollup-loader) or similar, `require.context` will only be processed by Webpack, resulting in suboptimal code generation.

## Installation

`npm install --save-dev directory-loader`

## Usage

```js
// trailing slash is important so Webpack resolves the correct context
import modules from 'directory-loader!./path/to/directory/';

// use the `match` option to import other file types with regex (defaults to `/\.js$/i`)
import images from 'directory-loader?match=\\.png$!./path/to/images/';
```

EventDispatcher demo for PHPify
===============================

Demo of compiling Symfony's [`EventDispatcher` component](http://symfony.com/doc/current/components/event_dispatcher.html) to JavaScript, as used in the docs for [PHPify](https://github.com/uniter/phpify).

An extra script has been added to `package.json` in this repo:

```json
    "build": "mkdir -p dist && browserify index > dist/bundle.js"
```

so that you can just run `npm run build` to rebuild the JS bundle after making any changes.

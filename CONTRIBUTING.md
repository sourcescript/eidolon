# Contribution

If you think there's room for improvement or see it broken feel free to submit a patch. We'll accept a patch through any medium: GitHub pull requests, gists, emails, gitter.im snippets, etc. Tests aren't obligatory but well-appreciated.

For questions, just post an issue, thanks.

## Coding Style

We use [EditorConfig](editorconfig.org) for basics and encourage you to install its plugin on your text editor of choice. This will get you 25% of the way there.

### CSS

- Keep variables at the **base** level and simple.
- We will follow [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

### JS

Just following the current style (check the files), and you'll be fine. Note that we are writing in ES6. We loosely follow the [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript/tree/es6) with a few notable exceptions.

In summary,

- Use semicolons;
- Commas last,
- 2 spaces for indentation (no tabs)
- Prefer `'` over `"`
- 80 character line length
- "Attractive"
- Do not use the optional parameters of setTimeout and setInterval

## Building

This project uses [**Mocha**](mochajs.org), [**Chai**](chaijs.org), [**Sinon**](sinonjs.org), and [Karma](karma-runner.github.io) (test runner).

We put our tests of each file in the `__tests__` directory in the same folder.

## Automation

```bash
$ npm test # run the tests
$ npm run script # build scripts
$ npm run style # build sass
$ npm run build # run `script` and `style`
$ npm run eslint # lint
```

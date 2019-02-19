# Because NPM

## Alternatives

- libhunt.com
- alternativeto.net

## Info

### Percy Info

- Storybook config for Percy [here](https://github.com/percy/percy-storybook/blob/master/integration-tests/storybook-for-react/storybook/config.js)

## Todo

- apollo-link-batch-http
- Reduced motion media query https://css-tricks.com/introduction-reduced-motion-media-query/
- stop all icons being included
- Use fragments with Apollo again
- section elements should have aria-labelledby or aria-label
- grid layout https://bitsofco.de/holy-grail-layout-css-grid/
- keep an eye on [Hermes](https://github.com/convoyinc/apollo-cache-hermes), an alternative Apollo cache
- http://localhost:3000/?react_perf for [react perf testing](https://reactjs.org/blog/2016/11/16/react-v15.4.0.html#profiling-components-with-chrome-timeline)
- structure:

```
html
    body
        header
            h1
            nav
        main
            ...
        footer
            nav or not
```

### Server changes

- Search needs to return `formik` package in results if searching for 'form'.
  - One approach is to add keywords to ES, with a low weight. (Those terms
    need to not already be in the fields.)
- Implement a get whole page info query

## Known Issues

The following error [should be solved](https://github.com/ReactTraining/react-router/issues/6420) with the next release of React Router:

```
Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
```

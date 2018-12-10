# Because NPM

## Todo

- Reduced motion media query https://css-tricks.com/introduction-reduced-motion-media-query/
- stop all icons being included
- Use fragments with Apollo

### Server changes

- Search needs to return `formik` package in results if searching for 'form'.
  - One approach is to add keywords to ES, with a low weight. (Those terms
    need to not already be in the fields.)
- Implement a get whole page info query

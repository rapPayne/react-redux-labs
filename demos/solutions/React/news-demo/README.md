# News demos

## Tech
1. [TypeScript](#typescript)
1. Redux
1. React-Redux
1. [Nested Components](#nested-components)

### TypeScript
Shows how to use TypeScript with React. TS was added to this project after-the-fact, not as part of `create-react-app --template typescript`

It is especially useful for seeing how Redux and TS work together because we've added it to the reducer, action creators, and middleware.

### Nested Components
In the Footer component, there are two nested components. This shows how a dev can put other JSX inside the open and close tags of a JSX component. The trick is to use the `props.children` inside of that component to render the nested components.
# New final solution using features of React 19

React 19 was a game-changer in many ways. The new features changed the ways we do 
so many things in React. This new final solution is a refactor of the previous 
solution using the new features of React 19.

## Review this, RAP
https://www.youtube.com/watch?v=WHKvhMKV_-0


## New features used in this solution
### Actions???
- Updating the state of a component can now be done using actions. 
- *Server* actions are only in projects with NextJS, TanStack, etc. 
- Client actions are a thing, but they're just functions.
- Actions can compose (?)
```typescript
// formAction.js
'use server';
export async function submitData(formData) {
  const data = Object.fromEntries(formData);
  console.log(data);  // Shows on the server, not the browser
  return { success: true };
}
```
#### This solutions uses Actions
- TBD: Not done yet.

### Form actions???
- These notes were written in January, 2025 when React was at 19.0.0. They are true as of then and hopefully will change.
- Idea taken from NextJS. No need for onSubmit/onClick handler. Instead of onSubmit/onClick, we pass an action to the <form>, <input>, and <button>.
- The Action will receive the `FormData`, so that the fields of the form may be unwrapped.
- When submitting the `<form action={foo}>`, the action is run. Upon completion of the action, it does NOT re-run the function like a useState or useReducer would. But the data is re-rendered.
- Important! Form fields must have a `name` attribute to be included in the FormData.
- The React documentation says that <form>, <input>, and <button> can now receive an action but I can only get `<form action={foo}>` to work. `<input>` and `<button>` throw in the browser with "You can only pass the action prop to <form>. Use formAction on <input> and <button>." But formAction does nothing. Nothing until you wrap the <button> in a <form>. Then, apparently, you're assigning the action to the <form> itself. But it seems better to just put the action on the form.
- As of Jan 2025, linters still say the `action` should be a string. But it really should be an Action (aka. function) that returns void.
```typescript
"use server"; // <-- Not sure this is really needed
const submitData = async (formData) => {
  const newUser = {
    username: formData.get('username'),
    email: formData.get('email'),
  };
  console.log(newUser);
};

const Form = () => (
  <form action={submitData}>
    <input type="text" name="username" placeholder="Name" />
    <input type="email" name="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
);
```
#### This solutions uses Actions
- TBD: Not done yet.


### useActionState
Tracks the async action of a <form>. We pass an Action/function to it and it returns an array with:
- state: The new state
- dispatch: A new Action function. Usually attached to the action of a form
- isPending: A boolean. True if the action is pending. False if resolved.
```javascript
const [state, submitAction, isPending] = useActionState(
  async (previousState, newName) => {
    const newPerson = await updateName(newName);
    return newPerson;
  },
  initialPerson,
);
```
Notes:
- Can also pass in `useActionState(action, initialState, permalink)`. Not sure what permalink does.
- Briefly called `useFormState` in a canary release.
#### This solution uses useActionState
- Login.tsx
- On submit of the username/password, it logs the user in and returns the logged-in user.
- Shows a "Loading ..." until the server returns.

### use
The `use` keyword is a new feature that allows async operations to be done in a
more readable way, especially fetching data from a server. It receives a promise. When that promise resolves, it unwraps the promise and puts the value in the someValue variable and re-draws.
- const someValue = use(somePromise);
- `use` is not a hook. It has a few rules, but they're not the same as all hooks.
  - Can use it in an `if`.
  - Cannot use use in a try-catch block. (Weird).
  - Can you use it in a `while` or a `for`?
- `use` has GOT to have an implicit/behind-the-scenes async/await somewhere because if you use a `use` without wrapping it in  `<Suspense>`, it throws in the browser with "Uncaught Error: async/await is not yet supported in Client Comments, only Server Components. This error is often caused by accidntally adding `'use client'` to a module that was originally written for the server."
- So always use it with `<Suspense>`.
- It does NOT cause a rerender of the component. Instead, it pauses the render, shows the <Suspense> fallback message until the Promise is resolved, then shows the data.
- `use` must be inside a component whose promise is defined elsewhere, often through props or Context. Don't know why but this means that the promise must be defined above the component and provided somehow. Bottom line: you can't make it work by defining the promise in the same component as the use.
- Furthermore, if the component with the `use` causes itself to rerender, make sure the use is in a conditional or something to prevent endless loops.
#### This solution uses use
the `use` keyword to fetch data.
- Look in App.tsx for the promise.
- Look in FilmsList.tsx for the `use` keyword.


### useFormStatus
For tracking the overall state of a __parent__ form, the form in a component that is one React level above this one. useFormStatus reads the status of the parent <form> as if the form was a Context provider.
- This is written in January 2025. As of today, useFormStatus is in the [react.dev v19 documentation](https://react.dev/reference/react-dom/hooks/useFormStatus) but VS Code's linter claims it isn't there when imported. It totally is. Ignore the linter.
- Returns an object with four properties:
  - pending: A boolean. True if the form is pending. False if resolved.
  - data: The FormData from the `<form>`.
  - method: "get" or "post"? (Yes, lowercase evidently).
  - action: The action of the form. like with useActionState?
- "Wait! This sounds like useActionState!". Welp, useFormStatus watches the <form> and useActionState watches the *submission* of the form.

```javascript
import {useFormStatus} from 'react-dom';
function Foo() {
  return (
    <form action={submitData}>
      <TheButton />
    </form>
  )
}
function DesignButton() {
  const {pending} = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
```
#### This solution uses useFormStatus
- Account.tsx - When the register form is submitted, the save button is disabled and we briefly flash the values that are being submitted. 
- Note, the flashing values is terrible UX but added only for demonstration of `status.data`.

### useOptimistic???
- Use use, useOptimistic, and useFormStatus together?
Display the new name immediately. Then, if the server returns an error, revert to the previous name.
Example: You're changing your name. You want to see the new name immediately, but if the server returns an error, you want to revert to the previous name.
Receives a stateful variable and returns a new stateful variable and a setter function like with setState(). 
[This article](https://dev.to/michael-herrick/react-19-update-notes-companion-38gg) says you pass in a setter function. Skeptical. :ponder:


The useOptimistic hook will immediately render the optimisticName while the updateName request is in progress. When the update finishes or errors, React will automatically switch back to the currentName value.
```javascript
function ChangeName({currentName, onUpdateName}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async formData => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}
```


### Static APIs, prerender and prerenderToNodeStream???
Prerenders on the server when there's streaming going on.
Feels like not a good use of time to focus on this. Prolly won't be used much.

### Server components???
Rap, are these just non-dynamic components that are prerendered on the server? And are they auto-detected? (I think yes)
Doesn't feel fully-baked. Defer until later.
Do I name them ServerComponent.tsx or .server.tsx to make them server components?

### Server Actions???
"use server"
Not to be confused with Server Components. They do NOT use the "use server" directive.
```javascript
```

### useDeferredValue???
Dsiplays the initialValue until the deferredValue is ready. When you have a slower function or async but you want to have a responsive interface. You want it to display immediately but the data will take a while to load, you need to display a temporary value until the data is ready.
- RAP: How is this different to useOptimistic?
```typescript
function Search({deferredValue}) {
  // On initial render the value is ''.
  // Then a re-render is scheduled with the deferredValue.
  const value = useDeferredValue(deferredValue, '');
  
  return (
    <Results query={value} />
  );
}
```

### Metadata
```typescript
function BlogPost({post}) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
      <p>
        Eee equals em-see-squared...
      </p>
    </article>
  );
}
```

### preloading resources???
preinit, preload, prefetchDNS, preconnect


### useTransition???
Not sure this is part of React 19 but we should cover it.
When you submit a form with an action, the action function is automatically wrapped in a 'transition'. It ensures that all state updates happen as a unit and wait until they're finished. aka. They batch. No promises needed.
Transitions will be a theme in all of React 19.  
Handles temporary UI states during data fetching.
RAP: This seems redundant with so many other new features like use, useFormStatus, useActionState, useOptimistic, useDeferredValue. What's real?
Concurrent rendering? Processing updates in the background? 
```
const [isPending, startTransition] = useTransition();

function handleClick() {
  startTransition(() => {
    setExpensiveState(someLargeData);
  });
}
```






### useEvent???
Ummm Avoiding unnecessary re-renders
```javascript
const handleClick = useEvent(() => {
  console.log('Clicked!');
});
<button onClick={handleClick}>Click me!</button>
```


### Context improvemnts
Rap, don't put this here. Change the slide deck. You no longer need to ...
'''TypeScript
const FooContext = createContext('');
<FooContext.Provider value={'bar'}>...</FooContext.Provider>
```
Instead you'll go...
```TypeScript
const FooContext = createContext('');
<FooContext value={'bar'}>...</FooContext>
```

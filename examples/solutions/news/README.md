# News demo

This project has been `npm eject`ed so you can see what one looks like.

## Authentication simulation
You'll see an authentication folder with some components that pretend to handle authentication. Our 'database' (cough cough) is a local variable called `userTable`. After you register and logout, you can log back in with the credentials you registered with.
- Login
- Logout
- Register

## Tech used
- [Material Design Lite](http://getmdl.io) for the look-and-feel. Using CSS and JS from them. This creates the components by setting classNames and the menu animations.
- [Hooks throughout](hooks_used)
- React Router v5

### Hooks used
- useRef. In `<Login>`, we get the value from the `<input>` boxes with a ref.
- useEffect. In `<App>` we fetch the news stories on first render.
- useState. In `<App>` we're setting the set of stories and the `user` object.

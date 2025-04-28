# Hooks demos
- [useContext](#useContext)
- [useReducer](#useReducer)

## useContext
The starter file passes props down through five levels of components using props drilling. The solution sends a value directly from the highest level down to the lowest level which is read via the useContext hook.

Let's say you need to have two values set at the top of 
the tree and read many levels deep. You can either use props drilling or useContext.

In this example, we're using props drilling to pass the UUID down through all levels. It adds complexity to every middle component to deal with that ID because each level reads id from props and then passes it down to a child component.

Contrast that to the 'toggle' value. That value is set at the topmost component and read in the lowest component. Both are fairly simple but the middle components are _much_ simpler because they don't deal with the 'toggle' value at all.

Note that using a `<Provider value="">` component, we can set the value. You can see that happen if toggle the checkbox.

## useReducer
A triadic color scheme involves three colors that look good together on a web site. Let's create a tool that will provide you with a three-color scheme if you pick a color.

useReducer will help us with all of the calculations. 

The user can choose the amount of red, green, and blue by moving the sliders between 0 and 255. Each change of the slider triggers the reducer.

The starter file uses useState. The solution uses useReducer.

Steps:
1. Add the initialState. It should have values for color1, color2, color3.
2. Add the reducer. It handles three actions, SET_RED, SET_GREEN, SET_BLUE. Each will add its value to color1. Then it calculates color2 and color3, returns them all in a new state object.
3. import `useReducer`. Note that you no longer need `useState`, `useEffect`, or `useRef`. 
4. Comment out the useState, useEffect, and useRef sections. Note that this makes the component much simpler!
5. Add the useReducer line:
```JavaScript
const [state, dispatch] = useReducer(reducer, initialState)
```
6. Decompose the local variables used in the component (optional)
```JavaScript
const { color1, color2, color3 } = state;
const { red, green, blue } = color1;
```
7. Find the sliders and replace the setRed/setGreen/setBlue with dispatch. Here's the red one:
```JavaScript
{/* <input type="range" value={red} onChange={e => setRed(+e.target.value)} min="0" max="255" style={styles.slider} /> */}
  <input type="range" value={red} onChange={e => dispatch({ type: "SET_RED", value: +e.target.value })} min="0" max="255" style={styles.slider} />
```

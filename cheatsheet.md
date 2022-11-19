# React cheatsheets

## JavaScript things



I often hear, "Dang! I thought I knew JavaScript. Where can I read up on some of these confusing features?" 

Here are some:
* [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 
  * The `=>` operator
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
  * The `??` operator
* [Elvis operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
  * The `?` operator
* [Array prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Ternaries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  * The `? - :` operator
* [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  * importing and exporting
* [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  * The `...` operator
* [Default function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

* [Object property shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
* [Strings with backtics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  * The `` operator



## HTML things

## CSS things

### Grid layout

### Flex layout



## Browser things

### To see something in the browser console
1. Hit F12 in Windows or cmd-opt-i in MacOS
2. Click the hamburger menu and choose *other tools-developer tools* then choose "Console" in the tab.
3. Right-click the page, choose *Inspect* and then choose "Console" in the tab.

## To view network traffic
Just like above, get the dev tools open but then hit the "Network" tab. You'll be able to see every request and response. Clicking on a request will show you its details.

## React things

### useEffect

### Exhaustive dependencies
When useEffect has a dependency which is not listed in the dependency array, you may have some headaches in debugging issues as a result. So the best practice is to list every single one and to enable the exhaustive dependency linting rule. That is our official position.

However we are very aware of the controversy around this topic and the confusion caused by it so, for the purposes of a beginner class that already has a HUGE concept count, we've chosen to not make a big deal of emphasizing exhaustive dependencies. Our goal is for people to learn best practices but not at the expense of them quitting because "React is too hard to learn." Please don't judge us too harshly; we all have to make tradeoffs.  


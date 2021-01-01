# Marvel Comics App

## Tech used
1. Expo
2. TypeScript
3. Axios
4. The Marvel Comics API
4. TDD
5. Jest
6. React Native Testing Library
8. Redux

### Expo
The app was initialized with 
```bash
expo init  --npm
```
The *minimal* config with TypeScript was chosen.

### TypeScript

### Axios
Rather than using the built-in `fetch` command, we said `npm install axios@latest` and used Axios to make HTTP requests.

### TDD

### Jest
Note that if we're using TypeScript, our `describe`s, `test`s, `it`s, and `expect`s all were unrecognized by the IDE. They are 100% legal but if the testing file is a `.ts` file as opposed to a `.js` file, TypeScript gets mad. So we had to 
```bash
npm install @types/jest --save-dev
```
This placated the IDE/TypeScript transpiler. 

Also, if you name the testing files `Foo.js` or `Foo.spec.js`, it is fine. But if you name it with a `.ts` it won't compile. TypeScript gets mad about rendering any JSX. So you have to name it with a `.tsx` extension. Then TypeScript is satisfied. So I went to a convention of `Foo.spec.tsx` for the testing files.

(Now someone tell me how TypeScript makes this situation better. It doesn't. It just adds friction.)

### Redux
Installed via
```bash
npm install redux
npm install @types/redux # Because of TypeScript
```

Read more about using Redux with TypeScript [here](https://redux.js.org/recipes/usage-with-typescript/).


### Redux-saga
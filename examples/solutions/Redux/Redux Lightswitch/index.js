const root = document.getElementById("root");

const reducer = (state, action) => {
  return { switchPosition: (state.switchPosition === "on") ? "off" : "on" }
};

const intialState = { switchPosition: "Off" };

const store = Redux.createStore(reducer, initialState);

root.addEventListener("click", (e) => {
  console.log("flipped");
  store.dispatch({ type: "FLIP" });
});
root.innerText = store.getState().switchPosition;
function setLabel() {
  root.innerText = store.getState().switchPosition;
}
store.subscribe(setLabel);
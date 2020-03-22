import React, { useState } from "react";


export const FormDemo = () => {
  const [state, setState] = useState({ first: "Rap", size: "l", birthdate: (new Date()).toISOString().split('T')[0] });
  console.log(state);
  return (
    <>
      <h1>Forms demo</h1>
      <form>
        {/* A text input (aka textbox) */}
        <section>
          <label htmlFor="first">First</label>
          <input name="first" value={state.first} onChange={setIt} id="first" />
        </section>

        {/* A select list (dropdown or listbox) */}
        <section>
          <label htmlFor="soda">Soda</label>
          <select value={state.soda} name="soda" onChange={setIt} id="soda">
            <option>Choose one ...</option>
            <option value="p">Pepsi</option>
            <option value="r">Royal Crown Cola</option>
            <option value="c">Coca Cola</option>
          </select>
        </section>

        {/* A checkbox */}
        <section>
          <label htmlFor="new">New?</label>
          <input
            type="checkbox"
            value={state.new}
            checked={state.new}
            name="new"
            onChange={setIt}
            id="new"
          />
        </section>

        {/* A radio group */}
        {/* The 'checked=' attribute is only needed to set initial value */}
        <section>
          <label>
            <input
              type="radio"
              value="xl"
              name="size"
              onChange={setIt}
              checked={state.size === "xl"}
            />
            32 oz
          </label>
          <label>
            <input
              type="radio"
              value="l"
              name="size"
              onChange={setIt}
              checked={state.size === "l"}
            />
            20 oz
          </label>
          <label>
            <input
              type="radio"
              value="s"
              name="size"
              onChange={setIt}
              checked={state.size === "s"}
            />
            12 oz
          </label>
        </section>

        {/* A textarea (aka multiline textbox) */}
        {/* Behaves just like a regular textbox */}
        <section>
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" value={state.comments} onChange={setIt} id="comments" />
        </section>

        {/* A date input (aka calendar) */}
        {/* The only trick to this one is the initial value must be 'yyyy-mm-dd' */}
        <section>
          <label htmlFor="birthdate">Birthdate</label>
          <input type='date' name="birthdate" value={state.birthdate} onChange={setIt} id="birthdate" />
        </section>

      </form>
    </>
  );

  function setIt(e) {
    console.log('setting')
    const newState = { ...state };
    switch (e.target.type) {
      case "checkbox":
        newState[e.target.name] = e.target.checked;
        break;
      case "radio":
        newState[e.target.name] = e.target.value;
        break;
      default:
        newState[e.target.name] = e.target.value;
    }
    setState(newState);
  }
};

//export default App;

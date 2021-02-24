import { useState, useEffect, useRef } from 'react';
//import { useReducer } from 'react';
import { Color } from './Color';
import { rgbToHsl, hslToRgb, getNextTriadHue } from '../helpers/colorHelpers';

// const initialState = {
//   color1: { red: 128, green: 128, blue: 128 },
//   color2: { red: 128, green: 128, blue: 128 },
//   color3: { red: 128, green: 128, blue: 128 },
// };
// const reducer = (state, action = {}) => {
//   let color1;
//   switch (action.type) {
//     case "SET_RED":
//       color1 = { ...state.color1, red: action.value };
//       break;
//     case "SET_GREEN":
//       color1 = { ...state.color1, green: action.value };
//       break;
//     case "SET_BLUE":
//       color1 = { ...state.color1, blue: action.value };
//       break;
//     default:
//       return state;
//   }
//   const [color2, color3] = getTriadColors(color1);
//   return { ...state, color1, color2, color3 };
// }

export const UseReducerDemo = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // const { color1, color2, color3 } = state;
  // const { red, green, blue } = color1;

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  let color1 = useRef({ red, green, blue });
  let color2 = useRef({ red: 0, green: 0, blue: 0 });
  let color3 = useRef({ red: 0, green: 0, blue: 0 });

  useEffect(() => {
    color1.current = { red, green, blue };
    const hsl = rgbToHsl(color1.current)
    color2.current = hslToRgb({ ...hsl, hue: getNextTriadHue(hsl.hue) });
    color3.current = hslToRgb({ ...hsl, hue: getNextTriadHue(getNextTriadHue(hsl.hue)) });
  }, [red, green, blue])

  return (
    <section style={styles.mainWrapper}>
      <section style={styles.slidersSection}>
        <h1>Triad color theme generator</h1>
        <p>A triad are three colors that are proven to look nice together. To create a triad, adjust the red, green and blue sliders to design your main color. We'll provide the other two as you go.</p>
        <div className="styles.sliderDiv">
          <label>Red
            <input type="range" value={red} onChange={e => setRed(+e.target.value)} min="0" max="255" style={styles.slider} />
            {/* <input type="range" value={red} onChange={e => dispatch({ type: "SET_RED", value: +e.target.value })} min="0" max="255" style={styles.slider} /> */}
          </label>
        </div>
        <div className="styles.sliderDiv">
          <label>Green
            <input type="range" value={green} onChange={e => setGreen(+e.target.value)} min="0" max="255" style={styles.slider} />
            {/* <input type="range" value={green} onChange={e => dispatch({ type: "SET_GREEN", value: +e.target.value })} min="0" max="255" style={styles.slider} /> */}
          </label>
        </div>
        <div className="styles.sliderDiv">
          <label>Blue
            <input type="range" value={blue} onChange={e => setBlue(+e.target.value)} min="0" max="255" style={styles.slider} />
            {/* <input type="range" value={blue} onChange={e => dispatch({ type: "SET_BLUE", value: +e.target.value })} min="0" max="255" style={styles.slider} /> */}
          </label>
        </div>
      </section>

      <section style={styles.threeColorsSection}>
        <section style={styles.oneColorSection}>
          <h1>Main Color</h1>
          <Color color={color1} />
        </section>
        <section style={styles.oneColorSection}>
          <h1>Color 2</h1>
          <Color color={color2} />
        </section>
        <section style={styles.oneColorSection}>
          <h1>Color 3</h1>
          <Color color={color3} />
        </section>
      </section>

    </section>
  )
}

const styles = {
  mainWrapper: {
    padding: '30px',
  },
  slidersSection: {
  },
  threeColorsSection: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  oneColorSection: {
  },
  sliderDiv: {
    margin: '20px',
  },
  slider: {
    width: '100%',
  }
}


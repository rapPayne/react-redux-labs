
const colorPalette = {
  black: "#000", white: "#fff",
  red: "#e04546", green: "#46e045", blue: "#4546e0",
  lightRed: "#ffecec", lightGreen: "#ecffec", lightBlue: "#ececff",
}

const colors = {
  text: {
    color: colorPalette.black,
    backgroundColor: colorPalette.white,
  },
  sections: {
    borderColor: colorPalette.blue,
    backgroundColor: colorPalette.lightBlue,
  },
  inputs: {
    borderColor: colorPalette.blue,
    backgroundColor: colorPalette.lightBlue,
  }
}

const layouts = {
  text: {
  },
  sections: {
    borderWidth: '1px',
    borderRadius: '5px',
  },
  inputs: {
    borderTop: 0, borderRight: 0, borderLeft: 0,
  }
}

const text = {
  body: {
    fontSize: "10px",
  },
  headline: {
    fontSize: "24px",
  }
}

export const themes = {};
themes.normal = { colors, layouts, text, foo:"light" }
themes.light = themes.normal;
themes.dark = {
  ...themes.normal,
  foo: "dark",
  colors: {
    ...themes.normal.colors,
    text: {
      ...themes.normal.colors.text,
      color: colorPalette.white,
      backgroundColor: colorPalette.black,
    },
    sections: {
      ...themes.normal.colors.sections,
      borderColor: colorPalette.lightBlue,
      backgroundColor: colorPalette.blue,
    },
    inputs: {
      ...themes.normal.colors.inputs,
      borderColor: colorPalette.lightBlue,
      backgroundColor: colorPalette.blue,
    },
  }
}

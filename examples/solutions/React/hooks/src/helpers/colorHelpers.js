/*
*/
export function getNextTriadHue(oldHue) {
  let nextHue = oldHue + 1/3;
  return nextHue > 1 ? nextHue-1 : nextHue;
}
/**
 * Receives a color object and returns an array of two triadic
 * complementary colors.
*/
export const getTriadColors = (color1) => {
  const hsl = rgbToHsl(color1)
  const color2 = hslToRgb({ ...hsl, hue: getNextTriadHue(hsl.hue) });
  const color3 = hslToRgb({ ...hsl, hue: getNextTriadHue(getNextTriadHue(hsl.hue)) });
  return [color2, color3]
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes red, green, and blue are numbers between 0 and 255 and
 * returns hue, saturation, and lightness as numbers between 0 and 1.
 *
 * @param   {Object}  red, green, blue  The primary color value
 * @return  {Object}   The HSL representation
 */
export function rgbToHsl({red:r, green:g, blue:b}) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default:
        throw new Error("Bad value for hue")
    }
    h /= 6;
  }

  return {hue:h, saturation:s, lightness:l};
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
export function hslToRgb({hue:h, saturation:s, lightness:l}){
  var r, g, b;

  if(s === 0){
      r = g = b = l; // achromatic
  }else{
      const hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return { red: Math.round(r * 255), 
    green: Math.round(g * 255), 
    blue: Math.round(b * 255),
  };
}

export function rgbToHexCode({red:r, green:g, blue:b}) {
  return `#${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`;

  function colorToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
}

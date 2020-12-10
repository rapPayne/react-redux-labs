import { rgbToHexCode } from '../helpers/colorHelpers';

export const Color = ({ color }) => {
  const { red = 0, green = 0, blue = 0 } = color;
  const divStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    height: '100px', width: '100px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center', justifyContent: 'center',
  }
  return (
    <section style={styles.wrapper}>
      <div style={divStyle}>
        {red} {green} {blue}
      </div>
      <section>
        <p>Hex: {rgbToHexCode(color)}</p>
        <p>Red: {red}</p>
        <p>Green: {green}</p>
        <p>Blue: {blue}</p>
      </section>
    </section>
  )
}

const styles = {
  wrapper: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
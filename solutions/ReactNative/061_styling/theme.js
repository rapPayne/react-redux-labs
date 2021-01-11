import { Platform } from "react-native";

const palette = {
  black: '#000',
  white: '#fff',
  red: '#f00',
  green: '#76fc97',
  blue: '#190adf',
  beige: '#e7e5a2',
  orange: '#cc5500',
}
const colors = {
  mainDark: palette.black,
  mainLight: palette.white,
  altDark: palette.blue,
  altLight: palette.beige,
  selectedFilmBackground: palette.beige,
  seatIsTakenBackground: palette.red,
  seatIsSelectedBackground: palette.orange,
}
const text = {
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  companyName: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Platform.OS ==='ios' ? 'Palatino' : 'serif',
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  showingTimesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 20,
  },
  ratingSmallText: {
    fontSize: 12,
  },
}

export const theme = {colors, text};
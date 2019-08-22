import { Platform } from 'react-native';

export const host = Platform.select(
  {ios: 'http://localhost:5000', android: 'http://10.0.2.2:5000'}
);
// When consuming an API, we need a host server. To point to the wrong one causes a failure.
//"http://localhost:5000";  Works on iOS simulators but fails on Android emulator
//"http://10.0.2.2:5000";   Works on Android emulator via Android Studio
//"http://10.0.3.2:5000";   Works on Android emulator via Genymotion

//A tethered device will need to use your laptop's IP address

// Returns "<dayofweek>, <month> <date>""
export const formatShowingDate = showing_time => {
 const daysofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
 const dow = daysofweek[showing_time.getDay()];
 const mon = showing_time.getMonth();
 const dom = months[showing_time.getDay()];
 console.log(`${dow} ${mon} ${dom}`)
 return `${dow} ${mon} ${dom}`;
}
export const formatShowingTime = showing_time => {
 const t = new Date(showing_time);
 const h = t.getHours();
 const m = t.getMinutes();
 //const hh = h < 10 ? 0 + h : h;
 return `${h > 12 ? h - 12 : h}:${m < 10 ? "0"+m : m} ${h < 12 ? "am" : "pm"}`
}


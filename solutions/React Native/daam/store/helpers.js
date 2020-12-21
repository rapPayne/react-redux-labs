import { Platform } from 'react-native';

const port = "3007"; 

export const host = Platform.select({
  ios: `http://localhost:${port}`, 
 android: `http://10.0.2.2::${port}`,
});
//`http://<Your actual IP address>:${port}`  Should always work. But doesn't.
//`http://localhost:${port}`  Works on iOS simulators but fails on Android emulator
//`http://10.0.2.2::${port}`   Works on Android emulator via Android Studio
//`http://10.0.3.2:${port}`   Works on Android emulator via Genymotion

//A tethered device will need to use your laptop's IP address
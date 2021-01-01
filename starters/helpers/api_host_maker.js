// This file is only needed for debugging React Native projects
// It will help you to find a URL that will work to consume
// data from an API server running on the localhost.
import { Platform } from 'react-native';

const port = "3007"; 

export const host = Platform.select({
  ios: `http://localhost:${port}`, 
  android: `http://10.0.2.2:${port}`,
});
//`http://<Your actual IP address>:${port}`  Should always work. But doesn't.
//`http://localhost:${port}`  Works on iOS simulators but fails on Android emulator
//`http://10.0.2.2:${port}`   Works on Android emulator via Android Studio
//`http://10.0.3.2:${port}`   Works on Android emulator via Genymotion

//A tethered device will need to use your laptop's IP address

//To find your actual IP address, run the `ipconfig` command on Windows or the
// `ifconfig` command on a Mac or Linux.
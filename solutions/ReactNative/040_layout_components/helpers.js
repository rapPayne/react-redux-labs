import { Platform } from 'react-native';

export const host = Platform.select(
  {ios: 'http://localhost:5000', android: 'http://10.0.2.2:5000'}
);
// When consuming an API, we need a host server. To point to the wrong one causes a failure.
//"http://localhost:5000";  Works on iOS simulators but fails on Android emulator
//"http://10.0.2.2:5000";   Works on Android emulator via Android Studio
//"http://10.0.3.2:5000";   Works on Android emulator via Genymotion

//A tethered device will need to use your laptop's IP address
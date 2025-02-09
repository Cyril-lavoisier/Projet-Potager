import 'react-native-polyfill-globals/auto';
import { Buffer } from 'buffer';
import 'react-native-fetch-api';
global.Buffer = Buffer;
import { registerRootComponent } from 'expo';
import App from './App';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src'; // finds the index.js inside src (previously App.js)
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry } from 'react-native';
import { App } from './src/components/app';
import { name as appName } from './app.json';
import { api } from './src/core/api';

AppRegistry.registerComponent(appName, () => () => <App api={api} />);

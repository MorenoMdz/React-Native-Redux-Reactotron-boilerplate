/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

import { Provider } from 'react-redux';
import store from '~/store';

import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;

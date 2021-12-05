import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { CounterScreen } from "./Views/home.screen"
export default function App() {
  return (
    <PaperProvider>
      <CounterScreen/>

    </PaperProvider>
  );
}
AppRegistry.registerComponent('app', () => App);
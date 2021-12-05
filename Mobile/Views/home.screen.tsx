// CounterScreen.js
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { observer } from 'mobx-react-lite';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useCounterStore, CounterStoreContext } from '../ViewModels/home.store';

export const CounterScreen = observer(({ componentId }) => {
  const { count, increment, decrement } = useCounterStore(); // OR useContext(CounterStoreContext)

  const navigateToNextScreen = () => {
    Navigation.push(componentId, {
      component: {
        name: 'NextScreen'
      }
    })
  }

  return (
    <View>
      <Text>{`Clicked ${count} times!`}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Push" onPress={navigateToNextScreen} />
    </View>
  );
});
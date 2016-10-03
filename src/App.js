import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';


const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={styles.containerStyle}>
      <Text>Hello world!</Text>
    </View>
  </Provider>
);

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
};

export default App;

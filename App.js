import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Home from './src/components/Home';

export class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.main} />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.39,
    backgroundColor: 'dodgerblue',
    position: 'absolute',
  },
  app: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;

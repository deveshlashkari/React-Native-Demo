/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ApiCall from './ApiCall';

export class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={styles.tcLogo}
            source={require('../../assets/download.png')}
            /* source={{uri:"#"}} */
          />
          <Text style={styles.text}> Techcoopers </Text>
        </View>
        <View>
          <ApiCall />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    paddingTop: 5,
    color: 'white',
    alignSelf: 'baseline',
  },
  tcLogo: {
    marginLeft: 0,
    width: 50,
    height: 50,
  },
});

export default Home;

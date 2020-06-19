/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';

import axios from 'axios';

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      email: '',
      age: '',
      picture: '',
      showActivity: false,
      showDetails: false,
    };
  }

  //componentDidMount method is called after the component is mounted.
  componentDidMount = () => {
    this.getUser();
  };

  //Gets user details by making API call.
  getUser = () => {
    this.setState({showActivity: true, showDetails: false});
    axios.get('https://randomuser.me/api/').then((data) => {
      this.setState({
        name:
          data.data.results[0].name.first +
          ' ' +
          data.data.results[0].name.last,
        gender: data.data.results[0].gender,
        email: data.data.results[0].email,
        age: data.data.results[0].dob.age,
        picture: data.data.results[0].picture.large,
        showActivity: false,
      });
    });
  };

  render() {
    console.log(styles);
    return (
      <>
        {this.state.showActivity ? (
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <View>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => this.setState({showDetails: true})}>
                <Image
                  style={styles.thumbnail}
                  source={{uri: this.state.picture}}
                />
              </TouchableOpacity>
              <View style={styles.btn}>
                <Button title="New User" onPress={this.getUser}></Button>
              </View>
            </View>
            <View style={styles.border} />
            {this.state.showDetails ? (
              <View style={{paddingTop: 20}}>
                <View style={{paddingLeft: 20}}>
                  <Text style={styles.text}>{'Name: ' + this.state.name}</Text>
                  <Text style={styles.text}>{'Age: ' + this.state.age}</Text>
                  <Text style={styles.text}>
                    {'Gender: ' + this.state.gender}
                  </Text>
                  <Text style={styles.text}>
                    {'email: ' + this.state.email}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.detailsImageText}>
                <Text style={styles.deatilsImageTexts}>
                  Click on image to see user details
                </Text>
              </View>
            )}
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 250,
    height: 250,
    paddingBottom: 10,
    marginTop: 15,
    borderRadius: 250 / 2,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'dodgerblue',
  },
  text: {
    fontSize: 20,
  },
  border: {
    borderBottomWidth: 2,
    padding: 10,
  },
  activityContainer: {
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 10,
  },
  detailsImageText: {
    padding: 20,
  },
  deatilsImageTexts: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ApiCall;

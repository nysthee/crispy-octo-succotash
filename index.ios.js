'use strict';
import React, { Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'

class FirstApp extends Component {
  render() {
    StatusBar.setBarStyle('light-content');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Try this:
        </Text>
        <Image
          style={styles.image}
          resizeMode={"cover"}
          source={require('./assets/mind-blown.gif')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nestedText}>
            I'm on the <Text style={{color: "orange"}}>left</Text>.
          </Text>
          <Text style={styles.nestedText}>
            I'm on the <Text style={{color: "blue"}}>right</Text>.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  title: {
    color: "rgb(255,255,255)",
    fontSize: 25,
    fontWeight: 'normal',
    fontFamily: "Verdana",
    paddingBottom: 10,
  },
  subTitle: {
    color: "rgb(255,255,255)",
    fontSize:  15 ,
    fontWeight: 'normal',
    fontFamily: "Verdana",
    paddingTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  textContainer: {
    flexDirection: 'row',
  },
  nestedText: {
    color: '#ddd',
    padding: 25,
  },
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);

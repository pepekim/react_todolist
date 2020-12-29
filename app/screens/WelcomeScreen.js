import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/header';

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        style={styles.background} 
        source={require('../assets/background.jpg')}
      >
        <Icon style={styles.logo} name="ios-book" /> 
        <Text style={styles.heading}>ToDoList</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#ccc',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#bbb',
  },
  heading: {
    position: "absolute",
    top: 150,
    color: "white",
    fontSize: 30,
  },  
  logo: {
    position: "absolute",
    top: 200,
    color: "#fff",
    fontSize: 100,
  }
})

export default WelcomeScreen;
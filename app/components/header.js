import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>What are u going To Do ?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 50,
    backgroundColor: '#aaa',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
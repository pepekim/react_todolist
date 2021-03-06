import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({ item, deleteHandler }) {
  
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <Text style={styles.text} >{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
  }
})
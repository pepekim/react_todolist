 import React, {useState} from 'react';
 import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({addHandler}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Button style={styles.button} onPress={() => addHandler(text)} title='add todo' color='black' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
})
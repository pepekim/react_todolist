import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';

export default function ListScreen() {
  const [todos, setTodos] = useState([
    {text: '초롱이랑 놀아주기', key: '1'},
    {text: '타입스크립트 공부하기', key: '2'},
    {text: '리액트 네이티브 공부하기', key: '3'},
  ]);

  const deleteHandler = (key) => {
    setTodos((todoLists) => {
      return todoLists.filter(todo => todo.key != key);
    });
  }

  const addHandler = (text) => {
    setTodos((todoLists) => {
      return [
        {text: text, key: Math.random().toString()}, 
        ...todoLists
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addHandler={addHandler} />
        <View style={styles.list}>
        <FlatList 
          data={todos}
          renderItem={({item}) => (
            <TodoItem item={item} deleteHandler={deleteHandler} />
          )}
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
})
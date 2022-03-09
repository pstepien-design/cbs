import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { Todo } from '../entities/Todo';
import { NavigationContainer } from '@react-navigation/native';

export default function TodoScreen({ navigation }: {navigation: any}) {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([] as Todo[]);

  const renderItem = ({ item }: { item: Todo }) => (
    <Item title={item.title} id={item.id} />
  );
  const Item = ({ title, id }: { title: string; id: string }) => (
    <View style={styles.item}>
      <Text style={styles.title} onPress={() => deleteTodo(id)}>
        {title}
      </Text>
    </View>
  );

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    console.log('removed ');
  };

  const handleAddTodo = () => {
    const todo = new Todo(Math.random().toString(), text);
    if(text.length > 0) {
    setTodos([...todos, todo]);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TextInput value={text} style={styles.input} onChangeText={setText} />
      <Button title='Add todo' onPress={handleAddTodo} />
      <Button title='Go to Screen1' onPress={()=> navigation.navigate('Screen1')}/>     
      <FlatList data={todos} renderItem={renderItem} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

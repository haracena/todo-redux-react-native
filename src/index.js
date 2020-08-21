import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { complete, saveTodo } from './reducers/todoReducer';
import Input from '../components/Input';

export const MiApp = () => {
  const [todoTemp, setTodoTemp] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handlePress = (id) => {
    dispatch(complete(id));
  }

  const handleChange = (text) => {
    setTodoTemp(text);
  }

  const handleSubmit = () => {
    dispatch(saveTodo(todoTemp));
    setTodoTemp('');
  }

  return (
    <View style={styles.container}>
      <Input onChange={handleChange} text={todoTemp} onSubmit={handleSubmit} />
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {handlePress(item.id)}}
            desc={item.desc}
            completed={item.completed}
          />
        )}
      />
    </View>
  );
};

export default MiApp;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChange, onSubmit,text }) => {
  return (
    <TextInput onChangeText={onChange} value={text} style={styles.input} onSubmitEditing={onSubmit} />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    height: 35,
    alignSelf: 'stretch',
    padding: 10,
  },
});

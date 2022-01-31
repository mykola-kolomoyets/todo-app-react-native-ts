import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './input.styles';

type InputProps = {
  onSubmit: (value: string) => void;
}

const Input = ({ onSubmit }: InputProps) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const onGoalChange = (value: string) => {
    setEnteredGoal(value?.length ? value : '');
  }

  const onAddGoal = () => {
    if (onSubmit) onSubmit(enteredGoal);

    setEnteredGoal('');
  }

  return (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={enteredGoal}
      onChangeText={onGoalChange}
      placeholder='Enter the goal'
    />
    
    <Button title="ADD" onPress={onAddGoal} />
  </View>
)};

export { Input };

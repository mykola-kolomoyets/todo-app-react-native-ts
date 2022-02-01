import React, { useState, useEffect } from 'react';
import { Button, TextInput, View, Modal } from 'react-native';
import { styles } from './input.styles';

type InputProps = {
  onSubmit: (value: string) => void;
  onClose: () => void;
  visible: boolean;
}

const Input = ({ onSubmit, onClose, visible }: InputProps) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const onGoalChange = (value: string) => {
    setEnteredGoal(value);
  }

  const onAddGoal = () => {
    if (onSubmit) onSubmit(enteredGoal);

    setEnteredGoal('');
  }

  const onCancelClick = () => {
    if (onClose) onClose();

    setEnteredGoal('');
  }

  return (
    <Modal 
      visible={visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={enteredGoal}
          onChangeText={onGoalChange}
          placeholder='Enter the goal'
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={onAddGoal} />  
          </View>

          <View style={styles.button}>
            <Button title="Cancel" color='red' onPress={onCancelClick} />
          </View>
        </View>
      </View>
    </Modal>
)};

export { Input };

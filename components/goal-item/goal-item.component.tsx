import React from 'react';
import { View, Text , TouchableOpacity } from 'react-native';
import { styles } from './goal-item.styles';

type GoalItemProps = {
  title: string;
  id: string;
  onClick: (id: string) => void;
}

const GoalItem = ({ title, id, onClick }: GoalItemProps) => (
  <TouchableOpacity
    style={styles.goal}
    activeOpacity={0.8}
    onPress={() => onClick(id)}
  >
    <Text>
      {title}
    </Text>
  </TouchableOpacity>
);

export { GoalItem };
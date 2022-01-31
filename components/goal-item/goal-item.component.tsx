import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './goal-item.styles';

type GoalItemProps = {
  title: string;
}

const GoalItem = ({ title }: GoalItemProps) => (
  <View
    style={styles.goal}
  >
    <Text>
      {title}
    </Text>
  </View>
);

export { GoalItem };
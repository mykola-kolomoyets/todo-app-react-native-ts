import { useState } from 'react';
import {
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { styles } from './App.styles';
import { GoalItem } from './components/goal-item';
import { Input } from './components/input';

type Goal = {
  key: string;
  value: string;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const [isModalShow, setIsModalShow] = useState(false);

  const onSubmit = (enteredGoal: string) => {
    if (!enteredGoal?.length) {
      return alert('Enter the goal title...');
    }

    console.log(enteredGoal);
    

    setGoals(goals => [...goals, {
      key: Math.random().toString(),
      value: enteredGoal
    }]);

    setIsModalShow(false);
  }

  const onGoalClick = (id: string) => {
    setGoals(goals => goals.filter(goal => goal.key !== id));
  }

  const onOpenModalClick = () => {
    setIsModalShow(true);
  }

  const onCancelClick = () => {
    setIsModalShow(false);
  }

  return (
    <View style={styles.wrapper}>

      <Button
        title="Add new Goal"
        onPress={onOpenModalClick}
      />
      
      <Input  
        visible={isModalShow}
        onSubmit={onSubmit}
        onClose={onCancelClick}
      />

      <View
        style={styles.goalsContainer}
      >
        {goals?.length ? (
          <FlatList
            data={goals}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <GoalItem 
                title={item.value}
                id={item.key}
                onClick={onGoalClick}
              />
            )}
          >
          </FlatList>
        ) : (
          <View>
            <Text>No goals...</Text>
          </View>
        )}
      </View>


    </View>
  );
}
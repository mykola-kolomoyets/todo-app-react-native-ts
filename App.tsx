import { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
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


  const onSubmit = (enteredGoal: string) => {
    setGoals(goals => [...goals, {
      key: Math.random().toString(),
      value: enteredGoal
    }]);
  }

  return (
    <View style={styles.wrapper}>
      
      <Input  
        onSubmit={onSubmit}
      />

      <View
        style={styles.goalsContainer}
      >
        {goals?.length ? (
          <FlatList
            data={goals}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <GoalItem title={item.value}/>
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


import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './App.styles';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter the goal'
        />
        <Button title="ADD" onPress={console.log} />
      </View>
    </View>
  );
}


import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './App.styles';

export default function App() {
  const [blocks, setBlocks] = useState<string[]>([]);

  const onClick = () => {
    setBlocks(blocks => [...blocks, `${blocks.length + 1}`]);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter the goal'
        />
        <Button title="ADD" onPress={onClick} />
      </View>

      <View style={styles.squareWrapper}>
        {blocks.map((item, index) => (
          <View
            style={{ ...styles.square}} 
            key={item + index}
          >
            <Text>{`block-${item}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}


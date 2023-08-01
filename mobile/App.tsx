/* import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'; */
import { /* Button, */ StyleSheet, Text, View } from 'react-native';
import DataForm from './src/components/Form1';

export default function App() {

  /* const [count, setCount] = useState(0)

  const handleOnPress = () => {
    setCount(count + 1)
    console.log(setCount)
  }
 */
  return (
    <View style={styles.container}>
      <Text>Bienvenu sur l'App'Express</Text>
      {/* <Text>{count}</Text>
      <Button title="Increment" onPress={() => handleOnPress()} />
      <StatusBar style="auto" /> */}

      <DataForm />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});

import { Text, View } from 'react-native'
import DataForm from './src/components/Form1'
import styles from './styles.css'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bienvenu sur l'App'Express</Text>

      <DataForm />

    </View>
  )
}
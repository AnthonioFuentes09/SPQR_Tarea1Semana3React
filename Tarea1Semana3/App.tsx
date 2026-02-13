import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ejercicio1 from './src/components/ejercicio1';
import Ejercicio2 from './src/components/ejercicio2';
import Ejercicio3 from './src/components/ejercicio3';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{color: '#000000', fontSize: 30, fontWeight: 'bold'}}>Tarea 1 - Semana 3</Text>
        <StatusBar style="auto" />
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: "90%",
    backgroundColor: '#f1f1f4',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },  
});

import { StyleSheet, Text, View } from 'react-native';


export default function Ejercicio3() {
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.text}>Ejercicio 3</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        width: "100%",
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        marginTop: 20,
    },
    form: {
        width: "90%",
    },
    text: {
        color: '#000000',
        fontSize: 20,
    },
});
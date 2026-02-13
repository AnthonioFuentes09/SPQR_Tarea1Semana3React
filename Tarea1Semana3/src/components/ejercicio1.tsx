import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Ejercicio1() {
    //Variables de estado
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);



    return (
        <View style={styles.container}>
            {/* En todos los componentes se implemento el diseño de form, para mostrar un diseño mas limpio */}
            <View style={styles.form}>
                <Text style={styles.text}>Ejercicio 1 - Form para usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su edad"
                    keyboardType="numeric"
                    value={edad.toString()}
                    onChangeText={(text) => setEdad(parseInt(text) || 0)}
                />
                {/* Texto de resultado segun los valores ingresados */}
                    <Text style={styles.text}>Hola {nombre}, tienes {edad} años.</Text>

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
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
});
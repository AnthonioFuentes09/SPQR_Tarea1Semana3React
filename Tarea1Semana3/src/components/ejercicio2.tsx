import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Ejercicio2() {
    //Variables de estado
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState('#0000ff');



    const contadorChange = (nuevoValor: number) : void => {
        setContador(nuevoValor);
        if (nuevoValor % 2 === 0) {
            setColor('#0000ff');
        } else {
            setColor('#811e79');
        }
    }

    return (
        <View style={styles.container}>
            {/* En todos los componentes se implemento el diseño de form, para mostrar un diseño mas limpio */}
            <View style={styles.form}>
                <Text style={styles.text}>Ejercicio 2 - Contador con estados visuales</Text>
                {/* Fila de botones por esquema de diseño */}
                <View style={styles.filaBotones}>
                    <TouchableOpacity style={styles.boton} onPress={() => contadorChange(contador + 1)}>
                        <Text style={styles.buttonText}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => contadorChange(contador - 1)}>
                        <Text style={styles.buttonText}>-1</Text>
                    </TouchableOpacity>
                </View>
                {/* Bloque dinamico del contador segun estado de la variable contador */}
                <View style={styles.bloqueResultados}>
                    <Text style={styles.resultadoContador}>
                        { contador >= 0 ? `Contador: ${contador}` : "No se recomienda valores negativos" }
                    </Text>
                    { contador >= 0  && <Text style={[styles.parImparTxt, { color }]}>
                        { contador % 2 === 0 ? "Es par" : "Es impar" }
                    </Text>}
                </View>
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
    filaBotones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    boton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        width: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bloqueResultados: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultadoContador: {
        color: '#000000',
        fontSize: 18,
    },
    parImparTxt: {
        fontSize: 18,
        marginTop: 10,
    },
    
});
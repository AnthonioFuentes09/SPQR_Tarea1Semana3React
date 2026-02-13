import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


export default function Ejercicio3() {
    //Variables de estado
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    return (
        <View style={styles.container}>
            {/* En todos los componentes se implemento el diseño de form, para mostrar un diseño mas limpio */}
            <View style={styles.form}>
                <Text style={styles.text}>Ejercicio 3 - Toggle de visibilidad</Text>
                
                {/* Boton para el manejo de visibilidad de detalles */}
                <TouchableOpacity 
                    style={styles.boton}
                    onPress={() => setMostrarDetalles(!mostrarDetalles)}
                >
                    {/* se uso el operador ternario para mostrar u ocultar detalles */}
                    <Text style={styles.buttonText}>{mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"}</Text>
                    
                </TouchableOpacity>

                {/* Vista dinamica segin estado de la variable mostrarDetalles */}
                { mostrarDetalles && (
                    <View style={styles.detalles}>
                        <Text style={styles.subText}>Detalles del usuario Altair.</Text>
                        {/* Imagen descargada para mejor manejo interno */}
                        <Image
                            source={require('../../assets/1366_2000.jpeg')}
                            style={styles.imagen}
                        />
                    </View>
                )}
                {
                    !mostrarDetalles && <Text style={styles.subText}>Detalles ocultos.</Text>
                }

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
        marginBottom: 40,
    },
    form: {
        width: "90%",
    },
    text: {
        color: '#000000',
        fontSize: 20,
    },
    subText: {
        color: '#000000',
        fontSize: 16,
        marginTop: 10,
    },
    boton: {    
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    detalles: {
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    imagen: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
});
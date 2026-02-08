import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const miWhatsapp = "18297026973"; 

  const pedirServicio = (tipo) => {
    const mensaje = `Hola Emmanuel, necesito un *${tipo}*.`;
    const url = `https://wa.me/${miWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EMMA EXPRESS</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => pedirServicio("MOTO CONCHO")}>
        <Text style={styles.btnText}>🛵 PEDIR MOTO CONCHO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, {backgroundColor: '#003876'}]} onPress={() => pedirServicio("DEPÓSITO BANCARIO")}>
        <Text style={styles.btnText}>🏦 DEPÓSITO BANCARIO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center' },
  logo: { fontSize: 30, fontWeight: '900', color: 'white', marginBottom: 40 },
  btn: { backgroundColor: '#4CAF50', padding: 20, borderRadius: 15, width: '80%', marginBottom: 20 },
  btnText: { color: 'white', fontWeight: 'bold', textAlign: 'center' }
});

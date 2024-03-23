import React from  'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mudarCorTitulo}>APP DO RICARDO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a5dda',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mudarCorTitulo: {
    color: "#fd0000",
    fontSize: 30,
    fontWeight: "bold",
  }
});
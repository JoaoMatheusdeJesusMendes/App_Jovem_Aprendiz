import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cadastrados from './components/CadastradosComponent'; // Ajuste o caminho conforme a estrutura do seu projeto

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastrados />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

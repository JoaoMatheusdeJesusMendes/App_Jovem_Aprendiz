import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Dados de exemplo para teste
const dadosExemplo = [
  {
    "_id": "654f16bd0dedc07aa90107b2",
    "class": "1A",
    "name": "Luiz Pereira Reiz",
    "role": "Aspirante",
    // ... (outras informações)
  },
  {
    "_id": "65596fd3a7c3f008b30c3e17",
    "class": "1A",
    "name": "Vinicius",
    "role": "Aspirante",
    // ... (outras informações)
  },
  // Adicione mais jovens aprendizes conforme necessário
];

const Desempenho = () => {
  const [dados, setDados] = useState(dadosExemplo);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.candidatoItem}>
      <View style={styles.candidatoInfo}>
        <Text style={styles.candidatoNome}>{item.name}</Text>
        {/* Adicione mais campos conforme necessário */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ellipse}></View>
        <Text style={styles.title}>Desempenho</Text>
        <View style={styles.ellipse}></View>
      </View>
      <FlatList
        data={dados}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#28086B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 15,
  },
  ellipse: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  candidatoItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#28086B',
    borderRadius: 8,
    alignSelf: 'center',
  },
  candidatoInfo: {
    flex: 1,
  },
  candidatoNome: {
    fontSize: 16,
    color: '#000',
  },
});

export default Desempenho;

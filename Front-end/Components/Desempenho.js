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
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      {/* Adicione mais campos conforme necessário */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desempenho Jovens Aprendizes</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#28086B',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Desempenho;

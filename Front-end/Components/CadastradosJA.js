// components/CadastradosJA.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Exemplo de dados para teste
const dadosExemplo = [
  {
    "_id": "654f16bd0dedc07aa90107b2",
    "class": "1A",
    "name": "Luiz Pereira Reiz",
    "birthDate": "14/05/2001",
  },
  {
    "_id": "65596fd3a7c3f008b30c3e17",
    "class": "1A",
    "name": "Vinicius",
    "birthDate": "12/03/2001",
  },
];

const CadastradosJA = ({ navigation }) => {
  const [dados, setDados] = useState(dadosExemplo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jovens Aprendizes Cadastrados</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('DetalhesJA', { jovemAprendiz: item })}
          >
            <View style={styles.itemBorder}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>Data de Nascimento: {item.birthDate}</Text>
            </View>
          </TouchableOpacity>
        )}
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
    marginBottom: 8,
  },
  itemBorder: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#28086B',
    borderRadius: 8,
  },
  itemText: {
    color: '#000',  // Altere a cor do texto conforme necessário
    marginBottom: 8,
  },
});

export default CadastradosJA;

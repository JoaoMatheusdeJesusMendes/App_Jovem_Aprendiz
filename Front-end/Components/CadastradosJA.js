import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const CadastradosJA = ({ navigation }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.91:3000/api/youngApprentice');
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error.message);
        // Trate o erro conforme necessário (exibindo uma mensagem para o usuário, por exemplo)
      }
    };

    // Chama a função de busca ao montar o componente
    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez (ao montar o componente)

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
    color: '#000',
    marginBottom: 8,
  },
});

export default CadastradosJA;

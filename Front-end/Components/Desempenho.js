import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Desempenho = ({ navigation }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.10:3000/api/youngApprentice');
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error.message);
        // Trate o erro conforme necessário (exibindo uma mensagem para o usuário, por exemplo)
      }
    };

    // Chama a função de busca ao montar o componente
    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez (ao montar o componente)

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.candidatoItem}
      onPress={() => navigation.navigate('DetalhesDesempenho', { jovemAprendiz: item })}
    >
      <View style={styles.candidatoInfo}>
        <Text style={styles.candidatoNome}>{item.name}</Text>
        <Text style={styles.candidatoInfoText}>{`Turma: ${item.class}`}</Text>
        <Text style={styles.candidatoInfoText}>{`Função: ${item.role}`}</Text>
        {/* Adicione mais campos conforme necessário */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
  candidatoInfoText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default Desempenho;

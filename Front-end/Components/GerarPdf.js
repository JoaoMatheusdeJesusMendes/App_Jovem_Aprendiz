import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const GerarPDF = ({ navigation }) => {
  const [dados, setDados] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.103:3000/api/youngApprentice');
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error.message);
        // Trate o erro conforme necessário (exibindo uma mensagem para o usuário, por exemplo)
      }
    };

    // Chama a função de busca ao montar o componente
    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez (ao montar o componente)

  const handleGerarPDF = async () => {
    if (selectedId) {
      try {
        // Realiza a solicitação GET passando o ID como parâmetro
        const response = await axios.get(`http://192.168.0.103:3000/api/youngApprentice/generatePDF/${selectedId}`);
        
        // Aqui você pode fazer o que quiser com os dados do PDF
        console.log('Dados do PDF:', response.data);

        // Se necessário, você pode navegar para outra tela ou realizar outras ações com os dados do PDF
        // navigation.navigate('GerarPDF', { pdfData: response.data });

      } catch (error) {
        console.error('Erro ao gerar PDF:', error.message);
        // Trate o erro conforme necessário (exibindo uma mensagem para o usuário, por exemplo)
      }
    } else {
      // Informe ao usuário que nenhum item foi selecionado
      console.warn('Selecione um item antes de gerar o PDF.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerar PDF</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item._id === selectedId && styles.selectedItem]}
            onPress={() => setSelectedId(item._id)}
          >
            <View style={styles.itemBorder}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>Data de Nascimento: {item.birthDate}</Text>
              {item._id === selectedId && (
                <Text style={styles.okIcon}>✔</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Gerar PDF" onPress={handleGerarPDF} />
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
  selectedItem: {
    backgroundColor: '#E6E6E6', // Cor diferente para o item selecionado
  },
  itemBorder: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#28086B',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#000',
    marginBottom: 8,
  },
  okIcon: {
    fontSize: 20,
    color: 'green',
  },
});

export default GerarPDF;

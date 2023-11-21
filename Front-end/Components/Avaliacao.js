import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import icon from '../assets/IconLogo.png';

const CustomSelect = ({ options, selectedOption, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selectedOption);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
    toggleModal();
  };

  useEffect(() => {
    setSelectedValue(selectedOption);
  }, [selectedOption]);

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.selectButton}>
        <View style={styles.selectContainer}>
          <Text style={styles.textSelect}>{selectedValue}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionItem}
              onPress={() => handleSelect(option)}
            >
              <Text style={styles.textOption}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.textClose}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const AvaliacaoParte1 = () => {
  const [presencaOption, setPresencaOption] = useState('Selecione o tipo');
  const [participacaoOption, setParticipacaoOption] = useState('Selecione o tipo');
  const [relacionamentoOption, setRelacionamentoOption] = useState('Selecione o tipo');
  const [metasOption, setMetasOption] = useState('Selecione o tipo');
  const [habilidadeOption, setHabilidadeOption] = useState('Selecione o tipo');
  const [selectedYoungApprentice, setSelectedYoungApprentice] = useState(null);
  const [youngApprentices, setYoungApprentices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.91:3000/api/youngApprentice');
        const data = await response.json();
  
        if (response.ok) {
          console.log('Estrutura de youngApprentices:', data[0]);
          setYoungApprentices(data);
        } else {
          console.error('Erro ao realizar avaliação:', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Erro ao realizar a solicitação:', JSON.stringify(error));
      }
    };
  
    fetchData();
  }, []);
  

  const handleAvaliacao = async () => {
    try {
      if (!selectedYoungApprentice || !selectedYoungApprentice._id) {
        Alert.alert('Erro', 'Selecione um jovem aprendiz antes de avaliar.');
        return;
      }
  
      const response = await fetch(`http://192.168.0.91:3000/api/youngApprentice/update/${selectedYoungApprentice._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attendance: presencaOption.toString(),
          participation: participacaoOption.toString(),
          interpersonalRelationships: relacionamentoOption.toString(),
          goalAchievement: metasOption.toString(),
          technicalSkills: habilidadeOption.toString(),
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Avaliação realizada com sucesso:', data);
      } else {
        console.error('Erro ao realizar avaliação:', data);
        Alert.alert('Erro', 'Erro ao realizar avaliação. Verifique os detalhes e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao realizar a solicitação:', error);
      Alert.alert('Erro', 'Erro ao conectar ao servidor. Verifique sua conexão e tente novamente.');
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={icon} />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Selecionar Jovem Aprendiz</Text>
          <CustomSelect
  options={youngApprentices.map((apprentice) => apprentice.name)}
  selectedOption={selectedYoungApprentice ? selectedYoungApprentice.name : 'Selecione o jovem aprendiz'}
  onSelect={(name) => {
    const selected = youngApprentices.find((apprentice) => apprentice.name === name);
    setSelectedYoungApprentice(selected);
  }}
/>

        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Presença</Text>
          <CustomSelect
            options={['Suficiente', 'Insuficiente']}
            selectedOption={presencaOption}
            onSelect={setPresencaOption}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Participação</Text>
          <CustomSelect
            options={['Excelente', 'Suficiente', 'Insuficiente']}
            selectedOption={participacaoOption}
            onSelect={setParticipacaoOption}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Relacionamento Interpessoal</Text>
          <CustomSelect
            options={['Excelente', 'Suficiente', 'Insuficiente']}
            selectedOption={relacionamentoOption}
            onSelect={setRelacionamentoOption}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cumprimento de Metas</Text>
          <CustomSelect
            options={['Excelente', 'Suficiente', 'Insuficiente']}
            selectedOption={metasOption}
            onSelect={setMetasOption}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Habilidade Técnica</Text>
          <CustomSelect
            options={['Excelente', 'Suficiente', 'Insuficiente']}
            selectedOption={habilidadeOption}
            onSelect={setHabilidadeOption}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAvaliacao}>
          <Text style={styles.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 
    1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 165,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#0D0157',
    width: '100%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  // Estilos para o componente CustomSelect
  selectButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#28086B',
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSelect: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  optionItem: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  textOption: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#0D0157',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  textClose: {
    fontSize: 16,
    color: 'white',
  },
});

export default AvaliacaoParte1;

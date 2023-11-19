import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import icon from '../assets/IconLogo.png'; // Substitua ".png" pela extensão correta, se necessário


const CustomSelect = ({ options, selectedOption, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.selectButton}>
        <View style={styles.selectContainer}>
          <Text style={styles.textSelect}>{selectedOption}</Text>
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
              onPress={() => {
                onSelect(option);
                toggleModal();
              }}
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

const Avaliacao = () => {
  const [presencaOption, setPresencaOption] = useState('Selecione o tipo');
  const [participacaoOption, setParticipacaoOption] = useState('Selecione o tipo');
  const [relacionamentoOption, setRelacionamentoOption] = useState('Selecione o tipo');
  const [metasOption, setMetasOption] = useState('Selecione o tipo');
  const [habilidadeOption, setHabilidadeOption] = useState('Selecione o tipo');
  const presenca = ['Suficiente', 'Insuficiente'];
  const participacao = ['Excelente', 'Suficiente', 'Insuficiente'];
  const relacionamento = ['Excelente', 'Suficiente', 'Insuficiente'];
  const metas = ['Excelente', 'Suficiente', 'Insuficiente'];
  const habilidade = ['Excelente', 'Suficiente', 'Insuficiente'];

  const handleSelectPresenca = (option) => {
    setPresencaOption(option);
  };
  const handleSelectParticipacao = (option) => {
    setParticipacaoOption(option);
  };
  const handleSelectRelacionamento = (option) => {
    setRelacionamentoOption(option);
  };
  const handleSelectMetas = (option) => {
    setMetasOption(option);
  };
  const handleSelectHabilidade = (option) => {
    setHabilidadeOption(option);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={icon} />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Presença</Text>
          <CustomSelect
            options={presenca}
            selectedOption={presencaOption}
            onSelect={handleSelectPresenca}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Participação</Text>
          <CustomSelect
            options={participacao}
            selectedOption={participacaoOption}
            onSelect={handleSelectParticipacao}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Relacionamento Interpessoal</Text>
          <CustomSelect
            options={relacionamento}
            selectedOption={relacionamentoOption}
            onSelect={handleSelectRelacionamento}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cumprimento de Metas</Text>
          <CustomSelect
            options={metas}
            selectedOption={metasOption}
            onSelect={handleSelectMetas}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Habilidade Técnica</Text>
          <CustomSelect
            options={habilidade}
            selectedOption={habilidadeOption}
            onSelect={handleSelectHabilidade}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff', // Cor de fundo branco
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
  // Estilos para o componente CustomSelect (pode ser ajustado conforme necessário)
  selectButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#28086B', // Cor da borda
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
    color: 'white', // Adicione a cor desejada
  },
});

export default Avaliacao;

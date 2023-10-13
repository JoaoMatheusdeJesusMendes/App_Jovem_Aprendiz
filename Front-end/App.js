import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Modal} from 'react-native';
import React, {useState} from 'react';
import icon from "./imgs/icon.png";

const CustomSelect = ({ options, selectedOption, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={stylesSelect.selectButton}>
        <Text style={stylesSelect.textSelect}>{selectedOption}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={stylesSelect.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={stylesSelect.optionItem}
              onPress={() => {
                onSelect(option);
                toggleModal();
              }}
            >
              <Text style={stylesSelect.textOption}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={toggleModal} style={stylesSelect.closeButton}>
            <Text style={stylesSelect.textClose}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const stylesSelect = StyleSheet.create({
  textSelect: {
    marginTop: 13,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  textClose: {
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
  },
  textOption: {
    textAlign: 'center',
    marginTop: 5,
  },
  selectButton: {
    alignSelf: 'center',
    borderWidth:2, 
    borderColor:"#0D0157", 
    width: 300, 
    height: 50, 
    borderRadius: 10, 
    marginBottom: 10,
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  optionItem: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#0D0157',
    width: 200,
    height: 30,
    margin: 5,
    borderRadius: 10,
  },
});

export default function App() {
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
  const handleSelectMetas= (option) => {
    setMetasOption(option);
  };
  const handleSelectHabilidade= (option) => {
    setHabilidadeOption(option);
  };
  return (
    <ScrollView>
    <View>
      <Image
      style={styles.imgStyleRegister}
      source={icon}></Image>
    </View>
    <View style={styles.loginAreas}>
      <Text
      style={styles.titleTextsRegister}>Presença</Text>
      <CustomSelect
        options={presenca}
        selectedOption={presencaOption}
        onSelect={handleSelectPresenca}
      />
    </View>
    <View style={styles.loginAreas}>
      <Text
      style={styles.titleTextsRegister}>Participação</Text>
      <CustomSelect
        options={participacao}
        selectedOption={participacaoOption}
        onSelect={handleSelectParticipacao}
      />
    </View>
    <View style={styles.loginAreas}>
      <Text
      style={styles.titleTextsRegister}>Relacionamento Interpessoal</Text>
      <CustomSelect
        options={relacionamento}
        selectedOption={relacionamentoOption}
        onSelect={handleSelectRelacionamento}
      />
    </View>
    <View style={styles.loginAreas}>
      <Text
      style={styles.titleTextsRegister}>Cumprimento de metas</Text>
      <CustomSelect
        options={metas}
        selectedOption={metasOption}
        onSelect={handleSelectMetas}
      />
    </View>
    <View style={styles.loginAreas}>
      <Text
      style={styles.titleTextsRegister}>Habilidade técnica</Text>
      <CustomSelect
        options={habilidade}
        selectedOption={habilidadeOption}
        onSelect={handleSelectHabilidade}
      />
    </View>
    <View>
      <TouchableOpacity
      style={styles.buttonFormat}
      ><Text style={styles.textButton}>Avaliar</Text></TouchableOpacity>
    </View>
  </ScrollView>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  loginAreas: {
    alignItems: 'center',
  },
  buttonFormat: {
    backgroundColor: '#0D0157',
    width: 300, 
    height: 50,
    alignSelf: 'center',
    borderRadius: 30, 
    paddingTop: 11,
    marginTop: 60,
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  imgStyleRegister: {
    width: 220, 
    height: 160, 
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 60,
  },
  titleTextsRegister: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontSize: 17,
  },
  textBoxRegister: {
    borderWidth:2, 
    borderColor:"#0D0157", 
    width: 300, 
    height: 50, 
    borderRadius: 10, 
    marginBottom: 10,
    paddingLeft: 10,
  },
});
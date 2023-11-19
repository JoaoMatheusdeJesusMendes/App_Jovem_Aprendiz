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
import { Ionicons } from '@expo/vector-icons';
import icon from '../assets/IconLogo.png';
import logo from '../assets/LogoItemm.png';

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

const CadastroJA = () => {
  const [turma, setTurma] = useState('');
  const [nome, setNome] = useState('');
  const [funcao, setFuncao] = useState('');
  const [instrutor, setInstrutor] = useState('');
  const [cidade, setCidade] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [admissao, setAdmissao] = useState('');
  const [termino, setTermino] = useState('');
  const [periodoContrato, setPeriodoContrato] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [horasPratica, setHorasPratica] = useState('');
  const [horasTeorica, setHorasTeorica] = useState('');
  const [modelo, setModelo] = useState('');
  const [ativo, setAtivo] = useState('');
  const [vencimentoContrato, setVencimentoContrato] = useState('');
  const [motivoDesligamento, setMotivoDesligamento] = useState('');
  const [formasDesligamento, setFormasDesligamento] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.ellipseContainer}>
          <Ionicons name="ellipse" size={24} color="white" />
          <Text style={styles.title}>Cadastro de Jovem Aprendiz</Text>
          <Ionicons name="ellipse" size={24} color="white" />
        </View>
      </View>

      {/* Imagens */}
      <View style={styles.imageContainer}>
        <Image style={styles.imgStyleLogo} source={icon} />
        <Image style={styles.imgStyleRegister} resizeMode="contain" source={logo} />
      </View>

      {/* Seção 1: Dados Pessoais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.loginAreas}>
          <Text style={styles.titleTextsRegister}>Turma</Text>
          <TextInput
            value={turma}
            placeholder="Informe a turma"
            onChangeText={(text) => setTurma(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Nome</Text>
          <TextInput
            value={nome}
            placeholder="Informe o nome"
            onChangeText={(text) => setNome(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Função</Text>
          <TextInput
            value={funcao}
            placeholder="Informe a função"
            onChangeText={(text) => setFuncao(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Instrutor</Text>
          <TextInput
            value={instrutor}
            placeholder="Informe o instrutor"
            onChangeText={(text) => setInstrutor(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Cidade</Text>
          <TextInput
            value={cidade}
            placeholder="Informe a cidade"
            onChangeText={(text) => setCidade(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>CNPJ</Text>
          <TextInput
            value={cnpj}
            placeholder="Informe o CNPJ"
            onChangeText={(text) => setCnpj(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Telefone</Text>
          <TextInput
            value={telefone}
            placeholder="Informe o telefone"
            onChangeText={(text) => setTelefone(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Data de Nascimento</Text>
          <TextInput
            value={dataNascimento}
            placeholder="Informe a data de nascimento"
            onChangeText={(text) => setDataNascimento(text)}
            style={styles.textBoxRegister}
          />
        </View>
      </View>

      {/* Seção 2: Dados Profissionais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Profissionais</Text>
        <View style={styles.loginAreas}>
          <Text style={styles.titleTextsRegister}>Admissão</Text>
          <TextInput
            value={admissao}
            placeholder="Informe a data de admissão"
            onChangeText={(text) => setAdmissao(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Término</Text>
          <TextInput
            value={termino}
            placeholder="Informe a data de término"
            onChangeText={(text) => setTermino(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Período de Contrato</Text>
          <TextInput
            value={periodoContrato}
            placeholder="Informe o período de contrato"
            onChangeText={(text) => setPeriodoContrato(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>CPF</Text>
          <TextInput
            value={cpf}
            placeholder="Informe o CPF"
            onChangeText={(text) => setCpf(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>RG</Text>
          <TextInput
            value={rg}
            placeholder="Informe o RG"
            onChangeText={(text) => setRg(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Horas de Prática</Text>
          <TextInput
            value={horasPratica}
            placeholder="Informe as horas de prática"
            onChangeText={(text) => setHorasPratica(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Horas Teóricas</Text>
          <TextInput
            value={horasTeorica}
            placeholder="Informe as horas teóricas"
            onChangeText={(text) => setHorasTeorica(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Modelo</Text>
          <TextInput
            value={modelo}
            placeholder="Informe o modelo"
            onChangeText={(text) => setModelo(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Ativo</Text>
          <TextInput
            value={ativo}
            placeholder="Informe se está ativo"
            onChangeText={(text) => setAtivo(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Vencimento do Contrato</Text>
          <TextInput
            value={vencimentoContrato}
            placeholder="Informe o vencimento do contrato"
            onChangeText={(text) => setVencimentoContrato(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Motivo do Desligamento</Text>
          <TextInput
            value={motivoDesligamento}
            placeholder="Informe o motivo do desligamento"
            onChangeText={(text) => setMotivoDesligamento(text)}
            style={styles.textBoxRegister}
          />
          <Text style={styles.titleTextsRegister}>Formas de Desligamento</Text>
          <TextInput
            value={formasDesligamento}
            placeholder="Informe as formas de desligamento"
            onChangeText={(text) => setFormasDesligamento(text)}
            style={styles.textBoxRegister}
          />
        </View>
      </View>

      {/* Botão de Cadastrar */}
      <TouchableOpacity style={styles.buttonFormatRegister}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0157',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  ellipseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imgStyleLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  imgStyleRegister: {
    width: '100%',
    height: 165,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loginAreas: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleTextsRegister: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontSize: 17,
    color: 'black',
  },
  textBoxRegister: {
    borderWidth: 2,
    borderColor: '#0D0157',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  buttonFormatRegister: {
    backgroundColor: '#0D0157',
    width: '100%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,
    paddingTop: 11,
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  // Estilos para o componente CustomSelect (pode ser ajustado conforme necessário)
  selectButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
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

export default CadastroJA;

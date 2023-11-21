import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCadastro = async () => {
    try {
      // Verificar se a senha e a confirmação da senha coincidem
      if (senha !== confirmSenha) {
        Alert.alert('Erro', 'As senhas não coincidem. Por favor, verifique.');
        return;
      }

      const response = await fetch('http://192.168.0.91:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Admin',
          name: nome,
          email: email,
          birthDate: dataNascimento,
          cpf: cpf,
          password: senha,
          confirmpassword: confirmSenha,
          // Adicione outros campos conforme necessário
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso:', data);
        // Adicione lógica adicional conforme necessário (navegação, etc.)
        // Exemplo: navigation.navigate('PaginaDeSucesso');
      } else {
        console.error('Erro ao cadastrar usuário:', data.msg);
        Alert.alert('Erro', 'Erro ao cadastrar usuário. Verifique os detalhes e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao realizar a solicitação:', error);
      Alert.alert('Erro', 'Erro ao conectar ao servidor. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={require('../assets/IconLogo.png')} />

      <TextInput
        value={nome}
        placeholder="Cadastre seu Nome"
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        value={cpf}
        placeholder="Cadastre seu CPF"
        onChangeText={(text) => setCpf(text)}
        style={styles.input}
      />
      <TextInput
        value={telefone}
        placeholder="Cadastre seu telefone"
        onChangeText={(text) => setTelefone(text)}
        style={styles.input}
      />
      <TextInput
        value={email}
        placeholder="Cadastre seu e-mail"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        value={dataNascimento}
        placeholder="Cadastre sua data de nascimento (DD/MM/AAAA)"
        onChangeText={(text) => setDataNascimento(text)}
        style={styles.input}
      />
      <TextInput
        value={senha}
        placeholder="Cadastre sua senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        style={styles.input}
      />
      <TextInput
        value={confirmSenha}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmSenha(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 128,
    width: 128,
  },
  input: {
    borderWidth: 2,
    borderColor: '#0D0157',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#28086B',
    width: 300,
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
});

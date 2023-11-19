import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro
  };

  return (
    <View style={styles.container}>
      {/* Adicionando a imagem com resizeMode "contain" */}
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
        value={senha}
        placeholder="Cadastre sua senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
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

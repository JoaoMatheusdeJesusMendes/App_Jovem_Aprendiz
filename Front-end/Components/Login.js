import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de login
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={require('../assets/iconLogo.png')} />

      <TextInput
        value={email}
        placeholder="Digite seu e-mail"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Adicionando um link para a página de cadastro */}
      <TouchableOpacity style={styles.link} onPress={() => console.log('Ir para a página de cadastro')}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
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
  // Adicionando estilos para o link de cadastro
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#28086B',
  },
});

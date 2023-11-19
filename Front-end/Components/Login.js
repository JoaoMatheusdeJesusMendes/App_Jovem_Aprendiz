import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.103:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Sucesso no login
        console.log('Login realizado com sucesso:', data);

        // Adicione lógica adicional conforme necessário (navegação, etc.)
        // Por exemplo, redirecione para a página principal após o login:
        navigation.navigate('Desempenho');
      } else {
        // Tratar erros de login
        console.error('Erro ao realizar login:', data.msg);
        Alert.alert('Erro', 'Email ou senha incorretos. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao realizar a solicitação:', error);
      Alert.alert('Erro', 'Erro ao conectar ao servidor. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Adicionando a imagem com resizeMode "contain" */}
      <Image style={styles.logo} resizeMode="contain" source={require('../assets/IconLogo.png')} />

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
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Cadastro')} // Navegar para a página de cadastro
      >
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

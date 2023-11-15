import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function MainPage({ navigation }) {
  const openMenu = () => {
    // Abre o menu ou inicia a navegação para a tela do menu
    // Você precisa configurar sua navegação por abas adequadamente para isso funcionar
    // Exemplo: navigation.navigate('Menu')
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={styles.menuIcon}>
          <Image source={require('./assets/MenuIcon.png')} style={styles.menuIconImage} />
        </TouchableOpacity>
        <View style={styles.ellipseContainer}>
          <View style={styles.ellipse}></View>
          <Text style={styles.title}>Cadastrados</Text>
          <View style={styles.ellipse}></View>
        </View>
      </View>

      {/* Conteúdo da página */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/LogoIcon.png')} style={styles.logoImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center', // Centraliza o conteúdo na tela
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#28086B', // Cor de fundo da barra do título
    width: '100%', // Define a largura para ocupar toda a largura da tela
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white', // Cor do texto
    marginLeft: 15, // Espaçamento à esquerda
    marginRight: 15, // Espaçamento à direita
  },
  menuIcon: {
    position: 'absolute',
    left: 15,
  },
  menuIconImage: {
    width: 24,
    height: 24,
  },
  ellipseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipse: {
    width: 11,
    height: 11,
    borderRadius: 5.5, // Metade da largura/altura para torná-lo um círculo
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain', // Ajusta o conteúdo da imagem para caber no contêiner
  },
});

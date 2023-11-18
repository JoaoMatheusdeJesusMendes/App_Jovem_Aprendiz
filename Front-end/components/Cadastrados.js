import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';

export default function Cadastrados({ navigation }) {
  const openMenu = () => {
    // Abre o menu ou inicia a navegação para a tela do menu
    // Você precisa configurar sua navegação por abas adequadamente para isso funcionar
    // Exemplo: navigation.navigate('Menu')
  };

  useEffect(() => {
    // Carrega a fonte Inter
    Font.loadAsync({
        'Inter': require('../assets/fonts/Inter.ttf'), // Substitua pelo caminho real do arquivo da fonte Inter
    });
  }, []);

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
        <Text style={styles.logoText}>Jovens Aprendizes Cadastrados</Text>
      </View>
    </View>
  );
}

// Estilo do componente
const styles = StyleSheet.create({
  // ... (seu estilo aqui)
});

// Módulo de exportação adicional
export function outraFuncao() {
  // Código da função exportada
}

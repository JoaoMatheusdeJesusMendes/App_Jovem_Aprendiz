import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import * as Font from 'expo-font';

const GerarPDFs = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [candidatos, setCandidatos] = useState([
    {
      "_id": "654f16bd0dedc07aa90107b2",
      "class": "1A",
      "name": "Luiz Pereira Reiz",
      "birthDate": "14/05/2001",
    },
    {
      "_id": "65596fd3a7c3f008b30c3e17",
      "class": "1A",
      "name": "Vinicius",
      "birthDate": "12/03/2001",
    },
  ]);
  const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Inter': require('../assets/fonts/Inter.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  const openMenu = () => {
    // Adicione a lógica para abrir o menu
    console.log('Abrir Menu');
  };

  const navigateToDesempenho = () => {
    // Adicione a lógica para navegar para a tela de Desempenho
    // Exemplo: navigation.navigate('Desempenho')
  };

  const onPressNovoBotao = () => {
    // Adicione a lógica para o novo botão
    if (candidatoSelecionado) {
      console.log(`GERAR PDF para ${candidatoSelecionado.name}`);
    } else {
      console.log('Selecione um candidato antes de gerar o PDF');
    }
  };

  const selecionarCandidato = (candidato) => {
    setCandidatoSelecionado(candidato);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={styles.menuIcon}>
          <Image source={require('../assets/iconLogo.png')} style={styles.menuIconImage} />
        </TouchableOpacity>
        <View style={styles.ellipseContainer}>
          <View style={styles.ellipse}></View>
          <Text style={styles.title}>Gerar PDF</Text>
          <View style={styles.ellipse}></View>
        </View>
      </View>

      <TouchableOpacity onPress={navigateToDesempenho} style={styles.logoContainer}>
      <Image source={require('../assets/iconLogo.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Selecione o candidato para gerar o PDF</Text>
      </TouchableOpacity>

      <FlatList
        data={candidatos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.candidatoItem,
              candidatoSelecionado?._id === item._id && styles.candidatoSelecionado,
            ]}
            onPress={() => selecionarCandidato(item)}
          >
            <Text style={styles.candidatoNome}>{item.name}</Text>
            <Text style={styles.candidatoDataNascimento}>{item.birthDate}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[styles.novoBotao, !candidatoSelecionado && styles.novoBotaoDesabilitado]}
        onPress={onPressNovoBotao}
        disabled={!candidatoSelecionado}
      >
        <Text style={styles.novoBotaoTexto}>GERAR PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#28086B',
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
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
    borderRadius: 5.5,
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
    resizeMode: 'contain',
  },
  logoText: {
    marginTop: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#333333',
  },
  candidatoItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#28086B',
    borderRadius: 8,
  },
  candidatoSelecionado: {
    backgroundColor: 'white',
  },
  candidatoNome: {
    fontSize: 16,
    color: '#000',
  },
  candidatoDataNascimento: {
    fontSize: 16,
    color: '#000',
  },
  novoBotao: {
    width: 327,
    height: 48,
    marginTop: 20,
    backgroundColor: '#28086B',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  novoBotaoDesabilitado: {
    backgroundColor: '#ccc', // Cor de fundo para o botão desabilitado
  },
  novoBotaoTexto: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default GerarPDFs;

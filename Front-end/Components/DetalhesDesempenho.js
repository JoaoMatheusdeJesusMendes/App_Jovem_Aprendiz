// DetalhesDesempenho.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalhesDesempenho = ({ route }) => {
  // Extract data from the route params
  const { jovemAprendiz } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Desempenho</Text>
      <View style={styles.detalhesContainer}>
        <Text style={styles.label}>Nome: {jovemAprendiz.name}</Text>
        <Text style={styles.label}>Presença: {jovemAprendiz.attendance}</Text>
        <Text style={styles.label}>Participação: {jovemAprendiz.participation}</Text>
        <Text style={styles.label}>Relacionamento Interpessoal: {jovemAprendiz.interpersonalRelationships}</Text>
        <Text style={styles.label}>Cumprimento de Metas: {jovemAprendiz.goalAchievement}</Text>
        <Text style={styles.label}>Habilidade Técnica: {jovemAprendiz.technicalSkills}</Text>
        {/* Adicione mais detalhes conforme necessário */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detalhesContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetalhesDesempenho;

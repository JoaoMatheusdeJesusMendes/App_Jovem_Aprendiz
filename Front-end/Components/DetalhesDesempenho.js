// DetalhesDesempenho.js

import React from 'react';
import { View, Text } from 'react-native';

const DetalhesDesempenho = ({ route }) => {
  // Extract data from the route params
  const { jovemAprendiz } = route.params;

  return (
    <View>
      <Text>Detalhes do Desempenho</Text>
      {/* Display details about the jovemAprendiz */}
      <Text>Name: {jovemAprendiz.name}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default DetalhesDesempenho;

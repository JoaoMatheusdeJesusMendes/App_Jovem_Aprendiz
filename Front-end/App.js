import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Cadastro from './Components/Cadastro';
import Avaliacao from './Components/Avaliacao';
import Login from './Components/Login';
import CadastroJA from './Components/CadastroJA';
import CadastradosJA from './Components/CadastradosJA';
import GerarPDFs from './Components/GerarPdf';
import Desempenho from './Components/Desempenho';
import DetalhesDesempenho from './Components/DetalhesDesempenho'; // Importe o novo componente

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HeaderMenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.headerButton}>
      <Ionicons name="menu" size={24} color="white" />
    </TouchableOpacity>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Cadastrados">
      <Tab.Screen
        name="Cadastro"
        component={CadastroJA}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: () => (
            <Foundation name="clipboard-pencil" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrados"
        component={CadastradosJA}
        options={{
          tabBarLabel: 'Cadastrados',
          tabBarIcon: () => (
            <FontAwesome5 name="clipboard-list" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Avaliacao"
        component={Avaliacao}
        options={{
          tabBarLabel: 'Avaliação',
          tabBarIcon: () => (
            <AntDesign name="checksquare" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Desempenho"
        component={Desempenho}
        options={{
          tabBarLabel: 'Desempenho',
          tabBarIcon: () => (
            <Foundation name="results-demographics" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="GerarPDFs"
        component={GerarPDFs}
        options={{
          tabBarLabel: 'Gerar PDF',
          tabBarIcon: () => <AntDesign name="pdffile1" size={24} color="blue" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0D0157',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name=" "
          component={AppTabs}
          options={({ navigation }) => ({
            headerLeft: () => <HeaderMenuButton onPress={() => navigation.toggleDrawer()} />,
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="Avaliacao"
          component={Avaliacao}
          options={{ title: 'Avaliação' }}
        />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen
          name="CadastradosJA"
          component={CadastradosJA}
          options={{ title: 'Cadastrados' }}
        />
        <Stack.Screen
          name="DetalhesDesempenho"
          component={DetalhesDesempenho}
          options={{ title: 'Detalhes do Desempenho' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: 16,
  },
});

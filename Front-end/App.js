import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


import Cadastro from './Components/Cadastro'
import Avaliacao from './Components/Avaliacao';
import Login from './Components/Login';
import CadastroJA from './Components/CadastroJA';
import CadastradosJA from './Components/CadastradosJA';
import GerarPDFs from './Components/GerarPdf'
import Desempenho from './Components/Desempenho';

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
    <Tab.Navigator 
    initialRouteName="Cadastrados">
      <Tab.Screen name="Cadastro" component={CadastroJA}/>
      <Tab.Screen name="Cadastrados" component={CadastradosJA}/>
      <Tab.Screen name="Avaliacao" component={Avaliacao} />
      <Tab.Screen name="Desempenho" component={Desempenho}/>  
      <Tab.Screen name="  " component={GerarPDFs}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
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
        <Stack.Screen
          name = "Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name = "CadastradosJA"
          component={CadastradosJA}
          options={{title: 'Cadastrados'}}
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

// ... (rest of your code)

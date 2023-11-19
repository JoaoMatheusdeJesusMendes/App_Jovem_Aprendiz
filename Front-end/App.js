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
import CadastroJA from './Components/CadastradosJA';
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
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login}/>
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Avaliacao" component={Avaliacao} />
      <Tab.Screen name="CadastroJA" component={CadastroJA}/>
      <Tab.Screen name="CadastradosJA" component={CadastradosJA}/>
      <Tab.Screen name="GerarPdf" component={GerarPDFs}/>
      <Tab.Screen name="Desempenho" component={Desempenho}/>

      
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0D0157',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
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
        <Stack.Screen
          name = "Login"
          component={Login}
          options={{title: 'Login'}}
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

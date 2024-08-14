import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { IconButton, TextInput, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Se estiver usando 
import Header from '../components/Header';

import { UserContextGlobal } from '../context/UserContext';

export default function Conta() {

    const{nome, email, idUsu, getUser} = React.useContext(UserContextGlobal);
    React.useEffect(()=>{
        getUser();
    },[])

  return (
    <SafeAreaView style={estilo.container}>
        <Header/>
      <View style={estilo.header}>
        <IconButton
          icon={() => <MaterialCommunityIcons name="account-circle" size={40} color="black" />}
        />
        <Title style={estilo.title}>Bem vindo(a)!</Title>
        <Title style={estilo.subtitle}>Seus dados cadastrais estão disponiveis abaixo:</Title>
      </View>
      <View style={estilo.infoContainer}>
        <Text style={estilo.label}>Nome:</Text>
        <TextInput
          value={nome}
          mode="outlined"
          style={estilo.input}
          editable={false}
        />
        <Text style={estilo.label}>E-mail:</Text>
        <TextInput
          value={email}
          mode="outlined"
          style={estilo.input}
          editable={false}
        />
        <Text style={estilo.label}>ID do Usuário:</Text>
        <TextInput
          value={idUsu}
          mode="outlined"
          style={estilo.input}
          editable={false}
        />
      </View>
    </SafeAreaView>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'collumn',
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    padding:20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    marginBottom: 16,
  },
  subtitle:{
    fontSize:15,
    
  }
});

import React from 'react';
import { View, Text, Image, StyleSheet,ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import BaseModal from '../components/BaseModal';

import BaseCard from '../components/BaseCard';

import { UserContextGlobal } from '../context/UserContext';

export default function Login() {
  const {
    nome,
    setNome,
    email,
    senha,
    setEmail,
    setSenha,
    senhaVisivel,
    setSenhaVisivel,
    fazerLogin,
    showModal,
    cadastrar,
    hideModal,
    color, 
    loading,
  } = React.useContext(UserContextGlobal);
  return (
    <View style={[estilo.content, { backgroundColor: color }]}>
      {loading ? (
        <View style={estilo.vwLoading}>
          <ActivityIndicator
            size="25"
            color="#0af"
            style={estilo.loading}
          />
        </View>
      ) : (
        <></>
      )}
      <Image
        style={estilo.img}
        source="https://img.icons8.com/ios-filled/50/FFFFFF/lock.png"
      />
      <BaseCard
        title="Login do APP"
        sub="Suas mensagens com a maior segurança 🔒">
        <TextInput
          value={email}
          label="Digite seu email"
          onChangeText={(value) => setEmail(value)}
          mode="outlined"
          keyboardType="email"
        />
        <TextInput
          value={senha}
          label="Digite sua senha"
          onChangeText={(value) => setSenha(value)}
          right={
            <TextInput.Icon
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              icon={senhaVisivel ? 'eye' : 'eye-off'}
            />
          }
          keyboardType="password"
          secureTextEntry={senhaVisivel}
          mode="outlined"
        />
        <Button
          style={estilo.btn}
          mode="contained"
          onPress={() => fazerLogin()}>
          Entrar
        </Button>
        <Button style={estilo.btnCad} onPress={() => showModal()}>
          Cadastrar
        </Button>
      </BaseCard>
      <BaseModal>
        <Text>Cadastro de usuario</Text>
        <TextInput
          value={nome}
          label="Digite seu nome"
          onChangeText={(value) => setNome(value)}
          mode="outlined"
        />
        <TextInput
          value={email}
          label="Digite seu email"
          onChangeText={(value) => setEmail(value)}
          mode="outlined"
          keyboardType="email"
        />
        <TextInput
          value={senha}
          label="Digite sua senha"
          onChangeText={(value) => setSenha(value)}
          right={
            <TextInput.Icon
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              icon={senhaVisivel ? 'eye' : 'eye-off'}
            />
          }
          keyboardType="password"
          secureTextEntry={senhaVisivel}
          mode="outlined"
        />
        <Button
          style={estilo.btn}
          mode="contained"
          onPress={() => cadastrar()}>
          Cadastrar
        </Button>
        <Button style={estilo.btnCad} onPress={() => hideModal()}>
          Cancelar
        </Button>
      </BaseModal>
    </View>
  );
}

const estilo = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  btn: {
    marginTop: 8,
    backgroundColor: '#00aaff',
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  btnCad: {},
  
  login: {
    margin: 10,
  },
  vwLoading: {
    flex: 1,
    backgroundColor: '#00000055',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    top: 0,
    right: 0,
    left:0,
    zIndex: 1
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import BaseModal from '../components/BaseModal';

import BaseCard from '../components/BaseCard';

import { UserContextGlobal } from '../context/UserContext';

export default function Login() {
  const {
    email,
    senha,
    setEmail,
    setSenha,
    senhaVisivel,
    setSenhaVisivel,
    fazerLogin,
    showModal,
  } = React.useContext(UserContextGlobal);
  return (
    <View style={estilo.content}>
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
        <Text>Oia o Modal</Text>
      </BaseModal>
    </View>
  );
}

const estilo = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#000',
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
});
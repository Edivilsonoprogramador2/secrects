import React from 'react';
import { Alert } from 'react-native';

import {auth, singInWhithEmailAndPassword, createUserWhithEmailAndPassword, } from '../config.firebase.js'

export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [logado, setLogado] = React.useState(false);
  const [senhaVisivel, setSenhaVisivel] = React.useState(true);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function fazerLogin() {
    // if(email == 'edi@gmail.com'&& senha =='1234'){
    //   setLogado(true);
    // }else{
    //   Alert.alert("Senha ou usuario invalido");
    //   console.log("Senha ou usuario invalido");
    // }
    const auth = getAuth(app);
    singInWhithEmailAndPassword(email, senha)
    .then(user => setLogado(true))
    .catch(erro=> console.log("erro no login"))
  }

  function cadastrar(){
    const auth = getAuth(app);
    createUserWhithEmailAndPassword(auth, email, senha)
    .then(user=> hideModal())
    .catch(erro => console.log("erro no cadastro"))
  }

  return (
    <UserContextGlobal.Provider
      value={{
        email,
        setEmail,
        nome,
        setNome,
        senha,
        setSenha,
        senhaVisivel,
        setSenhaVisivel,
        fazerLogin,
        logado,
        setLogado,
        showModal,
        hideModal,
        visible
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}

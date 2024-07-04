import React from 'react';
import { Alert } from 'react-native';

//import {auth} from '../config.firebase.js'

export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
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
    // auth.singInWhithEmailAndPassword(email, senha)
    // .then(user => setLogado(true))
    // .catch(erro=> console.log("erro no login"))
  }

  return (
    <UserContextGlobal.Provider
      value={{
        email,
        setEmail,
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

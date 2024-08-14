import { SafeAreaView,  } from 'react-native';
import React from 'react';

import { UserContextGlobal } from '../context/UserContext';

import Segredos from './Segredos';
import Sobre from './Sobre';
import Conta from './Conta';
import Mensagens from './Mensagens';

export default function () {

  const { getAll, tela} = React.useContext(UserContextGlobal);

  React.useEffect(() => {
    getAll();
    //return ()=> clearInterval(intervaloNome);
  }, []);

 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {tela == "principal"? <Segredos/>:tela == 'conta'? <Conta/>: tela == 'info'?<Sobre/>:<Mensagens/>}
    </SafeAreaView>
  )
}

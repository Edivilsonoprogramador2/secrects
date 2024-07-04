import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-native-paper';

import UserContext, { UserContextGlobal } from './context/UserContext';

import Login from './screen/Login';
import Main from './screen/Main';

export default function App() {
  return (
    <Provider>
      <UserContext>
        <TrocaTela />
      </UserContext>
    </Provider>
  );
}

function TrocaTela() {
  const { logado } = React.useContext(UserContextGlobal);

  return <View style={{ flex: 1 }}>{logado ? <Main /> : <Login />}</View>;
}

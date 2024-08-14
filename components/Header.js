import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { UserContextGlobal } from '../context/UserContext';

export default function Header(props) {

    const{ tela,setMenuVisible, setTela } = React.useContext(UserContextGlobal);

    return (
        <Appbar.Header style={estilo.header}>
            {tela == 'principal' ? <Appbar.Action icon="menu" size={25} onPress={() => setMenuVisible(true)} /> : ""}
            {tela != 'principal' ? <Appbar.Action icon="keyboard-backspace" size={25} onPress={() => setTela("principal")} /> : ""}
            <Appbar.Content title={tela == 'principal'? "Principal": tela == "info"? "Sobre":tela=='conta'?"Conta":"Comentarios"}/>
        </Appbar.Header>
    )
}


const estilo = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})
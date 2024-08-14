import React from "react";
import { Text, View, StyleSheet, Modal, Dimensions, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { IconButton, secundary, Icon } from "react-native-paper";
import { UserContextGlobal } from "../context/UserContext";

const largura = Dimensions.get("window").width;
export default function Menu() {

    const { menuVisible, sair, setTela, tela, logado, setMenuVisible, tema, setTema, text, color } = React.useContext(UserContextGlobal);
    return (
        <View style={menuVisible ? estilo.fundoMenu : estilo.escondido} >
            <View style={[menuVisible ? estilo.menu : estilo.escondido, { backgroundColor: color }]}>


                <View style={estilo.btns}>

                    <IconButton
                        icon="theme-light-dark"
                        iconColor={text}
                        size={25}
                        onPress={() => setTema(tema == "DarkTheme" ? "LigthTheme" : "DarkTheme")
                        }
                    />

                    <IconButton
                        icon="close"
                        iconColor={text}
                        size={25}
                        onPress={() => setMenuVisible(false)}
                    />
                </View>


                <TouchableOpacity
                    style={[estilo.tela, tela == "principal" ? estilo.selecionado : {}]}
                    onPress={() => {setTela('principal'); setMenuVisible(false)}}
                    disabled={tela == "principal"}>

                    <Icon
                        source="home-outline"
                        color={tela == "principal" ? "white" : text}
                        size={25}
                    />

                    <Text
                        style={[estilo.txt, tela == "principal" ? { color: "white" } : { color: text }]}>
                        Principal
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {setTela('conta'); setMenuVisible(false)}}
                    style={[estilo.tela, tela == "conta" ? estilo.selecionado : {}]}
                    disabled={tela == "conta"}>

                    <Icon
                        source="account-outline"
                        color={tela == "conta" ? "white" : text}
                        size={25}
                    />

                    <Text
                        style={[estilo.txt, tela == "conta" ? { color: "white" } : { color: text }]}>
                        Conta
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={[estilo.tela, tela == "info" ? estilo.selecionado : {}]}
                    onPress={() => {setTela("info"); setMenuVisible(false)}}
                    disabled={tela == "info"}>

                    <Icon
                        source="information-outline"
                        color={tela == "info" ? "white" : text}
                        size={25}
                    />

                    <Text
                        style={[estilo.txt, tela == "info" ? { color: "white" } : { color: text }]}>
                        Sobre
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={[estilo.tela]}
                    onPress={() => sair()}>
                    <Icon
                        source="logout"
                        color={text}
                        size={25} />

                    <Text style={[estilo.txt, { color: text }]}>
                        Sair
                    </Text>

                </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilo.vwSair} onPress={() => setMenuVisible(false)} />
        </View>
    )
}

const estilo = StyleSheet.create({
    menu: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        width: largura * 0.80,
        zIndex: 1,
        borderRightWidth: 1,
        borderRightColor: 'gray',
        backgroundColor: secundary,
    },
    fundoMenu: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        width: largura,
        zIndex: 1,
        backgroundColor: '#0005',
    },
    escondido: {
        position: 'absolute',
        bottom: -20000,
    },
    btns: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        alignItems: 'center',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vwSair: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: largura * 0.2
    },
    tela: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    txt: {
        fontSize: 20
    },
    selecionado: {
        backgroundColor: "#0af",
        color: 'white'
    }
})
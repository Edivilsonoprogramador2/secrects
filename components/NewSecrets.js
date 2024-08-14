
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";

import { UserContextGlobal } from "../context/UserContext";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function NewSecrets() {

    const { titulo, setTitulo,mandarSegredo, segredo, setSegredo, text, hideModal } = React.useContext(UserContextGlobal);

    return (
        <View>
            <IconButton
                icon="close"
                iconColor={text}
                size={25}
                onPress={()=>hideModal()}
                />
            <Text style={[estilo.txt ,{color:text}]}>
                Envie um segredo 🤫
            </Text>
            <TextInput
                style={estilo.imput}
                label="Titulo"
                value={titulo}
                onChangeText={(value) => setTitulo(value)}
                mode="outlined"
            />
            <TextInput
                style={estilo.imput}
                label="Segredos"
                value={segredo}
                onChangeText={(value) => setSegredo(value)}
                mode="outlined"
            />

            <Button style={estilo.btn} onPress={() => mandarSegredo()} mode="contained">Postar</Button>
        </View>
    )
}

const estilo = StyleSheet.create({
    btn: {
        margin: 20,
        width: 100,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30
    },
    imput: {
        margin: 10
    },
    txt: {
        fontSize: 20,
        fontWeight: "800",
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 20,
    }
})
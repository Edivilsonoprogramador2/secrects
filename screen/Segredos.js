import { Text, View, SafeAreaView, StyleSheet, FlatList, Alert } from 'react-native';
import React from 'react';
import { ActivityIndicator, Card, FAB, IconButton, Title } from 'react-native-paper';
import { UserContextGlobal } from '../context/UserContext';
import Header from '../components/Header';
import NewSecrets from '../components/NewSecrets';
import BaseModal from '../components/BaseModal';

import Menu from '../components/Menu';

export default function () {

    const { showModal, getUser, setTela, getAll, segredos, setSegredos, text, curtiu, loading, curtir } = React.useContext(UserContextGlobal);

    React.useEffect(() => {
        getUser();
        getAll();
        //return ()=> clearInterval(intervaloNome);
    }, []);

    function itemList({ item }) {
        return (
            <Card style={text == 'black' ? estilo.cardClaro : estilo.cardEscuro}>
                <Card.Content >
                    <Title>{item.titulo}</Title>
                    <Text style={{ color: text }}>{item.segredo}</Text>
                    <View style={[estilo.btnsPost, {
                        borderTopWidth: 1,
                        borderTopColor: "gray",
                    }]}>
                        <IconButton
                            icon="share-variant-outline"
                            iconColor={text}
                            size={20}
                            onPress={() => Alert.alert("Atenção", "Funcionalidade indisponivel no momento")}
                        />

                        <View style={estilo.btnsActionPost}>
                            <IconButton
                                style={estilo.iconButon}
                                icon="message-reply-text-outline"
                                iconColor={text}
                                size={20}
                                onPress={() => setTela('mensagens')}
                            />
                            <Text style={{ color: text }}>{item.mensagens.length - 1}</Text>
                        </View>
                        <View style={estilo.btnsActionPost}>
                            <IconButton
                                style={estilo.iconButon}
                                icon={curtiu(item.id) ? "heart" : "heart-outline"}
                                iconColor={curtiu(item.id) ? "#f00" : text}
                                size={20}
                                onPress={() => curtir(item.id)}
                            />
                            <Text style={{ color: text }}>{item.likes.length - 1}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
            <View style={{ flex: 1 }}>
                <Header></Header>
                <Menu></Menu>
                <FlatList
                    data={segredos}
                    renderItem={(item) => itemList(item)}
                    key={(item) => item.id}
                />

                <FAB style={estilo.estiloFab} icon="plus" onPress={() => showModal()} color='black' />
                <BaseModal style={estilo.modal}>
                    <NewSecrets></NewSecrets>
                </BaseModal>
            </View>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    estiloFab: {
        position: "absolute",
        bottom: 10,
        right: 10
    },
    login: {
        margin: 10,
    },
    vwLoading: {
        flex: 1,
        backgroundColor: '#0005',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1
    },
    btnsPost: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        marginTop: 10,
        paddingVertical: 10,
    },
    btnsActionPost: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modal: {
        marginHorizontal: 20
    },
    cardClaro: {
        backgroundColor: '#eee',
        marginHorizontal: 10,
        marginVertical: 5
    },
    cardEscuro: {
        backgroundColor: '#111',
        marginHorizontal: 10,
        marginVertical: 5
    },
    iconButon: {
        margin: 0
    }
})

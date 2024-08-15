import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Card, IconButton, TextInput, Title } from 'react-native-paper';
import Header from '../components/Header';

import { UserContextGlobal } from '../context/UserContext';
const CommentScreen = () => {

    const { text, itemPost, segredos, coment, comentar, curtirComm, curtiuComm, setComent, curtir, curtiu } = React.useContext(UserContextGlobal);



    // Função para renderizar cada comentário
    const renderItem = ({ item }) => item.comentario != undefined ? (
        <View style={estilo.commentContainer}>
            <View style={estilo.commentContent}>
                <Text style={[estilo.commentText, { color: text }]}>{item.comentario}</Text>
                <IconButton
                    icon={curtiuComm(itemPost.id, item.id) ? "heart" : "heart-outline"}
                    iconColor={curtiuComm(itemPost.id, item.id) ? "#f00" : text}
                    size={20}
                    onPress={() => curtirComm(itemPost.id, item.id)}
                />
                <Text style={{ color: text }}>{item.likes.length - 1}</Text>
            </View>
        </View>
    ) : <></>;

    function Head() {
        return (
            <View>

                <Card style={text == 'black' ? estilo.cardClaro : estilo.cardEscuro}>
                    <Card.Content>
                        <Title>{itemPost.titulo}</Title>
                        <Text style={[estilo.postText, { color: text }]}>{itemPost.segredo}</Text>
                        <View style={estilo.btnsPost}>

                            <View style={estilo.btnsActionPost}>
                                <IconButton
                                    icon={curtiu(itemPost.id) ? "heart" : "heart-outline"}
                                    iconColor={curtiu(itemPost.id) ? "#f00" : text}
                                    size={20}
                                    onPress={() => { curtir(itemPost.id) }}
                                />
                                <Text style={{ color: text }}>{segredos[itemPost.id].likes.length - 1}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        )
    }

    function Foot(){
        return(
            <Text style={[estilo.foot,{color: text}]}>. . .</Text>
        )
    }

    return (
        <SafeAreaView style={estilo.container}>
            <Header></Header>
            <View style={estilo.footer}>
                    <TextInput
                        value={coment}
                        onChangeText={(valor) => setComent(valor)}
                        label="Comentario"
                        mode="outlined"
                        style={estilo.input}
                    />
                    <IconButton
                        iconColor={text}
                        icon="send"
                        size={20}
                        onPress={() => comentar(itemPost.id)}
                    />
                </View>
            <FlatList
                ListHeaderComponent={() => <Head/>}
                ListFooterComponent={() => <Foot/>}
                data={segredos[itemPost.id].mensagens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={estilo.flatList}
            />
        </SafeAreaView >
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardClaro: {
        backgroundColor: '#eee',
        marginVertical: 5
    },
    cardEscuro: {
        backgroundColor: '#111',
        marginVertical: 5
    },
    postText: {
        marginTop: 10,
    },
    btnsPost: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        marginTop: 10,
        paddingVertical: 10,
    },
    btnsActionPost: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        borderRadius: 4,
        marginRight: 10,
        marginLeft: 20
    },
    list: {
        flexGrow: 1,
    },
    commentContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    commentContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    commentText: {
        flex: 1,
    },
    flatList: {
        padding: 20
    },
    foot:{
        marginVertical: 20,
        alignSelf:'center',
        fontSize:20
    }
});

export default CommentScreen;

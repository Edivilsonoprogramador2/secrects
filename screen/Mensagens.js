import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Card, IconButton,TextInput, Title } from 'react-native-paper';
import Header from '../components/Header';

import { UserContextGlobal } from '../context/UserContext';
const CommentScreen = () => {

        const {text} = React.useContext(UserContextGlobal);

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    // Dados de exemplo para o post
    const post = {
        titulo: 'Título do Post',
        segredo: 'Conteúdo do post.',
        mensagens: [0, 1, 2],
        likes: [0, 1],
        id: 'post-id'
    };

    // Função para adicionar um comentário
    const addComment = () => {
        if (comment.trim()) {
            setComments([...comments, { id: Date.now().toString(), text: comment }]);
            setComment('');
        }
    };

    // Função para renderizar cada comentário
    const renderItem = ({ item }) => (
        <View style={estilo.commentContainer}>
            <View style={estilo.commentContent}>
                <Text style={estilo.commentText}>{item.text}</Text>
                <IconButton
                    icon="heart-outline"
                    size={20}
                    onPress={() => Alert.alert('Curtida', 'Comentário curtido!')}
                />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={estilo.container}>
            <Header></Header>
            <View style={estilo.vwContainer}>

                <Card style={text == 'black' ? estilo.cardClaro : estilo.cardEscuro}>
                    <Card.Content>
                        <Title>{post.titulo}</Title>
                        <Text style={[estilo.postText,{ color: text }]}>{post.segredo}</Text>
                        <View style={estilo.btnsPost}>
                            <IconButton
                                iconColor={text}
                                icon="share-variant-outline"
                                size={20}
                                onPress={() => Alert.alert("Atenção", "Funcionalidade indisponível no momento")}
                            />
                            <View style={estilo.btnsActionPost}>
                                <IconButton
                                iconColor={text}
                                    icon="message-reply-text-outline"
                                    size={20}
                                    onPress={() => Alert.alert('Mensagens', 'Abrir mensagens')}
                                />
                                <Text style={{ color: text }}>{post.mensagens.length}</Text>
                            </View>
                            <View style={estilo.btnsActionPost}>
                                <IconButton
                                iconColor={text}
                                    icon="heart-outline"
                                    size={20}
                                    onPress={() => Alert.alert('Curtida', 'Post curtido!')}
                                />
                                <Text style={{ color: text }}>{post.likes.length}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                <View style={estilo.footer}>
                    <TextInput
                        value={comment}
                        onChangeText={setComment}
                        placeholder="Escreva seu comentário..."
                        mode="outlined"
                        style={estilo.input}
                    />
                    <IconButton
                    iconColor={text}
                        icon="send"
                        size={20}
                        onPress={addComment}
                    />
                </View>

                <FlatList
                    data={comments}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={estilo.list}
                />
            </View>
        </SafeAreaView>
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    vwContainer: {
        padding: 20
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
    postText: {
        marginTop: 10,
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
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 8,
        marginRight: 10,
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
});

export default CommentScreen;

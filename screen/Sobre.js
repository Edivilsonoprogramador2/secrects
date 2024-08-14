import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Header from '../components/Header';

export default function Sobre() {
    return (
        <ScrollView>
            <Header />
            <View style={estilo.container}>
                <Card style={estilo.card}>
                    <Card.Content>
                        <Title>Sobre o Aplicativo</Title>
                        <Text style={estilo.text}>
                            Bem-vindo ao nosso aplicativo de segredos, onde você pode compartilhar seus pensamentos mais íntimos e conhecer segredos de outras pessoas, tudo de forma anônima e segura.
                        </Text>
                    </Card.Content>
                </Card>

                <Card style={estilo.card}>
                    <Card.Content>
                        <Title>Como Funciona</Title>
                        <Text style={estilo.text}>
                            O aplicativo permite que os usuários postem segredos de maneira anônima. Cada segredo pode receber curtidas e comentários de outros usuários, promovendo uma interação discreta e respeitosa.
                        </Text>
                        <Text style={estilo.text}>
                            Ao postar um segredo, ele é compartilhado na comunidade do aplicativo, e os outros usuários podem curtir ou comentar seu segredo sem que sua identidade seja revelada.
                        </Text>
                    </Card.Content>
                </Card>

                <Card style={estilo.card}>
                    <Card.Content>
                        <Title>Diretrizes da Comunidade</Title>
                        <Text style={estilo.text}>
                            Nossa comunidade é baseada na confiança e respeito mútuo. Para manter o ambiente seguro e acolhedor, seguimos algumas diretrizes importantes:
                        </Text>
                        <Text style={estilo.listItem}>
                            • Respeito: Trate os segredos dos outros com respeito, mesmo que não concorde com eles.
                        </Text>
                        <Text style={estilo.listItem}>
                            • Anonimato: Não tente descobrir a identidade dos outros usuários. O anonimato é fundamental para a segurança e o conforto de todos.
                        </Text>
                        <Text style={estilo.listItem}>
                            • Conteúdo Apropriado: Não poste conteúdo ofensivo, discriminatório ou ilegal. Isso inclui discurso de ódio, assédio e violência.
                        </Text>
                        <Text style={estilo.listItem}>
                            • Relatórios: Se encontrar algum conteúdo que viole as diretrizes, por favor, reporte para que possamos tomar as medidas necessárias.
                        </Text>
                    </Card.Content>
                </Card>

                <Card style={estilo.card}>
                    <Card.Content>
                        <Title>Nosso Compromisso</Title>
                        <Text style={estilo.text}>
                            Estamos comprometidos em proteger sua privacidade e proporcionar um espaço onde você se sinta à vontade para compartilhar seus segredos. Sua identidade nunca será revelada, e estamos constantemente aprimorando nossas ferramentas de segurança.
                        </Text>
                        <Text style={estilo.text}>
                            Agradecemos por fazer parte da nossa comunidade e esperamos que você tenha uma experiência positiva no aplicativo.
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

const estilo = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        marginVertical: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
    listItem: {
        marginTop: 5,
        fontSize: 16,
        color: '#333',
        paddingLeft: 10,
        lineHeight: 24,
    },
});

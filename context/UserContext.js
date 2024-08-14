import React from 'react';
import { Alert } from 'react-native';
import { getDatabase, ref, child, get, set, onValue, update, query } from 'firebase/database';
import { app } from '../config.firebase.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
  const [nome, setNome] = React.useState(null);
  const [email, setEmail] = React.useState('abc@gmail.com');
  const [senha, setSenha] = React.useState('senha123');
  const [idUsu, setIdUsu] = React.useState("");

  const [tela, setTela] = React.useState("login");
  const [senhaVisivel, setSenhaVisivel] = React.useState(true);

  const [menuVisible, setMenuVisible] = React.useState(false);

  const [tema, setTema] = React.useState('LigthTheme');

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [loading, setLoading] = React.useState(false);

  const [segredos, setSegredos] = React.useState([]);

  const [titulo, setTitulo] = React.useState("");
  const [segredo, setSegredo] = React.useState("");

  const [idComent, setIdComent] = React.useState(null); 
  const [coment, setComent] = React.useState('');
  const [usuarioComent, setUsuarioComent] = React.useState(''); 
  const [likesComent, setLikesComent] = React.useState([]); 


  var color = tema == "DarkTheme" ? "black" : "white";
  var text = tema == "DarkTheme" ? "white" : "black";

  const containerStyle = { backgroundColor: color, padding: 20 };

  function fazerLogin() {

    setLoading(true)
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha)
      .then(user => {
        setTela("principal");
        setLoading(false)
        setIdUsu(user._tokenResponse.localId);
      })
      .catch(erro => { Alert.alert("erro no login"); setLoading(false) });

  }

  function getUser() {
    console.log(idUsu)
    onValue(ref(getDatabase(),`/usuario/`+idUsu),(dados)=>{
      setNome(dados.val().username)}, {
        onlyOnce: true
      })
    
  }

  async function getAll() {
    setLoading(true);
    const dbRef = getDatabase();
    //const dbref = db.ref()
    onValue(ref(dbRef, "segredos"), (
      (docs) => {
        if (docs.exists()) {
          setSegredos(docs.val())
          setLoading(false)
          //console.log(docs.val())
        } else {
          //console.log("Sem dados")
          setLoading(false)
        }
      }
    ))
    setLoading(false)
  }

  function cadastrar() {
    if (nome == "" || email == ""|| senha == "") {
      Alert.alert('Preencha todos os campos!')
    } else {
      setLoading(true);
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, senha)
        .then(user => { hideModal(); Alert.alert("Cadastrado com sucesso!"); setLoading(false); newUser(user._tokenResponse.localId) })
        .catch(erro => {
          if (erro.code == "auth/weak-password") {
            Alert.alert("Sua senha é muito curta!")
          } else if (erro.code == "auth/invalid-email") {
            Alert.alert("Seu email é invalido")
          } else {
            Alert.alert("erro no cadastro");
          };
          setLoading(false)
        }
      )
    }
  }

  async function newUser(id) {
    const db = getDatabase();
    set(ref(db, 'usuario/' + id), {
      username: nome,
      email: email,
      id: id
    });
  }

  function mandarSegredo() {
    if (segredo != "" || titulo != "") {
      const db = getDatabase();
      set(ref(db, "segredos/" + segredos.length),
        {
          id: segredos.length,
          titulo: titulo,
          segredo: segredo,
          usuario: idUsu,
          likes: [0],
          mensagens: [0]
        }
      )

      hideModal();
      setTitulo("");
      setSegredo("");
    } else {
      Alert.alert('Preencha todos os campos!')
    }
  }

  function comentar(id){
    const dados ={
      id,
      comentario,
      usuario,
      likes:[],
    }
    const updates = {};
      let likes = segredos[id].likes.filter(item => item !== idUsu);
      updates['/segredos/' + id + '/likes/'] = likes;
      update(ref(getDatabase()), updates);
  }

  function curtiu(id) {
    if (segredos[id].likes.includes(idUsu)) {
      return true
    } else {
      return false
    }
  }

  function curtir(id) {
    if (!curtiu(id)) {
      const updates = {};
      let likes = segredos[id].likes;
      likes.push(idUsu);
      updates['/segredos/' + id + '/likes/'] = likes;
      update(ref(getDatabase()), updates);
    } else {
      const updates = {};
      let likes = segredos[id].likes.filter(item => item !== idUsu);
      updates['/segredos/' + id + '/likes/'] = likes;
      update(ref(getDatabase()), updates);
    }
  }

  function sair() {
    setTela('login');
    setSegredos([]);
    setNome("");
    setIdUsu("");
    setMenuVisible(false);
  }
  return (
    <UserContextGlobal.Provider
      value={{
        sair,
        getAll,
        curtir,
        email,
        setEmail,
        nome,
        setNome,
        senha,
        setSenha,
        senhaVisivel,
        setSenhaVisivel,
        fazerLogin,
        getUser,
        tela, setTela,
        showModal,
        hideModal,
        visible,
        cadastrar,
        menuVisible,
        setMenuVisible,
        tema,
        setTema,
        containerStyle,
        text,
        color,
        loading,
        setLoading,
        segredos,
        setSegredos,
        titulo,
        setTitulo,
        setSegredo,
        setSegredo,
        setIdUsu,
        idUsu,
        mandarSegredo,
        curtiu,
        idComent, setIdComent, coment, setComent, usuarioComent, setUsuarioComent, likesComent, setLikesComent
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}

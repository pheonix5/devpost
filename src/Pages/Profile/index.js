import React, { useContext, useState, useEffect } from "react";
import { View, Text, Modal, Platform } from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker';

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import { AuthContext } from "../../Contexts/auth";

import Header from "../../Components/Header";
import {
  Container,
  Name,
  Email,
  Button,
  ButtonText,
  UploadButton,
  UploadText,
  Avatar,
  ModalContainer,
  ButtonBack,
  Input
} from './styles'

import Feather from 'react-native-vector-icons/Feather'

export default function Profile(){
  const { signOut, user, setUser, storageUser } = useContext(AuthContext)

  const [nome, setNome] = useState('')
  const [url, setUrl] = useState(null)
  const [open, setOpen] = useState(false)


  useEffect( () => {

    async function loadAvatar(){
      try{
        let response = await storage().ref('users').child(user?.uid).getDownloadURL();
        setUrl(response);
      }catch(err){
        console.log("Não encontramos nenhuma foto");
      }
    }

    loadAvatar();

    return () => loadAvatar();
  }, [] )


  async function handleSignOut(){
    await signOut();
  }


  //atualizar o perfil
  async function updateProfile(){
    if(nome === ''){
      return;
    }

    await firestore().collection('users')
    .doc(user?.uid)
    .update({
      nome: nome
    })

    //buscar todos post desse user e atualizar o nome dele
    const postDocs = await firestore().collection('posts')
    .where('userId', '==', user?.uid).get();

    //percorre todos os post desse user e atualizar
    postDocs.forEach( async doc => {
      await firestore().collection('posts').doc(doc.id)
      .update({
        autor: nome
      })

    })


    let data = {
      uid: user.uid,
      nome: nome,
      email: user.email
    }

    setUser(data);
    storageUser(data);
    setOpen(false);

  }

  const uploadFile = () => {
    const options = {
      noData: true,
      mediaType: 'photo'
    }

    launchImageLibrary(options, response => {
      if(response.didCancel){
        console.log("Cancelou");
      }else if(response.error){
        console.log("Ops parece que deu um erro");
      }else{
        //subir pro firebase
        uploadFileFirebase(response)
        .then(() => {
          uploadAvatarPost();
        })

        setUrl(response.assets[0].uri)

      }
    })

  }

  const getFileLocalPath = (response) => {
    //extrair e retornar a url da foto
    return response.assets[0].uri;
  }

  const uploadFileFirebase = async  (response) => {
    const fileSource = getFileLocalPath(response)
    
    const storageRef = storage().ref('users').child(user?.uid);

    return await storageRef.putFile(fileSource)
  }

  const uploadAvatarPost = async () => {
    const storageRef = storage().ref('users').child(user?.uid);
    const url = await storageRef.getDownloadURL()
    .then(async (image) => {
      console.log("URL recebida", image);
      // atualizar imagens do post desse user
      const postDocs = await firestore().collection('posts')
      .where('userId', '==', user.uid).get();

      //Pecorrer todos os post e trocar a url da imagem
      postDocs.forEach( async doc => {
        await firestore().collection('posts').doc(doc.id).update({
          avatarUrl: image
        })
      })

    })
    .catch((error) => {
      console.log("ERRO AO ATUALIZAR FOTO DOS POSTS", error);
    })

  }

  return(
    <Container>
      <Header />

      { url ? (
        <UploadButton onPress={ () => uploadFile()}>
          <UploadText>+</UploadText>
          <Avatar 
            source={{ uri: url }}
          />
        </UploadButton>
      ) : (
        <UploadButton onPress={ () => uploadFile()}>
          <UploadText>+</UploadText>
        </UploadButton>
      ) }

      <Name>{user.nome}</Name>
      <Email>{user.email}</Email>

      <Button bg="#428cfd" onPress={ () => setOpen(true) }>
        <ButtonText color="#FFF">Atualizar Perfil</ButtonText>
      </Button>

      <Button bg="#DDD" onPress={ handleSignOut }>
        <ButtonText color="#353840">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer  behavior={Platform.OS === 'android' ? '': 'padding'}>
          <ButtonBack onPress={ () => setOpen(false) }>
            <Feather 
              name="arrow-left"
              size={22}
              color="#121212"
            />

            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>
            
          <Input 
            placeholder={user.nome}
            value={nome}
            onChangeText={ (text) => setNome(text)}
          />
          
          <Button bg="#428cfd" onPress={ updateProfile }>
            <ButtonText color="#353840">Salvar</ButtonText>
          </Button>

        </ModalContainer>
      </Modal>

    </Container>
  )
}


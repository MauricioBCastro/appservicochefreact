import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit() {
    alert('Clicou')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CookerExpress</Text>
      {/* Lorem Ipsum extension */}
      {/*<Text style={styles.description}>Do non quis ut excepteur adipisicing sint exercitation esse ea excepteur. Adipisicing reprehenderit est proident consectetur culpa laborum pariatur velit magna mollit sint officia commodo. Ea velit occaecat mollit quis ipsum ad voluptate est enim dolor elit dolor.</Text>
      */}
      
      <StatusBar style="auto" />

      <Image 
        source={{uri: 'https://comidinhasdochef.com/wp-content/uploads/2019/12/logobarra1.png'}}
        style={{width: 200, height: 200, alignSelf:'center', marginBottom: 20}}
      />

      <Text style={styles.titleLogin}>Entrar</Text>
      <Text style={styles.titleLogindescription}>Por favor, entre para continuar</Text>

      <Text style={styles.titleId}>E-mail</Text>

      <TextInput style={styles.inputid} 
        value={id}
        onChangeText={(id) => setId(id)}
        placeholder = "E-mail"
      />

      <Text style={styles.titlePassword}>Senha</Text>
      <TextInput secureTextEntry={true} style={styles.inputpassword}
        value={password}
        onChangeText = {(password) => setPassword(password)}
        placeholder = "Senha"
      />

      <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>

      <TouchableOpacity style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.noSign}>Não possui conta? Cadastre-se</Text>

      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    fontFamily: 'Cochin'
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 70,
    marginBottom: 40,
    color: 'black'
  },

  /*description: {
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
    justifyContent: 'center',
    textAlign: 'justify',
    color: 'white'
  },*/

  inputid: {
    padding: 13,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 35,
    margin: 40,
    fontSize: 15
  },

  titleId: {
    fontWeight: 'bold',
    margin: 40,
    marginTop: 15,
    marginBottom: -30
  },

  titlePassword: {
    fontWeight: 'bold',
    margin: 40,
    marginTop: -30
  },

  inputpassword: {
    padding: 13,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    margin: 40,
    fontSize: 15,
    marginTop: -35
  },

  noSign: {
    alignSelf: 'center',
    marginTop: -30
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    backgroundColor: '#c30608',
    padding: 15,
    borderRadius: 10,
    marginTop: -5
  },

  buttonText: {
    fontSize: 20
  },

  forgetPassword: {
    fontSize: 12,
    alignSelf: 'center',
    marginTop: -35,
    marginBottom: 20,
    marginLeft: 205
  },

  titleLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40
  },

  titleLogindescription: {
    marginLeft: 40
  },
});

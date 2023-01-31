import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import Saludar from "./Saludar";

const Login = () => {
  const [name, setName] = useState()
  const [nameUser, setNameUser] = useState()
  return (

    <View >
      <Text>Write your name here</Text>
      <TextInput placeholder="Name" onChangeText={text => setName(text)} />
      <Button title="Enviar" onPress={() => setNameUser(name)} />
      {nameUser != '' ? <Saludar name={nameUser} /> : false}
    </View>
  )
}

export default Login
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import Button from "../../components/button.tsx";

import { Link, router } from "expo-router";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config.ts";

const handlePress = (email:string, password:string):void => {
  // login
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    router.replace("/memo/list");
  })
  .catch(err => {
    const { code, message } = err;
    Alert.alert(message);
  });
  
};

const LogIn = ():JSX.Element => {

  const [ email, setEmail ] = useState("");
  const [ pass, setPass ] = useState("");

  return (
    <View style={ styles.container }>
      <View style={ styles.inner }>
        <Text style={ styles.title }>Log In</Text>
        <TextInput 
          placeholder="Email Address" 
          style={ styles.input }
          value={ email }
          onChangeText={ e => setEmail(e) }
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput 
          placeholder="Password" 
          style={ styles.input } 
          value={ pass }
          onChangeText={ e => setPass(e) }
          autoCapitalize="none"
          keyboardAppearance="dark"
          secureTextEntry
          textContentType="password"
        />
        <Button label="Submit" onPress={ () => { handlePress(email, pass) }}/>
        <View style={ styles.footer }>
          <Text style={ styles.footerText }>Not Registered?</Text>
          <Link href="/auth/signup" asChild={ true } replace>
            <TouchableOpacity>
              <Text style={ styles.footerLink }>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
    backgroundColor: "#F0F4F8",
    flex: 1
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    paddingBottom: 24
  },
  input: {
    marginBottom: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    height: 48,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#fff"
  },
  footer: {
    display: "flex",
    flexDirection: "row"
  },
  footerText: {
    marginRight: 8,
    fontSize: 14,
    lineHeight: 24,
    color: "#000"
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3"
  }
});

export default LogIn;
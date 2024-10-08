import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import Button from "../../components/button.tsx";

import { Link, router } from "expo-router";
import { useState } from "react";

import { auth } from "../config.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handlePress = (email:string, password:string):void => {
  // signup
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    console.log(userCredential.user.uid);
    router.replace("/memo/list");
  })
  .catch(err => {
    const { code, message } = err;
    console.log(code, message);
    Alert.alert(message);
  });
};

const SignUp = ():JSX.Element => {

  const [ email, setEmail ] = useState("");
  const [ pass, setPass ] = useState("");

  return (
    <View style={ styles.container }>
      <View style={ styles.inner }>
        <Text style={ styles.title }>Sign Up</Text>
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
        <Button label="Submit" onPress={ () => { handlePress(email, pass) } }/>
        <View style={ styles.footer }>
          <Text style={ styles.footerText }>Already Registered?</Text>
          <Link href="/auth/login" asChild={ true } replace>
            <TouchableOpacity>
              <Text style={ styles.footerLink }>Log In</Text>
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

export default SignUp;
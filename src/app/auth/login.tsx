import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/button.tsx";

import { Link, router } from "expo-router";

const handlePress = ():void => {
  // login
  router.replace("/memo/list");
};

const LogIn = ():JSX.Element => {

  return (
    <View style={ styles.container }>
      <View style={ styles.inner }>
        <Text style={ styles.title }>Log In</Text>
        <TextInput placeholder="Email Address" style={ styles.input } />
        <TextInput placeholder="Password" style={ styles.input } />
        <Button label="Submit" onPress={ handlePress }/>
        <View style={ styles.footer }>
          <Text style={ styles.footerText }>Not Registered?</Text>
          <Link href="/auth/signup" asChild={ true }>
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
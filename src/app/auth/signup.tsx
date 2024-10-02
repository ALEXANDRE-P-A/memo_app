import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Header from "../../components/header.tsx";
import Button from "../../components/button.tsx";

const SignUp = ():JSX.Element => {

  return (
    <View style={ styles.container }>
      <Header />
      <View style={ styles.inner }>
        <Text style={ styles.title }>Sign Up</Text>
        <TextInput placeholder="Email Address" style={ styles.input } />
        <TextInput placeholder="Password" style={ styles.input } />
        <Button label="Submit" />
        <View style={ styles.footer }>
          <Text style={ styles.footerText }>Already Registered?</Text>
          <TouchableOpacity>
            <Text style={ styles.footerLink }>Log In</Text>
          </TouchableOpacity>
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
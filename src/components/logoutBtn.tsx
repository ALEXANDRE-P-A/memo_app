import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../app/config";
import { router } from "expo-router";

const handlePress = ():void => {
  signOut(auth)
  .then(() => {
    router.replace("/auth/login");
  })
  .catch(() => {
    Alert.alert("ログアウトに失敗しました");
  });
};

const LogOutbtn = ():JSX.Element => {

  return (
    <TouchableOpacity onPress={ handlePress }>
      <Text style={ styles.text }>ログアウト</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 24,
    color: "rgba(255, 255, 255, .7)"
  }
});

export default LogOutbtn;
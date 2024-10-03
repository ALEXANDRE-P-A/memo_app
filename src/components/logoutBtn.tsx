import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LogOutbtn = ():JSX.Element => {

  return (
    <TouchableOpacity>
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
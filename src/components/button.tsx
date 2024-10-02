import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

interface Props {
  label: string
  onPress?: () => void
}

const Button = (props: Props):JSX.Element => {

  const { label, onPress } = props;

  return (
    <TouchableOpacity 
      style={ styles.button }
      onPress={ onPress }
    >
      <Text style={ styles.buttonLabel }>{ label }</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#467FD3",
    width: 99,
    height: 48,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24

  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#fff",
    fontWeight: "normal"
  },
});

export default Button;
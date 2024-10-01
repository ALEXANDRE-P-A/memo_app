import { View, Text, StyleSheet } from "react-native";

interface Props {
  children: string
}

const CircleBtn = (props: Props):JSX.Element => {

  const { children } = props;

  return (
    <View style={ styles.circleBtn }>
      <Text style={ styles.circleBtnLabel }>{ children }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  circleBtn: {
    width: 64,
    height: 64,
    backgroundColor: "#467FD3",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    /*--- only iOS ---*/
    shadowColor: "#000",
    shadowOpacity: .25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    /*--- for android (google material design) ---*/
    elevation: 8
  },
  circleBtnLabel: {
    color: "#fff",
    fontSize: 29.14
  }
});

export default CircleBtn;
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import Header from "../../components/header.tsx";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";

const Edit = ():JSX.Element => {

  return (
    <KeyboardAvoidingView behavior="height" style={ styles.container }>
      <Header />
      <View style={ styles.inputContainer }>
        <TextInput 
          value={ `買い物\nリスト` }
          style={ styles.input }
          multiline
          textAlignVertical="top"
        />
      </View>
      <CircleBtn>
        <Icon  name="check" size={ 40 } color="#fff" />
      </CircleBtn>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24
  }
});

export default Edit;
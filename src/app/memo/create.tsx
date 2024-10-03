import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";
import { router } from "expo-router";

const handlePress = ():void => {
  router.back();
};

const Create = ():JSX.Element => {

  return (
    <KeyboardAvoidingView behavior="height" style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput 
          style={ styles.input }
          multiline
          textAlignVertical="top"
        />
      </View>
      <CircleBtn onPress={ handlePress }>
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

export default Create;
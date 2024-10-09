import { View, StyleSheet, TextInput } from "react-native";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../config.ts";
import { useState } from "react";
import KeyboardAvoidingView from "../../components/keyboardAvoidingView.jsx";

const handlePress = (bodyText: string):void => {

  if(auth.currentUser === null)
    return;

  const ref = collection(db, `users/${auth.currentUser.uid}/memos`);

  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then(docRef => {
    console.log("success", docRef.id);
    router.back();
  })
  .catch(err => {
    console.log(err);
  });

};

const Create = ():JSX.Element => {

  const [ bodyText, setBodyText ] = useState("");

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput 
          style={ styles.input }
          multiline
          textAlignVertical="top"
          keyboardAppearance="dark"
          value={ bodyText }
          onChangeText={ e => setBodyText(e) }
          autoFocus
        />
      </View>
      <CircleBtn onPress={ () => handlePress(bodyText) }>
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
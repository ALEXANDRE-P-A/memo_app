import { View, StyleSheet, TextInput, Alert } from "react-native";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";
import { router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { auth, db } from "../config.ts";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import KeyboardAvoidingView from "../../components/keyboardAvoidingView.jsx";

const handlePress = (id:string, bodyText:string) => {

  if(auth.currentUser === null)
    return;

  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);

  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then(() => {
    router.back();
  })
  .catch(err => {
    Alert.alert("更新に失敗しました");
  })

  
};

const Edit = ():JSX.Element => {

  const id = String(useLocalSearchParams().id);
  const [ bodyText, setBodyText ] = useState("");

  useEffect(() => {

    if(auth.currentUser === null)
      return;

    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);

    getDoc(ref)
    .then(docRef => {
      const remoteBodyText = docRef?.data()?.bodyText;
      setBodyText(remoteBodyText);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput 
          value={ bodyText }
          onChangeText={ e => setBodyText(e) }
          style={ styles.input }
          multiline
          textAlignVertical="top"
          autoFocus
          keyboardAppearance="dark"
        />
      </View>
      <CircleBtn onPress={ () => handlePress(id, bodyText) }>
        <Icon name="check" size={ 40 } color="#fff" />
      </CircleBtn>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27,
  }
});

export default Edit;
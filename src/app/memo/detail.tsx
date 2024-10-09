import { View, Text, StyleSheet, ScrollView } from "react-native";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";
import { router, useLocalSearchParams } from "expo-router";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config.ts";
import { type Memo } from "../../../types/memo.ts";
import { useState, useEffect } from "react";

const handlePress = (id:string) => {
  router.push({ pathname: "memo/edit", params: { id } });
};

const Detail = ():JSX.Element => {

  const id = String(useLocalSearchParams().id);
  const [ memo, setMemo ] = useState<Memo | null>(null);

  useEffect(() => {

    if(auth.currentUser === null)
      return;

    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    const unsubscribe = onSnapshot(ref, memoDoc => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo;
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt 
      });
    });
    
    return unsubscribe;
  }, []);

  return (
    <View style={ styles.container }>

      <View style={ styles.memoHeader }>
        <Text style={ styles.memoHeaderTitle } numberOfLines={ 1 }>{ memo?.bodyText }</Text>
        <Text style={ styles.memoHeaderDate }>{ memo?.updatedAt?.toDate().toLocaleString("ja-JP") }</Text>
      </View>

      <ScrollView style={ styles.memoBody }>
        <Text style={ styles.memoBodyText }>{ memo?.bodyText }</Text>
      </ScrollView>

      <CircleBtn onPress={ () => handlePress(id) } style={{ top: 60, bottom: "auto" }}>
        <Icon name="pencil" size={ 40 } color={ "#fff" } />
      </CircleBtn>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 19
  },
  memoHeaderTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 32
  },
  memoHeaderDate: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingHorizontal: 27,
  },
  memoBodyText: {
    paddingVertical: 32,
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 24
  }
});

export default Detail;
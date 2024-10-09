import { View, StyleSheet, FlatList } from "react-native";
import MemoListItem from "../../components/memoListItem.tsx";
import CircleBtn from "../../components/circleBtn.tsx";
import Icon from "../../components/icon.tsx";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import LogOutbtn from "../../components/logoutBtn.tsx";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, auth } from "../config.ts";
import { type Memo } from "../../../types/memo.ts";

const handlePress = ():void => {
  router.push("/memo/create");
};

const List = ():JSX.Element => {

  const [ memos, setMemos ] = useState<Memo[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutbtn />
    });
  }, []);

  useEffect(() => {
    if(auth.currentUser === null) 
      return
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {

      const remoteMemos: Memo[] = [];

      snapshot.forEach(doc => {

        const { bodyText, updatedAt } = doc.data();

        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        });
      });
      
      setMemos(remoteMemos);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={ styles.container }>

      <FlatList 
        data={ memos }
        renderItem={({ item }) => <MemoListItem memo={ item } />}
      />
      <CircleBtn onPress={ handlePress }>
        <Icon name="plus" size={ 40 } color={ "fff" }/>
      </CircleBtn>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

export default List;
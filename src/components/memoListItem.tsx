import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from "./icon.tsx";
import { Link, router } from "expo-router";
import { type Memo } from "../../types/memo.ts";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../app/config.ts";

interface Props {
  memo: Memo
};

const handlePress = (id:string):void => {

  if(auth.currentUser === null)
    return;

  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);

  Alert.alert("Memoを削除します","よろしいですか？",[
    {
      text: "キャンセル"
    },
    {
      text: "削除する",
      style: "destructive",
      onPress: () => {
        deleteDoc(ref)
        .catch(() => {
          Alert.alert("削除に失敗しました");
        })
      }
    }
  ]);
};

const MemoListItem = (props: Props):JSX.Element | null => {

  const { memo } = props;
  const { bodyText, updatedAt } = memo;

  if(bodyText === null || updatedAt === null)
    return null;

  const datestring = updatedAt.toDate().toLocaleString("ja-JP");

  return (
    <Link 
      href={{ pathname: `/memo/detail`, params: { id: memo.id } }}
      asChild
    >
      <TouchableOpacity style={ styles.memoListItem }>
        <View>
          <Text numberOfLines={ 1 } style={ styles.memoListItemTitle }>{ bodyText }</Text>
          <Text style={ styles.memoListItemDate }>{ datestring }</Text>
        </View>
        <TouchableOpacity onPress={ () => { handlePress(memo.id) } }>
          <Icon name="delete" size={ 32 } color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, .15)"
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "bold"
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  }
});

export default MemoListItem;
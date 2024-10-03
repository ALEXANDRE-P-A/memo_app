import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from "./icon.tsx";
import { Link, router } from "expo-router";

const MemoListItem = ():JSX.Element => {

  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={ styles.memoListItem }>
        <View>
          <Text style={ styles.memoListItemTitle }>買い物リスト</Text>
          <Text style={ styles.memoListItemDate }>2024年10月01日 14:49</Text>
        </View>
        <TouchableOpacity>
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
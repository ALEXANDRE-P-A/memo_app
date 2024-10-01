import { View, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const MemoListItem = ():JSX.Element => {

  return (
     <View style={ styles.memoListItem }>
      <View>
        <Text style={ styles.memoListItemTitle }>買い物リスト</Text>
        <Text style={ styles.memoListItemDate }>2024年10月01日 14:49</Text>
      </View>
      <View>
        <AntDesign name="close" size={ 16.94 } color="#B0B0B0" />
      </View>
    </View>
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
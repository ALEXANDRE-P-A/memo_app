import { View, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Index = ():JSX.Element => {

  return (
    <View style={ styles.container }>
      {/* Header */}
      <View style={ styles.header }>
        <View style={ styles.headerInner }>
          <Text style={ styles.headerTitle }>Memo App</Text>
          <Text style={ styles.headerRight }>ログアウト</Text>
        </View>
      </View>

      {/* Memo List */}
      <View>

        {/* Memo List Item */}
        <View style={ styles.memoListItem }>
          <View>
            <Text style={ styles.memoListItemTitle }>買い物リスト</Text>
            <Text style={ styles.memoListItemDate }>2024年10月01日 14:49</Text>
          </View>
          <View>
            <AntDesign name="close" size={ 16.94 } color="#B0B0B0" />
          </View>
        </View>

         {/* Memo List Item */}
         <View style={ styles.memoListItem }>
          <View>
            <Text style={ styles.memoListItemTitle }>買い物リスト</Text>
            <Text style={ styles.memoListItemDate }>2024年10月01日 14:49</Text>
          </View>
          <View>
            <AntDesign name="close" size={ 16.94 } color="#B0B0B0" />
          </View>
        </View>

        {/* Memo List Item */}
        <View style={ styles.memoListItem }>
          <View>
            <Text style={ styles.memoListItemTitle }>買い物リスト</Text>
            <Text style={ styles.memoListItemDate }>2024年10月01日 14:49</Text>
          </View>
          <View>
            <AntDesign name="close" size={ 16.94 } color="#B0B0B0" />
          </View>
        </View>

      </View>

      <View style={ styles.circleBtn }>
        <Text style={ styles.circleBtnLabel }>＋</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#467FD3",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
    
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: "#fff",
    fontWeight: "bold"

  },
  headerRight: {
    position: "absolute",
    right: 19,
    bottom: 8,
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255, 255, 255, .7)",
  },
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
  },
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
    // only iOS
    shadowColor: "#000",
    shadowOpacity: .25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // for android (google material design)
    elevation: 8
  },
  circleBtnLabel: {
    color: "#fff",
    fontSize: 29.14
  }
});

export default Index;
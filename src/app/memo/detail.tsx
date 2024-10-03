import { View, Text, StyleSheet, ScrollView } from "react-native";
import CircleBtn from "../../components/circleBtn";
import Icon from "../../components/icon.tsx";
import { router } from "expo-router";

const handlePress = ():void => {
  router.push("/memo/edit");
};

const Detail = ():JSX.Element => {

  return (
    <View style={ styles.container }>

      <View style={ styles.memoHeader }>
        <Text style={ styles.memoHeaderTitle }>買い物リスト</Text>
        <Text style={ styles.memoHeaderDate }>2024年10月01日 17:32</Text>
      </View>

      <ScrollView style={ styles.memoBody }>
        <Text style={ styles.memoBodyText }>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>

      <CircleBtn onPress={ handlePress } style={{ top: 60, bottom: "auto" }}>
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
    marginVertical: 32,
    marginHorizontal: 27,
  },
  memoBodyText: {
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 24
  }
});

export default Detail;
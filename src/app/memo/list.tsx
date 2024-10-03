import { View, StyleSheet } from "react-native";
import MemoListItem from "../../components/memoListItem.tsx";
import CircleBtn from "../../components/circleBtn.tsx";
import Icon from "../../components/icon.tsx";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import LogOutbtn from "../../components/logoutBtn.tsx";

const handlePress = ():void => {
  router.push("/memo/create");
};

const Index = ():JSX.Element => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutbtn />
    });
  }, []);

  return (
    <View style={ styles.container }>

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

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

export default Index;
import { View, StyleSheet } from "react-native";
import Header from "../../components/header.tsx";
import MemoListItem from "../../components/memoListItem.tsx";
import CircleBtn from "../../components/circleBtn.tsx";
import Icon from "../../components/icon.tsx";

const Index = ():JSX.Element => {

  return (
    <View style={ styles.container }>
      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleBtn>
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
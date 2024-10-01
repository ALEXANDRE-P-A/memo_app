import { View, Text, StyleSheet } from "react-native";

const Index = ():JSX.Element => {

  return (
    <View style={ styles.container }>
      {/* Header(starts here) */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* Memo List */}
      <View>

        {/* Memo List Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年10月01日 14:49</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* Memo List Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年10月01日 14:49</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* Memo List Item */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年10月01日 14:49</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Index;
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ShowScreen = ({ navigation }) => {
  console.log("Blog ID", navigation.getParam("blogId"));

  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("blogId")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { blogId: navigation.getParam("blogId") })
        }
        style={styles.pencilStyle}
      >
        <FontAwesome name="pencil" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  pencilStyle: {
    marginEnd: 10,
  },
});

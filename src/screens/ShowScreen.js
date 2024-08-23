import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import CreateBlogList from "../components/CreateBlogList";

const ShowScreen = ({ navigation }) => {
  const blogId = navigation.getParam("blogId");
  console.log(blogId);

  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("blogId")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      {<CreateBlogList />}
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});

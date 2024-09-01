import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  console.log("Blog ID", navigation.getParam("blogId"));
  const blogId = navigation.getParam("blogId");

  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === blogId);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogId, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});

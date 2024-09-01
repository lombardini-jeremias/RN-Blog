import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CreateBlogList</Text>
      <Text>Enter Title:</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>

      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Button
        title="Submit Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
  },
});

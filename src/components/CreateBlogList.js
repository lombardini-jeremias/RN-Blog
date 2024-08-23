import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CreateBlogList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CreateBlogList</Text>
      <Text>Post Title</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Post Content</Text>
      <TextInput style={styles.input} />

      <Button title="Submit Blog Post" />
    </View>
  );
};

export default CreateBlogList;

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

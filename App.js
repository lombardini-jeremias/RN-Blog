import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateBlogList from "./src/components/CreateBlogList";
import EditScreen from "./src/screens/EditScreen";
import BlogPostForm from "./src/components/BlogPostForm";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateBlogList,
    Edit: EditScreen,
    BlogPostForm: BlogPostForm,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default function () {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

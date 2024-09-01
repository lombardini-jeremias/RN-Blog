import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "add_blogpost":
      const incrementalId =
        state.length > 0 ? state[state.length - 1].id + 1 : 1;

      return [
        ...state,
        {
          id: incrementalId,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, redirectHome) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    redirectHome();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, redirectHome) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    redirectHome();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    console.log("incrementalId", id);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  []
);

// dispatch is the action we take, action.type: "add_blogpost".
// We go automatically to blogReducer() and if the case is "add_blogpost" return...
// If not, we return state...
// Then the state we return go to blogPosts on the reducerHook. and reRender the component
//

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "add_blogpost":
      // Si en state ya tiene elementos, toma el ID del último post y le suma 1.
      // Si no hay posts en el state [], el primer ID será 1.
      const incrementalId =
        state.length > 0 ? state[state.length - 1].id + 1 : 1;

      return [
        ...state,
        { id: incrementalId, title: `Blog Post #${incrementalId}` },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
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
  { addBlogPost, deleteBlogPost },
  []
);

// dispatch is the action we take, action.type: "add_blogpost".
// We go automatically to blogReducer() and if the case is "add_blogpost" return...
// If not, we return state...
// Then the state we return go to blogPosts on the reducerHook. and reRender the component
//

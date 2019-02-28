const initState = {
  projects: [
    { id: "1", title: "good man", content: "blah blah blah" },
    { id: "2", title: "he is nice", content: "blah blah blah" },
    { id: "3", title: "i am awesome", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      break;
    default:
      return state;
  }
};

export default projectReducer;

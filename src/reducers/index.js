export default (state, action) => {
  switch (action.type) {
    case "changeColor":
    return {
      ...state,
      color: action.color
    };
    default:
    return state;
  }
};

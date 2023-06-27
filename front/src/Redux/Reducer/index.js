import { GET_TASKS, DELETE_TASK } from "../Actions";

const initialState = {
  allTasks: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        allTasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}

export default rootReducer;

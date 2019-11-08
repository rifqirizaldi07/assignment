const initialState = {
  todo: [],
  error: null,
  isLoading: true,
};

const room = (state = initialState, action) => {
  switch (action.type) {
    case `GET_TODO_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `GET_TODO_FULFILLED`:
      return {
        ...state,
        room: action.payload.data,
        isLoading: false,
      };
    case `GET_TODO_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default todo;

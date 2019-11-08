import axios from 'axios';

export const getTodo = token => {
  return {
    type: 'GET_TODO',
    payload: axios({
      method: 'GET',
      url: `192.168.55.127/todolist`,
    }),
  };
};

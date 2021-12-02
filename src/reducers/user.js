import produce from 'immer';

// export const LIST = "USER/LIST";
const GET_USER_REQUEST = "GET_USER_REQUEST";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUser = (params) => ({ 
  type: GET_USER_REQUEST,
  params
  // page,
  // limit
});

const initalState = {
  total : 0,
  page : 1,
  limit : 10,
  data : []
};

const user = (state = initalState, action) => 
  produce(state, draft => {
    switch (action.type) {

      case GET_USER_REQUEST:
        draft.data = action.data
        break;
      case GET_USER_SUCCESS:
        draft.data = action.data
        break;
    default:
      return state;
  }
});

export default user;
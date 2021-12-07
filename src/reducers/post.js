import produce from 'immer';

// export const LIST = "USER/LIST";
const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";
const GET_POST_ONE_REQUEST = "GET_POST_ONE_REQUEST";
const GET_POST_ONE_SUCCESS = "GET_POST_ONE_SUCCESS";

export const getPost = (page, limit) => ({ 
  type: GET_POST_REQUEST,
  params: {
    page: page,
    limit: limit
  },
  data: {}
});

export const getPostOne = (id) => ({
  type: GET_POST_ONE_REQUEST,
  params: {
    id: id
  },
  data: {}
})

const initalState = {
  // page : 1,
  // limit : 10,
  data : {}
};

const post = (state = initalState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case GET_POST_REQUEST:
        draft.data = action.data
        break;
      case GET_POST_SUCCESS:
        draft.data = action.data
        break;
      case GET_POST_ONE_REQUEST:
        draft.data = action.data
        break;
      case GET_POST_ONE_SUCCESS:
        draft.data = action.data
        break;

    default:
      return state;
  }
});

export default post;
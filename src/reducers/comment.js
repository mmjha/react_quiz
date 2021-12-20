import produce from 'immer';

const GET_POST_COMMENT_REQUEST = "GET_POST_COMMENT_REQUEST";
const GET_POST_COMMENT_SUCCESS = "GET_POST_COMMENT_SUCCESS";

export const getComment = (id, page, limit) => ({
  type: GET_POST_COMMENT_REQUEST,
  params: {
    id: id,
    page: page,
    limit: limit
  },
  data: {}
})

const initalState = {
  page : 1,
  limit : 10,
  data : {}
};

const comment = (state = initalState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case GET_POST_COMMENT_REQUEST:
        draft.data = action.data
        break;
      case GET_POST_COMMENT_SUCCESS:
        draft.data = action.data
        break;

    default:
      return state;
  }
});

export default comment;
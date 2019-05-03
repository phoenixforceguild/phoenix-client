import {types} from "../actions/types";

const membersReducer = (state = {}, action) => {
  switch(action.type) {
    case types.GET_MEMBERS:
      return {...state, loading: true};
    case types.GET_MEMBERS_SUCCESS:
      return {...state, loading: false, members: action.members};
    case types.GET_MEMBERS_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default membersReducer;
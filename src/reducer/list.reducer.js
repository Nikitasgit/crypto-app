import { SET_LIST_DYSPLAY } from "../action/list.action";

const initialeState = { showList: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_LIST_DYSPLAY:
      return { showList: action.payload };
    default:
      return state;
  }
}

export const SET_LIST_DYSPLAY = "SET_LIST_DYSPLAY";
export const setListDisplay = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_LIST_DYSPLAY, payload: bool });
  };
};

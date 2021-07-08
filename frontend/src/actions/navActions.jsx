export const toggleNav = (hexColor) => (dispatch) => {
   dispatch({
      type: "TOGGLE_NAV",
      payload: hexColor,
   });
};
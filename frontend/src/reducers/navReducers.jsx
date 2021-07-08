export const navTypeReducer = (state = false, action) => {
   switch(action.type)
   {
      case "TOGGLE_NAV":
         return {status: !state, color: action.payload}
      default:
         return state;
   }
}
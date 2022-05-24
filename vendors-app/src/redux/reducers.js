import ActivityIndicatorViewNativeComponent from "react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent";
import { GET_SHOPS } from "./actions";

const initialState = {
  shops: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SHOPS:
      return { ...state, shops: action.payload };
    default:
      return state;
  }
}

export default userReducer;

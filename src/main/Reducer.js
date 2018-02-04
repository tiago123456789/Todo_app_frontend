import { combineReducers } from "redux";
import userReducer from "./../component/user/UserReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
    user: userReducer,
    toastr: toastrReducer
});
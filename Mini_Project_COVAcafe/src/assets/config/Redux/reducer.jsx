import { combineReducers } from "redux";

import UserSlice from "./UserSlice";

const reducer = combineReducers({
  Users: UserSlice.reducer,
});

export default reducer;

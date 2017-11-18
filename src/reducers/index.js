import { setStartTime, setEndTime, setSaveStartTime, setSaveEndTime } from "./postReducer";
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    setStartTime, setEndTime, setSaveStartTime, setSaveEndTime
});
export default rootReducer;
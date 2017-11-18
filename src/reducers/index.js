import { postSetStartTime, postSetEndTime, postSetSaveStartTime, postSetSaveEndTime } from "./postReducer";
import { todoSetStartTime, todoSetEndTime, todoSetSaveStartTime, todoSetSaveEndTime } from "./todoReducer";
import { commentSetStartTime, commentSetEndTime, commentSetSaveStartTime, commentSetSaveEndTime } from "./commentReducer";
import { photoSetStartTime, photoSetEndTime, photoSetSaveStartTime, photoSetSaveEndTime } from "./photoReducer";
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    postSetStartTime, postSetEndTime, postSetSaveStartTime, postSetSaveEndTime,
    todoSetStartTime, todoSetEndTime, todoSetSaveStartTime, todoSetSaveEndTime,
    commentSetStartTime, commentSetEndTime, commentSetSaveStartTime, commentSetSaveEndTime,
    photoSetStartTime, photoSetEndTime, photoSetSaveStartTime, photoSetSaveEndTime
});
export default rootReducer;
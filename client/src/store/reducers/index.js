import { combineReducers } from "redux";
import languageReducer from "./langaugeReducer";
import latLongReducer from "./latLongReducer";
import formDataReducer from "./formDataReducer";
import pendingReducer from './pendingReducer';
import messageReducer from "./messageReducer";

const appReducers = combineReducers({
    languageReducer,
    latLongReducer,
    formDataReducer,
    pendingReducer, 
    messageReducer
});

export default appReducers;
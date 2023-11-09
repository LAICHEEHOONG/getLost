import { LANGUAGE } from "../type";

export default function languageReducer(state = 0, action) {
    switch (action.type) {
        case LANGUAGE: 
            return action.payload
        default: 
            return state;
    }
}
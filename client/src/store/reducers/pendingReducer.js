import { PENDING } from "../type";

export default function languageReducer(state = false, action) {
    switch (action.type) {
        case PENDING: 
            return !state ? true : false 
        default: 
            return state;
    }
}
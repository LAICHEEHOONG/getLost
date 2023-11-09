import { MESSAGE } from "../type";

export default function messageReducer(state = '', action) {
    switch (action.type) {
        case MESSAGE: 
            return action.payload
        default: 
            return state;
    }
}
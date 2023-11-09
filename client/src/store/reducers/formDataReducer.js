import { FORM_DATA, CLEAR_FORM_DATA } from "../type";

let info = {
    name: '',
    age: '',
    contact: '',
    email: '',
    country: '',
    other: '',
    sex: '',
    checkBox1: false,
    checkBox2: false
}

export default function formDataReducer(state = info, action) {
    switch (action.type) {
        case FORM_DATA:
            return { ...state, ...action.payload }
        case CLEAR_FORM_DATA:
            return info;
        default:
            return state;
    }
}
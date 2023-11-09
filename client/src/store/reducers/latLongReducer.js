import { LAT_LONG, GET_IP } from "../type";

let info = {
    latitude: '',
    longitude: '',
    ip: '',
    date: new Date(),
    message: ''
}

export default function latLongReducer(state = info, action) {
    switch (action.type) {
        case LAT_LONG:
            return { ...state, ...action.payload }
        case GET_IP:
            return {...state, ip: action.payload}

        default:
            return state;
    }
}
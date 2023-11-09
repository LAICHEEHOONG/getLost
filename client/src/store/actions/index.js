import { LANGUAGE, LAT_LONG, FORM_DATA, GET_IP, CLEAR_FORM_DATA, PENDING, MESSAGE } from "../type";

export const messageAction = (msg) => ({
    type: MESSAGE,
    payload: msg
})

export const pendingAction = () => ({
    type: PENDING
})

export const clearFormAction = () => ({
    type: CLEAR_FORM_DATA
})

export const languageAction = (value) => ({
    type: LANGUAGE,
    payload: value
})

export const latLongAction = (info) => ({
    type: LAT_LONG,
    payload: info
})

export const ipAction = (ip) => ({
    type: GET_IP,
    payload: ip
})

export const formDataAction = (info) => ({
    type: FORM_DATA,
    payload: info
})
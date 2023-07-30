import { INCREMENT_COUNT, DECREMENT_COUNT, ADD_ITEM } from "../constants/dataConstant";

export const decrement = () => {
    return {
        type: DECREMENT_COUNT,
    }
}


export const increment = () => {
    return {
        type: INCREMENT_COUNT
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload:item
    }
}
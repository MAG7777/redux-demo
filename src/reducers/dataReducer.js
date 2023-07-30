import { INCREMENT_COUNT, DECREMENT_COUNT, ADD_ITEM } from "../constants/dataConstant";

const initialState = {
    count: 0,
    data: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };

        case ADD_ITEM:
            return {
                ...state,
                data: [...state.data,action.payload]
            }

        default:
            return state;
    }
}

export default dataReducer;
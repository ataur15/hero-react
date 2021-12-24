import { BUY_MANGO } from "./mangoTypes"

const initialState = {
    numOfMangos: 30
}

const mangoReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_MANGO:
            return {
                ...state,
                numOfMangos: state.numOfMangos - action.payload
            }
            break;

        default: return state;
    }
}

export default mangoReducer;
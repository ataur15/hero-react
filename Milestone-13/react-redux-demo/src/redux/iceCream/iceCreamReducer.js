const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            break;

        default: return state;
    }
}

export default iceCreamReducer;
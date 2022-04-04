const initialState = {value : ""};

const searchReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "search" :
            return { ...state, value: action.payload}
        default:
            return state;
    }
}

export default searchReducer
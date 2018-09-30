import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
        return {
            ...state,
            results: state.results.concat({value: action.result, id: new Date()})
        }
        case actionTypes.DELETE_RESULT:
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1);

        const newArray = state.results.filter(result => result.id !== action.resultElemId)
        return {
            ...state,
            results: newArray
        }
    }
    return state;
}

export default reducer;
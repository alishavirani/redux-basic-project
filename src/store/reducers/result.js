import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const newArray = state.results.filter(result => result.id !== action.resultElemId)
    return updateObject(state, {results: newArray})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({value: action.result, id: new Date()})})

        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            return deleteResult(state, action);
    }
    return state;
}

export default reducer;
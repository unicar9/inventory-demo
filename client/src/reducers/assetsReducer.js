import { FETCH_ASSETS, ADD_ASSET, SEARCH_ASSETS } from '../actions/types'

const defaultState = {
    assets: [],
    asset: {
        name: ''
    }
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ASSETS:
            return {
                ...state,
                assets: action.payload
            }
        case ADD_ASSET:
            return {
                ...state, 
                asset: action.payload
            }
        case SEARCH_ASSETS:
            return {
                ...state, 
                assets: action.payload
            }
        default:
            return state
    }
}
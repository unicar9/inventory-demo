import { FETCH_ASSETS, ADD_ASSET } from '../actions/types'

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_ASSETS:
            return action.payload
        case ADD_ASSET:
            return [...state, action.payload]
        default:
            return state
    }
}
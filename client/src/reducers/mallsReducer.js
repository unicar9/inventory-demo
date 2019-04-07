import { FETCH_MALLS, ADD_MALL, DELETE_MALL, FETCH_MALL, UPDATE_MALL } from '../actions/types'

const defaultState = {
    malls: [],
    mall: {
        name: ''
    }
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case FETCH_MALLS:
            return {
                ...state,
                malls: action.payload
            }
        case ADD_MALL:
            return {
                ...state,
                malls: [...state.malls, action.payload.data]
            }
        case FETCH_MALL:
            return {
                ...state,
                mall: action.payload.data
            }
        case UPDATE_MALL:
            const mall = action.payload.data
            return {
                ...state,
                malls: state.malls.map(existingMall => existingMall._id === mall._id ? mall : existingMall)
            }
        case DELETE_MALL:
            const _id = action.payload.data.mallId
            return {
                ...state,
                malls: state.malls.filter(mall => mall._id !== _id)
            }
        default:
            return state
    }
}
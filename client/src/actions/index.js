import axios from 'axios'
import { 
    FETCH_USER, 
    ADD_MALL, 
    FETCH_MALL, 
    DELETE_MALL, 
    FETCH_MALLS, 
    ADD_ASSET, 
    FETCH_ASSETS, 
    UPDATE_MALL,
    SEARCH_ASSETS 
} from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
  
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const addMall = (mall) => async dispatch => {
    const req = await axios.post('/api/malls', mall)
    
    dispatch({ type: ADD_MALL, payload: req })
}

export const fetchMall = (mallId) => async dispatch => {
    const res = await axios.get(`/api/malls/${mallId}`)
    
    dispatch({ type: FETCH_MALL, payload: res })
}

export const updateMall = (mall) => async dispatch => {
    const res = await axios.put(`/api/malls/${mall._id}`, mall)
    
    dispatch({ type: UPDATE_MALL, payload: res })
}

export const deleteMall = (mallId) => async dispatch => {
    const res = await axios.delete(`/api/malls/${mallId}`)
    dispatch({ type: DELETE_MALL, payload: res })
}

export const fetchMalls = () => async dispatch => {
    const res = await axios.get('/api/malls')

    dispatch({ type: FETCH_MALLS, payload: res.data })
}

export const addAsset = (asset) => async dispatch => {
    const req = await axios.post('/api/assets', asset)

    dispatch({ type: ADD_ASSET, payload: req })
}

export const fetchAssets = () => async dispatch => {
    const res = await axios.get('/api/assets')

    dispatch({ type: FETCH_ASSETS, payload: res.data })
}

export const searchAssets = (queryData) => async dispatch => {
    const res = await axios.post('/api/assets/search', queryData)

    dispatch({ type: SEARCH_ASSETS, payload: res.data })
}



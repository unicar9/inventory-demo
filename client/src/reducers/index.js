import { combineReducers } from 'redux'
import authReducer from './authReducer'
import mallsReducer from './mallsReducer'
import assetsReducer from './assetsReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    malls: mallsReducer,
    assets: assetsReducer,
    form: formReducer
})
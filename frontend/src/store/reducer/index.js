import { combineReducers } from 'redux';
import list from './list'
import todo from './todo'


const rootReducer = combineReducers({
    list,
    todo
})

export default rootReducer;
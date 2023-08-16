import { legacy_createStore,combineReducers } from 'redux'

import handleNum from './NumStore/reducer'
import handleArr from './ArrStore/reducer'

// 组合各个模块的reducer
const reducers = combineReducers({
  handleNum,
  handleArr
})

export default legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
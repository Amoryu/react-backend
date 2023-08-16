import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux'
// 实现action的异步调用
import reduxThunk from 'redux-thunk'
import handleNum from './NumStore/reducer'
import handleArr from './ArrStore/reducer'

// 组合各个模块的reducer
const reducers = combineReducers({
  handleNum,
  handleArr
})

// export default legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

export default store
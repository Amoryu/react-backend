import { legacy_createStore } from 'redux'

import reducer from './reducer'

export default legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
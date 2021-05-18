import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,combineReducers } from 'redux';
//import reducer from './store/reducer';
import { Provider } from 'react-redux';
import CounterReducer from './store/Reducer/counter';
import ResultsReducer from './store/Reducer/results';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res:ResultsReducer
})
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

registerServiceWorker();

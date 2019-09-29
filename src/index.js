import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const ipReducer = (state = [], action) =>{
    console.log('ipReducer', action)
    if (action.type !== 'IP'){
        return state;
    }
    const ip = action.ip
    return [
        ...state,
        ip
    ];
}

const storeInstance = createStore(
    combineReducers({
        ipReducer,
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider> , document.getElementById('root'));
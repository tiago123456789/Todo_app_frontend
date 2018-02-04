import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import rootReducer from "./main/Reducer";
import App from './main/App';
import './index.css';

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import reduxMulti from "redux-multi";
import rootReducer from "./main/Reducer";
import App from './main/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(reduxMulti, reduxThunk)(createStore)(rootReducer, devTools);
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));

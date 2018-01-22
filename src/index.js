import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./main/Reducer";
import App from './main/App';
import './index.css';

const store = createStore(rootReducer);
ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import MessageToastr from "react-redux-toastr";
import rootReducer from "./main/Reducer";
import App from './main/App';
import './index.css';

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store} >
        <div>
            <App />
            <MessageToastr timeOut={4000}
                           newestOnTop={false}
                           preventDuplicates
                           position="top-left"
                           transitionIn="fadeIn"
                           transitionOut="fadeOut"
                           progressBar />
        </div>
    </Provider>, document.getElementById('root'));

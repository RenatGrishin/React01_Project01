import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

export let rerenderTreeSite = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderTreeSite(store.getState());
store.subscribe(()=>{rerenderTreeSite(store.getState());}
);
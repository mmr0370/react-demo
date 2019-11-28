import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./Reducers";
import CountApp from "./Container/CountApp";
export  default function App(){
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <CountApp />
        </Provider>
    )
}
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./Reducers";
import CountApp from "./Container/CountApp";
import TodoApp from "./Container/TodoAppListApp";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export  default function App(){
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/">
                        <CountApp />
                    </Route>
                    <Route path="/count">
                        <CountApp />
                    </Route>
                    <Route path="/todo">
                        <TodoApp />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}

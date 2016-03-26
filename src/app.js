import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

let rawData = `
    {
        "a": "a-value",
        "b": [
            {
                "first": "first value",
                "second": "second value"
            },
            {
                "first": "first value 2",
                "second": "second value 2"
            },
            {
                "first": "first value 3",
                "second": "second value 3",
                "third": "third value 3"
            }
        ],
        "c": [
            [
              "item 1",
              "item 2",
              "item 3"
            ],
            [
              { "name": "John Doe", "age": 20, "email": "john_doe@company.com" }
            ]
        ],
        "d": { "name": "John Doe", "age": 20, "email": "john_doe@company.com" }
    }
`;

var initialState = {
    rawData,
    data: JSON.parse(rawData)
};

const store = createStore(reducers, initialState);

function _render() {
    render((
        <Provider store={store}>
            <App data={store.getState().data} rawData={store.getState().rawData}/>
        </Provider>
    ), document.getElementById('app'));
}

_render();

store.subscribe(_render);


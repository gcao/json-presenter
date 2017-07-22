import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

import './app.scss';

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
                "cell 1-1",
                {
                    "first": "first value",
                    "second": "second value"
                }
            ],
            [
                "cell 2-1",
                {
                    "first": "first value",
                    "second": "second value"
                }
            ]
        ],
        "d": { "name": "John Doe", "age": 20, "email": "john_doe@company.com" },
        "e": [ "Test 1", "Test 2", "Test 3" ],
        "f": []
    }
`;

var initialState = {
    rawData,
    data: JSON.parse(rawData)
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function _render() {
    let state = store.getState();
    let {data, rawData, pathUnderMouse} = state;

    render((
        <Provider store={store}>
            <div className="container">
                <p>a: Literal</p>
                <p>b: Array of objects</p>
                <p>c: Array of arrays</p>
                <p>d: Object</p>
                <p>e: Array of literals</p>
                <p>f: Empty array</p>
                <App data={data} rawData={rawData} pathUnderMouse={pathUnderMouse}/>
            </div>
        </Provider>
    ), document.getElementById('app'));
}

_render();

store.subscribe(_render);


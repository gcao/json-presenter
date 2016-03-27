import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

let rawData = `
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product set",
    "type": "array",
    "items": {
        "title": "Product",
        "type": "object",
        "properties": {
            "id": {
                "description": "The unique identifier for a product",
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "price": {
                "type": "number",
                "minimum": 0,
                "exclusiveMinimum": true
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1,
                "uniqueItems": true
            },
            "dimensions": {
                "type": "object",
                "properties": {
                    "length": {"type": "number"},
                    "width": {"type": "number"},
                    "height": {"type": "number"}
                },
                "required": ["length", "width", "height"]
            },
            "warehouseLocation": {
                "description": "Coordinates of the warehouse with the product",
                "$ref": "http://json-schema.org/geo"
            }
        },
        "required": ["id", "name", "price"]
    }
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


import React, { Component } from 'react';

import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        var data = `
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
        return (
            <div className={styles.root}>
                <h1>{"JSON Presenter"}</h1>
                <JsonPresenter data={JSON.parse(data)}/>
                <textarea style={{marginTop: '15px', border: '0px'}} rows="25" cols="100">{data}</textarea>
            </div>
        );
    }
}

export default App;

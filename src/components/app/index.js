import React, { Component } from 'react';

import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        var data = `
        {
            "a": "a-value",
            "b": [
                100,
                200,
                {
                    "first": "this is a test",
                    "second": "this is another test"
                },
                {
                    "first": "this is a test",
                    "second": "this is another test"
                },
                300
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
            ]
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

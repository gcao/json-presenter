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
                300
            ]
        }
        `;
        return (
            <div className={styles.root}>
                <h1>{"JSON Presenter"}</h1>
                <JsonPresenter data={JSON.parse(data)}/>
                <textarea style={{marginTop: '15px'}} rows="25" cols="100">{data}</textarea>
            </div>
        );
    }
}

export default App;

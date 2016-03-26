import React, { Component, PropTypes } from 'react';

import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className={styles.root}>
                <h1>JSON Presenter</h1>
                <JsonPresenter data={JSON.parse(data)}/>
                <button>Update</button>
                <textarea style={{marginTop: '15px', border: '0px'}} rows="25" cols="100">{data}</textarea>
            </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.any.isRequired
};

export default App;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import JsonPath from '../../json-path';
import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        let input;

        let handleUpdate = () => {
            this.props.dispatch({
                type: 'UPDATE_JSON',
                rawData: input.value
            });
        };

        return (
            <div className={styles.root}>
                <h1>JSON Presenter</h1>
                <JsonPresenter data={this.props.data} path={new JsonPath()}/>
                <button className="update" onClick={handleUpdate}>Update</button><br/>
                <textarea ref={node => input = node} style={{marginTop: '15px', border: '0px'}} rows="25" cols="100">{this.props.rawData}</textarea>
            </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    rawData: PropTypes.string.isRequired
};

export default connect()(App);

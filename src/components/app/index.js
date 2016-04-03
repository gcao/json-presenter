import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateJSON } from '../../actions';
import JsonPath from '../../json-path';
import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        let input;
        let pathUnderMouse = this.props.pathUnderMouse;
        let path = pathUnderMouse ? pathUnderMouse.toString() : '';

        return (
            <div className={styles.root}>
                <h1>JSON Presenter</h1>
                Path: <span id="path">{path}</span>
                <JsonPresenter data={this.props.data} config={this.props.config} path={new JsonPath()}/>
                <button className="update" onClick={() => this.props.dispatch(updateJSON(input.value))}>Update</button><br/>
                <textarea className="raw-json" rows="25" cols="100"
                    ref={node => input = node}
                    value={this.props.rawData}
                />
            </div>
        );
    }
}

App.propTypes = {
    config: PropTypes.object.isRequired,
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    pathUnderMouse: PropTypes.object,
    rawData: PropTypes.string.isRequired
};

export default connect()(App);

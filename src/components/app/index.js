import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setPath, updateJSON } from '../../actions';
import JsonPath from '../../json-path';
import JsonPresenter from '../json-presenter';

import styles from './styles.scss';

class App extends Component {
    render() {
        let input;
        let pathUnderMouse = this.props.pathUnderMouse;
        let path = pathUnderMouse ? pathUnderMouse.toString() : '';

        return (
            <div
                className={styles.root}
                onMouseOver={e => {
                    e.preventDefault();
                    this.props.dispatch(setPath(new JsonPath()));
                }}
                onMouseOut={e => {
                    e.preventDefault();
                    this.props.dispatch(setPath(new JsonPath()));
                }}
            >
                <h1>JSON Presenter</h1>
                Path: <span id="path">{path}</span>
                <JsonPresenter data={this.props.data} path={new JsonPath()}/>
                <button className="update" onClick={() => updateJSON(input.value)}>Update</button><br/>
                <textarea ref={node => input = node} style={{marginTop: '15px', border: '0px'}} rows="25" cols="100">{this.props.rawData}</textarea>
            </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    pathUnderMouse: PropTypes.object,
    rawData: PropTypes.string.isRequired
};

export default connect()(App);

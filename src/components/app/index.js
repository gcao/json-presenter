import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateJSON } from '../../actions';
import { JsonRootPresenter } from '../json-presenter';

import './styles.scss';

class App extends Component {
    render() {
        let input;
        let {dispatch, data, rawData, pathUnderMouse} = this.props;
        let path = pathUnderMouse ? pathUnderMouse.toString() : '';

        return (
            <div>
                <h1>JSON Presenter</h1>

                Path: <span id="path">{path}</span>
                <JsonRootPresenter data={data}/>

                <button className="update"
                    onClick={() => dispatch(updateJSON(input.value))}
                >Update</button><br/>
                <textarea className="raw-json" rows="25" cols="100"
                    ref={node => input = node}
                    value={rawData}
                    onChange={event => dispatch(updateJSON(event.target.value))}
                />
            </div>
        );
    }
}

App.propTypes = {
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    pathUnderMouse : PropTypes.object,
    rawData        : PropTypes.string.isRequired
};

export default connect()(App);

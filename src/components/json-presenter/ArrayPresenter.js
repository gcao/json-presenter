import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';
import ArrayOfLiteralsPresenter from './ArrayOfLiteralsPresenter';
import { createMouseOverHandler } from './utils';

class ArrayPresenter extends Component {
    render() {
        let {dispatch, data, path, pathUnderMouse} = this.props;

        if (data.length > 0) {
            if (R.isArrayLike(data[0])) {
                return (<ArrayOfArraysPresenter data={data} path={path}/>);
            } else if (R.is(Object, data[0])) {
                return (<ArrayOfObjectsPresenter data={data} path={path}/>);
            } else {
                return (<ArrayOfLiteralsPresenter data={data} path={path}/>);
            }
        } else {
            return (
                <div className="json-empty-array"
                    onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
                >Empty array</div>
            );
        }
    }
}

ArrayPresenter.propTypes = {
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(ArrayPresenter);

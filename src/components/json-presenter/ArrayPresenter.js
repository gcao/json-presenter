import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import JsonPath from '../../json-path';
// import { setPath } from '../../actions';
// import JsonPresenter from '.';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';
import ArrayOfLiteralsPresenter from './ArrayOfLiteralsPresenter';

class ArrayPresenter extends Component {
    render() {
        let {data, path} = this.props;

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
                <div className="json-empty-array">Empty array</div>
            );
        }
    }
}

ArrayPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(ArrayPresenter);

import React, { Component, PropTypes } from 'react';
import R from 'ramda';
global.R = R; // Exported for testing purpose

import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';

import './styles.scss';

class JsonPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var depth = path.length;

        if (R.isArrayLike(data)) {
            return (<ArrayPresenter data={data} path={path}/>);
        } else if (R.is(Object, data)) {
            return (<ObjectPresenter data={data} path={path}/>);
        } else {
            return (
                <div className={'json-literal depth' + depth}>
                    {data}
                </div>
            );
        }
    }
}

JsonPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    path: PropTypes.array.isRequired
};

export default JsonPresenter;

import React, { Component, PropTypes } from 'react';
import R from 'ramda';
global.R = R; // Exported for testing purpose

import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';

import './styles.scss';

class JsonPresenter extends Component {
    render() {
        var depth = this.props.depth || 0;
        var data = this.props.data;

        if (R.isArrayLike(data)) {
            return (<ArrayPresenter data={data} depth={depth}/>);
        } else if (R.is(Object, data)) {
            return (<ObjectPresenter data={data} depth={depth}/>);
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
    data:  PropTypes.any.isRequired,
    depth: PropTypes.number
};

export default JsonPresenter;

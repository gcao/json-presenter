import React, { Component, PropTypes } from 'react';
import R from 'ramda';
global.R = R; // Exported for testing purpose

import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';

import './styles.scss';

class JsonPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;
        var config = this.props.config;

        if (R.isArrayLike(data)) {
            return (<ArrayPresenter data={data} path={path} config={config}/>);
        } else if (R.is(Object, data)) {
            return (<ObjectPresenter data={data} path={path} config={config}/>);
        } else {
            return (<LiteralPresenter data={data} path={path}/>);
        }
    }
}

JsonPresenter.propTypes = {
    config: PropTypes.object.isRequired,
    data: PropTypes.any.isRequired,
    path: PropTypes.array.isRequired
};

export default JsonPresenter;

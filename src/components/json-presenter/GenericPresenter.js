import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPath from '../../json-path';
import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';

class GenericPresenter extends Component {
    render() {
        let {data, path} = this.props;

        if (R.isArrayLike(data)) {
            return (<ArrayPresenter data={data} path={path}/>);
        } else if (R.is(Object, data)) {
            return (<ObjectPresenter data={data} path={path}/>);
        } else {
            return (<LiteralPresenter data={data} path={path}/>);
        }
    }
}

GenericPresenter.propTypes = {
    data: PropTypes.any,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default GenericPresenter;

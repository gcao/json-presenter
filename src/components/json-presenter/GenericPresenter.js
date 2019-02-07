import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

import JsonPath from '../../json-path';
import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';

class GenericPresenter extends Component {
    render() {
        let {data} = this.props;

        if (R.isArrayLike(data)) {
            return (<ArrayPresenter {...this.props}/>);
        } else if (R.is(Object, data)) {
            return (<ObjectPresenter {...this.props}/>);
        } else {
            return (<LiteralPresenter {...this.props}/>);
        }
    }
}

GenericPresenter.propTypes = {
    data: PropTypes.any,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default GenericPresenter;

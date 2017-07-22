import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOutHandler } from './utils';

class JsonRootPresenter extends Component {
    render() {
        let {dispatch, data} = this.props;
        let path = new JsonPath([]);

        return (
            <div className="json-root"
                onMouseOut={createMouseOutHandler(dispatch)}
            >
                <GenericPresenter data={data} path={path}/>
            </div>
        );
    }
}

JsonRootPresenter.propTypes = {
    data: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(JsonRootPresenter);
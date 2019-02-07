import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import { updateData } from '../../actions';
import { createMouseOverHandler } from './utils';

class LiteralPresenter extends Component {
    render() {
        let {dispatch, data, path, pathUnderMouse} = this.props;

        return (
            <div className={'json-literal depth' + path.size()}
                onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
            >
                <RIEInput value={data || ''} propName="data"
                    change={change => {
                        if (data !== change.data) {
                            dispatch(updateData(path, change.data));
                        }
                    }}
                />
            </div>
        );
    }
}

LiteralPresenter.propTypes = {
    data           : PropTypes.any,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(LiteralPresenter);

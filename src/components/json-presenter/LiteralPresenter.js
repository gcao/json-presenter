import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import JsonPath from '../../json-path';
import { updateData } from '../../actions';
import { createMouseEnterHandler } from './utils';

class LiteralPresenter extends Component {
    render() {
        let {dispatch, data, path} = this.props;

        return (
            <div className={'json-literal depth' + path.size()}
                onMouseEnter={createMouseEnterHandler(dispatch, path)}
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
    data: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(LiteralPresenter);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import JsonPath from '../../json-path';
import { updateData } from '../../actions';

class LiteralPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        return (
            <div className={'json-literal depth' + path.size()}>
                <RIEInput value={data || ''} propName="data"
                    change={change => {
                        if (this.props.data !== change.data) {
                            this.props.dispatch(updateData(this.props.path, change.data));
                        }
                    }}
                />
            </div>
        );
    }
}

LiteralPresenter.propTypes = {
    data: PropTypes.any.optional,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(LiteralPresenter);

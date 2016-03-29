import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import { updateData } from '../../actions';

class LiteralPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        return (
            <div className={'json-literal depth' + path.size()}>
                <RIEInput value={data || ''} propName="data"
                    change={change => {
                        if (this.props.data !== change.value) {
                            this.props.dispatch(updateData(this.props.path, change.data));
                        }
                    }}
                />
            </div>
        );
    }
}

LiteralPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(LiteralPresenter);

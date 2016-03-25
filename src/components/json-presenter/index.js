import React, { Component, PropTypes } from 'react';

class JsonPresenter extends Component {
    render() {
        return (
            <div>
                {this.props.data.a}
            </div>
        );
    }
}

JsonPresenter.propTypes = {
    data: PropTypes.any.isRequired
};

export default JsonPresenter;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import { updatePropName } from '../../actions';

class ObjectPropNamePresenter extends Component {
    render() {
        var dispatch = this.props.dispatch;
        var path     = this.props.path;
        var name     = this.props.name;

        // TODO this is against the principles of React and Redux and doesn't work
        var showActionsIcon = false;

        return (
            <td className="prop-name"
                onMouseOver={() => showActionsIcon = true}
                onMouseOut={() => showActionsIcon = false}
            >
                {showActionsIcon ? <span className="actions fa fa-cog"></span> : ''}
                <RIEInput value={name || ''} propName="data"
                    change={change => {
                        if (name !== change.data) {
                            dispatch(updatePropName(path, name, change.data));
                        }
                    }}
                />
            </td>
        );
    }
}

ObjectPropNamePresenter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ObjectPropNamePresenter);

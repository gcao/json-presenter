import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import { updatePropName, updateConfig } from '../../actions';

class ObjectPropNamePresenter extends Component {
    render() {
        var dispatch = this.props.dispatch;
        var path     = this.props.path;
        var name     = this.props.name;
        var config   = this.props.config || {};

        var propPath = path.append(name);
        var configForPath = config[propPath.toPropName()] || {};
        var showActionsIcon = configForPath['showActionsIcon'];

        return (
            <td className="prop-name"
                onMouseOver={() => dispatch(updateConfig(propPath, 'showActionsIcon', true))}
                onMouseOut={() => dispatch(updateConfig(propPath, 'showActionsIcon'))}
            >
                <span className={'actions fa ' + (showActionsIcon ? 'fa-cog' : 'fa-fw')}></span>
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
    config: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ObjectPropNamePresenter);

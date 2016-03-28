import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import R from 'ramda';

import actions from '../../actions';
import JsonPresenter from '.';

class ObjectPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        return (
            <table
                className={'json-object depth' + path.size()}
                onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path)); }}
            >
                {
                    Object.keys(data).sort().map((key, i) =>
                        <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                            onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path.append(key))); }}
                        >
                            <td className="prop-name">{key}</td>
                            <td className="prop-value"><JsonPresenter data={data[key]} path={path.append(key)}/></td>
                        </tr>
                    )
                }
            </table>
        );
    }
}

ObjectPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ObjectPresenter);

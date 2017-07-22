import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import JsonPath from '../../json-path';
import { setPath, updatePropName } from '../../actions';
import GenericPresenter from './GenericPresenter';

class ObjectPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        return (
            <table
                className={'json-object depth' + path.size()}
                onMouseEnter={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.dispatch(setPath(path));
                }}
            >
                <tbody>
                    {
                        Object.keys(data).sort().map((key, i) =>
                            <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                                onMouseEnter={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.dispatch(setPath(path.append(key)));
                                }}
                            >
                                <td className="prop-name">
                                    <RIEInput value={key || ''} propName="data"
                                        change={change => {
                                            if (key !== change.data) {
                                                this.props.dispatch(updatePropName(this.props.path, key, change.data));
                                            }
                                        }}
                                    />
                                </td>
                                <td className="prop-value"><GenericPresenter data={data[key]} path={path.append(key)}/></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

ObjectPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(ObjectPresenter);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import JsonPath from '../../json-path';
import { updatePropName } from '../../actions';
import GenericPresenter from './GenericPresenter';
import { createMouseEnterHandler } from './utils';

class ObjectPresenter extends Component {
    render() {
        let {dispatch, data, path} = this.props;

        return (
            <table className={'json-object depth' + path.size()}
                onMouseEnter={createMouseEnterHandler(dispatch, path)}
            >
                <tbody>
                    {
                        Object.keys(data).sort().map((key, i) =>
                            <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                                <td className="prop-name"
                                    onMouseEnter={createMouseEnterHandler(dispatch, path.append(key))}
                                >
                                    <RIEInput value={key || ''} propName="data"
                                        change={change => {
                                            if (key !== change.data) {
                                                dispatch(updatePropName(path, key, change.data));
                                            }
                                        }}
                                    />
                                </td>
                                <td className="prop-value"
                                    onMouseEnter={createMouseEnterHandler(dispatch, path.append(key))}
                                >
                                    <GenericPresenter data={data[key]} path={path.append(key)}/>
                                </td>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import { updatePropName } from '../../actions';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';

class ObjectPresenter extends Component {
    render() {
        let {dispatch, data, path, pathUnderMouse} = this.props;

        return (
            <table className={'json-object depth' + path.size()}
                onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
            >
                <tbody>
                    {
                        Object.keys(data).sort().map((key, i) =>
                            <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                                <td className="prop-name"
                                    onMouseOver={createMouseOverHandler(dispatch, path.append(key), pathUnderMouse)}
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
                                    onMouseOver={createMouseOverHandler(dispatch, path.append(key), pathUnderMouse)}
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
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(ObjectPresenter);

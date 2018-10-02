import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';
import { sort } from '../../actions';

class ArrayOfObjectsPresenter extends Component {
    render() {
        let {dispatch, data, path, pathUnderMouse} = this.props;
        let keys = R.uniq(R.flatten(R.map(Object.keys, data)));

        return (
            <table className={'json-object-array depth' + path.size()}
                onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
            >
                <tbody>
                    {
                        <tr className="head">
                            <th className="index-col">&nbsp;</th>
                            {
                                keys.map((key, i) =>
                                    <th key={i}
                                        onMouseOver={createMouseOverHandler(dispatch, path.append(-1).append(key), pathUnderMouse)}
                                    >
                                        <span>{key}</span>
                                        <i className="fas fa-sort" onClick={() => dispatch(sort(path, key))}></i>
                                    </th>
                                )
                            }
                        </tr>
                    }
                    {
                        data.map((row, i) =>
                            <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                                onMouseOver={createMouseOverHandler(dispatch, path.append(i), pathUnderMouse)}
                            >
                                <td className="index-col">{i + 1}</td>
                                {
                                    keys.map((key, j) => {
                                        return (
                                            <td key={j}
                                                onMouseOver={createMouseOverHandler(dispatch, path.append(i).append(key), pathUnderMouse)}
                                            >
                                                <GenericPresenter data={row[key]} path={path.append(i).append(key)}/>
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

ArrayOfObjectsPresenter.propTypes = {
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(ArrayOfObjectsPresenter);

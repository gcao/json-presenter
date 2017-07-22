import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseEnterHandler } from './utils';

class ArrayOfObjectsPresenter extends Component {
    render() {
        let {dispatch, data, path} = this.props;
        let keys = R.uniq(R.flatten(R.map(Object.keys, data)));

        return (
            <table className={'json-object-array depth' + path.size()}
                onMouseEnter={createMouseEnterHandler(dispatch, path)}
            >
                <tbody>
                    {
                        <tr className="head">
                            <th className="index-col">&nbsp;</th>
                            {
                                keys.map((key, i) =>
                                    <th key={i}
                                        onMouseEnter={createMouseEnterHandler(dispatch, path.append(-1).append(key))}
                                    >{key}</th>
                                )
                            }
                        </tr>
                    }
                    {
                        data.map((row, i) =>
                            <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                                onMouseEnter={createMouseEnterHandler(dispatch, path.append(i))}
                            >
                                <td className="index-col">{i + 1}</td>
                                {
                                    keys.map((key, j) => {
                                        return (
                                            <td key={j}
                                                onMouseEnter={createMouseEnterHandler(dispatch, path.append(i).append(key))}
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
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(ArrayOfObjectsPresenter);

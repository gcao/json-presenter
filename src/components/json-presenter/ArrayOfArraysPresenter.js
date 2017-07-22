import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import JsonPath from '../../json-path';
import JsonPresenter from '.';
import { createMouseEnterHandler, createMouseOutHandler } from './utils';

class ArrayOfArraysPresenter extends Component {
    render() {
        let {dispatch, data, path} = this.props;
        let width = R.last(data.map(R.length).sort());

        return (
            <table className={'json-array-array depth' + path.size()}
                onMouseEnter={createMouseEnterHandler(dispatch, path)}
                onMouseOut={createMouseOutHandler(dispatch)}
            >
                <tbody>
                    {
                        <tr className="head">
                            <th className="index-col">&nbsp;</th>
                            {
                                R.times((i) =>
                                    <th key={i}
                                        onMouseEnter={createMouseEnterHandler(this.props.dispatch, path.append(-1).append(i))}
                                    >{i+1}</th>
                                , width)
                            }
                        </tr>
                    }
                    {
                        data.map((row, i) =>
                            <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                                onMouseEnter={createMouseEnterHandler(this.props.dispatch, path.append(i))}
                            >
                                <td className="index-col">{i + 1}</td>
                                {
                                    R.times((j) => {
                                        return (
                                            <td key={j}
                                                onMouseEnter={createMouseEnterHandler(this.props.dispatch, path.append(i).append(j))}
                                            >
                                                <JsonPresenter data={row[j]} path={path.append(i).append(j)}/>
                                            </td>
                                        );
                                    }, width)
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

ArrayOfArraysPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(ArrayOfArraysPresenter);

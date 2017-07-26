import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';

class ArrayOfArraysPresenter extends Component {
    render() {
        let {dispatch, data, path, pathUnderMouse} = this.props;
        let width = R.last(data.map(R.length).sort());

        return (
            <table className={'json-array-array depth' + path.size()}
                onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
            >
                <tbody>
                    <tr className="head">
                        <th className="index-col">&nbsp;</th>
                        {
                            R.times((i) =>
                                <th key={i}
                                    onMouseOver={createMouseOverHandler(this.props.dispatch, path.append(-1).append(i), pathUnderMouse)}
                                >{i+1}</th>
                            , width)
                        }
                    </tr>
                    {
                        data.map((row, i) =>
                            <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                                <td className="index-col"
                                    onMouseOver={createMouseOverHandler(this.props.dispatch, path.append(i), pathUnderMouse)}
                                >{i + 1}</td>
                                {
                                    R.times((j) => {
                                        return (
                                            <td key={j}
                                                onMouseOver={createMouseOverHandler(this.props.dispatch, path.append(i).append(j), pathUnderMouse)}
                                            >
                                                <GenericPresenter data={row[j]} path={path.append(i).append(j)}/>
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
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(ArrayOfArraysPresenter);

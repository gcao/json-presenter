import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import actions from '../../actions';
import JsonPresenter from '.';

class ArrayOfArraysPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var width = R.last(data.map(R.length).sort());

        return (
            <table
                className={'json-array-array depth' + path.size()}
                onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path)); }}
            >
                {
                    <tr className="head">
                        <th className="index-col">&nbsp;</th>
                        {
                            R.times((i) => <th key={i}>{i+1}</th>, width)
                        }
                    </tr>
                }
                {
                   data.map((row, i) =>
                       <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                           onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path.append(i))); }}
                       >
                           <td className="index-col">{i + 1}</td>
                           {
                               R.times((j) => <td><JsonPresenter data={row[j]} path={path.append(i).append(j)}/></td>, width)
                           }
                       </tr>
                   )
                }
            </table>
        );
    }
}

ArrayOfArraysPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ArrayOfArraysPresenter);

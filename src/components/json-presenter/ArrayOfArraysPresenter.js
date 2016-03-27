import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPresenter from '.';

class ArrayOfArraysPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var depth = path.length;
        var width = R.last(data.map(R.length).sort());

        return (
            <table className={'json-array-array depth' + depth}>
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
                       <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
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
    path: PropTypes.array.isRequired
};

export default ArrayOfArraysPresenter;

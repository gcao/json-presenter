import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPresenter from '.';

class ArrayOfArraysPresenter extends Component {
    render() {
        var depth = this.props.depth;
        var data  = this.props.data;
        var width = R.last(data.map(R.length).sort());

        return (
            <table className={'json-array-array depth' + depth}>
                {
                   data.map((row, i) =>
                       <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                           <td className="index-col">{i + 1}</td>
                           {
                               R.times((j) => <td><JsonPresenter data={row[j]} depth={depth + 1}/></td>, width)
                           }
                       </tr>
                   )
                }
            </table>
        );
    }
}

ArrayOfArraysPresenter.propTypes = {
    data:  PropTypes.any.isRequired,
    depth: PropTypes.number.isRequired
};

export default ArrayOfArraysPresenter;

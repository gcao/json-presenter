import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPresenter from '.';

class ArrayOfObjectsPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var depth = path.length;

        var keys = R.uniq(R.flatten(R.map(Object.keys, data)));
        var head = (
            <tr className="head">
                <td className="index-col">&nbsp;</td>
                {
                    keys.map((key, i) => <th key={i}>{key}</th>)
                }
            </tr>
        );

        var body = data.map((row, i) =>
            <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                <td className="index-col">{i + 1}</td>
                {
                    keys.map((key, j) => <td key={j}><JsonPresenter data={row[key]} path={path.append(i).append(key)}/></td>)
                }
            </tr>
        );

        return (
            <table className={'json-object-array depth' + depth}>
                {head}
                {body}
            </table>
        );
    }
}

ArrayOfObjectsPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    path: PropTypes.array.isRequired
};

export default ArrayOfObjectsPresenter;

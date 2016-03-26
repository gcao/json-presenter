import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPresenter from '.';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';

class ArrayPresenter extends Component {
    render() {
        var depth = this.props.depth;
        var data  = this.props.data;

        if (data.length > 0) {
            if (R.isArrayLike(data[0])) {
                return (<ArrayOfArraysPresenter data={data} depth={depth}/>);
            } else if (R.is(Object, data[0])) {
                return (<ArrayOfObjectsPresenter data={data} depth={depth}/>);
            }
        }

        return (
            <table className={'json-array depth' + depth}>
                {
                    data.map((item, i) =>
                        <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                            <td>
                                <JsonPresenter data={item} depth={depth + 1}/>
                            </td>
                        </tr>
                    )
                }
            </table>
        );
    }
}

ArrayPresenter.propTypes = {
    data:  PropTypes.any.isRequired,
    depth: PropTypes.number.isRequired
};

export default ArrayPresenter;

import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import JsonPresenter from '.';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';

class ArrayPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var depth = path.length;

        if (data.length > 0) {
            if (R.isArrayLike(data[0])) {
                return (<ArrayOfArraysPresenter data={data} path={path}/>);
            } else if (R.is(Object, data[0])) {
                return (<ArrayOfObjectsPresenter data={data} path={path}/>);
            }
        }

        return (
            <table className={'json-array depth' + depth}>
                {
                    data.map((item, i) =>
                        <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                            <td>
                                <JsonPresenter data={item} path={path.append(i)}/>
                            </td>
                        </tr>
                    )
                }
            </table>
        );
    }
}

ArrayPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    path: PropTypes.array.isRequired
};

export default ArrayPresenter;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import actions from '../../actions';
import JsonPresenter from '.';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';

class ArrayPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        if (data.length > 0) {
            if (R.isArrayLike(data[0])) {
                return (<ArrayOfArraysPresenter data={data} path={path}/>);
            } else if (R.is(Object, data[0])) {
                return (<ArrayOfObjectsPresenter data={data} path={path}/>);
            }
        }

        return (
            <table
                className={'json-array depth' + path.size()}
                onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path)); }}
            >
                {
                    data.map((item, i) =>
                        <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                            onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path.append(i))); }}
                        >
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
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ArrayPresenter);

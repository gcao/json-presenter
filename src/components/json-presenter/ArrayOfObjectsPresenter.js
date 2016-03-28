import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import actions from '../../actions';
import JsonPresenter from '.';

class ArrayOfObjectsPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;
        var keys = R.uniq(R.flatten(R.map(Object.keys, data)));

        return (
            <table
                className={'json-object-array depth' + path.size()}
                onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path)); }}
            >
                {
                    <tr className="head">
                        <th className="index-col">&nbsp;</th>
                        {
                            keys.map((key, i) => <th key={i}>{key}</th>)
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
                                keys.map((key, j) => {
                                    return (
                                        <td key={j} onMouseOver={e => { e.stopPropagation(); this.props.dispatch(actions.SET_PATH(path.append(i).append(key))); }}>
                                            <JsonPresenter data={row[key]} path={path.append(i).append(key)}/>
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    )
                }
            </table>
        );
    }
}

ArrayOfObjectsPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ArrayOfObjectsPresenter);

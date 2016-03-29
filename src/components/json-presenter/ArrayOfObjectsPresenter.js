import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { setPath } from '../../actions';
import JsonPresenter from '.';

class ArrayOfObjectsPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;
        var keys = R.uniq(R.flatten(R.map(Object.keys, data)));

        return (
            <table
                className={'json-object-array depth' + path.size()}
                onMouseEnter={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.dispatch(setPath(path));
                }}
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
                            onMouseEnter={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.dispatch(setPath(path.append(i)));
                            }}
                        >
                            <td className="index-col">{i + 1}</td>
                            {
                                keys.map((key, j) => {
                                    return (
                                        <td key={j}
                                            onMouseEnter={e => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                this.props.dispatch(setPath(path.append(i).append(key)));
                                            }}
                                        >
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

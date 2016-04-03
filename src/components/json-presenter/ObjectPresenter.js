import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setPath } from '../../actions';
import JsonPresenter from '.';
import ObjectPropNamePresenter from './ObjectPropNamePresenter';

class ObjectPresenter extends Component {
    render() {
        var data = this.props.data;
        var path = this.props.path;

        return (
            <table
                className={'json-object depth' + path.size()}
                onMouseEnter={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.dispatch(setPath(path));
                }}
            >
                <tbody>
                    {
                        Object.keys(data).sort().map((key, i) =>
                            <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
                                onMouseEnter={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.dispatch(setPath(path.append(key)));
                                }}
                            >
                                <ObjectPropNamePresenter path={path} name={key}/>
                                <td className="prop-value"><JsonPresenter data={data[key]} path={path.append(key)}/></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

ObjectPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

export default connect()(ObjectPresenter);

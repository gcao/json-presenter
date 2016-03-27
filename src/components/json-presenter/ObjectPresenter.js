import React, { Component, PropTypes } from 'react';
//import R from 'ramda';

import JsonPresenter from '.';

class ObjectPresenter extends Component {
    render() {
        var data  = this.props.data;
        var path  = this.props.path;
        var depth = path.length;

        return (
            <table className={'json-object depth' + depth}>
                {
                    Object.keys(data).sort().map((key, i) =>
                        <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                            <td className="prop-name">{key}</td>
                            <td className="prop-value"><JsonPresenter data={data[key]} path={path.append(key)}/></td>
                        </tr>
                    )
                }
            </table>
        );
    }
}

ObjectPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    path: PropTypes.array.isRequired
};

export default ObjectPresenter;

import React, { Component, PropTypes } from 'react';
//import R from 'ramda';

import JsonPresenter from '.';

class ObjectPresenter extends Component {
    render() {
        var depth = this.props.depth;
        var data  = this.props.data;

        return (
            <table className={'json-object depth' + depth}>
                {
                    Object.keys(data).sort().map((key, i) =>
                        <tr key={key} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                            <td className="prop-name">{key}</td>
                            <td className="prop-value"><JsonPresenter data={data[key]} depth={depth + 1}/></td>
                        </tr>
                    )
                }
            </table>
        );
    }
}

ObjectPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    depth: PropTypes.number.isRequired
};

export default ObjectPresenter;

import React, { Component, PropTypes } from 'react';
import R from 'ramda';
global.R = R; // Exported for testing purpose

import './styles.scss';

class JsonPresenter extends Component {
    render() {
        var depth = this.props.depth || 0;
        var data = this.props.data;

        if (R.isArrayLike(data)) {
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
        } else if (R.is(Object, data)) {
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
        } else {
            return (
                <div className={'json-literal depth' + depth}>
                    {data}
                </div>
            );
        }
    }
}

JsonPresenter.propTypes = {
    data: PropTypes.any.isRequired,
    depth: PropTypes.number
};

export default JsonPresenter;

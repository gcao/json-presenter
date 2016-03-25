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
                <div className={'json-array depth' + depth}>
                    {
                        data.map((item, i) =>
                            <div key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                                <JsonPresenter data={item} depth={depth + 1}/>
                            </div>
                        )
                    }
                </div>
            );
        } else if (R.is(Object, data)) {
            var rows = [];
            var i = 0;
            for (name in data) {
                rows.push(
                    <div className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}>
                        <div className="prop-name">{name}</div>
                        <div className="prop-value"><JsonPresenter data={data[name]} depth={depth + 1}/></div>
                    </div>
                );
                i += 1;
            }
            return (
                <div className={'json-object depth' + depth}>{rows}</div>
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

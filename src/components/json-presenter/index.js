import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import './styles.scss';

class JsonPresenter extends Component {
    render() {
        var data = this.props.data;
        if (R.is(Object, data)) {
            var rows = [];
            for (name in data) {
                rows.push(
                    <div className="row">
                        <div className="prop-name">{name}</div>
                        <div className="prop-value"><JsonPresenter data={data[name]}/></div>
                    </div>
                );
            }
            return (
                <div className="json-object">{rows}</div>
            );
        } else if (R.is(Array, data)) {
            return (
                <div className="json-array">
                    {
                        data.forEach(item =>
                            <div className="row">
                                <JsonPresenter data={item}/>
                            </div>
                        )
                    }
                </div>
            );
        } else {
            return (
                <div>
                    {data}
                </div>
            );
        }
    }
}

JsonPresenter.propTypes = {
    data: PropTypes.any.isRequired
};

export default JsonPresenter;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import defaultSelector from '../../selectors';
import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';

class ArrayOfLiteralsPresenter extends Component {
    render() {
        let {data, path, pathUnderMouse} = this.props;

        return (
            <div className={'json-literal-array depth' + path.size()}
                onMouseOver={createMouseOverHandler(this.props.dispatch, path, pathUnderMouse)}
            >
                {
                    data.map((row, i) =>
                        <GenericPresenter key={i} data={row} path={path.append(i)}/>
                    )
                }
            </div>
            // <table
            //     className={'json-array depth' + path.size()}
            //     onMouseOver={e => {
            //         e.preventDefault();
            //         e.stopPropagation();
            //         this.props.dispatch(setPath(path));
            //     }}
            // >
            //     {
            //         data.map((item, i) =>
            //             <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
            //                 onMouseOver={e => {
            //                     e.preventDefault();
            //                     e.stopPropagation();
            //                     this.props.dispatch(setPath(path.append(i)));
            //                 }}
            //             >
            //                 <td>
            //                     <GenericPresenter data={item} path={path.append(i)}/>
            //                 </td>
            //             </tr>
            //         )
            //     }
            // </table>
        );
    }
}

ArrayOfLiteralsPresenter.propTypes = {
    data           : PropTypes.any.isRequired,
    dispatch       : PropTypes.func.isRequired,
    path           : PropTypes.instanceOf(JsonPath).isRequired,
    pathUnderMouse : PropTypes.object,
};

export default connect(defaultSelector)(ArrayOfLiteralsPresenter);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseEnterHandler } from './utils';

class ArrayOfLiteralsPresenter extends Component {
    render() {
        let {data, path} = this.props;

        return (
            <div className={'json-literal-array depth' + path.size()}
                onMouseEnter={createMouseEnterHandler(this.props.dispatch, path)}
            >
                {
                    data.map((row, i) =>
                        <GenericPresenter key={i} data={row} path={path.append(i)}/>
                    )
                }
            </div>
            // <table
            //     className={'json-array depth' + path.size()}
            //     onMouseEnter={e => {
            //         e.preventDefault();
            //         e.stopPropagation();
            //         this.props.dispatch(setPath(path));
            //     }}
            // >
            //     {
            //         data.map((item, i) =>
            //             <tr key={i} className={'row ' + (i % 2 == 0 ? 'odd' : 'even')}
            //                 onMouseEnter={e => {
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
    data: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.instanceOf(JsonPath).isRequired
};

export default connect()(ArrayOfLiteralsPresenter);

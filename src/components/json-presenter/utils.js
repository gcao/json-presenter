import { setPath } from '../../actions';

export function createMouseOutHandler(dispatch) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setPath([]));
    };
}

export function createMouseEnterHandler(dispatch, path) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setPath(path));
    };
}
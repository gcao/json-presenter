import JsonPath from '../../json-path';
import { setPath } from '../../actions';

export function createMouseOutHandler(dispatch) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setPath(new JsonPath([])));
    };
}

export function createMouseEnterHandler(dispatch, path) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setPath(path));
    };
}
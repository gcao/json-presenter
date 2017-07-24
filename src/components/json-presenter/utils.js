import JsonPath from '../../json-path';
import { setPath } from '../../actions';

export function createMouseOutHandler(dispatch) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setPath(new JsonPath([])));
    };
}

export function createMouseOverHandler(dispatch, path, pathUnderMouse) {
    return e => {
        e.preventDefault();
        e.stopPropagation();
        if (path && pathUnderMouse && path.toString() !== pathUnderMouse.toString()) {
            dispatch(setPath(path));
        }
    };
}
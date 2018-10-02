export let SET_PATH    = 'SET_PATH';
export let UPDATE_JSON = 'UPDATE_JSON';
export let UPDATE_DATA = 'UPDATE_DATA';
export let UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
export let SORT = 'SORT';

export function setPath(path) {
    return {
        type: SET_PATH,
        path: path
    };
}

export function updateJSON(json) {
    return {
        type: UPDATE_JSON,
        json: json
    };
}

export function updateData(path, value) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_DATA,
        path: path,
        value: value
    };
}

export function updatePropName(path, oldName, newName) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_PROP_NAME,
        path: path,
        oldName: oldName,
        newName: newName
    };
}

export function sort(path, key) {
    return {
        type: SORT,
        path: path,
        key: key
    };
}
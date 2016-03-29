export let SET_PATH    = 'SET_PATH';
export let UPDATE_JSON = 'UPDATE_JSON';
export let UPDATE_DATA = 'UPDATE_DATA';

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


export let SET_PATH    = 'SET_PATH';
export let UPDATE_JSON = 'UPDATE_JSON';
export let UPDATE_DATA = 'UPDATE_DATA';
export let UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
export let UPDATE_CONFIG = 'UPDATE_CONFIG';

export function setPath(path) {
    return {
        type: SET_PATH,
        path
    };
}

export function updateJSON(json) {
    return {
        type: UPDATE_JSON,
        json
    };
}

export function updateData(path, value) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_DATA,
        path,
        value
    };
}

export function updatePropName(path, oldName, newName) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_PROP_NAME,
        path,
        oldName,
        newName
    };
}

export function updateConfig(path, name, value) {
    return {
        type: UPDATE_CONFIG,
        path,
        name,
        value
    };
}

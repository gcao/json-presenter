import { SET_PATH, UPDATE_JSON, UPDATE_DATA, UPDATE_PROP_NAME } from '../actions';

export default function reducers(state = {}, action) {
    var path, value, current;

    switch (action.type) {
    case UPDATE_JSON:
        return Object.assign({}, state, {
            rawData: action.json,
            data: JSON.parse(action.json)
        });
    case SET_PATH:
        return Object.assign({}, state, {
            pathUnderMouse: action.path
        });
    case UPDATE_DATA:
        path = action.path;
        value = action.value;
        // TODO make a copy instead of change in place to support undo/redo
        current = state.data;
        path.parts.slice(0, path.size() - 1).forEach(part => {
            current = current[part];
        });
        current[path.parts[path.size() - 1]] = value;
        return Object.assign({}, state, {
            rawData: JSON.stringify(state.data, null, 4),
            data: state.data
        });
    case UPDATE_PROP_NAME:
        path = action.path;
        var oldName = action.oldName;
        var newName = action.newName;
        // TODO make a copy instead of change in place to support undo/redo
        current = path.findIn(state.data);
        current[newName] = current[oldName];
        delete current[oldName];
        return Object.assign({}, state, {
            rawData: JSON.stringify(state.data, null, 4),
            data: state.data
        });
    default:
        return state;
    }
}


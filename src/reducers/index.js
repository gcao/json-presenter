import { SET_PATH, UPDATE_JSON, UPDATE_DATA } from '../actions';

export default function reducers(state = {}, action) {
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
        var path = action.path;
        var value = action.value;
        // TODO make a copy instead of change in place to support undo/redo
        var current = state.data;
        path.parts.slice(0, action.path.size - 1).forEach(part => {
            current = current[part];
        });
        current[path.parts[path.size() - 1]] = value;
        return Object.assign({}, state, {
            rawData: JSON.stringify(state.data, null, 4)
        });
    default:
        return state;
    }
}


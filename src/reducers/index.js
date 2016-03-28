export default function reducers(state = {}, action) {
    switch (action.type) {
    case 'UPDATE_JSON':
        return Object.assign({}, state, {
            rawData: action.json,
            data: JSON.parse(action.json)
        });
    case 'SET_PATH':
        //console.log(action.path);
        return Object.assign({}, state, {
            pathUnderMouse: action.path
        });
    default:
        return state;
    }
}


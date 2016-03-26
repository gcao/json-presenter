export default function reducers(state = {}, action) {
    switch (action.type) {
    case 'UPDATE_JSON':
        return Object.assign({}, state, {
            rawData: action.rawData,
            data: JSON.parse(action.rawData)
        });
    default:
        return state;
    }
}


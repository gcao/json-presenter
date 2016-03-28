export default {
    SET_PATH: (path) => {
        return {
            type: 'SET_PATH',
            path: path
        };
    },

    UPDATE_JSON: (json) => {
        return {
            type: 'UPDATE_JSON',
            json: json
        };
    }
};


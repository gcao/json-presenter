//import R from 'ramda';

class JsonPath {
    constructor(parts = []) {
        this.parts = parts;
        this.length = parts.length;
    }

    append(part) {
        return new JsonPath([...this.parts, part]);
    }

    findIn(target) {
        this.parts.forEach(part => {
            target = target[part];
        });
        return target;
    }
}

export default JsonPath;


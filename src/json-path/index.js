//import R from 'ramda';

class JsonPath {
    constructor(parts = []) {
        this.parts = parts;
    }

    size() {
        return this.parts.length;
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

    toString() {
        if (this.parts.length === 0) return 'this';

        return 'this' + this.parts.map((part) => `[${JSON.stringify(part)}]`).join('');
    }
}

export default JsonPath;


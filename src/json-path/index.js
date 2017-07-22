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
        if (this.parts.length === 0) return '';

        return 'this' + this.parts.map((part) => {
            if (typeof part === 'number') {
                return part < 0 ? '[*]' : `[${part}]`;
            } else {
                return `.${part}`;
            }
        }).join('');
    }
}

export default JsonPath;


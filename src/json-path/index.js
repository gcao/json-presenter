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

class PathItemBase {
    constructor() {
        this._children = [];
    }

    children() {
        return this._children;
    }

    match(key) {
        return false;
    }

    // Return array?
    find(data) {
        if (typeof data === 'object') {
            //
        }
    }
}

class ObjectPropertyPathItem extends PathItemBase {

}

class RegExpPathItem extends PathItemBase {

}

class ArrayIndexRangePathItem extends PathItemBase {

}

class ComplexPathItem extends PathItemBase {

}

class AllDecendants extends PathItemBase {
    match() {
        return true;
    }
}

class AllLeaves extends PathItemBase {
}

export class PathItem extends PathItemBase {
    constructor(value = null, isRegExp = false) {
        super();
        this._value = value;
        this._isRegExp = false;
    }

    isAnyArrayIndex() {
        return this._isAnyArrayIndex;
    }

    setIsAnyArrayIndex(v) {
        this._isAnyArrayIndex = v;
    }

    isAnyProperty() {
        return this._isAnyProperty;
    }

    setIsAnyProperty(v) {
        this._isAnyProperty = v;
    }

    match(key) {
        if (typeof key === 'string') {
            if (this._isAnyProperty) {
                return true;
            } else if (this._isRegExp) {
            } else if (typeof this._value === 'string') {
                return key === this._value;
            }
        } else if (typeof key === 'number') {
            if (this._isAnyArrayIndex) {
                return true;
            } else if (this._value === key) {
                return true;
            }
        } else {
            throw 'Not supported type: ' + (typeof key);
        }

        return false;
    }
}

export default JsonPath;

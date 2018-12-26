/**
 * Hold a bunch of things instead of a map.
 */
module.exports = class Collection extends Map {
    constructor() { super(); }

    /**
     * Filters out anything and returns the Array of boolean(s)
     * 
     * @param {(i: Class) => boolean} fn The callback function
     * @returns {Array<Class>} Returns the results
     */
    filter(fn) {
        const results = [];
        for (const item of this.values())
            if (fn(item))
                results.push(item);
        return results;
    }

    /**
     * Maps out anything and returns the Array of the mapped out object
     * 
     * @param {(i: Class) => any} fn The callback function
     * @returns {Array} The returned array
     */
    map(fn) {
        const results = [];
        for (const i of this.values())
            results.push(fn(i));
        return results;
    }
};
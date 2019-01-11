/**
 * Hold a bunch of things inside of an Map.
 */
module.exports = class Collection extends Map {
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

    /**
     * Returns a value resulting from applying a function to every element of the collection
     * @param {(i: Class) => any} fn The callback function
     * @param {any} [value] The inital value
     * @returns {any} I have no idea
     */
    reduce(fn, value) {
        const item = Array.from(this.values());
        return item.reduce(fn, value);
    }

    /**
     * Returns an array with the elements of the collection sorted
     * @param {(a: Class, b: Class) => any} fn The function (Must return -1, 1, or 0)
     * @returns {any} idk tbh
     */
    sort(fn) {
        const item = Array.from(this.values());
        return item.sort(fn);
    }

    /**
     * Returns true if all elements satisfy the condition
     * @param {(i: Class) => boolean} fn The function
     * @returns {boolean} If it satifies the result
     */
    every(fn) {
        for (const item of this.values())
            if (!fn(item))
                return false;
        return true;
    }

    /**
     * Returns true if atleast one element satifies the condition
     * @param {(i: Class) => boolean} fn The function
     * @returns {boolean}
     */
    some(fn) {
        for (const item of this.values())
            if (fn(item))
                return true;
        return false;
    }
};
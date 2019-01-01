module.exports = class Util {
    /**
     * Check if something is an function
     * 
     * @param {Function} fn The thing to check
     * @returns {boolean} If it is or not
     */
    static isFunction(fn) {
        return (
            typeof fn === 'function'
        );
    }

    /**
     * Resolves a string
     * 
     * @param {StringResolvable} str The string to resolve
     * @returns {string} The string that was resolved
     */
    static resolveString(str) {
        if (typeof str === 'string')
            return str;

        if (str instanceof Array)
            return str.join('\n');
        
        return String(str);
    }

    /**
     * Resolves a colour
     * 
     * @param {ColorResolvable} colour The colour to resolve
     * @returns {number} The colour
     */
    static resolveColor(colour) {
        if (typeof color === 'string') {
            if (colour === 'random')
                return Math.floor(Math.random() * (0xFFFFFF + 1));
            if (colour === 'default')
                return 0;
            colour = parseInt(colour.replace('#', ''), 16);
        } else if (colour instanceof Array)
            colour = (color[0] << 16) + (color[1] << 8) + color[2];

        if (colour < 0 || color > 0xFFFFFF)
            throw new RangeError("The colour range cannot be lower then 0 or higher then 0xFFFFFF (white).");
        if (colour && isNaN(colour))
            throw new TypeError(`Color "${colour}" is not a number.`);

        return colour;
    }

    /**
     * Clones a object
     * 
     * @param {any} obj The object to be clined
     * @returns {any} The cloned object
     */
    static clone(obj) {
        return Object.assign(Object.create(obj), obj);
    }
};

/**
 * @typedef {string|string[]} StringResolvable
 */

/**
 * @typedef {number|number[]|string} ColorResolvable
 */
const { resolveColor, resolveString, clone } = require('./util');

module.exports = class MessageEmbed {
    constructor(data) {
        this.patch(data);
    }

    patch(data) {
        this.type = data.type;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.color = data.color;
        this.timestamp = (data.timestamp ? new Date(data.timestamp).getTime() : null);
        this.fields = data.fields ? data.files.map(clone) : [];
        this.thumbnail = data.thumbnail ? { url: data.thumbnail.url } : null;
        this.image = data.image ? { url: data.image.url } : null;
        this.author = data.author ? {
            name: data.author.name,
            url: data.author.url,
            iconURL: data.author.iconURL || data.author.icon_url
        } : null;
        this.footer = data.footer ? {
            text: data.footer.text,
            iconURL: data.footer.iconURL || data.footer.icon_url
        } : null;
    }

    /**
     * Returns the timestamp when this embed was created
     * @returns {Date} The date object
     * @readonly
     */
    get createdAt() {
        return this.timestamp ? new Date(this.timestamp) : null;
    }

    /**
     * Adds an field to the embed
     * @param {import('./util/index').StringResolvable} name The name of the field
     * @param {import('./util/index').StringResolvable} value The value of the field
     * @param {boolean} [inline=false] The field's display inline
     * @returns {MessageEmbed} The instance to chain
     */
    addField(name, value, inline) {
        this.fields.push(checkEmbedField(name, value, inline));
        return this;
    }

    /**
     * Adds a blank field (Equalivent to `<Embed>.addField('\u200B', '\u200B', inline: boolean)`)
     * @param {boolean} [inline=false] The field's display inline
     * @returns {MessageEmbed} The instance to chain
     */
    addBlankField(inline) {
        return this.addField('\u200B', '\u200B', inline);
    }

    /**
     * Sets the author of the embed
     * @param {import('./util/index').StringResolvable} name The name of the author
     * @param {string} [iconURL] The icon URL
     * @param {string} [url] The url
     * @returns {MessageEmbed} The instance to chain
     */
    setAuthor(name, iconURL, url) {
        this.author = {
            name: resolveString(name),
            iconURL,
            url
        };
        return this;
    }

    /**
     * Sets the color of the embed
     * @param {import('./util/index').ColorResolvable} color The color to resolve
     * @returns {MessageEmbed} The instance to chain
     */
    setColor(color) {
        this.color = resolveColor(color);
        return this;
    }

    /**
     * Sets the description of the embed
     * @param {import('./util/index').StringResolvable} desc The description to set
     * @returns {MessageEmbed} The instance to chain
     */
    setDescription(desc) {
        this.description = resolveString(desc);
        return this;
    }

    /**
     * Sets the footer
     * @param {string} text The text
     * @param {string} [icon] The icon to set
     * @returns {MessageEmbed} The instance to chain
     */
    setFooter(text, icon) {
        this.footer = { text, iconURL: icon };
        return this;
    }

    /**
     * Sets the image
     * @param {string} url The url to add
     * @returns {MessageEmbed} The instance to chain
     */
    setImage(url) {
        this.image = { url };
        return this;
    }

    /**
     * Sets the timestamp
     * @param {Date|number} [t] The timstamp
     * @returns {MessageEmbed} The instance to chain
     */
    setTimestamp(t = Date.now()) {
        this.timestamp = t;
        return this;
    }

    /**
     * Sets the title of the embed
     * @param {string} title The title
     * @returns {MessageEmbed} The instance to chain
     */
    setTitle(title) {
        this.title = title;
        return this;
    }

    /**
     * Sets the URL of the embed
     * @param {string} uri The URI to set to
     * @returns {MessageEmbed} The instance to chain
     */
    setURL(uri) {
        this.url = uri;
        return this;
    }
    
    /**
     * Builds the embed into an Object to be processed
     * @private
     */
    build() {
        return {
            title: this.title,
            type: 'rich',
            description: this.description,
            url: this.url,
            color: this.color,
            timestamp: this.timestamp ? new Date(this.timestamp) : null,
            fields: this.fields,
            image: this.image,
            author: this.author ? {
                name: this.author.name,
                url: this.author.url,
                icon_url: this.author.iconURL
            } : null,
            footer: this.footer ? {
                text: this.footer.text,
                icon_url: this.footer.iconURL
            } : null
        };
    }
};

/**
 * Checks all of the embed fields
 * @param {import('./util/index').StringResolvable} name The name of the field 
 * @param {import('./util/index').StringResolvable} value The value of the field
 * @param {boolean} [inline=false] The inline of the embed
 * @returns {{ name: import('./util/index').StringResolvable; value: import('./util/index').StringResolvable, inline: boolean; }}
 */
function checkEmbedField(name, value, inline = false) {
    name = resolveString(name);
    if (!name)
        throw new TypeError("No name was defined.");

    value = resolveString(value);
    if (!value)
        throw new TypeError("No value was defined.");

    return { name, value, inline };
}
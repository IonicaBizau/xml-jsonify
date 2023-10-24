"use strict";

const parse = require("xml2js").parseString
    , objectKeyCount = require("obj-key-count")
    , iterateObj = require("iterate-object")
    ;

/**
 * xmlJsonify
 * Converts the XML input into an object.
 *
 * @name xmlJsonify
 * @function
 * @param {String} content The XML content.
 * @param {Object} options The options passed to `xml2js`.
 * @param {Function} cb The callback function.
 */
module.exports = function xmlJsonify (content, options, cb) {

    if (typeof options === "function") {
        cb = options;
        options = {};
    }

    const removeArrays = input => {

        if (typeof input !== "object") {
            return input;
        }

        if (Array.isArray(input) && input.length === 1) {
            return removeArrays(input[0]);
        }

        iterateObj(input, (val, key) => {
            if (typeof val === "object" && val) {
                input[key] = removeArrays(val);
            }
        });

        return input;
    };

    parse(content, options, (err, data) => {
        if (err) { return cb(err); }
        const key = objectKeyCount(data, 1, true);
        if (key) {
            data = data[key];
        }
        data = removeArrays(data);
        cb(null, data);
    });
};

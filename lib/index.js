"use strict";

const parse = require("xml2js").parseString
    , objectKeyCount = require("obj-key-count")
    , iterateObj = require("iterate-object")
    ;

/**
 * xmlJsonify
 * A liberal XML to JSON converter.
 *
 * @name xmlJsonify
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function xmlJsonify (content, options, cb) {

    if (typeof options === "function") {
        cb = options;
        options = {};
    }

    let removeArrays = input => {

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
        let key = objectKeyCount(data, 1, true);
        if (key) {
            data = data[key];
        }
        removeArrays(data);
        cb(err, data);
    });
};

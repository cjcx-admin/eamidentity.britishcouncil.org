/* eslint-disable no-extend-native */

if (![].at) {
    Array.prototype.at = function(pos) {
        return this.slice(pos, pos + 1)[0];
    };
}
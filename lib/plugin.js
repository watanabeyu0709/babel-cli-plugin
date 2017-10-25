'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var plugin = {
    init: function init() {
        document.querySelector('body').innerText = '这是插件写下的话';
    }
};
exports.default = plugin;
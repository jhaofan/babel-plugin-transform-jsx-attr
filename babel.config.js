
const path = require('path');

const pluginPath = path.resolve(process.cwd(), 'src', 'index.js');

module.exports = function(api) {
    api.cache(false);
    const presets = [
        // "@babel/preset-env",
        "@babel/preset-react"
    ];
    const plugins = [
        // "@babel/plugin-proposal-class-properties",
        [pluginPath, {
            onPress: 'onClick',
            class: 'className'
        }]
    ];
    return {
        presets,
        plugins
    }
}

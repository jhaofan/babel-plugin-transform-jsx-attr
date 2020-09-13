module.exports = function ({types: t}) {
    return {
        visitor: {
            JSXAttribute(path, state) {
                let node = path.node;
                let opts = state.opts;
                let attrName = (node.name && node.name.name) || null;
                if (attrName in state.opts) {
                    node.name = t.jSXIdentifier(opts[attrName]);
                }
            }
        }
    };
};

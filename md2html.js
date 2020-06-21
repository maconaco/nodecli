const marked = require("marked");

module.exports = (markdown, cliOption) => {
    return marked(markdown, { gfm: cliOption.gfm, });
};
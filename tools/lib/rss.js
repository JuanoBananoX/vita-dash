const Parser = require("rss-parser");

const parser = new Parser();

async function loadFeed(url) {

    const feed = await parser.parseURL(url);

    return feed;

}

module.exports = {
    loadFeed
};
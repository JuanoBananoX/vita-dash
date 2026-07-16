const fs = require("fs");
const path = require("path");

const rss = require("./lib/rss");

function convertFeed(feed, feedInfo) {

    return {
        title: feed.title,
        source: feedInfo.url,
        updated: new Date().toISOString(),
        entries: feed.items.slice(0, feedInfo.maxEntries).map(function (item) {

            return {
                title: item.title || "",
                url: item.link || "",
                date: item.isoDate || item.pubDate || "",
                author: item.creator || item.author || "",
                summary: item.contentSnippet || ""
            };

        })
    };

}

async function main() {

    console.log("VitaDash Feed Generator");
    console.log("=======================\n");

    const configPath = path.join(__dirname, "feeds.json");

    const config = JSON.parse(
        fs.readFileSync(configPath, "utf8")
    );

    for (const feedInfo of config.feeds) {

        try {
            console.log("--------------------------------");
            console.log("Downloading: " + feedInfo.name);

            const feed = await rss.loadFeed(feedInfo.url);

            const output = convertFeed(feed, feedInfo);

            const outputPath = path.join(
                __dirname,
                "..",
                "feeds",
                feedInfo.name + ".json"
            );

            fs.writeFileSync(
                outputPath,
                JSON.stringify(output, null, 4)
            );

            console.log("✓ Generated " + outputPath);
            console.log("  " + output.entries.length + " entries");
        }
        catch (error) {

            console.error("✗ " + feedInfo.name);
            console.error(error.message);

        }
        
    }

}

main().catch(function (error) {

    console.error(error);

});
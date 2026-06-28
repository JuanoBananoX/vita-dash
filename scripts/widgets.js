(function () {

    function setError(panel, message) {

        panel.getElementsByTagName("h2")[0].innerHTML = "Unavailable";

        panel.getElementsByClassName("panel-content")[0].innerHTML =
            "<p>" + message + "</p>";

    }

    function renderFeed(panel, feed) {
        var html = "<ul>";
        var i;

        for (i = 0; i < feed.entries.length; i++) {

            html += "<li>";

            html += "<a href=\"";
            html += feed.entries[i].url;
            html += "\" target=\"_blank\" rel=\"noopener noreferrer\">";

            html += feed.entries[i].title;

            html += "</a>";

            if (feed.entries[i].date) {
                html += "<div class=\"feed-date\">";
                html += formatDate(feed.entries[i].date);
                html += "</div>";
            }

            html += "</li>";
        }

        html += "</ul>";

        panel.getElementsByTagName("h2")[0].innerHTML = feed.title;
        panel.getElementsByClassName("panel-content")[0].innerHTML = html;
    }

    function formatDate(dateString) {
        if (!dateString) {
            return "";
        }

        var date = new Date(dateString);

        if (isNaN(date.getTime())) {
            return dateString;
        }

        var months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        return months[date.getMonth()] + " " +
            date.getDate() + ", " +
            date.getFullYear();
    }

    window.loadFeed = function (jsonFile, panelId) {

        var panel = document.getElementById(panelId);

        if (!panel) {
            return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status !== 200) {

                setError(panel, "Unable to load feed.");

                return;

            }

            try {

                var feed = JSON.parse(xhr.responseText);

                renderFeed(panel, feed);

            }
            catch (e) {

                setError(panel, "Invalid feed.");

            }

        };

        xhr.open("GET", jsonFile, true);

        xhr.send();

    };

    window.onload = function () {
        loadFeed("feeds/blog.json", "panel-blog");
        loadFeed("feeds/scene.json", "panel-news");
    };
})();
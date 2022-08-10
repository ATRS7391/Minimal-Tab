document.addEventListener(
    "DOMContentLoaded",
    function () {
        document.getElementById(
            "background"
        ).style.backgroundImage = `linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0) 35%,
            rgba(0, 0, 0, 0) 80%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        url(./assets/backgrounds/background-${
            Math.floor(Math.random() * 7) + 1
        }.jpg)`;
        document
            .getElementById("search-button")
            .addEventListener("click", search);

        document
            .getElementById("search")
            .addEventListener("keydown", function (e) {
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                    search();
                }
            });

        timeNow();
    },
    false
);

function timeNow() {
    let time = new Date();
    document.getElementById("time-now").innerHTML = time
        .toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        .replace(/AM|PM/i, "")
        .replace(/\s/g, "");
    document.getElementById("date-day").innerHTML = time.toLocaleString(
        "en-US",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
        }
    );
    setTimeout(timeNow, 1000);
}

function search() {
    let query = document.getElementById("search").value;
    if (query.replace(/\s/g, "").length) {
        if (!is_valid_url(query)) {
            query = "https://www.google.com/search?q=" + query;
        }
        window.location.href = query;
    }
    return null;
}

function is_valid_url(_string) {
    const match_pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return match_pattern.test(_string);
}

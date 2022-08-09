document.addEventListener(
    "DOMContentLoaded",
    function () {
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

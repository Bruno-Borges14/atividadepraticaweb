document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    function loadPage(pageName) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", pageName + ".html", true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                contentDiv.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }

    loadPage("aboutMe");

    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadPage("aboutMe");
    });

    document.getElementById("education").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("education");
    });

    document.getElementById("hobbies").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("hobbies");
    });

    document.getElementById("languages").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("languages");
    });
});

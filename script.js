document.addEventListener("DOMContentLoaded", (event) => {
    hideLoadingScreen(document.getElementById("loadingScreen"));
    // showLoadingScreen(document.getElementById("loadingScreen"));
    // hideLoadingScreen(document.getElementById("loadingScreen"));
});

function showLoadingScreen(dialog) {
    dialog.showModal();
    dialog.style.display = "flex";

    const texts = [
        "Loading",
        "Loading.",
        "Loading..",
        "Loading..."
    ];
    let currentIndex = 0;
    const loadingText = dialog.querySelector("#loadingText");

    setInterval(() => {
        loadingText.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 250);

    setTimeout(() => {
        hideLoadingScreen(dialog);
    }, 3000);
}

function hideLoadingScreen(dialog) {
    dialog.close();

    dialog.style.display = "none";
}
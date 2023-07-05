document.addEventListener("DOMContentLoaded", (event) => {
    hideLoadingScreen(document.getElementById("loadingScreen"));
});

function showLoadingScreen(dialog) {
    return new Promise((resolve) => {
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

        const intervalId = setInterval(() => {
            loadingText.textContent = texts[currentIndex];
            currentIndex = (currentIndex + 1) % texts.length;
        }, 250);

        setTimeout(() => {
            clearInterval(intervalId);
            hideLoadingScreen(dialog);
            resolve();
        }, 3000);
    });
}

function hideLoadingScreen(dialog) {
    dialog.close();
    dialog.style.display = "none";
}
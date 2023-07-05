document.addEventListener("DOMContentLoaded", (event) => {
    const perfectPet = document.getElementById("perfectPet");
    const localPets = document.getElementById("localPets");
    const petSupplies = document.getElementById("petSupplies");
    const aboutProject = document.getElementById("aboutProject");

    perfectPet.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"))
            .then(() => {
                console.log("Loading screen completed.");
                window.location.href = "perfectPet.html";
            })
            .catch((error) => {
                console.error("Error occurred while showing loading screen:", error);
            });
    });
    localPets.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"))
            .then(() => {
                console.log("Loading screen completed.");
                // Run additional code here
            })
            .catch((error) => {
                console.error("Error occurred while showing loading screen:", error);
            });
    });
    petSupplies.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"))
            .then(() => {
                console.log("Loading screen completed.");
                // Run additional code here
            })
            .catch((error) => {
                console.error("Error occurred while showing loading screen:", error);
            });
    });
    aboutProject.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"))
            .then(() => {
                console.log("Loading screen completed.");
                // Run additional code here
            })
            .catch((error) => {
                console.error("Error occurred while showing loading screen:", error);
            });
    });

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
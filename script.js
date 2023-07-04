document.addEventListener("DOMContentLoaded", (event) => {
    const perfectPet = document.getElementById("perfectPet");
    const localPets = document.getElementById("localPets");
    const petSupplies = document.getElementById("petSupplies");
    const aboutProject = document.getElementById("aboutProject");

    perfectPet.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"));
    });
    localPets.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"));
    });
    petSupplies.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"));
    });
    aboutProject.addEventListener("click", (event) => {
        showLoadingScreen(document.getElementById("loadingScreen"));
    });

    hideLoadingScreen(document.getElementById("loadingScreen"));
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
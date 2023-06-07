const hiddenButton = document.getElementById("hidden-button");

hiddenButton.onclick = function () {
    hiddenButton.classList.add("hide");

    const defaultImage = document.getElementById("default-sport");
    defaultImage.classList.add("hide");

    const hiddenVideo = document.getElementById("sport-video");
    hiddenVideo.classList.remove("hide");
};

const colourPaletteToggle = document.getElementById("toggle-colour-palette");
let currentPaletteIndex = 1;

colourPaletteToggle.onclick = function () {
    const root = document.querySelector(":root");
    cyclePalette();

    root.style.setProperty("--colour-one", colourPalettesDictionary[currentPaletteIndex][0]);
    root.style.setProperty("--colour-two", colourPalettesDictionary[currentPaletteIndex][1]);
    root.style.setProperty("--colour-three", colourPalettesDictionary[currentPaletteIndex][2]);
    root.style.setProperty("--colour-four", colourPalettesDictionary[currentPaletteIndex][3]);
    root.style.setProperty("--colour-five", colourPalettesDictionary[currentPaletteIndex][4]);
};

const colourPalettesDictionary = {
    1: ["blue", "fuchsia", "yellow", "aqua", "red"],
    3: ["red", "aqua", "yellow", "fuchsia", "red"],
    2: ["#648FFF", "#DC267F", "#785EF0", "#FE6100", "#FFB000"],
};

function cyclePalette() {
    if (currentPaletteIndex === 3) {
        currentPaletteIndex = 1;
    } else {
        currentPaletteIndex += 1;
    }
}

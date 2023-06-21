const colourPaletteToggle = document.getElementById("toggle-colour-palette");
const colourWheelIcon = document.getElementById("colour-wheel");
let currentPaletteIndex = 1;

colourPaletteToggle.onclick = function () {
    colourWheelIcon.src =
        "Gallery/" + colourPalettesDictionary[currentPaletteIndex][0] + " colour wheel.png";
    const root = document.querySelector(":root");
    cyclePalette();

    root.style.setProperty("--colour-one", colourPalettesDictionary[currentPaletteIndex][1]);
    root.style.setProperty("--colour-two", colourPalettesDictionary[currentPaletteIndex][2]);
    root.style.setProperty("--colour-three", colourPalettesDictionary[currentPaletteIndex][3]);
    root.style.setProperty("--colour-four", colourPalettesDictionary[currentPaletteIndex][4]);
    root.style.setProperty("--colour-five", colourPalettesDictionary[currentPaletteIndex][5]);
};

const colourPalettesDictionary = {
    1: ["standard", "blue", "fuchsia", "yellow", "aqua", "red"],
    2: ["variant", "#648FFF", "#DC267F", "#785EF0", "#FE6100", "#FFB000"],
};

function cyclePalette() {
    if (currentPaletteIndex === 2) {
        currentPaletteIndex = 1;
    } else {
        currentPaletteIndex += 1;
    }
}

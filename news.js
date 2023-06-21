const conversationBox = document.getElementById("conversation");
const prompt = document.getElementById("prompt");

const submissionArea = document.getElementById("submission-area");
const inputLabel = document.getElementById("input-label");
const userInput = document.getElementById("user-input");
const submitButton = document.querySelector("button");

let numOfClicks = 0;

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        processSubmission();
    }
});

const processSubmission = function () {
    if (!userInput.value) {
        return;
    }
    prompt.classList.add("hide");

    switch (numOfClicks) {
        case 0:
            const messageOne = createNewMessage(
                "A'right 'Arry. Did you see that ludicrous display last night?"
            );
            conversationBox.appendChild(messageOne);
            printResponse("What was Wenger thinking, sending Walcott on that early?");
            break;
        case 1:
            const messageTwo = createNewMessage(
                "The thing about Arsenal is they always try and walk it in"
            );
            conversationBox.appendChild(messageTwo);
            printResponse("That is true. See you later boss");
            break;
        case 2:
            const messageThree = createNewMessage("Mind 'ow ya go");
            conversationBox.appendChild(messageThree);

            submissionArea.removeChild(userInput);
            submissionArea.removeChild(submitButton);
            submissionArea.removeChild(inputLabel);
            break;
    }

    userInput.value = "";
    numOfClicks++;
};

function createNewMessage(content, user = true) {
    const newMessage = document.createElement("p");

    newMessage.classList.add("message");
    newMessage.classList.add(user ? "user" : "other");

    newMessage.innerHTML = content;

    return newMessage;
}

function printResponse(content) {
    const placeHolderMessage = createNewMessage("...", false);
    const newMessage = createNewMessage(content, false);

    conversationBox.appendChild(placeHolderMessage);

    userInput.disabled = true;
    submitButton.disabled = true;

    setTimeout(() => {
        conversationBox.removeChild(placeHolderMessage);
        conversationBox.appendChild(newMessage);

        userInput.disabled = false;
        submitButton.disabled = false;

        userInput.focus();
    }, 1000);
}

submitButton.onclick = processSubmission;

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

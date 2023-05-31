const conversationBox = document.getElementById("conversation");
const prompt = document.getElementById("prompt");

const submissionArea = document.getElementById("submission-area");
const inputLabel = document.getElementById("input-label");
const userInput = document.getElementById("user-input");
const submitButton = document.querySelector("button");

let numOfClicks = 0;

submitButton.onclick = function () {
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
    }, 1000);
}

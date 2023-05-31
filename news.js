const hiddenButton = document.querySelector("button");

const explanationNote = document.getElementById("prompt");

const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");
const messageThree = document.getElementById("message-three");
const messageFour = document.getElementById("message-four");
const messageFive = document.getElementById("message-five");

const userInput = document.getElementById("user-submission");

let numOfClicks = 0;

hiddenButton.onclick = function () {
    /* After each click: 
        Check that they've written something
        If so, print out the fake message, and disable their inputs
        Then wait, and print out the fake response. Then re-enable their input

        Disable input after the final one, or add a reset button
    */

    if (userInput.value === "") {
        return;
    }
    explanationNote.classList.add("hide");

    switch (numOfClicks) {
        case 0:
            messageOne.classList.remove("hide");
            setTimeout(() => {
                messageTwo.classList.remove("hide");
            });
            break;
        case 1:
            messageThree.classList.remove("hide");
            setTimeout(() => {
                messageFour.classList.remove("hide");
            });
            break;
        case 2:
            messageFive.classList.remove("hide");
            break;
    }

    userInput.value = "";
    numOfClicks++;
};

function slowRevealMessage(messageElement) {
    messageElement.value = "...";
    messageElement.classList.remove("hide");
    setTimeout(() => {
        messageElement.value = "What was Wenger thinking, sending Walcott on that early?";
    }, 1000);
}

function createNewMessage(user = true, content) {
    const newMessage = document.createElement("p");
    newMessage.classList.add("message");
    newMessage.classList.add(user ? "user" : "other");
}

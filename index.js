const hiddenButton = document.querySelector("button");
console.log(hiddenButton);

hiddenButton.onclick = function () {
    hiddenButton.classList.add("hide");

    const defaultImage = document.getElementById("default-sport");
    defaultImage.classList.add("hide");

    const hiddenVideo = document.getElementById("sport-video");
    hiddenVideo.classList.remove("hide");
};

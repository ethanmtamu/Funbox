function initialize() {
    console.log("initialize() ran!");
    createCommunity()
}

function createCommunity() {
    const div = doucment.createElement("div");
    div.className = "community";

    const spand = document.createElement("span");
    spand.textContent = "Community name";

    div.appendChild(span);

    const container = document.querySelector(".communities");
    container.appendChild(div); 
}

document.addEventListener("DOMContentLoaded", initialize);
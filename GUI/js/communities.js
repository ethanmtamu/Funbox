function initialize() {
    console.log("initialize() ran!");
    createCommunity()
}

function createCommunity(community_id) {
    const div = document.createElement("div");
    div.classList.add("community");

    const img = document.createElement("img");
    img.style.border = "5px solid blue";

    const spand = document.createElement("span");
    spand.textContent = "Community name";

    div.appendChild(img);
    div.appendChild(span);

    const container = document.querySelector(".communities");
    container.appendChild(div); 
}

document.addEventListener("DOMContentLoaded", initialize);
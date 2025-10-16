function initialize() {
    console.log("initialize() ran!");
    for (let i = 0; i < 10; i++) {
      createCommunity(i);
    }   
}

function createCommunity(community_id) {
    const div = document.createElement("div");
    div.classList.add("community");

    const span = document.createElement("span");
    span.innerHTML = "Community name"+community_id;

    div.appendChild(span);

    const container = document.querySelector(".communities");
    container.appendChild(div); 
}

document.addEventListener("DOMContentLoaded", initialize);

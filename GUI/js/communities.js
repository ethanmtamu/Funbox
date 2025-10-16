function initialize() {
    console.log("initialize() ran!");
    for (let i = 0; i < 10; i++) {
      createCommunity(i);
    }   
}

// placeholder
const baseLink = "communities/"

function createCommunity(community_id) {
    const div = document.createElement("div");
    div.classList.add("community");

    const img = document.createElement("img");
    img.style.border = "5px solid blue";

    const span = document.createElement("span");
    span.innerHTML = "Community name"+community_id;

    div.appendChild(img);
    div.appendChild(span);

    const container = document.querySelector(".communities");
    // container.appendChild(div); 

    const link = document.createElement("a");
    link.href = baseLink + community_id
    link.appendChild(div);

    container.appendChild(link);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
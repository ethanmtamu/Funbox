function initialize() {
    console.log("initialize() ran!");
    for (let i = 0; i < 10; i++) {
      createCommunity(i);
    }   
}

// placeholder
const baseLink = "communities/"

function createCommunity(community_id) {
    function onCommunityClick() {
      window.location = baseLink + community_id;
    }

    const div = document.createElement("div");
    div.classList.add("community");
    div.onclick = onCommunityClick;
    div.style.cursor = "pointer";

    const img = document.createElement("img");
    img.style.border = "5px solid blue";

    const span = document.createElement("span");
    span.innerHTML = "Community name"+community_id;

    div.appendChild(img);
    div.appendChild(span);

    const container = document.querySelector(".communities");
    container.appendChild(div);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
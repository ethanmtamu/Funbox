function initialize() {
    console.log("initialize() ran!");
    for (let i = 1; i <= 10; i++) {
      createCommunity(i);
    }
}

// placeholder
const baseLink = "communities/";

function createCommunity(community_id) {
  
    function onCommunityClick() {
      window.location = baseLink + community_id;
    }

    const div = document.createElement("div");
    div.classList.add("community");
    div.addEventListener("onclick", onCommunityClick)

    const img = document.createElement("img");
    img.src = "media/dummypfp.jpg";
    img.width = 50;

    const span = document.createElement("span");
    span.innerText = "Community name"+' '+community_id;

    div.appendChild(img);
    div.appendChild(span);

    const container = document.querySelector(".communities");
    container.appendChild(div);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
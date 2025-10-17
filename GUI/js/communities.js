function initialize() {
    console.log("initialize() ran!");
    for (let i = 1; i <= 10; i++) {
      placeholder = {id: i, name: "F".repeat(i)+"unbox!", memberCount: Math.round(10*i*Math.random())}
      createCommunity(placeholder);
    }
}

// placeholder
const baseLink = "communities/";

function createCommunity(data) {
  
    function onCommunityClick() {
      window.location = baseLink + data.id;
    }

    const div = document.createElement("div");
    div.classList.add("community");
    div.addEventListener("onclick", onCommunityClick)

    const img = document.createElement("img");
    img.src = "media/dummypfp.jpg";
    img.width = 50;

    const community_label = document.createElement("span");
    community_label.classList.add("community-name");
    community_label.innerHTML = data.name;

    const member_label = document.createElement("span");
    member_label.innerHTML = "<br>"+String(data.memberCount)+" members";

    const community_infobox = document.createElement("div");
    community_infobox.appendChild(community_label);
    community_infobox.appendChild(member_label);

    div.appendChild(img);
    div.appendChild(community_infobox);

    const container = document.querySelector(".communities");
    container.appendChild(div);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
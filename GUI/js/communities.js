const test_user_data = []

function initialize() {
    console.log("initialize() ran!");
    for (let i = 1; i <= 10; i++) {
      test_user_data[i-1] = {id: i, name: "F".repeat(i)+"unbox!", memberCount: Math.round(10*i*Math.random())}
    }
    createCommunities(test_user_data);
}

// placeholder
const baseLink = "communities/";

function createCommunity(community_data) {
  
    function onCommunityClick() {
      window.location = baseLink + community_data.id;
    }

    const div = document.createElement("div");
    div.classList.add("community");
    div.addEventListener("onclick", onCommunityClick)

    const img = document.createElement("img");
    img.src = "media/dummypfp.jpg";
    img.width = 50;

    const community_label = document.createElement("span");
    community_label.classList.add("community-name");
    community_label.innerHTML = community_data.name;

    const member_label = document.createElement("span");
    member_label.innerHTML = "<br>"+String(community_data.memberCount)+" members!";

    const community_infobox = document.createElement("div");
    community_infobox.appendChild(community_label);
    community_infobox.appendChild(member_label);
    div.appendChild(img);
    div.appendChild(community_infobox);

    const container = document.querySelector(".communities");
    container.appendChild(div);
}

// TODO: figure out better name for this function
function createCommunities(user_communities) {
  user_communities.forEach(community_data => {
    createCommunity(community_data);
  });
  const new_community_button = document.createElement("div");
  new_community_button.innerHTML = "New community!";
  new_community_button.classList.add("new-community");

  const find_community_button = document.createElement("div");
  find_community_button.innerHTML = "Join communities!";
  find_community_button.classList.add("new-community");
  
  // oml
  const container = document.querySelector(".communities")
  container.append(new_community_button, find_community_button);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
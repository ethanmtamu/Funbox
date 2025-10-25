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
const defaultImagePath = "media/dummypfp.jpg"

function createCommunity(community_data) {
  
    function onCommunityClick() {
      window.location = baseLink + community_data.id;
    }

    const div = document.createElement("div");
    div.classList.add("community");
    div.addEventListener("click", onCommunityClick)

    const img = document.createElement("img");
    img.src = defaultImagePath;
    img.width = 50;

    // too much fun
    div.addEventListener("mouseover", () => {img.setAttribute("src", "media/onhover-test.png");});
    div.addEventListener("mouseout", () => {img.setAttribute("src", defaultImagePath);});

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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
function createCommunityClickAction(text) {
  let popupForm = document.createElement("div");
  popupForm.innerHTML = text;
  popupForm.classList.add("modal-popup-form");
  popupForm.hidden = true;

  const body = document.querySelector("body");
  body.append(popupForm);

  return () => {
    popupForm.hidden = false;
    // temporary click action to close
    popupForm.addEventListener("click", () => {
      popupForm.hidden = true;;
    })
  }
}


function createCommunities(user_communities) {
  user_communities.forEach(community_data => {
    createCommunity(community_data);
  });
  const new_community_button = document.createElement("div");
  new_community_button.innerHTML = "New community!";
  new_community_button.classList.add("new-community");
  new_community_button.addEventListener("click", createCommunityClickAction("Sample pop-up text"));

  const find_community_button = document.createElement("div");
  find_community_button.innerHTML = "Join communities!";
  find_community_button.classList.add("new-community");
  find_community_button.addEventListener("click", createCommunityClickAction("new one"));
  
  // oml
  const container = document.querySelector(".communities")
  container.append(new_community_button, find_community_button);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
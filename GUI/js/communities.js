const data = [
    { id: 1, name: "challenge 1", file: "challenge1.txt"},
    { id: 2, name: "challenge 2", file: "challenge2.txt"}
    // { id: 3, name: "challenge 3", file: "challenge3.txt"},
    // { id: 4, name: "challenge 4", file: "challenge4.txt"},
    // { id: 5, name: "challenge 5", file: "challenge5.txt"},
    // { id: 6, name: "challenge 6", file: "challenge6.txt"},
    // { id: 7, name: "challenge 7", file: "challenge7.txt"},
    // { id: 8, name: "challenge 8", file: "challenge8.txt"},
    // { id: 9, name: "challenge 9", file: "challenge9.txt"},
    // { id: 10, name: "challenge 10", file: "challenge10.txt"}
];

const container = document.getElementById('tabs');

data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'flex-item';
    div.textContent = item.id;
    container.appendChild(div);
});

/*
fetch('/api/items')
  .then(res => res.json())
  .then(data => {
    // same loop as above
  });
 */const test_user_data = []



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

function isInsideBounds(boundsObj, mouseX, mouseY) {
  if ( (mouseX >= boundsObj.left) && 
       (mouseX <= boundsObj.left+boundsObj.width) && 
       (mouseY >= boundsObj.top) && 
       (mouseY <= boundsObj.top+boundsObj.height)) {
    return true;
  } else {
    return false;
  }
}

// very slow becoming the discord create server form
function createPopupFormButtonList(titleText) {
  let container = document.createElement("label");
  container.innerHTML = titleText;

  for (let i = 0; i < 4; i++) {
    let opt = document.createElement("button");
    opt.innerHTML = "GLORY TO FUNBOX!"+'!'.repeat(i)+" YEA"+"!".repeat(i);
    container.appendChild(opt);
  }

  return container;
}

// currently considering extracting a huge
// chunk of this function into a class
function createCommunityClickAction(headerText, description) {
  let popupForm = document.createElement("form");
  popupForm.classList.add("modal-popup-form");
  popupForm.hidden = true;

  let header = document.createElement("h2");
  header.classList.add("popup-form-title");
  header.innerHTML = headerText;
  popupForm.appendChild(header);

  let desc = document.createElement("div");
  desc.classList.add("popup-form-desc");
  desc.innerHTML = description;
  popupForm.appendChild(desc)

  let closeButton = document.createElement("div");
  closeButton.classList.add("close-button");
  popupForm.appendChild(closeButton);

  popupForm.appendChild(createPopupFormButtonList("box == Fun"))

  const body = document.querySelector("body");
  body.append(popupForm);

  // prevents form from immediately closing after opening
  // because of how click events are done
  let justOpened = false; 

  // should be used both for close button (tba)
  // and clicking outside form
  let hideAction = () => {
    popupForm.hidden = true;
    document.removeEventListener("click", clickAction);
  }

  let clickAction = (event) => {
    let boundsForm = popupForm.getBoundingClientRect();
    let boundsClose = closeButton.getBoundingClientRect();
    let x = event.clientX; 
    let y = event.clientY;

    if ( (!isInsideBounds(boundsForm, x, y) || isInsideBounds(boundsClose, x, y)) 
          && !justOpened) { hideAction(); }
    else { justOpened = false; }
  }
  
  return () => {
    popupForm.hidden = false;
    justOpened = true;
    document.addEventListener("click", clickAction);
    closeButton.addEventListener("click", hideAction, {once: true});
  }
}


function createCommunities(user_communities) {
  user_communities.forEach(community_data => {
    createCommunity(community_data);
  });
  const new_community_button = document.createElement("div");
  new_community_button.innerHTML = "New community!";
  new_community_button.classList.add("new-community");
  new_community_button.addEventListener("click", createCommunityClickAction("FIND","Sample pop-up text"));

  const find_community_button = document.createElement("div");
  find_community_button.innerHTML = "Join communities!";
  find_community_button.classList.add("new-community");
  find_community_button.addEventListener("click", createCommunityClickAction("JOIN","new one"));
  
  // oml
  const container = document.querySelector(".communities")
  container.append(new_community_button, find_community_button);
}

document.addEventListener("DOMContentLoaded", initialize);

// community/community-name/
const data = [
    { id: 1, name: "challenge 1", file: "challenge1.txt"},
    { id: 2, name: "challenge 2", file: "challenge2.txt"},
    // { id: 3, name: "challenge 3", file: "challenge3.txt"},
    // { id: 4, name: "challenge 4", file: "challenge4.txt"},
    // { id: 5, name: "challenge 5", file: "challenge5.txt"},
    // { id: 6, name: "challenge 6", file: "challenge6.txt"},
    // { id: 7, name: "challenge 7", file: "challenge7.txt"},
    // { id: 8, name: "challenge 8", file: "challenge8.txt"},
    // { id: 9, name: "challenge 9", file: "challenge9.txt"},
    // { id: 10, name: "challenge 10", file: "challenge10.txt"}
];

const container = document.getElementById("id");

data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'flex-item';
    div.textContent = item.name;
    container.appendChild(div);
});

/*
fetch('/api/items')
  .then(res => res.json())
  .then(data => {
    // same loop as above
  });
 */
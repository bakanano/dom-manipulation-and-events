const p = document.createElement("p");
p.classList.add("red");
p.textContent = "Hey I'm red!";
p.style.color = "red";
document.body.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add("blue");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
document.body.appendChild(h3);


const div = document.createElement("div");
div.classList.add("blackpink");
div.style.borderColor = "black";
div.style.borderStyle = "solid";
div.style.backgroundColor = "pink";
document.body.appendChild(div);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const pInsideDiv = document.createElement("p");
pInsideDiv.textContent = "ME TOO!";
div.appendChild(pInsideDiv);
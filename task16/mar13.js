const works = {
    "task1": {"title": "Project 1", "url": "colour1.html"},
    "task2": {"title": "Project 2", "url": "colour2.html"},
    "task3": {"title": "Project 3", "url": "colour3.html"},
};

const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

for (let key in works) {
    let projectLink = document.createElement("div");
    projectLink.innerText = works[key].title;
    projectLink.className = "nav_item";

    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };
    navDiv.appendChild(projectLink);
}
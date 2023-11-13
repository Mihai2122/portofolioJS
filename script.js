const projects = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" },
];

window.onload = function () {
  const projectsList = document.getElementById("projectsList");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectsList.appendChild(projectElement);
  });
};

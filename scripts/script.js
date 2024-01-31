function openNav() {
  const navEl = document.getElementById("clicked-navigation");
  navEl.style.display = "block";

  const hamMenu = document.getElementById("hamburger-open");
  const closeNavBtn = document.getElementById("hamburger-close");

  hamMenu.style.display = "none";
  closeNavBtn.style.display = "block";
}

function closeNav() {
  const hamMenu = document.getElementById("hamburger-open");
  const closeNavBtn = document.getElementById("hamburger-close");
  const navMenu = document.getElementById("clicked-navigation");
  navMenu.style.display = "none";
  hamMenu.style.display = "block";
  closeNavBtn.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function renderSkills() {
  const skillListEl = document.getElementById("skills");

  for (skill of skills) {
    const skillEl = `<li class="skill">${skill}</li>`;
    skillListEl.innerHTML += skillEl;
  }
}

function renderProjects() {
  for (let project of projects) {
    const projectName = project.name;
    const projectDescription = project.description;
    const projectLink = project.link;
    const imageLink = project.imageLink;
    const tools = project.tools;
    let toolsList = "";

    for (let tool of tools) {
      toolsList += `<li class="tool">${tool}</li>`;
    }

    const template = `
        <article class="project-container columns">
        <figure class="project-img-figure column">
          <a href="${projectLink}" target="_blank">
            <img class="project-img" alt="${imageLink}" src="${imageLink}">
          </a>
        </figure>
        <div class="project-info column">
          <h3 class="project-title">${projectName}</h3>
          <p>${projectDescription}</p>
          <div class="btns">
            <a class="project-btn links general-btns" href="${projectLink}" target="_blank">View Project <i
            class="fa-solid fa-arrow-right project-arrow"></i></a>
          </div>
          <div class="tools-div">
            <ul class="tools wrap">
            ${toolsList}
            </ul>
          </div>
        </div>
      </article>
        `;
    const projectsEl = document.getElementById("projects");
    projectsEl.innerHTML += template;
  }
}

window.onload = () => {
  renderProjects();
  renderSkills();
};

const projects = [
  {
    title: "Campus Events Page",
    category: "campus-life",
    description:
      "A friendly place to discover talks, clubs, sports, and student activities happening around campus.",
    status: "Project idea",
  },
  {
    title: "Study Planner",
    category: "productivity",
    description:
      "A simple weekly planner that helps students organise assignments, revision, and study sessions.",
    status: "Project idea",
  },
  {
    title: "Web Foundations Guide",
    category: "learning",
    description:
      "A compact guide to HTML, CSS, and JavaScript concepts for students starting their web journey.",
    status: "Learning project",
  },
  {
    title: "Club Directory",
    category: "campus-life",
    description:
      "A searchable directory that helps new students find clubs and communities to join.",
    status: "Future idea",
  },
  {
    title: "Deadline Countdown",
    category: "productivity",
    description:
      "A clear view of upcoming coursework deadlines with a little space to plan the next step.",
    status: "Future idea",
  },
  {
    title: "Accessible Forms Demo",
    category: "learning",
    description:
      "An example contact form with clear labels, helpful feedback, and keyboard support.",
    status: "Learning project",
  },
];
const categoryNames = {
  "campus-life": "Campus life",
  productivity: "Productivity",
  learning: "Learning",
};

document.querySelectorAll("#year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav)
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

const themeButtons = document.querySelectorAll(".theme-toggle");
const savedTheme = localStorage.getItem("kibets-team-theme");
if (savedTheme === "dark") document.body.classList.add("dark");
themeButtons.forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(document.body.classList.contains("dark")),
  );
  button.textContent = document.body.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("kibets-team-theme", isDark ? "dark" : "light");
    themeButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(isDark));
      item.textContent = isDark ? "Light mode" : "Dark mode";
    });
  });
});

const projectGrid = document.querySelector("#project-grid");
if (projectGrid) {
  const count = document.querySelector("#project-count");
  const search = document.querySelector("#project-search");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  let activeCategory = "all";
  function renderProjects() {
    const query = search.value.trim().toLowerCase();
    const visibleProjects = projects.filter(
      (project) =>
        (activeCategory === "all" || project.category === activeCategory) &&
        `${project.title} ${project.description}`.toLowerCase().includes(query),
    );
    projectGrid.replaceChildren();
    visibleProjects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "card project-card";
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = categoryNames[project.category];
      const title = document.createElement("h3");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description;
      const status = document.createElement("span");
      status.className = "project-status";
      status.textContent = project.status;
      article.append(tag, title, description, status);
      projectGrid.append(article);
    });
    count.textContent = visibleProjects.length
      ? `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} shown`
      : "No projects match. Try another search or category.";
  }
  filterButtons.forEach((button) =>
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProjects();
    }),
  );
  search.addEventListener("input", renderProjects);
  renderProjects();
}

const form = document.querySelector("#contact-form");
if (form) {
  const fields = ["name", "email", "message"].map((id) =>
    document.querySelector(`#${id}`),
  );
  const success = document.querySelector("#form-success");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.textContent = "";
    let firstInvalid = null;
    fields.forEach((field) => {
      const error = document.querySelector(`#${field.id}-error`);
      let message = "";
      if (!field.value.trim()) message = "Please fill in this field.";
      else if (
        field.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
      )
        message = "Enter a valid email address.";
      field.setAttribute("aria-invalid", String(Boolean(message)));
      error.textContent = message;
      if (message && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    success.textContent = `Thanks, ${fields[0].value.trim()}! Your message is ready. This demo form does not send data to a server.`;
    form.reset();
    fields.forEach((field) => field.removeAttribute("aria-invalid"));
  });
  fields.forEach((field) =>
    field.addEventListener("input", () => {
      if (field.value.trim()) {
        field.setAttribute("aria-invalid", "false");
        document.querySelector(`#${field.id}-error`).textContent = "";
      }
    }),
  );
}

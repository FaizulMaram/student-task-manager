// Student Task Manager - task creation and search

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// Add a new task card when the form is submitted
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const card = document.createElement("li");
  card.className = "task-card";

  const title = document.createElement("h3");
  title.textContent = taskTitle.value.trim();

  const description = document.createElement("p");
  description.textContent = taskDescription.value.trim();

  card.appendChild(title);
  card.appendChild(description);

  // Clicking a card toggles its completed state
  card.addEventListener("click", function () {
    card.classList.toggle("completed");
  });

  taskList.appendChild(card);
  taskForm.reset();
  taskTitle.focus();
});

// Filter tasks by title or description as the user types
searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();
  const cards = taskList.querySelectorAll(".task-card");

  cards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();
    const matches = title.includes(query) || description.includes(query);
    card.style.display = matches ? "" : "none";
  });
});

const searchInput = document.getElementById("taskSearch");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const tasks = document.querySelectorAll(".task-card");

    tasks.forEach(function (task) {
        const taskText = task.textContent.toLowerCase();

        if (taskText.includes(searchValue)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    });
});

// Task completion: every task card gets a Complete/Undo button
function addCompleteButton(card) {
    const button = document.createElement("button");
    button.className = "complete-btn";
    button.textContent = card.classList.contains("completed")
        ? "Undo"
        : "Complete";

    button.addEventListener("click", function () {
        card.classList.toggle("completed");
        button.textContent = card.classList.contains("completed")
            ? "Undo"
            : "Complete";
    });

    card.appendChild(button);
}

// Attach the button to the existing task cards
document.querySelectorAll(".task-card").forEach(addCompleteButton);

// Create a new task card when the form is submitted
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const card = document.createElement("li");
    card.className = "task-card";

    const title = document.createElement("h3");
    title.textContent = document.getElementById("taskTitle").value.trim();

    const description = document.createElement("p");
    description.textContent = document
        .getElementById("taskDescription")
        .value.trim();

    card.appendChild(title);
    card.appendChild(description);
    addCompleteButton(card);

    taskList.appendChild(card);
    taskForm.reset();
});
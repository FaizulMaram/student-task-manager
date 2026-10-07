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
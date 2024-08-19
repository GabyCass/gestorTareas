import { renderTasks } from "./ui";
import { addTask, deletetask, toggleTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;
        
        if(taskInput !== "") {
            addTask(taskInput);
            renderTasks();
            // Limpiar el valor del input
            document.getElementById("task-input").value = "";
        }
    });

    document.getElementById("task-list").addEventListener("click", (e) => {
        console.log("entra aca")
        console.log("e, ", e.target.innerText)
        if(e.target.classList.contains("delete")) {
            console.log("entra delete")
            const taskId = e.target.parentElement.getAttribute("data-id");
            console.log("taskId, ", taskId)
            deletetask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            toggleTask(taskId);
            renderTasks();
        }
    });
});
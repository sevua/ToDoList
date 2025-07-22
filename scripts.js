document.addEventListener("input", function(e) {
  if (e.target.className === "taskText") {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
})

const tasksList = document.querySelector(".tasks");
const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", function(){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const textarea = document.createElement("textarea");
    textarea.className = "taskText";
    textarea.placeholder = "Введите задачу...";
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteTask";
    li.appendChild(checkbox);
    li.appendChild(textarea);
    li.appendChild(deleteButton)
    tasksList.appendChild(li);
})

tasksList.addEventListener("click", function(event){
    if (event.target.classList.contains("deleteTask")){
        const deleteTB = event.target.parentElement;
        deleteTB.remove();
    }
});
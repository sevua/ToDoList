let tasks = [];

document.addEventListener("input", function(e) {
  if (e.target.className === "taskText") {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
})

const addTaskBtn = document.getElementById('addTask');
const modal = document.getElementById('modal');
addTaskBtn.addEventListener('click', function() {
  modal.classList.remove('hidden');
});

function renderTask() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(function(task, index) {
    const li = document.createElement('li');    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.classList.add('taskCheckbox');
    checkbox.dataset.index = index;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteTask');
    deleteBtn.dataset.index = index;

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

const addTaskButton = document.getElementById('addTaskButton');
const input = document.getElementById('taskInput');

addTaskButton.addEventListener('click', function(){
  const value = input.value;
  value.length !== 0 && value.length <= 20 ?tasks.push({ text: value, done: false })
 : alert("Некорректный ввод");
  renderTask();
  input.value ="";
  modal.classList.add('hidden');
});

const tasksList = document.getElementById('taskList');
tasksList.addEventListener("click", function(event){
    if (event.target.classList.contains("deleteTask")){
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        renderTask()
    }
});


const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

document.addEventListener('DOMContentLoaded', getTasks);
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);

function tasks() {
  return localStorage.getItem('tasks') === null
    ? []
    : JSON.parse(localStorage.getItem('tasks'));
}

function getTasks() {
  tasks().forEach((task) => paintTask(task, false));
}

function paintTask(task, newTask = true) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.innerHTML = task;
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content delete-btn';
  link.innerHTML = '<span>x</span>';
  li.append(link);
  newTask ? taskList.prepend(li) : taskList.append(li);
}

function addTask(event) {
  if (tasks().includes(taskInput.value)) {
    alert('Task already exists in storage');
  } else if (taskInput.value === '') {
    alert('Add a task');
  } else {
    paintTask(taskInput.value);
    localStorage.setItem(
      'tasks',
      JSON.stringify([taskInput.value, ...tasks()])
    );
    taskInput.value = '';
    event.preventDefault();
  }
}

function removeTask() {
  // if (event.target.parentElement.classList.contains('delete-item')) {
  const elementToRemove = event.target.parentElement.parentElement;
  //   console.log(elementToRemove);
  //   localStorage.removeItem("tasks", JSON.stringify(tasks().filter(task => task !== elementToRemove.textContent)));
  // localStorage.setItem(
  //   'tasks',
  // JSON.stringify(tasks().filter(task => task !== elementToRemove.textContent))
  // );
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (elementToRemove.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  elementToRemove.remove();
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem('tasks');
}

function filterTasks(event) {
  document.querySelectorAll('.collection-item').forEach((task) => {
    if (
      task.textContent.toLowerCase().includes(event.target.value.toLowerCase())
    ) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

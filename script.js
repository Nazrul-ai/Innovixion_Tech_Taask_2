const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function editTask(button) {
  const li = button.parentNode;
  const span = li.querySelector('span');

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = span.textContent;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.onclick = function () {
    span.textContent = inputField.value;
    li.removeChild(inputField);
    li.removeChild(saveButton);
  };

  li.appendChild(inputField);
  li.appendChild(saveButton);
}

function deleteTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

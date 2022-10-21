const input = document.querySelector("#textField");
const okBtn = document.querySelector("#add-task");
const listOfTasks = document.querySelector("#todo-list");
const msg = document.querySelector("#msg");
const countValue = document.getElementsByClassName("taskCompleted");
const pCountTracker = document.querySelector("#count");

input.value = "";

okBtn.addEventListener("click", () => {
  if (checkValidInput(input)) {
    addTask(input);
    msg.innerHTML = "";
  }
  input.value = "";
});

function addTask(input) {
  var task = document.createElement("li");
  task.innerHTML = `<span>${input.value}</span>`;

  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("🗑️"));

  deleteBtn.setAttribute("class", "deleteBtn");
  task.appendChild(deleteBtn);
  listOfTasks.appendChild(task);

  task.addEventListener("click", () => {
    taskStatus(task);
    updateCount(countValue);
  });

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
}

function checkValidInput(input) {
  let tempput = input.value;
  if (tempput != "" && tempput.length <= 20) {
    return true;
  }
  if (tempput == "") {
    msg.innerHTML = "input must not be empty";
  }
  if (tempput.length > 20) {
    msg.innerHTML = "Too long text..";
  }
}

function taskStatus(task) {
  task.classList.toggle("taskCompleted");
}
function updateCount(countValue) {
  pCountTracker.innerHTML = `${countValue.length} completed`;
}


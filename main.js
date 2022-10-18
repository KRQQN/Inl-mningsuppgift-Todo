const input = document.querySelector("#textField");
const okBtn = document.querySelector("#add-task");
const listOfTasks = document.querySelector("#todo-list");
const msg = document.querySelector("#msg");
var countValue = 0;


input.value = "";




okBtn.addEventListener("click", () => {
  
  if(checkValidInput(input)){
      addTask(input);
    }
    input.value = "";
});

function addTask(input) {
  var task = document.createElement("li");
  task.innerHTML = `<span>${input.value}</span>`;

  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));

  task.appendChild(deleteBtn);
  listOfTasks.appendChild(task);

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
}
function checkValidInput(input){
    
    let tempput = input.value;
    if (tempput != "" && tempput.length <= 25){
      return true;
    }
    if (tempput == ""){
        msg.innerHTML = "input must not be empty"
    } 
    if (tempput.length > 25){
        msg.innerHTML = "Too long text.."
    }



} 



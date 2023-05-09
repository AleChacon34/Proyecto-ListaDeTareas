let taskArray = [];

const addTask = () => {
  let taskDescription = document.getElementById("task").value;
  let protoTask = new Task(taskDescription);

  if (localStorage.getItem("tasks") == null) {
    taskArray.push(protoTask);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  } else {
    taskArray = JSON.parse(localStorage.getItem("tasks"));
    taskArray.push(protoTask);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }
  clearInput();
};

const clearInput = () => {
  var getValue = document.getElementById("task");
  if (getValue.value != "") {
    getValue.value = "";
  }
};
const loadTasks = () => {
  taskArray = JSON.parse(localStorage.getItem("tasks"));

  for (let task of taskArray) {
    let node = document.createElement("li");
    let textNode = document.createTextNode(task.taskDescription);

    let nodeHr = document.createElement('hr');

    let buttonNode = document.createElement('button');
    let textButton = document.createTextNode('Eliminar');

    node.appendChild(textNode);
    buttonNode.appendChild(textButton);

    document.getElementById("listTasks").appendChild(node);
    document.getElementById("listTasks").appendChild(buttonNode);
    document.getElementById("listTasks").appendChild(nodeHr);

    buttonNode.addEventListener('click', () => {
      let text = textNode.wholeText;
      for (let task of taskArray){
        if (text === task.taskDescription){
          let index = taskArray.indexOf(task)
          taskArray.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(taskArray));
        }
      }
      location.reload()
    });
  }
}

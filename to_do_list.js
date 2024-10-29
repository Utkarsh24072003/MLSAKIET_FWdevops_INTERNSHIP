function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById("task-list");
  
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
  
      const taskContent = document.createElement("span");
      taskContent.className = "task-text";
      taskContent.innerText = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.className = "remove-btn";
      removeButton.innerText = "Remove";
      removeButton.onclick = () => taskList.removeChild(taskItem);
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = ""; 
    }
  }
  
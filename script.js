const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");
const tasks = [];

form.addEventListener("submit", function(event)
{
   event.preventDefault();
   const taskName = taskInput.value;
   const taskPriority = priorityInput.value;

   if (taskName === "")
   {
        return;
   }

   const task =
   {
        name: taskName,
        priority: taskPriority,
        completed: false
   };

   tasks.push(task);

   taskInput.value = "";

   displayTasks();
});

function displayTasks()
{
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++)
   {

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        if (tasks[i].completed === true)
        {
             taskElement.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.textContent = tasks[i].name + " - " + tasks[i].priority;

        const completeButton = document.createElement("button");
      
        if (tasks[i].completed === true)
        {
            completeButton.textContent = "Incomplete";
         }
        else
        {
            completeButton.textContent = "Complete";
        }

        completeButton.addEventListener("click", function()
        {
            if (tasks[i].completed === true)
            {
                tasks[i].completed = false;
            }
             else
             {
                tasks[i].completed = true;
            }

           displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function()
        {
            tasks.splice(i, 1);
            displayTasks();
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);
    }
}
//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

const todoInputTuesday = document.querySelector('.todo-input-tuesday');
const todoButtonTuesday = document.querySelector('.todo-button-tuesday');
const todoListTuesday = document.querySelector('.todo-list-tuesday');

const todoInputWednesday = document.querySelector('.todo-input-wednesday');
const todoButtonWednesday = document.querySelector('.todo-button-wednesday');
const todoListWednesday = document.querySelector('.todo-list-wednesday');

const todoInputThursday = document.querySelector('.todo-input-thursday');
const todoButtonThursday = document.querySelector('.todo-button-thursday');
const todoListThursday = document.querySelector('.todo-list-thursday');

const todoInputFriday = document.querySelector('.todo-input-friday');
const todoButtonFriday = document.querySelector('.todo-button-friday');
const todoListFriday = document.querySelector('.todo-list-friday');

const today = new Date();
const currentDayOfWeek = today.getDay();

//EVENT LISTENERS
todoList.addEventListener("click", deleteCheck);

todoListTuesday.addEventListener("click", deleteCheck);

todoListWednesday.addEventListener("click", deleteCheck);

todoListThursday.addEventListener("click", deleteCheck);

todoListFriday.addEventListener("click", deleteCheck);

todoButton.addEventListener("click", function(event) {
    addTodo(event, 'monday', todoInput, todoList);
});

todoButtonTuesday.addEventListener("click", function(event) {
    addTodo(event, 'tuesday', todoInputTuesday, todoListTuesday);
});

todoButtonWednesday.addEventListener("click", function(event) {
    addTodo(event, 'wednesday', todoInputWednesday, todoListWednesday);
});

todoButtonThursday.addEventListener("click", function(event) {
    addTodo(event, 'thursday', todoInputThursday, todoListThursday);
});

todoButtonFriday.addEventListener("click", function(event) {
    addTodo(event, 'friday', todoInputFriday, todoListFriday);
});

filterOptions.addEventListener("click", filterTodo);

//FUNCTIONS

// GET DATES FOR Week Days
for (let i = 1; i <= 5; i++) {
    const dayToAdd = (i - currentDayOfWeek);
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + dayToAdd);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    const daySpan = document.querySelector(`.day${i}`);
    if (daySpan) {
        daySpan.textContent = formattedDate;
    }
}
// Load tasks from local storage and populate the task lists
function loadTasksFromLocalStorage(day, taskList) {
    const tasks = JSON.parse(localStorage.getItem(day)) || [];
    const doneUpTasks = JSON.parse(localStorage.getItem(`${day}_doneUp`)) || [];
    const completedTasks = JSON.parse(localStorage.getItem(`${day}_completed`)) || [];

    const htmlDoneTasks = JSON.parse(localStorage.getItem(`${day}_htmlDone`)) || [];

    tasks.forEach(task => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = task;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const htmlButton = document.createElement('button');
        htmlButton.innerHTML = '<i class="fa-regular fa-file-code fa-xl"></i>';
        htmlButton.classList.add('html-btn');
        todoDiv.appendChild(htmlButton);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-regular fa-square-check fa-xl"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const jiraButton = document.createElement('button');
        jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
        jiraButton.classList.add('jira-btn');
        todoDiv.appendChild(jiraButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        if (htmlDoneTasks.includes(task)) {
            todoDiv.classList.add('htmlDone');
        }

        if (doneUpTasks.includes(task)) {
            todoDiv.classList.add('doneUp');
        }
        
        if (completedTasks.includes(task)) {
            todoDiv.classList.add('completed');
        }

        taskList.appendChild(todoDiv);
    });
}
loadTasksFromLocalStorage('monday', todoList);
loadTasksFromLocalStorage('tuesday', todoListTuesday);
loadTasksFromLocalStorage('wednesday', todoListWednesday);
loadTasksFromLocalStorage('thursday', todoListThursday);
loadTasksFromLocalStorage('friday', todoListFriday);



//ADD TODO
function addTodo(event, day, inputField, taskList) {
    event.preventDefault();

    const taskText = inputField.value.trim();
    if (taskText === "") {
        return; // Don't add empty tasks
    }

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = inputField.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    const htmlButton = document.createElement('button');
    htmlButton.innerHTML = '<i class="fa-regular fa-file-code fa-xl"></i>';
    htmlButton.classList.add('html-btn');
    todoDiv.appendChild(htmlButton);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-square-check fa-xl"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDiv.appendChild(jiraButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    taskList.appendChild(todoDiv);
    inputField.value = '';

    // Save tasks to local storage
    const existingTasks = JSON.parse(localStorage.getItem(day)) || [];
    existingTasks.push(newTodo.innerText);
    saveTasksToLocalStorage(day, existingTasks);

}

//BTN FUNCTION
function deleteCheck(e) {
    const item = e.target;
    //delete todo item
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            const todoText = todo.querySelector('.todo-item').innerText;

            // Remove task from local storage
            const day = getDayFromTodoList(todo.parentNode);
            const existingTasks = JSON.parse(localStorage.getItem(day)) || [];
            const updatedTasks = existingTasks.filter(task => task !== todoText);
            saveTasksToLocalStorage(day, updatedTasks);

            todo.remove();
        });
    }
    //CHECKMARK
    if (item.classList[0] === 'html-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("htmlDone");

        const day = getDayFromTodoList(todo.parentNode);
        const taskText = todo.querySelector('.todo-item').innerText;
        
        const htmlDoneTasks = JSON.parse(localStorage.getItem(`${day}_htmlDone`)) || [];
        
        if (todo.classList.contains('htmlDone')) {
            htmlDoneTasks.push(taskText);
        } else {
            const index = htmlDoneTasks.indexOf(taskText);
            if (index !== -1) {
                htmlDoneTasks.splice(index, 1);
            }
        }

        localStorage.setItem(`${day}_htmlDone`, JSON.stringify(htmlDoneTasks));
    }


    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("doneUp");

        const day = getDayFromTodoList(todo.parentNode);
        const taskText = todo.querySelector('.todo-item').innerText;
        
        const doneUpTasks = JSON.parse(localStorage.getItem(`${day}_doneUp`)) || [];
        
        if (todo.classList.contains('doneUp')) {
            doneUpTasks.push(taskText);
        } else {
            const index = doneUpTasks.indexOf(taskText);
            if (index !== -1) {
                doneUpTasks.splice(index, 1);
            }
        }

        localStorage.setItem(`${day}_doneUp`, JSON.stringify(doneUpTasks));
    }

    if (item.classList[0] === 'jira-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

        const day = getDayFromTodoList(todo.parentNode);
        const taskText = todo.querySelector('.todo-item').innerText;
        
        const completedTasks = JSON.parse(localStorage.getItem(`${day}_completed`)) || [];
        
        if (todo.classList.contains('completed')) {
            completedTasks.push(taskText);
        } else {
            const index = completedTasks.indexOf(taskText);
            if (index !== -1) {
                completedTasks.splice(index, 1);
            }
        }

        localStorage.setItem(`${day}_completed`, JSON.stringify(completedTasks));
    }
}
//Get Days for local storage trashBtn
function getDayFromTodoList(todoList) {
    if (todoList === todoListTuesday) {
        return 'tuesday';
    } else if (todoList === todoListWednesday) {
        return 'wednesday';
    } else if (todoList === todoListThursday) {
        return 'thursday';
    } else if (todoList === todoListFriday) {
        return 'friday';
    } else {
        return 'monday';
    }
}

//FILTER LIST ITEMS

function filterTodo(e) {
    //FILTER MONDAY
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "htmlReady":
                    if (todo.classList.contains('htmlDone') && !todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "completed":
                    if (todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted": 
                    if (!todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "assigned":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        }
    });

    //FILTER TUESDAY
    const todosTuesday = todoListTuesday.childNodes;
    todosTuesday.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "htmlReady":
                        if (todo.classList.contains('htmlDone') && !todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = "none";
                        }
                    break;
                case "completed":
                    if (todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted": 
                    if (!todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "assigned":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        }
    });

    //FILTER WEDNESDAY
    const todosWednesday = todoListWednesday.childNodes;
    todosWednesday.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "htmlReady":
                        if (todo.classList.contains('htmlDone') && !todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = "none";
                        }
                    break;
                case "completed":
                    if (todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted": 
                    if (!todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "assigned":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        }
    });

    //FILTER THURSDAY
    const todosThursday = todoListThursday.childNodes;
    todosThursday.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "htmlReady":
                        if (todo.classList.contains('htmlDone') && !todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = "none";
                        }
                    break;
                case "completed":
                    if (todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted": 
                    if (!todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "assigned":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        }
    });

    //FILTER FRIDAY
    const todosFriday = todoListFriday.childNodes;
    todosFriday.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "htmlReady":
                        if (todo.classList.contains('htmlDone') && !todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = "none";
                        }
                    break;
                case "completed":
                    if (todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted": 
                    if (!todo.classList.contains('doneUp') && !todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "assigned":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        }
    });
}


//ADDING TO LOCAL STORAGE
function saveTasksToLocalStorage(day, tasks) {
    localStorage.setItem(day, JSON.stringify(tasks));
}







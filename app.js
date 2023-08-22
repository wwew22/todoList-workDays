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

//DATE VARs
// const dateObj = new Date();
// let past4Day =  dateObj.getDate() - 4 + '/'+ (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let past3Day =  dateObj.getDate() - 3 + '/'+ (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let past2Day =  dateObj.getDate() - 2 + '/'+ (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let past1Day =  dateObj.getDate() - 1 + '/'+ (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let currentDay = dateObj.getDate() + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let next1Day = dateObj.getDate() + 1 + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let next2Day = dateObj.getDate() + 2 + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let next3Day = dateObj.getDate() + 3 + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
// let next4Day = dateObj.getDate() + 4 + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();


// const dayHeaderMonday = document.querySelector('.day1');
// const dayHeaderTuesday = document.querySelector('.day2');
// const dayHeaderWednesday = document.querySelector('.day3');
// const dayHeaderThursday = document.querySelector('.day4');
// const dayHeaderFriday = document.querySelector('.day5');

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

todoButtonTuesday.addEventListener("click", addTodoTuesday);
todoListTuesday.addEventListener("click", deleteCheck);

todoButtonWednesday.addEventListener("click", addTodoWednesday);
todoListWednesday.addEventListener("click", deleteCheck);

todoButtonThursday.addEventListener("click", addTodoThursday);
todoListThursday.addEventListener("click", deleteCheck);

todoButtonFriday.addEventListener("click", addTodoFriday);
todoListFriday.addEventListener("click", deleteCheck);

filterOptions.addEventListener("click", filterTodo);

//FUNCTIONS

// Get today's date
const today = new Date();
const currentDayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

// Calculate the dates for the upcoming days of the week
for (let i = 1; i <= 5; i++) { // Assuming you have 5 days of the week
    const dayIndex = (currentDayOfWeek + i - 1) % 7;
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i - 2);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    // Update the span element for the corresponding day
    const daySpan = document.querySelector(`.day${i}`);
    if (daySpan) {
        daySpan.textContent = formattedDate;
    }
}

//ADD TODO MONDAY
function addTodo(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //Append li element to the list div
    todoDiv.appendChild(newTodo);

    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> D / U </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //JIRA BUTTON
    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDiv.appendChild(jiraButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //CLEAR TODO INPUT VALUE
    todoInput.value = '';
}

//ADD TODO TUESDAY
function addTodoTuesday(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDivTuesday = document.createElement('div');
    todoDivTuesday.classList.add('todo');

    //Create li
    const newTodoTuesday = document.createElement('li');
    newTodoTuesday.innerText = todoInputTuesday.value;
    newTodoTuesday.classList.add('todo-item');

    //Append li element to the list div
    todoDivTuesday.appendChild(newTodoTuesday);

    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> D / U </i>';
    completedButton.classList.add('complete-btn');
    todoDivTuesday.appendChild(completedButton);

    //JIRA BUTTON
    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDivTuesday.appendChild(jiraButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDivTuesday.appendChild(trashButton);

    //APPEND TO LIST
    todoListTuesday.appendChild(todoDivTuesday);

    //CLEAR TODO INPUT VALUE
    todoInputTuesday.value = '';
}

//ADD TODO WEDNESDAY
function addTodoWednesday(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDivWednesday = document.createElement('div');
    todoDivWednesday.classList.add('todo');

    //Create li
    const newTodoWednesday = document.createElement('li');
    newTodoWednesday.innerText = todoInputWednesday.value;
    newTodoWednesday.classList.add('todo-item');

    //Append li element to the list div
    todoDivWednesday.appendChild(newTodoWednesday);

    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> D / U </i>';
    completedButton.classList.add('complete-btn');
    todoDivWednesday.appendChild(completedButton);

    //JIRA BUTTON
    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDivWednesday.appendChild(jiraButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDivWednesday.appendChild(trashButton);

    //APPEND TO LIST
    todoListWednesday.appendChild(todoDivWednesday);

    //CLEAR TODO INPUT VALUE
    todoInputWednesday.value = '';
}

//ADD TODO THURSDAY
function addTodoThursday(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDivThursday = document.createElement('div');
    todoDivThursday.classList.add('todo');

    //Create li
    const newTodoThursday = document.createElement('li');
    newTodoThursday.innerText = todoInputThursday.value;
    newTodoThursday.classList.add('todo-item');

    //Append li element to the list div
    todoDivThursday.appendChild(newTodoThursday);

    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> D / U </i>';
    completedButton.classList.add('complete-btn');
    todoDivThursday.appendChild(completedButton);

    //JIRA BUTTON
    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDivThursday.appendChild(jiraButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDivThursday.appendChild(trashButton);

    //APPEND TO LIST
    todoListThursday.appendChild(todoDivThursday);

    //CLEAR TODO INPUT VALUE
    todoInputThursday.value = '';
}

//ADD TODO FRIDAY
function addTodoFriday(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDivFriday = document.createElement('div');
    todoDivFriday.classList.add('todo');

    //Create li
    const newTodoFriday = document.createElement('li');
    newTodoFriday.innerText = todoInputFriday.value;
    newTodoFriday.classList.add('todo-item');

    //Append li element to the list div
    todoDivFriday.appendChild(newTodoFriday);

    //CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> D / U </i>';
    completedButton.classList.add('complete-btn');
    todoDivFriday.appendChild(completedButton);

    //JIRA BUTTON
    const jiraButton = document.createElement('button');
    jiraButton.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i>';
    jiraButton.classList.add('jira-btn');
    todoDivFriday.appendChild(jiraButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDivFriday.appendChild(trashButton);

    //APPEND TO LIST
    todoListFriday.appendChild(todoDivFriday);

    //CLEAR TODO INPUT VALUE
    todoInputFriday.value = '';
}


//ADD DATE TO HEADER



// function getDate() {
    
//     dayHeaderMonday.innerHTML = dayHeaderMonday.innerHTML + past1Day;
//     dayHeaderTuesday.innerHTML = dayHeaderTuesday.innerHTML + currentDay;
//     dayHeaderWednesday.innerHTML = dayHeaderWednesday.innerHTML + next1Day;
//     dayHeaderThursday.innerHTML = dayHeaderThursday.innerHTML + next2Day;
//     dayHeaderFriday.innerHTML = dayHeaderFriday.innerHTML + next3Day;
    
// }
// getDate();

//BTN FUNCTION
function deleteCheck(e) {
    const item = e.target;
    //delete todo item
    if (item.classList[0]==='trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //CHECKMARK
    if (item.classList[0]=== 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("doneUp");
    }

    //DONE AND UP
    if (item.classList[0]=== 'jira-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
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

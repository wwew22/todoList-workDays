//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

//DATE VARs
const dateObj = new Date();
let dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = dayName[new Date().getDay()];
let date =  dateObj.getDate() + '/'+ (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
const dayHeader = document.querySelector('.day');
//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodo);

//FUNCTIONS
function addTodo(event) {
    //Prevent form from submiting
    event.preventDefault();

    //Todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'jira-prd/browse/' + todoInput.value;
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

//ADD DATE TO HEADER
function getDate() {
    dayHeader.innerHTML = dayHeader.innerHTML + date;
    console.log(dayHeader.innerHTML);
    
}
getDate();


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


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        if (todo.nodeType === 1) { // Check if it's an element node
            switch(e.target.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "completed":
                    if (todo.classList.contains('completed') && !todo.classList.contains('doneUp')) {
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
                    if (todo.classList.contains('doneUp')) {
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

const todoList = [];
const todoDate = [];

function addTodo() {
    let inputElement = document.querySelector('.todo-text-input');
    let todoTask = inputElement.value.trim();

    let inputDate = document.querySelector('.todo-date-input');
    let taskDate = inputDate.value.trim();

    if (taskDate === '' || todoTask === '') {
        alert('Enter a complete detail.');
        return; 
    }

    todoDate.push(taskDate);
    todoList.push(todoTask);   
    showTodo();
    showDate();
    deleteButton();
    inputElement.value = '';
    inputDate.value = ''; 
}

function showDate() {
    let dateDisplay = document.querySelector('.date-display');
    let resultingDate = '';

    for (let i = 0; i < todoDate.length; i++) {
        resultingDate += `<div class="date-display">
        <p>${todoDate[i]}</p> </div>`;
    }   
    dateDisplay.innerHTML = resultingDate;
}

function deleteButton() {
    let createButton = document.querySelector('.addDelete');
    let buttonHTML = '';

    for (let i = 0; i < todoDate.length; i++) {
        buttonHTML += `<div class="addDelete"><button class="deleteButton" data-index="${i}">Delete</button></div>`;
    }   
    createButton.innerHTML = buttonHTML;

    let deleteButtons = document.querySelectorAll('.deleteButton');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteTodo);
    }
}

function deleteTodo(event) {
    let index = event.target.getAttribute('data-index');
    todoList.splice(index, 1);
    todoDate.splice(index, 1);
    showTodo();
    showDate();
    deleteButton();
}

function showTodo() {
    let todoDisplay = document.querySelector('.todo-display');
    let resultingHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        resultingHTML += `<div class="todo-display"><p>${todoList[i]}</p></div>`;
    }
    todoDisplay.innerHTML = resultingHTML;
    console.log(resultingHTML);

}

let buttonAction = document.querySelector('.submit-button').addEventListener('click', () => {addTodo();})
let todoObject = [];

function addTodo(){
    let taskGetter = document.querySelector('.input-text');
    let taskData = taskGetter.value;

    let dateGetter = document.querySelector('.input-date');
    let dateData = dateGetter.value;

    if(taskData === '' || dateData === ''){
        alert('Please enter the complete details.');
        return;
    }

    todoObject.push({task: taskData, date: dateData});

    displayOutput();
    dateGetter.value = '';
    taskGetter.value = '';
}

function displayOutput(){
    let resultGetter = document.querySelector('.output-division');
    let resultingHTML = '';


    todoObject.forEach(function(todoTask, index) {
        resultingHTML += `
            <div class="displayed-task"> ${todoTask.task} </div> 
            <div class="displayed-date"> ${todoTask.date} </div>
            <button class="delete-button">Delete</button>`
    })

    resultGetter.innerHTML = resultingHTML;

    let buttonListener = document.querySelectorAll('.delete-button').
    forEach((deleteButton , index)=> {
        deleteButton.addEventListener('click', () =>{
            todoObject.splice(index, 1);
            displayOutput();
        });
    })
}

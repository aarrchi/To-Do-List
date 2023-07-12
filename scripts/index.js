const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];


todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const todo = {
        id: Date.now(),
        name: todoInput.value,
        isCompleted: false
    };

    todos.push(todo);
    //console.log(todos);
    displayTodo();
    todoForm.reset();

});

const displayTodo = () => {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const list = document.createElement('li');
        list.classList.add('list-group-item', 'mb-3', 'd-flex', 'justify-content-between');
        //list.innerText = todo.name;
      


        const leftDiv = document.createElement('div');

        //to create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isCompleted;
        checkbox.classList.add('form-check-input', 'ms-2');


        checkbox.addEventListener('change', (event) => {
            event.preventDefault();
            todo.isCompleted = event.target.checked;
            displayTodo();

        });

        //to add to do list names
        const span = document.createElement('span');
        span.innerText = todo.name;
        span.classList.add('ms-2',`${todo.isCompleted ? 'text-decoration-line-through': 'none'}`);


       

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        list.appendChild(leftDiv);
        todoList.append(list);
     
    });




  

};
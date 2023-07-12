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
      
        todoList.append(list);
     
    });




  

};
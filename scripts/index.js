const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];
let todoId;


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


        const rightDiv = document.createElement('div');
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'btn-sm');
        editBtn.innerText = 'Edit';


        editBtn.setAttribute('data-bs-toggle', 'modal');
        editBtn.setAttribute('data-bs-target', '#editModal');
       
        

        editBtn.addEventListener('click', (event) => {
            event.preventDefault();
             document.getElementById('edit-todo').value = todo.name;
             todoId = todo.id;
            

        

          
        });


        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger','btn-sm', 'ms-2');
        deleteBtn.innerText = 'Delete';


        deleteBtn.addEventListener('click', (event) => {
            event.preventDefault();

           //console.log(todos);
           //console.log(todo.id);

           todos = todos.filter((t) => {
                return t.id !== todo.id;
           });

           
           displayTodo();
        });


        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        list.appendChild(leftDiv);
        rightDiv.appendChild(editBtn);
        rightDiv.appendChild(deleteBtn);
        list.appendChild(rightDiv);
        todoList.append(list);
     
    });



    const saveChange = document.getElementById('save-change');
    saveChange.addEventListener('click', (event) => {
        event.preventDefault();
        //console.log('clicked');

        const editTodo = document.getElementById('edit-todo').value;
        //console.log(editTodo);

        todos = todos.map((t) => {
            return t.id === todoId ?{
                id: t.id,
                name: editTodo,
                isCompleted: t.isCompleted
            }: t
        });

        displayTodo();
         document.getElementById('close-btn').click();
       

        


    });




  

};
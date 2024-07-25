//select doom

const todosInput = document.querySelector('.todo-input');
const todosButton = document.querySelector('.todo-button');
const todosList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todosButton.addEventListener('click', function(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const navTodo = document.createElement('li');
    navTodo.innerText = todosInput.value;

    saveLocalTodos(todosInput.value);
});

function saveLocalTodos(todo){
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}
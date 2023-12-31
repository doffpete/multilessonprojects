const form = document.getElementById('form');

const input = document.getElementById('input');

const todosUl = document.getElementById('todos');

// const todos = JSON.parse(localStorage.getItem('todos'));

// if(todosEl){
//     todosEl.forEach(todoEl => {
//         addTodos(todoEl);
//     });
// };


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodos();

});

function addTodos(){
    
    const todoText = input.value;
    
    if (todoText){
        const todoEl = document.createElement('li');

        todoEl.innerHTML = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
             updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        todosUl.appendChild(todoEl);

        input.value = '';
        
    };
    
    
    updateLS();
};


function updateLS(){
    const todosEl = document.querySelectorAll('li');

    
    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({text:todoEl.innerText, 
                 completed: todoEl.classList.contains('completed'),});
    });


    localStorage.setItem('todos', JSON.stringify(todos));
    
} 


 
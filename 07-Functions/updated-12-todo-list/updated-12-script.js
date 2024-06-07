/* Main Idea if Javascript:
   1. Save the data - something like in an array
   2. Generate the HTML - see below
   3. Make it interactive - we will see later 
*/

const todoList = [{
  name: 'make dinner',
  dueDate: '2024-05-30'
  },
  
  {
    name: 'wash dishes',
    dueDate: '2024-05-30'
  }
];  

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  // change into the arrow function
  todoList.forEach((todoObject, index) => {
    
    const { name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="deleteBtn js-delete-btn">Delete</button>
  
    `;  // generating the html with delete button
    
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn').forEach((deleteBtn, index)=>{
    deleteBtn.addEventListener('click', ()=>{
      todoList.splice(index,1);
      renderTodoList();
    });
  });
}


document.querySelector('.js-add-btn').addEventListener('click', ()=>{
  addTodo();
});

function addTodo(){
  const inputBox = document.querySelector('.js-input-box');
  const name = inputBox.value;

  const dateInput = document.querySelector('.js-date-input');
  const dueDate = dateInput.value;

  // Now it's time to add this "name's" content to the array
  todoList.push({
    // name: name,
    // dueDate: dueDate
    // if the property name and variable name is same, there is a shortcut.
    
    name,
    dueDate
  });
  
  inputBox.value = '';  
  renderTodoList();
  
}
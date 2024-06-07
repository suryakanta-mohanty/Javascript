/* Main Idea if Javascript:
   1. Save the data - something like in an array
   2. Generate the HTML - see below
   3. Make it interactive - we will see later 
*/

const todoList = ['make dinner', 'wash dishes'];  

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0 ; i < todoList.length ; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;  // generating the html
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
  const inputBox = document.querySelector('.js-input-box');
  const name = inputBox.value;

  // Now it's time to add this "name's" content to the array
  todoList.push(name);
  console.log(todoList);  
  inputBox.value = '';  
  renderTodoList();
  
}
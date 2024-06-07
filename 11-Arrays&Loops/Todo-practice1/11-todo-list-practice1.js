/* Steps (Algorithms)
   1. Create array to store todos
   2. When we click "Add",
   3. Get Text from TextBox
   4. Add it to array 
   5. console.log() the array
*/

const todoList = [];  // it called an empty array.

function addTodo(){
  const inputBox = document.querySelector('.js-input-box');
  const name = inputBox.value;

  // Now it's time to add this "name's" content to the array
  todoList.push(name);
  console.log(todoList);  // ['name'] - it's just a example
  
  inputBox.value = '';  // it will reset the text in the textBox
  
}
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// when button is clicked form is created to ask what to do// when button is clicked form is created to ask what to do.

function newTodo() {
  const todo = prompt('Add an item or task')

  //if field is empty prompt to enter again
  if (todo.length === 0) {
  const missingField = prompt("please enter a todo item")
   console.log(22)
   addTodo(missingField)
  }

  else if (todo != null) {
      addTodo(todo)}
    }


function addTodo(todo) {
  // Create list item
     
     

  const li = document.createElement('li');

   // Create text inside list item
   const div = document.createElement('div');
   div.textContent = todo;
   li.appendChild(div);

  
   //set counter
  itemCount += 1;
  uncheckedCount += 1;

  // Create checkbox inside list item
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.addEventListener('click', (event) => {
    if (event.target.checked) {
      uncheckedCount -= 1;
      event.target.parentElement.childNodes[1].setAttribute('class', 'isChecked');
    }
    else {
      uncheckedCount += 1;
      event.target.parentElement.childNodes[1].setAttribute('class', '');
    }
    counterDisplay();
  });
  li.appendChild(input);

 //create a delete button
  const button = document.createElement('button');
  button.setAttribute('title', 'delete');
  button.textContent = 'delete';
  button.addEventListener('click', () => {
    // delete button callback
    const deleteTodo = confirm('Delete this item?')
    if (deleteTodo) {
      if (!li.childNodes[0].checked) {
        //create a checkbox that will increment or decrement counter
        uncheckedCount -= 1;
      }
      li.parentNode.removeChild(li);
      itemCount -= 1;
      counterDisplay();
    }
  });
  li.appendChild(button);

  // Append list item to list
  list.appendChild(li);
  counterDisplay();
}

let itemCount = 0;
let uncheckedCount = 0;

function counterDisplay() {
  uncheckedCountSpan.innerHTML = uncheckedCount;
  itemCountSpan.innerHTML = itemCount;
}



// The `classNames` variable can be used to link
// any elements you create in js with the associated CSS class names. The next 3
// lines of code are the HTML elements that you'll need to update when creating new
// TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
// creating a new TODO. You should replace the `alert()` call with logic to create
// new TODOs.
// your code here

const submitForm = document.querySelector('#create-task-form')
let priority = 0

submitForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const textField = e.target.querySelector('#new-task-description')
  const inputTask = textField.value

  let li = document.createElement('li')
  li.innerText = inputTask
  li.appendChild(makeDeleteButton(li))
  setPriority(li)

  const todoList = document.querySelector('#list')
  todoList.appendChild(li)

  textField.value = ''
})

function makeDeleteButton(listItem) {

  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Delete Task'

  deleteButton.addEventListener('click', () => listItem.parentElement.removeChild(listItem))

  return deleteButton
}

const priorityDropDown = document.querySelector('select')
priorityDropDown.addEventListener('change', (e) => {
  priority = e.target.selectedIndex
  console.log(priority)
})

function setPriority(listItem) {
  let color = ''

  switch(priority) {
    case 0:
      listItem.classList.add('high-priority')
      break;
    case 1:
      listItem.classList.add('medium-priority')
      break;
    case 2:
      listItem.classList.add('low-priority')
  }
}
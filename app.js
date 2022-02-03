const input = document.getElementById('input1')
const but = document.getElementById('submit-button')
const titleElement = document.getElementById('todo-list')

but.addEventListener('click', function(button){
  console.log(but)
  //create a new element li
  const newLi = document.createElement('li')
  // input    ntered into newLi
  const inp = document.querySelector('input')
  //assign text to newLi
  newLi.textContent = inp.value
  //reset to empty field
  inp.value = ""
  //add li elements to page ul element
  document.querySelector('ul').appendChild(newLi)


})


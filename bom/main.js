const input = document.getElementById("favchap");
const addChapter = document.querySelector("button");
const list = document.querySelector("ul");

addChapter.addEventListener('click', () => {
  if (input.value != '') {
    //create an li element
    let listItem = document.createElement("li")
    //create a delete button
    let deleteButton = document.createElement("button")
    //populate the li elements textContent or innerHTML with the input
    listItem.textContent = input.value
    //populate the button textContent with an x
    deleteButton.textContent = "X"
    //append the li element with the delete button
    listItem.appendChild(deleteButton)
    //append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);
    
    //add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
      list.removeChild(listItem)
    })
    //send the focus to the input element
    input.focus();
    //clean up the successful add of a chapter 
    //by changing the input to nothing or the empty string and setting the focus to the input.
    input.value = ''
  }
});
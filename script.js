// Array to store shopping list items
let items = [];

// Function to add item to the list
function addItem() {
  const newItem = document.getElementById("item").value.trim();
  if (newItem !== "") {
    items.push(newItem);
    renderList();
    document.getElementById("item").value = "";
  }
}

// Function to delete item from the list
function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}

// Function to render the list
function renderList() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteItem(index);
    
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
  });
}

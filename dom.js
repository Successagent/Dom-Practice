let form = document.getElementById("form");
let itemList = document.getElementById("item-con");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeListItem)
function addItem(e) {
    e.preventDefault();
    let input = document.getElementById("input");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    itemList.appendChild(li);
    let button = document.createElement("button");
    button.className = "btn";
    button.id = "btn"
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
}


function removeListItem(e) {
    if (e.target.classList.contains("btn"))
        if (confirm("Are you sure?")) {
            let list = document.getElementById("btn").parentElement
            itemList.removeChild(list);
        }
}
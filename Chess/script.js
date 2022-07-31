function drag(event){
    event.dataTransfer.setData("data", event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function moveItem(event){
    event.preventDefault();
    var itemId = event.dataTransfer.getData("data");
    const element = document.getElementById(itemId);
    event.target.appendChild(element);
}
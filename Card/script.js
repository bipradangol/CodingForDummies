function add() {
    var card = document.getElementById("card");
    var anotherCard = card.cloneNode(true);
    anotherCard.style.display = "inline-block"

    var name = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var gender = document.getElementById("gender").value;
    anotherCard.getElementsByTagName("h4")[0].textContent = name;
    anotherCard.getElementsByTagName("p")[0].textContent = position;

    if (gender === "M") {
        anotherCard.getElementsByTagName("img")[0].src = "img/person.png";
    } else if (gender === "F"){
        anotherCard.getElementsByTagName("img")[0].src = "img/girl.jpg";
    }
    document.getElementById("content").appendChild(anotherCard);

}

// function remove(){
//     const element = document.getElementById("card");
//     element.remove();
// }

function drag(event){
    var targetId = new Date().getMilliseconds();
    if (event.target instanceof HTMLImageElement) {
        event.target.parentNode.id = targetId;
    } else {
        event.target.id = targetId;
    }
    event.dataTransfer.setData("itemId", targetId);
}

function allowDrop(event){
    event.preventDefault();
}

function deleteItem(event){
    event.preventDefault();
    var itemId = event.dataTransfer.getData("itemId");
    const element = document.getElementById(itemId);
    element.remove();
}


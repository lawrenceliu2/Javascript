//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newItem = document.createElement("li");
    newItem.innerHTML = text;
    newItem.addEventListener("mouseover", head);
    newItem.addEventListener("mouseout", helloWorld);
    newItem.addEventListener("click", deleteCallback);
    list.appendChild(newItem);
};

var buttonAdd = function(k) {
    addItem("item " + document.getElementsByTagName("li").length);
};

var b = document.getElementById("b");

b.addEventListener("click", buttonAdd);


var deleteCallback = function(e) {
    this.remove()
};

var items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", deleteCallback);
}


var head = function (z) {
    console.log();
    document.getElementById("h").innerHTML = this.innerHTML;
};

var helloWorld = function (q) {
    document.getElementById("h").innerHTML="Hello World!";
};

var items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", head);
    items[i].addEventListener("mouseout", helloWorld);
}


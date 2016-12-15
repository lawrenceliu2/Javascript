//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
    console.log("remove items");
};

var items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", deleteCallback);
}

var b = document.getElementById("b");

var deleteCallback = function(e) {
    console.log(this);
    this.remove()
};

var buttonAdd = function(k) {
    console.log(this);
    addItem("item " + document.getElementsByTagName("li").length);
};

b.addEventListener("click", buttonAdd);

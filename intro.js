//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
};

var buttonAdd = function(k) {
    addItem("item " + document.getElementsByTagName("li").length);
};

var b = document.getElementById("b");

b.addEventListener("click", buttonAdd);

var deleteCallback = function(e) {
    this.remove()
};

var removeStuff = function (x) {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", deleteCallback);
    }
};

b.addEventListener("click", removeStuff);


var head = function (z) {
    console.log();
    document.getElementById("h").innerHTML = "lol idk what goes here";
};

var showHead = function (y) {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].addEventListener("mouseover", head);
    }
};

b.addEventListener("mouseover", showHead);

var helloWorld = function (q) {
    document.getElementById("h").innerHTML="Hello World!";
};

b.addEventListener("mouseout", helloWorld);

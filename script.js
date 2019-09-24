
function CountInput(str) {
	var lng = document.getElementById("inputName").value.length;
	document.getElementById("char_count_input").innerHTML = lng;
}
function CountTextArea(str) {
	var lng = document.getElementById("inputDetils").value.length;
	document.getElementById("char_count_area").innerHTML = lng + ' out of 400 characters';
}
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var div = document.createElement("div");
  var txt = document.createTextNode("\u00D7");
  div.className = "close";
  div.appendChild(txt);
  myNodelist[i].appendChild(div);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var h4 = document.createElement("h4");
  var p = document.createElement("p");

  var inputName = document.getElementById("inputName").value;
  var inputDetils = document.getElementById("inputDetils").value;

  var name = document.createTextNode(inputName);
  var details=document.createTextNode(inputDetils);

///li.innerhtml(<h1>hshahhsh</h1>)
h4.appendChild(name)
p.appendChild(details);
li.className = "list";
li.append(document.getElementById("myUl").appendChild(h4));
li.append(document.getElementById("myUl").appendChild(p));
document.getElementById("myUl").appendChild(li);

document.getElementById("inputName").value = "";
document.getElementById("inputDetils").value = "";


var div = document.createElement("div");
var txt = document.createTextNode("\u00D7");
div.className = "close";
div.appendChild(txt);
li.appendChild(div);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

}

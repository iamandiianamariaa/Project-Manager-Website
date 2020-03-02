  document.getElementById("content").style.fontFamily= "Alegreya";

  document.getElementById("image").addEventListener("click", function(){
  var elem = document.getElementById("image"); 
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("width"); 
  document.getElementById("content").innerHTML = theCSSprop; 
},true);

  var myWindow;

function openWin() {
  myWindow = window.open("/", "_blank", "width=500, height=500");
}

function closeWin() {
  myWindow.close();
}

function myFunction(event) { 
  alert(event.target.nodeName);
  var x = event.pageX;
  var y = event.pageY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}

function myFunction1(event) {
  var x = event.key;
  alert("The pressed key was: " + x);
}

var myVar = setInterval(myTimer, 1000,1,2,3);

function myTimer(a,b,c) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo1").innerHTML = t;
  console.log(a+b+c);
}

function myStopFunction() {
  clearInterval(myVar);
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainArticle").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "proiectJS-1.txt", true);
  xhttp.send();
}
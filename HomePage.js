// Collapse

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
	console.log("testing");
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// Login

function login()
{
  var username = document.getElementById("un").value;
  var password = document.getElementById("pass").value;
  if((username==("Akshata") && password=="2020"))
  {
    return true;
    console.log(true)
  }
  else{
    document.getElementById("err").innerHTML= "Invalid UserName / Password"
    return false
  }
}


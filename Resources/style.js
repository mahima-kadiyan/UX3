function myFunction() {
    var x = document.getElementById("myDIV");
    var y= document.getElementById("myDiv2");
   // if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="none";
   // } else {
  }
  function myFun2(){
    var x = document.getElementById("myDIV");
    var y= document.getElementById("myDiv2");
   // if (y.style.display === "none") {
    x.style.display = "none";
      y.style.display="block";
  }
  var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".icon")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)
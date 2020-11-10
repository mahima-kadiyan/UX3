function tableView(){
    var x = document.getElementById("card1");
    var y= document.getElementById("card2");
    var z=document.getElementById("table");
   // if (x.style.display === "none") {
      x.style.display = "none";
      y.style.display="none";
      z.style.display="block";

   // } else {
  }
  function cardView(){
    var x = document.getElementById("card1");
    var y= document.getElementById("card2");
    var z=document.getElementById("table");
   // if (y.style.display === "none") {
    x.style.display = "block";
      y.style.display="block";
      z.style.display="block";

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
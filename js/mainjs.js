

let tog = document.querySelector(".tog");
let nav = document.querySelector(".nav");

tog.onclick = function () {
  this.classList.toggle("open");
  nav.classList.toggle("mob");
};

let upp = document.querySelector(".top");

window.onscroll = function () {
  this.scrollY >=1000 
    ?upp.classList.add("show")
    :upp.classList.remove("show")
};

upp.onclick = function () {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

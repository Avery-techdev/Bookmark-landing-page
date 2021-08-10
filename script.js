function openNav() {
  document.getElementById("open").style.display = "none";
  document.getElementById("logo").style.visibility = "hidden";
  document.getElementById("nav").style.width = "100%";
}
function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("open").style.display = "block";
  document.getElementById("logo").style.visibility = "visible";
}

function switchContentSimple() {
  document.getElementById("btn-simple").style.color = "black";
  document.getElementById("under-Bookmarking").style.display = "block";
}

function switchContentSpeedy() {
  document.getElementById("btn-speedy").style.color = "black";
  document.getElementById("under-Bookmarking").style.display = "block";
}

function switchContentEasy() {
  document.getElementById("btn-easy").style.color = "black";
  document.getElementById("under-Bookmarking").style.display = "block";
}

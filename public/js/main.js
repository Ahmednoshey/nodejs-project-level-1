if (localStorage.getItem("isSmall") === "yes") {
  sidebarId.classList.add("small-sidebar");
} else {
  sidebarId.classList.remove("small-sidebar");
}

const toggleSidebar = () => {

  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    sidebarId.classList.remove("small-sidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    sidebarId.classList.add("small-sidebar");
  }
};

let imgbank = document.getElementById('imgbank');
let lightmood = document.getElementById('lightmood');
let darkmood = document.getElementById('darkmood');
let automood = document.getElementById('automood');
let myTable = document.getElementById('myTable');

lightmood.onclick = function(){
  imgbank.src = "../img/1.jpg"
  myTable.classList.remove("dark");
}

darkmood.onclick = function(){
  imgbank.src = "../img/1.png"
  myTable.classList.add("dark");
}
automood.onclick = function(){
  imgbank.src = "../img/1.png"
  myTable.classList.add("dark");
}




function changeimg(element){
  imgbank.src = "../img/" + element.value + ".png" ;
}

function getdates(){
  document.getElementById("SearchBranch").value = document.getElementById("searchbtn").value
}

$('#myTable').DataTable();
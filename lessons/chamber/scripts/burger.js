function toggleMenu(){
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("burgerbutton").classList.toggle("open");
}
const x = document.getElementById('burgerbutton')
x.onclick = toggleMenu;
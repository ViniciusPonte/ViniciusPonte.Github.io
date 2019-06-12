
document.getElementById("p1").addEventListener("click", mostrar1);
document.getElementById("p2").addEventListener("click", mostrar2);
document.getElementById("p3").addEventListener("click", mostrar3);
document.getElementById("p4").addEventListener("click", mostrar4);
document.getElementById("p5").addEventListener("click", mostrar5);

function mostrar1(){
    document.getElementById("r1").classList.toggle("active");
}
function mostrar2(){
    document.getElementById("r2").classList.toggle("active");
}
function mostrar3(){
    document.getElementById("r3").classList.toggle("active");
}
function mostrar4(){
    document.getElementById("r4").classList.toggle("active");
}
function mostrar5(){
    document.getElementById("r5").classList.toggle("active");
}
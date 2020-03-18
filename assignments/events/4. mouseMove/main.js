var ul=document.querySelector("ul");
var p1=document.createElement("p");
var p2=document.createElement("p");
var p3=document.createElement("p");
var p4=document.createElement("p");
ul.append(p1,p2,p3,p4)

document.addEventListener("mousemove",function(e){
    p1.textContent=e.screenX;
    p2.textContent=e.screenY;
    p3.textContent=e.clientX;
    p4.textContent=e.clientY;

})
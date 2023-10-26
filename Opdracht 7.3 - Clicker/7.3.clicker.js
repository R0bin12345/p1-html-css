let getal=0;
let getall=document.getElementById("Waarde");

 function Toenemendewaarde(){
 if (getal >=10) {
    getal=0;
 }
 else{
    getal++;
 }
 getall.innerHTML= getal.toString();
 }
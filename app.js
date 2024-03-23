// DOM -> document : html deer bga buh code
console.log(document);
var h1 =document.getElementsByTagName('h1')[0];
console.log(h1);
// variableNema.style.styleName="green";
h1.style.color="red";
var h2=document.getElementsByTagName('h1')[1];
h2.style.color="green";
// 1. func zARLNA
function changeColor(){
var h3=document.getElementsByTagName('h2')[0];
    h3.style.color="yellow"
    h3.innerText="Sainuu";
}
// variabName.innerText="solih ugee bichne"

function changeColor(){
var h4=document.getElementsByTagName('h1')[0];
h2.style.color="blue"
h2.innerText="Hi";
h4.style.color="brown"
h4.innerText="What s up";
}
var input = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
function findAge(){
    var inputAge=input.value;
    if(inputAge>0 && inputAge<130){
        p.innerText="Nasand hursen bna"
        p.style.color="blue"
    }else{  p.innerText="Ta toroogui bn"
    p.style.color="brown"           
    }      
}



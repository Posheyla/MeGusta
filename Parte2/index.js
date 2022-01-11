var cuenta=[9,12,9];
var numlikes = [document.querySelector("#likes1"),document.querySelector("#likes2"),document.querySelector("#likes3")];

function sube1(){
    cuenta[0]++;
    numlikes[0].innerText = cuenta[0];
}
function sube2(){
    cuenta[1]++;
    numlikes[1].innerText = cuenta[1];
}
function sube3(){
    cuenta[2]++;
    numlikes[2].innerText = cuenta[2];
}
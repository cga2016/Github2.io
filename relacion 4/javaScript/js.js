let btnhtml = document.getElementById('btnHTML');
let btnjs = document.getElementById('btnJS');
let i = 1;
let pic = "";



function launchMessageJS(){
    if(btnjs.value == "JS"){
        alert("Mensaje através de llamada js");
      }
}
function launchMessageHTML(){
    
    if  (i == 1){          
    document.getElementById("texto1").innerHTML = "China quiero esos dos bollos de carne que me traes"
    i--;
    }else{
        document.getElementById("texto1").innerHTML = ""
        i++;
    }
    }
    let N = 1;
    function sevi(){
 
var pic;
if (N == 0){
  pic = "image/t.png"
  N++;
}else{
  pic = "image/sevi.jpg"
  N--;
}
document.getElementById('imagen').src = pic;
    }
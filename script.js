/*function Cal(){
var Billamt=document.getElementById("billamt").value;
var tippec=document.getElementById("serviceQual").value;
var peole=document.getElementById("peopleamt").value;
if(peole.length!=0){
  var tips=(Billamt*tippec)/peole;
  document.getElementById("tip").innerHTML=tips+ " Each";
}else{
  var tips=(Billamt*tippec);
  document.getElementById("tip").innerHTML=tips;
}

}*/

function Cal(){
var tippec=document.getElementById("serviceQual").value;
var peole=document.getElementById("peopleamt").value;
var Billamt=document.getElementById("billamt").value;
if(Billamt == "" ||Billamt== null){
    alert("Please Enter Bill Amount");
}
    if(peole.length!=0){
        var tips=(Billamt*tippec)/peole;
        document.getElementById("tip").innerHTML=tips.toFixed (2) + "Each";
    }else{
        var tips=(Billamt*tippec);
        document.getElementById("tip").innerHTML=tips.toFixed (2);
    }



}
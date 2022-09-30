window.onload = function(){

const calbtn=document.getElementById("calci");
calbtn.addEventListener("click",calculate);

function calculate(e){

var amount,interest,year,year1=2022;

amount = f1.amt.value;
interest = f1.slider.value;
year = parseInt(f1.year.value);
result=(amount*interest*year)/100;
period=year+year1;

const span=document.getElementsByClassName("sp");
const abfoot=document.getElementById("paragraph");
const input=document.getElementById("amt");
let arr=[amount,interest,result,period];

if( amount=="")
{
  alert("Enter the amount");
  input.focus();
}
else if( amount<=0){
  alert("Enter a positive number");
  input.focus();
}
else
{
  abfoot.style.display="block";
  
  for(i=0;i<arr.length;i++){  span[i].innerHTML=arr[i]; }
  
}
e.preventDefault();
}

}




































// setInterval(pqr,10000);



    //const node = document.getElementById("foot"); node.innerHTML=text;
    // em.childNodes.innerHTML=text;




  //*************for appending child */  
    // var para=document.createElement("p");
    // const p1= document.createTextNode(`Amount is ${a} interest is ${b}
    //  time is ${c}`);

    // para.appendChild(p1);

    // var foot = document.getElementById("foot");
    // foot.appendChild(para);








    //***************for replacing ******************/
    // const foot1 = document.getElementById("foot");
    // var node = document.getElementById("p1");
    // foot1.replaceChild(p,node);
   

























// var span=document.getElementById("demo");
  // var slider=document.getElementById("slider");


  // var sli = parseFloat(slider.value)+"%";
  // span.innerHTML=sli;
  
  // slider.oninput=function(){
  //   span.innerHTML=this.value+"%";
  // }
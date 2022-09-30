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
  alert("Enter a positive number");
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

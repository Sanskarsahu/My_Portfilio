
function validate(){   
    var input=document.getElementById("input").value;
    if (isNaN(input)){  
      document.getElementById("numloc").innerHTML="Enter Numeric value only";  
      return false;  
    }else{  
      return true;  
      }  
    }  
function cToF(input) 
{
  var cTemp = input;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cToFahr + ' \xB0F.';
    return(message);
}

function fToC(input) 
{
  var fTemp = input;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fToCel + '\xB0C.';
    return(message);
}
function convert()
{
    var input=document.getElementById("input").value;
    var o =document.getElementById("output");
    var u =document.getElementById("unit").value;
    var v =document.getElementById("unit2").value;
 if (u==v)
 {
  o.value =input;
 }
 else if (u=="celsius" && v=="fahrenheit"){
  o.value= cToF(input);
 }
 else if (v=="celsius" && u=="fahrenheit"){
    o.value= fToC(input);
   }
}
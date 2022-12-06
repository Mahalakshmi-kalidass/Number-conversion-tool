function _(selector){
  return document.getElementById(selector);
}
const decimal = _("deci");
const hexa = _("hex");
const octal = _("oct");
const binary = _("bin");

function convert(ele){
  console.log(ele);
  //if the input is decimal
  if(ele.id ==="deci"){
    if(isNaN(ele.value)){
      showError("decerror");
    }
    else{
    decimalToBinary();
    decimalToOctal();
    decimalToHexa();
    }
  }
  //if the input is hexa decimal
  else if(ele.id==="hex"){
    if(!isHexa(ele)){
      showError("hexerror");
    }
    else{
     hexaToDecimal();
     decimalToBinary();
     decimalToOctal();
    }
  }
  //if the input is octal
  else if(ele.id==="oct"){
    if(!isOctal(ele)){
      showError("octerror");
    }
     else if(isNaN(ele.value)){
      showError("octerror")
    }
    else{
      console.log("cal");
     octalToDecimal();
     decimalToBinary();
     decimalToHexa();
    }
  }
  //if the input is binary
  else if(ele.id==="bin"){
    if(!isBin(ele)){
       showError("binerror");
    }
    else if(isNaN(ele.value)){
      showError("binerror")
    }
    else{
      console.log("calledc");
      binaryToDecimal();
      decimalToHexa();
      decimalToOctal();
    } 
     }
}
//checking for binary or not
function isBin(id){
  let val = id.value;
  let char = val.split("");
  console.log(char)
  for (let i =0;i<char.length;i++){
   if(char[i] > 1){
     return false;
   }
  }
  return true  
}
//checking for octal
function isOctal(id){
  let val = id.value;
  let char = val.split("");
  console.log(char)
  for (let i =0;i<char.length;i++){
   if(char[i] > 7){
     return false;
   }
  }
  return true
}
//checking for hexa
function isHexa(id){
  let val = id.value;
  let char = val.split("");
  console.log(char)
  for (let i =0;i<char.length;i++){
   if(char[i] > "f"){
     console.log("alpha");
     return false;
   }
  }
  return true
}
//converting decimal to binary 
function decimalToBinary(){
  let dec = decimal.value;
  let bin = "";
  while(dec>=1){
    bin+=dec%2;
    dec=parseInt(dec/2);
  }
  bin = reverse(bin);
  binary.value = bin;
}
function reverse(str){
  let reverse ="";
for(let i=str.length-1;i>=0;i--){
  reverse +=str[i];
}
return reverse;
} 
//converting binary to decimal
function binaryToDecimal(){
  let bin = binary.value;
  let dec = 0;
  j = 0;
  for(let i = bin.length-1;i>=0;i--){
    dec+=bin[i]*Math.pow(2,j);
    j++;
  }
  decimal.value = dec;
}
//converting decimal to octal
function decimalToOctal(){
  let dec = decimal.value;
  let oct = ""
  while(dec>=1){
    oct+=dec%8;
    console.log(oct)
    dec=parseInt(dec/8);
  }
  oct = reverse(oct);
  console.log(oct);
  octal.value = oct;
}
//converting decimal to hexadecimal
function decimalToHexa(){
    let dec = decimal.value;
  let hex = "";
  while(dec>=1){
    //hex +=dec%16;
    if(dec%16==10){
       hex+="A";
    }
    else if(dec%16==11){
      hex+="B";
    }
    else if(dec%16==12){
      hex+="C";
    }
    else if(dec%16==13){
      hex+="D";
    }
    else if(dec%16==14){
      hex+="E";
    }
    else if(dec%16==15){
      hex+="F";
    }
    else{
      hex+=dec%16;
    }

    console.log(hex)
    dec=parseInt(dec/16);
  }
  hex = reverse(hex);
  console.log(hex);
  hexa.value = hex;
}
//converting hexa decimal to decimal
function hexaToDecimal(){
  let hex = hexa.value;
  hex = hex.toString(16);
  console.log(hex);
  hex = parseInt(hex,16);
  console.log(hex);
  // for(let i = hex.length-1;i>=0;i--){
  //  dec+=hex[i]*Math.pow(16,j);
  //  console.log(dec);
  //   j++;
  // }
  decimal.value = hex;
}
//converting octal to decimal
function octalToDecimal(){
  let oct = octal.value;
  let dec="";
   j = 0;
  for(let i = oct.length-1;i>=0;i--){
    dec+=oct[i]*Math.pow(8,j);
    j++;
  }
  decimal.value = dec;
}
//if the input is NaN  disabling the text box and showing error 
function showError(ele){
  console.log("am");
      decimal.disabled=true;
      binary.disabled=true;
      octal.disabled=true;
      hexa.disabled=true;      
      //ele.style.backgroundColor="tomato";
      _(ele).style.visibility = "visible";     
}
//on reset setting box to normal condition
function setting(){
      decimal.disabled=false;
      binary.disabled=false;
      octal.disabled=false;
      hexa.disabled=false;      
      //.style.backgroundColor="white";
      _("decerror").style.visibility = "hidden" ;
      _("octerror").style.visibility = "hidden"; 
      _("hexerror").style.visibility = "hidden";  
      _("binerror").style.visibility = "hidden";  
}

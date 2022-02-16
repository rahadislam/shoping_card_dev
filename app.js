function update(product,iccres,price){
  debugger
  const inputFild=document.getElementById(product+'_input');
  let inputValue=parseInt(inputFild.value);
  if(iccres==true){
    inputValue=inputValue+1;
  }
  else if(inputValue >0){
   inputValue=inputValue-1;
  }
  inputValue=inputValue;
  
  inputFild.value=inputValue;

  // calculte value 
  const totalfild=document.getElementById(product+'_price');
  const total=inputValue*price;
  totalfild.innerText=total;

  totalCalculate()

}
//final calculet 
function getInputValue(product){
  const inputFild=document.getElementById(product+'_input');
  let inputValue=parseInt(inputFild.value);
  return inputValue;
  
};

function totalCalculate(){
  debugger
  const totalPhone=getInputValue('phone')*1219;
  const totalcasing=getInputValue('casing')*59;
  const subtotall=totalPhone+totalcasing;
  const tax=subtotall/10;
  const inTotal=subtotall+tax;

  document.getElementById('Subtotal').innerText=subtotall;
  document.getElementById('total-tax').innerText=tax;
  document.getElementById('total-tax-value').innerText=inTotal;
  

}

//handle phone product 
document.getElementById('phone_plus').addEventListener('click',function(){

  update('phone',true,1219);

});
document.getElementById('phone_minus').addEventListener('click',function(){
  update('phone',false,1219);

});
document.getElementById('casing_plus').addEventListener('click',function(){

  update('casing',true,59);

});
document.getElementById('casing_minus').addEventListener('click',function(){
  update('casing',false,59);

});


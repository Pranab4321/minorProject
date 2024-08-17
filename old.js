function myFunction(){
    let num = parseFloat(document.querySelector("#invest").value);//total =11200
    const x = parseFloat(document.querySelector("#days").value);
      for(let i = 0; i<x; i++){
        const per = document.querySelector("#per").value;
    const a = num*(per/100);// 7% of total = 784
    const b = num-a;// 11200 - 784 = 10416
    const c = a+(a*(80/100)) // 784 + 627.2 = 1411.2
    num = b+c; //11827.2

    document.querySelector(".print").innerHTML= a;
    document.querySelector(".printT").innerHTML= "Total : "+num;
   }    
}

function myFun(){
    var number1 = parseFloat(document.querySelector("#entrNum1").value);
    var number2 = parseFloat(document.querySelector("#entrNum2").value);
    var operator = document.getElementById("operator").value;
    var result;
    if(operator === "add"){
      result= number1 + number2;
    }else if(operator === "subtract"){
      result= number1 - number2;
    }else if(operator === "multiply"){
      result= number1 * number2;
    }else if(operator === "devide"){
      if(number2 !== 0){
        result= number1 / number2;
      }else{
        result='Error : Division By Zero';
      }
    }else if(operator === "percentage"){
      result= number1 * (number2/100);
    }else{
      result= 'Invalid operator selected';
    }
   
    document.querySelector("#output").innerHTML = result;
  
}
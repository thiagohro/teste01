function testAlert(prod,percent){
    icms = (prod*percent)/100
    return icms+prod;
}


console.log(testAlert(1500,5));

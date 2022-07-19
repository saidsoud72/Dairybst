function inputs(){
    event.preventDefault();
    var input1 = parseInt(document.getElementById("tx1").value);
    // console.log(input1);
    var input2 = parseInt(document.getElementById("tx2").value);
    // console.log(input2);
    var input3 = parseInt(document.getElementById("tx3").value);
    // console.log(input3);
    var input4 = parseInt(document.getElementById("tx4").value);
    // console.log(input4);

    var sum = input1 + input2 + input3 + input4;


    document.getElementById("p1").innerHTML +="<p>The daily production in shed  A is " + input1 + " " + "liters per day</p>"
    document.getElementById("p1").innerHTML +="<p>The daily production in shed  B is " + input2 + " " + "liters per day</p>"
    document.getElementById("p1").innerHTML +="<p>The daily production in shed  C is " + input3 + " " + "liters per day</p>"
    document.getElementById("p1").innerHTML +="<p>The daily production in shed  D is " + input4 + " " + "liters per day</p>"
    document.getElementById("p1").innerHTML +="<p>The total daily production is " + sum + " " + "liters per day</p>"
}


function incomeOverTime(){

    event.preventDefault();
    var input1 = parseInt(document.getElementById("tx1").value);
    // console.log(input1);
    var input2 = parseInt(document.getElementById("tx2").value);
    // console.log(input2);
    var input3 = parseInt(document.getElementById("tx3").value);
    // console.log(input3);
    var input4 = parseInt(document.getElementById("tx4").value);
    // console.log(input4);

    var sum = input1 + input2 + input3 + input4;
    var dailyIncome = 45*sum;
    var weeklyIncome = dailyIncome*7;
    var yearlyIncome = dailyIncome*365;

    document.getElementById("p1").innerHTML +="<p>Your weekly income will be ksh " + weeklyIncome + "</p>"; 
    document.getElementById("p1").innerHTML +="<p>Your yearly income will be ksh " + yearlyIncome+ "</p>";
}


function monthly(){
    event.preventDefault();
    var input1 = parseInt(document.getElementById("tx1").value);
    // console.log(input1);
    var input2 = parseInt(document.getElementById("tx2").value);
    // console.log(input2);
    var input3 = parseInt(document.getElementById("tx3").value);
    // console.log(input3);
    var input4 = parseInt(document.getElementById("tx4").value);
    // console.log(input4);

    var sum = input1 + input2 + input3 + input4;
    var dailyIncome = 45*sum;
    var janIncome = dailyIncome*31;
    var febIncome = dailyIncome*29;
    var marIncome = dailyIncome*31;
    var aprlIncome = dailyIncome*30;
    var mayIncome = dailyIncome*31;
    var junIncome = dailyIncome*30;
    var julIncome = dailyIncome*31;
    var augIncome = dailyIncome*31;
    var sepIncome = dailyIncome*30;
    var octIncome = dailyIncome*31;
    var novIncome = dailyIncome*30;
    var decIncome = dailyIncome*31;


    document.getElementById("p1").innerHTML +="<p>Your income for January is ksh" +" "+ janIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for February is ksh" +" "+ febIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for March is ksh" +" "+ marIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for April is ksh" +" "+ aprlIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for May is ksh" +" "+ mayIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for June is ksh" +" "+ junIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for July is ksh" +" "+ julIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for August is ksh" +" "+ augIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for September is ksh" +" "+ sepIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for October is ksh" +" "+ octIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for November is ksh" +" "+ novIncome + "</p>"
    document.getElementById("p1").innerHTML +="<p>Your income for December is ksh" +" "+ decIncome + "</p>"
}

    



function monthlyDiff(){
    event.preventDefault();
    var input1 = parseInt(document.getElementById("tx1").value);
    // console.log(input1);
    var input2 = parseInt(document.getElementById("tx2").value);
    // console.log(input2);
    var input3 = parseInt(document.getElementById("tx3").value);
    // console.log(input3);
    var input4 = parseInt(document.getElementById("tx4").value);
    // console.log(input4);

    var sum = input1 + input2 + input3 + input4;
    var dailyIncomeAdd = sum*49.60;
    var janIncomeAdd = dailyIncomeAdd*31;
    var febIncomeAdd = dailyIncomeAdd*29;
    var marIncomeAdd = dailyIncomeAdd*31;
    var aprlIncomeAdd = dailyIncomeAdd*30;
    var mayIncomeAdd = dailyIncomeAdd*31;
    var junIncomeAdd = dailyIncomeAdd*30;
    var julIncomeAdd = dailyIncomeAdd*31;
    var augIncomeAdd = dailyIncomeAdd*31;
    var sepIncomeAdd = dailyIncomeAdd*30;
    var octIncomeAdd = dailyIncomeAdd*31;
    var novIncomeAdd = dailyIncomeAdd*30;
    var decIncomeAdd = dailyIncomeAdd*31;
    var dailyIncome = 45*sum;
    var janIncome = dailyIncome*31;
    var febIncome = dailyIncome*29;
    var marIncome = dailyIncome*31;
    var aprlIncome = dailyIncome*30;
    var mayIncome = dailyIncome*31;
    var junIncome = dailyIncome*30;
    var julIncome = dailyIncome*31;
    var augIncome = dailyIncome*31;
    var sepIncome = dailyIncome*30;
    var octIncome = dailyIncome*31;
    var novIncome = dailyIncome*30;
    var decIncome = dailyIncome*31;

    document.getElementById("p1").innerHTML +="<p>Your income for January is ksh" +" "+  Math.floor(janIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((janIncomeAdd-janIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for February is  ksh" +" "+  Math.floor(febIncomeAdd) + " "+ "the difference from the previous rate is ksh" +" "+ Math.floor((febIncomeAdd-febIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for March is  ksh" + " "+  Math.floor(marIncomeAdd) + " "+ "the difference from the previous rate is ksh" +" "+ Math.floor((marIncomeAdd-marIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for April is  ksh" + " "+  Math.floor(aprlIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((aprlIncomeAdd-aprlIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for May is  ksh" +" "+   Math.floor(mayIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((mayIncomeAdd-mayIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for June is  ksh" + " "+  Math.floor(junIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((junIncomeAdd-junIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for July is  ksh" +" "+  Math.floor(julIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((julIncomeAdd-julIncome))
    document.getElementById("p1").innerHTML +="<p>Your income for August is  ksh" +" "+  Math.floor(augIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((augIncomeAdd-augIncome) )
    document.getElementById("p1").innerHTML +="<p>Your income for September is  ksh" + " "+  Math.floor(sepIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((sepIncomeAdd-sepIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for October is  ksh" + " "+  Math.floor(octIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((octIncomeAdd-octIncome)) 
    document.getElementById("p1").innerHTML +="<p>Your income for November is  ksh" + " "+  Math.floor(novIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((novIncomeAdd-novIncome) )
    document.getElementById("p1").innerHTML +="<p>Your income for December is  ksh" + " "+  Math.floor(decIncomeAdd) + " "+ "the difference from the previous rate is ksh" + " "+ Math.floor((decIncomeAdd-decIncome)) 

}


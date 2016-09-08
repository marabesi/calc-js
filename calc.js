var mathExpression = function (expression)
{		
  
	var firstNumber = 0;
	var conditionExpression = "";
	var secondNumber = 0;
	var expressionResult = null;
   
	document.getElementById('visor').value += expression;

	if(document.getElementById("=").clicked)
	{
		console.log("eae");
		for(var count = 0; count >= expression.length; count++)
  		{
    		if(expression[count] == "+")
    		{
      			
       		for(var searchFirstnumber = 0; searchFirstnumber < count; searchFirstnumber++)
       		{
         		firstNumber += expression[searchFirstnumber];      
       		} 
       
       		for(var searchSecondnumber = count; searchSecondnumber <= expression.length; searchSecondnumber++)
         	{
           		secondNumber += expression[searchSecondnumber];           
         	}
      		console.log(firstNumber);
      		console.log(secondNumber);
    	}  
  	}

  }
}


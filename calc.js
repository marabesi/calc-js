var mathExpression = function (expression)
{		
  
	var firstNumber = "";
	var secondNumber = "";
	var getExpression = document.getElementById('visor').value += expression;
	

	if(isNaN(document.getElementById('visor').value) == true)
	{
		
		for(var count = 0; count <= getExpression.length; count ++)
  		{
    		switch (getExpression[count])
    		{
    			case "+":    			
       				
       				for(var searchFirstnumber = 0; searchFirstnumber < count; searchFirstnumber ++)
       				{
         				firstNumber += getExpression[searchFirstnumber];  
       				} 
       
      	 			for(var searchSecondnumber = count +1; searchSecondnumber < getExpression.length; searchSecondnumber ++)
        	 		{        			        		
	           			secondNumber += getExpression[searchSecondnumber];    
    	       			sum(parseInt(firstNumber),parseInt(secondNumber));           		         						
      		   		}
         	
         		break;

      			case "-":

      				for(var searchFirstnumber = 0; searchFirstnumber < count; searchFirstnumber ++)
       				{
         				firstNumber += getExpression[searchFirstnumber];  
       				} 
       
      	 			for(var searchSecondnumber = count +1; searchSecondnumber < getExpression.length; searchSecondnumber ++)
        	 		{        			        		
	           			secondNumber += getExpression[searchSecondnumber];    
    	       			minus(parseInt(firstNumber),parseInt(secondNumber));           		         						
      		   		}

      		   	break;	

      		   	case "*":

      		   		for(var searchFirstnumber = 0; searchFirstnumber < count; searchFirstnumber ++)
       				{
         				firstNumber += getExpression[searchFirstnumber];  
       				} 
       
      	 			for(var searchSecondnumber = count +1; searchSecondnumber < getExpression.length; searchSecondnumber ++)
        	 		{        			        		
	           			secondNumber += getExpression[searchSecondnumber];    
    	       			mult(parseInt(firstNumber),parseInt(secondNumber));           		         						
      		   		}

      		   	break;	

      		   	case "/":

      		   		for(var searchFirstnumber = 0; searchFirstnumber < count; searchFirstnumber ++)
       				{
         				firstNumber += getExpression[searchFirstnumber];  
       				} 
       
      	 			for(var searchSecondnumber = count +1; searchSecondnumber < getExpression.length; searchSecondnumber ++)
        	 		{        			        		
	           			secondNumber += getExpression[searchSecondnumber];    
    	       			div(parseInt(firstNumber),parseInt(secondNumber));           		         						
      		   		}
      		   	break;

      		   	default:
      		   			
    		} 
    	}	 
	}
	
	else
	{	
		console.log("else");
	}
  
}

function sum(sum1,sum2,result)
{	
	result = sum1 + sum2;
	alert(result);
	return result;


}

function minus(min1,min2,result)
{	
	result = min1 - min2;
	return result;

}

function mult(mult1,mult2,result)
{	
	result = mult1 * mult2;
	return result;

}

function div(div1,div2,result)
{	
	result = div1 / div2;
	return result;

}

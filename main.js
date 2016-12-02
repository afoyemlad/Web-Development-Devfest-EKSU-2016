		function updateOutput() {
			var form = document.getElementById("calc");
			var out = form.elements["z"];
			var number1 =parseInt(form.elements['x'].value);	
			var number2 =parseInt(form.elements['y'].value);	
			// Note we can use the valueAsNumber to 
			var operator = parseInt(form.elements['operator'].value);

			// we need to calculate our output
			switch(operator)
			{
				//addition
				case 0:
				out.value = number1 + number2;
				break;

				//substraction
				case 1:
				out.value = number1 - number2;
				break;

				//Multiplication
				case 2:
				out.value = number1 * number2;
				break;

				//division
				case 3:
				out.value = (number1 / number2).toFixed(1);

				//Allow one digit after decimal place
				break;

				default:
				break;


			}
		}

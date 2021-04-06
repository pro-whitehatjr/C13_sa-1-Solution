let operator,input_num1, input_num2; 
let greeting, greeting2, greeting3;
let num1, num2;

function setup() {
  
  createCanvas(400, 200);
  background(178,255,102);
  
  input_num1 = createInput();
  input_num1.position(5, 60);
  greeting = createElement('h5', 'Enter number 1:');
  greeting.position(5, 20);
  
  input_num2 = createInput();
  input_num2.position(200, 60);
  greeting2 = createElement('h5', 'Enter operator:');
  greeting2.position(120, 80);

  operator = createInput();
  operator.position(100, 120);
  greeting3 = createElement('h5', 'Enter number 2:');
  greeting3.position(200, 20);
  
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  
  num1 = input_num1.value();
  num2 = input_num2.value();
  var opr = operator.value();
  
  switch (opr) {
      
    case '+':
      console.log("Addition of num1 & num2: ");
      console.log(int(num1) + int(num2));
      break;
      
    case '-':
      console.log("Subtraction of num1 & num2: ");
      console.log(int(num1) - int(num2));
      break;
      
    case '*':
      console.log("Multiplication of num1 & num2: ");
      console.log(int(num1) * int(num2));
      break;
      
    case '/':
      console.log("Division of num1 & num2: ");
      console.log(int(num1) / int(num2));  
      break;
    
    default:
      console.log("Please enter Valid operator."); 
  }
}



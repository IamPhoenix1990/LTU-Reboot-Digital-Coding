//console.log('test');

// Single line comment 

/*

Multiline coment

*/

/* List of things that are "false"
let strVariable = '';
let numberOfKittens = 0;
let blnVariable = false; //boolean 
let arrVariable = [];
let objVariable = {};
let variable; //undefined
let emptyVar = null;
*/

// everything else is true!


let strProductName = 'Pasta';
let price = 1.99;
let quantity = 5;
let inStock = true;
let discountAmount = 0;

// console.log(strProductName);
// console.log(price);

function showProductName(){
    console.log(strProductName);
}

// let showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    let totalPrice = productPrice * productQuantity;
    return '£'+ totalPrice.toFixed(2);
}

let totalPriceBeer = totalPrice(1.05,4);
//console.log(totalPriceBeer)

function squareNumber(num){
    let squareNumber = num * num;
    return squareNumber;
}

//let squareNumber = num => num * num;

let square = squareNumber(9);
//console.log(square);

function fizzBuzzChecker(number){
    let strMessage= number;
    if(number % 3 == 0 && number % 5 == 0){
        strMessage = 'FizzBuzz';
    } else if (number % 5 == 0){
        strMessage = 'Buzz';
    } else if (number % 3 == 0){
        strMessage = 'Fizz';
    }
    return strMessage;
}

//console.log(fizzBuzzChecker(1));
//console.log(fizzBuzzChecker(2));
//console.log(fizzBuzzChecker(3));
//console.log(fizzBuzzChecker(4));
//console.log(fizzBuzzChecker(5));
//console.log(fizzBuzzChecker(6));
//console.log(fizzBuzzChecker(7));
//console.log(fizzBuzzChecker(8));
//console.log(fizzBuzzChecker(9));
//console.log(fizzBuzzChecker(10));
//console.log(fizzBuzzChecker(11));
//console.log(fizzBuzzChecker(12));
//console.log(fizzBuzzChecker(13));
//console.log(fizzBuzzChecker(14));
//console.log(fizzBuzzChecker(15));

function drinkOrder(drink,size){
    let blnValidated = true;
    let strMessage = ('You have ordered a') + size;
    //validating the size argument to ensure they ordered a size we can sell
    if(size != ' small ' && size != ' medium ' && size != ' large '){
        //overwriting the message when the size isn't in the logic above
        strMessage = ('you have ordered a size we do not sell:' + size);
        blnValidated = false;
    }
    //if the size is valid
    if(blnValidated){
        //creating different oututs based on the drinks argument
     switch(drink){
        case 'cola':
            strMessage += ' Coca-cola ';
        break;
        case 'lemon':
            strMessage += ' Schweppes ';  
        break;
        case 'orange':
            strMessage += ' Tango ';
        break;
        default:
            //overwriting the message when the drink can't be sold
            strMessage = ' we do not sell ' + drink ;
        break;
        }
    }
    console.log(strMessage);
}

//drinkOrder('cola','small');
//drinkOrder('lemon','medium');
//drinkOrder('orange','large');
//drinkOrder('cola','huge')
//drinkOrder('coffee','medium');

function calculator(num1,num2,operator){
    //declaring sum variable
    let sum;
    //switch statement for operator
    //isNaN() function to validate
    if(isNaN(num1)){
        return 'Number1 needs to be a number';
    }
    if(isNaN(num2)){
        return 'Number2 needs to be a number';
    }
    switch(operator){
        case '+':
            sum = num1 + num2;
        break;
        case '-':
            sum = num1 - num2;
        break;
        case 'x':
        case '*':
            //two cases either * or x can be used for multiply
            sum = num1 * num2;
        break;
        case '/':
            sum = num1 / num2;
        break;
        case '%':
            sum = num1 % num2;
        break;
        default:
            return 'You have used an invalid operator:' + operator;
    }
    return sum;
}

//console.log(calculator(10,5,'+'));
//console.log(calculator(10,5,'-'));
//console.log(calculator(10,5,'*'));
//console.log(calculator(10,5,'/'));
//console.log(calculator(10,5,'%'));
//console.log(calculator('Zac',5,'+'));
//console.log(calculator(10,'Zac','+'));
//console.log(calculator(10,5,'Zac'));
//NaN means not a number 

function removeChar(strValue){

    if(strValue.length < 4){
    
    return 'You must pass through a string with at least 4 characters';
    
    }
    
    if(typeof strValue != 'string'){
    
    return 'This function can only work if a string is passed as the argument';
    
    }
    
    let firstTrim = 1;
    
    let trimUpto = strValue.length - 2;
    
    return strValue.substr(firstTrim,trimUpto);
    
    }
    
    
    
    console.log(removeChar('antidisestablishmentarianism'));

    let arrRainbow = ['red','orange','yellow','green','blue','indigo','violet']
    
    //console.log(arrRainbow[0]);
    //console.log(arrRainbow[3]);
    //console.log(arrRainbow[6]);
    //console.log(arrRainbow.length);

    let objProduct = {
        productName: 'Tinned Beans',
        price: 0.99,
        quantity:4,
        inStock:true,
        discountAmount:0,
    };

    // two ways to saying the same thing
    console.log(objProduct.productName); // dot notation
    console.log(objProduct['productName']); // bracket notation

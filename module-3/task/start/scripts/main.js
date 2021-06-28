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

drinkOrder('cola','small');
drinkOrder('lemon','medium');
drinkOrder('orange','large');
drinkOrder('cola','huge')
drinkOrder('coffee','medium');

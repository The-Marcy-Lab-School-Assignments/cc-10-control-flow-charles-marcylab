//1
function greatestOfTwo(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
  }
}

//console.log(greatestOfTwo(4, -6))

//2
function greatestOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num3){
        return num2;
    }else{
        return num3
    }
}

//console.log(greatestOfThree(14, 20, 28))

//3
function greatestOfFour(num1, num2, num3, num4){
    if(num1 > num2 && num1 > num3 && num1 > num4){
        return num1;
    }else if(num2 > num3 && num2 > num4){
        return num2;
    }else if (num3 > num4){
        return num3;
    }else{
        return num4
    }
}
//console.log(greatestOfFour(-5, -2, -6, 0))

//4
function leastOfFour(num1, num2, num3, num4){
    if(num1 < num2 && num1 < num3 && num1 < num4){
        return num1;
    }else if(num2 < num3 && num2 < num4){
        return num2;
    }else if (num3 < num4){
        return num3;
    }else{
        return num4
    }
}
//console.log(leastOfFour(10, 2, 6, 11))
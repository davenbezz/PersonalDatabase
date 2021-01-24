function add(val) {
    let result = 0;
    const numbers = val.split(' ');
    numbers.forEach(number => {
        result += parseInt(number);
    });
    return result;
}
function multiply(val) {
    let result = 1;
    const numbers = val.split(' ');
    numbers.forEach(number => {
        result *= parseInt(number);
    });
    return result;
}
function subtract(val){
    const numbers = val.split(' ');
    let result = numbers.shift();
    numbers.forEach(number => {
        result -= parseInt(number);
    });
    return result;
}

function divide(val){
    let work = true;
    function isTrue(val){
        numbers = val.split(' ');
        numbers.shift();
        numbers.forEach(number =>{
            if(number == '0'){
                work = false;
            }
        });
    }
    isTrue(val);
    if(work){
        numbers = val.split(' ');
        let result = parseInt(numbers.shift());
        numbers.forEach(number => {
            result /= parseInt(number);
        });
        return result;
    }else{
        return 'Please enter a valid denominator.';
    }
}
function modify(result){
    var a = '';
    for (let index = 0; index < result.toString().length; index++) {
        a += "=";
    }
    console.log(a);
    console.log(result);
    
    return a;
}
(function(){
    do{
    var operator = prompt('Enter operator: \n + : addition\n - : subtraction\n / : division\n * : multiplication \n 0 : to end operation');
    if(operator == 0){
        break;
    }
    var string = prompt('Enter your array of operation (separate it by space): ');
    switch(operator){
        case '+':
            console.log(modify(add(string)));
            break;
        case '-':
            console.log(modify(subtract(string)));
            break;
        case '*':
            console.log(modify(multiply(string)));
            break;
        case '/':
            console.log(modify(divide(string)));
            break;
        default:
            console.log(modify(('Please enter a valid operator')));
    }
} while(operator != 0);
console.log('Thank you for using!\nDo come again!');
})();
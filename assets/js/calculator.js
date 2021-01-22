function add(val) {
    let result = 0;
    const numbers = val.split('+');
    numbers.forEach(number => {
        result += parseInt(number);
    });
    return result;
}
function multiply(val) {
    let result = 1;
    const numbers = val.split('*');
    numbers.forEach(number => {
        result *= parseInt(number);
    });
    return result;
}
function subtract(val){
    const numbers = val.split('-');
    let result = numbers.shift();
    numbers.forEach(number => {
        result -= parseInt(number);
    });
    return result;
}

function divide(val){
    let work = true;
    function isTrue(val){
        numbers = val.split('/');
        numbers.shift();
        numbers.forEach(number =>{
            if(number == '0'){
                work = false;
            }
        });
    }
    isTrue(val);
    if(work){
        numbers = val.split('/');
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
    console.log('=========================================');
    console.log('|\t\t\t\t\t\t\t\t\t\t|');
    console.log('|\t\t\t\t\t'+result+'\t\t\t\t\t|');
    console.log('|\t\t\t\t\t\t\t\t\t\t|');
    var a = '';
    for (let index = 0; index < result.toString().length; index++) {
        a += "==";
    }
    console.log(a);
    return '=========================================';
}
(function(){
    var operator = prompt('Enter operator: \'+, -, *, /\'');
    var string = prompt('Enter your array of operation: ');
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
            console.log('Please enter a valid operator');
    }
})();


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

console.log(divide('27/3/4/9'));
console.log(multiply('4*4*3*1'));
console.log(add('2+5+9'));
console.log(subtract('2-7-7-9'));
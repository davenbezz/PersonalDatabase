function deposit(account, money) {
    account += money;
    return "Deposited succesfully. \nYour account balance is " + account+"$";
}
function withdraw(account, money) {
    if(account < money){
        return "You don't have such kind of money.\nYour account balance is: "+account;
    }else if(money > 5000 || money < 20){
        return "Not a valid amount";
    }
    else{
        account -= money;
        return "Withdrawed succesfully.\nYour account balance is " + account+"$";
    }
}
function balance(name, age, account) {
    let ID = Math.floor(Math.random() * (1000999 - 1000000)) + 1000000;
    return "Your account balance information\n\nFull Name: "+name+"\nAge: " + age+"\nAccount ID: "+ID + "\nAccount Balance: "+ account+"$";
}
function transfer(account1, account2, money){
    let reason = prompt('What is the reason for transfer?');
    if(account1 < money){
        return "You don't have such kind of money.\nYour account balance is: "+account1;
    }else{
        account1 -= money;
        account2 += money;
        return "Transfered succesfully. \nYour account balance: " + account1+"$" + "\nYour new account balance: " + account2+"$" + '\nReason for transfer: ' + reason;
    }
}
(function(){
    let name = prompt('Enter your full name');
    let age = prompt('Enter your age');
    let account1 = prompt('Enter your account balance: ');
    let account2 = 0;
    let operation = prompt('Enter what you want to do:\n1: Deposit\n2: Withdraw\n3: Balance\n4: Transfer');
    account1 = parseInt(account1);
    account2 = parseInt(account2);
    if(operation == 1){
        let money = prompt('Enter how much you want to deposit.');
        money = parseInt(money);
        if(!money){
            console.log("Enter a valid money.");
        }else{
            console.log(deposit(account1, money));
        }
    }else if(operation == 2){
        let money = prompt('Enter how much you want to withdraw.');
        money = parseInt(money);
        if(!money){
            console.log("Enter a valid money.");
        }else{
            console.log(withdraw(account1, money));
        }
    }else if(operation == 3){
        console.log(balance(name, age, account1));
    }else if(operation == 4){
        let money = prompt('Enter how much money you want to transfer.');
        money = parseInt(money);
            if(!money){
                console.log("Enter a valid money.");
            }else{
                console.log(transfer(account1, account2, money));
            }
    }else{
        console.log("Enter a valid operation.");
    }
})();
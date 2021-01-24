function deposit(account, money) {
    person["account balance"]+= money;
    return "Deposited succesfully. \nYour account balance is " + person["account balance"]+"$";
}
function withdraw(account, money) {
    if(account < money){
        return "You don't have such kind of money.\nYour account balance is: "+person["account balance"] + '$';
    }else if(money > 5000 || money < 20){
        return "Not a valid amount\nYou can only withdraw from 20$ to 5000$ per day.";
    }
    else{
        person["account balance"] -= money;
        return "Withdrawed succesfully.\nYour account balance is " + person["account balance"]+"$";
    }
}
function IDcreator(){
    return Math.floor(Math.random() * (1000999 - 1000000)) + 1000000;
}
function balance() {
    return "Your account balance information\n\nFull Name: "+person.name+"\nAge: " + person.age+"\nAccount ID: "+person.ID + "\nAccount Balance: "+ person["account balance"]+"$";
}
function transfer(account1, account2, money){
    let reason = prompt('What is the reason for transfer?');
    if(account1 < money){
        return "You don't have such kind of money.\nYour account balance is: "+account1;
    }else{
        person["account balance"] -= money;
        account2 += money;
        return "Transfered succesfully. \nYour account balance: " + person["account balance"]+"$" + "\nYour new account balance: " + account2+"$" + '\nReason for transfer: ' + reason;
    }
}
var person = {
    name: "",
    age: "",
    ID: "",
    "account balance": ""
};
(function(){
    person.name = prompt('Enter your full name: ');
    person.age = prompt('Enter your age: ');
    person.ID = IDcreator();
    person['account balance'] = prompt('Enter the initial money you have: ');
    person['account balance'] = parseFloat
(person['account balance']);
    do {
        let account2 = 0;
        var operation = prompt('Enter what you want to do:\n1: Deposit\n2: Withdraw\n3: Balance\n4: Transfer\n5: Terminate');
        if(operation == 1){
            let money = prompt('Enter how much you want to deposit.');
            money = parseFloat(money);
            if(!money){
                console.log("Enter a valid money.");
            }else{
                console.log(deposit(person['account balance'], money));
            }
        }else if(operation == 2){
            let money = prompt('Enter how much you want to withdraw.');
            money = parseFloat(money);
            if(!money || money <= 0){
                console.log("Enter a valid money.");
            }else{
                console.log(withdraw(person['account balance'], money));
            }
        }else if(operation == 3){
            console.log(balance(person.name, person.age, person['account balance']));
        }else if(operation == 4){
            let money = prompt('Enter how much money you want to transfer.');
            money = parseFloat(money);
                if(!money | money == 0){
                    console.log("Enter a valid money.");
                }else if(money < 0){
                    console.log('If you want to withdraw, choose 2.');
                }else{
                    console.log(transfer(person['account balance'], account2, money));
                }
        }else if(operation == 5){
            console.log("Do come again!\nThank You!");
        }else{
            console.log("Enter a valid operation.");
        }
    } while (operation != 5);
})();
// (function(){
//     let name = prompt('Enter your full name');
//     let age = prompt('Enter your age');
//     let account1 = prompt('Enter your account balance: ');
//     let account2 = 0;
//     let operation = prompt('Enter what you want to do:\n1: Deposit\n2: Withdraw\n3: Balance\n4: Transfer');
//     account1 = parseFloat
// (account1);
//     account2 = parseFloat
// (account2);
//     if(operation == 1){
//         let money = prompt('Enter how much you want to deposit.');
//         money = parseFloat
// (money);
//         if(!money){
//             console.log("Enter a valid money.");
//         }else{
//             console.log(deposit(account1, money));
//         }
//     }else if(operation == 2){
//         let money = prompt('Enter how much you want to withdraw.');
//         money = parseFloat
// (money);
//         if(!money){
//             console.log("Enter a valid money.");
//         }else{
//             console.log(withdraw(account1, money));
//         }
//     }else if(operation == 3){
//         console.log(balance(name, age, account1));
//     }else if(operation == 4){
//         let money = prompt('Enter how much money you want to transfer.');
//         money = parseFloat
// (money);
//             if(!money){
//                 console.log("Enter a valid money.");
//             }else{
//                 console.log(transfer(account1, account2, money));
//             }
//     }else{
//         console.log("Enter a valid operation.");
//     }
// })();
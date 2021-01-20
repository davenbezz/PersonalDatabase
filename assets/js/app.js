
let person = {
    fn : "",
    sn: "",
    birthYear :"",
    tempAge: "",
    job:"",
    h: "",
    w:"",
    familyNo:"",
    eligibleToVote: false,
    familyMembers: [],
    dateofBirth: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc(Number(this.birthYear));
        if (tempAge >= 18) { this.eligibleToVote = true; } else { this.eligibleToVote = false; }
    },
    calBmi: function(h, w){
        BMI =  w/(h*h);
        if(BMI < 18.5){
            return "---"+BMI+"---" + "\nYou're Underweight";
        }else if(BMI < 25){
            return "---"+BMI+"---" + "\n Your're Normal";
        }else{
            return "---"+BMI+"---" + "\n You're Overweight"
        }
    }


}
 

// var fn;
// var sn;
// var birthYear;
// var job;

// let tempAge;
// let eligibleToVote;

// //family related variables
// let familyMembers = new Array();

// let familyNo;


person.fn = prompt("Your First Name? ");
person.sn = prompt("Your Last Name? ");
person.birthYear = prompt("Your Birth Year? ");
person.job = prompt("Your Job? ");
person.h = prompt("Your height? ");
person.w = prompt("Your weight? ");
person.familyNo = prompt("How many family member do you have? ");


//Number Age
person.tempAge = person.dateofBirth(person.birthYear);
if(person.tempAge >= 18){
    eligibleToVote = true;
}else{
    eligibleToVote = false;
}

//recieve each family member by for loop
for (let index = 0; index < parseInt(person.familyNo); index++) {
    person.familyMembers[index] = prompt("Family Member " + index+1);
}

console.log("Here's your profile !!!");
console.log("Full Name: " + person.fn + " " + person.sn);
console.log("Proffession: " + person.job);
console.log("Can you vote? " + person.dateofBirth() + person.eligibleToVote);


person.familyMembers.forEach(function(member){
    console.log("Family Member "  + " " + member);
});

// person.dateofBirth(){
//     return new Date().getFullYear() - birthYear;
// }

//bmi calculator 
console.log(person.calBmi(person.h, person.w));
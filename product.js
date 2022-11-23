const productOfTwoNumbers = (num1,num2)=>{
    return num1 * num2;
}
console.log(productOfTwoNumbers(20,3));


const productOfTwoNumbers1 = (num1,num2)=> num1 * num2;
console.log(productOfTwoNumbers1(10,30));

const student = {
    name : 'Roshan Shaik',
    age : 24,
    college : 'PEC',
    career(){
        return (this.name + ' started his life as a full stack Software developer.');
    }
}

const result = student.career();
console.log(result);
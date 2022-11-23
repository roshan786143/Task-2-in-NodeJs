const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

fruits.map((fruit)=>{
    if(fruit==' '){
        const index = fruits.indexOf(fruit);
        fruits[index] = 'empty string';
    }
    // return fruits;
})
console.log(fruits);

const hobbies = ['reading books','playing games','listening music','watching Netflix Webseries'];
hobbies.push('reading novels');
hobbies[5] = 'programming';

console.log(hobbies);

//we'll get the output when adding items into the array even if the array is declared by using const keyword.
//This is because the reference of the variable points to the memory location so even we update the array then the reference won't change.




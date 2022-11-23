// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// console.log('d');

// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// setTimeout(() => console.log('d'), 0)
// console.log('e');

console.log('a');
console.log('b');
console.log('c');

const fun1 = async()=>{
    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d');
        }, 2000);
    })
    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('e');
        }, 1000);
    })
    try{
        const resolve1 = await promise1;
        const resolve2 = await promise2;
        console.log(resolve1)
        console.log(resolve2);
    }catch(error){
        console.log(error);
    }
}

fun1();
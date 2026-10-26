//document.getElementById("counter").innerHTML= 5
console.log(document.getElementById("counter"))
let count= 0;
// let myAge= 21;
// myAge= 9
// console.log(myAge);
// const humanDogAge= 7;
// const myDogAge= myAge * humanDogAge;
// console.log(myDogAge);
let saveEl= document.getElementById("savedCounter");
function increment(){
    count= count + 1;
    document.getElementById("counter").innerHTML= count;
}
function save(){
    let countstr= count + " - "
    saveEl.innerHTML+= countstr
    count= 0;
    document.getElementById("counter").innerHTML= count;
}


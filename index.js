let random = Math.random();
let a = prompt("enter your first number");
let c = prompt("enter operation");
let b = prompt("enter your second number");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1){
    console.log(`the result is(${a} ${b}`)
    alert(`the result is${eval(`${a} ${b}`)}`)

}
else{
    c=obj[c]
    alert(`the result is${eval(`${a} ${b}`)}`)


}
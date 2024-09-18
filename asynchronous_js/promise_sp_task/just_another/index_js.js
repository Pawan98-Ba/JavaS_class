async function fetchData() {
    try{
        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        quotes(data);
    }
    catch(error){
        console.log(error);
    }
    
}
fetchData();

let arr = JSON.parse(localStorage.getItem("data"));
// let arr = localStorage.getItem("data");
console.log(arr);

let str = "";
function quotes(value){
    let h1 = document.getElementById("quotes");
    h1.innerText = value.slip.advice;
    str = value.slip.advice;
}

let p = document.getElementById("number");
p.innerText = arr.length+1;

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

function disabble(){
    if(arr.length == 0){
        // console.log("helopp");
        document.getElementById("decrement").disabled = true;
    }
    else{
        document.getElementById("decrement").disabled = false;
    }
}
disabble();
increment.addEventListener("click",function(){
    let h1 = document.getElementById("quotes");
    let arr = JSON.parse(localStorage.getItem("data")); 
    arr.push(h1.innerText);
    console.log(arr);
    localStorage.setItem("data",JSON.stringify(arr));
    window.location.reload();
})
decrement.addEventListener("click",function(){
    let arr = JSON.parse(localStorage.getItem("data")); 
    console.log(arr);
    let hold = arr.pop();
    console.log(hold);
    let h1 = document.getElementById("quotes");
    h1.innerText = hold;
    localStorage.setItem("data",JSON.stringify(arr));
    check();
    // console.log(arr);
})
function check(){
    let arr = JSON.parse(localStorage.getItem("data")); 
    let p = document.getElementById("number");
    p.innerText = arr.length+1;
    if(arr.length == 0){
        // console.log("helopp");
        document.getElementById("decrement").disabled = true;
    }
}
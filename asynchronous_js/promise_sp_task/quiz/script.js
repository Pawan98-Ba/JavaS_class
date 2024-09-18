async function fetchData(){
    try{
        let response = await fetch("https://opentdb.com/api.php?amount=20");
        let data = await response.json();
        obj = data.results[0];
        display(data);
    }
    catch(error){
        console.log(error);
    }
}
let obj = {};
fetchData();
function display(object){
    let arr = object.results[0];
    console.log(arr.question);

    let qn = document.getElementById("QN");
    qn.innerText = arr.question;

    if(arr.incorrect_answers.length==3){
        ans(arr.correct_answer);
        arr.incorrect_answers.forEach((value)=>{
            incorrectAns(value);
        })
    }
    else{
        window.location.reload();
    }

}
let a = document.getElementById("A");
let b = document.getElementById("B");
let c = document.getElementById("C");
let d = document.getElementById("D");


function ans(data){
    console.log(data);
    let number = Math.floor(Math.random()*100);
    console.log(number);
    if(number>0 && number <=25){
        a.innerText = data;
    }
    else if(number>25 && number<=50){
        b.innerText = data;
    }
    else if(number>50 && number<=75){
        c.innerText = data;
    }
    else{
        d.innerText = data;
    }
}
function incorrectAns(data){
    if(a.innerText==""){
        a.innerText = data;
    }
    else if(b.innerText==""){
        b.innerText = data;
    }
    else if(c.innerText==""){
        c.innerText = data;
    }
    else if(d.innerText==""){
        d.innerText = data;
    }
}
let butA = document.getElementById("butA");
let butB = document.getElementById("butB");
let butC = document.getElementById("butC");
let butD = document.getElementById("butD");

butA.addEventListener("click",function(){
    let hold = a.innerText;
    butB.style.pointerEvents = "none";
    butC.style.pointerEvents = "none";
    butD.style.pointerEvents = "none";
    if(obj.correct_answer == hold){
        butA.style.backgroundColor = "green";
    }
    else{
        butA.style.backgroundColor = "red";
    }
    setInterval(() => {
        window.location.reload();
    }, 3000);
})
butB.addEventListener("click",function(){
    let hold = b.innerText;
    butA.style.pointerEvents = "none";
    butC.style.pointerEvents = "none";
    butD.style.pointerEvents = "none";
    if(obj.correct_answer == hold){
        butB.style.backgroundColor = "green";
    }
    else{
        butB.style.backgroundColor = "red";
    }
    setInterval(() => {
        window.location.reload();
    }, 3000);
})
butC.addEventListener("click",function(){
    let hold = c.innerText;
    butB.style.pointerEvents = "none";
    butA.style.pointerEvents = "none";
    butD.style.pointerEvents = "none";
    if(obj.correct_answer == hold){
        butC.style.backgroundColor = "green";
    }
    else{
        butC.style.backgroundColor = "red";
    }
    setInterval(() => {
        window.location.reload();
    }, 3000);
})
butD.addEventListener("click",function(){
    let hold = d.innerText;
    butB.style.pointerEvents = "none";
    butC.style.pointerEvents = "none";
    butA.style.pointerEvents = "none";
    if(obj.correct_answer == hold){
        butD.style.backgroundColor = "green";
    }
    else{
        butD.style.backgroundColor = "red";
    }
    setInterval(() => {
        window.location.reload();
    }, 3000);
})

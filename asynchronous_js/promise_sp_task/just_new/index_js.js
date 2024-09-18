let baap = document.getElementById("baap");
// console.log(baap);
async function fetchData(){
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    transferDisplay(data);
    }
    catch(error){
        console.log(error);
    }
}
let left = document.getElementById("front");
let right = document.getElementById("back");

if(localStorage.getItem("num")=="1"){
    left.style.display = "none";
}
if(localStorage.getItem("num")=="10"){
    right.style.display = "none";
}



left.addEventListener("click",function(){
    let number = localStorage.getItem("num");
    number--;
    localStorage.setItem("num",number);
    window.location.reload();
})

right.addEventListener("click",function(){
    let number = localStorage.getItem("num");
    number++;
    localStorage.setItem("num",number);
    window.location.reload();
})

function transferDisplay(value){
    let number = localStorage.getItem("num");
    let id = number*1;
    id -= 1;
    console.log(id);
     display(value[id]);
    
 }
function display(dota){
    let company = document.getElementById("company");
    company.innerText = dota.company.name;
    let name = document.getElementById("name");
    name.innerText = dota.name;
    let id = document.getElementById("id");
    id.innerText =`Id : ${dota.id}`;
    let user = document.getElementById("user");
    user.innerText =`Username : ${dota.username}`;
    let phone = document.getElementById("phone");
    phone.innerText = `Phone : ${dota.phone}`;
    let email= document.getElementById("email");
    email.innerText = `Email : ${dota.email}`;
}

let front_card = document.getElementById("front_card");
front_card.addEventListener("click",function(){
    window.location.href = "extra_index.html";
}) 

fetchData();
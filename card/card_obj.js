let holder = document.querySelector(".baap_card");
let img = ["kapada.jpg","daal_bhat.jpg","madal.jpg"];
let title = ["daura suruwal","Dal bhat","The madal"];
let dis = ["The daura suruwal is the national dress of Nepal and is worn by men. It consists of a knee-length shirt (daura) and a loose-fitting trouser (suruwal). ","Dal bhat (or daal bhat ) is the quintessential Nepali meal and forms the backbone of the country's cuisine. ","The madal is the national instrument of Nepal and is the backbone of most Nepali folk music."];

function card(i,t,d){
    return `
         <div class="card">
            <div class="card_img">
                <img src="${i}" alt="">
            </div>
            <div class="card_text">
                <div>
                    <h1>${t}</h1>
                </div>
                <div>
                    <p>
                        ${d}
                    </p>
                </div>
            </div>
        </div>
    `
}
function phatayo (){
    for(let i = 0 ;i<dis.length;i++){
        holder.innerHTML += card(img[i],title[i],dis[i]);
    }
}
phatayo();
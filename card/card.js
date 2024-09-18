let obj = [
    {
        image:" cow.jpg",
        name: "Cow",
        detail : "Cow is the national animal of Nepal. Cattle (colloquially cows) are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos primigenius.",
        
    },
    {
        image:"kuluri.jpg",
        name: "The kukri",
        detail : "The kukri is the national weapon of Nepal, traditionally serving the role of a basic utility knife for the Nepali-speaking Gurkhas, and consequently is a characteristic weapon of the Nepali Army.",
        
    },
];
let hold = document.querySelector(".baap_card");

let display = (ob) => {
    return `  
        <div class="card">
            <div class="card_img">
                <img src="${ob.image}" alt="">
            </div>
            <div class="card_text">
                <div>
                    <h1>${ob.name}</h1>
                </div>
                <div>
                    <p>
                       ${ob.detail}
                    </p>
                </div>
            </div>
        </div>
    `
}
let display_connect = () => {
    for(let i = 0;i<obj.length;i++){
        hold.innerHTML += display(obj[i]);
    }
}
display_connect();

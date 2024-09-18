
async function fetchData() {
    let random = Math.floor((Math.random()*100)+1);
    try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    let data = await response.json();
        // console.log(data);
    pokemonData(data);
        }
        catch(error){  
            console.log(error);
        }
  }
  fetchData();

  function pokemonData(pokevalue){
    let img = document.getElementById("image");
    img.src = pokevalue.sprites.front_default;

    let name = document.getElementById("name");
    let hold_name = pokevalue.name.charAt(0).toUpperCase() + pokevalue.name.slice(1);

    name.innerText = hold_name;
    console.log(name.value);
  
  }
  let button = document.getElementById("button");
  button.addEventListener("click",function(){
    window.location.reload();
  })
//   console.log(button);

var colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  document.addEventListener("mousemove", function (e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    var randomIndex = Math.floor(Math.random() * colors.length);
    trail.style.backgroundColor = colors[randomIndex];

    document.body.appendChild(trail);

    setTimeout(() => {
      document.body.removeChild(trail);
    }, 500);
  });
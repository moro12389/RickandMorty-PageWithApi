const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

const callApi = fetch(API_CHARACTERS);

callApi.then((data) => {
    return data.json();
}).then((data) => {
    const $cardsContainer = document.getElementById("container");
    const characters = data.results;
    console.log(characters);
    for(let i=0;i<characters.length;i++){
        $cardsContainer.innerHTML += 
                `<div class="card">
                    <img src=${characters[i].image} alt="" srcset="">
                    <div class="description-card">
                        <p>  Location:   ${characters[i].location.name}</p>
                        <p>  Name:   ${characters[i].name}</p>
                        <p>  Status:   ${characters[i].status}</p>
                        <p>  Gender:   ${characters[i].gender}</p>
                        <p>  Origin:   ${characters[i].origin.name}</p>
                        <p>  Specie:   ${characters[i].species}</p>
                    </div>
                </div>`
    }
})
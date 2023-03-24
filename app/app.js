const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

const callApi = fetch(API_CHARACTERS);

callApi.then((data) => {
    return data.json();
}).then((data) => {
    const $cardsContainer = document.getElementById("container");
    const characters = data.results;
    for(let i=0;i<characters.length;i++){
        $cardsContainer.innerHTML += 
                `<div class="card">
                    <img src=${characters[i].image} alt="" srcset="">
                    <div>
                        <p>sssss</p>
                        <p>sssss</p>
                        <p>sssss</p>
                    </div>
                </div>`
    }
})
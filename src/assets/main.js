// import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";
const content = null || document.getElementById("content");

async function fetchData(urlApi) {
    const respuesta = await fetch(urlApi);
    const datos = await respuesta.json();
    return datos;
}

(async () => {
    try {
        const personajes = await fetchData(`${API}/character`);
        let view = `${personajes.results.map((personaje) =>
        `<a href="" class="block">
            <img 
                src="${personaje.image}" 
                alt="${personaje.name}"
                class="object-cover w-full h-72 rounded-bl-3xl rounded-tr-3xl transition duration-500 hover:rounded-none"
            />

            <div class="flex items-center justify-center mt-4 space-x-4">
                <p class="font-medium">${personaje.name}</p>

                <span class="w-8 h-px bg-red-500"></span>

                <p class="opacity-50">${personaje.species} / ${personaje.status}</p>
            </div>
        </a>`).slice(0,25).join("")}`;
        content.innerHTML = view;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
})();
const API = "https://rickandmortyapi.com/api";
const content = null || document.getElementById("content");

async function fetchData(urlApi) {
    const respuesta = await fetch(urlApi);
    const datos = await respuesta.json();
    return datos;
}

(async () =>{
    try {  
        const planeta = await fetchData(`${API}/location`);
        let view = `${planeta.results.map((planet) =>
        `<a href="#" class="block">
            <div class="flex items-center justify-center mt-4 space-x-4">
                <p class="font-medium">Tipo: ${planet.type}</p>
                
                <span class="w-8 h-px bg-blue-500"></span>

                <p class="font-medium">Nombre: ${planet.name}</p>
            </div>
            <div class="flex items-center justify-center mt-4 space-x-4">
                <p class="font-medium">Dimension: ${planet.dimension}</p>

                <span class="w-8 h-px bg-red-500"></span>

                <p class="opacity-50">Creado el: ${planet.created}</p>
            </div>
        </a>`).join("")}`;
        content.innerHTML = view;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
})();
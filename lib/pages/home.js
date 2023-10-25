//IMPORTACIONES
import { getAllProcesses } from "../services/process.js";

//INSTANCIAS
const contenedor_consultoria = document.getElementById('contenedor-consultoria')
const contenedor_diseño = document.getElementById('contenedor-diseño')
const contenedor_DB = document.getElementById('contenedor-DB')
const contenedor_testing = document.getElementById('contenedor-testing')

const fillProcesses = async() =>{
    const processes = await getAllProcesses();

    processes.forEach(process => {
        const nombre = process.title
        let container;
        if (nombre == "Consultoria"){
            container = contenedor_consultoria;
        }else if (nombre == "Diseño"){
            container = contenedor_diseño;
        }else if (nombre == "Base de datos"){
            container = contenedor_DB;
        }else if (nombre == "Testing"){
            container = contenedor_testing;
        }

        //Crear elemento en la categoria
		container.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img 
                style="min-height:300px; max-height:300px;"
                class="card-img-top" 
                src="${process.image}" 
                alt="">
                <div class="card-body p-4">
                    <div class="text-center">						
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center d-flex gap-1">
                        <a href="/servicio.html?id=${process.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
                        <a href="" class="btn btn-outline-success mt-auto">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    })
}

fillProcesses()
import { getOneProcess } from "../services/process.js"
const id = new URLSearchParams(window.location.search).get('id');

//Inicializamos atributos del elemento
const process_image = document.getElementById('process-image');
const process_title = document.getElementById('process-title');
const process_description = document.getElementById('process-description');
//const process_time = document.getElementById('process-time');
const process_responsible = document.getElementById('process-responsible');
const process_status = document.getElementById('process-status');


//Completamos los datos solicitados
const fillDetailProcess = async() =>{
    const process = await getOneProcess(id)
    if(process){
        process_image.src = process.image;
        process_title.textContent = process.title;
        process_description.textContent = process.description;
        //process_time.textContent = process.time;
        process_responsible.textContent = process.responsible;
        process_status.textContent = process.status;
    }
}

fillDetailProcess()
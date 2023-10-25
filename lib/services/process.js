//Devolvemos un Json con los servicios
export function getAllProcesses(){
    return fetch('http://localhost:3000/api/')
    .then(res => res.json())
    .then(json => json)
}

//Devolvemos un json con un producto solicitado segun su id
export function getOneProcess(id) {
    return fetch(`http://localhost:3000/api/${id}`)
        .then(res => res.json())
        .then(json => json)
}
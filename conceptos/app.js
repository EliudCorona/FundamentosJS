const inputTarea = document.getElementById('tareatxt');
const btnAdd = document.getElementById('addtarea')
const divTareas = document.getElementById('tareas')


const addTarea = () =>{
    const tarea = inputTarea.value;  
    divTareas.appendChild(createTarea(tarea));
    inputTarea.value = '';
}

const createTarea = (tarea) =>{
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const editButton = document.createElement('button');
    button.addEventListener('click', removeTarea);
    editButton.addEventListener('click', updateTarea);
    p.innerText = tarea;
    button.innerText = 'Eliminar';
    editButton.innerText = 'Editar';
    div.appendChild(editButton);
    div.appendChild(p);
    div.appendChild(button);
    return div;
};
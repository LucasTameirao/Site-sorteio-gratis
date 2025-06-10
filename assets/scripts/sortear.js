const form = document.getElementById('formulario-sorteador-itens');

const submitButton = document.querySelector("#submit");

const addButton = document.querySelector("#addButton");

const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");

item1.parentElement.style.backgroundColor = "#e9e9e9";
item2.parentElement.style.backgroundColor = "#d6d3d3";

addButton.addEventListener("click", CreateNewItem);

submitButton.addEventListener('click', SortearValores);

function CreateNewItem(event){
    event.preventDefault();

    
    const newInput = document.createElement('input');
    const newLabel = document.createElement('label');
    const input = document.querySelector(".new-input-item");

    newInput.setAttribute("class", "new-input-item");
    input.setAttribute("class", "input-item");

    const newItem = CriaDiv(newInput, newLabel);

    EstilizarBackgroundItem(newItem, newInput);

    form.insertBefore(newItem, addButton);
}

function CriaDiv(newInput, newLabel){

    const div = document.createElement("div");
    div.classList.add("item");

    const listaItens = document.querySelectorAll(".input-item").length + 1;
    newLabel.textContent = `valor ${listaItens}: `;

    newInput.id = `item-${listaItens}`; 
    newLabel.setAttribute("for", `item-${listaItens}`);
    
    div.appendChild(newLabel);
    div.appendChild(newInput);

    return div;
}

function SortearValores(event){

    event.preventDefault();

    console.clear();

    const filhos = [];

    Array.from(form.children).forEach(filho => {
        if(filho.classList.contains("item")){
            filhos.push(filho);
        }  
    });

    const randomNumber = Math.floor(Math.random() * filhos.length);

    console.log(randomNumber);
    console.log(filhos[randomNumber]);


}

function EstilizarBackgroundItem(newItem, newInput){
    if(newInput.id.slice(5) % 2 == 0){
        newItem.style.backgroundColor = "#d6d3d3";
    }else{
        newItem.style.backgroundColor = "#e9e9e9";
    }
}
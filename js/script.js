const listaSpesa = ["latte" , "uova" , "pane" , "carne" , "burro" , "pesce", ];

const listPaginaEl = document.getElementById("listaPagina");

let index = 0;

while(index < listaSpesa.length){   
    
    let itemList = document.createElement("li");
    listPaginaEl.append(itemList);
    itemList.innerText = listaSpesa[index];
    itemList.classList.add("item-list");
    index++;
    
}
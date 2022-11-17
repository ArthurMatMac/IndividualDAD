// transformando a nodelist em array para obter os metodos de array
const veiculos = Array.from(document.querySelectorAll(".card-veiculo"));

// lista de veiculos inicial para cada um dos filtros
let veiculosFiltradosNome = [];
let veiculosFiltradosMarca = [];
let veiculosFiltradosCombustivel = [];
let veiculosFiltradosCambio = [];
let veiculosFiltradosAr = [];

const allNomes = document.querySelectorAll(".card-veiculo h2")
// adicionando evento de busca para o botao
const botaoCompra = document.querySelector("#botao-busca");
const busca = document.querySelector("#busca")
botaoCompra.addEventListener("click", buscaNome);

//função para mostrar os carros
function mostrarCarros(){
    for(let i = 0; i < veiculos.length; i++){
        if(!veiculosFiltradosNome[i] && !veiculosFiltradosMarca[i] && !veiculosFiltradosCombustivel[i] && !veiculosFiltradosCambio[i] && !veiculosFiltradosAr[i]){
            veiculos[i].style.display = "block"
        }else{
            veiculos[i].style.display = "none"
        }
    }
}

//Função para pesquisar pelo nome
function buscaNome(){
    for(let i = 0; i < allNomes.length; i++){
        if((allNomes[i].textContent).toLowerCase().includes(busca.value.toLowerCase())){
            veiculosFiltradosNome[i] = false
        }else{
            veiculosFiltradosNome[i] = true
        }
    }
    mostrarCarros()
}

// adicionando evento ao campo de marca
const marca = document.querySelector("#marca");
const allMarcas = document.querySelectorAll(".marca")
marca.addEventListener("change", filtraMarca);
function filtraMarca(){
    for(let i = 0; i < allMarcas.length; i++){
        if(marca.value != ""){
            if(allMarcas[i].textContent == marca.value){
                veiculosFiltradosMarca[i] = false
            }else{
                veiculosFiltradosMarca[i] = true
            }
        }else{
            veiculosFiltradosMarca[i] = false
        }
    }
    mostrarCarros()
}

// adicionando evento ao campo de combustivel
const combustivel = document.querySelector("#combustivel");

//Variáveis para armezanar os atributos
let allAtributos = document.querySelectorAll(".atributos-carro");
let allCombustivel = [];
let allArcondicionado = [];
let allCambio = [];

//for para pegar o atributo específico dentro da classe
for(let i = 0; i < allAtributos.length; i++) {
    allCombustivel.push(allAtributos[i].querySelectorAll(".container-icone")[1].innerText)
    allArcondicionado.push(allAtributos[i].querySelectorAll(".container-icone")[2])
    allCambio.push(allAtributos[i].querySelectorAll(".container-icone")[0].innerText)
}

combustivel.addEventListener("change", filtraCombustivel);
//Função para filtrar o combustível
function filtraCombustivel(){
    for(let i = 0; i < allCombustivel.length; i++){
        if(combustivel.value != ""){
            if(allCombustivel[i] == combustivel.value){
                veiculosFiltradosCombustivel[i] = false
            }else{
                veiculosFiltradosCombustivel[i] = true
            }
        }else{
            veiculosFiltradosCombustivel[i] = false
        }
    }
    mostrarCarros()
}


// adicionando evento aos radio buttons
const cambios = document.getElementsByName("cambio");
cambios[0].addEventListener("change", filtrarCambio);
cambios[1].addEventListener("change", filtrarCambio);

//Função para filtar o cãmbio
function filtrarCambio(){
    for(let i=0; i < allCambio.length; i++){
        if(cambios[0].checked){
            if(allCambio[i] == "Automático"){
                veiculosFiltradosCambio[i] = false
            }else{
                veiculosFiltradosCambio[i] = true
            }
        }else{
            if(allCambio[i] == "Manual"){
                veiculosFiltradosCambio[i] = false
            }else{
                veiculosFiltradosCambio[i] = true
            }
        }
        mostrarCarros()
    }
}
// adicionando evento ao checkbox
const arCondicionado = document.getElementsByName("ar")[0];
arCondicionado.addEventListener("change", filtraAr);
function filtraAr(){
    for(let i = 0; i < allArcondicionado.length; i++){
        if(arCondicionado.checked){
            if(allArcondicionado[i] != undefined){
                veiculosFiltradosAr[i] = false
            }else{
                veiculosFiltradosAr[i] = true
            }
        }else{
            veiculosFiltradosAr[i] = false
        }
    }
    mostrarCarros()
}

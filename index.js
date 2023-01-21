 // Projeto Intro Web - Lucas Vogel de Oliveira - #GoConway


// SEMANA 1

// Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. 


// 1.1 Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas.
const nomeBanda = "";
const quantAlbuns = 0;
const bandaAtiva = true;

console.log(`Variáveis e seus tipos:\n nomeBanda:`,typeof nomeBanda,
`\n quantAlbuns:`,typeof quantAlbuns,
`\n bandaAtiva`,typeof bandaAtiva)

// 1.2 Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
// Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
const nomeBanda1 = "Meshuggah";
let quantAlbuns1= 16;
let bandaAtiva1 = true;

const nomeBanda2 = ("CPM 22");
let quantAlbuns2 = 12;
let bandaAtiva2 = true;


const nomeBanda3 = ("Legião Urbana");
let quantAlbuns3 = 17;
let bandaAtiva3 = false;

// 1.3 Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
const mediaQuantAlbuns = quantAlbuns1 + quantAlbuns2 + quantAlbuns3 / 3
console.log(`A média da Quantidade de Álbuns das bandas é de:${mediaQuantAlbuns.toFixed()}`)

// 1.4 Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
if (bandaAtiva1 == bandaAtiva2 && bandaAtiva3){
    console.log(`Todas as bandas estão na ativa.`)
}else{
    console.log(`Nem Todas as bandas na ativa. Existem valores boleanos FALSOS!`)
}

// 1.5 Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. 
// Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
let estilosMusicais = []
let estilosMusicais1 = ["metal"," death metal"," metal progressivo"]
let estilosMusicais2 = ["hardcore melódico "," punk rock"]
let estilosMusicais3 = ["rock "," rock nacional"," punk rock"]

// 1.6 Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  //. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
console.log(`Banda 1 - nome: ${nomeBanda1.toUpperCase()}\nquantidade de álbuns: ${quantAlbuns1}\nbanda em atividade: ${bandaAtiva1}\nestilos musicais: ${estilosMusicais1}`)
console.log(`Banda 2 - nome: ${nomeBanda2.toUpperCase()}\nquantidade de álbuns: ${quantAlbuns2}\nbanda em atividade: ${bandaAtiva2}\nestilos musicais: ${estilosMusicais2}`)
console.log(`Banda 3 - nome: ${nomeBanda3.toUpperCase()}\nquantidade de álbuns: ${quantAlbuns3}\nbanda em atividade: ${bandaAtiva3}\nestilos musicais: ${estilosMusicais3}`)





// ------------------------ FIM DA SEMANA 1---------------------------






// Semana 2 - início

// 1.1 Transforme os itens que criamos nas últimas semanas em objetos.

const banda1 = {
    nome : "Meshuggah",
    albuns : 16,
    ativa : true,
    estilo : ["metal","death metal","metal progressivo"],
    foto : "https://images.vice.com/noisey/content-images/article/hipster-metal-bands-have-meshuggah-to-thank/meshuggah-high-res-press-photo.jpg?crop=1xw:0.8181818181818182xh;center,center&resize=1200:*"
}

const banda2 = {
    nome : "CPM 22",
    albuns : 12,
    ativa : true,
    estilo : ["hardcore melódico","punk rock"],
    foto: "https://conteudo.imguol.com.br/c/entretenimento/a7/2020/08/19/cpm-22-apresenta-nova-formacao-da-banda-com-ali-zaher-ex-reffer-no-baixo-e-daniel-siqueira-garage-fuzz-na-bateria-1597855308635_v2_4x3.jpg"
}

const banda3 = {
    nome : "Legião Urbana",
    albuns : 17,
    ativa : false,
    estilo : ["rock","rock nacional","punk rock"],
    foto : "https://istoe.com.br/wp-content/uploads/2016/10/legiao-urbana.jpg"
}

// 1.2 Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const listaDeBandas = []

// 1.3 Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

    // listaDeBandas.push(banda1)
    // console.log(listaDeBandas)
    // listaDeBandas.push(banda2)
    // console.log(listaDeBandas)
    // listaDeBandas.push(banda3)
    // console.log(listaDeBandas)

// 1.4 Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. 
// A caraterística booleana do objeto deve ser validada. 
// Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

let verificaPush = confirm(`Clique em OK para adicionar`)
if (verificaPush){
    listaDeBandas.push(banda1)
    console.log(listaDeBandas)
    listaDeBandas.push(banda2)
    console.log(listaDeBandas)
    listaDeBandas.push(banda3)
    console.log(listaDeBandas)
}else{
    alert(`Você não confirmou a verificação`)
    console.log(`Você não confirmou a verificação`)
}

// 1.5 Crie uma condição else, que, em caso de valor false na condição acima, 
// exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
                    // FEITO ACIMA







// -------------------FIM DA SEMANA 2--------------------








// SEMANA 3 - início

/* 1.1 Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade 
array do objeto em uma mesma string. Utilize esta string no relatório. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, 
//  você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. */

for (let i=0; i<listaDeBandas.length; i++){
console.log(`Banda - nome: ${listaDeBandas[i].nome}\n
quantidade de álbuns: ${listaDeBandas[i].albuns}\n
banda em atividade: ${listaDeBandas[i].ativa}
estilos musicais: ${listaDeBandas[i].estilo}`)
}

//  Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
const banda4 = {
    nome : "Slipknot",
    albuns : 11,
    ativa : true,
    estilo : ["metal","nu metal"],
    foto : "https://www.loudmagazine.net/wp-content/uploads/2022/10/Slipknot-October-2022-promo-black-and-white.jpg"
}

verificaPush = confirm(`Clique em OK para adicionar o novo item`)
if (verificaPush){
    listaDeBandas.push(banda4)
    console.log(listaDeBandas)
  
}else{
    alert(`Você não confirmou a verificação`)
    console.log(`Você não confirmou a verificação`)
}

for (let i=0; i<listaDeBandas.length; i++){
    console.log(`Banda - nome: ${listaDeBandas[i].nome}\n
    quantidade de álbuns: ${listaDeBandas[i].albuns}\n
    banda em atividade: ${listaDeBandas[i].ativa}
    estilos musicais: ${listaDeBandas[i].estilo}`)
    }

// 1.3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function recebeBandas (bancoDeBandas){
    for (let i=0; i<listaDeBandas.length; i++){
        console.table(`Banda - nome: ${listaDeBandas[i].nome}
        quantidade de álbuns: ${listaDeBandas[i].albuns}
        banda em atividade: ${listaDeBandas[i].ativa}
        estilos musicais: ${listaDeBandas[i].estilo}`)
        }
}

recebeBandas();


// 1.4. Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto,  e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
// Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


function recebeBandasArray(listaDeBandas,nome){
    for (let i in listaDeBandas){
        if (listaDeBandas[i].nome === nome){
            return (listaDeBandas[i].nome)
        }
    }return alert("Nenhum item encontrado")
}
console.log(recebeBandasArray(listaDeBandas, "Meshuggah"))
console.log(recebeBandasArray(listaDeBandas, "CPM 22"))
console.log(recebeBandasArray(listaDeBandas, "Legião Urbana"))
console.log(recebeBandasArray(listaDeBandas, "Slipknot"))



// function recebeBandasArray (listaDeBandas,bancoDeBandas){
//     if listaDeBandas.nome ==  
//     return listaDeBandas
// }



// SEMANA 6 - DOM

// 1. Altere seu código para que a tela de lista de itens crie os 
// elementos da lista através de manipulação do DOM.

// Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista interação entre HTML e CSS e o Script que criamos. 
// A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir do nosso código JS. 
// Para isso, devemos manipular os objetos do HTML e do CSS utilizando o DOM.

// dados banda 1:

const listaBanda1 = document.getElementById('nomeBanda1')

const tituloBanda1 = document.createElement('li')
tituloBanda1.innerHTML = ('Nome: Meshuggah')
listaBanda1.insertAdjacentElement('afterbegin',tituloBanda1)

const quantAlbunsDOM1 = document.createElement('li')
quantAlbunsDOM1.innerHTML =('Quantidade de Álbuns: 16')
listaBanda1.insertAdjacentElement('beforeend',quantAlbunsDOM1)

const emAtividadeDOM1 = document.createElement('li')
emAtividadeDOM1.innerHTML = ('Banda em atividade: SIM')
listaBanda1.insertAdjacentElement('beforeend',emAtividadeDOM1)

const estilosMusicaisDOM1 = document.createElement('li')
estilosMusicaisDOM1.innerHTML = ('Estilos Musicais: Metal, Death Metal, Metal Progressivo')
listaBanda1.insertAdjacentElement('beforeend',estilosMusicaisDOM1)



// dados banda 2

const listaBanda2 = document.getElementById('nomeBanda2')

const tituloBanda2 = document.createElement('li')
tituloBanda2.innerHTML = ('Nome: CPM 22')
listaBanda2.insertAdjacentElement('afterbegin',tituloBanda2)

const quantAlbunsDOM2 = document.createElement('li')
quantAlbunsDOM2.innerHTML =('Quantidade de Álbuns: 12')
listaBanda2.insertAdjacentElement('beforeend',quantAlbunsDOM2)

const emAtividadeDOM2 = document.createElement('li')
emAtividadeDOM2.innerHTML = ('Banda em atividade: SIM')
listaBanda2.insertAdjacentElement('beforeend',emAtividadeDOM2)

const estilosMusicaisDOM2 = document.createElement('li')
estilosMusicaisDOM2.innerHTML = ('Estilos Musicais: Hardcore Melódico, Punk Rock')
listaBanda2.insertAdjacentElement('beforeend',estilosMusicaisDOM2)



// dados banda 3:

const listaBanda3 = document.getElementById('nomeBanda3')

const tituloBanda3 = document.createElement('li')
tituloBanda3.innerHTML = ('Nome: Legião Urbana')
listaBanda3.insertAdjacentElement('afterbegin',tituloBanda3)

const quantAlbunsDOM3 = document.createElement('li')
quantAlbunsDOM3.innerHTML =('Quantidade de Álbuns: 17')
listaBanda3.insertAdjacentElement('beforeend',quantAlbunsDOM3)

const emAtividadeDOM3 = document.createElement('li')
emAtividadeDOM3.innerHTML = ('Banda em atividade: NÃO')
listaBanda3.insertAdjacentElement('beforeend',emAtividadeDOM3)

const estilosMusicaisDOM3 = document.createElement('li')
estilosMusicaisDOM3.innerHTML = ('Estilos Musicais: Rock Nacional')
listaBanda3.insertAdjacentElement('beforeend',estilosMusicaisDOM3)



// dados da banda 4:

const listaBanda4 = document.getElementById('nomeBanda4')

const tituloBanda4 = document.createElement('li')
tituloBanda4.innerHTML = ('Nome: Slipknot')
listaBanda4.insertAdjacentElement('afterbegin',tituloBanda4)

const quantAlbunsDOM4 = document.createElement('li')
quantAlbunsDOM4.innerHTML =('Quantidade de Álbuns: 11')
listaBanda4.insertAdjacentElement('beforeend',quantAlbunsDOM3)

const emAtividadeDOM4 = document.createElement('li')
emAtividadeDOM4.innerHTML = ('Banda em atividade: NÃO')
listaBanda4.insertAdjacentElement('beforeend',emAtividadeDOM4)

const estilosMusicaisDOM4 = document.createElement('li')
estilosMusicaisDOM4.innerHTML = ('Estilos Musicais: Metal, Nu Metal')
listaBanda4.insertAdjacentElement('beforeend',estilosMusicaisDOM4)




// Semana 6 - 2. Utilize a função de busca criada no item 2 da semana 6 para fazer
// com que ao digitar um campo no input e apertar o botão,
// apenas os itens com nome igual ao da busca sejam renderizados na tela.

const meuInput = document.getElementById('tituloBusca')
const hitBanda1 = document.createElement('li')
const hitBanda2 = document.createElement('li')
const hitBanda3 = document.createElement('li')
const hitBanda4 = document.createElement('li')

const recebeInput = (event) =>{
    
        if (meuInput.value === 'Meshuggah'){
        hitBanda1.innerHTML = ('Música mais famosa: Bleed')
        listaBanda1.insertAdjacentElement('beforeend',hitBanda1)
    }else if (meuInput.value === 'CPM 22'){
        hitBanda2.innerHTML = ('Música mais famosa: Um minuto para o fim do mundo')
        listaBanda2.insertAdjacentElement('beforeend',hitBanda2)
    }else if (meuInput.value === 'Legião Urbana'){
        hitBanda3.innerHTML = ('Música mais famosa: NENHUMA POIS TODAS PÉSSIMAS')
        listaBanda3.insertAdjacentElement('beforeend',hitBanda3)
    } else if (meuInput.value === 'Slipknot'){
        hitBanda4.innerHTML = ('Música mais famosa: Before I Forget')
        listaBanda4.insertAdjacentElement('beforeend',hitBanda4)
    }else{
        alert('Digite o nome de uma das bandas para ver sua música mais famosa')
    }
}
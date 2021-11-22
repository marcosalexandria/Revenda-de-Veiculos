let carro=[] //array que contem os carros
let res=document.getElementById("res") //variável global de resposta

//função que vai adicionar os carros
const adc=()=>{
    let modelo=document.getElementById("modelo").value
    let preco=Number(document.getElementById("preco").value)
    carro.push({modelo: modelo,preco: preco.toFixed(2)})
    let lista=''
    
    //condição que vai verificar se os dados foram iformados corretamente
    if(modelo=="" || modelo==Number(modelo) || preco=="" || preco==isNaN(preco)){
        alert("ERRO, Verifique se os dados informados estão corretos")
    }else

        //laço de repetição que vai percorrer o array carro e adicionar os valores digitados pelo usuáriio
    for(let i=0;i<carro.length;i++){
        lista+= carro[i].modelo + " - " + "R$" + carro[i].preco + "<br>"
        res.innerHTML=lista
        document.getElementById("modelo").value=""
        document.getElementById("preco").value=""
    }
}
document.getElementById("adc").addEventListener("click", adc)

//função que vai receber o valor maximo digitado pelo cliente e listar os carros que estão dentro do orçamento do cliente
const filtro=()=>{
    let maximo=Number(prompt("Qual o preço máximo do veiculo que você deseja?"))
    let lista=''

        //condição que verá se o prompt está com valores válidos
    if(maximo=="" || maximo==0 || maximo==isNaN(maximo)){
        alert("ERRO, Verifique se os dados informados estão corretos e tente novamente")
    }else
    
    //laço que vai percorrer o array
    for(let i=0;i<carro.length;i++){
        //condição que verá qual carro se encaixa no valor giditado pelo cliente
        if(carro[i].preco<=maximo){
            lista+=carro[i].modelo + " - " + "R$" + carro[i].preco + "<br>"
            res.innerHTML=lista
        }
    }
}
document.getElementById("filtro").addEventListener("click", filtro)
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
const valores = [1, 2, 3, 4]


//const soma = valores.reduce((ac, v) => ac + v) 
//console.log(soma)

//every retorna um booleano
//const todosComecamComA = nomes.every(nome => nome.startsWith("A"))
//console.log(todosComecamComA)


//const res = nomes.map ((nome) => nome.lenght)
//console.log(res)

//git remote -v

//Definição de função
//o Java script repassa o codigo duas vezes uma lendo as declarações e a segunda executando
function hello(){
    console.log("hello")
}
hello()

function hello(nome){
    console.log("Hello, " + nome)
}
hello("Jose")

function soma (a, b){
    return a + b
}
const res = soma (1,2)
console.log(res)

//Valor default pra não aceitar nulable
//const triplo = function(n = 1){
//    return n * 3
//}

//Arrow function passa parametross e corpo
//() => {}
//omite-se o return
//const dobro = (n) => 2 * n

//se tiver só um parametro pode se omitir o parenteses


//Função de alta ordem função que recebe como parametro um função
function f (funcao){
    funcao()
}

//Função que devolve uma função
function g (){
    function outraFuncao(){
        console.log("Fui Produzida pela g")
    }
    return outraFuncao
}
g()()

const resultadoDaG = g()
console.log(resultadoDaG())

f (function(){
    console.log("Estou sendo passada para a f")
})

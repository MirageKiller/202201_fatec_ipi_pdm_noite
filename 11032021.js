//a mesma coisa que a calculoRapidinho faz sem usar o atalho
//sem usar o Promise.resolve
//const f = (n) => {
//    return new Promise((resolve, reject) => {
//    resolve((n * (n + 1))/2)
//})

//const calculoRapidinhi = (n) => {
//    return Promise.resolve((n * (n + 1))/2)
//}
//calculoRapidinhi(10).then((res) => console.log(res))


//PA 1+2+....+n
//const calculoDemorado = (n) =>{
//    let p = new Promise((resolve, reject) =>{
//        if(n < 0){
//            reject('Não use numeros negativos')
//        }
//        let res = 0
//        for (let i = 1; i<= n; i++)
//        res += i
//        resolve(res)
//    })
//    return p
//}
//calculoDemorado(10)
//.then((res) => {console.log(res)})
//.catch((erro) => {console.log('Erro: ' + erro)})


//Promisses - contem um fluxo de funções, tem três status: pending, fullfiled, rejected

//function devolveUmm(){
//    let p = new Promise(function(resolved, rejected){
//        resolved(1)
//    })
//    return p 
//}
//const resultado = devolveUmm()
//resultado.then((res)=> console.log(res))


//function devolveUm(){
//    return 1
//}
//const resultado = devolveUm()
//console.log(resultado)



//Modo FS - File system
//const fs = require ('fs')
//const abrirArquivo = function (nomeArquivo){
//    const exibirConteudo = function(erro, conteudo){
  //      if(erro){
//            console.log('Erro ' + erro)
//        }
//        else{
//            console.log('Ok: ' + conteudo.toString())
//            const dobro = +conteudo.toString() * 2
//            console.log("Valor calculado: " + dobro)
//            const finalizar = function(erro){
//                if(erro){
//                    console.log("Erro: " + erro)
//                }
//                else{
//                    console.log("OK, escreveu")
//                }
//            }
//            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
            //callback hell 
//        }
//    }
    //segundo parametro eh uma função callback
//    fs.readFile('arquivo.txt', exibirConteudo);
    //console.log('Outra coisa')
//}

//abrirArquivo('arquivo.txt')

//io Bound - entrada e saida de dados
//CPU Bound

//Js não tem processamento paralelo, tudo é executado sequencialmente,
//Operações io bound são executadas de maneira parelela mas gerenciadas pelo js

// const pessoa = {
//     nome: "Breno",
//     idade: 19,
//     apresentar: function (){
//         return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos.`
//     },
//     aniversario: function (){
//         this.idade++;
//     }
// };


// console.log(pessoa.apresentar())


function pessoa (_nome,_idade,_profissao){
    this.nome = _nome;
    this.idade = _idade;
    this.profissao = _profissao;
    this.apresentacao = function () { return `Meu nome é ${this.nome} tenho ${this.idade} e trabalho como ${this.profissao}\n`}
}

const aquele1 = new pessoa ("Breno", 19,"Devizinho");
console.log(aquele1.apresentacao())

const aquele2 = new pessoa ("jorge", 123,"professor");
console.log(aquele2.apresentacao())

const aquele3 = new pessoa ("arlindo", 32,"arroizero");
console.log(aquele3.apresentacao())


const listaAlunos = []
console.log("lista de Alunos " + listaAlunos)
listaAlunos.push(aquele1)
console.log("tamanho da lista de Alunos " + listaAlunos.length)
console.log("lista de Alunos " + listaAlunos)
console.log(listaAlunos[0])

console.log("add mais um")
listaAlunos.push(aquele2)
console.log("tamanho da lista de Alunos " + listaAlunos.length)
console.log("lista de Alunos " + listaAlunos)
console.log(listaAlunos[1])

console.log("add mais um")
listaAlunos.push(aquele3)
console.log("tamanho da lista de Alunos " + listaAlunos.length)
console.log("lista de Alunos " + listaAlunos)
console.log(listaAlunos[2])
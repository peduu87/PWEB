// Simprão, na lata
let hobbo1 = {
    matricula: 1,
    nome: "João",
    funcao: "Desenvolvedor"
};

console.log(hobbo1);


// Mais formal, usando função construtora...
// frescura pura se não for usado 8298 vezes, professora, desculpa.
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

let hobbo2 = new Funcionario(2, "Maria", "Designer");

console.log(hobbo2);


// Cria vazio (eca) e depois preenche (eca²).
let hobbo3 = new Object();

hobbo3.matricula = 3;
hobbo3.nome = "Pedro";
hobbo3.funcao = "Gerente";

console.log(hobbo3);
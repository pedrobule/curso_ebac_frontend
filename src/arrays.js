const alunos = [
    { nome: "João", nota: 7.5 },
    { nome: "Maria", nota: 5.8 },
    { nome: "Pedro", nota: 9.2 },
    { nome: "Ana", nota: 4.5 },
    { nome: "Lucas", nota: 6.0 }
];

  // Função para retornar alunos com nota >= 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

  // Exemplo de uso da função
const aprovados = alunosAprovados(alunos);

console.log(aprovados);

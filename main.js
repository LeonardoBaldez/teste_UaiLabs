//Lista com alunos e suas respectivas notas
const estudantes = [
    { nome: "Ana Silva",      notas: [8.5, 7.0, 9.0] },
    { nome: "Bruno Souza",    notas: [5.0, 4.5, 6.0] },
    { nome: "Carla Dias",     notas: [9.0, 9.5, 10.0] },
    { nome: "Daniel Rocha",   notas: [6.5, 7.0, 6.0] },
    { nome: "Eduarda Lima",   notas: [3.0, 5.0, 4.0] },
    { nome: "Felipe Alves",   notas: [7.5, 8.0, 7.0] },
    { nome: "Gabriela Melo",  notas: [10.0, 9.5, 9.0] },
    { nome: "Hugo Santos",    notas: [2.0, 3.5, 5.0] },
    { nome: "Igor Costa",     notas: [6.0, 6.0, 6.0] },
    { nome: "Julia Pereira",  notas: [8.0, 8.5, 9.0] },
    { nome: "Lucas Oliveira", notas: [5.5, 6.0, 5.0] },
    { nome: "Mariana Luz",    notas: [9.5, 8.0, 8.5] },
    { nome: "Nicolas Ferraz", notas: [4.0, 4.0, 5.0] },
    { nome: "Olivia Martins", notas: [7.0, 7.5, 7.0] },
    { nome: "Paulo Ribeiro",  notas: [6.0, 5.5, 7.0] }
];

//Função auxiliar para calcular médias
const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

//Função responsável por calcular a média individual de cada aluno
function calcularMediaIndividual(estudantes) {
    return estudantes.map(aluno => ({
        nome: aluno.nome,
        media: calcularMedia(aluno.notas) //Chamada da função auxiliar
    }))
}

//Função responsável por identificar o melhor aluno da turma
function melhorAluno(estudantes) {
    return estudantes.reduce((melhor, atual) => {
        return (atual.media > melhor.media) ? atual : melhor;
    });
}

//Função responsável por identificar o pior aluno da turma
function piorAluno(estudantes) {
    return estudantes.reduce((pior, atual) => {
        return (atual.media < pior.media) ? atual : pior;
    });
}

//Função responsável por calcular a média geral da turma
function mediaGeral(estudantes) {
    const somaTotal = estudantes.reduce((acc, aluno) => acc + aluno.media, 0);
    return somaTotal / estudantes.length;
}

//Função que retorna um relatório com o resultado de todas funções acima
function relatorioTurma() {
    console.log("=== RELATÓRIO DA TURMA ===");
    const mediasIndividuais = calcularMediaIndividual(estudantes);
    calcularMediaIndividual(estudantes);
    // Passo 2: Exibir médias individuais
    console.log("\n--- Médias Individuais ---");
    mediasIndividuais.forEach(aluno => {
        console.log(`${aluno.nome.padEnd(20)}: ${aluno.media.toFixed(2)}`);
    });
    const melhor = melhorAluno(mediasIndividuais);
    const pior = piorAluno(mediasIndividuais);
    const mediaGeral = mediaGeral(mediasIndividuais);
    console.log("\n--- Estatísticas Finais ---");
    console.log(`🏆 Melhor Aluno: ${melhor.nome} (Média: ${melhor.media.toFixed(2)})`);
    console.log(`⚠️ Pior Aluno:   ${pior.nome} (Média: ${pior.media.toFixed(2)})`);
    console.log(`📊 Média Geral:  ${mediaGeral.toFixed(2)}`);
}
relatorioTurma();
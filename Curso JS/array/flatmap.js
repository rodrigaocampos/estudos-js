const escola = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'gustavo',
        nota: '8.1'
    }, {
        nome: 'Ana',
        nota: '9.3'
    }]
}, {
    nome: 'turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: '8.9'
    }, {
        nome: 'roberto',
        nota: '7.3'
    }]
}]

const getNotaAluno = aluno => aluno.nota // pega a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno) // pega a nota da turma

const notas1 = escola.map(getNotasDaTurma) // pega as notas de todas as turmas
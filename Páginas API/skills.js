function calcularResultado() {
   
    let D = 0, I = 0, S = 0, C = 0;

    const formElements = document.getElementById('quizForm').elements;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            let valor = formElements[i].value;
            if (valor === 'D') D++;
            if (valor === 'I') I++;
            if (valor === 'S') S++;
            if (valor === 'C') C++;
        }
    }

    let resultado = '';
    let maiorValor = Math.max(D, I, S, C);

    if (maiorValor === D) resultado = 'Você tem um perfil Dominante (D): Principais Soft Skills: Liderança, Decisão rápida, Foco em resultados. Evolução necessária: Desenvolver mais empatia e paciência, aprender a ouvir e considerar diferentes opiniões.';
    if (maiorValor === I) resultado = 'Perfil Influente (I): Principais Soft Skills: Comunicação, Persuasão, Empatia, Carisma. Evolução necessária: Melhorar na organização, autossuficiência e foco em tarefas, além de aprender a lidar melhor com críticas.';
    if (maiorValor === S) resultado = 'Perfil Estável (S): Principais Soft Skills: Escuta ativa, Trabalho em equipe, Paciência, Apoio. Evolução necessária: Desenvolver maior assertividade, coragem para tomar decisões rápidas e maior capacidade de adaptação a mudanças.';
    if (maiorValor === C) resultado = 'Perfil Conforme (C): Principais Soft Skills: Análise, Organização, Atenção aos detalhes, Planejamento. Evolução necessária: Tornar-se mais flexível, melhorar a comunicação e aprender a lidar com situações imprevistas e menos estruturadas.';

    document.getElementById('result').innerHTML = resultado;
}
const conversation = {
    question1: {
        text: "Olá, equipe! Vamos começar nossa Sprint Review. O objetivo de hoje é revisar o que conseguimos entregar durante esta sprint, discutir o que deu certo e o que pode ser melhorado, além de validar o trabalho com o Product Owner. Para começarmos, gostaria de saber: o que foi feito nesta sprint em termos de funcionalidades ou entregas?",
        options: [
            { text: "Consegui desenvolver a página home com algumas de suas funcionalidades prontas.", next: "question2" },
            { text: "Fizemos a página para contato, conforme estipulado.", next: "question2" },
            { text: "Concluímos todas as funcionalidades referentes a interatividade com o usuário.", next: "question2" },
            { text: "Foram feitas alterações no design.", next: "question2" }
        ]
    },
    question2: {
        text: "Ótimo, vejo que foi um bom avanço em relação aos itens planejados. Agora, o que vocês acham que funcionou bem nesta sprint? O que deu certo no processo de desenvolvimento?",
        options: [
            { text: "A meta estabelecida foi clara e alcançável.", next: "question3" },
            { text: "A equipe de desenvolvimento foi muito produtiva.", next: "question3" },
            { text: "O novo design funcionou muito bem.", next: "question3" },
            { text: "O conteúdo foi dimensionado corretamente.", next: "question3" }
        ]
    },
    question3: {
        text: "Muito bom! Agora, se pudesse identificar algo que não tenha saído como esperado, o que vocês acham que poderia ser melhorado ou ajustado na próxima sprint?",
        options: [
            { text: "Acredito que cometemos um erro ao pular o MVP.", next: "question4" },
            { text: "Algumas funções ainda não estavam muito claras para o time.", next: "question4" },
            { text: "Tivemos problemas na comunicação entre os membros da equipe e o Product Owner.", next: "question4"},
            { text: "O excesso de tarefas sobrecarregou a equipe, apesar de conseguirmos finalizar tudo dentro do prazo.", next: "question4"}
        ]
    },
    question4: {
        text: "Entendido, parece que temos algumas áreas para melhorar. Agora, quero saber o que vocês aprenderam durante essa sprint, para que possamos corrigir os erros e melhorar o projeto.",
        options: [
            { text: "É preciso encurtar o caminho do usuário na sessão de compra.", next: "question5" },
            { text: "Devemos usar o feedback das mídias sociais.", next: "question5" },
            { text: "O time de desenvolvimento pode ser reduzido.", next: "question5"},
            { text: "Precisamos que os integrantes da equipe comuniquem bem as atualizações feitas no projeto.", next: "question5"}
        ]
    },
    question5: {
        text: "Algum item do backlog não foi devidamente concluído?",
        options: [
            { text: "Acabamos atrasando a entrega da tabela de produtos", next: "question6" },
            { text: "A implementação dos gráficos está incompleta", next: "question6" },
            { text: "O login não foi feito.", next: "question6" },
            { text: "Algumas imagens estão faltando", next: "question6"}
        ]
    },
    question6: {
        text: "Por fim, para nos organizarmos, o que deverá ser entregue na próxima sprint?",
        options: [
            { text: "Precisamos adicionar a opção de modo escuro.", next: "end" },
            { text: "Devemos implementar uma IA ao projeto.", next: "end" },
            { text: "Precisamos de um filtro para selecionar informações de um banco de dados.", next: "end" },
            { text: "O site precisa estar responsivo.", next: "end"}
        ]
    },
    end: {
        text: "Obrigado pela atenção de todos, finalizamos por aqui a nossa Sprint Review!",
        options: []
    }
};

const mensagensDiv = document.getElementById("mensagens"); 

function addMensagem(text, className) {
    const mensagemDiv = document.createElement("div"); 
    mensagemDiv.className = `mensagem ${className}`; 
    mensagemDiv.textContent = text; 
    mensagensDiv.appendChild(mensagemDiv); 
}

function showOptions(options) {
    const optionsDiv = document.createElement("div"); 
    optionsDiv.className = "options"; 
    options.forEach(option => {
        const button = document.createElement("button"); 
        button.className = "btnopçoes"; 
        button.textContent = option.text; 
        button.onclick = () => handleOptionClick(option.next); 
        optionsDiv.appendChild(button); 
    });
    mensagensDiv.appendChild(optionsDiv); 
}

function handleOptionClick(nextQuestion) {
    const next = conversation[nextQuestion]; 
    addMensagem(next.text, "bot-mensagem"); 
    if (next.options.length > 0) {
        showOptions(next.options); 
    }
}

function startConversation() {
    const firstQuestion = conversation.question1; 
    addMensagem(firstQuestion.text, "bot-mensagem"); 
    showOptions(firstQuestion.options); 
}

startConversation();

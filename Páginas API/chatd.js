document.addEventListener('DOMContentLoaded', function () {
    const conversation = {
        question1: {
            text: "Bom dia! Vamos começar nossa daily. Lembrando que o objetivo é alinhar nossas atividades e identificar possíveis impedimentos. Então vamos começar: O que você fez ontem, o que vai fazer hoje e houve algum impedimento?",
            options: [
                { text: "Ontem, terminei a parte de estruturação do layout da página principal. Também finalizei a responsividade dos dispositivos, então agora o site está com as proporções ajustadas tanto para desktop quanto para celular.", next: "question2" },
                { text: "Finalizei o formulário para contato na última página e comecei o seu layout também.", next: "question2" },
                { text: "Adicionei todas as tabelas de preço na página de valores.", next: "question2" },
            ]
        },
        question2: {
            text: "Que bom, tivemos um bom avanço. E hoje, o que você pretende fazer?",
            options: [
                { text: "Vou começar a implementação do modo claro.", next: "question3" },
                { text: "Pretendo ajustar a funcionalidade dos botões. Também irei começar a implementar o menu de navegação.", next: "question3" },
                { text: "Hoje vou começar a trabalhar na página de login.", next: "question3" },
            ]
        },
        question3: {
            text: "Certo, e houve alguma dificuldade ou impedimento até agora?",
            options: [
                { text: "Eu estou tentando colocar as imagens da clínica na página inicial, mas o arquivo com as imagens não está no diretório correto e não consigo acessá-las", next: "question4" },
                { text: "Estou tendo um problema com a versão do Node.js na minha máquina. O projeto não está rodando direito porque a versão que estou usando não é compatível.", next: "question4" },
                { text: "Estou com dúvida sobre o layout da página de contato. Não sei exatamente como a estrutura deve ficar, já que o designer não passou essa informação ainda", next: "question4" },
                { text: "Não, nenhum impedimento até agora.", next: "end" }
            ]
        },
        question4: {
            text: "Ok, vou resolver essas questões agora. Vou garantir que você tenha o acesso correto ao arquivo de imagens e verificar a versão do Node.js que estamos usando. Também vou falar com o designer para esclarecer o layout da página de contato. Você consegue avançar nas outras partes enquanto isso?",
            options: [
                { text: "Consigo sim, perfeitamente!", next: "end" }
            ]
        },
        end: {
            text: "Perfeito então, finalizamos por aqui a nossa Sprint Daily. Obrigado pela colaboração!",
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
            button.className = "btn btn-primary btnopçoes";
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

    $('#myModal').on('shown.bs.modal', function () {
        startConversation();
    });

});

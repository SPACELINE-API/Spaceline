let totalPerguntas = 15;
let acertos = 0;
let respostasMarcadas = 0;

function checkAnswer(button, isCorrect) {
    const respostaDiv = button.parentElement;
    const perguntaDiv = button.closest('.item');

    if (perguntaDiv.classList.contains('answered')) {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            respostasMarcadas--;
            if (isCorrect) acertos--;
            return;
        }
    } else {
        perguntaDiv.classList.add('answered');
    }

    button.classList.add('selected');
    respostasMarcadas++;

    if (isCorrect) {
        acertos++;
        respostaDiv.classList.add('correct');
        respostaDiv.classList.remove('incorrect');
    } else {
        respostaDiv.classList.add('incorrect');
        respostaDiv.classList.remove('correct');
    }

    const allButtons = perguntaDiv.querySelectorAll('button');
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('selected');
            btn.disabled = true;
        }
    });
}

function enviarRespostas() {
    if (respostasMarcadas < 15) {
        alert("Por favor, responda todas as perguntas antes de enviar.");
        return;
    }

    const percentual = (acertos / totalPerguntas) * 100;
    alert("Você completou a avaliação!\n\n" + "Porcentagem de acertos: " + percentual.toFixed(2) + "%");

    if (percentual >= 60) {
        const nomeUsuario = prompt("Parabéns! Você atingiu mais de 60% de acertos. Por favor, insira seu nome para gerar o certificado:");
        if (nomeUsuario) {
            gerarCertificado(nomeUsuario);
        } else {
            alert("Nome não informado. O certificado não será gerado.");
        }
    }

    totalPerguntas = 0;
    acertos = 0;
    respostasMarcadas = 0;
    document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('answered');
        item.querySelectorAll('button').forEach(btn => {
            btn.disabled = false;
        });
    });
}

function gerarCertificado(nome) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    var image = new Image();
    image.src = 'Imagens/Certificado Spaceline.png';
    image.onload = function() {
        var scaleFactor = 3;
        canvas.width = image.width * scaleFactor;
        canvas.height = image.height * scaleFactor;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        ctx.font = `${100 * scaleFactor}px Monotype Lato`;
        ctx.fillStyle = '#000'; 
        ctx.textAlign = 'center';

        var x = canvas.width / 2;
        var y = canvas.height * 0.45;

        ctx.fillText(nome, x, y);

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('landscape');

        var pageWidth = 297;
        var pageHeight = 210;
        var imgWidth = pageWidth;
        var imgHeight = (canvas.height / canvas.width) * pageWidth;

        if (imgHeight > pageHeight) {
            imgHeight = pageHeight;
            imgWidth = (canvas.width / canvas.height) * pageHeight;
        }

        var xOffset = (pageWidth - imgWidth) / 2;
        var yOffset = (pageHeight - imgHeight) / 2;
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', xOffset, yOffset, imgWidth, imgHeight);

        doc.save('Certificado_' + nome + '.pdf');
    };
}

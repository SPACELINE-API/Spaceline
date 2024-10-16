function checkAnswer(button, isCorrect) {
    const respostaDiv = button.parentElement; 

    if (isCorrect) {
        respostaDiv.classList.add('correct'); 
        respostaDiv.classList.remove('incorrect'); 
    } 
    else {
        respostaDiv.classList.add('incorrect'); 
        respostaDiv.classList.remove('correct'); 
    }
}

const ctx = document.getElementById('graficoComparacao').getContext('2d');
let graficoComparacao = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5'], 
        datasets: [{
            label: 'Expectativa (Horas)', 
            data: [0, 0, 0, 0, 0], 
            borderColor: 'rgba(54, 162, 235, 1)', 
            backgroundColor: 'rgba(54, 162, 235, 0.2)', 
            fill: true, 
            tension: 0.4 
        }, {
            label: 'Tempo Real (Horas)', 
            data: [0, 0, 0, 0, 0], 
            borderColor: 'rgba(255, 99, 132, 1)', 
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true, 
            tension: 0.4 
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function atualizarGrafico() {
    
    const expectativa1 = document.getElementById('expectativa1').value;
    const tempoReal1 = document.getElementById('real1').value;

    const expectativa2 = document.getElementById('expectativa2').value;
    const tempoReal2 = document.getElementById('real2').value;

    const expectativa3 = document.getElementById('expectativa3').value;
    const tempoReal3 = document.getElementById('real3').value;

    const expectativa4 = document.getElementById('expectativa4').value;
    const tempoReal4 = document.getElementById('real4').value;

    const expectativa5 = document.getElementById('expectativa5').value;
    const tempoReal5 = document.getElementById('real5').value;

    graficoComparacao.data.datasets[0].data = [
        expectativa1, expectativa2, expectativa3, expectativa4, expectativa5
    ];  

    graficoComparacao.data.datasets[1].data = [
        tempoReal1, tempoReal2, tempoReal3, tempoReal4, tempoReal5
    ];  

    graficoComparacao.update();
}

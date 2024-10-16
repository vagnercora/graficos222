// Grafico de Pizza
const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Você trabalha?',
            data: [79, 21],
            backgroundColor: [
                '#F05454', '#30475E',
            ],
            bordercolor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    Options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Você trabalha?'
            }
        }
    }
});

const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Facebook', 'Instagram','Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Qual é a sua ocupação?',
            data: [45, 30, 15, 10],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            bordercolor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    Options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Qual é a sua ocupação?'
            }
        }
    }
});



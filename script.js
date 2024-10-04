// Grafico de Pizza
const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza
    type: 'pie',
    data: {
        labels: ['Facebook', 'Instagram','Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Participação nas redes sociais',
            data: [45, 30, 15, 10],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            bordercolor: '#DDDDDD',
            borderWidth: 1
        }]
    }
    )
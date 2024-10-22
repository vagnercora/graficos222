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
        labels: ['administrativo', 'tecnico','gerencial', 'outros'],
        datasets: [{
            label: 'Qual é a sua ocupação?',
            data: [10, 6, 0, 84],
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


const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['menos de 20', '21 a 40','41 a 60', '60 ou mais'],
        datasets: [{
            label: 'Quantas horas você trabalha por semana?',
            data: [57, 43, 0, 0],
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

const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['muito satisfeito', 'satisfeito','neutro', 'insatifeito'],
        datasets: [{
            label: 'Qual é o seu nível de satisfação no trabalho?',
            data: [26, 10, 52, 12],
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

const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['remoto', 'presencial','hibrido'],
        datasets: [{
            label: 'Qual é o seu tipo de trabalho?',
            data: [5, 95, 0],
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

const ctxPizza =document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['sim', 'não'],
        datasets: [{
            label: 'Você participa de treinamentos anualmente?',
            data: [85, 15],
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
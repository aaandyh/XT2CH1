function fRader() {
    var radarChart = document.getElementById('fRadar').getContext('2d');

    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#fff';

    var fRader = new Chart(radarChart, {
        type:'radar',
        data:{
            labels:['Mars', 'Venus', 'Aarde', 'Maan', 'Jupiter','Saturnis'],
            datasets:[{

                label:'Afstand van Falcon 9 ',
                data:[65,59,90,81,56,55,40],
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'orange',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Radar',
                fontStyle: 'bold',
                fontFamily: 'Helvetica'

            },
            scale: {
                angleLines: {
                    display: true,
                    color: '#FFF',
                },
                gridLines: {
                    display: true,
                    color: '#FFF',
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                }
            },
            legend:{
                fontColor: 'black',
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function brandstofMeter() {

    var cirkelChart = document.getElementById('brandstof').getContext('2d');

    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = '#fff';

    var brandstof = new Chart(cirkelChart, {
        type:'pie',
        data:{
            labels:['Waterstof', 'Ethanol', 'Benzine', 'Hydrazine', 'Kerosine','Methaan', 'Propeen'],
            datasets:[{
                label:'Afstand van Falcon 9 ',
                data:[61,87,53,65,58,57,42],
                fill: true,
                backgroundColor: ['orange','blue','white','red','green','grey','purple'],
                borderColor: 'orange',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Brandstof',
                fontStyle: 'bold',
                fontFamily: 'Helvetica'
            },
            legend:{
                fontColor: 'black',
                display:true
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function raketInfo() {
    var raketChart = document.getElementById('raketInfo').getContext('2d');

    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = 'white';

    var raketInfo = new Chart(raketChart, {
        type:'horizontalBar',
        data: {
            labels:['G-Force', 'Acceleratie', 'Zwaartekracht' ],
            datasets: [{
                data: [33, 46, 53, 84, 87],
                backgroundColor: ['blue','grey','red'],
            }]
    },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Raket informatie',
                fontStyle: 'bold',
                fontFamily: 'Helvetica'
            },
            legend:{
                fontColor: 'black',
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}


function startScript(){
    fRader();
    brandstofMeter();
    raketInfo();
}
window.onload = startScript();

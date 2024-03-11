//on window load run a function
window.onload = function() {
    //get context of id myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    //create new chart object
    var myChart = new Chart(ctx, {
        //type of chart
        type: 'bar',
        //data of chart
        data: {
            //labels of chart
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            //datasets of chart
            datasets: [{
                //label of dataset
                label: '# of Votes',
                //data of dataset
                data: [12, 19, 3, 5],
                //backgroundColor of dataset
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                //borderColor of dataset
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                //borderWidth of dataset
                borderWidth: 1
            }]
        },
        //options of chart
        options: {
            //scales of chart
            scales: {
                //yAxes of chart
                yAxes: [{
                    //ticks of yAxes
                    ticks: {
                        //beginAtZero of ticks
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
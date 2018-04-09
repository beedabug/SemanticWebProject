google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Percentage Preterm Births');
      //data.addColumn('number', 'Percentage Prenatal Care');
      /*data.addRows([
        [1,  37.8, 80.8],
        [2,  30.9, 69.5],
        [3,  25.4,   57],
        [4,  11.7, 18.8],
        [5,  11.9, 17.6],
      ]);*/
      data.addRows([
        [1,  37.8],
        [2,  30.9],
        [3,  25.4],
        [4,  11.7],
        [5,  11.9],
      ]);

       var options = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 100},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 100},
          legend: 'none'
        };

      /*var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500
      };*/

      var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));

      chart.draw(data, options);
    }


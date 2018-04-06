google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Percentage Preterm Births');
      data.addColumn('number', 'Percentage Prenatal Care');

      data.addRows([
        [1,  37.8, 80.8],
        [2,  30.9, 69.5],
        [3,  25.4,   57],
        [4,  11.7, 18.8],
        [5,  11.9, 17.6],
      ]);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('myChart'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }


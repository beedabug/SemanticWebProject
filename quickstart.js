google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', '1st Trimester');
      data.addColumn('number', '2nd Trimester');
      data.addColumn('number', '3rd Trimester');
      data.addColumn('number', 'None');
      data.addColumn('number', 'Preterm births');

      data.addRows([
        [1999, 37.8, 80.8, 30.9, 69.5, 20],
        [2000, 30.9, 69.5, 37.8, 80.8, 30],
        [2001, 25.4, 57, 11.7, 18.8, 40],
        [2002, 11.7, 18.8, 5.4, 57, 60],
        [2003, 11.9, 17.6, 29, 34.2, 20],
      ]);

      var options = {
        chart: {
          title: 'Prenatal Care vs. Preterm Births in Chicago',
          subtitle: 'in Percentage per Year'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('myChart'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }

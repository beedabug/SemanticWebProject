google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
<<<<<<< HEAD
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
=======
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
>>>>>>> f7256ba0b806233ecfff0e8b462bb75edb734c7f
      ]);

       var options = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 100},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 100},
          legend: 'none'
        };

      /*var options = {
        chart: {
          title: 'Prenatal Care vs. Preterm Births in Chicago',
          subtitle: 'in Percentage per Year'
        },
        width: 900,
        height: 500
      };*/

      var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));

      chart.draw(data, options);
    }

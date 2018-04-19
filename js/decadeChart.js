function drawColumnChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Avg. Percentage Preterm Births');
      data.addColumn('number', 'Avg. Percentage Prenatal Care');

      for(var i =0 ; i < barMatrix[0].length; i++) {
        // var array = barMatrix[i];
        //console.log(array[0][1]);
        data.addRow(barMatrix[0][i], barMatrix[1][i], barMatrix[2][i]);
      }

        var options = {
        title: 'Avg. Preterm vs Avg Prenatal over 10 Year Period',
        trendlines: {
          0: {type: 'linear', lineWidth: 5, opacity: .3},
          1: {type: 'exponential', lineWidth: 10, opacity: .3}
        },
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Percentage'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

}


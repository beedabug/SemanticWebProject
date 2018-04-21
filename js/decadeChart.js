function drawColumnChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Avg. Percentage Preterm Births');
      data.addColumn('number', 'Avg. Percentage Prenatal Care');
      //console.log(avgYears);
      var max1 = 0;
      for(var i =0 ; i < avgYears.length; i++) {
        // data.addRow([avgYears[0][i], avgYears[1][i], avgYears[2][i]]);
        data.addRow(avgYears[i]);
        if(avgYears[i][2] > max1) {
          max1 = avgYears[i][2]
        }
      }
      //console.log(data);
        var options = {
        title: 'Avg. Preterm vs Avg Prenatal over 10 Year Period',
        trendlines: {
          0: {type: 'linear', lineWidth: 5, opacity: .3},
          1: {type: 'exponential', lineWidth: 10, opacity: .3}
        },
        hAxis: {
          viewWindow: {
            min: 1995,
            max: 2015
          },
          title: 'Year'
        },
        vAxis: {
          viewWindow: {
            min: 0,
            max: max1 + 20
          },
          title: 'Percentage'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

}


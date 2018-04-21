function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Percentage Preterm Births');
      data.addColumn('number', 'Percentage Prenatal Care');
      var max1 = 0;
      for(var i =0 ; i < matrix.length; i++) {
        var array = matrix[i];
        //console.log(array[0][1]);
        data.addRow([array[0][0], array[0][1]]);
        if(array[0][1] > max1) {
          max1 = array[0][1];
        }
      }

       var options = {
          title: 'Preterm Birth Percentage vs. Population Percentage Receiving Prenatal Care',
          hAxis: {title: 'Preterm_Percent', minValue: 0, maxValue: 25},
          vAxis: {title: 'Prenatal_Percent', minValue: 0, maxValue: max1 + 10},
          legend: 'none',
          trendlines: { 0: {
            type: 'linear',
            visibleInLegend: true,
          } }  
        };
        /* var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };*/

    
      var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));

      chart.draw(data, options);
}


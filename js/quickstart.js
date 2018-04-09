function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Percentage Preterm Births');
      data.addColumn('number', 'Percentage Prenatal Care');
      for(var i =0 ; i < matrix.length; i++) {
        var array = matrix[i];
        //console.log(array[0][1]);
        data.addRow([array[0][0], array[0][1]]);
      }

       var options = {
          title: 'Preterm_Percent vs. Prenatal_Percent',
          hAxis: {title: 'Preterm_Percent', minValue: 0, maxValue: 25},
          vAxis: {title: 'Prenatal_Percent', minValue: 55, maxValue: 100},
          legend: 'none'
        };

    
      var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));

      chart.draw(data, options);
}


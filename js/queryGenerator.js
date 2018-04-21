var matrix = [ ] ;
var year;
function myFunction() {

    year = document.getElementById("mySelect").value;
    category = document.getElementById("category").value;
    var param = category;
    var querytxt1 = "prefix prenatal:<https://data.cityofchicago.org/resource/_2q9j-hh6g/>"+
    "prefix preterm:<https://data.cityofchicago.org/resource/rhy3-4x2f/>"+
    "SELECT ?preterm_percent ?area ?prenatal_percent "+
    "WHERE {"+
     "?cell prenatal:trimester_prenatal_care_began '" + category + "' ."+
     "?cellterm preterm:percent_"+year+" ?preterm_percent."+
     "?cellterm preterm:community_area_name ?area."+
     "?cell prenatal:community_area_name ?area."+
     "?cell prenatal:percent_"+year+" ?prenatal_percent."+
    "}";

    // Insert your fuseki SPARQL query here. It is returning XML output, but it can also return JSON, CSV and TSV also.
    var queryurl1 = "http://localhost:3030/ds/query?query=" + encodeURIComponent(querytxt1) + "&output=xml";

    var xmlquery1 = new XMLHttpRequest(); // ...AJAX object instantiation

    xmlquery1.open('GET', queryurl1);

    // Probably need these headers...
    xmlquery1.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
    xmlquery1.setRequestHeader ('Accept', 'application/sparql-results+xml');
    // Set up callback to get the response asynchronously...
    xmlquery1.onreadystatechange = function() {
        console.log(xmlquery1.responseText);
        if (xmlquery1.readyState == 4) {
            if (xmlquery1.status == 200) {
                var xml =  (new DOMParser()).parseFromString(xmlquery1.responseText, "text/xml");
                var results = xml.getElementsByTagName("result");
                var k = 0;
                //console.log(users);
                for(var i = 0; i < results.length; i++) {
                    var result = results[i];
                    var bindings = result.getElementsByTagName("binding");
                    k = 0;
                    var array = [ [],[] ];
                    for(var j = 0; j < bindings.length; j = j + 2) {
                         var binding = bindings[j];
                         var literal = binding.getElementsByTagName("literal");
                         //console.log(parseFloat(literal[0].innerHTML));
                         array[0][k] = parseFloat(literal[0].innerHTML)
                         k++;
                         
                    }
                    matrix[i] = array;
                }
            }
            else {
                // Some kind of error occurred...
                alert("Sparql query error: " + xmlquery1.status + " " + xmlquery1.responseText);
            }
            // You could also write code here to process data, but the 'else' would need to 'return' or
            //   this code could not rely on the 'responseText'.
        }
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }

    // Send the query to the endpoint...
    xmlquery1.send();
}


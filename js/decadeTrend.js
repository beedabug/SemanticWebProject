
var avgYears = [ ];
function init() {
    preTermArray = [];
    preNatalArray = [];
    avgPreTerms = [];
    avgPreNatals = [];
    category = document.getElementById("category").value;
    //document.getElementById("demo2").innerHTML = "You selected: " + years[thisYear];
    var param = category;
    var querytxt1 = "prefix prenatal:<https://data.cityofchicago.org/resource/_2q9j-hh6g/> "+
    "prefix preterm:<https://data.cityofchicago.org/resource/rhy3-4x2f/> "+
    "SELECT ?preterm_percent1999 ?preterm_percent2000 ?preterm_percent2001 ?preterm_percent2002 "+ 
    "?preterm_percent2003 ?preterm_percent2004 ?preterm_percent2005 ?preterm_percent2006 ?preterm_percent2007 "+ 
    "?preterm_percent2008 ?preterm_percent2009 "+
    "?area "+
    "?prenatal_percent1999 ?prenatal_percent2000 ?prenatal_percent2001  ?prenatal_percent2002 "+
    "?prenatal_percent2003 ?prenatal_percent2004 ?prenatal_percent2005  ?prenatal_percent2006 "+
    "?prenatal_percent2007 ?prenatal_percent2008 ?prenatal_percent2009 "+
    "WHERE { "+
     "?cell prenatal:trimester_prenatal_care_began '" + category + "' ."+
     "?cellterm preterm:percent_1999"+" ?preterm_percent1999. "+
     "?cellterm preterm:percent_2000"+" ?preterm_percent2000. "+
     "?cellterm preterm:percent_2001"+" ?preterm_percent2001. "+
     "?cellterm preterm:percent_2002"+" ?preterm_percent2002. "+
     "?cellterm preterm:percent_2003"+" ?preterm_percent2003. "+
     "?cellterm preterm:percent_2004"+" ?preterm_percent2004. "+
     "?cellterm preterm:percent_2005"+" ?preterm_percent2005. "+
     "?cellterm preterm:percent_2006"+" ?preterm_percent2006. "+
     "?cellterm preterm:percent_2007"+" ?preterm_percent2007. "+
     "?cellterm preterm:percent_2008"+" ?preterm_percent2008. "+
     "?cellterm preterm:percent_2009"+" ?preterm_percent2009. "+
     "?cellterm preterm:community_area_name ?area. "+
     "?cell prenatal:community_area_name ?area. "+
     "?cell prenatal:percent_1999"+" ?prenatal_percent1999. "+
     "?cell prenatal:percent_2000"+" ?prenatal_percent2000. "+
     "?cell prenatal:percent_2001"+" ?prenatal_percent2001. "+
     "?cell prenatal:percent_2002"+" ?prenatal_percent2002. "+
     "?cell prenatal:percent_2003"+" ?prenatal_percent2003. "+
     "?cell prenatal:percent_2004"+" ?prenatal_percent2004. "+
     "?cell prenatal:percent_2005"+" ?prenatal_percent2005. "+
     "?cell prenatal:percent_2006"+" ?prenatal_percent2006. "+
     "?cell prenatal:percent_2007"+" ?prenatal_percent2007. "+
     "?cell prenatal:percent_2008"+" ?prenatal_percent2008. "+
     "?cell prenatal:percent_2009"+" ?prenatal_percent2009. "+
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
        if (xmlquery1.readyState == 4) {
            if (xmlquery1.status == 200) {
                var xml =  (new DOMParser()).parseFromString(xmlquery1.responseText, "text/xml");
                //console.log(xmlquery1.responseText);
                var results = xml.getElementsByTagName("result");
                var k = 0;
                var barMatrix = new Array(results.length);
                //console.log(users);
                for(var i = 0; i < results.length; i++) {
                    var result = results[i];
                    var bindings = result.getElementsByTagName("binding");
                    var arrayPreterm = [ ];
                    var arrayPrenatal= [ ];
                    for(var j = 0; j < bindings.length; j++) {
                         var binding = bindings[j];
                         var literal = binding.getElementsByTagName("literal");
                         if(j <=10 ){
                             arrayPreterm.push(parseFloat(literal[0].innerHTML));
                         } else if( j >= 12) {
                             arrayPrenatal.push(parseFloat(literal[0].innerHTML));
                         } 
                    }

                    barMatrix[i] = new Array(2);
                    barMatrix[i][0] = arrayPreterm;
                    barMatrix[i][1] = arrayPrenatal;
                }
            }
            else {
                // Some kind of error occurred...
                alert("Sparql query error: " + xmlquery1.status + " " + xmlquery1.responseText);
            }
            //console.log(barMatrix);
            var sumPreterm = 0.0;
            var avgPreterm = 0.0;
            for( var year = 0 ; year <= 10; year++){
                var sumPreterm = 0.0;
                var avgPreterm = 0.0;
                var sumPrenatal = 0.0;
                var avgPrenatal = 0.0;
                for(var i = 0; i < barMatrix.length; i++){
                    sumPreterm += barMatrix[i][0][year];
                    sumPrenatal += barMatrix[i][1][year];
                }
                avgPreterm = sumPreterm / barMatrix.length;
                avgPrenatal = sumPrenatal / barMatrix.length;
                avgYears[year] = new Array(3);
                avgYears[year][0] = year+1999;
                avgYears[year][1] = avgPreterm;
                avgYears[year][2] = avgPrenatal;
            }
            // You could also write code here to process data, but the 'else' would need to 'return' or
            //   this code could not rely on the 'responseText'.
        }  
        google.charts.load('current', {packages: [['corechart']]});
        google.charts.setOnLoadCallback(drawColumnChart);
    }
    // Send the query to the endpoint...
    xmlquery1.send();
    }

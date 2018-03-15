google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawTempLine);
google.charts.setOnLoadCallback(drawpHBar);
google.charts.setOnLoadCallback(drawOTwoDonut);

//temperature graph

function drawTempLine() {

    var data = google.visualization.arrayToDataTable([
        ['Temperature', '37°C', '40°C'],
        ['1',  0.1,      0.1],
        ['2',  0.6,      0.8],
        ['3',  1.2,       1.6],
        ['4',  1.3,      1.7],
        ['5',  1.3,      1.5],
        ['6',  1.4,      1.2]
    ]);

    var options = {
        title: "Effects of post induction temperature on cell protein levels",
        curveType: 'function',
        legend: { position: 'bottom' },
        'width':750,
        'height':500
    };

    var chart = new google.visualization.LineChart(document.getElementById('temperature_donut'));

    chart.draw(data, options);
}

//pH graph

function drawpHBar() {

    var data = google.visualization.arrayToDataTable([
        ['pH', '3', '7', '9'],
        ['1',  0.1, 0.1, 0.1],
        ['2',  0.4, 0.8, 0.8],
        ['3',  0.8, 1.4, 1.2],
        ['4',  1.2, 1.7, 1.5],
        ['5',  1.3, 1.7, 1.5],
        ['6',  0.9, 1.8, 1.5]
    ]);

    var options = {
        title: "Effects of post induction temperature on cell growth",
        curveType: 'function',
        legend: { position: 'bottom' },
        'width':750,
        'height':500
    };

    var chart = new google.visualization.LineChart(document.getElementById('ph_donut'));

    chart.draw(data, options);
}

// oxygen graph

function drawOTwoDonut() {

    var data = google.visualization.arrayToDataTable([
        ['dissolved oxygen', 'percentage'],
        ['0.3',     45],
        ['0.4',     30],
        ['0.5',     10],
        ['0.6',     15]
    ]);

    var options = {
        title: "Levels of dissolved oxygen",
        pieHole: 0.4,
        pieSliceTextStyle: {
            color:'black'
        },
        legend: 'right',
        'width':750,
        'height':500
    };

    var chart = new google.visualization.PieChart(document.getElementById('o_two_donut'));
    chart.draw(data, options);
}


// ChangeGraph will return the div IDs to manipulate which graph to view
function changeGraph(graphToShowDivID){
    // graphsToHide : array : IDs of graphs to hide
    // graphsToShow : string : ID of graph to show

    var graphIDNames = ["#o_two_donut","#ph_donut","#temperature_donut"];
    var graphsToHide = [];
    var graphToShow = "";

    for(var i=0; i< graphIDNames.length; i++){
        if(graphToShowDivID === graphIDNames[i]){
            graphToShow = graphIDNames[i]
        }else{
            graphsToHide.push(graphIDNames[i])
        }
    }

    return{
        graphsToHide : graphsToHide,
        graphToShow : graphToShow
    }
}

$(document).ready(function(){

    $("#ph_donut").hide();
    $("#o_two_donut").hide();

    $("#button-temp").click(function(){
        var graphInfo = changeGraph("#temperature_donut");

        var graphsToHide = graphInfo.graphsToHide;
        var graphToShow = graphInfo.graphToShow;

        for (var i = 0; i< graphsToHide.length; i++){
            $(graphsToHide[i]).hide();
        }
        $(graphToShow).show();

        $("#applications-description").text("Effects of post induction temperature on cell growth");

    });

    $("#button-pH").click(function(){
        var graphInfo = changeGraph("#ph_donut");

        var graphsToHide = graphInfo.graphsToHide;
        var graphToShow = graphInfo.graphToShow;

        for (var i = 0; i< graphsToHide.length; i++){
            $(graphsToHide[i]).hide()
        }
        $(graphToShow).show();

        $("#applications-description").text("Effects of pH on cell growth");
    });

    $("#button-O2").click(function(){
        var graphInfo = changeGraph("#o_two_donut");

        var graphsToHide = graphInfo.graphsToHide;
        var graphToShow = graphInfo.graphToShow;

        for (var i = 0; i< graphsToHide.length; i++){
            $(graphsToHide[i]).hide()
        }

        $(graphToShow).show();

        $("#applications-description").text("Impact of dissolved oxygen on cell growth");
    });

});
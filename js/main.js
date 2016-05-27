d3.csv('data/population.csv', display);

var graph = GroupedBarChart()
                .width(1000)
                .height(600)
                .showLegend(true);

function display(error, data) {
    console.log(data);
    graph.x(function(d) {return d.year})
            .y(function(d) {return [
                {india: +d.india},
                {us: +d.us},
                // {uk: +d.uk},
                // {russia: +d.russia},
                // {china: +d.china},
                // {japan: +d.japan},
                // {germany: +d.germany}
            ]});
            
    var chartWrapper = d3.select('#map')
                        .datum([data])
                        .call(graph);
}
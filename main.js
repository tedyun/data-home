var data = [4, 8, 15, 16, 23, 42];
var container = d3.select(".bodycontainer");

var barLinearScale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

container.append("div")
  .attr("class", "barchart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return barLinearScale(d) + "px"; })
    .text(function(d) { return d; });

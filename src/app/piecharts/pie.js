// var chart = c3.generate({
//     data: {
//         // iris data from R
//         columns: [
//             ['data1', 30],
//             ['data2', 120],
//         ],
//         type : 'pie',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     }
// });

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
//             ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
//             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
//         ]
//     });
// }, 1500);

// setTimeout(function () {
//     chart.unload({
//         ids: 'data1'
//     });
//     chart.unload({
//         ids: 'data2'
//     });
// }, 2500);

var data = [
    ['good', 25],
    ['bad', 10],
    ['neutral', 65]
  ];
  
  var chart = c3.generate({
      bindto: '#piechart',
      data: {
          columns: data,
          type: 'pie'
      },
      legend: {
          show: false
      },
      tooltip: {
        position: function (data, width, height, element) {
          return {top: 0, right: 0}
        }
      },
      onrendered: function(){
        var self = this;
        console.log(self)
        
        d3Pie = d3.select('.c3-chart-arcs');
        pieSize = d3Pie.node().getBBox();
        pieTransform = d3.transform(d3Pie.attr("transform")); // credit : http://stackoverflow.com/questions/20340263/d3-retrieve-and-add-to-current-selections-attribute-value
  
        // MODIFY PIE POSITION
        var posX = 0+pieSize.width/1.5;
        var posY = pieTransform.translate[1];
        d3Pie.attr('transform', 'translate('+posX+','+posY+')')
      }
  });
  
  // ADD CUSTOM LEGEND
  var d3legend = d3.select('.c3-chart').append('g')
    .attr('transform', 'translate('+(pieSize.width + pieSize.width/3)+',100)')
    .attr('class', 'custom-legend')
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function(d, i){
      return 'translate(0, '+i*60+')';
    })
    .attr('data-id', function (d) { 
      return d[0]; 
    })
    .on('mouseover', function (id) {
      chart.focus(id);
    })
    .on('mouseout', function (id) {
      chart.revert();
    })
  
  var legendRect = d3legend.append('rect')
    .attr('class', function(d, i){
      return 'custom-legend-color is-'+d[0];
    })
    .attr('width', 40)
    .attr('height', 40)
    .attr('rx', 4)
    .attr('ry', 4)
    .style('fill', function(d, i){
      return chart.color(d[0])
    });
  
  var legendValue = d3legend.append('text')
    .attr('class', 'custom-legend-value')
    .attr('x', 50)
    .text(function(d, i){
      return (d[1]/100)*100 + '%';
    });
  
  var legendTitle = d3legend.append('text')
    .attr('class', 'custom-legend-title')
    .attr('x', 50)
    .attr('y', 30)
    .attr('font-size', '15px')
    .text(function(d, i){
      return d[0];
    });    
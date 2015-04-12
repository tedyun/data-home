// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

var chartoption1 = {
    title: {
        text: 'Monthly Average Temperature',
        //x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        //x: -20
    },
    plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
    }],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
};

var dataJSON = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    categoryLabel: "Month",
    valueSeries: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, null, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],
    valueLabel: 'Temperature (°C)',
    valueSuffix: '°C'
};

// var chartdata1 = {
//     title: {
//         text: 'Monthly Average Temperature',
//         //x: -20 //center
//     },
//     subtitle: {
//         text: 'Source: WorldClimate.com',
//         //x: -20
//     },
//     xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },
//     yAxis: {
//         title: {
//             text: 'Temperature (°C)'
//         },
//         plotLines: [{
//             value: 0,
//             width: 1,
//             color: '#808080'
//         }]
//     },
//     tooltip: {
//         valueSuffix: '°C'
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle',
//         borderWidth: 0
//     },
//     series: [{
//         name: 'Tokyo',
//         data: [7.0, 6.9, 9.5, null, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//     }, {
//         name: 'New York',
//         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//     }, {
//         name: 'Berlin',
//         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//     }, {
//         name: 'London',
//         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//     }]
// };

// datautils.parseTable('tsv', 'data.tsv', 'Name', 'Value', function(oFormattedData) {
//     var chart1 = chartfactory.createChart("bar", oFormattedData, "chart1");
//     chart1.render();
// });

datautils.parseTable('csv', 'gasdata.csv', 'date', ['price per gallon', 'mileage'], 'gas price and mileage', function(oFormattedData) {
    var chart1 = chartfactory.createChart("line", oFormattedData, "chart1");
    chart1.render();
});

// var chart1 = chartfactory.createChart("line", dataJSON, "chart1");
// chart1.render();

var oVegaSpecTest = {
    "width": 400,
    "height": 200,
    "padding": {"top": 10, "left": 30, "bottom": 20, "right": 10},
    "data": [
        {
            "name": "table",
            "values": [
                {"x":"A", "y":28}, {"x":"B", "y":55}, {"x":"C", "y":43},
                {"x":"D", "y":91}, {"x":"E", "y":81}, {"x":"F", "y":53},
                {"x":"G", "y":19}, {"x":"H", "y":87}, {"x":"I", "y":52}
            ]
        }
    ],
    "scales": [
        {"name":"x", "type":"ordinal", "range":"width", "domain":{"data":"table", "field":"data.x"}},
        {"name":"y", "range":"height", "nice":true, "domain":{"data":"table", "field":"data.y"}}
    ],
    "axes": [
        {"type":"x", "scale":"x"},
        {"type":"y", "scale":"y"}
    ],
    "marks": [
        {
            "type": "rect",
            "from": {"data":"table"},
            "properties": {
                "enter": {
                    "x": {"scale":"x", "field":"data.x"},
                    "width": {"scale":"x", "band":true, "offset":-1},
                    "y": {"scale":"y", "field":"data.y"},
                    "y2": {"scale":"y", "value":0}
                },
                "update": { "fill": {"value":"steelblue"} },
                "hover": { "fill": {"value":"red"} }
            }
        }
    ]
};

function parseVegaSpec(spec) {
    vg.parse.spec(spec, function(chart) {
        chart({el: "#chart2"}).update();
    });
}
parseVegaSpec(oVegaSpecTest);
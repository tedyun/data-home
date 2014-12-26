function Chart () {
    var _data = null;
    var _container = null;

    this.data = function () {
        if (arguments.length) {
            _data = arguments[0];
            return this;
        } else {
            return _data;
        }
    };
    this.container = function () {
        if (arguments.length) {
            _container = arguments[0];
            return this;
        } else {
            return _container;
        }
    };
    this.render = function () {
        console.log("Cannot call render on this chart base class");
    };
}

function HighChart () {
    HighChart.baseConstructor.call(this);

    var _type = null;
    this.type = function () {
        if (arguments.length) {
            _type = arguments[0];
            return this;
        } else {
            return _type;
        }
    };

    this.render = function () {
        if (!this.data()) {
            console.log("No data for this line chart.");
            return;
        } else if (!this.container()) {
            console.log("No container for this line chart.");
            return;
        }

        // set chart type
        if (jsx.isNull(this.data().chart)) {
            this.data().chart = { type: this.type() };
        } else {
            this.data().chart.type = this.type();
        }

        // render high chart
        $(this.container())
            .width(800)
            .height(600)
            .highcharts(this.data());
    };
}
jsx.extend(HighChart, Chart);

function LineChart () {
    LineChart.baseConstructor.call(this);
    this.type("line");
}
jsx.extend(LineChart, HighChart);

function AreaChart () {
    AreaChart.baseConstructor.call(this);
    this.type("area");
}
jsx.extend(AreaChart, HighChart);

function BarChart () {
    BarChart.baseConstructor.call(this);
    this.type("bar");
}
jsx.extend(BarChart, HighChart);

function Layout() {
  return false;
}

function TableLayout() {
  return false;
}

var chartfactory = {};

chartfactory.createChart = function (sChartType, oData, elContainer) {
    var oChartClasses = {
        line: LineChart,
        area: AreaChart,
        bar: BarChart
    };

    if (oChartClasses.hasOwnProperty(sChartType)) {
        var oChart = new oChartClasses[sChartType] ();
        oChart.data(oData)
              .container(elContainer);
        return oChart;
    } else {
        console.log("Chart type " + sChartType + " is invalid.");
    }
};

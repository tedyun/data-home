function Chart () {
    var _data = null;
    var _container = null;
    this.data = function () {
        if (arguments.length) {
            _data = arguments[0];
            return this;
        } else{
            return _data;
        }
    };
    this.container = function () {
        if (arguments.length) {
            _container = arguments[0];
            return this;
        } else{
            return _container;
        }
    };
    this.render = function () {
        console.log("Cannot call render on base class");
    };
}

function LineChart () {
    LineChart.baseConstructor.call(this);
    this.render = function () {
        if (!this.data()) {
            console.log("No data for this line chart.");
            return;
        } else if (!this.container()) {
            console.log("No container for this line chart.");
            return;
        }

        $(this.container())
            .width(800)
            .height(600)
            .highcharts(this.data());
    };
}
jsx.extend(LineChart, Chart);

function Layout() {
  return false;
}

function TableLayout() {
  return false;
}

var chartfactory = {};

chartfactory.createChart = function (sChartType, oData, elContainer) {
    var oChartClasses = {
        line: LineChart
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

// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

define([
    'jquery',
    'jsy',
    'knockout',
    'highcharts',
    'uifactory'
], function (
    $,
    jsy,
    ko,
    hightcharts,
    uifactory
) {
    /**
     * Chart data model class
     * @contructor
     */
    function ChartDataModel (oJsonData) {
        var _jsonData = oJsonData;
        
        /**
         * Hich chart data
         * @return {object} high chart data object
         */
        this.buildHighChartData = function () {
            var oHighChartData = {};
            for (var sProp in _jsonData) {
                switch (sProp) {
                    case "categories":
                        jsy.setProperty(oHighChartData, ["xAxis", "categories"],
                            _jsonData[sProp]);
                        break;
                    case "categoryLabel":
                        jsy.setProperty(oHighChartData, ["xAxis", "title", "text"],
                            _jsonData[sProp]);
                        break;
                    case "valueSeries" :
                        jsy.setProperty(oHighChartData, ["series"],
                            _jsonData[sProp]);
                        break;
                    case "valueLabel" :
                        jsy.setProperty(oHighChartData, ["yAxis", "title", "text"],
                            _jsonData[sProp]);
                        break;
                    case "valueSuffix" :
                        jsy.setProperty(oHighChartData, ["tooltip", "valueSuffix"],
                            _jsonData[sProp]);
                        break;
                    default :
                        console.log("Option " + sProp + " is not supported.");
                }
            }
            return jsy.clone(oHighChartData);
        };
        
        /**
         * Hich chart data
         * @return {object} high chart data object
         */
        this.buildJETChartData = function () {
            var oJETChartData = function () {};
            for (var sProp in _jsonData) {
                switch (sProp) {
                    case "categories":
                        oJETChartData.groups = ko.observableArray(_jsonData[sProp]);
                        break;
                    // case "categoryLabel":
                    //     jsy.setProperty(oJETChartData, ["xAxis", "title", "text"],
                    //         _jsonData[sProp]);
                    //     break;
                    case "valueSeries" :
                        oJETChartData.series = ko.observableArray(_jsonData[sProp]);
                        break;
                    // case "valueLabel" :
                    //     jsy.setProperty(oJETChartData, ["yAxis", "title", "text"],
                    //         _jsonData[sProp]);
                    //     break;
                    // case "valueSuffix" :
                    //     jsy.setProperty(oJETChartData, ["tooltip", "valueSuffix"],
                    //         _jsonData[sProp]);
                    //     break;
                    default :
                        console.log("Option " + sProp + " is not supported.");
                }
            }
            return oJETChartData;
        };
    }

    /**
     * Chart class
     * @contructor
     */
    function Chart () {
        var _options = {};
        var _data = null;
        var _container = null;
        var _categories = null;
        var _dataSeries = [];

        /**
         * Get/set data
         */
        this.data = function () {
            if (arguments.length) {
                _data = new ChartDataModel(arguments[0]);
                return this;
            } else {
                return _data;
            }
        };
        
        /**
         * Get/set option
         */
        this.option = function () {
            if (arguments.length > 1) {
                _options[arguments[0]] = jsy.clone(arguments[1]);
                return this;
            } else if (arguments.length === 1) {
                return jsy.clone(_options[arguments[0]]);
            } else {
                console.log("Must specify an option name.");
            }
        };

        /**
         * Get/set container
         */
        this.container = function () {
            if (arguments.length) {
                _container = arguments[0];
                return this;
            } else {
                return _container;
            }
        };

        this.categories = function () {
            // TODO
        };

        this.refreshSeries = function () {
            _dataSeries = [];
        };

        this.addSeries = function () {
            // TODO
        };

        this.render = function () {
            console.log("Cannot call render on this chart base class");
        };
    }

    /**
     * HighChart class
     * @contructor
     */
    function HighChart () {
        HighChart.baseConstructor.call(this);

        var _type = null;
        
        /**
         * Get/set type
         */
        this.type = function () {
            if (arguments.length) {
                _type = arguments[0];
                return this;
            } else {
                return _type;
            }
        };

        /**
         * Render chart
         */
        this.render = function () {
            if (!this.data()) {
                console.log("No data for this line chart.");
                return;
            } else if (!this.container()) {
                console.log("No container for this line chart.");
                return;
            }

            var oHighChartData = this.data().buildHighChartData();
            
            // set chart type
            jsy.setProperty(oHighChartData, ["chart", "type"], this.type());

            // render high chart
            $(this.container())
                .width(800)
                .height(600)
                .highcharts(oHighChartData);
        };
    }
    jsy.extend(HighChart, Chart);

    /**
     * LineChart class
     * @contructor
     */
    function LineChart () {
        LineChart.baseConstructor.call(this);
        this.type("line");
    }
    jsy.extend(LineChart, HighChart);

    /**
     * AreaChart class
     * @contructor
     */
    function AreaChart () {
        AreaChart.baseConstructor.call(this);
        this.type("area");
    }
    jsy.extend(AreaChart, HighChart);

    /**
     * BarChart class
     * @contructor
     */
    function BarChart () {
        BarChart.baseConstructor.call(this);
        this.type("bar");
    }
    jsy.extend(BarChart, HighChart);

    function Layout() {
      return false;
    }

    function TableLayout() {
      return false;
    }

    var chartfactory = {};

    /**
     * Create a chart
     * @param {string} chart type
     * @param {object} data object
     * @param {HTMLElement} HTML container
     */
    chartfactory.createChart = function (sChartType, oData, elContainer) {
        var oChartClasses = {
            line: LineChart,
            area: AreaChart,
            bar: BarChart
        };
        
        if (typeof elContainer === "string") {
            elContainer = document.getElementById(elContainer);
        }

        if (oChartClasses.hasOwnProperty(sChartType)) {
            var oChart = new oChartClasses[sChartType] ();
            oChart.data(oData)
                  .container(elContainer);
            return oChart;
        } else {
            console.log("Chart type " + sChartType + " is invalid.");
        }
    };
    return chartfactory;
});

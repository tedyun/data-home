// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

define([
    'jquery',
    'knockout',
    'ojs/ojcore',
    // no arguments
    'ojs/ojknockout',
    'ojs/ojbutton',
    // stylesheets
    'css!thirdparty/oraclejet/css/libs/oj/v2.0.1/alta/oj-alta-min'
], function (
    $,
    ko,
    oj
) {
    var uifactory = {};
    
    uifactory.createButton = function ($parent, sId, sLabel, fCallback) {
        var $button = $(document.createElement("button"))
            .appendTo($parent)
            .attr("id", sId)
            .attr("data-bind", "ojComponent: { component: 'ojButton', label: '" + sLabel + "' }")
            .click(fCallback);
        return $button;
    };
    
    return uifactory;
});

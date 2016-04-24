// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

define([
    'jquery',
    'jsy'
], function (
    $,
    jsy
) {
    var datautils = {};

    /**
     * Parse csv/tsv table
     * @param {string}
     * @param {string}
     * @param {string}
     * @param {array|string}
     * @param {string}
     * @param {function}
     */
    datautils.parseTable = function (sFileType, sDataURL, sCategoryKey, aValueKeys, sValueLabel, fCallback) {
        var oGetters = {
            "tsv": d3.tsv,
            "csv": d3.csv
        };
        if (!oGetters.hasOwnProperty(sFileType)) {
            console.log("Error in datautils.parseTable.");
            return;
        }
        
        if (typeof aValueKeys === "string") {
            aValueKeys = [aValueKeys];
        }
        
        (oGetters[sFileType])(sDataURL, function (aRowArray) {
            var aCategories = [];
            var aValueSeries = [];
            var i = 0, j = 0;
            
            // initialize value series array
            for (j = 0; j < aValueKeys.length; j++) {
                aValueSeries.push({
                    name: aValueKeys[j],
                    data: []
                });
            }
            
            for (i = 0; i < aRowArray.length; i++) {
                var oRow = aRowArray[i];
                
                // save category data
                aCategories.push(oRow[sCategoryKey]);
                
                // save value data
                for (j = 0; j < aValueKeys.length; j++) {
                    var sValueKey = aValueKeys[j];
                    aValueSeries[j].data.push(datautils.convertToNumber(oRow[sValueKey]));
                }
            }
            var oFormatted = {
                categoryLabel: sCategoryKey,
                categories: aCategories,
                valueSeries: aValueSeries,
                valueLabel: sValueLabel
            };
            fCallback(oFormatted);
        });
    };

    /**
     * Convert string to number. Return null if conversion fails.
     * @param {string}
     * @return {string}
     */
    datautils.convertToNumber = function (sInput) {
        var nOutput = parseFloat(sInput.replace(/[^0123456789\.]/g, ""));
        return isNaN(nOutput)? null : nOutput;
    };
    
    return datautils;
});

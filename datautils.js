var datautils = {};

datautils.parseTable = function (sFileType, sDataURL, sCategoryKey, sValueKey, fCallback) {
    var oGetters = {
        "tsv": d3.tsv,
        "csv": d3.csv
    };
    if (!oGetters.hasOwnProperty(sFileType)) {
        console.log("Error in datautils.parseTable.");
        return;
    }
    (oGetters[sFileType])(sDataURL, function (aRowArray) {
        var aCategories = [];
        var aValueSeries = [];
        for (var i = 0; i < aRowArray.length; i++) {
            var oRow = aRowArray[i];
            aCategories.push(oRow[sCategoryKey]);
            aValueSeries.push(+oRow[sValueKey]);
        }
        var oFormatted = {
            categoryLabel: sCategoryKey,
            categories: aCategories,
            valueSeries: [{
                name: sValueKey,
                data: aValueSeries
            }]
        };
        fCallback(oFormatted);
    });
};

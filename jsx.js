// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

var jsx = {};
jsx.extend = function (subClass, baseClass){
    function Inheritance() { }
    Inheritance.prototype = baseClass.prototype;
    subClass.prototype = new Inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = baseClass;
    subClass.superClass = baseClass.prototype;
};

jsx.clone = function (obj) {
    return $.extend(true, {}, obj);
};

jsx.isNull = function (obj) {
    return obj === undefined || obj === null;
};

jsx.isPrimitive = function (obj) {
    return typeof obj === "number" || typeof obj === "string" || typeof obj === "boolean";
};

jsx.setProperty = function (obj, aPropertyChain, value) {
    if (aPropertyChain.length > 1) {
        var aNextPropertyChain = aPropertyChain.slice(1, aPropertyChain.length);
        var sFirstProp = aPropertyChain[0];
        if (jsx.isNull(obj[sFirstProp])) {
            obj[sFirstProp] = jsx.setProperty({},
                aNextPropertyChain, value);
        } else if (jsx.isPrimitive(obj[sFirstProp])) {
            console.log("Error in jsx.setProperty. A primitive value is overwritten.");
            obj[sFirstProp] = jsx.setProperty({},
                aNextPropertyChain, value);
        } else {
            obj[sFirstProp] = jsx.setProperty(obj[aPropertyChain[0]],
                aNextPropertyChain, value);
        }
        return obj;
    } else if (aPropertyChain.length === 1) {
        obj[aPropertyChain[0]] = value;
        return obj;
    } else {
        console.log("Error in jsx.setProperty.");
    }
};

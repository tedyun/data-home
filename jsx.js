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

jsx.setProperty = function (obj, aPropertyChain, value) {
    if (aPropertyChain.length > 1) {
        var aNextPropertyChain = aPropertyChain.slice(1, aPropertyChain.length);
        if (jsx.isNull(obj[aPropertyChain[0]])) {
            obj[aPropertyChain[0]] = jsx.setProperty({},
                aNextPropertyChain, value);
        } else {
            obj[aPropertyChain[0]] = jsx.setProperty(obj[aPropertyChain[0]],
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

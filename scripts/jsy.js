// Copyright (c) 2014, Taedong Yun.
// All rights reserved.

define([
], function (
) {
    var jsy = {};
    jsy.extend = function (subClass, baseClass){
        function Inheritance() { }
        Inheritance.prototype = baseClass.prototype;
        subClass.prototype = new Inheritance();
        subClass.prototype.constructor = subClass;
        subClass.baseConstructor = baseClass;
        subClass.superClass = baseClass.prototype;
    };

    jsy.clone = function (obj) {
        return $.extend(true, {}, obj);
    };

    jsy.isNull = function (obj) {
        return obj === undefined || obj === null;
    };

    jsy.isPrimitive = function (obj) {
        return typeof obj === "number" || typeof obj === "string" || typeof obj === "boolean";
    };

    jsy.setProperty = function (obj, aPropertyChain, value) {
        if (aPropertyChain.length > 1) {
            var aNextPropertyChain = aPropertyChain.slice(1, aPropertyChain.length);
            var sFirstProp = aPropertyChain[0];
            if (jsy.isNull(obj[sFirstProp])) {
                obj[sFirstProp] = jsy.setProperty({},
                    aNextPropertyChain, value);
            } else if (jsy.isPrimitive(obj[sFirstProp])) {
                console.log("Error in jsy.setProperty. A primitive value is overwritten.");
                obj[sFirstProp] = jsy.setProperty({},
                    aNextPropertyChain, value);
            } else {
                obj[sFirstProp] = jsy.setProperty(obj[aPropertyChain[0]],
                    aNextPropertyChain, value);
            }
            return obj;
        } else if (aPropertyChain.length === 1) {
            obj[aPropertyChain[0]] = value;
            return obj;
        } else {
            console.log("Error in jsy.setProperty.");
        }
    };
    return jsy;
});

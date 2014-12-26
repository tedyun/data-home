var jsx = {};
jsx.extend = function (subClass, baseClass){
    function Inheritance() { }
    Inheritance.prototype = baseClass.prototype;
    subClass.prototype = new Inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = baseClass;
    subClass.superClass = baseClass.prototype;
};

jsx.isNull = function (obj) {
    return obj === undefined || obj === null;
};

jsx.clone = function (obj) {
    return $.extend(true, {}, obj);
};

var jsx = {};
jsx.extend = function (subClass, baseClass){
    function Inheritance() { }
    Inheritance.prototype = baseClass.prototype;
    subClass.prototype = new Inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = baseClass;
    subClass.superClass = baseClass.prototype;
};

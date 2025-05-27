function classCss(name) {
  return {
    name: name,
    prop: [],
    pseudoClasses: "",
    addProp: addProp,
    removeProp: removeProp,
    render: render,
  };
}
var addProp = function (prop) {
  if (this.prop.indexOf(prop) === -1) {
    this.prop.push(prop);
  }
};
var removeProp = function (prop) {
  if (this.prop.indexOf(prop) !== -1) {
    this.prop.splice(this.prop.indexOf(prop), 1);
  }
};
var render = function () {
  var cssClass = "." + this.name;
  if (this.pseudoClasses) cssClass += ":" + this.pseudoClasses;
  cssClass += "{\n";
  for (var i = 0; i < this.prop.length; i++) {
    cssClass += this.prop[i].name + ": " + this.prop[i].value + ";\n";
  }
  cssClass += "}\n";
  return cssClass;
};

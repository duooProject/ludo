function component(tag) {
  var stat = {};
  return {
    tag: tag,
    stat: stat,
    id: "",
    classes: [],
    child: [],
    att: [],
    styles: [],
    events: {},
    addId: addId,
    addClass: addClass,
    addStyle: addStyle,
    removeStyle: removeStyle,
    removeClass: removeClass,
    addEvents: addEvents,
    removeEvents: removeEvents,
    addChild: addChild,
    removeChild: removeChild,
    addAtt: addAtt,
    modifyAtt: modifyAtt,
    addStat: addStat,

    renderComponent: render,
  };
}
var addId = function (id) {
  if (!this.id) this.id = id;
  return this;
};
var addClass = function (cl) {
  if (this.classes.indexOf(cl) === -1) this.classes.push(cl);
  return this;
};
var removeClass = function (cl) {
  if (this.classes.indexOf(cl) !== -1)
    this.classes.splice(this.classes.indexOf(cl), 1);
  return this;
};
var addStyle = function (style) {
  if (this.styles.indexOf(style) === -1) this.styles.push(style);
  return this;
};
var removeStyle = function (style) {
  if (this.styles.indexOf(style) !== -1)
    this.styles.splice(this.styles.indexOf(style), 1);
  return this;
};
var addEvents = function (event, fn) {
  this.events[event] = fn;
  return this;
};
var removeEvents = function (event) {
  if (this.events[event]) delete this.events[event];
  return this;
};
var addChild = function (child) {
  if (this.child.indexOf(child) === -1) this.child.push(child);
  return this;
};
var removeChild = function (child) {
  if (this.child.indexOf(child) !== -1)
    this.child.splice(this.child.indexOf(child), 1);
  return this;
};
var addAtt = function (att) {
  if (this.att.indexOf(att) === -1) this.att.push(att);
  return this;
};
var modifyAtt = function (att) {
  if (this.att.indexOf(att) !== -1) this.att[this.att.indexOf(att)] = att;
  return this;
};
var addStat = function (stat) {
  this.stat[stat.name] = stat.value;
  return this;
};
var render = function () {
  var el = document.createElement(this.tag);
  if (this.id) el.id = this.id;
  if (this.classes.length > 0) el.className = this.classes.join(" ");
  if (this.styles.length > 0)
    for (var i = 0; i < this.styles.length; i++) {
      el.style[this.styles[i].name] = this.styles[i].value;
    }
  if (this.att.length > 0) {
    for (var i = 0; i < this.att.length; i++) {
      if (!this.att[i].value) el.setAttribute(this.att[i].name, "");
      else el.setAttribute(this.att[i].name, this.att[i].value);
    }
  }
  if (this.events) {
    for (var event in this.events) {
      el.addEventListener(event, this.events[event]);
    }
  }
  for (var i = 0; i < this.child.length; i++) {
    if (
      typeof this.child[i] === "string" ||
      typeof this.child[i] === "number"
    ) {
      el.appendChild(document.createTextNode(this.child[i]));
    } else if (typeof this.child[i].renderComponent === "function") {
      el.appendChild(this.child[i].renderComponent());
    } else if (this.child[i] instanceof HTMLElement) {
      el.appendChild(this.child[i]);
    }
  }
  return el;
};

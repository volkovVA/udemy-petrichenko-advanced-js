import $ from '../core';

$.prototype.setAttr = function(attrName, value) {
  if (!attrName || !value) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
      this[i].setAttribute(attrName, value);
    }
  return this;
};

$.prototype.removeAttr = function(attrName) {
  if (!attrName) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }
  return this;
};
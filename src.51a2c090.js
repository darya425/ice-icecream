parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\icon-home.svg":[["icon-home.b9d983b3.svg","eYXP"],"eYXP"],"./..\\images\\icon-home-active.svg":[["icon-home-active.6107ae9c.svg","MCdh"],"MCdh"]}],"zYHn":[function(require,module,exports) {
$(".comments-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".slider-nav",dots:!0,focusOnSelect:!1,adaptiveHeight:!0});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./slick");
},{"./sass/main.scss":"clu1","./slick":"zYHn"}]},{},["Focm"], null)
//# sourceMappingURL=/ice-icecream/src.51a2c090.js.map
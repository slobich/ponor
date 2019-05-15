/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendors_jquery_backstretch_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors/jquery.backstretch.min.js */ "./src/vendors/jquery.backstretch.min.js");
/* harmony import */ var _vendors_jquery_backstretch_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendors_jquery_backstretch_min_js__WEBPACK_IMPORTED_MODULE_0__);

jQuery.backstretch("dist/img/PonorBg.jpg", {
  speed: 1000
});

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/vendors/jquery.backstretch.min.js":
/*!***********************************************!*\
  !*** ./src/vendors/jquery.backstretch.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function (a, d, p) {
  a.fn.backstretch = function (c, b) {
    (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch");
    0 === a(d).scrollTop() && d.scrollTo(0, 0);
    return this.each(function () {
      var d = a(this),
          g = d.data("backstretch");

      if (g) {
        if ("string" == typeof c && "function" == typeof g[c]) {
          g[c](b);
          return;
        }

        b = a.extend(g.options, b);
        g.destroy(!0);
      }

      g = new q(this, c, b);
      d.data("backstretch", g);
    });
  };

  a.backstretch = function (c, b) {
    return a("body").backstretch(c, b).data("backstretch");
  };

  a.expr[":"].backstretch = function (c) {
    return a(c).data("backstretch") !== p;
  };

  a.fn.backstretch.defaults = {
    centeredX: !0,
    centeredY: !0,
    duration: 5E3,
    fade: 0
  };

  var r = {
    left: 0,
    top: 0,
    overflow: "hidden",
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    zIndex: -999999
  },
      s = {
    position: "absolute",
    display: "none",
    margin: 0,
    padding: 0,
    border: "none",
    width: "auto",
    height: "auto",
    maxHeight: "none",
    maxWidth: "none",
    zIndex: -999999
  },
      q = function q(c, b, e) {
    this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
    this.images = a.isArray(b) ? b : [b];
    a.each(this.images, function () {
      a("<img />")[0].src = this;
    });
    this.isBody = c === document.body;
    this.$container = a(c);
    this.$root = this.isBody ? l ? a(d) : a(document) : this.$container;
    c = this.$container.children(".backstretch").first();
    this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
    this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
      position: "static" === c ? "relative" : c,
      zIndex: "auto" === b ? 0 : b,
      background: "none"
    }), this.$wrap.css({
      zIndex: -999998
    }));
    this.$wrap.css({
      position: this.isBody && l ? "fixed" : "absolute"
    });
    this.index = 0;
    this.show(this.index);
    a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
      this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize());
    }, this));
  };

  q.prototype = {
    resize: function resize() {
      try {
        var a = {
          left: 0,
          top: 0
        },
            b = this.isBody ? this.$root.width() : this.$root.innerWidth(),
            e = b,
            g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(),
            j = e / this.$img.data("ratio"),
            f;
        j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
        this.$wrap.css({
          width: b,
          height: g
        }).find("img:not(.deleteable)").css({
          width: e,
          height: j
        }).css(a);
      } catch (h) {}

      return this;
    },
    show: function show(c) {
      if (!(Math.abs(c) > this.images.length - 1)) {
        var b = this,
            e = b.$wrap.find("img").addClass("deleteable"),
            d = {
          relatedTarget: b.$container[0]
        };
        b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
        this.index = c;
        clearInterval(b.interval);
        b.$img = a("<img />").css(s).bind("load", function (f) {
          var h = this.width || a(f.target).width();
          f = this.height || a(f.target).height();
          a(this).data("ratio", h / f);
          a(this).fadeIn(b.options.speed || b.options.fade, function () {
            e.remove();
            b.paused || b.cycle();
            a(["after", "show"]).each(function () {
              b.$container.trigger(a.Event("backstretch." + this, d), [b, c]);
            });
          });
          b.resize();
        }).appendTo(b.$wrap);
        b.$img.attr("src", b.images[c]);
        return b;
      }
    },
    next: function next() {
      return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
    },
    prev: function prev() {
      return this.show(0 === this.index ? this.images.length - 1 : this.index - 1);
    },
    pause: function pause() {
      this.paused = !0;
      return this;
    },
    resume: function resume() {
      this.paused = !1;
      this.next();
      return this;
    },
    cycle: function cycle() {
      1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
        this.paused || this.next();
      }, this), this.options.duration));
      return this;
    },
    destroy: function destroy(c) {
      a(d).off("resize.backstretch orientationchange.backstretch");
      clearInterval(this.interval);
      c || this.$wrap.remove();
      this.$container.removeData("backstretch");
    }
  };
  var l,
      f = navigator.userAgent,
      m = navigator.platform,
      e = f.match(/AppleWebKit\/([0-9]+)/),
      e = !!e && e[1],
      h = f.match(/Fennec\/([0-9]+)/),
      h = !!h && h[1],
      n = f.match(/Opera Mobi\/([0-9]+)/),
      t = !!n && n[1],
      k = f.match(/MSIE ([0-9]+)/),
      k = !!k && k[1];
  l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k);
})(jQuery, window);

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/main.js ./src/less/style.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/slobich/Sites/ponor/site/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /Users/slobich/Sites/ponor/site/src/less/style.less */"./src/less/style.less");


/***/ })

/******/ });
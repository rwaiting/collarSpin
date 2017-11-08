/**
 * collarSpin  1.0.0
 * Author:  rwaiting
 * License: MIT
 * Date:    2017-11-06
 */
;(function (undefined) {
    'use strict';
    var collarSpin = function (params) {
        var defaults = {
            speed: 10,
            showerWidth: 600,
            showerHeight: 300,
            container: 'collarWrapper',
            list: 'collarItem',
            prevBtn: '',
            nextBtn: '',
        };
        this.params = this.extend(defaults, params, true);
        this.intTimer = 0;
        this._init();
    };

    collarSpin.prototype = {
        _init: function () {
            var _this = this;
            var s = _this.params;
            var cR = 0;
            var ccR = 0;
            var i = _this.getClass(s.list);
            var l = i.length;
            var r = Math.PI / 180 * 360 / l;
            for (var n = 0; n < l; n++) {
                var e = i[n];
                e.rotate = (r * n + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
                e.onclick = function () {
                    clearInterval(_this.intTimer);
                    _this.intTimer = 0;
                    cR = Math.PI / 2 - this.rotate;
                    _this.intTimer = setInterval(function () {
                        rotate();
                    }, s.speed);
                }
            }
            var rotate = function () {
                ccR = (ccR + 2 * Math.PI) % (2 * Math.PI);
                if (cR - ccR < 0) {
                    cR = cR + 2 * Math.PI;
                }
                if (cR - ccR < Math.PI) {
                    ccR = ccR + (cR - ccR) / 19;
                } else {
                    ccR = ccR - (2 * Math.PI + ccR - cR) / 19;
                }
                if (Math.abs((cR + 2 * Math.PI) % (2 * Math.PI) - (ccR + 2 * Math.PI) % (2 * Math.PI)) < Math.PI / 720) {
                    ccR = cR;
                    clearInterval(_this.intTimer);
                    _this.intTimer = 0;
                }
                for (var m = 0; m < l; m++) {
                    var zIndex = 99 - m;
                    var e = i[m];
                    var w, h;
                    var sinR = Math.sin(r * m + ccR + Math.PI / 2);
                    var cosR = Math.cos(r * m + ccR + Math.PI / 2);
                    w = h = Math.floor(100 + 50 * 0.8 * sinR);
                    e.style.width = w + "px";
                    e.style.height = w + "px";
                    e.style.top = Math.floor(s.showerHeight / 2 + sinR * s.showerHeight / 2 - w / 2) + "px";
                    e.style.left = Math.floor(s.showerWidth / 2 + cosR * s.showerWidth / 2 - h / 2) + "px";
                    e.style.zIndex = zIndex;
                }
            };
            rotate();
        },
        // _rotate: function (r, cr, ccr) {
        //     var _this = this;
        //     var s = _this.params;
        //     var cR = cr;
        //     var ccR = ccr;
        //     var i = _this.getClass(s.list);
        //     var l = i.length;
        //     var ccR = (ccR + 2 * Math.PI) % (2 * Math.PI);
        //     if (cR - ccR < 0) {
        //         cR = cR + 2 * Math.PI;
        //     }
        //     if (cR - ccR < Math.PI) {
        //         ccR = ccR + (cR - ccR) / 19;
        //     } else {
        //         ccR = ccR - (2 * Math.PI + ccR - cR) / 19;
        //
        //     }
        //     if (Math.abs((cR + 2 * Math.PI) % (2 * Math.PI) - (ccR + 2 * Math.PI) % (2 * Math.PI)) < Math.PI / 720) {
        //         ccR = cR;
        //         clearInterval(_this.intTimer);
        //         _this.intTimer = 0;
        //     }
        //     for (var m = 0; m < l; m++) {
        //         var zIndex = 99 - m;
        //         var e = i[m];
        //         var w, h;
        //         var sinR = Math.sin(r * m + ccR + Math.PI / 2);
        //         var cosR = Math.cos(r * m + ccR + Math.PI / 2);
        //         w = h = Math.floor(100 + 50 * 0.8 * sinR);
        //         e.style.width = w + "px";
        //         e.style.height = w + "px";
        //         e.style.top = Math.floor(s.showerHeight / 2 + sinR * s.showerHeight / 2 - w / 2) + "px";
        //         e.style.left = Math.floor(s.showerWidth / 2 + cosR * s.showerWidth / 2 - h / 2) + "px";
        //         e.style.zIndex = zIndex;
        //     }
        //     if (s.prevBtn && s.nextBtn) {
        //         _this._button(r, cR);
        //     }
        //     return cR, ccR;
        // },
        // _button: function (r, cR) {
        //     var _this = this;
        //     var s = _this.params;
        //     var p = _this.getClass(s.prevBtn);
        //     var n = _this.getClass(s.nextBtn);
        //     p.onclick = function () {
        //         cR = (cR + r + 2 * Math.PI) % (2 * Math.PI);
        //         _this.intTimer = setInterval(function () {
        //             _this._rotate(r, cR)
        //         }, s.speed);
        //     };
        //     n.onclick = function () {
        //         cR = (cR - r + 2 * Math.PI) % (2 * Math.PI);
        //         _this.intTimer = setInterval(function () {
        //             _this._rotate(r, cR)
        //         }, s.speed);
        //     };
        // },
        extend: function (f, o, r) {
            for (var key in o) {
                if (o.hasOwnProperty(key) && (!f.hasOwnProperty(key) || r)) {
                    f[key] = o[key];
                }
            }
            return f;
        },
        getClass: function (g) {
            var r = document.getElementsByClassName(g);
            return r;
        }
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = collarSpin;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define([], function () {
            'use strict';
            return window.collarSpin;
        });
    } else {
        window.collarSpin = collarSpin;
    }
}());
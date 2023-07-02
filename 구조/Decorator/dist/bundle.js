/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/Decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/Decorator/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        var _this = _super.call(this, targetItem) || this;
        _this.number = 0;
        return _this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style=\"color: yellow\">+</span>".concat("-".repeat(this.getMaxLength() - 2), "<span style=\"color: yellow\">+</span>");
        }
        return ('<span style="color: yellow">|</span>' +
            this.targetItem.getString(i - 1) +
            " ".repeat(this.getMaxLength() - this.getLength(i - 1)) +
            '<span style="color: yellow">|</span>');
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/Decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/Decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/Decorator/Item.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/Decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/Decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join("\n");
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/Decorator/LineNumberDecorator.ts":
/*!**********************************************!*\
  !*** ./src/Decorator/LineNumberDecorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/Decorator/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return ("<span style=\"color: green\">" +
            "".concat(i).padStart(4, "0") +
            ": </span>".concat(this.targetItem.getString(i)));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/Decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/Decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/Decorator/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style=\"color: red\">".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(i)) +
            "<span style=\"color: red\">".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/Decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/Decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/Decorator/Item.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        return Math.max.apply(Math, this.data.map(function (str) { return str.length; }));
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Decorator_BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator/BoxDecorator */ "./src/Decorator/BoxDecorator.ts");
/* harmony import */ var _Decorator_LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decorator/LineNumberDecorator */ "./src/Decorator/LineNumberDecorator.ts");
/* harmony import */ var _Decorator_SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Decorator/SideDecorator */ "./src/Decorator/SideDecorator.ts");
/* harmony import */ var _Decorator_Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decorator/Strings */ "./src/Decorator/Strings.ts");




var strs = new _Decorator_Strings__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add("Hello!");
strs.add("Lorem, ipsum dolor sit");
strs.add("amet consectetur adipisicing elit.");
strs.add("Minus enim dolorem veritatis");
strs.add("aspernatur laborum molestias totam nam error");
strs.add("adipisci nobis aperiam porro magnam sequi vero");
strs.add("consectetur iste quia atque nostrum qui quos,");
strs.add("odio id itaque! Inventore, iusto.");
strs.add("Quas dolores cum error!");
var $pre = document.querySelector("pre");
strs.print($pre);
// SideDecorator 장식 추가
var sidDec = new _Decorator_SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, '"');
sidDec.print($pre);
var linDec = new _Decorator_LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](sidDec);
linDec.print($pre);
// 이어서 BoxDecorator 장식 추가
var boxDec = new _Decorator_BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](linDec);
boxDec.print($pre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmF0ZWd5Ly4vc3JjL0RlY29yYXRvci9Cb3hEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvRGVjb3JhdG9yL0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9EZWNvcmF0b3IvSXRlbS50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9EZWNvcmF0b3IvTGluZU51bWJlckRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9EZWNvcmF0b3IvU2lkZURlY29yYXRvci50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9EZWNvcmF0b3IvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJhdGVneS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJhdGVneS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0cmF0ZWd5Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveERlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIG51bWJlciA9IDA7XG4gIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCkgKyAyO1xuICB9XG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgMjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgMjtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoaSA9PT0gMCB8fCBpID09PSB0aGlzLmdldExpbmVzQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93XCI+Kzwvc3Bhbj4ke1wiLVwiLnJlcGVhdChcbiAgICAgICAgdGhpcy5nZXRNYXhMZW5ndGgoKSAtIDJcbiAgICAgICl9PHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93XCI+Kzwvc3Bhbj5gO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgJzxzcGFuIHN0eWxlPVwiY29sb3I6IHllbGxvd1wiPnw8L3NwYW4+JyArXG4gICAgICB0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkgLSAxKSArXG4gICAgICBcIiBcIi5yZXBlYXQodGhpcy5nZXRNYXhMZW5ndGgoKSAtIHRoaXMuZ2V0TGVuZ3RoKGkgLSAxKSkgK1xuICAgICAgJzxzcGFuIHN0eWxlPVwiY29sb3I6IHllbGxvd1wiPnw8L3NwYW4+J1xuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YXJnZXRJdGVtOiBJdGVtKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XG4gIGFic3RyYWN0IGdldExpbmVzQ291bnQoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRNYXhMZW5ndGgoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHByaW50KGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBjbnRMaW5lcyA9IHRoaXMuZ2V0TGluZXNDb3VudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY250TGluZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XG4gICAgICByZXN1bHQucHVzaChzdHJpbmcpO1xuICAgIH1cbiAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oXCJcXG5cIik7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVOdW1iZXJEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtKSB7XG4gICAgc3VwZXIodGFyZ2V0SXRlbSk7XG4gIH1cbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgNjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgNjtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgYDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCI+YCArXG4gICAgICBgJHtpfWAucGFkU3RhcnQoNCwgXCIwXCIpICtcbiAgICAgIGA6IDwvc3Bhbj4ke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaSl9YFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtLCBwcml2YXRlIGNoOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCk7XG4gIH1cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XG4gIH1cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIHRoaXMuY2gubGVuZ3RoICogMjtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgYDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPiR7dGhpcy5jaH08L3NwYW4+YCArXG4gICAgICBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkpfWAgK1xuICAgICAgYDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPiR7dGhpcy5jaH08L3NwYW4+YFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5ncyBleHRlbmRzIEl0ZW0ge1xuICBwcml2YXRlIGRhdGEgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYWRkKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnB1c2goc3RyKTtcbiAgfVxuXG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldLmxlbmd0aDtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udGhpcy5kYXRhLm1hcCgoc3RyKSA9PiBzdHIubGVuZ3RoKSk7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpXTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm94RGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvci9Cb3hEZWNvcmF0b3JcIjtcbmltcG9ydCBMaW5lTnVtYmVyRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvci9MaW5lTnVtYmVyRGVjb3JhdG9yXCI7XG5pbXBvcnQgU2lkZURlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3IvU2lkZURlY29yYXRvclwiO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSBcIi4vRGVjb3JhdG9yL1N0cmluZ3NcIjtcblxuY29uc3Qgc3RycyA9IG5ldyBTdHJpbmdzKCk7XG5zdHJzLmFkZChcIkhlbGxvIVwiKTtcbnN0cnMuYWRkKFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdFwiKTtcbnN0cnMuYWRkKFwiYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiKTtcbnN0cnMuYWRkKFwiTWludXMgZW5pbSBkb2xvcmVtIHZlcml0YXRpc1wiKTtcbnN0cnMuYWRkKFwiYXNwZXJuYXR1ciBsYWJvcnVtIG1vbGVzdGlhcyB0b3RhbSBuYW0gZXJyb3JcIik7XG5zdHJzLmFkZChcImFkaXBpc2NpIG5vYmlzIGFwZXJpYW0gcG9ycm8gbWFnbmFtIHNlcXVpIHZlcm9cIik7XG5zdHJzLmFkZChcImNvbnNlY3RldHVyIGlzdGUgcXVpYSBhdHF1ZSBub3N0cnVtIHF1aSBxdW9zLFwiKTtcbnN0cnMuYWRkKFwib2RpbyBpZCBpdGFxdWUhIEludmVudG9yZSwgaXVzdG8uXCIpO1xuc3Rycy5hZGQoXCJRdWFzIGRvbG9yZXMgY3VtIGVycm9yIVwiKTtcblxuY29uc3QgJHByZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwcmVcIik7XG5zdHJzLnByaW50KCRwcmUpO1xuXG4vLyBTaWRlRGVjb3JhdG9yIOyepeyLnSDstpTqsIBcbmNvbnN0IHNpZERlYyA9IG5ldyBTaWRlRGVjb3JhdG9yKHN0cnMsICdcIicpO1xuc2lkRGVjLnByaW50KCRwcmUpO1xuXG5jb25zdCBsaW5EZWMgPSBuZXcgTGluZU51bWJlckRlY29yYXRvcihzaWREZWMpO1xubGluRGVjLnByaW50KCRwcmUpO1xuXG4vLyDsnbTslrTshJwgQm94RGVjb3JhdG9yIOyepeyLnSDstpTqsIBcbmNvbnN0IGJveERlYyA9IG5ldyBCb3hEZWNvcmF0b3IobGluRGVjKTtcbmJveERlYy5wcmludCgkcHJlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
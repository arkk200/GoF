/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Composite/File.ts":
/*!*******************************!*\
  !*** ./src/Composite/File.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/Composite/Unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "./src/Composite/Folder.ts":
/*!*********************************!*\
  !*** ./src/Composite/Folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/Composite/Unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this.units = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (acc, cur) { return acc + cur.getSize(); }, 0);
    };
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement("div");
        domUnit.classList.add("unit");
        domUnit.innerHTML = "<div><span>".concat(unit.getName(), "</span><span>(").concat(unit.getSize(), ")</span></div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add("folder");
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit);
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/Composite/Unit.ts":
/*!*******************************!*\
  !*** ./src/Composite/Unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);


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
/* harmony import */ var _Composite_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Composite/File */ "./src/Composite/File.ts");
/* harmony import */ var _Composite_Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Composite/Folder */ "./src/Composite/Folder.ts");


var root = new _Composite_Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("root");
root.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("a.txt", 1000));
root.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("b.txt", 2000));
var sub1 = new _Composite_Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub1");
root.add(sub1);
sub1.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa.txt", 100));
sub1.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("sb.txt", 200));
var subSub = new _Composite_Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("subsub");
sub1.add(subSub);
subSub.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 10));
subSub.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub2.txt", 20));
var sub2 = new _Composite_Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub2");
root.add(sub2);
sub2.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa2.txt", 300));
sub2.add(new _Composite_File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa2.txt", 400));
var dom = document.querySelector("#list");
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQztBQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksdURBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVuQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wb3NpdGUvLi9zcmMvQ29tcG9zaXRlL0ZpbGUudHMiLCJ3ZWJwYWNrOi8vY29tcG9zaXRlLy4vc3JjL0NvbXBvc2l0ZS9Gb2xkZXIudHMiLCJ3ZWJwYWNrOi8vY29tcG9zaXRlLy4vc3JjL0NvbXBvc2l0ZS9Vbml0LnRzIiwid2VicGFjazovL2NvbXBvc2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb21wb3NpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbXBvc2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbXBvc2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbXBvc2l0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVW5pdCBmcm9tIFwiLi9Vbml0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUgZXh0ZW5kcyBVbml0IHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIHNpemU6IG51bWJlcikge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG59XG4iLCJpbXBvcnQgVW5pdCBmcm9tIFwiLi9Vbml0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlciBleHRlbmRzIFVuaXQge1xuICBwcml2YXRlIHVuaXRzOiBBcnJheTxVbml0PiA9IFtdO1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLmdldFNpemUoKSwgMCk7XG4gIH1cblxuICBhZGQodW5pdDogVW5pdCkge1xuICAgIHRoaXMudW5pdHMucHVzaCh1bml0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVW5pdCh1bml0OiBVbml0LCBkb206IEVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb21Vbml0LmNsYXNzTGlzdC5hZGQoXCJ1bml0XCIpO1xuICAgIGRvbVVuaXQuaW5uZXJIVE1MID0gYDxkaXY+PHNwYW4+JHt1bml0LmdldE5hbWUoKX08L3NwYW4+PHNwYW4+KCR7dW5pdC5nZXRTaXplKCl9KTwvc3Bhbj48L2Rpdj5gO1xuICAgIGRvbS5hcHBlbmQoZG9tVW5pdCk7XG4gICAgcmV0dXJuIGRvbVVuaXQ7XG4gIH1cblxuICBsaXN0KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbVVuaXQgPSB0aGlzLmNyZWF0ZVVuaXQodGhpcywgZG9tKTtcbiAgICBjb25zdCBiRm9sZGVyID0gdGhpcyBpbnN0YW5jZW9mIEZvbGRlcjtcblxuICAgIGlmIChiRm9sZGVyKSB7XG4gICAgICBkb21Vbml0LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJcIik7XG4gICAgICB0aGlzLnVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBGb2xkZXIpIHtcbiAgICAgICAgICB1bml0Lmxpc3QoZG9tVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVVbml0KHVuaXQsIGRvbVVuaXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVuaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZykge31cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRTaXplKCk6IG51bWJlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZpbGUgZnJvbSBcIi4vQ29tcG9zaXRlL0ZpbGVcIjtcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4vQ29tcG9zaXRlL0ZvbGRlclwiO1xuXG5jb25zdCByb290ID0gbmV3IEZvbGRlcihcInJvb3RcIik7XG5yb290LmFkZChuZXcgRmlsZShcImEudHh0XCIsIDEwMDApKTtcbnJvb3QuYWRkKG5ldyBGaWxlKFwiYi50eHRcIiwgMjAwMCkpO1xuXG5jb25zdCBzdWIxID0gbmV3IEZvbGRlcihcInN1YjFcIik7XG5yb290LmFkZChzdWIxKTtcbnN1YjEuYWRkKG5ldyBGaWxlKFwic2EudHh0XCIsIDEwMCkpO1xuc3ViMS5hZGQobmV3IEZpbGUoXCJzYi50eHRcIiwgMjAwKSk7XG5cbmNvbnN0IHN1YlN1YiA9IG5ldyBGb2xkZXIoXCJzdWJzdWJcIik7XG5zdWIxLmFkZChzdWJTdWIpO1xuc3ViU3ViLmFkZChuZXcgRmlsZShcInN1YnN1YjEudHh0XCIsIDEwKSk7XG5zdWJTdWIuYWRkKG5ldyBGaWxlKFwic3Vic3ViMi50eHRcIiwgMjApKTtcblxuY29uc3Qgc3ViMiA9IG5ldyBGb2xkZXIoXCJzdWIyXCIpO1xucm9vdC5hZGQoc3ViMik7XG5zdWIyLmFkZChuZXcgRmlsZShcInNhMi50eHRcIiwgMzAwKSk7XG5zdWIyLmFkZChuZXcgRmlsZShcInNhMi50eHRcIiwgNDAwKSk7XG5cbmNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbnJvb3QubGlzdChkb20pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SortArrayPrinter.ts":
/*!*********************************!*\
  !*** ./src/SortArrayPrinter.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SortArrayPrinter = /** @class */ (function () {
    function SortArrayPrinter() {
    }
    SortArrayPrinter.prototype.print = function (strategy, array, domOutput) {
        strategy.sort(array);
        domOutput.innerHTML = array.toString();
    };
    return SortArrayPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortArrayPrinter);


/***/ }),

/***/ "./src/Strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/Strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (N) {
        return (N * (N + 1)) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/Strategy/InsertSortStrategy.ts":
/*!********************************************!*\
  !*** ./src/Strategy/InsertSortStrategy.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var InsertSortStrategy = /** @class */ (function () {
    function InsertSortStrategy() {
    }
    InsertSortStrategy.prototype.sort = function (array) {
        for (var i = 1; i < array.length; i++) {
            var j = i - 1;
            var pivot = array[i];
            for (j = i - 1; j >= 0 && pivot < array[j]; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = pivot;
        }
    };
    return InsertSortStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertSortStrategy);


/***/ }),

/***/ "./src/Strategy/JSSortStrategy.ts":
/*!****************************************!*\
  !*** ./src/Strategy/JSSortStrategy.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var JSSortStartegy = /** @class */ (function () {
    function JSSortStartegy() {
    }
    JSSortStartegy.prototype.sort = function (array) {
        array.sort();
    };
    return JSSortStartegy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSSortStartegy);


/***/ }),

/***/ "./src/Strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/Strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        for (var i = 1; i <= N; i++)
            sum += i;
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


/***/ }),

/***/ "./src/SumPrinter.ts":
/*!***************************!*\
  !*** ./src/SumPrinter.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N);
        domOutput.innerHTML = "\uC22B\uC790 1\uBD80\uD130 ".concat(N, "\uAE4C\uC9C0\uC758 \uD569\uC740 ").concat(value, "\uC785\uB2C8\uB2E4.");
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


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
/* harmony import */ var _SortArrayPrinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortArrayPrinter */ "./src/SortArrayPrinter.ts");
/* harmony import */ var _Strategy_GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Strategy/GaussSumStrategy */ "./src/Strategy/GaussSumStrategy.ts");
/* harmony import */ var _Strategy_InsertSortStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strategy/InsertSortStrategy */ "./src/Strategy/InsertSortStrategy.ts");
/* harmony import */ var _Strategy_JSSortStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy/JSSortStrategy */ "./src/Strategy/JSSortStrategy.ts");
/* harmony import */ var _Strategy_LoopSumStrategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy/LoopSumStrategy */ "./src/Strategy/LoopSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SumPrinter */ "./src/SumPrinter.ts");






// SumPrinter
var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_5__["default"]();
var dom1 = document.createElement("h1");
document.body.appendChild(dom1);
var dom2 = document.createElement("h1");
document.body.appendChild(dom2);
printer.print(new _Strategy_LoopSumStrategy__WEBPACK_IMPORTED_MODULE_4__["default"](), 100, dom1);
printer.print(new _Strategy_GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom2);
// SortArrayPrinter
var sortPrinter = new _SortArrayPrinter__WEBPACK_IMPORTED_MODULE_0__["default"]();
var dom3 = document.createElement("h1");
document.body.appendChild(dom3);
var dom4 = document.createElement("h1");
document.body.appendChild(dom4);
sortPrinter.print(new _Strategy_InsertSortStrategy__WEBPACK_IMPORTED_MODULE_2__["default"](), [2, 4, 3, 1], dom3);
sortPrinter.print(new _Strategy_JSSortStrategy__WEBPACK_IMPORTED_MODULE_3__["default"](), [2, 4, 3, 1], dom4);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vU3RyYXRlZ3kvLi9zcmMvU29ydEFycmF5UHJpbnRlci50cyIsIndlYnBhY2s6Ly9TdHJhdGVneS8uL3NyYy9TdHJhdGVneS9HYXVzc1N1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL1N0cmF0ZWd5Ly4vc3JjL1N0cmF0ZWd5L0luc2VydFNvcnRTdHJhdGVneS50cyIsIndlYnBhY2s6Ly9TdHJhdGVneS8uL3NyYy9TdHJhdGVneS9KU1NvcnRTdHJhdGVneS50cyIsIndlYnBhY2s6Ly9TdHJhdGVneS8uL3NyYy9TdHJhdGVneS9Mb29wU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vU3RyYXRlZ3kvLi9zcmMvU3VtUHJpbnRlci50cyIsIndlYnBhY2s6Ly9TdHJhdGVneS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TdHJhdGVneS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9TdHJhdGVneS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1N0cmF0ZWd5Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3J0U3RhcnRlZ3kgZnJvbSBcIi4vaW50ZXJmYWNlcy9Tb3J0U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydEFycmF5UHJpbnRlciB7XG4gIHByaW50KHN0cmF0ZWd5OiBTb3J0U3RhcnRlZ3ksIGFycmF5OiBudW1iZXJbXSwgZG9tT3V0cHV0OiBFbGVtZW50KSB7XG4gICAgc3RyYXRlZ3kuc29ydChhcnJheSk7XG4gICAgZG9tT3V0cHV0LmlubmVySFRNTCA9IGFycmF5LnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsImltcG9ydCBTdW1TdHJhdGVneSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXVzc1N1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xuICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKE4gKiAoTiArIDEpKSAvIDI7XG4gIH1cbn1cbiIsImltcG9ydCBTb3J0U3RhcnRlZ3kgZnJvbSBcIi4uL2ludGVyZmFjZXMvU29ydFN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc2VydFNvcnRTdHJhdGVneSBpbXBsZW1lbnRzIFNvcnRTdGFydGVneSB7XG4gIHNvcnQoYXJyYXk6IG51bWJlcltdKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGogPSBpIC0gMTtcbiAgICAgIGNvbnN0IHBpdm90ID0gYXJyYXlbaV07XG4gICAgICBmb3IgKGogPSBpIC0gMTsgaiA+PSAwICYmIHBpdm90IDwgYXJyYXlbal07IGotLSkge1xuICAgICAgICBhcnJheVtqICsgMV0gPSBhcnJheVtqXTtcbiAgICAgIH1cbiAgICAgIGFycmF5W2ogKyAxXSA9IHBpdm90O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNvcnRTdGFydGVneSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9Tb3J0U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNTb3J0U3RhcnRlZ3kgaW1wbGVtZW50cyBTb3J0U3RhcnRlZ3kge1xuICBzb3J0KGFycmF5OiBudW1iZXJbXSk6IHZvaWQge1xuICAgIGFycmF5LnNvcnQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gXCIuLi9pbnRlcmZhY2VzL1N1bVN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb3BTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcbiAgZ2V0KE46IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTjsgaSsrKSBzdW0gKz0gaTtcbiAgICByZXR1cm4gc3VtO1xuICB9XG59XG4iLCJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4vaW50ZXJmYWNlcy9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW1QcmludGVyIHtcbiAgcHJpbnQoc3RyYXRlZ3k6IFN1bVN0cmF0ZWd5LCBOOiBudW1iZXIsIGRvbU91dHB1dDogRWxlbWVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gc3RyYXRlZ3kuZ2V0KE4pO1xuICAgIGRvbU91dHB1dC5pbm5lckhUTUwgPSBg7Iir7J6QIDHrtoDthLAgJHtOfeq5jOyngOydmCDtlansnYAgJHt2YWx1ZX3snoXri4jri6QuYDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU29ydEFycmF5UHJpbnRlciBmcm9tIFwiLi9Tb3J0QXJyYXlQcmludGVyXCI7XG5pbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tIFwiLi9TdHJhdGVneS9HYXVzc1N1bVN0cmF0ZWd5XCI7XG5pbXBvcnQgSW5zZXJ0U29ydFN0cmF0ZWd5IGZyb20gXCIuL1N0cmF0ZWd5L0luc2VydFNvcnRTdHJhdGVneVwiO1xuaW1wb3J0IEpTU29ydFN0YXJ0ZWd5IGZyb20gXCIuL1N0cmF0ZWd5L0pTU29ydFN0cmF0ZWd5XCI7XG5pbXBvcnQgTG9vcFN1bVN0cmF0ZWd5IGZyb20gXCIuL1N0cmF0ZWd5L0xvb3BTdW1TdHJhdGVneVwiO1xuaW1wb3J0IFN1bVByaW50ZXIgZnJvbSBcIi4vU3VtUHJpbnRlclwiO1xuXG4vLyBTdW1QcmludGVyXG5jb25zdCBwcmludGVyID0gbmV3IFN1bVByaW50ZXIoKTtcblxuY29uc3QgZG9tMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tMSk7XG5cbmNvbnN0IGRvbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbTIpO1xuXG5wcmludGVyLnByaW50KG5ldyBMb29wU3VtU3RyYXRlZ3koKSwgMTAwLCBkb20xKTtcbnByaW50ZXIucHJpbnQobmV3IEdhdXNzU3VtU3RyYXRlZ3koKSwgMTAwLCBkb20yKTtcblxuLy8gU29ydEFycmF5UHJpbnRlclxuY29uc3Qgc29ydFByaW50ZXIgPSBuZXcgU29ydEFycmF5UHJpbnRlcigpO1xuXG5jb25zdCBkb20zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb20zKTtcblxuY29uc3QgZG9tNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tNCk7XG5cbnNvcnRQcmludGVyLnByaW50KG5ldyBJbnNlcnRTb3J0U3RyYXRlZ3koKSwgWzIsIDQsIDMsIDFdLCBkb20zKTtcbnNvcnRQcmludGVyLnByaW50KG5ldyBKU1NvcnRTdGFydGVneSgpLCBbMiwgNCwgMywgMV0sIGRvbTQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
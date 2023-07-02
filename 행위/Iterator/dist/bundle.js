/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array/Array.ts":
/*!*************************************!*\
  !*** ./src/iterator/Array/Array.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/Array/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/Array/ArrayIterator.ts":
/*!*********************************************!*\
  !*** ./src/iterator/Array/ArrayIterator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/iterator/Row.ts":
/*!*****************************!*\
  !*** ./src/iterator/Row.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Row;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


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
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array/Array */ "./src/iterator/Array/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row */ "./src/iterator/Row.ts");



var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 1000),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("빼빼로", 1200),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 4600),
];
var array = new _Array_Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement("div");
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0");
    document.body.appendChild(domItem);
}
var rows = [
    new _Row__WEBPACK_IMPORTED_MODULE_2__["default"]("James", 18),
    new _Row__WEBPACK_IMPORTED_MODULE_2__["default"]("John", 19),
    new _Row__WEBPACK_IMPORTED_MODULE_2__["default"]("Jack", 20),
    new _Row__WEBPACK_IMPORTED_MODULE_2__["default"]("Jane", 21),
];
var table = new _Array_Array__WEBPACK_IMPORTED_MODULE_0__["default"](rows);
var tableIter = table.iterator();
while (tableIter.next()) {
    var item = tableIter.current();
    var domItem = document.createElement("div");
    domItem.innerText = "\uC774\uB984: ".concat(item.name, ", \uB098\uC774: ").concat(item.age);
    document.body.appendChild(domItem);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRlcmF0b3IvLi9zcmMvaXRlcmF0b3IvQXJyYXkvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vaXRlcmF0b3IvLi9zcmMvaXRlcmF0b3IvQXJyYXkvQXJyYXlJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9pdGVyYXRvci8uL3NyYy9pdGVyYXRvci9JdGVtLnRzIiwid2VicGFjazovL2l0ZXJhdG9yLy4vc3JjL2l0ZXJhdG9yL1Jvdy50cyIsIndlYnBhY2s6Ly9pdGVyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pdGVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaXRlcmF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pdGVyYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2l0ZXJhdG9yLy4vc3JjL2l0ZXJhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZ2dyZWdhdG9yIGZyb20gXCIuLi9pbnRlcmZhY2VzL0FnZ3JlZ2F0b3JcIjtcbmltcG9ydCBBcnJheUl0ZXJhdG9yIGZyb20gXCIuL0FycmF5SXRlcmF0b3JcIjtcbmltcG9ydCBJdGVyYXRvciBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JdGVyYXRvclwiO1xuXG5jbGFzcyBBcnJheTxUPiBpbXBsZW1lbnRzIEFnZ3JlZ2F0b3I8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBUW10pIHt9XG5cbiAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcjxUPih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheTtcbiIsImltcG9ydCBBcnJheSBmcm9tIFwiLi9BcnJheVwiO1xuaW1wb3J0IEl0ZXJhdG9yIGZyb20gXCIuLi9pbnRlcmZhY2VzL0l0ZXJhdG9yXCI7XG5cbmNsYXNzIEFycmF5SXRlcmF0b3I8VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBBcnJheTxUPikge1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgfVxuXG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudDtcbiAgfVxuICBjdXJyZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmdldEl0ZW0odGhpcy5pbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJdGVyYXRvcjtcbiIsImNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2Nvc3Q6IG51bWJlcikge31cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBjb3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJjbGFzcyBSb3cge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2FnZTogbnVtYmVyKSB7fVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFycmF5IGZyb20gXCIuL0FycmF5L0FycmF5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgbmV3IEl0ZW0oXCLsv6Dsv6Dri6TsiqRcIiwgMjUwMCksXG4gIG5ldyBJdGVtKFwi7IOI7Jqw6rmhXCIsIDEwMDApLFxuICBuZXcgSXRlbShcIuu5vOu5vOuhnFwiLCAxMjAwKSxcbiAgbmV3IEl0ZW0oXCLstIjsvZTtjIzsnbRcIiwgNDYwMCksXG5dO1xuXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcyk7XG5jb25zdCBpdGVyID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXIubmV4dCgpKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVyLmN1cnJlbnQoKTtcblxuICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IDogJHtpdGVtLmNvc3R97JuQYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbn1cblxuY29uc3Qgcm93cyA9IFtcbiAgbmV3IFJvdyhcIkphbWVzXCIsIDE4KSxcbiAgbmV3IFJvdyhcIkpvaG5cIiwgMTkpLFxuICBuZXcgUm93KFwiSmFja1wiLCAyMCksXG4gIG5ldyBSb3coXCJKYW5lXCIsIDIxKSxcbl07XG5cbmNvbnN0IHRhYmxlID0gbmV3IEFycmF5KHJvd3MpO1xuY29uc3QgdGFibGVJdGVyID0gdGFibGUuaXRlcmF0b3IoKTtcblxud2hpbGUgKHRhYmxlSXRlci5uZXh0KCkpIHtcbiAgY29uc3QgaXRlbSA9IHRhYmxlSXRlci5jdXJyZW50KCk7XG5cbiAgY29uc3QgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbUl0ZW0uaW5uZXJUZXh0ID0gYOydtOumhDogJHtpdGVtLm5hbWV9LCDrgpjsnbQ6ICR7aXRlbS5hZ2V9YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
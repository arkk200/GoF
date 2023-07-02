/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SIngleton/King.ts":
/*!*******************************!*\
  !*** ./src/SIngleton/King.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var King = /** @class */ (function () {
    // 생성자에 private을 붙여서 자기자신만이 이 클래스의 객체를 생성할 수 있게 만들 수 있습니다.
    function King() {
    }
    King.getInstance = function () {
        if (this.instance === undefined)
            this.instance = new King();
        return this.instance;
    };
    King.prototype.sayHello = function () {
        console.log("I am only one...");
    };
    return King;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (King);


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
/* harmony import */ var _SIngleton_King__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SIngleton/King */ "./src/SIngleton/King.ts");

/*
const king = new King(); // King 클래스에 생성자가 private이기에 생성할 수 없습니다.
*/
var king = _SIngleton_King__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance();
var king2 = _SIngleton_King__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance();
// 두 객체를 비교해보면 같은 객체를 참조하고 있다는 것을 알 수 있습니다.
console.log("Are king and king2 same?: ".concat(king === king2));
king.sayHello();
king2.sayHello();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDRSwwREFBMEQ7SUFDMUQ7SUFBdUIsQ0FBQztJQUlqQixnQkFBVyxHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7Ozs7Ozs7O1VDZEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQztBQUVwQzs7RUFFRTtBQUVGLElBQU0sSUFBSSxHQUFHLHVEQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsSUFBTSxLQUFLLEdBQUcsdURBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVqQywyQ0FBMkM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBNkIsSUFBSSxLQUFLLEtBQUssQ0FBRSxDQUFDLENBQUM7QUFFM0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbmdsZXRvbi8uL3NyYy9TSW5nbGV0b24vS2luZy50cyIsIndlYnBhY2s6Ly9zaW5nbGV0b24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2luZ2xldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW5nbGV0b24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW5nbGV0b24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW5nbGV0b24vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2luZyB7XG4gIC8vIOyDneyEseyekOyXkCBwcml2YXRl7J2EIOu2meyXrOyEnCDsnpDquLDsnpDsi6Drp4zsnbQg7J20IO2BtOuemOyKpOydmCDqsJ3ssrTrpbwg7IOd7ISx7ZWgIOyImCDsnojqsowg66eM65OkIOyImCDsnojsirXri4jri6QuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBLaW5nIHwgdW5kZWZpbmVkO1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBLaW5nIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmluc3RhbmNlID0gbmV3IEtpbmcoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNheUhlbGxvKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBvbmx5IG9uZS4uLlwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgS2luZyBmcm9tIFwiLi9TSW5nbGV0b24vS2luZ1wiO1xuXG4vKlxuY29uc3Qga2luZyA9IG5ldyBLaW5nKCk7IC8vIEtpbmcg7YG0656Y7Iqk7JeQIOyDneyEseyekOqwgCBwcml2YXRl7J206riw7JeQIOyDneyEse2VoCDsiJgg7JeG7Iq164uI64ukLlxuKi9cblxuY29uc3Qga2luZyA9IEtpbmcuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGtpbmcyID0gS2luZy5nZXRJbnN0YW5jZSgpO1xuXG4vLyDrkZAg6rCd7LK066W8IOu5hOq1kO2VtOuztOuptCDqsJnsnYAg6rCd7LK066W8IOywuOyhsO2VmOqzoCDsnojri6TripQg6rKD7J2EIOyVjCDsiJgg7J6I7Iq164uI64ukLlxuY29uc29sZS5sb2coYEFyZSBraW5nIGFuZCBraW5nMiBzYW1lPzogJHtraW5nID09PSBraW5nMn1gKTtcblxua2luZy5zYXlIZWxsbygpO1xua2luZzIuc2F5SGVsbG8oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
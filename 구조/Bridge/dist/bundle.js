/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bridge/CharactersCounter.ts":
/*!*****************************************!*\
  !*** ./src/Bridge/CharactersCounter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/Bridge/Draft.ts");
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

// 새로운 요구사항이 들어와서 기존 클래스를 상속받고 기능을 추가한 모습입니다.
var CharactersCounter = /** @class */ (function (_super) {
    __extends(CharactersCounter, _super);
    function CharactersCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCounter.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        count += this.getContent().length;
        return count;
    };
    return CharactersCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersCounter);


/***/ }),

/***/ "./src/Bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/Bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


/***/ }),

/***/ "./src/Bridge/SimpleDisplay.ts":
/*!*************************************!*\
  !*** ./src/Bridge/SimpleDisplay.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SimpleDisplay = /** @class */ (function () {
    function SimpleDisplay() {
    }
    SimpleDisplay.prototype.title = function (draft) {
        console.log(draft.getTitle());
    };
    SimpleDisplay.prototype.author = function (draft) {
        console.log(draft.getAuthor());
    };
    SimpleDisplay.prototype.content = function (draft) {
        var content = draft.getContent();
        content.forEach(function (item) {
            console.log(item);
        });
    };
    return SimpleDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplay);


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
/* harmony import */ var _Bridge_CharactersCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bridge/CharactersCounter */ "./src/Bridge/CharactersCounter.ts");
/* harmony import */ var _Bridge_SimpleDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bridge/SimpleDisplay */ "./src/Bridge/SimpleDisplay.ts");


var title = "제목123";
var author = "저자123";
var content = ["내용1", "내용2", "내용3"];
/// 버전 1
/*
const draft = new Draft(title, author, content);

const display = new SimpleDisplay();
// const display = new CaptionDisplay();
draft.print(display);
 */
/// 버전 2, 문자의 개수를 세는 기능 추가
var draft = new _Bridge_CharactersCounter__WEBPACK_IMPORTED_MODULE_0__["default"](title, author, content);
var display = new _Bridge_SimpleDisplay__WEBPACK_IMPORTED_MODULE_1__["default"]();
// const display = new CaptionDisplay();
draft.print(display);
// 버전 2의 기능도 사용할 수 있다.
console.log("\uC804\uCCB4 \uBB38\uC790\uC758 \uAC1C\uC218: ".concat(draft.getCharactersCount()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0dBTUc7QUFFSCwwQkFBMEI7QUFDMUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxpRUFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTVELElBQU0sT0FBTyxHQUFHLElBQUksNkRBQWEsRUFBRSxDQUFDO0FBQ3BDLHdDQUF3QztBQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXJCLHNCQUFzQjtBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUFjLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmF0ZWd5Ly4vc3JjL0JyaWRnZS9DaGFyYWN0ZXJzQ291bnRlci50cyIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9CcmlkZ2UvRHJhZnQudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvQnJpZGdlL1NpbXBsZURpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cmF0ZWd5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhZnQgZnJvbSBcIi4vRHJhZnRcIjtcblxuLy8g7IOI66Gc7Jq0IOyalOq1rOyCrO2VreydtCDrk6TslrTsmYDshJwg6riw7KG0IO2BtOuemOyKpOulvCDsg4Hsho3rsJvqs6Ag6riw64ql7J2EIOy2lOqwgO2VnCDrqqjsirXsnoXri4jri6QuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJzQ291bnRlciBleHRlbmRzIERyYWZ0IHtcbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIodGl0bGUsIGF1dGhvciwgY29udGVudCk7XG4gIH1cblxuICBnZXRDaGFyYWN0ZXJzQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGNvdW50ICs9IHRoaXMuZ2V0VGl0bGUoKS5sZW5ndGg7XG4gICAgY291bnQgKz0gdGhpcy5nZXRBdXRob3IoKS5sZW5ndGg7XG4gICAgY291bnQgKz0gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG59XG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgYXV0aG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXVxuICApIHt9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbiAgZ2V0QXV0aG9yKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhvcjtcbiAgfVxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwcmludChkaXNwbGF5OiBEaXNwbGF5KTogdm9pZCB7XG4gICAgZGlzcGxheS50aXRsZSh0aGlzKTtcbiAgICBkaXNwbGF5LmF1dGhvcih0aGlzKTtcbiAgICBkaXNwbGF5LmNvbnRlbnQodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCBEaXNwbGF5IGZyb20gXCIuL0Rpc3BsYXlcIjtcbmltcG9ydCBEcmFmdCBmcm9tIFwiLi9EcmFmdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEaXNwbGF5IGltcGxlbWVudHMgRGlzcGxheSB7XG4gIHRpdGxlKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGRyYWZ0LmdldFRpdGxlKCkpO1xuICB9XG4gIGF1dGhvcihkcmFmdDogRHJhZnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhkcmFmdC5nZXRBdXRob3IoKSk7XG4gIH1cbiAgY29udGVudChkcmFmdDogRHJhZnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50ID0gZHJhZnQuZ2V0Q29udGVudCgpO1xuICAgIGNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhcHRpb25EaXNwbGF5IGZyb20gXCIuL0JyaWRnZS9DYXB0aW9uRGlzcGxheVwiO1xuaW1wb3J0IENoYXJhY3RlcnNDb3VudGVyIGZyb20gXCIuL0JyaWRnZS9DaGFyYWN0ZXJzQ291bnRlclwiO1xuaW1wb3J0IERyYWZ0IGZyb20gXCIuL0JyaWRnZS9EcmFmdFwiO1xuaW1wb3J0IFNpbXBsZURpc3BsYXkgZnJvbSBcIi4vQnJpZGdlL1NpbXBsZURpc3BsYXlcIjtcblxuY29uc3QgdGl0bGUgPSBcIuygnOuqqTEyM1wiO1xuY29uc3QgYXV0aG9yID0gXCLsoIDsnpAxMjNcIjtcbmNvbnN0IGNvbnRlbnQgPSBbXCLrgrTsmqkxXCIsIFwi64K07JqpMlwiLCBcIuuCtOyaqTNcIl07XG5cbi8vLyDrsoTsoIQgMVxuLyogXG5jb25zdCBkcmFmdCA9IG5ldyBEcmFmdCh0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcblxuY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5KCk7XG4vLyBjb25zdCBkaXNwbGF5ID0gbmV3IENhcHRpb25EaXNwbGF5KCk7XG5kcmFmdC5wcmludChkaXNwbGF5KTtcbiAqL1xuXG4vLy8g67KE7KCEIDIsIOusuOyekOydmCDqsJzsiJjrpbwg7IS464qUIOq4sOuKpSDstpTqsIBcbmNvbnN0IGRyYWZ0ID0gbmV3IENoYXJhY3RlcnNDb3VudGVyKHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xuXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXkoKTtcbi8vIGNvbnN0IGRpc3BsYXkgPSBuZXcgQ2FwdGlvbkRpc3BsYXkoKTtcbmRyYWZ0LnByaW50KGRpc3BsYXkpO1xuXG4vLyDrsoTsoIQgMuydmCDquLDriqXrj4Qg7IKs7Jqp7ZWgIOyImCDsnojri6QuXG5jb25zb2xlLmxvZyhg7KCE7LK0IOusuOyekOydmCDqsJzsiJg6ICR7ZHJhZnQuZ2V0Q2hhcmFjdGVyc0NvdW50KCl9YCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
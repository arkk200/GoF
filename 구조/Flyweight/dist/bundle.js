/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/Flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = "<div class=\"digit-layout\"></div>";
            var domLayout_1 = dom.querySelector(".digit-layout");
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement("div");
                    domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
                    domLayout_1.append(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/Flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/Flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/Flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = Array(10).fill(null);
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n]) {
            console.log("".concat(n, "\uC5D0 \uD574\uB2F9\uD558\uB294 Digit \uAC1D\uCCB4 \uC0DD\uC131"));
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        }
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/Flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/Flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = "";
        for (var i = 0; i < len; i++) {
            var div = document.createElement("div");
            this.factory.getDigit(+strNum[i]).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
/* harmony import */ var _Flyweight_DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flyweight/DigitFactory */ "./src/Flyweight/DigitFactory.ts");
/* harmony import */ var _Flyweight_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flyweight/Number */ "./src/Flyweight/Number.ts");


var factory = new _Flyweight_DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var dom = document.querySelector("#tmp");
var value = 434331;
setInterval(function () {
    // 0부터 9까지 DigitFactory에 저장된 Digit 객체가 재활용되는 걸 볼 수 있다.
    var number = new _Flyweight_Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    number.put(dom);
}, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHl3ZWlnaHQvLi9zcmMvRmx5d2VpZ2h0L0RpZ2l0LnRzIiwid2VicGFjazovL2ZseXdlaWdodC8uL3NyYy9GbHl3ZWlnaHQvRGlnaXRGYWN0b3J5LnRzIiwid2VicGFjazovL2ZseXdlaWdodC8uL3NyYy9GbHl3ZWlnaHQvTnVtYmVyLnRzIiwid2VicGFjazovL2ZseXdlaWdodC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbHl3ZWlnaHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZseXdlaWdodC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZseXdlaWdodC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZseXdlaWdodC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdCB7XG4gIHByaXZhdGUgZGF0YTogQXJyYXk8c3RyaW5nPiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmw6IHN0cmluZykge31cblxuICBwcml2YXRlIGxvYWQodXJsOiBzdHJpbmcsIGRvbU91dHB1dDogRWxlbWVudCkge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGpzb247XG4gICAgICAgIGlmIChkb21PdXRwdXQpIHRoaXMucHV0KGRvbU91dHB1dCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1dChkb206IEVsZW1lbnQpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5sb2FkKHRoaXMudXJsLCBkb20pO1xuICAgIGVsc2Uge1xuICAgICAgZG9tLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZGlnaXQtbGF5b3V0XCI+PC9kaXY+YDtcbiAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvbS5xdWVyeVNlbGVjdG9yKFwiLmRpZ2l0LWxheW91dFwiKTtcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBsZW4gPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaXRlbVtpXSA9PT0gXCIxXCIgPyBcIiNmZjBcIiA6IFwiIzMzM1wiO1xuICAgICAgICAgIGRvbUxheW91dC5hcHBlbmQoZG9tQ2VsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IERpZ2l0IGZyb20gXCIuL0RpZ2l0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZ2l0RmFjdG9yeSB7XG4gIHByaXZhdGUgcG9vbDogQXJyYXk8RGlnaXQgfCBudWxsPiA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuXG4gIGdldERpZ2l0KG46IG51bWJlcik6IERpZ2l0IHtcbiAgICBpZiAoIXRoaXMucG9vbFtuXSkge1xuICAgICAgY29uc29sZS5sb2coYCR7bn3sl5Ag7ZW064u57ZWY64qUIERpZ2l0IOqwneyytCDsg53shLFgKTtcbiAgICAgIHRoaXMucG9vbFtuXSA9IG5ldyBEaWdpdChgLi9kYXRhLyR7bn0uanNvbmApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb29sW25dO1xuICB9XG59XG4iLCJpbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gXCIuL0RpZ2l0RmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY3Rvcnk6IERpZ2l0RmFjdG9yeSwgcHJpdmF0ZSBudW06IG51bWJlcikge31cblxuICBwdXQoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RyTnVtID0gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgICBjb25zdCBsZW4gPSBzdHJOdW0ubGVuZ3RoO1xuICAgIGRvbS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLmZhY3RvcnkuZ2V0RGlnaXQoK3N0ck51bVtpXSkucHV0KGRpdik7XG4gICAgICBkb20uYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSBcIi4vRmx5d2VpZ2h0L0RpZ2l0RmFjdG9yeVwiO1xuaW1wb3J0IE51bWJlciBmcm9tIFwiLi9GbHl3ZWlnaHQvTnVtYmVyXCI7XG5cbmNvbnN0IGZhY3RvcnkgPSBuZXcgRGlnaXRGYWN0b3J5KCk7XG5cbmNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG1wXCIpO1xuXG5sZXQgdmFsdWUgPSA0MzQzMzE7XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgLy8gMOu2gO2EsCA56rmM7KeAIERpZ2l0RmFjdG9yeeyXkCDsoIDsnqXrkJwgRGlnaXQg6rCd7LK06rCAIOyerO2ZnOyaqeuQmOuKlCDqsbgg67O8IOyImCDsnojri6QuXG4gIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKyk7XG4gIG51bWJlci5wdXQoZG9tKTtcbn0sIDEwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
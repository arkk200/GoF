/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/Adapter/Animal.ts":
      /*!*******************************!*\
  !*** ./src/Adapter/Animal.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var Animal = /** @class */ (function () {
          function Animal(name) {
            this.name = name;
          }
          return Animal;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Animal;

        /***/
      },

    /***/ "./src/Adapter/Bear.ts":
      /*!*****************************!*\
  !*** ./src/Adapter/Bear.ts ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var Bear = /** @class */ (function () {
          function Bear() {
            this._name = null;
          }
          Object.defineProperty(Bear.prototype, "name", {
            get: function () {
              return this._name;
            },
            set: function (v) {
              this._name = v;
            },
            enumerable: false,
            configurable: true,
          });
          Bear.prototype.roar = function () {
            return "roar";
          };
          return Bear;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Bear;

        /***/
      },

    /***/ "./src/Adapter/BearAdapter.ts":
      /*!************************************!*\
  !*** ./src/Adapter/BearAdapter.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Animal */ "./src/Adapter/Animal.ts");
        /* harmony import */ var _Bear__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Bear */ "./src/Adapter/Bear.ts");
        var __extends =
          (undefined && undefined.__extends) ||
          (function () {
            var extendStatics = function (d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, b) {
                    d.__proto__ = b;
                  }) ||
                function (d, b) {
                  for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function (d, b) {
              if (typeof b !== "function" && b !== null)
                throw new TypeError(
                  "Class extends value " +
                    String(b) +
                    " is not a constructor or null"
                );
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var BearAdapter = /** @class */ (function (_super) {
          __extends(BearAdapter, _super);
          function BearAdapter(name) {
            var _this = _super.call(this, name) || this;
            _this.bear = new _Bear__WEBPACK_IMPORTED_MODULE_1__["default"]();
            _this.bear.name = name;
            return _this;
          }
          BearAdapter.prototype.sound = function () {
            console.log(
              "".concat(this.bear.name, ": ").concat(this.bear.roar())
            );
          };
          return BearAdapter;
        })(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BearAdapter;

        /***/
      },

    /***/ "./src/Adapter/Cat.ts":
      /*!****************************!*\
  !*** ./src/Adapter/Cat.ts ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Animal */ "./src/Adapter/Animal.ts");
        var __extends =
          (undefined && undefined.__extends) ||
          (function () {
            var extendStatics = function (d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, b) {
                    d.__proto__ = b;
                  }) ||
                function (d, b) {
                  for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function (d, b) {
              if (typeof b !== "function" && b !== null)
                throw new TypeError(
                  "Class extends value " +
                    String(b) +
                    " is not a constructor or null"
                );
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var Cat = /** @class */ (function (_super) {
          __extends(Cat, _super);
          function Cat(name) {
            return _super.call(this, name) || this;
          }
          Cat.prototype.sound = function () {
            console.log("".concat(this.name, ": meow"));
          };
          return Cat;
        })(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Cat;

        /***/
      },

    /***/ "./src/Adapter/Dog.ts":
      /*!****************************!*\
  !*** ./src/Adapter/Dog.ts ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Animal */ "./src/Adapter/Animal.ts");
        var __extends =
          (undefined && undefined.__extends) ||
          (function () {
            var extendStatics = function (d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, b) {
                    d.__proto__ = b;
                  }) ||
                function (d, b) {
                  for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function (d, b) {
              if (typeof b !== "function" && b !== null)
                throw new TypeError(
                  "Class extends value " +
                    String(b) +
                    " is not a constructor or null"
                );
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var Dog = /** @class */ (function (_super) {
          __extends(Dog, _super);
          function Dog(name) {
            return _super.call(this, name) || this;
          }
          Dog.prototype.sound = function () {
            console.log("".concat(this.name, ": woof"));
          };
          return Dog;
        })(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Dog;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Adapter_Cat__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./Adapter/Cat */ "./src/Adapter/Cat.ts");
    /* harmony import */ var _Adapter_Dog__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./Adapter/Dog */ "./src/Adapter/Dog.ts");
    /* harmony import */ var _Adapter_BearAdapter__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ./Adapter/BearAdapter */ "./src/Adapter/BearAdapter.ts"
      );

    var list = [];
    list.push(new _Adapter_Dog__WEBPACK_IMPORTED_MODULE_1__["default"]("dog1"));
    list.push(new _Adapter_Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("cat1"));
    /*
const bear = new Bear();
bear.name = "bear1";
list.push(bear); // Animal 타입과 호환되지 않습니다.
 */
    list.push(
      new _Adapter_BearAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]("bear1")
    );
    list.forEach(function (animal) {
      return animal.sound();
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvQWRhcHRlci9BbmltYWwudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvQWRhcHRlci9CZWFyLnRzIiwid2VicGFjazovL3N0cmF0ZWd5Ly4vc3JjL0FkYXB0ZXIvQmVhckFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvQWRhcHRlci9DYXQudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvQWRhcHRlci9Eb2cudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cmF0ZWd5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJhdGVneS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nKSB7fVxuICBhYnN0cmFjdCBzb3VuZCgpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhciB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHNldCBuYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2O1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICByb2FyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwicm9hclwiO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuaW1wb3J0IEJlYXIgZnJvbSBcIi4vQmVhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyQWRhcHRlciBleHRlbmRzIEFuaW1hbCB7XG4gIHByaXZhdGUgYmVhcjogQmVhcjtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmJlYXIgPSBuZXcgQmVhcigpO1xuICAgIHRoaXMuYmVhci5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYmVhci5uYW1lfTogJHt0aGlzLmJlYXIucm9hcigpfWApO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXQgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9OiBtZW93YCk7XG4gIH1cbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vQW5pbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX06IHdvb2ZgKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FkYXB0ZXIvQW5pbWFsXCI7XG5pbXBvcnQgQ2F0IGZyb20gXCIuL0FkYXB0ZXIvQ2F0XCI7XG5pbXBvcnQgRG9nIGZyb20gXCIuL0FkYXB0ZXIvRG9nXCI7XG5pbXBvcnQgQmVhciBmcm9tIFwiLi9BZGFwdGVyL0JlYXJcIjtcbmltcG9ydCBCZWFyQWRhcHRlciBmcm9tIFwiLi9BZGFwdGVyL0JlYXJBZGFwdGVyXCI7XG5cbmNvbnN0IGxpc3Q6IEFuaW1hbFtdID0gW107XG5cbmxpc3QucHVzaChuZXcgRG9nKFwiZG9nMVwiKSk7XG5saXN0LnB1c2gobmV3IENhdChcImNhdDFcIikpO1xuXG4vKiBcbmNvbnN0IGJlYXIgPSBuZXcgQmVhcigpO1xuYmVhci5uYW1lID0gXCJiZWFyMVwiO1xubGlzdC5wdXNoKGJlYXIpOyAvLyBBbmltYWwg7YOA7J6F6rO8IO2YuO2ZmOuQmOyngCDslYrripTri6QuXG4gKi9cblxubGlzdC5wdXNoKG5ldyBCZWFyQWRhcHRlcihcImJlYXIxXCIpKTtcblxubGlzdC5mb3JFYWNoKChhbmltYWwpID0+IGFuaW1hbC5zb3VuZCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==

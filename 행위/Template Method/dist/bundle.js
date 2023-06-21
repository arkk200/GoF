/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/Article.ts":
      /*!************************!*\
  !*** ./src/Article.ts ***!
  \************************/
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
        var Article = /** @class */ (function () {
          function Article(title, content, footer) {
            this.title = title;
            this.content = content;
            this.footer = footer;
          }
          Article.prototype.getTitle = function () {
            return this.title;
          };
          Article.prototype.getContent = function () {
            return this.content;
          };
          Article.prototype.getFooter = function () {
            return this.footer;
          };
          return Article;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Article;

        /***/
      },

    /***/ "./src/Template Method/DisplayArticleTemplate.ts":
      /*!*******************************************************!*\
  !*** ./src/Template Method/DisplayArticleTemplate.ts ***!
  \*******************************************************/
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
        var DisplayArticleTemplate = /** @class */ (function () {
          function DisplayArticleTemplate(article) {
            var _this = this;
            this.article = article;
            this.displayHtml = function () {
              return "\n      "
                .concat(_this.titleHtml(), "\n      ")
                .concat(_this.contentHtml(), "\n      ")
                .concat(_this.footerHtml(), "\n    ");
            };
          }
          return DisplayArticleTemplate;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DisplayArticleTemplate;

        /***/
      },

    /***/ "./src/Template Method/EditableDisplayArticle.ts":
      /*!*******************************************************!*\
  !*** ./src/Template Method/EditableDisplayArticle.ts ***!
  \*******************************************************/
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
        /* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./DisplayArticleTemplate */ "./src/Template Method/DisplayArticleTemplate.ts"
          );
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

        var EditableDisplayArticle = /** @class */ (function (_super) {
          __extends(EditableDisplayArticle, _super);
          function EditableDisplayArticle(article) {
            return _super.call(this, article) || this;
          }
          // SimpleDisplayArticle과 구현하는 내용이 다릅니다.
          EditableDisplayArticle.prototype.titleHtml = function () {
            return '<div>\n        <span>\uC81C\uBAA9</span>\n        <input value="'.concat(
              this.article.getTitle(),
              '" />\n    </div>'
            );
          };
          EditableDisplayArticle.prototype.contentHtml = function () {
            var items = this.article.getContent().map(function (item) {
              return "".concat(item, "\n");
            });
            return '\n        <span>\uB0B4\uC6A9</span><br>\n        <textarea cols="50" rows="5">'.concat(
              items.join(""),
              "</textarea>\n    "
            );
          };
          EditableDisplayArticle.prototype.footerHtml = function () {
            return '<div>\n        <span>\uD478\uD130</span>\n        <input value="'.concat(
              this.article.getFooter(),
              '" />\n    </div>'
            );
          };
          return EditableDisplayArticle;
        })(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          EditableDisplayArticle;

        /***/
      },

    /***/ "./src/Template Method/SimpleDisplayArticle.ts":
      /*!*****************************************************!*\
  !*** ./src/Template Method/SimpleDisplayArticle.ts ***!
  \*****************************************************/
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
        /* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./DisplayArticleTemplate */ "./src/Template Method/DisplayArticleTemplate.ts"
          );
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

        var SimpleDisplayArticle = /** @class */ (function (_super) {
          __extends(SimpleDisplayArticle, _super);
          function SimpleDisplayArticle(article) {
            return _super.call(this, article) || this;
          }
          SimpleDisplayArticle.prototype.titleHtml = function () {
            return "<h1>".concat(this.article.getTitle(), "</h1>");
          };
          SimpleDisplayArticle.prototype.contentHtml = function () {
            var items = this.article.getContent().map(function (item) {
              return "<li>".concat(item, "</li>");
            });
            return "<ul>".concat(items.join(""), "</ul>");
          };
          SimpleDisplayArticle.prototype.footerHtml = function () {
            return "<footer>".concat(this.article.getFooter(), "</footer>");
          };
          return SimpleDisplayArticle;
        })(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SimpleDisplayArticle;

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
    /* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./Article */ "./src/Article.ts");
    /* harmony import */ var _Template_Method_EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ./Template Method/EditableDisplayArticle */ "./src/Template Method/EditableDisplayArticle.ts"
      );
    /* harmony import */ var _Template_Method_SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ./Template Method/SimpleDisplayArticle */ "./src/Template Method/SimpleDisplayArticle.ts"
      );

    var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"](
      "제목123",
      ["컨텐츠1", "컨텐츠2", "컨텐츠3", "컨텐츠4"],
      "푸터123"
    );
    var display =
      new _Template_Method_SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__[
        "default"
      ](article);
    document.querySelector(".content").innerHTML = display.displayHtml();
    document
      .querySelector(".edit-mode")
      .addEventListener("change", function (event) {
        var display;
        if (event.target.checked) {
          display =
            new _Template_Method_EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ](article);
        } else {
          display =
            new _Template_Method_SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ](article);
        }
        document.querySelector(".content").innerHTML = display.displayHtml();
      });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDOEM7QUFDSjtBQUUxRSxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQ3pCLE9BQU8sRUFDUCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUNoQyxPQUFPLENBQ1IsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLElBQUksNkVBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRXJFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSztJQUNwRSxJQUFJLE9BQU8sQ0FBQztJQUVaLElBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFO1FBQzVDLE9BQU8sR0FBRyxJQUFJLCtFQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9DO1NBQU07UUFDTCxPQUFPLEdBQUcsSUFBSSw2RUFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QztJQUVELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmF0ZWd5Ly4vc3JjL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvVGVtcGxhdGUgTWV0aG9kL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvVGVtcGxhdGUgTWV0aG9kL0VkaXRhYmxlRGlzcGxheUFydGljbGUudHMiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvVGVtcGxhdGUgTWV0aG9kL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3N0cmF0ZWd5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0cmF0ZWd5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdHJhdGVneS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0cmF0ZWd5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RyYXRlZ3kvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdLFxuICAgIHByaXZhdGUgZm9vdGVyOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgcHVibGljIGdldENvbnRlbnQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9vdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vQXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFydGljbGU6IEFydGljbGUpIHt9XG5cbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXlIdG1sID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICAke3RoaXMudGl0bGVIdG1sKCl9XG4gICAgICAke3RoaXMuY29udGVudEh0bWwoKX1cbiAgICAgICR7dGhpcy5mb290ZXJIdG1sKCl9XG4gICAgYDtcbiAgfTtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdGl0bGVIdG1sKCk6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbnRlbnRIdG1sKCk6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGZvb3Rlckh0bWwoKTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL0FydGljbGVcIjtcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cblxuICAvLyBTaW1wbGVEaXNwbGF5QXJ0aWNsZeqzvCDqtaztmITtlZjripQg64K07Jqp7J20IOuLpOultOuLpC5cbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj5cbiAgICAgICAgPHNwYW4+7KCc66qpPC9zcGFuPlxuICAgICAgICA8aW5wdXQgdmFsdWU9XCIke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfVwiIC8+XG4gICAgPC9kaXY+YDtcbiAgfVxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuYXJ0aWNsZS5nZXRDb250ZW50KCkubWFwKChpdGVtKSA9PiBgJHtpdGVtfVxcbmApO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxzcGFuPuuCtOyaqTwvc3Bhbj48YnI+XG4gICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNTBcIiByb3dzPVwiNVwiPiR7aXRlbXMuam9pbihcIlwiKX08L3RleHRhcmVhPlxuICAgIGA7XG4gIH1cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxkaXY+XG4gICAgICAgIDxzcGFuPu2RuO2EsDwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHZhbHVlPVwiJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9XCIgLz5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vQXJ0aWNsZVwiO1xuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vRGlzcGxheUFydGljbGVUZW1wbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGgxPiR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9PC9oMT5gO1xuICB9XG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtcy5qb2luKFwiXCIpfTwvdWw+YDtcbiAgfVxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGZvb3Rlcj4ke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX08L2Zvb3Rlcj5gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcbmltcG9ydCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGZyb20gXCIuL1RlbXBsYXRlIE1ldGhvZC9FZGl0YWJsZURpc3BsYXlBcnRpY2xlXCI7XG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vVGVtcGxhdGUgTWV0aG9kL1NpbXBsZURpc3BsYXlBcnRpY2xlXCI7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcbiAgXCLsoJzrqqkxMjNcIixcbiAgW1wi7Luo7YWQ7LigMVwiLCBcIuy7qO2FkOy4oDJcIiwgXCLsu6jthZDsuKAzXCIsIFwi7Luo7YWQ7LigNFwiXSxcbiAgXCLtkbjthLAxMjNcIlxuKTtcblxuY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gIGxldCBkaXNwbGF5O1xuXG4gIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XG4gICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

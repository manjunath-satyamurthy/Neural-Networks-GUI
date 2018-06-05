webpackJsonp([4],{

/***/ 50:
/*!**********************************!*\
  !*** ./main/react/js/sidebar.js ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _jsxFileName = "/home/manju/thesis/app/main/react/js/sidebar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SideBar = function (_Component) {
  _inherits(SideBar, _Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "nav",
          { className: "navbar fixed-top navbar-expand-lg navbar-expand-md navbar-dark row", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { className: "nav-link mr-auto", href: "#", __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: this
            },
            "Neural Networks"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { className: "nav-link", href: "/logout", __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            "Logout"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "row", __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            { className: "nav col-sm-2 col-md-2 flex-column sidebar", __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "sticky-top", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "nav-item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: window.location.pathname === "/upload_csv/" ? "active nav-link" : 'nav-link',
                    href: "/upload_csv", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: this
                  },
                  "Upload CSV"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "nav-item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: window.location.pathname === "/data_pre_process/" ? "active nav-link" : 'nav-link',
                    href: "/data_pre_process", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
                  "Data Preprocessing"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "nav-item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: window.location.pathname === "/build_network/" ? "active nav-link" : 'nav-link',
                    href: "/build_network", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  "Build Network"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "nav-item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: window.location.pathname === "/train_network/" ? "active nav-link" : 'nav-link',
                    href: "/train_network", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    },
                    __self: this
                  },
                  "Train Network"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "nav-item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: window.location.pathname === "/visualization/" ? "active nav-link" : 'nav-link',
                    href: "/visualization", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  "Results Visualization"
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: "page-content", className: "col-sm-10 col-md-10", __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          })
        )
      );
    }
  }]);

  return SideBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SideBar, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: this
}), document.getElementById('react-content'));

/***/ })

},[50]);
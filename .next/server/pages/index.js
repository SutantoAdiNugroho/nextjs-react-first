module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/AppBar */ "material-ui/AppBar");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Tugas\\JavascriptJava\\NextJs\\nextjs-course\\components\\header.js";


const Header = ({
  title = 'Next.js blogging application'
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  title: title,
  showMenuIconButton: false
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _shared_MUI_withMUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/MUI/withMUI */ "./shared/MUI/withMUI.js");

var _jsxFileName = "E:\\Tugas\\JavascriptJava\\NextJs\\nextjs-course\\pages\\index.js";



const Index = ({
  title = "Hello from Next.js"
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_MUI_withMUI__WEBPACK_IMPORTED_MODULE_2__["default"])(Index)); // export default Index;

/***/ }),

/***/ "./shared/MUI/theme.js":
/*!*****************************!*\
  !*** ./shared/MUI/theme.js ***!
  \*****************************/
/*! exports provided: PRIMARY_COLOR, PRIMARY_COLOR_TWO, PRIMARY_COLOR_THREE, ACCENT_COLOR_ONE, ACCENT_COLOR_TWO, ACCENT_COLOR_THREE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_TWO", function() { return PRIMARY_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_THREE", function() { return PRIMARY_COLOR_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_ONE", function() { return ACCENT_COLOR_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_TWO", function() { return ACCENT_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_THREE", function() { return ACCENT_COLOR_THREE; });
const PRIMARY_COLOR = '#569cb7';
const PRIMARY_COLOR_TWO = '#88cde9';
const PRIMARY_COLOR_THREE = '#1e6e87';
const ACCENT_COLOR_ONE = '#556cb7';
const ACCENT_COLOR_TWO = '#889aea';
const ACCENT_COLOR_THREE = '#204287';

/***/ }),

/***/ "./shared/MUI/withMUI.js":
/*!*******************************!*\
  !*** ./shared/MUI/withMUI.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "material-ui/styles/MuiThemeProvider");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/styles/getMuiTheme */ "material-ui/styles/getMuiTheme");
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tap-event-plugin */ "react-tap-event-plugin");
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./shared/MUI/theme.js");

var _jsxFileName = "E:\\Tugas\\JavascriptJava\\NextJs\\nextjs-course\\shared\\MUI\\withMUI.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








try {
  react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4___default()();
} catch (error) {}

const withMaterialUI = ComposedComponent => {
  class HOC extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    // static async getInitialProps(ctx) {
    //     const {req} = ctx;
    //     const userAgent = req ? req.header['user-agent'] : navigator.userAgent;
    //     //const subProps = await ComposedComponent.getInitialProps(ctx);
    //     return {
    //         //...subProps,
    //         userAgent
    //     };
    // }
    render() {
      const {
        userAgent
      } = this.props;
      const Lato = 'lato, sans-serif';
      const muiTheme = material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3___default()({
        fontFamily: Lato,
        palette: {
          primary1Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR"],
          primary2Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR_TWO"],
          primary3Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR_THREE"],
          accent1Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_ONE"],
          accent2Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_TWO"],
          accent3Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_THREE"]
        },
        appBar: {
          height: 50
        }
      } // {
      //     userAgent
      // }
      );
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Nextjs Blogger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css?family=Lato",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default.a, {
          muiTheme: muiTheme,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ComposedComponent, _objectSpread({}, this.props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this);
    }

  }

  return HOC;
};

/* harmony default export */ __webpack_exports__["default"] = (withMaterialUI);

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/*!******************************************************!*\
  !*** external "material-ui/styles/MuiThemeProvider" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/*!*************************************************!*\
  !*** external "material-ui/styles/getMuiTheme" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tap-event-plugin":
/*!*****************************************!*\
  !*** external "react-tap-event-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL01VSS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvTVVJL3dpdGhNVUkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRhcC1ldmVudC1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0aXRsZSIsIkluZGV4Iiwid2l0aE1VSSIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX1RXTyIsIlBSSU1BUllfQ09MT1JfVEhSRUUiLCJBQ0NFTlRfQ09MT1JfT05FIiwiQUNDRU5UX0NPTE9SX1RXTyIsIkFDQ0VOVF9DT0xPUl9USFJFRSIsImluamVjdFRhcEV2ZW5QbHVnaW4iLCJlcnJvciIsIndpdGhNYXRlcmlhbFVJIiwiQ29tcG9zZWRDb21wb25lbnQiLCJIT0MiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsIkxhdG8iLCJtdWlUaGVtZSIsImdldE11aVRoZW1lIiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJwcmltYXJ5MUNvbG9yIiwicHJpbWFyeTJDb2xvciIsInByaW1hcnkzQ29sb3IiLCJhY2NlbnQxQ29sb3IiLCJhY2NlbnQyQ29sb3IiLCJhY2NlbnQzQ29sb3IiLCJhcHBCYXIiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLE9BQUssR0FBRztBQUFWLENBQUQsa0JBQ1gscUVBQUMseURBQUQ7QUFBUSxPQUFLLEVBQUVBLEtBQWY7QUFBc0Isb0JBQWtCLEVBQUU7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUdlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQSxNQUFNRSxLQUFLLEdBQUcsQ0FBQztBQUFFRCxPQUFLLEdBQUU7QUFBVCxDQUFELGtCQUNWO0FBQUEsMEJBQ0EscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUk7QUFBQSxjQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFNZUUsa0lBQU8sQ0FBQ0QsS0FBRCxDQUF0QixFLENBQ0Esd0I7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUUsYUFBYSxHQUFHLFNBQXRCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBekI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUEzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFJO0FBQ0FDLCtEQUFtQjtBQUN0QixDQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjLENBRWY7O0FBRUQsTUFBTUMsY0FBYyxHQUFHQyxpQkFBaUIsSUFBSTtBQUN4QyxRQUFNQyxHQUFOLFNBQWtCQywrQ0FBbEIsQ0FBNEI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFVBQU0sR0FBRztBQUNMLFlBQU07QUFBQ0M7QUFBRCxVQUFjLEtBQUtDLEtBQXpCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLGtCQUFiO0FBQ0EsWUFBTUMsUUFBUSxHQUFHQyxxRUFBVyxDQUFDO0FBQ3pCQyxrQkFBVSxFQUFFSCxJQURhO0FBRXpCSSxlQUFPLEVBQUU7QUFDTEMsdUJBQWEsRUFBRXBCLG9EQURWO0FBRUxxQix1QkFBYSxFQUFFcEIsd0RBRlY7QUFHTHFCLHVCQUFhLEVBQUVwQiwwREFIVjtBQUlMcUIsc0JBQVksRUFBRXBCLHVEQUpUO0FBS0xxQixzQkFBWSxFQUFFcEIsdURBTFQ7QUFNTHFCLHNCQUFZLEVBQUVwQix5REFBa0JBO0FBTjNCLFNBRmdCO0FBVXpCcUIsY0FBTSxFQUFFO0FBQ0pDLGdCQUFNLEVBQUU7QUFESjtBQVZpQixPQUFELENBYzVCO0FBQ0E7QUFDQTtBQWhCNEIsT0FBNUI7QUFrQkEsMEJBQ0k7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBc0IsbUJBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBTSxnQkFBSSxFQUFDLDhDQUFYO0FBQTBELGVBQUcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JLHFFQUFDLDBFQUFEO0FBQWtCLGtCQUFRLEVBQUVYLFFBQTVCO0FBQUEsaUNBQ0kscUVBQUMsaUJBQUQsb0JBQXVCLEtBQUtGLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBWUg7O0FBNUN1Qjs7QUE4QzVCLFNBQU9KLEdBQVA7QUFDSCxDQWhERDs7QUFrRGVGLDZFQUFmLEU7Ozs7Ozs7Ozs7O0FDdEVBLCtDOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgdGl0bGUgPSAnTmV4dC5qcyBibG9nZ2luZyBhcHBsaWNhdGlvbicgfSkgPT5cclxuICAgIDxBcHBCYXIgdGl0bGU9e3RpdGxlfSBzaG93TWVudUljb25CdXR0b249e2ZhbHNlfSAvPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCB3aXRoTVVJIGZyb20gJy4uL3NoYXJlZC9NVUkvd2l0aE1VSSdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgdGl0bGU9IFwiSGVsbG8gZnJvbSBOZXh0LmpzXCIgfSkgPT5cclxuICAgIDxkaXY+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTVVJKEluZGV4KTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1IgPSAnIzU2OWNiNydcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfVFdPID0gJyM4OGNkZTknXHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX1RIUkVFID0gJyMxZTZlODcnXHJcbmV4cG9ydCBjb25zdCBBQ0NFTlRfQ09MT1JfT05FID0gJyM1NTZjYjcnXHJcbmV4cG9ydCBjb25zdCBBQ0NFTlRfQ09MT1JfVFdPID0gJyM4ODlhZWEnXHJcbmV4cG9ydCBjb25zdCBBQ0NFTlRfQ09MT1JfVEhSRUUgPSAnIzIwNDI4NyciLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xyXG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xyXG5pbXBvcnQgaW5qZWN0VGFwRXZlblBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7XHJcbiAgICBQUklNQVJZX0NPTE9SLFxyXG4gICAgUFJJTUFSWV9DT0xPUl9UV08sXHJcbiAgICBQUklNQVJZX0NPTE9SX1RIUkVFLFxyXG4gICAgQUNDRU5UX0NPTE9SX09ORSxcclxuICAgIEFDQ0VOVF9DT0xPUl9UV08sXHJcbiAgICBBQ0NFTlRfQ09MT1JfVEhSRUUsXHJcbn0gZnJvbSAnLi90aGVtZSdcclxuXHJcbnRyeSB7XHJcbiAgICBpbmplY3RUYXBFdmVuUGx1Z2luKCk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3Qgd2l0aE1hdGVyaWFsVUkgPSBDb21wb3NlZENvbXBvbmVudCA9PiB7XHJcbiAgICBjbGFzcyBIT0MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgICAgIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHtyZXF9ID0gY3R4O1xyXG4gICAgICAgIC8vICAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIC8vICAgICAvL2NvbnN0IHN1YlByb3BzID0gYXdhaXQgQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblxyXG4gICAgICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8uLi5zdWJQcm9wcyxcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJBZ2VudFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt1c2VyQWdlbnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgY29uc3QgTGF0byA9ICdsYXRvLCBzYW5zLXNlcmlmJztcclxuICAgICAgICAgICAgY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBMYXRvLFxyXG4gICAgICAgICAgICAgICAgcGFsZXR0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnkxQ29sb3I6IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTJDb2xvcjogUFJJTUFSWV9DT0xPUl9UV08sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTNDb2xvcjogUFJJTUFSWV9DT0xPUl9USFJFRSxcclxuICAgICAgICAgICAgICAgICAgICBhY2NlbnQxQ29sb3I6IEFDQ0VOVF9DT0xPUl9PTkUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZW50MkNvbG9yOiBBQ0NFTlRfQ09MT1JfVFdPLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VudDNDb2xvcjogQUNDRU5UX0NPTE9SX1RIUkVFXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXBwQmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgdXNlckFnZW50XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk5leHRqcyBCbG9nZ2VyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSE9DO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTWF0ZXJpYWxVSVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YXAtZXZlbnQtcGx1Z2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
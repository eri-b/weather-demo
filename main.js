/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst displayWeather = (weather) => {\n  console.log(weather.loc);\n  document.querySelector('#loc').innerHTML = weather.loc;\n  document.querySelector('#temp').innerHTML = `${Math.round(weather.temp)}&#176;C`;\n  document.querySelector('#desc').innerHTML = weather.desc;\n  const iconurl = `http://openweathermap.org/img/w/${weather.icon}.png`;\n  const img = document.createElement('img');\n  img.src = iconurl;\n  document.querySelector('#icon').appendChild(img);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayWeather);\n\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: events, findWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"events\", function() { return events; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findWeather\", function() { return findWeather; });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\nconst parseWeather = (data) => {\n  const obj = {\n    loc: data.name,\n    temp: data.main.temp,\n    desc: data.weather[0].description,\n    icon: data.weather[0].icon,\n  };\n  return obj;\n};\n\nconst setLocal = (temp) => {\n  localStorage.setItem('celsius', temp);\n};\n\nconst findWeather = (location) => {\n  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=24bc3889266a1fd87fecc9abc9dd9f33&units=metric`, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => {\n      console.log(response);\n      const weather = parseWeather(response);\n      Object(_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weather);\n      setLocal(weather.temp);\n    });\n};\n\nconst toF = (cel) => {\n  const f = cel * (9 / 5) + 32;\n  return f;\n};\n\nconst toC = (f) => {\n  const c = (f - 32) * (5 / 9);\n  return c;\n};\n\nconst events = () => {\n  document.querySelector('form').addEventListener('submit', (e) => {\n    e.preventDefault();\n    const loc = document.querySelector('#location').value;\n    findWeather(loc);\n  });\n\n  document.querySelector('#tempToggle').addEventListener('click', (e) => {\n    e.preventDefault();\n    const temp = document.querySelector('#temp');\n    // const newTemp = localStorage.getItem('celsius') ? toF(localStorage.getItem('celsius')) : toF(localStorage.getItem('celsius'))\n    // const farh = toF(parseInt(cel));\n    // console.log(farh);\n  });\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\nconst start = 'Brooklyn';\nObject(_events__WEBPACK_IMPORTED_MODULE_0__[\"findWeather\"])(start);\n\nObject(_events__WEBPACK_IMPORTED_MODULE_0__[\"events\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
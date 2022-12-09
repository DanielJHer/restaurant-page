/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBtns": () => (/* binding */ renderBtns),
/* harmony export */   "renderContactHTML": () => (/* binding */ renderContactHTML),
/* harmony export */   "renderHomeHTML": () => (/* binding */ renderHomeHTML),
/* harmony export */   "renderMenuHTML": () => (/* binding */ renderMenuHTML)
/* harmony export */ });
const renderBtns = () => {
  console.log("is this working");
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.innerHTML = "Home";
  nav.appendChild(homeBtn);
  homeBtn.addEventListener("click", renderHomeHTML);

  menuBtn.innerHTML = "Menu";
  nav.appendChild(menuBtn);
  menuBtn.addEventListener("click", renderMenuHTML);

  contactBtn.innerHTML = "Contact";
  nav.appendChild(contactBtn);
  contactBtn.addEventListener("click", renderContactHTML);

  return nav;
};

const renderHomeHTML = () => {
  const homeDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "The Best Korean BBQ in the Bay Area!";
  const aboutUs = document.createElement("p");
  aboutUs.innerText =
    "About Us: We are a Korean-American family owned restaurant based in Oakland, CA. We have been open for over ten years and continue to serve the best Korean BBQ in the Bay Area!";
  const img = document.createElement("img");
  homeDiv.appendChild(headline);
  homeDiv.appendChild(aboutUs);
  homeDiv.appendChild(img);

  return homeDiv;
};

const renderMenuHTML = () => {
  const menuDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "check out our amazing items";

  const img = document.createElement("img");

  menuDiv.appendChild(headline);
  menuDiv.appendChild(paragraph);
  menuDiv.appendChild(img);

  return menuDiv;
};

const renderContactHTML = () => {
  const contactDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "Our contact info!";

  const img = document.createElement("img");

  contactDiv.appendChild(headline);
  contactDiv.appendChild(paragraph);
  contactDiv.appendChild(img);

  return contactDiv;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const renderHome = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  mainDiv.appendChild((0,_functions__WEBPACK_IMPORTED_MODULE_0__.renderBtns)());

  // render html content
  mainDiv.appendChild((0,_functions__WEBPACK_IMPORTED_MODULE_0__.renderHomeHTML)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);


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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const createPage = (() => {
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUV5RTs7Ozs7Ozs7Ozs7Ozs7OztBQzNFaEI7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzREFBVTs7QUFFaEM7QUFDQSxzQkFBc0IsMERBQWM7QUFDcEM7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDYjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWhDO0FBQ0EsRUFBRSxpREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJCdG5zID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd29ya2luZ1wiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVySG9tZUhUTUwpO1xuXG4gIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTWVudUhUTUwpO1xuXG4gIGNvbnRhY3RCdG4uaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQ29udGFjdEhUTUwpO1xuXG4gIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCByZW5kZXJIb21lSFRNTCA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUaGUgQmVzdCBLb3JlYW4gQkJRIGluIHRoZSBCYXkgQXJlYSFcIjtcbiAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFVzLmlubmVyVGV4dCA9XG4gICAgXCJBYm91dCBVczogV2UgYXJlIGEgS29yZWFuLUFtZXJpY2FuIGZhbWlseSBvd25lZCByZXN0YXVyYW50IGJhc2VkIGluIE9ha2xhbmQsIENBLiBXZSBoYXZlIGJlZW4gb3BlbiBmb3Igb3ZlciB0ZW4geWVhcnMgYW5kIGNvbnRpbnVlIHRvIHNlcnZlIHRoZSBiZXN0IEtvcmVhbiBCQlEgaW4gdGhlIEJheSBBcmVhIVwiO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIHJldHVybiBob21lRGl2O1xufTtcblxuY29uc3QgcmVuZGVyTWVudUhUTUwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhlYWRsaW5lLmlubmVyVGV4dCA9IFwiT3VyIE1lbnUhXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC5pbm5lclRleHQgPSBcImNoZWNrIG91dCBvdXIgYW1hemluZyBpdGVtc1wiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgbWVudURpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIHJldHVybiBtZW51RGl2O1xufTtcblxuY29uc3QgcmVuZGVyQ29udGFjdEhUTUwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhlYWRsaW5lLmlubmVyVGV4dCA9IFwiQ29udGFjdCB1cyFcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiT3VyIGNvbnRhY3QgaW5mbyFcIjtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICByZXR1cm4gY29udGFjdERpdjtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJ0bnMsIHJlbmRlckhvbWVIVE1MLCByZW5kZXJNZW51SFRNTCwgcmVuZGVyQ29udGFjdEhUTUwgfTtcbiIsImltcG9ydCB7IHJlbmRlckJ0bnMsIHJlbmRlckhvbWVIVE1MIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyByZW5kZXIgYnV0dG9uc1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHJlbmRlckJ0bnMoKSk7XG5cbiAgLy8gcmVuZGVyIGh0bWwgY29udGVudFxuICBtYWluRGl2LmFwcGVuZENoaWxkKHJlbmRlckhvbWVIVE1MKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKCgpID0+IHtcbiAgcmVuZGVySG9tZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./app/profile/page.tsx":
/*!******************************!*\
  !*** ./app/profile/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_PinList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PinList */ \"(app-pages-browser)/./app/components/PinList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Profile = ()=>{\n    var _session_user, _session_user1, _session_user2;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    // if (!session) {\n    //     router.push('/');\n    //     return null; // Return null while session is loading or not available\n    // }\n    const HandleSignOut = ()=>{\n        router.push(\"/\");\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-fit flex-col mt-5 gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"bg-gray-100 px-5 py-5 rounded-lg flex flex-col md:flex-row justify-center md:items-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"relative w-32 h-32 md:w-40 md:h-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            src: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image,\n                            layout: \"fill\",\n                            className: \"rounded-full\",\n                            alt: \"Profile Image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex flex-col items-center gap-2 text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"font-semibold\",\n                                children: session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name\n                            }, void 0, false, {\n                                fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.email\n                            }, void 0, false, {\n                                fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: HandleSignOut,\n                        class: \"bg-black text-white px-4 py-2 rounded-full hover:bg-red-600 hover:text-white\",\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PinList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/keshavmalik/Desktop/pintrest-clone/app/profile/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Profile, \"6qmYa+8MTHRrO97QW2taisqHZrE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQzRCO0FBQ1Y7QUFDYjtBQUNhO0FBRzVDLE1BQU1NLFVBQVU7UUFtQmdCQyxlQUlnQkEsZ0JBQ3RCQTs7SUF2QnRCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVNLE1BQU1GLE9BQU8sRUFBRUcsTUFBTSxFQUFFLEdBQUdULDJEQUFVQTtJQUU1QyxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRFQUE0RTtJQUM1RSxJQUFJO0lBRUosTUFBTVUsZ0JBQWdCO1FBQ2xCSCxPQUFPSSxJQUFJLENBQUM7UUFDWlYsd0RBQU9BO0lBQ1g7SUFFQSxxQkFDSSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJRSxPQUFNOztrQ0FDUCw4REFBQ0Y7d0JBQUlFLE9BQU07a0NBRVAsNEVBQUNYLGtEQUFLQTs0QkFBQ1ksR0FBRyxFQUFFVCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTVSxJQUFJLGNBQWJWLG9DQUFBQSxjQUFlVyxLQUFLOzRCQUFFQyxRQUFPOzRCQUFPTCxXQUFVOzRCQUFlTSxLQUFJOzs7Ozs7Ozs7OztrQ0FHakYsOERBQUNQO3dCQUFJRSxPQUFNOzswQ0FDUCw4REFBQ0Y7Z0NBQUlFLE9BQU07MENBQWlCUixvQkFBQUEsK0JBQUFBLGlCQUFBQSxRQUFTVSxJQUFJLGNBQWJWLHFDQUFBQSxlQUFlYyxJQUFJOzs7Ozs7MENBQy9DLDhEQUFDUjswQ0FBS04sb0JBQUFBLCtCQUFBQSxpQkFBQUEsUUFBU1UsSUFBSSxjQUFiVixxQ0FBQUEsZUFBZWUsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ0M7d0JBQU9DLFNBQVNiO3dCQUFlSSxPQUFNO2tDQUErRTs7Ozs7Ozs7Ozs7OzBCQU16SCw4REFBQ0Y7MEJBQ0csNEVBQUNSLDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQXRDTUM7O1FBQ2FILHNEQUFTQTtRQUNVRix1REFBVUE7OztLQUYxQ0s7QUF3Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2ZpbGUvcGFnZS50c3g/MWY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFBpbkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9QaW5MaXN0JztcbmltcG9ydCBQaW4gZnJvbSAnLi4vY29tcG9uZW50cy9QaW4nXG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIC8vIGlmICghc2Vzc2lvbikge1xuICAgIC8vICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIC8vICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgd2hpbGUgc2Vzc2lvbiBpcyBsb2FkaW5nIG9yIG5vdCBhdmFpbGFibGVcbiAgICAvLyB9XG5cbiAgICBjb25zdCBIYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICBzaWduT3V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZml0IGZsZXgtY29sIG10LTUgZ2FwLTUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmctZ3JheS0xMDAgcHgtNSBweS01IHJvdW5kZWQtbGcgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgZ2FwLTgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JlbGF0aXZlIHctMzIgaC0zMiBtZDp3LTQwIG1kOmgtNDAnPlxuICAgICAgICAgICAgICAgICAgICB7LyogQHRzLWlnbm9yZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2Vzc2lvbj8udXNlcj8uaW1hZ2V9IGxheW91dD0nZmlsbCcgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIGFsdD0nUHJvZmlsZSBJbWFnZScgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteGwnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb250LXNlbWlib2xkJz57c2Vzc2lvbj8udXNlcj8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57c2Vzc2lvbj8udXNlcj8uZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0hhbmRsZVNpZ25PdXR9IGNsYXNzPSdiZy1ibGFjayB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTYwMCBob3Zlcjp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBpbkxpc3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlUm91dGVyIiwiSW1hZ2UiLCJQaW5MaXN0IiwiUHJvZmlsZSIsInNlc3Npb24iLCJyb3V0ZXIiLCJkYXRhIiwic3RhdHVzIiwiSGFuZGxlU2lnbk91dCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsInNyYyIsInVzZXIiLCJpbWFnZSIsImxheW91dCIsImFsdCIsIm5hbWUiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/layout",{

/***/ "(app-pages-browser)/./components/docs/sidebar.tsx":
/*!*************************************!*\
  !*** ./components/docs/sidebar.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/docs/search */ \"(app-pages-browser)/./components/docs/search.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hand.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSidebarChange */ \"(app-pages-browser)/./hooks/useSidebarChange.tsx\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Introduction\",\n        href: \"#\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Installation\",\n        href: \"#installation\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        name: \"Documentation\",\n        href: \"#docs\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        name: \"Components\",\n        href: \"#components\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        name: \"Sponsor\",\n        href: \"#sponsor\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }\n];\nconst GETTING_STARTED = [\n    {\n        name: \"Getting Started\",\n        subcategories: [\n            \"Introduction\",\n            \"Installation\",\n            \"CLI\"\n        ]\n    }\n];\nfunction normalizeURL(url) {\n    return url.replace(/\\s+/g, \"-\");\n}\nfunction Sidebar() {\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const { activeRoute, setActiveRoute } = (0,_hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [componentsData, setcomponentsData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            getComponentsData();\n        }\n    }[\"Sidebar.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            let active = pathName;\n            if (pathName.includes(\"/docs/components\")) {\n                active = pathName.split(\"/docs/components/\")[1];\n            } else if (pathName.includes(\"/docs\")) {\n                active = pathName.split(\"/docs/\")[1];\n            }\n            setActiveRoute(active);\n        }\n    }[\"Sidebar.useEffect\"], [\n        pathName,\n        setActiveRoute\n    ]);\n    const getComponentsData = async ()=>{\n        const repoOwner = \"trend-ui\";\n        const repoName = \"trendui-react-native\";\n        const path = \"src/components\";\n        const url = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(path);\n        try {\n            const res = await fetch(url, {\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch component list: \".concat(res.statusText));\n            }\n            const data = await res.json();\n            const components = data.filter((item)=>item.type === \"dir\") // Ensure it's a directory (component folder)\n            .map((folder)=>({\n                    name: folder.name,\n                    isNew: false\n                }));\n            setcomponentsData(components);\n            setLoader(false);\n        } catch (error) {\n            console.error(\"Error fetching component list:\", error);\n            return [];\n        }\n    };\n    const CATEGORIES = [\n        {\n            name: \"Components\",\n            subcategories: componentsData\n        },\n        {\n            name: \"Sponsor\",\n            subcategories: [\n                {\n                    name: \"Sponsor\",\n                    isNew: false\n                }\n            ]\n        }\n    ];\n    console.log(componentsData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-col p-4 sm:p-6 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_docs_search__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            GETTING_STARTED.map((category)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-md mb-3 font-geistSemiBold\",\n                            children: category.name\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"ml-2 space-y-2\",\n                            children: category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>setActive(!active),\n                                    className: \"w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                    onKeyDown: (e)=>{\n                                        if (e.key === \"Enter\" || e.key === \" \") {\n                                            setActive(!active);\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/docs/\".concat(normalizeURL(subcategory.toLowerCase())),\n                                        className: (param)=>{\n                                            let { isActive } = param;\n                                            return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                        },\n                                        children: subcategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 21\n                                    }, this)\n                                }, subcategory, false, {\n                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, category.name, true, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 13\n                }, this);\n            }),\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%]  h-[40vh] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-blue-600\"\n                }, void 0, false, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: CATEGORIES.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-md mb-3 font-geistSemiBold\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 194,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-2 space-y-2\",\n                                children: category.subcategories.map((subcategory)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: ()=>setActive(!active),\n                                        className: \"flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                        onKeyDown: (e)=>{\n                                            if (e.key === \"Enter\" || e.key === \" \") {\n                                                setActive(!active);\n                                            }\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/docs/\".concat(category.name.toLowerCase(), \"/\").concat(normalizeURL(subcategory.name.toLowerCase())),\n                                                className: \"border-gray-700 \".concat(activeRoute === category.name.toLowerCase() ? 'text-white' : 'text-red-500'),\n                                                children: subcategory.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 210,\n                                                columnNumber: 25\n                                            }, this),\n                                            subcategory.isNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300\",\n                                                children: \"new\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 219,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, subcategory.name, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 200,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 197,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.name, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"xKEJ7w1vbFXN+EZy9h7t+1T9omY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkI7QUFDaUI7QUFHSTtBQU81QjtBQUNzQjtBQUNZO0FBRXhELE1BQU1XLGFBQWE7SUFDakI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1YLDZIQUFJQTtJQUNaO0lBQ0E7UUFDRVMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1QLDZIQUFlQTtJQUN2QjtJQUNBO1FBQ0VLLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNViw2SEFBUUE7SUFDaEI7SUFDQTtRQUNFUSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVQsNkhBQVFBO0lBQ2hCO0lBQ0E7UUFDRU8sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1SLDhIQUFVQTtJQUNsQjtDQUNEO0FBRUQsTUFBTVMsa0JBQWtCO0lBQ3RCO1FBQ0VILE1BQU07UUFDTkksZUFBZTtZQUFDO1lBQWdCO1lBQWdCO1NBQU07SUFDeEQ7Q0FDRDtBQUVELFNBQVNDLGFBQWFDLEdBQVc7SUFDL0IsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLFFBQVE7QUFDN0I7QUFFTyxTQUFTQzs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDckMsTUFBTWMsV0FBV3RCLDREQUFXQTtJQUM1QixNQUFNLEVBQUV1QixXQUFXLEVBQUVDLGNBQWMsRUFBRSxHQUFHZixtRUFBZ0JBO0lBQ3hELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0E7NkJBQUM7WUFDUnNCO1FBQ0Y7NEJBQUcsRUFBRTtJQUVMdEIsZ0RBQVNBOzZCQUFDO1lBQ1IsSUFBSW9CLFNBQVNMO1lBRWIsSUFBSUEsU0FBU1EsUUFBUSxDQUFDLHFCQUFxQjtnQkFDekNILFNBQVNMLFNBQVNTLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sSUFBSVQsU0FBU1EsUUFBUSxDQUFDLFVBQVU7Z0JBQ3JDSCxTQUFTTCxTQUFTUyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEM7WUFFQVAsZUFBZUc7UUFDakI7NEJBQUc7UUFBQ0w7UUFBVUU7S0FBZTtJQUU3QixNQUFNSyxvQkFBb0I7UUFDeEIsTUFBTUcsWUFBWTtRQUNsQixNQUFNQyxXQUFXO1FBQ2pCLE1BQU1DLE9BQU87UUFFYixNQUFNakIsTUFBTSxnQ0FBNkNnQixPQUFiRCxXQUFVLEtBQXdCRSxPQUFyQkQsVUFBUyxjQUFpQixPQUFMQztRQUU5RSxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNbkIsS0FBSztZQUs3QjtZQUVBLElBQUksQ0FBQ2tCLElBQUlFLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU0sbUNBQWtELE9BQWZILElBQUlJLFVBQVU7WUFDbkU7WUFFQSxNQUFNQyxPQUFPLE1BQU1MLElBQUlNLElBQUk7WUFDM0IsTUFBTUMsYUFBYUYsS0FDaEJHLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxJQUFJLEtBQUssT0FBTyw2Q0FBNkM7YUFDeEZDLEdBQUcsQ0FBQyxDQUFDQyxTQUFpQjtvQkFBRXBDLE1BQU1vQyxPQUFPcEMsSUFBSTtvQkFBRXFDLE9BQU87Z0JBQU07WUFDM0R0QixrQkFBa0JnQjtZQUNsQnJCLFVBQVU7UUFDWixFQUFFLE9BQU80QixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO1lBQ2hELE9BQU8sRUFBRTtRQUNYO0lBQ0Y7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCO1lBQ0V4QyxNQUFNO1lBQ05JLGVBQWVVO1FBQ2pCO1FBQ0E7WUFDRWQsTUFBTTtZQUNOSSxlQUFlO2dCQUFDO29CQUFFSixNQUFNO29CQUFXcUMsT0FBTztnQkFBTTthQUFFO1FBQ3BEO0tBQ0Q7SUFFREUsUUFBUUUsR0FBRyxDQUFDM0I7SUFFWixxQkFDRSw4REFBQzRCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDckQsMkRBQU1BOzs7OztZQXVCTmEsZ0JBQWdCZ0MsR0FBRyxDQUNsQixDQUFDUztnQkFDQyxxQkFDRSw4REFBQ0Y7b0JBQXdCQyxXQUFVOztzQ0FDakMsOERBQUNFOzRCQUFHRixXQUFVO3NDQUNYQyxTQUFTNUMsSUFBSTs7Ozs7O3NDQUVoQiw4REFBQzhDOzRCQUFHSCxXQUFVO3NDQUNYQyxTQUFTeEMsYUFBYSxDQUFDK0IsR0FBRyxDQUFDLENBQUNZLDRCQUMzQiw4REFBQ0M7b0NBRUNDLFNBQVMsSUFBTWhDLFVBQVUsQ0FBQ0Q7b0NBQzFCMkIsV0FBVTtvQ0FDVk8sV0FBVyxDQUFDQzt3Q0FDVixJQUFJQSxFQUFFQyxHQUFHLEtBQUssV0FBV0QsRUFBRUMsR0FBRyxLQUFLLEtBQUs7NENBQ3RDbkMsVUFBVSxDQUFDRDt3Q0FDYjtvQ0FDRjs4Q0FFQSw0RUFBQzVCLGlEQUFJQTt3Q0FDSGEsTUFBTSxTQUFpRCxPQUF4Q0ksYUFBYTBDLFlBQVlNLFdBQVc7d0NBQ25EVixXQUFXO2dEQUFDLEVBQUVXLFFBQVEsRUFBRTttREFDdEJBLFdBQ0ksK0JBQ0E7O2tEQUdMUDs7Ozs7O21DQWpCRUE7Ozs7Ozs7Ozs7O21CQVBISCxTQUFTNUMsSUFBSTs7Ozs7WUErQjNCO1lBRURTLHVCQUNDLDhEQUFDaUM7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7O3FDQUdqQjswQkFDR0gsV0FBV0wsR0FBRyxDQUFDLENBQUNTO29CQUNmLHFCQUNFLDhEQUFDRjt3QkFBd0JDLFdBQVU7OzBDQUNqQyw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQ1hDLFNBQVM1QyxJQUFJOzs7Ozs7MENBRWhCLDhEQUFDOEM7Z0NBQUdILFdBQVU7MENBQ1hDLFNBQVN4QyxhQUFhLENBQUMrQixHQUFHLENBQUMsQ0FBQ1k7b0NBQzNCLHFCQUNFLDhEQUFDQzt3Q0FFQ0MsU0FBUyxJQUFNaEMsVUFBVSxDQUFDRDt3Q0FDMUIyQixXQUFVO3dDQUNWTyxXQUFXLENBQUNDOzRDQUNWLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxXQUFXRCxFQUFFQyxHQUFHLEtBQUssS0FBSztnREFDdENuQyxVQUFVLENBQUNEOzRDQUNiO3dDQUNGOzswREFFQSw4REFBQzVCLGlEQUFJQTtnREFDSGEsTUFBTSxTQUF3Q0ksT0FBL0J1QyxTQUFTNUMsSUFBSSxDQUFDcUQsV0FBVyxJQUFHLEtBRXpDLE9BRjRDaEQsYUFDNUMwQyxZQUFZL0MsSUFBSSxDQUFDcUQsV0FBVztnREFFOUJWLFdBQVcsbUJBQStGLE9BQTVFL0IsZ0JBQWdCZ0MsU0FBUzVDLElBQUksQ0FBQ3FELFdBQVcsS0FBSyxlQUFlOzBEQUUxRk4sWUFBWS9DLElBQUk7Ozs7Ozs0Q0FFbEIrQyxZQUFZVixLQUFLLGtCQUNoQiw4REFBQ2tCO2dEQUFFWixXQUFVOzBEQUFxSTs7Ozs7Ozt1Q0FsQi9JSSxZQUFZL0MsSUFBSTs7Ozs7Z0NBd0IzQjs7Ozs7Ozt1QkFoQ000QyxTQUFTNUMsSUFBSTs7Ozs7Z0JBb0MzQjs7Ozs7Ozs7QUFLVjtHQWpMZ0JROztRQUVHbkIsd0RBQVdBO1FBQ1lTLCtEQUFnQkE7OztLQUgxQ1UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmlhcnNhamVlYi9EZXNrdG9wL0JldGFmaWVyL3RyZW5kdWkvY29tcG9uZW50cy9kb2NzL3NpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kb2NzL3NlYXJjaFwiO1xuaW1wb3J0IHtcbiAgSGFuZCxcbiAgRmlsZVRleHQsXG4gIEJvb2tPcGVuLFxuICBIZWxwQ2lyY2xlLFxuICBBcnJvd0Rvd25Ub0xpbmUsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTaWRlYmFyQ2hhbmdlIGZyb20gXCJAL2hvb2tzL3VzZVNpZGViYXJDaGFuZ2VcIjtcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAge1xuICAgIG5hbWU6IFwiSW50cm9kdWN0aW9uXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogSGFuZCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW5zdGFsbGF0aW9uXCIsXG4gICAgaHJlZjogXCIjaW5zdGFsbGF0aW9uXCIsXG4gICAgaWNvbjogQXJyb3dEb3duVG9MaW5lLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgaHJlZjogXCIjZG9jc1wiLFxuICAgIGljb246IEZpbGVUZXh0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21wb25lbnRzXCIsXG4gICAgaHJlZjogXCIjY29tcG9uZW50c1wiLFxuICAgIGljb246IEJvb2tPcGVuLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTcG9uc29yXCIsXG4gICAgaHJlZjogXCIjc3BvbnNvclwiLFxuICAgIGljb246IEhlbHBDaXJjbGUsXG4gIH0sXG5dO1xuXG5jb25zdCBHRVRUSU5HX1NUQVJURUQgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkludHJvZHVjdGlvblwiLCBcIkluc3RhbGxhdGlvblwiLCBcIkNMSVwiXSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVSTCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgeyBhY3RpdmVSb3V0ZSwgc2V0QWN0aXZlUm91dGUgfSA9IHVzZVNpZGViYXJDaGFuZ2UoKTtcbiAgY29uc3QgW2NvbXBvbmVudHNEYXRhLCBzZXRjb21wb25lbnRzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb21wb25lbnRzRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYWN0aXZlID0gcGF0aE5hbWU7XG5cbiAgICBpZiAocGF0aE5hbWUuaW5jbHVkZXMoXCIvZG9jcy9jb21wb25lbnRzXCIpKSB7XG4gICAgICBhY3RpdmUgPSBwYXRoTmFtZS5zcGxpdChcIi9kb2NzL2NvbXBvbmVudHMvXCIpWzFdO1xuICAgIH0gZWxzZSBpZiAocGF0aE5hbWUuaW5jbHVkZXMoXCIvZG9jc1wiKSkge1xuICAgICAgYWN0aXZlID0gcGF0aE5hbWUuc3BsaXQoXCIvZG9jcy9cIilbMV07XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlUm91dGUoYWN0aXZlKTtcbiAgfSwgW3BhdGhOYW1lLCBzZXRBY3RpdmVSb3V0ZV0pO1xuXG4gIGNvbnN0IGdldENvbXBvbmVudHNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9Pd25lciA9IFwidHJlbmQtdWlcIjtcbiAgICBjb25zdCByZXBvTmFtZSA9IFwidHJlbmR1aS1yZWFjdC1uYXRpdmVcIjtcbiAgICBjb25zdCBwYXRoID0gXCJzcmMvY29tcG9uZW50c1wiO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtyZXBvT3duZXJ9LyR7cmVwb05hbWV9L2NvbnRlbnRzLyR7cGF0aH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAvLyBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgLy8gSW5jbHVkZSBhIEdpdEh1YiBwZXJzb25hbCBhY2Nlc3MgdG9rZW4gaWYgeW91IGhpdCByYXRlIGxpbWl0c1xuICAgICAgICAvLyAgIC8vIEF1dGhvcml6YXRpb246IGB0b2tlbiBZT1VSX1BFUlNPTkFMX0FDQ0VTU19UT0tFTmAsXG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggY29tcG9uZW50IGxpc3Q6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGRhdGFcbiAgICAgICAgLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnR5cGUgPT09IFwiZGlyXCIpIC8vIEVuc3VyZSBpdCdzIGEgZGlyZWN0b3J5IChjb21wb25lbnQgZm9sZGVyKVxuICAgICAgICAubWFwKChmb2xkZXI6IGFueSkgPT4gKHsgbmFtZTogZm9sZGVyLm5hbWUsIGlzTmV3OiBmYWxzZSB9KSk7XG4gICAgICBzZXRjb21wb25lbnRzRGF0YShjb21wb25lbnRzKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb21wb25lbnQgbGlzdDpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDQVRFR09SSUVTID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tcG9uZW50c1wiLFxuICAgICAgc3ViY2F0ZWdvcmllczogY29tcG9uZW50c0RhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNwb25zb3JcIixcbiAgICAgIHN1YmNhdGVnb3JpZXM6IFt7IG5hbWU6IFwiU3BvbnNvclwiLCBpc05ldzogZmFsc2UgfV0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zb2xlLmxvZyhjb21wb25lbnRzRGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGZsZXgtY29sIHAtNCBzbTpwLTYgbGc6cC04XCI+XG4gICAgICA8U2VhcmNoIC8+XG5cbiAgICAgIHsvKiA8bmF2IGNsYXNzTmFtZT1cIm10LTQgZmxleC0xIHNwYWNlLXktMlwiPlxuICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBpdGVtLmhyZWY7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9e2lzQWN0aXZlID8gXCJzZWNvbmRhcnlcIiA6IFwiZ2hvc3RcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcInctZnVsbCBwLTQgc206cC01IGxnOnAtNiBqdXN0aWZ5LXN0YXJ0IHNoYWRvdy1sZyByb3VuZGVkLWxnIGJvcmRlci0yIGRhcms6Ym9yZGVyLW5vbmUgZGFyazpiZy1uZXV0cmFsLTkwMCBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtODAwXCIsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWFjY2VudFwiIDogXCJob3ZlcjpiZy1hY2NlbnQvNTBcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgc206aC01IHNtOnctNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L25hdj4gKi99XG4gICAgICB7R0VUVElOR19TVEFSVEVELm1hcChcbiAgICAgICAgKGNhdGVnb3J5OiB7IG5hbWU6IHN0cmluZzsgc3ViY2F0ZWdvcmllczogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnkubmFtZX0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1tZCBtYi0zIGZvbnQtZ2Vpc3RTZW1pQm9sZFwiPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWwtMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViY2F0ZWdvcmllcy5tYXAoKHN1YmNhdGVnb3J5OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctbWF4IGJvcmRlci1ncmF5LTUwMCBweC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6Ym9yZGVyLWwtMlwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2NzLyR7bm9ybWFsaXplVVJMKHN1YmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHtsb2FkZXIgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSAgaC1bNDB2aF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCBoLTggdy04IGFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXQtYmx1ZS02MDBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge0NBVEVHT1JJRVMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1tZCBtYi0zIGZvbnQtZ2Vpc3RTZW1pQm9sZFwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWwtMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1tYXggY3Vyc29yLXBvaW50ZXIgZ2FwLXgtMyBib3JkZXItZ3JheS01MDAgcHgtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlci1sLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2NzLyR7Y2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke25vcm1hbGl6ZVVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItZ3JheS03MDAgJHthY3RpdmVSb3V0ZSA9PT0gY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtcmVkLTUwMCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkuaXNOZXcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCItcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwIGJnLWdyZWVuLTMwMC8yMCBweC0zIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtZ3JlZW4tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlNlYXJjaCIsIkhhbmQiLCJGaWxlVGV4dCIsIkJvb2tPcGVuIiwiSGVscENpcmNsZSIsIkFycm93RG93blRvTGluZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2lkZWJhckNoYW5nZSIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImljb24iLCJHRVRUSU5HX1NUQVJURUQiLCJzdWJjYXRlZ29yaWVzIiwibm9ybWFsaXplVVJMIiwidXJsIiwicmVwbGFjZSIsIlNpZGViYXIiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJwYXRoTmFtZSIsImFjdGl2ZVJvdXRlIiwic2V0QWN0aXZlUm91dGUiLCJjb21wb25lbnRzRGF0YSIsInNldGNvbXBvbmVudHNEYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ2V0Q29tcG9uZW50c0RhdGEiLCJpbmNsdWRlcyIsInNwbGl0IiwicmVwb093bmVyIiwicmVwb05hbWUiLCJwYXRoIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImRhdGEiLCJqc29uIiwiY29tcG9uZW50cyIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwibWFwIiwiZm9sZGVyIiwiaXNOZXciLCJlcnJvciIsImNvbnNvbGUiLCJDQVRFR09SSUVTIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnkiLCJoMSIsInVsIiwic3ViY2F0ZWdvcnkiLCJsaSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJlIiwia2V5IiwidG9Mb3dlckNhc2UiLCJpc0FjdGl2ZSIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/docs/sidebar.tsx\n"));

/***/ })

});
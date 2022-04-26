(() => {
var exports = {};
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 41:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Details_container__I38IS",
	"subcontainer": "Details_subcontainer__h24xm",
	"rightside": "Details_rightside__ZJ5_w"
};


/***/ }),

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ apiKey)
/* harmony export */ });
const apiKey = "https://react-http-7e643-default-rtdb.firebaseio.com/links.json";


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _wallpaper_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./components/Details.module.css
var Details_module = __webpack_require__(41);
var Details_module_default = /*#__PURE__*/__webpack_require__.n(Details_module);
// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(989);
;// CONCATENATED MODULE: ./components/Details.js





const Details = (props)=>{
    const { 0: entry , 1: changeData  } = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        fetch(api/* apiKey */.q).then((response)=>{
            return response.json();
        }).then((data)=>{
            for(const key in data){
                if (data[key].name === props.id) {
                    changeData({
                        name: props.id,
                        url: data[key].link
                    });
                }
            }
            console.log(entry);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Details_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: (Details_module_default()).subcontainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: entry.url
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Details_module_default()).rightside,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: entry.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: entry.url,
                            download: true,
                            children: "Download"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Details = (Details);

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(103);
;// CONCATENATED MODULE: ./pages/[wallpaper].js





function Wallpaper() {
    const router = (0,router_.useRouter)();
    console.log(router.query.wallpaper);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Details, {
                id: router.query.wallpaper
            })
        ]
    });
}
/* harmony default export */ const _wallpaper_ = (Wallpaper);
//don't lose data when refreshing
async function getServerSideProps(context) {
    return {
        props: {}
    };
}


/***/ }),

/***/ 514:
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(695)));
module.exports = __webpack_exports__;

})();
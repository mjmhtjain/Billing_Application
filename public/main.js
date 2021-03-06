(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AppComponent/app.component.css":
/*!************************************************!*\
  !*** ./src/app/AppComponent/app.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/AppComponent/app.component.html":
/*!*************************************************!*\
  !*** ./src/app/AppComponent/app.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light\">\n\n  <!-- Links -->\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#\">Link 1</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Link 2</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Link 3</a>\n    </li>\n  </ul>\n\n  <ul class=\"nav nav-pills ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">User Name</a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"far fa-user\"></i>\n      </a>\n    </li>\n  </ul>\n\n</nav>\n\n<div class=\"container-fluid\" style=\"margin-top: 10px\">\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/AppComponent/app.component.ts":
/*!***********************************************!*\
  !*** ./src/app/AppComponent/app.component.ts ***!
  \***********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/AppComponent/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/AppComponent/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bill-history/bill-history.component */ "./src/app/bill-history/bill-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: _bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_3__["BillHistoryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false })
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AppComponent_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppComponent/app.component */ "./src/app/AppComponent/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill-history/bill-history.component */ "./src/app/bill-history/bill-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _AppComponent_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_4__["BillHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_AppComponent_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bill-history/bill-history.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bill-history/bill-history.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bill-history/bill-history.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bill-history/bill-history.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Item</th>\n              <th scope=\"col\">Quantity</th>\n              <th scope=\"col\">Price</th>\n              <th scope=\"col\">Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">Item 1</th>\n              <td>X 1</td>\n              <td>12</td>\n              <td>12</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Item 2</th>\n              <td>X 1</td>\n              <td>12</td>\n              <td>12</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Item 3</th>\n              <td>X 1</td>\n              <td>12</td>\n              <td>12</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <!-- <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Cras justo odio</li>\n          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n          <li class=\"list-group-item\">Morbi leo risus</li>\n          <li class=\"list-group-item\">Porta ac consectetur ac</li>\n          <li class=\"list-group-item\">Vestibulum at eros</li>\n        </ul> -->\n\n        <!-- <div class=\"row\">\n          <div class=\"col-sm-8\" style=\"text-align: left\">\n            <p>Total :</p>\n          </div>\n\n          <div class=\"col-sm-4\" style=\"text-align: right\">\n            <p>12312</p>\n          </div>\n        </div> -->\n\n        <table class=\"table table-borderless\">\n          <tbody>\n            <tr>\n              <td style=\"width: 25%\">Total : </td>\n              <td style=\"text-align: left\">12</td>\n            </tr>\n            <tr>\n              <td style=\"width: 25%\">CGST : </td>\n              <td style=\"text-align: left\">14%</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        This is some text within a card body.\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bill-history/bill-history.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bill-history/bill-history.component.ts ***!
  \********************************************************/
/*! exports provided: BillHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillHistoryComponent", function() { return BillHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillHistoryComponent = /** @class */ (function () {
    function BillHistoryComponent() {
    }
    BillHistoryComponent.prototype.ngOnInit = function () {
    };
    BillHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bill-history',
            template: __webpack_require__(/*! ./bill-history.component.html */ "./src/app/bill-history/bill-history.component.html"),
            styles: [__webpack_require__(/*! ./bill-history.component.css */ "./src/app/bill-history/bill-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillHistoryComponent);
    return BillHistoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OJN5KOR\Desktop\Gantt-Project\Billing_Application\billing-app-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
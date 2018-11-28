webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/forgot-password/forgot-password.module": [
		"../../../../../src/app/core/auth/forgot-password/forgot-password.module.ts",
		"common",
		"forgot-password.module"
	],
	"./auth/reset-password/reset-password.module": [
		"../../../../../src/app/core/auth/reset-password/reset-password.module.ts",
		"common",
		"reset-password.module"
	],
	"./auth/sign-in/sign-in.module": [
		"../../../../../src/app/core/auth/sign-in/sign-in.module.ts",
		"common",
		"sign-in.module"
	],
	"./auth/sign-up/sign-up.module": [
		"../../../../../src/app/core/auth/sign-up/sign-up.module.ts",
		"common",
		"sign-up.module"
	],
	"./inner-pages/admin/admin.module": [
		"../../../../../src/app/core/layout/inner-pages/admin/admin.module.ts",
		"common",
		"admin.module"
	],
	"./inner-pages/agent/agent.module": [
		"../../../../../src/app/core/layout/inner-pages/agent/agent.module.ts",
		"common",
		"agent.module"
	],
	"./inner-pages/chat/chat.module": [
		"../../../../../src/app/core/layout/inner-pages/chat/chat.module.ts",
		"common",
		"chat.module"
	],
	"./inner-pages/chats/chats.module": [
		"../../../../../src/app/core/layout/inner-pages/chats/chats.module.ts",
		"common",
		"chats.module"
	],
	"./inner-pages/dashboard/dashboard.module": [
		"../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./inner-pages/department/department.module": [
		"../../../../../src/app/core/layout/inner-pages/department/department.module.ts",
		"common",
		"department.module"
	],
	"./inner-pages/profile/profile.module": [
		"../../../../../src/app/core/layout/inner-pages/profile/profile.module.ts",
		"common",
		"profile.module"
	],
	"./inner-pages/twilio/twilio.module": [
		"../../../../../src/app/core/layout/inner-pages/twilio/twilio.module.ts",
		"common",
		"twilio.module"
	],
	"./inner-pages/widget/widget.module": [
		"../../../../../src/app/core/layout/inner-pages/widget/widget.module.ts",
		"common",
		"widget.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/core/layout/layout.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_shared_spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<app-core></app-core>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_shared_spinner__["b" /* SpinnerService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_shared__ = __webpack_require__("../../../../../src/app/core/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__core_shared__["a" /* SharedModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_shared__["b" /* SpinnerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n    color: #fff;\n    padding: 18px 12px;\n    overflow: hidden;\n}\n.alert strong{width: 90%;\n    float: left;}\n\ni {\n    cursor: pointer;\n}\n\n:host {\n    z-index: 1001;\n    position: fixed;\n    width: 35%;\n    right: 5px;\n    top:45px;\n}\n\n/*padding: 5px;*/\n/*background: none !important;*/\n/*color: #dd4b39 !important;*/\n/*border: none;*/\n/*font-size: 12px;*/\n/*margin: 0 0 2px;*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert animated fadeInRight\"\n     role=\"alert\"\n     [style.background]=\"color\"\n>\n  <strong>{{text}}</strong>\n  <i (click)=\"dismiss()\"\n     class=\"fa fa-remove fa-fw pull-right\"\n  ></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    /** Service Injection */
    function AlertComponent(store) {
        this.store = store;
        /** Variable declaration */
        this.text = "Danger Alert";
        this.type = "danger";
    }
    /** Function to be executed when component initializes */
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type === 'success') {
            this.color = "rgba(138,217,25,0.7)";
        }
        else if (this.type === 'warning') {
            this.color = "rgba(255,181,62,0.7)";
        }
        else {
            this.color = "rgba(249,36,63,0.7)";
        }
        /** Auto closing an alert after a set time */
        setTimeout(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__["c" /* AlertHide */]());
        }, 3000);
    };
    /** Function to be executed when clicked on cross btn */
    AlertComponent.prototype.dismiss = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__["c" /* AlertHide */]());
    };
    return AlertComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('text'),
    __metadata("design:type", String)
], AlertComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
    __metadata("design:type", String)
], AlertComponent.prototype, "type", void 0);
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/core/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent unauthorized users to visit routes that are only allowed to logged in users
 */




var AuthGuard = (function () {
    /** Service injection */
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAuthenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
                return false;
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // const copiedReq = req.clone({headers: req.headers.set('', '')});
        return this.store.select('auth')
            .take(1)
            .switchMap(function (authState) {
            var copiedReq = req;
            if (authState.isAuthenticated) {
                copiedReq = req.clone({ params: req.params.set('token', authState.token) });
            }
            return next.handle(copiedReq);
        });
        // return null;
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAdminOrSuperAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non admin users to visit routes that are only allowed for admins
 */




var IsAdminOrSuperAdminGuard = (function () {
    /** Service injection */
    function IsAdminOrSuperAdminGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsAdminOrSuperAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAdmin || authState.isSuperAdmin) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsAdminOrSuperAdminGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsAdminOrSuperAdminGuard;
}());
IsAdminOrSuperAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsAdminOrSuperAdminGuard);

var _a, _b;
//# sourceMappingURL=is-admin-or-super-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-agent.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAgentGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non agent users to visit routes that are only allowed for agents
 */




var IsAgentGuard = (function () {
    /** Service injection */
    function IsAgentGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsAgentGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAgent) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsAgentGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsAgentGuard;
}());
IsAgentGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsAgentGuard);

var _a, _b;
//# sourceMappingURL=is-agent.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-super-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsSuperAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non super admin users to visit routes that are only allowed for super admins
 */




var IsSuperAdminGuard = (function () {
    /** Service injection */
    function IsSuperAdminGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsSuperAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isSuperAdmin) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsSuperAdminGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsSuperAdminGuard;
}());
IsSuperAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsSuperAdminGuard);

var _a, _b;
//# sourceMappingURL=is-super-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/not-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent authorized users to visit routes that are only allowed to not logged in users
 */



var NotAuthGuard = (function () {
    /** Service injection */
    function NotAuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAuthenticated) {
                _this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=not-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/core/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    { path: 'sign-in', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
    { path: 'sign-up', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
    { path: 'forgot-password', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: 'reset-password/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/reset-password/reset-password.module#ResetPasswordModule' },
    { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */], loadChildren: './layout/layout.module#LayoutModule' },
    { path: '**', redirectTo: 'sign-in' }
];
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CoreRoutingModule);

//# sourceMappingURL=core-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper{\n    min-height: calc(100vh - 0px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <sjs-spinner></sjs-spinner>\n</router-outlet>\n<app-alert *ngIf=\"(alertState | async).show\" [text]=\"(alertState | async).message\" [type]=\"(alertState | async).type\"></app-alert>\n\n"

/***/ }),

/***/ "../../../../../src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_notification_alert_service__ = __webpack_require__("../../../../../src/app/core/shared/notification.alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/core/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoreComponent = (function () {
    function CoreComponent(store, _router, _r, _isNotificationData, spinnerService) {
        this.store = store;
        this._router = _router;
        this._r = _r;
        this._isNotificationData = _isNotificationData;
        this.spinnerService = spinnerService;
        this.notification = false;
        window.addEventListener('focus', function () {
            if (_router.url !== '/dashboard' || _r.url !== '/chat/pending') {
                _isNotificationData.setIsNotification(false);
            }
            else {
                _isNotificationData.setIsNotification(true);
            }
        });
        window.addEventListener('blur', function () {
            _isNotificationData.setIsNotification(true);
        });
    }
    CoreComponent.prototype.ngOnInit = function () {
        this.alertState = this.store.select('alert');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__["d" /* CheckToken */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__["e" /* CheckTwilioActiveAttempt */]());
    };
    return CoreComponent;
}());
CoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-core',
        template: __webpack_require__("../../../../../src/app/core/core.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/core.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_notification_alert_service__["a" /* NotificationAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_notification_alert_service__["a" /* NotificationAlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* SpinnerService */]) === "function" && _e || Object])
], CoreComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=core.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert_component__ = __webpack_require__("../../../../../src/app/core/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_auth_auth_effects__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_interceptor__ = __webpack_require__("../../../../../src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_routing_module__ = __webpack_require__("../../../../../src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_is_admin_or_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_is_agent_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-agent.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_is_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_layout_module__ = __webpack_require__("../../../../../src/app/core/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_not_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_core_reducers__ = __webpack_require__("../../../../../src/app/core/store/core.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared__ = __webpack_require__("../../../../../src/app/core/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_inner_pages_chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_push_notification_service__ = __webpack_require__("../../../../../src/app/core/shared/push.notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_notification_alert_service__ = __webpack_require__("../../../../../src/app/core/shared/notification.alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__core_routing_module__["a" /* CoreRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_19__shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_16__layout_layout_module__["LayoutModule"],
            __WEBPACK_IMPORTED_MODULE_20_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__store_core_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_7__store_auth_auth_effects__["a" /* AuthEffects */]]),
            !__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__core_component__["a" /* CoreComponent */],
            __WEBPACK_IMPORTED_MODULE_6__alert_alert_component__["a" /* AlertComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_10__core_component__["a" /* CoreComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */],
            __WEBPACK_IMPORTED_MODULE_14__auth_is_agent_guard__["a" /* IsAgentGuard */],
            __WEBPACK_IMPORTED_MODULE_15__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */],
            __WEBPACK_IMPORTED_MODULE_17__auth_not_auth_guard__["a" /* NotAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_21__layout_inner_pages_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_push_notification_service__["a" /* PushNotificationsService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_notification_alert_service__["a" /* NotificationAlertService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true }
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n@media (max-width: 767px) {\n  .sidebar-toggle {\n    position: absolute;\n    top: -50px;\n  }\n  .navbar-custom-menu {\n    position: absolute;\n    top: -50px;\n    right: 0px;\n  }\n  .navbar-static-top {\n    background: none;\n    min-height: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a href=\"../../index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>3</b>C</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>TM</b>SMS</span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a class=\"sidebar-toggle\" (click)=\"toggleLeftSidebar($event)\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\" [appDropdown]=\"'open'\">\n          <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"../../../../assets/img/avatar5.png\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">{{(authState | async).name}}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"../../../../assets/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                {{(authState | async).name}} - {{(authState | async).isSuperAdmin ? 'Super Admin': ''}}{{(authState | async).isAdmin ? 'Admin': ''}}{{(authState | async).isAgent ? 'Agent': ''}}\n                <small></small>\n              </p>\n            </li>\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a class=\"btn btn-default btn-flat\" routerLink=\"/profile\"> Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a class=\"btn btn-default btn-flat\" (click)=\"onSignOut()\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    /** Service injection */
    function HeaderComponent(store) {
        this.store = store;
        /** Variable declaration */
        this.tls = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mtls = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    /** Function call to toggle left sidebar */
    HeaderComponent.prototype.toggleLeftSidebar = function (event) {
        if (window.screen.width <= 767) {
            this.mtls.emit(event);
        }
        else {
            this.tls.emit(event);
        }
    };
    /** Function call to sign out */
    HeaderComponent.prototype.onSignOut = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_auth_auth_actions__["u" /* SignOutAttempt */]());
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HeaderComponent.prototype, "tls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], HeaderComponent.prototype, "mtls", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_push_notification_service__ = __webpack_require__("../../../../../src/app/core/shared/push.notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_notification_alert_service__ = __webpack_require__("../../../../../src/app/core/shared/notification.alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChatService = (function () {
    function ChatService(store, _notificationService, _isNotification, spinnerService) {
        this.store = store;
        this._notificationService = _notificationService;
        this._isNotification = _isNotification;
        this.spinnerService = spinnerService;
        this.notification = true;
        this._notificationService.requestPermission();
    }
    ChatService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].SOCKET_URL);
        this.store.select('auth')
            .map(function (authData) { return authData.userId; })
            .distinctUntilChanged()
            .subscribe(function (id) {
            // console.log(id);
            if (id != null) {
                _this.loggedInAgentId = id;
                // To get all the agents and the rooms they are assigned to
                _this.socket.emit('get-added-rooms');
                // On getting the list of rooms all the agents are assigned to
                _this.socket.on('new-rooms-added', function (data) {
                    // console.log('new-rooms-added: ', data);
                    for (var i = 0, len = data.length; i < len; i++) {
                        if (data[i].agent_id == _this.loggedInAgentId) {
                            // To add current agent to room
                            _this.socket.emit('add-agent-to-rooms', data[i].rooms);
                            break;
                        }
                    }
                });
                // When agent added to any room
                _this.socket.on('agent-added-to-room', function (data) {
                    // console.log('agent-added-to-room', data.name);
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["d" /* AddToChatList */](data));
                });
                _this.socket.on('msg-of-acceptance', function (data) {
                    // console.log(data);
                });
                // Which agent accepted
                _this.socket.on('which-agent-accepted', function (data) {
                    // console.log('which-agent-accepted: ', data);
                    if (data.agentId === _this.loggedInAgentId) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["k" /* EditFromChatList */]({
                            status: data.status,
                            room_number: data.chatRoomId
                        }));
                    }
                    else {
                        _this.socket.emit('remove-agent-from-room', { room_number: data.chatRoomId });
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["i" /* DeleteFromChatList */]({ room_number: data.chatRoomId }));
                    }
                });
                // Which agent rejected
                _this.socket.on('which-agent-rejected', function (data) {
                    // console.log('which-agent-rejected: ', data);
                    if (data.agentId == _this.loggedInAgentId) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["i" /* DeleteFromChatList */]({ room_number: data.chatRoomId }));
                        _this.socket.emit('remove-agent-from-room', { room_number: data.chatRoomId });
                    }
                });
                _this.socket.on('which-agent-resolved', function (data) {
                    // console.log('In which agent resolved');
                    // console.log(data);
                    if (data.agentId == _this.loggedInAgentId) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["k" /* EditFromChatList */]({
                            status: data.status,
                            room_number: data.chatRoomId
                        }));
                        _this.socket.emit('remove-agent-from-room', { room_number: data.chatRoomId });
                    }
                });
                _this.socket.on('which-agent-transferred', function (data) {
                    // console.log('which-agent-transferred: ', data);
                    if (data.agentId == _this.loggedInAgentId) {
                        _this.socket.emit('remove-agent-from-room', { room_number: data.chatRoomId });
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["i" /* DeleteFromChatList */]({ room_number: data.chatRoomId }));
                    }
                });
                _this.socket.on('newmsg', function (data) {
                    _this.notification = _this._isNotification.getIsNotification();
                    console.log('notification', _this.notification);
                    console.log('data.direction', data.direction);
                    if (data.direction == 1 && _this.notification) {
                        console.log('within if condition == 1 .. ', data.direction);
                        var dataMessage = [];
                        dataMessage.push({
                            'title': data.user,
                            'alertContent': data.message
                        });
                        _this._notificationService.generateNotification(dataMessage);
                    }
                    if (data.direction == 4 && _this.notification) {
                        console.log('within if condition == 4 .. ', data.direction);
                        var dataMessage = [];
                        dataMessage.push({
                            'title': data.user,
                            'alertContent': data.message
                        });
                        _this._notificationService.generateNotification(dataMessage);
                    }
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_chat_chat_actions__["c" /* AddNewMsgToChatList */](data));
                });
                _this.socket.on('agentNotification', function (data) {
                    console.log('data', data);
                    _this.notification = _this._isNotification.getIsNotification();
                    var dataMessage = [];
                    dataMessage.push({
                        'title': 'Chat transfer notification',
                        'alertContent': data
                    });
                    _this._notificationService.generateNotification(dataMessage);
                });
            }
        });
        this.store.select('auth')
            .subscribe(function (data) {
            _this.loggedInAgentName = data.name;
            _this.loggedInAgentId = data.userId;
        });
    };
    ChatService.prototype.ngOnInit = function () {
    };
    ChatService.prototype.takeAction = function (data) {
        console.log(data);
        this.socket.emit('agent-performed-some-action', data);
    };
    /*sendMsg (data: { messageBody: string, chatRoomId: string }) {
        const obj = {
            ...data,
            user: this.loggedInAgentName,
            direction: 2,
            time: moment()
        };
        this.socket.emit('msg', obj);
    }*/
    ChatService.prototype.sendMsg = function (data) {
        var obj = __assign({}, data, { user: this.loggedInAgentName, direction: 2, time: __WEBPACK_IMPORTED_MODULE_5_moment__() });
        this.socket.emit('msg', obj);
    };
    ChatService.prototype.sendResolveConfirmation = function (data) {
        this.socket.emit('resolve-chat-request', data);
    };
    ChatService.prototype.getLoggedInAgentDetails = function () {
        return {
            loggedInAgentId: this.loggedInAgentId,
            loggedInAgentName: this.loggedInAgentName
        };
    };
    ChatService.prototype.socketDisconnect = function () {
        // console.log("disconnecting");
        if (this.socket) {
            this.socket.emit('agent-disconnected');
        }
    };
    ChatService.prototype.ngOnDestroy = function () {
        // console.log("chat destroy");
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared_push_notification_service__["a" /* PushNotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_push_notification_service__["a" /* PushNotificationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__shared_notification_alert_service__["a" /* NotificationAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_notification_alert_service__["a" /* NotificationAlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_spinner__["b" /* SpinnerService */]) === "function" && _d || Object])
], ChatService);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-agent.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', children: [
            { path: 'dashboard', loadChildren: './inner-pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'profile', loadChildren: './inner-pages/profile/profile.module#ProfileModule' },
            { path: 'twilio', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], loadChildren: './inner-pages/twilio/twilio.module#TwilioModule' },
            { path: 'admin', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], loadChildren: './inner-pages/admin/admin.module#AdminModule' },
            { path: 'agent', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/agent/agent.module#AgentModule' },
            { path: 'widget', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/widget/widget.module#WidgetModule' },
            { path: 'department', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/department/department.module#DepartmentModule' },
            { path: 'chat', canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__["a" /* IsAgentGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__["a" /* IsAgentGuard */]], loadChildren: './inner-pages/chat/chat.module#ChatModule' },
            { path: 'chats', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/chats/chats.module#ChatsModule' },
        ] }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], LayoutRoutingModule);

//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.main-footer {position: absolute;*/\n/*width: 100%;*/\n/*bottom: 0;*/\n/*margin: 0 !important;*/\n/*padding-right: 68px;*/\n/*}*/\n/*.fixed .wrapper{padding-bottom: 50px;}*/\n\n/*router-outlet > div {*/\n    /*min-height: 500px;*/\n/*}*/\n\n.spinnerloader{\n  z-index: 0;\n  position: relative;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinnerloader\">\n  <div class=\"skin-blue fixed sidebar-mini sidebar-mini-expand-feature\"\n    [ngClass]=\"{\n                  'sidebar-expanded-on-hover': hovered,\n                  'sidebar-collapse': !hovered,\n                  'sidebar-open': mobileViewClicked\n                }\"\n  >\n    <!-- Site wrapper -->\n    <div class=\"wrapper\">\n\n      <app-header (mtls)=\"toggleLeftSidebarMobile($event)\"\n        (tls)=\"toggleLeftSidebar($event)\"\n      ></app-header>\n      <!-- =============================================== -->\n\n      <!-- Left side column. contains the sidebar -->\n\n      <app-sidebar (mouseover)=\"toggleLeftSidebar($event)\"\n        (mouseout)=\"toggleLeftSidebar($event)\"\n      ></app-sidebar>\n      <!-- =============================================== -->\n\n      <router-outlet></router-outlet>\n\n      <footer class=\"main-footer\">\n        <div class=\"pull-right hidden-xs\">\n          <!--<b>Version</b> 7.0.0-->\n        </div>\n        <strong>Copyright &copy; {{ currentYear }} <a href=\"#\">TM SMS | 3C</a>.</strong> All rights\n        reserved.\n      </footer>\n\n      <!-- Control Sidebar -->\n      <aside class=\"control-sidebar control-sidebar-dark\">\n        <!-- Create the tabs -->\n        <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n          <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n          <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n        </ul>\n        <!-- Tab panes -->\n        <div class=\"tab-content\">\n          <!-- Home tab content -->\n          <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n            <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n            <ul class=\"control-sidebar-menu\">\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n                  <div class=\"menu-info\">\n                    <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                    <p>Will be 23 on April 24th</p>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n                  <div class=\"menu-info\">\n                    <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                    <p>New phone +1(800)555-1234</p>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n                  <div class=\"menu-info\">\n                    <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                    <p>nora@example.com</p>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n                  <div class=\"menu-info\">\n                    <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                    <p>Execution time 5 seconds</p>\n                  </div>\n                </a>\n              </li>\n            </ul>\n            <!-- /.control-sidebar-menu -->\n\n            <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n            <ul class=\"control-sidebar-menu\">\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <h4 class=\"control-sidebar-subheading\">\n                    Custom Template Design\n                    <span class=\"label label-danger pull-right\">70%</span>\n                  </h4>\n\n                  <div class=\"progress progress-xxs\">\n                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <h4 class=\"control-sidebar-subheading\">\n                    Update Resume\n                    <span class=\"label label-success pull-right\">95%</span>\n                  </h4>\n\n                  <div class=\"progress progress-xxs\">\n                    <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <h4 class=\"control-sidebar-subheading\">\n                    Laravel Integration\n                    <span class=\"label label-warning pull-right\">50%</span>\n                  </h4>\n\n                  <div class=\"progress progress-xxs\">\n                    <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\">\n                  <h4 class=\"control-sidebar-subheading\">\n                    Back End Framework\n                    <span class=\"label label-primary pull-right\">68%</span>\n                  </h4>\n\n                  <div class=\"progress progress-xxs\">\n                    <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n                  </div>\n                </a>\n              </li>\n            </ul>\n            <!-- /.control-sidebar-menu -->\n\n          </div>\n          <!-- /.tab-pane -->\n          <!-- Stats tab content -->\n          <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n          <!-- /.tab-pane -->\n          <!-- Settings tab content -->\n          <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n            <form method=\"post\">\n              <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Report panel usage\n                  <input type=\"checkbox\" class=\"pull-right\" checked>\n                </label>\n\n                <p>\n                  Some information about this general settings option\n                </p>\n              </div>\n              <!-- /.form-group -->\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Allow mail redirect\n                  <input type=\"checkbox\" class=\"pull-right\" checked>\n                </label>\n\n                <p>\n                  Other sets of options are available\n                </p>\n              </div>\n              <!-- /.form-group -->\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Expose author name in posts\n                  <input type=\"checkbox\" class=\"pull-right\" checked>\n                </label>\n\n                <p>\n                  Allow the user to show his name in blog posts\n                </p>\n              </div>\n              <!-- /.form-group -->\n\n              <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Show me as online\n                  <input type=\"checkbox\" class=\"pull-right\" checked>\n                </label>\n              </div>\n              <!-- /.form-group -->\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Turn off notifications\n                  <input type=\"checkbox\" class=\"pull-right\">\n                </label>\n              </div>\n              <!-- /.form-group -->\n\n              <div class=\"form-group\">\n                <label class=\"control-sidebar-subheading\">\n                  Delete chat history\n                  <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n                </label>\n              </div>\n              <!-- /.form-group -->\n            </form>\n          </div>\n          <!-- /.tab-pane -->\n        </div>\n      </aside>\n      <!-- /.control-sidebar -->\n      <!-- Add the sidebar's background. This div must be placed\n           immediately after the control sidebar -->\n      <div class=\"control-sidebar-bg\"></div>\n    </div>\n    <!-- ./wrapper -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inner_pages_chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayoutComponent = (function () {
    function LayoutComponent(store, chatService) {
        this.store = store;
        this.chatService = chatService;
        /** Variable declaration */
        this.hovered = false;
        this.mobileViewClicked = false;
        this.isAgent = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.isAgent; })
            .subscribe(function (data) {
            if (data) {
                _this.isAgent = true;
                _this.chatState = _this.store.select('afterLogin')
                    .map(function (data) { return data.chat; });
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_chat_chat_actions__["g" /* ConnectAttempt */]());
            }
        });
        this.getYear();
    };
    /** Function to toggle sidebar in desktop view */
    LayoutComponent.prototype.toggleLeftSidebar = function ($event) {
        if ($event.type == 'click') {
            this.hovered = !this.hovered;
        }
        else {
            this.hovered = $event.type == 'mouseover';
        }
    };
    /** Function to toggle sidebar in mobile view */
    LayoutComponent.prototype.toggleLeftSidebarMobile = function ($event) {
        if ($event.type == 'click') {
            this.mobileViewClicked = !this.mobileViewClicked;
        }
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        console.log("layout destroy");
        if (this.isAgent) {
            this.chatService.socketDisconnect();
        }
    };
    /** function get the current year for the footer*/
    LayoutComponent.prototype.getYear = function () {
        this.currentYear = new Date().getFullYear();
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout.component.ts',
        template: __webpack_require__("../../../../../src/app/core/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__inner_pages_chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__inner_pages_chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], LayoutComponent);

var _a, _b;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/core/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_component__ = __webpack_require__("../../../../../src/app/core/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_profile_profile_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_after_login_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/after-login.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_twilio_twilio_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_department_department_effects__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_admin_admin_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_agent_agent_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_widget_widget_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_chat_chat_effects__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_agent_chat_agent_chat_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_dashboard_dashboard_effects__ = __webpack_require__("../../../../../src/app/core/layout/store/dashboard/dashboard.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__layout_routing_module__["a" /* LayoutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('afterLogin', __WEBPACK_IMPORTED_MODULE_11__store_after_login_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_10__store_profile_profile_effect__["a" /* ProfileEffects */], __WEBPACK_IMPORTED_MODULE_12__store_twilio_twilio_effect__["a" /* TwilioEffects */], __WEBPACK_IMPORTED_MODULE_13__store_department_department_effects__["a" /* DepartmentEffects */], __WEBPACK_IMPORTED_MODULE_14__store_admin_admin_effect__["a" /* AdminEffects */],
                __WEBPACK_IMPORTED_MODULE_15__store_agent_agent_effect__["a" /* AgentEffects */], __WEBPACK_IMPORTED_MODULE_16__store_widget_widget_effect__["a" /* WidgetEffects */], __WEBPACK_IMPORTED_MODULE_17__store_chat_chat_effects__["a" /* ChatEffects */], __WEBPACK_IMPORTED_MODULE_19__store_dashboard_dashboard_effects__["a" /* DashboardEffects */], __WEBPACK_IMPORTED_MODULE_18__store_agent_chat_agent_chat_effect__["a" /* AgentChatEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */]
        ],
        providers: []
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n.main-sidebar{\n    overflow: hidden;\n    min-width: 240px;\n}\n.sidebar{\n    overflow-y: auto;\n    height: 90%;\n    position: absolute;\n    width: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n    <div class=\"slimScrollDiv\">\n        <!-- sidebar: style can be found in sidebar.less -->\n        <section class=\"sidebar\">\n            <!-- Sidebar user panel -->\n            <div class=\"user-panel\">\n                <div class=\"pull-left image\">\n                    <img src=\"../../../../assets/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <div class=\"pull-left info\">\n                    <p> {{(authState | async).name}} </p>\n                    <a><i class=\"fa fa-circle text-success\"></i> Online</a>\n                </div>\n            </div>\n            <!-- search form -->\n            <!--<form class=\"sidebar-form\">-->\n            <!--<div class=\"input-group\">-->\n            <!--<input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">-->\n            <!--<span class=\"input-group-btn\">-->\n            <!--<button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>-->\n            <!--</button>-->\n            <!--</span>-->\n            <!--</div>-->\n            <!--</form>-->\n            <!-- /.search form -->\n            <!-- sidebar menu: : style can be found in sidebar.less -->\n            <ul class=\"sidebar-menu\" data-widget=\"tree\">\n                <li class=\"header\">MAIN NAVIGATIONS</li>\n\n                <!-- Dashboard -->\n                <li class=\"treeview\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a href=\"/dashboard\">\n                        <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n                    </a>\n                </li>\n\n                <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">USER\n                    ACCOUNTS\n                </li>\n\n                <!-- Admins -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-unlock-alt\"></i> <span> Admins</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li><a routerLink=\"/admin/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n                        <li><a routerLink=\"/admin/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n                    </ul>\n                </li>\n\n                <!-- Agents -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-lock\"></i> <span> Agents</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li><a routerLink=\"/agent/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n                        <li><a routerLink=\"/agent/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n                    </ul>\n                </li>\n\n                <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">\n                    ORGANIZATION\n                </li>\n\n                <!-- Departments -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-puzzle-piece\"></i> <span> Departments</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li><a routerLink=\"/department/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n                        <li><a routerLink=\"/department/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n                    </ul>\n                </li>\n\n                <!-- Widgets -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-th\"></i> <span>Widgets</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li><a routerLink=\"/widget/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n                        <li><a routerLink=\"/widget/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n                    </ul>\n                </li>\n\n                <li class=\"header\" *ngIf=\"(authState | async).isAgent\">COMMUNICATIONS</li>\n\n                <!-- Chat Rooms -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isAgent\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-comments\"></i> <span>Chat Options</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li>\n                            <a href=\"/chat/pending\">\n                                <i class=\"fa fa-comment\"></i> <span>New Requests</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"/chat/ongoing\">\n                                <i class=\"fa fa-comment\"></i> <span>Live Sessions</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"/chat/rejected\">\n                                <i class=\"fa fa-comment\"></i> <span>Rejected</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"/chat/resolve\">\n                                <i class=\"fa fa-comment\"></i> <span>Closed</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n\n              <!-- Chat Rooms -->\n              <li class=\"treeview\"\n                  *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                  routerLinkActive=\"active\"\n                  [disable-hover]=\"true\"\n                  [appDropdown]=\"'menu-open'\"\n              >\n                <a>\n                  <i class=\"fa fa-comments\"></i> <span>Chat Options</span>\n                  <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                  <li>\n                    <a href=\"/chats/agent-live\">\n                      <i class=\"fa fa-comment\"></i> <span>Live Sessions</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"/chats/agent-rejected\">\n                      <i class=\"fa fa-comment\"></i> <span>Rejected</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"/chats/agent-closed\">\n                      <i class=\"fa fa-comment\"></i> <span>Closed</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n\n               <!--  Previous Chats of Agents\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a routerLink=\"/chats/list-agent\">\n                        <i class=\"fa fa-comments\"></i> <span>Chats</span>\n                        <span class=\"pull-right-container\">\n                </span>\n                    </a>\n                </li>-->\n\n                <!-- Previous Chats of Agents -->\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a routerLink=\"/chats/list-agents-contacts\">\n                        <i class=\"fa fa-address-book\"></i> <span>Contact List</span>\n                        <span class=\"pull-right-container\">\n                </span>\n                    </a>\n                </li>\n                <!-- Twilio Accounts -->\n                <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin\">CREDENTIALS</li>\n\n                <li class=\"treeview\"\n                    *ngIf=\"(authState | async).isSuperAdmin\"\n                    routerLinkActive=\"active\"\n                    [disable-hover]=\"true\"\n                    [appDropdown]=\"'menu-open'\"\n                >\n                    <a>\n                        <i class=\"fa fa-compress\"></i> <span> Twilio Accounts</span>\n                        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n                    </a>\n                    <ul class=\"treeview-menu\">\n                        <li><a routerLink=\"/twilio/sub-account\"><i class=\"fa fa-list\"></i> Twilio Sub-accounts</a></li>\n                        <li><a routerLink=\"/twilio/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n                        <li><a routerLink=\"/twilio/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n                    </ul>\n                </li>\n                <!-- Twilio Accounts -->\n            </ul>\n        </section>\n        <!-- /.sidebar -->\n    </div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(store) {
        this.store = store;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ADMIN_ATTEMPT */
/* unused harmony export GET_ADMIN_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ADMIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EDIT_ADMIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_ADMIN_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_ADMIN_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RESET_ADMIN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_TWILIO_SID_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CREATE_TWILIO_SID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOCK_ADMIN_USER_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOCK_ADMIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UNBLOCK_ADMIN_USER_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UNBLOCK_ADMIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_TO_EDIT_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_TO_EDIT_ADMIN_SUCCESS; });
/* unused harmony export GetAdminAttempt */
/* unused harmony export GetAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddAdminAttempt; });
/* unused harmony export AddAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EditAdminAttempt; });
/* unused harmony export EditAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetAdminListAttempt; });
/* unused harmony export GetAdminListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ResetAdminForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CreateTwilioSidAttempt; });
/* unused harmony export CreateTwilioSidSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BlockAdminUserAttempt; });
/* unused harmony export BlockAdminUserSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UnblockAdminUserAttempt; });
/* unused harmony export UnblockAdminUserSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GetToEditAdminAttempt; });
/* unused harmony export GetToEditAdminSuccess */
var GET_ADMIN_ATTEMPT = 'GET_ADMIN_ATTEMPT';
var GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
var ADD_ADMIN_ATTEMPT = 'ADD_ADMIN_ATTEMPT';
var ADD_ADMIN_SUCCESS = 'ADD_ADMIN_SUCCESS';
var EDIT_ADMIN_ATTEMPT = 'EDIT_ADMIN_ATTEMPT';
var EDIT_ADMIN_SUCCESS = 'EDIT_ADMIN_SUCCESS';
var GET_ADMIN_LIST_ATTEMPT = 'GET_ADMIN_LIST_ATTEMPT';
var GET_ADMIN_LIST_SUCCESS = 'GET_ADMIN_LIST_SUCCESS';
var RESET_ADMIN_FORM = 'RESET_ADMIN_FORM';
var CREATE_TWILIO_SID_ATTEMPT = 'CREATE_TWILIO_SID_ATTEMPT';
var CREATE_TWILIO_SID_SUCCESS = 'CREATE_TWILIO_SID_SUCCESS';
var BLOCK_ADMIN_USER_ATTEMPT = 'BLOCK_ADMIN_USER_ATTEMPT';
var BLOCK_ADMIN_USER_SUCCESS = 'BLOCK_ADMIN_USER_SUCCESS';
var UNBLOCK_ADMIN_USER_ATTEMPT = 'UNBLOCK_ADMIN_USER_ATTEMPT';
var UNBLOCK_ADMIN_USER_SUCCESS = 'UNBLOCK_ADMIN_USER_SUCCESS';
var GET_TO_EDIT_ADMIN_ATTEMPT = 'GET_TO_EDIT_ADMIN_ATTEMPT';
var GET_TO_EDIT_ADMIN_SUCCESS = 'GET_TO_EDIT_ADMIN_SUCCESS';
var GetAdminAttempt = (function () {
    function GetAdminAttempt() {
        this.type = GET_ADMIN_ATTEMPT;
    }
    return GetAdminAttempt;
}());

var GetAdminSuccess = (function () {
    function GetAdminSuccess(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_SUCCESS;
    }
    return GetAdminSuccess;
}());

var AddAdminAttempt = (function () {
    function AddAdminAttempt(payload) {
        this.payload = payload;
        this.type = ADD_ADMIN_ATTEMPT;
    }
    return AddAdminAttempt;
}());

var AddAdminSuccess = (function () {
    function AddAdminSuccess(payload) {
        this.payload = payload;
        this.type = ADD_ADMIN_SUCCESS;
    }
    return AddAdminSuccess;
}());

var EditAdminAttempt = (function () {
    function EditAdminAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_ADMIN_ATTEMPT;
    }
    return EditAdminAttempt;
}());

var EditAdminSuccess = (function () {
    function EditAdminSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_ADMIN_SUCCESS;
    }
    return EditAdminSuccess;
}());

var GetAdminListAttempt = (function () {
    function GetAdminListAttempt() {
        this.type = GET_ADMIN_LIST_ATTEMPT;
    }
    return GetAdminListAttempt;
}());

var GetAdminListSuccess = (function () {
    function GetAdminListSuccess(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_LIST_SUCCESS;
    }
    return GetAdminListSuccess;
}());

var ResetAdminForm = (function () {
    function ResetAdminForm() {
        this.type = RESET_ADMIN_FORM;
    }
    return ResetAdminForm;
}());

var CreateTwilioSidAttempt = (function () {
    function CreateTwilioSidAttempt(payload) {
        this.payload = payload;
        this.type = CREATE_TWILIO_SID_ATTEMPT;
    }
    return CreateTwilioSidAttempt;
}());

var CreateTwilioSidSuccess = (function () {
    function CreateTwilioSidSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_TWILIO_SID_SUCCESS;
    }
    return CreateTwilioSidSuccess;
}());

var BlockAdminUserAttempt = (function () {
    function BlockAdminUserAttempt(payload) {
        this.payload = payload;
        this.type = BLOCK_ADMIN_USER_ATTEMPT;
    }
    return BlockAdminUserAttempt;
}());

var BlockAdminUserSuccess = (function () {
    function BlockAdminUserSuccess(payload) {
        this.payload = payload;
        this.type = BLOCK_ADMIN_USER_SUCCESS;
    }
    return BlockAdminUserSuccess;
}());

var UnblockAdminUserAttempt = (function () {
    function UnblockAdminUserAttempt(payload) {
        this.payload = payload;
        this.type = UNBLOCK_ADMIN_USER_ATTEMPT;
    }
    return UnblockAdminUserAttempt;
}());

var UnblockAdminUserSuccess = (function () {
    function UnblockAdminUserSuccess(payload) {
        this.payload = payload;
        this.type = UNBLOCK_ADMIN_USER_SUCCESS;
    }
    return UnblockAdminUserSuccess;
}());

var GetToEditAdminAttempt = (function () {
    function GetToEditAdminAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_ADMIN_ATTEMPT;
    }
    return GetToEditAdminAttempt;
}());

var GetToEditAdminSuccess = (function () {
    function GetToEditAdminSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_ADMIN_SUCCESS;
    }
    return GetToEditAdminSuccess;
}());

//# sourceMappingURL=admin.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AdminEffects = (function () {
    function AdminEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["a" /* ADD_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-registration';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["b" /* ADD_ADMIN_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAdminList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["m" /* GET_ADMIN_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["n" /* GET_ADMIN_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["j" /* EDIT_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'updateuserprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["k" /* EDIT_ADMIN_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.createTwilioSid = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["g" /* CREATE_TWILIO_SID_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'create-user-twilio-sid';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["h" /* CREATE_TWILIO_SID_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.blockUser = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["d" /* BLOCK_ADMIN_USER_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'block-user';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["e" /* BLOCK_ADMIN_USER_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.unblockUser = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["u" /* UNBLOCK_ADMIN_USER_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'unblock-user';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["v" /* UNBLOCK_ADMIN_USER_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getToEditAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["o" /* GET_TO_EDIT_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-admin';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["p" /* GET_TO_EDIT_ADMIN_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return AdminEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "addAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getAdminList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "editAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "createTwilioSid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "blockUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "unblockUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getToEditAdmin", void 0);
AdminEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AdminEffects);

var _a, _b;
//# sourceMappingURL=admin.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adminReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    resetAdminForm: false,
};
function adminReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["b" /* ADD_ADMIN_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetAdminForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["k" /* EDIT_ADMIN_SUCCESS */]):
            var index = state.list.indexOf(function (admin) { return admin.id === action.payload.id; });
            var someAdmin = state.list[index];
            var updatedAdmin = __assign({}, someAdmin, action.payload);
            var admins = state.list.slice();
            admins[index] = updatedAdmin;
            return __assign({}, state, { list: state.list.concat(admins) });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["n" /* GET_ADMIN_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["s" /* RESET_ADMIN_FORM */]):
            return __assign({}, state, { resetAdminForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["h" /* CREATE_TWILIO_SID_SUCCESS */]):
            var dataIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someAdminData = state.list[dataIndex];
            var updatedAdminData = __assign({}, someAdminData, action.payload);
            var adminsData = state.list.slice();
            adminsData[dataIndex] = updatedAdminData;
            return __assign({}, state, { list: adminsData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["e" /* BLOCK_ADMIN_USER_SUCCESS */]):
            var blockIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someBlockAdmin = state.list[blockIndex];
            var updatedBlockAdmin = __assign({}, someBlockAdmin, action.payload);
            var blockAdminData = state.list.slice();
            blockAdminData[blockIndex] = updatedBlockAdmin;
            return __assign({}, state, { list: blockAdminData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["v" /* UNBLOCK_ADMIN_USER_SUCCESS */]):
            var unblockIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someUnblockAdmins = state.list[unblockIndex];
            var updatedUnblockAdmin = __assign({}, someUnblockAdmins, action.payload);
            var unblockAdminData = state.list.slice();
            unblockAdminData[unblockIndex] = updatedUnblockAdmin;
            return __assign({}, state, { list: unblockAdminData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["p" /* GET_TO_EDIT_ADMIN_SUCCESS */]):
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        default:
            return state;
    }
}
//# sourceMappingURL=admin.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/after-login.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twilio_twilio_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_department_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agent_agent_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_widget_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/dashboard/dashboard.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agent_chat_agent_chat_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.reducers.ts");









var reducers = {
    profile: __WEBPACK_IMPORTED_MODULE_0__profile_profile_reducers__["a" /* profileReducer */],
    twilio: __WEBPACK_IMPORTED_MODULE_1__twilio_twilio_reducers__["a" /* twilioReducer */],
    department: __WEBPACK_IMPORTED_MODULE_2__department_department_reducers__["a" /* departmentReducer */],
    admin: __WEBPACK_IMPORTED_MODULE_3__admin_admin_reducers__["a" /* adminReducer */],
    agent: __WEBPACK_IMPORTED_MODULE_4__agent_agent_reducers__["a" /* agentReducer */],
    widget: __WEBPACK_IMPORTED_MODULE_5__widget_widget_reducers__["a" /* widgetReducer */],
    chat: __WEBPACK_IMPORTED_MODULE_6__chat_chat_reducers__["a" /* chatReducer */],
    dashboard: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_reducers__["a" /* dashboardReducer */],
    agentChats: __WEBPACK_IMPORTED_MODULE_8__agent_chat_agent_chat_reducers__["a" /* agentChatReducer */],
};
//# sourceMappingURL=after-login.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_AGENT_LIVE_CHAT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_AGENT_LIVE_CHAT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_AGENT_CLOSE_CHAT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_AGENT_CLOSE_CHAT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetAgentLiveChatAttempt; });
/* unused harmony export GetAgentLiveChatSuccess */
/* unused harmony export GetAgentCloseChatSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetAgentCloseChatAttempt; });
var GET_AGENT_LIVE_CHAT_ATTEMPT = 'GET_AGENT_LIVE_CHAT_ATTEMPT';
var GET_AGENT_LIVE_CHAT_SUCCESS = 'GET_AGENT_LIVE_CHAT_SUCCESS';
var GET_AGENT_CLOSE_CHAT_ATTEMPT = 'GET_AGENT_CLOSE_CHAT_ATTEMPT';
var GET_AGENT_CLOSE_CHAT_SUCCESS = 'GET_AGENT_LIVE_CHAT_SUCCESS';
var GetAgentLiveChatAttempt = (function () {
    function GetAgentLiveChatAttempt() {
        this.type = GET_AGENT_LIVE_CHAT_ATTEMPT;
    }
    return GetAgentLiveChatAttempt;
}());

var GetAgentLiveChatSuccess = (function () {
    function GetAgentLiveChatSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_LIVE_CHAT_SUCCESS;
    }
    return GetAgentLiveChatSuccess;
}());

var GetAgentCloseChatSuccess = (function () {
    function GetAgentCloseChatSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_CLOSE_CHAT_SUCCESS;
    }
    return GetAgentCloseChatSuccess;
}());

var GetAgentCloseChatAttempt = (function () {
    function GetAgentCloseChatAttempt() {
        this.type = GET_AGENT_CLOSE_CHAT_ATTEMPT;
    }
    return GetAgentCloseChatAttempt;
}());

//# sourceMappingURL=agent-chat.action.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent-chat/agent-chat.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentChatEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agent_chat_agent_chat_action__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AgentChatEffects = (function () {
    function AgentChatEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.getAgentListWithChat = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_chat_agent_chat_action__["c" /* GET_AGENT_LIVE_CHAT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-all-chats';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_chat_agent_chat_action__["d" /* GET_AGENT_LIVE_CHAT_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAgentCloseListWithChat = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_chat_agent_chat_action__["a" /* GET_AGENT_CLOSE_CHAT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'all-agent-closed-chats';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_chat_agent_chat_action__["b" /* GET_AGENT_CLOSE_CHAT_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
    }
    return AgentChatEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentChatEffects.prototype, "getAgentListWithChat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentChatEffects.prototype, "getAgentCloseListWithChat", void 0);
AgentChatEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AgentChatEffects);

var _a, _b;
//# sourceMappingURL=agent-chat.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent-chat/agent-chat.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = agentChatReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_chat_action__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    list: [],
};
function agentChatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__agent_chat_action__["d" /* GET_AGENT_LIVE_CHAT_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_chat_action__["b" /* GET_AGENT_CLOSE_CHAT_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=agent-chat.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_AGENT_ATTEMPT */
/* unused harmony export GET_AGENT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_AGENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EDIT_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return EDIT_AGENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_AGENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_AGENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RESET_AGENT_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_TO_EDIT_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GET_TO_EDIT_AGENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_ADMIN_AGENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_ADMIN_AGENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_COMPANY_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_COMPANY_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AGENT_BLOCK_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AGENT_BLOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AGENT_UNBLOCK_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AGENT_UNBLOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AGENT_DELETE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AGENT_DELETE_SUCCESS; });
/* unused harmony export GetAgentAttempt */
/* unused harmony export GetAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AddAgentAttempt; });
/* unused harmony export AddAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return EditAgentAttempt; });
/* unused harmony export EditAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GetAgentListAttempt; });
/* unused harmony export GetAgentListSuccess */
/* unused harmony export ResetAgentForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GetToEditAgentAttempt; });
/* unused harmony export GetToEditAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetAdminAgentListAttempt; });
/* unused harmony export GetAdminAgentListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GetCompanyListAttempt; });
/* unused harmony export GetCompanyListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BlockAgentAttempt; });
/* unused harmony export BlockAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UnblockAgentAttempt; });
/* unused harmony export UnblockAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DeleteAgentAttempt; });
/* unused harmony export DeleteAgentSuccess */
var GET_AGENT_ATTEMPT = 'GET_AGENT_ATTEMPT';
var GET_AGENT_SUCCESS = 'GET_AGENT_SUCCESS';
var ADD_AGENT_ATTEMPT = 'ADD_AGENT_ATTEMPT';
var ADD_AGENT_SUCCESS = 'ADD_AGENT_SUCCESS';
var EDIT_AGENT_ATTEMPT = 'EDIT_AGENT_ATTEMPT';
var EDIT_AGENT_SUCCESS = 'EDIT_AGENT_SUCCESS';
var GET_AGENT_LIST_ATTEMPT = 'GET_AGENT_LIST_ATTEMPT';
var GET_AGENT_LIST_SUCCESS = 'GET_AGENT_LIST_SUCCESS';
var RESET_AGENT_FORM = 'RESET_AGENT_FORM';
var GET_TO_EDIT_AGENT_ATTEMPT = 'GET_TO_EDIT_AGENT_ATTEMPT';
var GET_TO_EDIT_AGENT_SUCCESS = 'GET_TO_EDIT_AGENT_SUCCESS';
var GET_ADMIN_AGENT_LIST_ATTEMPT = 'GET_ADMIN_AGENT_LIST_ATTEMPT';
var GET_ADMIN_AGENT_LIST_SUCCESS = 'GET_ADMIN_AGENT_LIST_SUCCESS';
var GET_COMPANY_LIST_ATTEMPT = 'GET_COMPANY_LIST_ATTEMPT';
var GET_COMPANY_LIST_SUCCESS = 'GET_COMPANY_LIST_SUCCESS';
var AGENT_BLOCK_ATTEMPT = 'AGENT_BLOCK_ATTEMPT';
var AGENT_BLOCK_SUCCESS = 'AGENT_BLOCK_SUCCESS';
var AGENT_UNBLOCK_ATTEMPT = 'AGENT_UNBLOCK_ATTEMPT';
var AGENT_UNBLOCK_SUCCESS = 'AGENT_UNBLOCK_SUCCESS';
var AGENT_DELETE_ATTEMPT = 'AGENT_DELETE_ATTEMPT';
var AGENT_DELETE_SUCCESS = 'AGENT_DELETE_SUCCESS';
var GetAgentAttempt = (function () {
    function GetAgentAttempt() {
        this.type = GET_AGENT_ATTEMPT;
    }
    return GetAgentAttempt;
}());

var GetAgentSuccess = (function () {
    function GetAgentSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_SUCCESS;
    }
    return GetAgentSuccess;
}());

var AddAgentAttempt = (function () {
    function AddAgentAttempt(payload) {
        this.payload = payload;
        this.type = ADD_AGENT_ATTEMPT;
    }
    return AddAgentAttempt;
}());

var AddAgentSuccess = (function () {
    function AddAgentSuccess(payload) {
        this.payload = payload;
        this.type = ADD_AGENT_SUCCESS;
    }
    return AddAgentSuccess;
}());

var EditAgentAttempt = (function () {
    function EditAgentAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_AGENT_ATTEMPT;
    }
    return EditAgentAttempt;
}());

var EditAgentSuccess = (function () {
    function EditAgentSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_AGENT_SUCCESS;
    }
    return EditAgentSuccess;
}());

var GetAgentListAttempt = (function () {
    function GetAgentListAttempt() {
        this.type = GET_AGENT_LIST_ATTEMPT;
    }
    return GetAgentListAttempt;
}());

var GetAgentListSuccess = (function () {
    function GetAgentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_LIST_SUCCESS;
    }
    return GetAgentListSuccess;
}());

var ResetAgentForm = (function () {
    function ResetAgentForm() {
        this.type = RESET_AGENT_FORM;
    }
    return ResetAgentForm;
}());

var GetToEditAgentAttempt = (function () {
    function GetToEditAgentAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_AGENT_ATTEMPT;
    }
    return GetToEditAgentAttempt;
}());

var GetToEditAgentSuccess = (function () {
    function GetToEditAgentSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_AGENT_SUCCESS;
    }
    return GetToEditAgentSuccess;
}());

var GetAdminAgentListAttempt = (function () {
    function GetAdminAgentListAttempt(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_AGENT_LIST_ATTEMPT;
    }
    return GetAdminAgentListAttempt;
}());

var GetAdminAgentListSuccess = (function () {
    function GetAdminAgentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_AGENT_LIST_SUCCESS;
    }
    return GetAdminAgentListSuccess;
}());

var GetCompanyListAttempt = (function () {
    function GetCompanyListAttempt(payload) {
        this.payload = payload;
        this.type = GET_COMPANY_LIST_ATTEMPT;
    }
    return GetCompanyListAttempt;
}());

var GetCompanyListSuccess = (function () {
    function GetCompanyListSuccess(payload) {
        this.payload = payload;
        this.type = GET_COMPANY_LIST_SUCCESS;
    }
    return GetCompanyListSuccess;
}());

var BlockAgentAttempt = (function () {
    function BlockAgentAttempt(payload) {
        this.payload = payload;
        this.type = AGENT_BLOCK_ATTEMPT;
    }
    return BlockAgentAttempt;
}());

var BlockAgentSuccess = (function () {
    function BlockAgentSuccess(payload) {
        this.payload = payload;
        this.type = AGENT_BLOCK_SUCCESS;
    }
    return BlockAgentSuccess;
}());

var UnblockAgentAttempt = (function () {
    function UnblockAgentAttempt(payload) {
        this.payload = payload;
        this.type = AGENT_UNBLOCK_ATTEMPT;
    }
    return UnblockAgentAttempt;
}());

var UnblockAgentSuccess = (function () {
    function UnblockAgentSuccess(payload) {
        this.payload = payload;
        this.type = AGENT_UNBLOCK_SUCCESS;
    }
    return UnblockAgentSuccess;
}());

var DeleteAgentAttempt = (function () {
    function DeleteAgentAttempt(payload) {
        this.payload = payload;
        this.type = AGENT_DELETE_ATTEMPT;
    }
    return DeleteAgentAttempt;
}());

var DeleteAgentSuccess = (function () {
    function DeleteAgentSuccess(payload) {
        this.payload = payload;
        this.type = AGENT_DELETE_SUCCESS;
    }
    return DeleteAgentSuccess;
}());

//# sourceMappingURL=agent.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AgentEffects = (function () {
    function AgentEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["a" /* ADD_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-register';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["b" /* ADD_AGENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAgentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["q" /* GET_AGENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'listofAgent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["r" /* GET_AGENT_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editAgent = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["l" /* EDIT_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-update';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["m" /* EDIT_AGENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getToEditDepartmentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["u" /* GET_TO_EDIT_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-agent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["v" /* GET_TO_EDIT_AGENT_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getAdminAgentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["o" /* GET_ADMIN_AGENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-admin-agents';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["p" /* GET_ADMIN_AGENT_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getCompanyList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["s" /* GET_COMPANY_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-company-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["t" /* GET_COMPANY_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.blockAgent = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["c" /* AGENT_BLOCK_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'block-agent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["d" /* AGENT_BLOCK_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.unblockAgent = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["g" /* AGENT_UNBLOCK_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'unblock-agent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["h" /* AGENT_UNBLOCK_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.deleteAgent = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["e" /* AGENT_DELETE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'delete-agent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["f" /* AGENT_DELETE_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
    }
    return AgentEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "addAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getAgentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "editAgent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getToEditDepartmentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getAdminAgentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getCompanyList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "blockAgent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "unblockAgent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "deleteAgent", void 0);
AgentEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AgentEffects);

var _a, _b;
//# sourceMappingURL=agent.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = agentReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    //resetAgentForm: false,
    comapnyList: [],
    blockAgent: false,
    unblockAgent: false,
    newAgentInfo: [],
};
function agentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["b" /* ADD_AGENT_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), 
                //resetAgentForm: true,
                newAgentInfo: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["r" /* GET_AGENT_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["m" /* EDIT_AGENT_SUCCESS */]):
            var index = state.list.indexOf(function (agent) { return agent.id === action.payload.id; });
            var someAgent = state.list[index];
            var updatedAgent = __assign({}, someAgent, action.payload);
            var admins = state.list.slice();
            admins[index] = updatedAgent;
            return __assign({}, state, { list: state.list.concat(admins) });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["v" /* GET_TO_EDIT_AGENT_SUCCESS */]):
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["A" /* RESET_AGENT_FORM */]):
            return __assign({}, state);
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["p" /* GET_ADMIN_AGENT_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["t" /* GET_COMPANY_LIST_SUCCESS */]):
            return __assign({}, state, { comapnyList: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["d" /* AGENT_BLOCK_SUCCESS */]):
            var unblockIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someUnblockAdmins = state.list[unblockIndex];
            var updatedUnblockAdmin = __assign({}, someUnblockAdmins, action.payload);
            var unblockAdminData = state.list.slice();
            unblockAdminData[unblockIndex] = updatedUnblockAdmin;
            return __assign({}, state, { list: unblockAdminData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["h" /* AGENT_UNBLOCK_SUCCESS */]):
            var unblockIndex1 = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someUnblockAdmins1 = state.list[unblockIndex1];
            var updatedUnblockAdmin1 = __assign({}, someUnblockAdmins1, action.payload);
            var unblockAdminData1 = state.list.slice();
            unblockAdminData1[unblockIndex1] = updatedUnblockAdmin1;
            return __assign({}, state, { list: unblockAdminData1.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["f" /* AGENT_DELETE_SUCCESS */]):
            var deleteIndex = state.list.findIndex(function (admin) { return admin.id === action.payload; });
            var deleteAdminData = state.list.slice();
            deleteAdminData.splice(deleteIndex, 1);
            return __assign({}, state, { list: deleteAdminData.slice() });
        default:
            return state;
    }
}
//# sourceMappingURL=agent.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CONNECT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONNECT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NEW_MSG_TO_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_TO_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_FROM_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_FROM_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_AGENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_AGENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_CHAT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_CHAT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_CONTACT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_CONTACT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_TRANSFER_AGENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_TRANSFER_AGENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return INI_CHAT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return INI_CHAT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return INI_CHAT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_AGENT_CLOSED_CHATS_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_AGENT_CLOSED_CHATS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ConnectAttempt; });
/* unused harmony export ConnectSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddNewMsgToChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddToChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EditFromChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DeleteFromChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetAgentListAttempt; });
/* unused harmony export GetAgentListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GetChatListAttempt; });
/* unused harmony export GetChatListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GetContactListAttempt; });
/* unused harmony export GetContactListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GetTransferAgentListAttempt; });
/* unused harmony export GetTransferAgentListSuccess */
/* unused harmony export IniChatAttempt */
/* unused harmony export IniChatSuccess */
/* unused harmony export IniChatError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GetAgentClosedChatsAttempt; });
/* unused harmony export GetAgentClosedChatsSuccess */
var CONNECT_ATTEMPT = 'CONNECT_ATTEMPT';
var CONNECT_SUCCESS = 'CONNECT_SUCCESS';
var ADD_NEW_MSG_TO_CHAT_LIST = 'ADD_NEW_MSG_TO_CHAT_LIST';
var ADD_TO_CHAT_LIST = 'ADD_TO_CHAT_LIST';
var EDIT_FROM_CHAT_LIST = 'EDIT_FROM_CHAT_LIST';
var DELETE_FROM_CHAT_LIST = 'DELETE_FROM_CHAT_LIST';
var GET_AGENT_LIST_ATTEMPT = 'GET_AGENT_LIST_ATTEMPT';
var GET_AGENT_LIST_SUCCESS = 'GET_AGENT_LIST_SUCCESS';
var GET_CHAT_LIST_ATTEMPT = 'GET_CHAT_LIST_ATTEMPT';
var GET_CHAT_LIST_SUCCESS = 'GET_CHAT_LIST_SUCCESS';
var GET_CONTACT_LIST_ATTEMPT = 'GET_CONTACT_LIST_ATTEMPT';
var GET_CONTACT_LIST_SUCCESS = 'GET_CONTACT_LIST_SUCCESS';
var GET_TRANSFER_AGENT_LIST_ATTEMPT = 'GET_TRANSFER_AGENT_LIST_ATTEMPT';
var GET_TRANSFER_AGENT_LIST_SUCCESS = 'GET_TRANSFER_AGENT_LIST_SUCCESS';
var INI_CHAT_ATTEMPT = 'INI_CHAT_ATTEMPT';
var INI_CHAT_SUCCESS = 'INI_CHAT_SUCCESS';
var INI_CHAT_ERROR = 'INI_CHAT_ERROR';
var GET_AGENT_CLOSED_CHATS_ATTEMPT = 'GET_AGENT_CLOSED_CHATS_ATTEMPT';
var GET_AGENT_CLOSED_CHATS_SUCCESS = 'GET_AGENT_CLOSED_CHATS_SUCCESS';
var ConnectAttempt = (function () {
    function ConnectAttempt() {
        this.type = CONNECT_ATTEMPT;
    }
    return ConnectAttempt;
}());

var ConnectSuccess = (function () {
    function ConnectSuccess() {
        this.type = CONNECT_SUCCESS;
    }
    return ConnectSuccess;
}());

var AddNewMsgToChatList = (function () {
    function AddNewMsgToChatList(payload) {
        this.payload = payload;
        this.type = ADD_NEW_MSG_TO_CHAT_LIST;
    }
    return AddNewMsgToChatList;
}());

var AddToChatList = (function () {
    function AddToChatList(payload) {
        this.payload = payload;
        this.type = ADD_TO_CHAT_LIST;
    }
    return AddToChatList;
}());

var EditFromChatList = (function () {
    function EditFromChatList(payload) {
        this.payload = payload;
        this.type = EDIT_FROM_CHAT_LIST;
    }
    return EditFromChatList;
}());

var DeleteFromChatList = (function () {
    function DeleteFromChatList(payload) {
        this.payload = payload;
        this.type = DELETE_FROM_CHAT_LIST;
    }
    return DeleteFromChatList;
}());

var GetAgentListAttempt = (function () {
    function GetAgentListAttempt() {
        this.type = GET_AGENT_LIST_ATTEMPT;
    }
    return GetAgentListAttempt;
}());

var GetAgentListSuccess = (function () {
    function GetAgentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_LIST_SUCCESS;
    }
    return GetAgentListSuccess;
}());

var GetChatListAttempt = (function () {
    function GetChatListAttempt(payload) {
        this.payload = payload;
        this.type = GET_CHAT_LIST_ATTEMPT;
    }
    return GetChatListAttempt;
}());

var GetChatListSuccess = (function () {
    function GetChatListSuccess(payload) {
        this.payload = payload;
        this.type = GET_CHAT_LIST_SUCCESS;
    }
    return GetChatListSuccess;
}());

var GetContactListAttempt = (function () {
    function GetContactListAttempt(payload) {
        this.payload = payload;
        this.type = GET_CONTACT_LIST_ATTEMPT;
    }
    return GetContactListAttempt;
}());

var GetContactListSuccess = (function () {
    function GetContactListSuccess(payload) {
        this.payload = payload;
        this.type = GET_CONTACT_LIST_SUCCESS;
    }
    return GetContactListSuccess;
}());

var GetTransferAgentListAttempt = (function () {
    function GetTransferAgentListAttempt(payload) {
        this.payload = payload;
        this.type = GET_TRANSFER_AGENT_LIST_ATTEMPT;
    }
    return GetTransferAgentListAttempt;
}());

var GetTransferAgentListSuccess = (function () {
    function GetTransferAgentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_TRANSFER_AGENT_LIST_SUCCESS;
    }
    return GetTransferAgentListSuccess;
}());

var IniChatAttempt = (function () {
    function IniChatAttempt(payload) {
        this.payload = payload;
        this.type = INI_CHAT_ATTEMPT;
    }
    return IniChatAttempt;
}());

var IniChatSuccess = (function () {
    function IniChatSuccess(payload) {
        this.payload = payload;
        this.type = INI_CHAT_SUCCESS;
    }
    return IniChatSuccess;
}());

var IniChatError = (function () {
    function IniChatError(payload) {
        this.payload = payload;
        this.type = INI_CHAT_ERROR;
    }
    return IniChatError;
}());

var GetAgentClosedChatsAttempt = (function () {
    function GetAgentClosedChatsAttempt(payload) {
        this.payload = payload;
        this.type = GET_AGENT_CLOSED_CHATS_ATTEMPT;
    }
    return GetAgentClosedChatsAttempt;
}());

var GetAgentClosedChatsSuccess = (function () {
    function GetAgentClosedChatsSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_CLOSED_CHATS_SUCCESS;
    }
    return GetAgentClosedChatsSuccess;
}());

//# sourceMappingURL=chat.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChatEffects = (function () {
    function ChatEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.connect = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["e" /* CONNECT_ATTEMPT */])
            .switchMap(function (action) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["f" /* CONNECT_SUCCESS */]
            });
        })
            .do(function () {
            // this.chatService.connect();
        });
        this.getAgentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["n" /* GET_AGENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'listofAgent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["o" /* GET_AGENT_LIST_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["o" /* GET_AGENT_LIST_SUCCESS */],
                            payload: []
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getChatList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["p" /* GET_CHAT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'client-chat';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["q" /* GET_CHAT_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getContactList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["r" /* GET_CONTACT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'contact-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["s" /* GET_CONTACT_LIST_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' },
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["s" /* GET_CONTACT_LIST_SUCCESS */],
                            payload: []
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getTransferAgentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["t" /* GET_TRANSFER_AGENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-department-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    // console.log(res.response);
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["u" /* GET_TRANSFER_AGENT_LIST_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["u" /* GET_TRANSFER_AGENT_LIST_SUCCESS */],
                            payload: []
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getChatInitEffect = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["A" /* INI_CHAT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'ini-chat';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["C" /* INI_CHAT_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["B" /* INI_CHAT_ERROR */],
                            payload: res.message
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAllAgentClosedChats = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["l" /* GET_AGENT_CLOSED_CHATS_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-all-closed-chats';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["m" /* GET_AGENT_CLOSED_CHATS_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["B" /* INI_CHAT_ERROR */],
                            payload: res.message
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
    }
    return ChatEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "connect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getAgentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getChatList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getContactList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getTransferAgentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getChatInitEffect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getAllAgentClosedChats", void 0);
ChatEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], ChatEffects);

var _a, _b;
//# sourceMappingURL=chat.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chatReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    ongoing: [],
    resolve: [],
    connected: false,
    chatList: [],
    agentList: [],
    contactList: [],
    messageSend: false,
    messageError: false,
    closedChats: [],
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["f" /* CONNECT_SUCCESS */]:
            return __assign({}, state, { ongoing: [], resolve: [], closedChats: [], connected: true });
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["b" /* ADD_TO_CHAT_LIST */]:
            // console.log('chat', action.payload);
            var obj = {
                room: action.payload.name,
                client: action.payload.client_name,
                chatTime: action.payload.chat_time,
                status: action.payload.status,
                chats: action.payload.chats,
                transferInfo: action.payload.transfer_from_agent,
                isMMS: action.payload.isMMS,
                fileType: action.payload.fileType,
                fileUrl: action.payload.fileUrl
            };
            return __assign({}, state, { ongoing: state.ongoing.concat([__assign({}, obj)]) });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["a" /* ADD_NEW_MSG_TO_CHAT_LIST */]):
            var indexOfChat = state.ongoing.findIndex(function (chat) { return chat.room == action.payload.roomNo; });
            var oldChatList = state.ongoing.slice();
            var someChatList = __assign({}, oldChatList[indexOfChat]);
            someChatList.chats = someChatList.chats.concat([__assign({}, action.payload)]);
            oldChatList[indexOfChat] = __assign({}, someChatList);
            console.log(oldChatList);
            return __assign({}, state, { ongoing: oldChatList.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["j" /* EDIT_FROM_CHAT_LIST */]):
            var indexToEdit = state.ongoing.findIndex(function (chat) { return chat.room === action.payload.room_number; });
            var chats = state.ongoing.slice();
            var someChat = chats[indexToEdit];
            var updatedChat = __assign({}, someChat, { status: action.payload.status });
            chats[indexToEdit] = updatedChat;
            return __assign({}, state, { ongoing: chats.slice() });
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["h" /* DELETE_FROM_CHAT_LIST */]:
            var indexToDelete = state.ongoing.findIndex(function (chat) { return chat.room === action.payload.room_number; });
            var oldChats = state.ongoing.slice();
            oldChats.splice(indexToDelete, 1);
            return __assign({}, state, { ongoing: oldChats.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["o" /* GET_AGENT_LIST_SUCCESS */]):
            return __assign({}, state, { agentList: action.payload, chatList: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["q" /* GET_CHAT_LIST_SUCCESS */]):
            return __assign({}, state, { chatList: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["s" /* GET_CONTACT_LIST_SUCCESS */]):
            return __assign({}, state, { contactList: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["u" /* GET_TRANSFER_AGENT_LIST_SUCCESS */]):
            return __assign({}, state, { agentList: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["C" /* INI_CHAT_SUCCESS */]):
            return __assign({}, state, { messageSend: true });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["B" /* INI_CHAT_ERROR */]):
            return __assign({}, state, { messageError: true });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["m" /* GET_AGENT_CLOSED_CHATS_SUCCESS */]):
            return __assign({}, state, { closedChats: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=chat.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/dashboard/dashboard.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_DASHBOARD_ITEMS_COUNT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_DASHBOARD_ITEMS_COUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetDashboardItemsCountAttempt; });
/* unused harmony export GetDashboardItemsCountSuccess */
var GET_DASHBOARD_ITEMS_COUNT_ATTEMPT = 'GET_DASHBOARD_ITEMS_COUNT_ATTEMPT';
var GET_DASHBOARD_ITEMS_COUNT_SUCCESS = 'GET_DASHBOARD_ITEMS_COUNT_SUCCESS';
var GetDashboardItemsCountAttempt = (function () {
    function GetDashboardItemsCountAttempt(payload) {
        this.payload = payload;
        this.type = GET_DASHBOARD_ITEMS_COUNT_ATTEMPT;
    }
    return GetDashboardItemsCountAttempt;
}());

var GetDashboardItemsCountSuccess = (function () {
    function GetDashboardItemsCountSuccess(payload) {
        this.payload = payload;
        this.type = GET_DASHBOARD_ITEMS_COUNT_SUCCESS;
    }
    return GetDashboardItemsCountSuccess;
}());

//# sourceMappingURL=dashboard.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/dashboard/dashboard.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/dashboard/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DashboardEffects = (function () {
    function DashboardEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.getDashboardItemsCount = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_actions__["a" /* GET_DASHBOARD_ITEMS_COUNT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-dashboard-count';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_actions__["b" /* GET_DASHBOARD_ITEMS_COUNT_SUCCESS */],
                            payload: res
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return DashboardEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DashboardEffects.prototype, "getDashboardItemsCount", void 0);
DashboardEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], DashboardEffects);

var _a, _b;
//# sourceMappingURL=dashboard.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/dashboard/dashboard.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dashboardReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/dashboard/dashboard.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    list: [],
    widgets: []
};
function dashboardReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["b" /* GET_DASHBOARD_ITEMS_COUNT_SUCCESS */]):
            return __assign({}, state, { list: [action.payload.response], widgets: action.payload.widgets });
        default:
            return state;
    }
}
//# sourceMappingURL=dashboard.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RESET_DEPARTMENT_FORM; });
/* unused harmony export GET_DEPARTMENT_ATTEMPT */
/* unused harmony export GET_DEPARTMENT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EDIT_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_DEPARTMENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_DEPARTMENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_TO_EDIT_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_TO_EDIT_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return RESET_EDIT_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PRE_DELETE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PRE_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEPARTMENT_DELETE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEPARTMENT_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ResetDepartmentForm; });
/* unused harmony export GetDepartmentAttempt */
/* unused harmony export GetDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddDepartmentAttempt; });
/* unused harmony export AddDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EditDepartmentAttempt; });
/* unused harmony export EditDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetDepartmentListAttempt; });
/* unused harmony export GetDepartmentListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetToEditDepartmentAttempt; });
/* unused harmony export GetToEditDepartmentSuccess */
/* unused harmony export ResetEditDepartment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PreDeleteAttempt; });
/* unused harmony export PreDeleteSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DepartmentDeleteAttempt; });
/* unused harmony export DepartmentDeleteSuccess */
var RESET_DEPARTMENT_FORM = 'RESET_DEPARTMENT_FORM';
var GET_DEPARTMENT_ATTEMPT = 'GET_DEPARTMENT_ATTEMPT';
var GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS';
var ADD_DEPARTMENT_ATTEMPT = 'ADD_DEPARTMENT_ATTEMPT';
var ADD_DEPARTMENT_SUCCESS = 'ADD_DEPARTMENT_SUCCESS';
var EDIT_DEPARTMENT_ATTEMPT = 'EDIT_DEPARTMENT_ATTEMPT';
var EDIT_DEPARTMENT_SUCCESS = 'EDIT_DEPARTMENT_SUCCESS';
var GET_DEPARTMENT_LIST_ATTEMPT = 'GET_DEPARTMENT_LIST_ATTEMPT';
var GET_DEPARTMENT_LIST_SUCCESS = 'GET_DEPARTMENT_LIST_SUCCESS';
var GET_TO_EDIT_DEPARTMENT_ATTEMPT = 'GET_TO_EDIT_DEPARTMENT_ATTEMPT';
var GET_TO_EDIT_DEPARTMENT_SUCCESS = 'GET_TO_EDIT_DEPARTMENT_SUCCESS';
var RESET_EDIT_DEPARTMENT = 'RESET_EDIT_DEPARTMENT';
var PRE_DELETE_ATTEMPT = 'PRE_DELETE_ATTEMPT';
var PRE_DELETE_SUCCESS = 'PRE_DELETE_SUCCESS';
var DEPARTMENT_DELETE_ATTEMPT = 'DEPARTMENT_DELETE_ATTEMPT';
var DEPARTMENT_DELETE_SUCCESS = 'DEPARTMENT_DELETE_SUCCESS';
var ResetDepartmentForm = (function () {
    function ResetDepartmentForm() {
        this.type = RESET_DEPARTMENT_FORM;
    }
    return ResetDepartmentForm;
}());

var GetDepartmentAttempt = (function () {
    function GetDepartmentAttempt() {
        this.type = GET_DEPARTMENT_ATTEMPT;
    }
    return GetDepartmentAttempt;
}());

var GetDepartmentSuccess = (function () {
    function GetDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_SUCCESS;
    }
    return GetDepartmentSuccess;
}());

var AddDepartmentAttempt = (function () {
    function AddDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = ADD_DEPARTMENT_ATTEMPT;
    }
    return AddDepartmentAttempt;
}());

var AddDepartmentSuccess = (function () {
    function AddDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DEPARTMENT_SUCCESS;
    }
    return AddDepartmentSuccess;
}());

var EditDepartmentAttempt = (function () {
    function EditDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_DEPARTMENT_ATTEMPT;
    }
    return EditDepartmentAttempt;
}());

var EditDepartmentSuccess = (function () {
    function EditDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_DEPARTMENT_SUCCESS;
    }
    return EditDepartmentSuccess;
}());

var GetDepartmentListAttempt = (function () {
    function GetDepartmentListAttempt(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_LIST_ATTEMPT;
    }
    return GetDepartmentListAttempt;
}());

var GetDepartmentListSuccess = (function () {
    function GetDepartmentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_LIST_SUCCESS;
    }
    return GetDepartmentListSuccess;
}());

var GetToEditDepartmentAttempt = (function () {
    function GetToEditDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_DEPARTMENT_ATTEMPT;
    }
    return GetToEditDepartmentAttempt;
}());

var GetToEditDepartmentSuccess = (function () {
    function GetToEditDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_DEPARTMENT_SUCCESS;
    }
    return GetToEditDepartmentSuccess;
}());

var ResetEditDepartment = (function () {
    function ResetEditDepartment(payload) {
        this.payload = payload;
        this.type = RESET_EDIT_DEPARTMENT;
    }
    return ResetEditDepartment;
}());

var PreDeleteAttempt = (function () {
    function PreDeleteAttempt(payload) {
        this.payload = payload;
        this.type = PRE_DELETE_ATTEMPT;
    }
    return PreDeleteAttempt;
}());

var PreDeleteSuccess = (function () {
    function PreDeleteSuccess(payload) {
        this.payload = payload;
        this.type = PRE_DELETE_SUCCESS;
    }
    return PreDeleteSuccess;
}());

var DepartmentDeleteAttempt = (function () {
    function DepartmentDeleteAttempt(payload) {
        this.payload = payload;
        this.type = DEPARTMENT_DELETE_ATTEMPT;
    }
    return DepartmentDeleteAttempt;
}());

var DepartmentDeleteSuccess = (function () {
    function DepartmentDeleteSuccess(payload) {
        this.payload = payload;
        this.type = DEPARTMENT_DELETE_SUCCESS;
    }
    return DepartmentDeleteSuccess;
}());

//# sourceMappingURL=department.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DepartmentEffects = (function () {
    function DepartmentEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["a" /* ADD_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'create-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["b" /* ADD_DEPARTMENT_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["g" /* EDIT_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'edit-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["h" /* EDIT_DEPARTMENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getDepartmentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["j" /* GET_DEPARTMENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'department-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["k" /* GET_DEPARTMENT_LIST_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getToEditDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["l" /* GET_TO_EDIT_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["m" /* GET_TO_EDIT_DEPARTMENT_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.preDeleteDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["p" /* PRE_DELETE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'check-pre-delete-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["q" /* PRE_DELETE_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.deleteDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["d" /* DEPARTMENT_DELETE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'delete-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["e" /* DEPARTMENT_DELETE_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return DepartmentEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "addDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "editDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "getDepartmentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "getToEditDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "preDeleteDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "deleteDepartment", void 0);
DepartmentEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], DepartmentEffects);

var _a, _b;
//# sourceMappingURL=department.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = departmentReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    list: [],
    toEdit: {},
    resetDepartmentForm: false,
    newDepartmentId: 0,
    preDelete: [],
    newDepartmentName: ''
};
function departmentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["b" /* ADD_DEPARTMENT_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), newDepartmentId: action.payload.id, newDepartmentName: action.payload.department_name, resetDepartmentForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["h" /* EDIT_DEPARTMENT_SUCCESS */]):
            var index = state.list.indexOf(function (dep) { return dep.id === action.payload.id; });
            var someDep = state.list[index];
            var updatedDep = __assign({}, someDep, action.payload);
            var deps = state.list.slice();
            deps[index] = updatedDep;
            return __assign({}, state, { list: state.list.concat(deps) });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["k" /* GET_DEPARTMENT_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["s" /* RESET_DEPARTMENT_FORM */]):
            return __assign({}, state, { resetDepartmentForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["m" /* GET_TO_EDIT_DEPARTMENT_SUCCESS */]):
            // console.log(action.payload);
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["t" /* RESET_EDIT_DEPARTMENT */]):
            return __assign({}, state, { toEdit: {} });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["q" /* PRE_DELETE_SUCCESS */]):
            return __assign({}, state, { preDelete: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["e" /* DEPARTMENT_DELETE_SUCCESS */]):
            var deleteIndex = state.list.findIndex(function (department) { return department.id === action.payload; });
            var deleteData = state.list.slice();
            deleteData.splice(deleteIndex, 1);
            return __assign({}, state, { list: deleteData.slice() });
        default:
            return state;
    }
}
//# sourceMappingURL=department.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_PROFILE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDIT_PROFILE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetProfileAttempt; });
/* unused harmony export GetProfileSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EditProfileAttempt; });
/* unused harmony export EditProfileSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditProfileChangePasswordAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EditProfileChangePasswordSuccess; });
var GET_PROFILE_ATTEMPT = 'GET_PROFILE_ATTEMPT';
var GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
var EDIT_PROFILE_ATTEMPT = 'EDIT_PROFILE_ATTEMPT';
var EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
var EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT = 'EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT';
var EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS = 'EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS';
var GetProfileAttempt = (function () {
    function GetProfileAttempt() {
        this.type = GET_PROFILE_ATTEMPT;
    }
    return GetProfileAttempt;
}());

var GetProfileSuccess = (function () {
    function GetProfileSuccess(payload) {
        this.payload = payload;
        this.type = GET_PROFILE_SUCCESS;
    }
    return GetProfileSuccess;
}());

var EditProfileAttempt = (function () {
    function EditProfileAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_ATTEMPT;
    }
    return EditProfileAttempt;
}());

var EditProfileSuccess = (function () {
    function EditProfileSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_SUCCESS;
    }
    return EditProfileSuccess;
}());

var EditProfileChangePasswordAttempt = (function () {
    function EditProfileChangePasswordAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT;
    }
    return EditProfileChangePasswordAttempt;
}());

var EditProfileChangePasswordSuccess = (function () {
    function EditProfileChangePasswordSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS;
    }
    return EditProfileChangePasswordSuccess;
}());

//# sourceMappingURL=profile.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProfileEffects = (function () {
    function ProfileEffects(actions$, httpClient, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.router = router;
        this.store = store;
        this.getProfile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["h" /* GET_PROFILE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'userprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, '', config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["i" /* GET_PROFILE_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editProfile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["a" /* EDIT_PROFILE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'updateuserprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["d" /* EDIT_PROFILE_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editProfileChangePassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["b" /* EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'reset-password';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["c" /* EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS */],
                            payload: true
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return ProfileEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "getProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "editProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "editProfileChangePassword", void 0);
ProfileEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]) === "function" && _d || Object])
], ProfileEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = profileReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    data: null,
    resetChangePasswordForm: false
};
function profileReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["i" /* GET_PROFILE_SUCCESS */]):
            return __assign({}, state, { data: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["d" /* EDIT_PROFILE_SUCCESS */]):
            return __assign({}, state, { data: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["c" /* EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS */]):
            return __assign({}, state, { resetChangePasswordForm: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=profile.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TWILIO_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_TWILIO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TWILIO_ATTEMPT; });
/* unused harmony export ADD_TWILIO_SUCCESS */
/* unused harmony export EDIT_TWILIO_ATTEMPT */
/* unused harmony export EDIT_TWILIO_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TWILIO_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_TWILIO_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetTwilioAttempt; });
/* unused harmony export GetTwilioSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddTwilioAttempt; });
/* unused harmony export AddTwilioSuccess */
/* unused harmony export EditTwilioAttempt */
/* unused harmony export EditTwilioSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetTwilioListAttempt; });
/* unused harmony export GetTwilioListSuccess */
var GET_TWILIO_ATTEMPT = 'GET_TWILIO_ATTEMPT';
var GET_TWILIO_SUCCESS = 'GET_TWILIO_SUCCESS';
var ADD_TWILIO_ATTEMPT = 'ADD_TWILIO_ATTEMPT';
var ADD_TWILIO_SUCCESS = 'ADD_TWILIO_SUCCESS';
var EDIT_TWILIO_ATTEMPT = 'EDIT_TWILIO_ATTEMPT';
var EDIT_TWILIO_SUCCESS = 'EDIT_TWILIO_SUCCESS';
var GET_TWILIO_LIST_ATTEMPT = 'GET_TWILIO_LIST_ATTEMPT';
var GET_TWILIO_LIST_SUCCESS = 'GET_TWILIO_LIST_SUCCESS';
var GetTwilioAttempt = (function () {
    function GetTwilioAttempt() {
        this.type = GET_TWILIO_ATTEMPT;
    }
    return GetTwilioAttempt;
}());

var GetTwilioSuccess = (function () {
    function GetTwilioSuccess(payload) {
        this.payload = payload;
        this.type = GET_TWILIO_SUCCESS;
    }
    return GetTwilioSuccess;
}());

var AddTwilioAttempt = (function () {
    function AddTwilioAttempt(payload) {
        this.payload = payload;
        this.type = ADD_TWILIO_ATTEMPT;
    }
    return AddTwilioAttempt;
}());

var AddTwilioSuccess = (function () {
    function AddTwilioSuccess(payload) {
        this.payload = payload;
        this.type = ADD_TWILIO_SUCCESS;
    }
    return AddTwilioSuccess;
}());

var EditTwilioAttempt = (function () {
    function EditTwilioAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_TWILIO_ATTEMPT;
    }
    return EditTwilioAttempt;
}());

var EditTwilioSuccess = (function () {
    function EditTwilioSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_TWILIO_SUCCESS;
    }
    return EditTwilioSuccess;
}());

var GetTwilioListAttempt = (function () {
    function GetTwilioListAttempt() {
        this.type = GET_TWILIO_LIST_ATTEMPT;
    }
    return GetTwilioListAttempt;
}());

var GetTwilioListSuccess = (function () {
    function GetTwilioListSuccess(payload) {
        this.payload = payload;
        this.type = GET_TWILIO_LIST_SUCCESS;
    }
    return GetTwilioListSuccess;
}());

//# sourceMappingURL=twilio.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TwilioEffects = (function () {
    function TwilioEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addTwilio = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["a" /* ADD_TWILIO_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'twilio-information';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_auth_auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getTwilio = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["c" /* GET_TWILIO_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'get-twilio-information';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, '', config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_10__twilio_actions__["f" /* GET_TWILIO_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getTwilioList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["d" /* GET_TWILIO_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'twilio-account-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__twilio_actions__["e" /* GET_TWILIO_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return TwilioEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "addTwilio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "getTwilio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "getTwilioList", void 0);
TwilioEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], TwilioEffects);

var _a, _b;
//# sourceMappingURL=twilio.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = twilioReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: []
};
function twilioReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__twilio_actions__["f" /* GET_TWILIO_SUCCESS */]):
            return __assign({}, state, { info: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__twilio_actions__["e" /* GET_TWILIO_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=twilio.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_WIDGET_ATTEMPT */
/* unused harmony export GET_WIDGET_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_WIDGET_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_WIDGET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EDIT_WIDGET_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDIT_WIDGET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_WIDGET_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_WIDGET_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return RESET_WIDGET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_WIDGET_TO_EDIT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_WIDGET_TO_EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_TIMEZONE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_TIMEZONE_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_NUMBER_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_NUMBER_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_NUMBER_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return WIDGET_DELETE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return WIDGET_DELETE_SUCCESS; });
/* unused harmony export GetWidgetAttempt */
/* unused harmony export GetWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddWidgetAttempt; });
/* unused harmony export AddWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EditWidgetAttempt; });
/* unused harmony export EditWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GetWidgetListAttempt; });
/* unused harmony export GetWidgetListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ResetWidgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GetTimeZoneListAttempt; });
/* unused harmony export GetTimeZoneListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GetWidgetToEditAttempt; });
/* unused harmony export GetWidgetToEditSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetNumberListAttempt; });
/* unused harmony export GetNumberListSuccess */
/* unused harmony export GetNumberListError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteWidgetAttempt; });
/* unused harmony export DeleteWidgetSuccess */
var GET_WIDGET_ATTEMPT = 'GET_WIDGET_ATTEMPT';
var GET_WIDGET_SUCCESS = 'GET_WIDGET_SUCCESS';
var ADD_WIDGET_ATTEMPT = 'ADD_WIDGET_ATTEMPT';
var ADD_WIDGET_SUCCESS = 'ADD_WIDGET_SUCCESS';
var EDIT_WIDGET_ATTEMPT = 'EDIT_WIDGET_ATTEMPT';
var EDIT_WIDGET_SUCCESS = 'EDIT_WIDGET_SUCCESS';
var GET_WIDGET_LIST_ATTEMPT = 'GET_WIDGET_LIST_ATTEMPT';
var GET_WIDGET_LIST_SUCCESS = 'GET_WIDGET_LIST_SUCCESS';
var RESET_WIDGET_FORM = 'RESET_WIDGET_FORM';
var GET_WIDGET_TO_EDIT_ATTEMPT = 'GET_WIDGET_TO_EDIT_ATTEMPT';
var GET_WIDGET_TO_EDIT_SUCCESS = 'GET_WIDGET_TO_EDIT_SUCCESS';
var GET_TIMEZONE_LIST_SUCCESS = 'GET_TIMEZONE_LIST_SUCCESS';
var GET_TIMEZONE_LIST_ATTEMPT = 'GET_TIMEZONE_LIST_ATTEMPT';
var GET_NUMBER_LIST_SUCCESS = 'GET_NUMBER_LIST_SUCCESS';
var GET_NUMBER_LIST_ATTEMPT = 'GET_NUMBER_LIST_ATTEMPT';
var GET_NUMBER_LIST_ERROR = 'GET_NUMBER_LIST_ERROR';
var WIDGET_DELETE_ATTEMPT = 'WIDGET_DELETE_ATTEMPT';
var WIDGET_DELETE_SUCCESS = 'WIDGET_DELETE_SUCCESS';
var GetWidgetAttempt = (function () {
    function GetWidgetAttempt() {
        this.type = GET_WIDGET_ATTEMPT;
    }
    return GetWidgetAttempt;
}());

var GetWidgetSuccess = (function () {
    function GetWidgetSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_SUCCESS;
    }
    return GetWidgetSuccess;
}());

var AddWidgetAttempt = (function () {
    function AddWidgetAttempt(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_ATTEMPT;
    }
    return AddWidgetAttempt;
}());

var AddWidgetSuccess = (function () {
    function AddWidgetSuccess(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_SUCCESS;
    }
    return AddWidgetSuccess;
}());

var EditWidgetAttempt = (function () {
    function EditWidgetAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_WIDGET_ATTEMPT;
    }
    return EditWidgetAttempt;
}());

var EditWidgetSuccess = (function () {
    function EditWidgetSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_WIDGET_SUCCESS;
    }
    return EditWidgetSuccess;
}());

var GetWidgetListAttempt = (function () {
    function GetWidgetListAttempt(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_LIST_ATTEMPT;
    }
    return GetWidgetListAttempt;
}());

var GetWidgetListSuccess = (function () {
    function GetWidgetListSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_LIST_SUCCESS;
    }
    return GetWidgetListSuccess;
}());

var ResetWidgetForm = (function () {
    function ResetWidgetForm() {
        this.type = RESET_WIDGET_FORM;
    }
    return ResetWidgetForm;
}());

var GetTimeZoneListAttempt = (function () {
    function GetTimeZoneListAttempt() {
        this.type = GET_TIMEZONE_LIST_ATTEMPT;
    }
    return GetTimeZoneListAttempt;
}());

var GetTimeZoneListSuccess = (function () {
    function GetTimeZoneListSuccess(payload) {
        this.payload = payload;
        this.type = GET_TIMEZONE_LIST_SUCCESS;
    }
    return GetTimeZoneListSuccess;
}());

var GetWidgetToEditAttempt = (function () {
    function GetWidgetToEditAttempt(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_TO_EDIT_ATTEMPT;
    }
    return GetWidgetToEditAttempt;
}());

var GetWidgetToEditSuccess = (function () {
    function GetWidgetToEditSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_TO_EDIT_SUCCESS;
    }
    return GetWidgetToEditSuccess;
}());

var GetNumberListAttempt = (function () {
    function GetNumberListAttempt(payload) {
        this.payload = payload;
        this.type = GET_NUMBER_LIST_ATTEMPT;
    }
    return GetNumberListAttempt;
}());

var GetNumberListSuccess = (function () {
    function GetNumberListSuccess(payload) {
        this.payload = payload;
        this.type = GET_NUMBER_LIST_SUCCESS;
    }
    return GetNumberListSuccess;
}());

var GetNumberListError = (function () {
    function GetNumberListError(payload) {
        this.payload = payload;
        this.type = GET_NUMBER_LIST_ERROR;
    }
    return GetNumberListError;
}());

var DeleteWidgetAttempt = (function () {
    function DeleteWidgetAttempt(payload) {
        this.payload = payload;
        this.type = WIDGET_DELETE_ATTEMPT;
    }
    return DeleteWidgetAttempt;
}());

var DeleteWidgetSuccess = (function () {
    function DeleteWidgetSuccess(payload) {
        this.payload = payload;
        this.type = WIDGET_DELETE_SUCCESS;
    }
    return DeleteWidgetSuccess;
}());

//# sourceMappingURL=widget.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var WidgetEffects = (function () {
    function WidgetEffects(actions$, httpClient, spinnerService) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.spinnerService = spinnerService;
        this.getTimezoneList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["k" /* GET_TIMEZONE_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-timezone';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["l" /* GET_TIMEZONE_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.addWidget = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["a" /* ADD_WIDGET_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'createWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["b" /* ADD_WIDGET_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getWidgetList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["m" /* GET_WIDGET_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'listWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["n" /* GET_WIDGET_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editWidget = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["e" /* EDIT_WIDGET_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'updateWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["f" /* EDIT_WIDGET_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.widgetToEdit = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["o" /* GET_WIDGET_TO_EDIT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'viewWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["p" /* GET_WIDGET_TO_EDIT_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.searchNumber = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["h" /* GET_NUMBER_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'search-number';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            _this.spinnerService.show();
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                _this.spinnerService.hide();
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["j" /* GET_NUMBER_LIST_SUCCESS */],
                        payload: { res: res.data, type: 'success' }
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["i" /* GET_NUMBER_LIST_ERROR */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["i" /* GET_NUMBER_LIST_ERROR */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.deleteWidget = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["w" /* WIDGET_DELETE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'delete-widget';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["x" /* WIDGET_DELETE_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
    }
    return WidgetEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "getTimezoneList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "addWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "getWidgetList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "editWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "widgetToEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "searchNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "deleteWidget", void 0);
WidgetEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__shared_spinner__["b" /* SpinnerService */]) === "function" && _c || Object])
], WidgetEffects);

var _a, _b, _c;
//# sourceMappingURL=widget.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = widgetReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    resetWidgetForm: false,
    timezoneList: [],
    numbers: [],
    newSuccessBuyNumberCall: false,
    numberError: false,
    numberMessage: '',
    buttonLoader: ''
};
function widgetReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["b" /* ADD_WIDGET_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetWidgetForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["n" /* GET_WIDGET_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["l" /* GET_TIMEZONE_LIST_SUCCESS */]):
            return __assign({}, state, { timezoneList: action.payload.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["u" /* RESET_WIDGET_FORM */]):
            return __assign({}, state, { resetWidgetForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["p" /* GET_WIDGET_TO_EDIT_SUCCESS */]):
            return __assign({}, state, { toEdit: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["j" /* GET_NUMBER_LIST_SUCCESS */]):
            return __assign({}, state, { numbers: action.payload.res, newSuccessBuyNumberCall: true, buttonLoader: action.payload.type });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["i" /* GET_NUMBER_LIST_ERROR */]):
            return __assign({}, state, { numbers: [], newSuccessBuyNumberCall: false, numberError: true, numberMessage: action.payload.message, buttonLoader: action.payload.type });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["x" /* WIDGET_DELETE_SUCCESS */]):
            var deleteIndex = state.list.findIndex(function (widget) { return widget.id === action.payload; });
            var deleteWidgetData = state.list.slice();
            deleteWidgetData.splice(deleteIndex, 1);
            return __assign({}, state, { list: deleteWidgetData.slice() });
        default:
            return state;
    }
}
//# sourceMappingURL=widget.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/auto-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoScrollDirective = (function () {
    function AutoScrollDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.scrollDown = true;
        this.nativeElement = el.nativeElement;
    }
    AutoScrollDirective.prototype.ngAfterContentInit = function () {
        console.log('scrollTop', this.nativeElement.scrollTop);
        console.log('clientHeight', this.nativeElement.clientHeight);
        console.log('scrollHeight', this.nativeElement.scrollHeight);
        console.log(this.nativeElement);
        this.adjust();
    };
    AutoScrollDirective.prototype.adjust = function () {
        if (this.scrollDown) {
            this.nativeElement.scrollTop = this.nativeElement.scrollHeight - this.nativeElement.clientHeight;
        }
        else {
            if (this.nativeElement.scrollTop + this.nativeElement.clientHeight > this.nativeElement.scrollHeight) {
                console.log('true');
                //this.renderer.
                this.nativeElement.scrollTop = this.nativeElement.scrollHeight;
            }
        }
    };
    AutoScrollDirective.prototype.scrollEvent = function () {
        console.log('scrollTop', this.nativeElement.scrollTop);
        console.log('clientHeight', this.nativeElement.clientHeight);
        console.log('scrollHeight', this.nativeElement.scrollHeight);
    };
    return AutoScrollDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("scrollDown"),
    __metadata("design:type", Boolean)
], AutoScrollDirective.prototype, "scrollDown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoScrollDirective.prototype, "scrollEvent", null);
AutoScrollDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAutoScroll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], AutoScrollDirective);

var _a, _b;
//# sourceMappingURL=auto-scroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    /** Service injection */
    function DropdownDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.dh = false;
        this.clicked = false;
    }
    /** Function to be executed on mouse click */
    DropdownDirective.prototype.toggle = function () {
        if (this.el.nativeElement.classList.contains(this.dd)) {
            this.renderer.removeClass(this.el.nativeElement, this.dd);
            this.clicked = true;
        }
        else {
            this.renderer.addClass(this.el.nativeElement, this.dd);
            this.clicked = false;
        }
    };
    /** Function to be executed on mouse hover in */
    DropdownDirective.prototype.toggleOpen = function () {
        if (!this.dh) {
            this.renderer.addClass(this.el.nativeElement, this.dd);
        }
    };
    /** Function to be executed on mouse hover out */
    DropdownDirective.prototype.toggleClose = function () {
        if (!this.dh) {
            if (!this.clicked) {
                this.renderer.removeClass(this.el.nativeElement, this.dd);
            }
            this.renderer.removeClass(this.el.nativeElement, this.dd);
        }
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appDropdown'),
    __metadata("design:type", String)
], DropdownDirective.prototype, "dd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('disable-hover'),
    __metadata("design:type", Boolean)
], DropdownDirective.prototype, "dh", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggle", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleClose", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DropdownDirective);

var _a, _b;
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__spinner__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/notification.alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationAlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationAlertService = (function () {
    function NotificationAlertService() {
        this.isNotification = true;
    }
    NotificationAlertService.prototype.getIsNotification = function () {
        return this.isNotification;
    };
    NotificationAlertService.prototype.setIsNotification = function (data) {
        this.isNotification = data;
    };
    return NotificationAlertService;
}());
NotificationAlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NotificationAlertService);

//# sourceMappingURL=notification.alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/push.notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler__ = __webpack_require__("../../../../howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushNotificationsService = (function () {
    function PushNotificationsService(router) {
        this.router = router;
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.requestPermission = function () {
        var self = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return self.permission = status;
            });
        }
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (obs) {
            if (!('Notification' in window)) {
                console.log('Notifications are not available in this environment');
                obs.complete();
            }
            if (self.permission !== 'granted') {
                console.log('The user hasn\'t granted you permission to send push notifications');
                obs.complete();
            }
            var _notify = new Notification(title, options);
            _notify.onshow = function (e) {
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclick = function (e) {
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onerror = function (e) {
                return obs.error({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclose = function () {
                return obs.complete();
            };
        });
    };
    PushNotificationsService.prototype.generateNotification = function (source) {
        var self = this;
        source.forEach(function (item) {
            var options = {
                body: item.alertContent,
                icon: '../../../assets/img/avatar.png'
            };
            var sound = new __WEBPACK_IMPORTED_MODULE_2_howler__["Howl"]({
                src: ['../../../assets/to-the-point.mp3']
            });
            sound.play();
            var notify = self.create(item.title, options).subscribe();
        });
    };
    return PushNotificationsService;
}());
PushNotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PushNotificationsService);

var _a;
//# sourceMappingURL=push.notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_scroll_directive__ = __webpack_require__("../../../../../src/app/core/shared/auto-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_directive__ = __webpack_require__("../../../../../src/app/core/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_2__auto_scroll_directive__["a" /* AutoScrollDirective */],
            __WEBPACK_IMPORTED_MODULE_4__spinner__["a" /* SpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_2__auto_scroll_directive__["a" /* AutoScrollDirective */],
            __WEBPACK_IMPORTED_MODULE_4__spinner__["a" /* SpinnerComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/spinner/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner_component__ = __webpack_require__("../../../../../src/app/core/shared/spinner/spinner.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__("../../../../../src/app/core/shared/spinner/spinner.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.ng2-spinner {*/\n  /*position: absolute;*/\n  /*top: 0;*/\n  /*left: 0;*/\n  /*width: 100%;*/\n  /*height: 100vh;*/\n  /*background-color: rgba(0,0,0,0.25);*/\n  /*z-index: 100000;*/\n/*}*/\n\n.loadingDiv{\n  z-index: 99999;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: rgba(99, 122, 145, 0.6);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.display]=\"show == true ? 'inherit' : 'none'\">\n  <div class=\"loadingDiv\">\n    <img src=\"../../../../assets/img/loading.gif\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__("../../../../../src/app/core/shared/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spin_js__ = __webpack_require__("../../../../spin.js/spin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpinnerComponent = (function () {
    function SpinnerComponent(spinnerElement, spinnerService) {
        this.spinnerElement = spinnerElement;
        this.spinnerService = spinnerService;
        this.show = false;
        this.element = null;
        this.subscription = null;
        this.lines = 13; // The number of lines to draw
        this.length = 38; // The length of each line
        this.width = 17; // The line thickness
        this.radius = 45; // The radius of the inner circle
        this.scale = 1; // Scales overall size of the spinner
        this.corners = 1; // Corner roundness (0..1)
        this.color = '#ffffff'; // #rgb or #rrggbb or array of colors
        this.fadeColor = 'transparent'; // CSS color or array of colors
        this.opacity = 0.25; // Opacity of the lines
        this.rotate = 10; // The rotation offset
        this.direction = 1; // 1: clockwise, -1: counterclockwise
        this.speed = 1; // Rounds per second
        this.trail = 60; // Afterglow percentage
        this.fps = 20; // Frames per second when using setTimeout() as a fallback for CSS
        this.className = 'spinner'; // The CSS class to assign to the spinner
        this.top = '50%'; // Top position relative to parent
        this.left = '50%'; // Left position relative to parent
        this.shadow = '0 0 1px transparent'; // Whether to render a shadow
        this.hwaccel = true; // Whether to use hardware acceleration
        this.position = 'absolute'; // Element positioning
        this.element = spinnerElement.nativeElement;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        // this.initSpinner();
        this.createServiceSubscription();
    };
    SpinnerComponent.prototype.initSpinner = function () {
        var options = {
            lines: this.lines,
            length: this.length,
            width: this.width,
            radius: this.radius,
            scale: this.scale,
            corners: this.corners,
            color: this.color,
            opacity: this.opacity,
            rotate: this.rotate,
            direction: this.direction,
            speed: this.speed,
            trail: this.trail,
            fps: this.fps,
            zIndex: 2e9,
            className: this.className,
            top: this.top,
            left: this.left,
            shadow: this.shadow,
            hwaccel: this.hwaccel,
            position: this.position
        };
        this.spinner = new __WEBPACK_IMPORTED_MODULE_2_spin_js__["a" /* Spinner */](options);
    };
    SpinnerComponent.prototype.createServiceSubscription = function () {
        var _this = this;
        this.subscription = this.spinnerService.spinnerObservable.subscribe(function (show) {
            if (show) {
                _this.startSpinner();
            }
            else {
                _this.stopSpinner();
            }
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SpinnerComponent.prototype.startSpinner = function () {
        this.show = true;
        // this.spinner.spin(this.element.firstChild);
    };
    SpinnerComponent.prototype.stopSpinner = function () {
        this.show = false;
        // this.spinner.stop();
    };
    return SpinnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "lines", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "length", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "radius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "scale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "corners", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "fadeColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "opacity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "rotate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "direction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "speed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "trail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "fps", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "className", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "top", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "left", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "shadow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "hwaccel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "position", void 0);
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sjs-spinner',
        template: __webpack_require__("../../../../../src/app/core/shared/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shared/spinner/spinner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a" /* SpinnerService */]) === "function" && _b || Object])
], SpinnerComponent);

var _a, _b;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/spinner/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = (function () {
    function SpinnerService() {
        this.spinnerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    Object.defineProperty(SpinnerService.prototype, "spinnerObservable", {
        get: function () {
            return this.spinnerSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SpinnerService.prototype.show = function () {
        this.spinnerSubject.next(true);
    };
    SpinnerService.prototype.hide = function () {
        this.spinnerSubject.next(false);
    };
    return SpinnerService;
}());
SpinnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SpinnerService);

//# sourceMappingURL=spinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/alert/alert.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALERT_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_HIDE; });
/* unused harmony export AlertShow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AlertHide; });
var ALERT_SHOW = 'ALERT_SHOW';
var ALERT_HIDE = 'ALERT_HIDE';
var AlertShow = (function () {
    function AlertShow(payload) {
        this.payload = payload;
        this.type = ALERT_SHOW;
    }
    return AlertShow;
}());

var AlertHide = (function () {
    function AlertHide() {
        this.type = ALERT_HIDE;
    }
    return AlertHide;
}());

//# sourceMappingURL=alert.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/alert/alert.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = alertReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    message: '',
    show: false,
    type: '',
    loaderStatus: false
};
function alertReducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_0__alert_actions__["b" /* ALERT_SHOW */]:
            return __assign({}, state, { show: true, type: actions.payload.type, message: actions.payload.message });
        case __WEBPACK_IMPORTED_MODULE_0__alert_actions__["a" /* ALERT_HIDE */]:
            return __assign({}, state, { show: false, type: '', message: '' });
        default:
            return state;
    }
}
//# sourceMappingURL=alert.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SIGNUP_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIGNIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SIGNIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SIGNOUT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SIGNOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORGOT_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FORGOT_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESET_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RESET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHECK_TWILIO_ACTIVE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHECK_TWILIO_ACTIVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SignUpAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SignInAttempt; });
/* unused harmony export SignInSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SignOutAttempt; });
/* unused harmony export SignOutSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ForgotPasswordAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ForgotPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ResetPasswordAttempt; });
/* unused harmony export ResetPasswordSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CheckToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CheckTwilioActiveAttempt; });
/* unused harmony export CheckTwilioActiveSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UpdateAttempt; });
var SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILED = 'SIGNUP_FAILED';
var SIGNIN_ATTEMPT = 'SIGNIN_ATTEMPT';
var SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
var SIGNOUT_ATTEMPT = 'SIGNOUT_ATTEMPT';
var SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
var FORGOT_PASSWORD_ATTEMPT = 'FORGOT_PASSWORD_ATTEMPT';
var FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
var RESET_PASSWORD_ATTEMPT = 'RESET_PASSWORD_ATTEMPT';
var RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var CHECK_TOKEN = 'CHECK_TOKEN';
var CHECK_TWILIO_ACTIVE_ATTEMPT = 'CHECK_TWILIO_ACTIVE_ATTEMPT';
var CHECK_TWILIO_ACTIVE_SUCCESS = 'CHECK_TWILIO_ACTIVE_SUCCESS';
var UPDATE_ATTEMPT = 'UPDATE_ATTEMPT';
var SignUpAttempt = (function () {
    function SignUpAttempt(payload) {
        this.payload = payload;
        this.type = SIGNUP_ATTEMPT;
    }
    return SignUpAttempt;
}());

var SignUpSuccess = (function () {
    function SignUpSuccess(payload) {
        this.payload = payload;
        this.type = SIGNUP_SUCCESS;
    }
    return SignUpSuccess;
}());

var SignInAttempt = (function () {
    function SignInAttempt(payload) {
        this.payload = payload;
        this.type = SIGNIN_ATTEMPT;
    }
    return SignInAttempt;
}());

var SignInSuccess = (function () {
    function SignInSuccess(payload) {
        this.payload = payload;
        this.type = SIGNIN_SUCCESS;
    }
    return SignInSuccess;
}());

var SignOutAttempt = (function () {
    function SignOutAttempt() {
        this.type = SIGNOUT_ATTEMPT;
    }
    return SignOutAttempt;
}());

var SignOutSuccess = (function () {
    function SignOutSuccess() {
        this.type = SIGNOUT_SUCCESS;
    }
    return SignOutSuccess;
}());

var ForgotPasswordAttempt = (function () {
    function ForgotPasswordAttempt(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_ATTEMPT;
    }
    return ForgotPasswordAttempt;
}());

var ForgotPasswordSuccess = (function () {
    function ForgotPasswordSuccess(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_SUCCESS;
    }
    return ForgotPasswordSuccess;
}());

var ResetPasswordAttempt = (function () {
    function ResetPasswordAttempt(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_ATTEMPT;
    }
    return ResetPasswordAttempt;
}());

var ResetPasswordSuccess = (function () {
    function ResetPasswordSuccess(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_SUCCESS;
    }
    return ResetPasswordSuccess;
}());

var CheckToken = (function () {
    function CheckToken() {
        this.type = CHECK_TOKEN;
    }
    return CheckToken;
}());

var CheckTwilioActiveAttempt = (function () {
    function CheckTwilioActiveAttempt() {
        this.type = CHECK_TWILIO_ACTIVE_ATTEMPT;
    }
    return CheckTwilioActiveAttempt;
}());

var CheckTwilioActiveSuccess = (function () {
    function CheckTwilioActiveSuccess(payload) {
        this.payload = payload;
        this.type = CHECK_TWILIO_ACTIVE_SUCCESS;
    }
    return CheckTwilioActiveSuccess;
}());

var UpdateAttempt = (function () {
    function UpdateAttempt(payload) {
        this.payload = payload;
        this.type = UPDATE_ATTEMPT;
    }
    return UpdateAttempt;
}());

//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AuthEffects = (function () {
    function AuthEffects(actions$, httpClient, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.router = router;
        this.store = store;
        this.authSignUp = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["q" /* SIGNUP_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-registration';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["s" /* SIGNUP_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["r" /* SIGNUP_FAILED */],
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.authSignIn = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["m" /* SIGNIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'userlogin';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    _this.router.navigate(['/dashboard']);
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["n" /* SIGNIN_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authForgotPassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["f" /* FORGOT_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'forget-password-mail';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    _this.router.navigate(['/sign-in']);
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["g" /* FORGOT_PASSWORD_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: 'FORGOT_PASSWORD_FAILED',
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authResetPassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["j" /* RESET_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'update-password';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    _this.router.navigate(['/sign-in']);
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["k" /* RESET_PASSWORD_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: 'RESET_PASSWORD_SUCCESS',
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authSignOut = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["o" /* SIGNOUT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'log-out';
            return _this.httpClient.post(apiUrl, null)
                .map(function (res) {
                if (res.status) {
                    _this.router.navigate(['/']);
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["p" /* SIGNOUT_SUCCESS */]
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.twilioActive = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["b" /* CHECK_TWILIO_ACTIVE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'validate-twilio-credentials';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */],
                    payload: res.status
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
    }
    return AuthEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authForgotPassword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authResetPassword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "twilioActive", void 0);
AuthEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]) === "function" && _d || Object])
], AuthEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    token: null,
    registered: false,
    resetForgotPasswordForm: false,
    isAuthenticated: false,
    name: null,
    email: null,
    userId: null,
    userType: null,
    twilioIsActive: false,
    isSuperAdmin: false,
    isAdmin: false,
    isAgent: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["s" /* SIGNUP_SUCCESS */]):
            return __assign({}, state, { registered: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["g" /* FORGOT_PASSWORD_SUCCESS */]):
            return __assign({}, state, { resetForgotPasswordForm: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["n" /* SIGNIN_SUCCESS */]):
            localStorage.setItem('data', JSON.stringify(action.payload));
            return __assign({}, state, { isAuthenticated: true, token: action.payload.userToken, userId: action.payload.userId, userType: action.payload.userType, isSuperAdmin: action.payload.userType == 1, isAdmin: action.payload.userType == 2, isAgent: action.payload.userType == 3, name: action.payload.firstName + ' ' + action.payload.lastName, email: action.payload.email });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["p" /* SIGNOUT_SUCCESS */]):
            localStorage.removeItem('data');
            return __assign({}, state, { token: null, userId: null, userType: null, isSuperAdmin: false, isAdmin: false, isAgent: false, isAuthenticated: false });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* CHECK_TOKEN */]):
            if (localStorage.getItem('data') !== null && localStorage.getItem('data') !== undefined) {
                var data_1 = JSON.parse(localStorage.getItem('data'));
                return __assign({}, state, { isAuthenticated: true, token: data_1.userToken, userId: data_1.userId, userType: data_1.userType, isSuperAdmin: data_1.userType == 1, isAdmin: data_1.userType == 2, isAgent: data_1.userType == 3, name: data_1.firstName + ' ' + data_1.lastName, email: data_1.email });
            }
            else {
                return state;
            }
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */]):
            return __assign({}, state, { twilioIsActive: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["x" /* UPDATE_ATTEMPT */]):
            var data = JSON.parse(localStorage.getItem('data'));
            var obj = {
                email: data.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userId: data.userId,
                userToken: data.userToken,
                userType: data.userType
            };
            localStorage.removeItem('data');
            localStorage.setItem('data', JSON.stringify(obj));
            return __assign({}, state, { name: action.payload.firstName + ' ' + action.payload.lastName });
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/core.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducers__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert_reducers__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_store_department_department_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.reducers.ts");



var reducers = {
    auth: __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducers__["a" /* authReducer */],
    alert: __WEBPACK_IMPORTED_MODULE_1__alert_alert_reducers__["a" /* alertReducer */],
    department: __WEBPACK_IMPORTED_MODULE_2__layout_store_department_department_reducers__["a" /* departmentReducer */]
};
//# sourceMappingURL=core.reducers.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_BASE_URL: 'http://dev.3cns.com/api/v1/',
    SOCKET_URL: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var profileRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */] }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(profileRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n        <h1>\n            User Profile\n        </h1>\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li class=\"active\">Profile</li>-->\n        <!--</ol>-->\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n\n                <!-- Profile Image -->\n                <div class=\"box box-primary\">\n                    <div class=\"box-body box-profile\">\n                        <img class=\"profile-user-img img-responsive img-circle\" src=\"../../../../../assets/img/avatar5.png\" alt=\"User profile picture\">\n\n                        <h3 class=\"profile-username text-center\"> {{(authState | async).name}}</h3>\n\n                        <p class=\"text-muted text-center\" *ngIf=\"(authState | async).isSuperAdmin\">Super Admin</p>\n                        <p class=\"text-muted text-center\" *ngIf=\"(authState | async).isAdmin\">Admin</p>\n                        <p class=\"text-muted text-center\" *ngIf=\"(authState | async).isAgent\">Agent</p>\n\n\n                        <!--<ul class=\"list-group list-group-unbordered\">-->\n                            <!--<li class=\"list-group-item\">-->\n                                <!--<b>Followers</b> <a class=\"pull-right\">1,322</a>-->\n                            <!--</li>-->\n                            <!--<li class=\"list-group-item\">-->\n                                <!--<b>Following</b> <a class=\"pull-right\">543</a>-->\n                            <!--</li>-->\n                            <!--<li class=\"list-group-item\">-->\n                                <!--<b>Friends</b> <a class=\"pull-right\">13,287</a>-->\n                            <!--</li>-->\n                        <!--</ul>-->\n\n                        <!--<a href=\"#\" class=\"btn btn-primary btn-block\"><b>Follow</b></a>-->\n                    </div>\n                    <!-- /.box-body -->\n                </div>\n                <!-- /.box -->\n\n            </div>\n            <!-- /.col -->\n            <div class=\"col-md-9\">\n                <div class=\"nav-tabs-custom\">\n                    <ul class=\"nav nav-tabs\">\n                        <li [ngClass]=\"{active: selectedTab}\"><a data-toggle=\"tab\" (click)=\"toggleSelectedTab()\">Account Info</a></li>\n                        <li [ngClass]=\"{active: !selectedTab}\"><a data-toggle=\"tab\" (click)=\"toggleSelectedTab()\">Change Password</a></li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane active\" *ngIf=\"selectedTab\" id=\"info\">\n                            <form [formGroup]=\"profileForm\" (submit)=\"onUpdateInfo()\" class=\"form-horizontal\">\n\n                                <!-- First Name -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': profileForm.get('firstName').invalid && profileForm.get('firstName').touched && profileForm.get('firstName').hasError('required') }\">\n                                    <label for=\"fName\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"profileForm.get('firstName').invalid && profileForm.get('firstName').touched && profileForm.get('firstName').hasError('required')\" class=\"fa fa-times-circle-o\"></i>\n                                         First Name\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\"\n                                               class=\"form-control\"\n                                               id=\"fName\"\n                                               formControlName=\"firstName\"\n                                        >\n                                        <span *ngIf=\"profileForm.get('firstName').invalid && profileForm.get('firstName').touched && profileForm.get('firstName').hasError('required')\" class=\"help-block\">Your First Name is Required!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Last Name -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': profileForm.get('lastName').invalid && profileForm.get('lastName').touched && profileForm.get('lastName').hasError('required') }\">\n                                    <label for=\"lName\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"profileForm.get('lastName').invalid && profileForm.get('lastName').touched && profileForm.get('lastName').hasError('required')\" class=\"fa fa-times-circle-o\"></i>\n                                         Last Name\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"email\"\n                                               class=\"form-control\"\n                                               id=\"lName\"\n                                               formControlName=\"lastName\"\n                                        >\n                                        <span *ngIf=\"profileForm.get('lastName').invalid && profileForm.get('lastName').touched && profileForm.get('lastName').hasError('required')\" class=\"help-block\">Your Last Name is Required!</span>\n                                    </div>\n                                </div>\n\n                                <!-- User Name -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': profileForm.get('company').invalid && profileForm.get('company').touched }\">\n                                    <label for=\"company\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"profileForm.get('company').invalid && profileForm.get('userName').touched\" class=\"fa fa-times-circle-o\"></i>\n                                        Company\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input *ngIf=\"(authState | async).isAgent\" type=\"text\"\n                                               class=\"form-control\"\n                                               id=\"company\"\n                                               formControlName=\"company\"\n                                               placeholder=\"Company Name\" disabled>\n                                        <input *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\" type=\"text\"\n                                               class=\"form-control\"\n                                               id=\"company\"\n                                               formControlName=\"company\"\n                                               placeholder=\"Company Name\">\n                                        <span *ngIf=\"profileForm.get('company').invalid && profileForm.get('company').touched\" class=\"help-block\">Your User Name is Required!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Email -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': profileForm.get('email').invalid && profileForm.get('email').touched }\">\n                                    <label for=\"email\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"profileForm.get('email').invalid && profileForm.get('email').touched\" class=\"fa fa-times-circle-o\"></i>\n                                         Email\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\"\n                                               class=\"form-control\"\n                                               id=\"email\"\n                                               formControlName=\"email\"\n                                               placeholder=\"Name\"\n                                        >\n                                        <span *ngIf=\"profileForm.get('email').invalid && profileForm.get('email').touched && profileForm.get('email').hasError('email')\" class=\"help-block\">Enter a Proper Email Address!</span>\n                                        <span *ngIf=\"profileForm.get('email').invalid && profileForm.get('email').touched && profileForm.get('email').hasError('required')\" class=\"help-block\">Your Email Address is Required!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Phone No -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': profileForm.get('phone').invalid && profileForm.get('phone').touched }\">\n                                    <label for=\"phoneNo\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"profileForm.get('phone').invalid && profileForm.get('phone').touched\" class=\"fa fa-times-circle-o\"></i>\n                                         Phone No\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\"\n                                               class=\"form-control\"\n                                               id=\"phoneNo\"\n                                               [textMask]=\"{mask: mask, guide: false}\"\n                                               formControlName=\"phone\"\n                                               placeholder=\"PhoneNo\"\n                                        >\n                                        <span *ngIf=\"profileForm.get('phone').invalid && profileForm.get('phone').touched && profileForm.get('phone').hasError('required')\" class=\"help-block\">Your Phone Number is Required!</span>\n                                        <span *ngIf=\"profileForm.get('phone').invalid && profileForm.get('phone').touched && profileForm.get('phone').hasError('minlength')\" class=\"help-block\">Your Phone Number should be at least 10 Digits Long!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Submit -->\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-offset-2 col-sm-10\">\n                                        <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"profileForm.invalid\"><i *ngIf=\"loader1\" class=\"fa fa-spinner fa-spin\"></i> Submit</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                        <div class=\"tab-pane active\" *ngIf=\"!selectedTab\" id=\"password\">\n                            <form [formGroup]=\"passwordForm\" (submit)=\"onUpdatePassword()\" class=\"form-horizontal\">\n\n                                <!-- Password -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': passwordForm.get('password').invalid && passwordForm.get('password').touched }\">\n                                    <label for=\"pass\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"passwordForm.get('password').invalid && passwordForm.get('password').touched\" class=\"fa fa-times-circle-o\"></i>\n                                         Password\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"password\"\n                                               class=\"form-control\"\n                                               id=\"pass\"\n                                               formControlName=\"password\"\n                                        >\n                                        <span *ngIf=\"passwordForm.get('password').invalid && passwordForm.get('password').touched && passwordForm.get('password').hasError('required')\" class=\"help-block\">Your Password is Required!</span>\n                                        <span *ngIf=\"passwordForm.get('password').invalid && passwordForm.get('password').touched && passwordForm.get('password').hasError('minlength')\" class=\"help-block\">Your Password is Required!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Confirm Password -->\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': passwordForm.get('confPassword').invalid && passwordForm.get('confPassword').touched }\">\n                                    <label for=\"cnfPass\" class=\"col-sm-2 control-label\">\n                                        <i *ngIf=\"passwordForm.get('confPassword').invalid && passwordForm.get('confPassword').touched\" class=\"fa fa-times-circle-o\"></i>\n                                         Confirm Password\n                                    </label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"password\"\n                                               class=\"form-control\"\n                                               id=\"cnfPass\"\n                                               formControlName=\"confPassword\"\n                                        >\n                                        <span *ngIf=\"passwordForm.get('confPassword').invalid && passwordForm.get('confPassword').touched && passwordForm.get('confPassword').hasError('required')\" class=\"help-block\">Confirm Password is Required!</span>\n                                        <span *ngIf=\"passwordForm.get('confPassword').invalid && passwordForm.get('confPassword').touched && passwordForm.get('confPassword').hasError('confirmPassword')\" class=\"help-block\">Confirm Password did not Match!</span>\n                                    </div>\n                                </div>\n\n                                <!-- Submit -->\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-offset-2 col-sm-10\">\n                                        <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"passwordForm.invalid\"> <i *ngIf =\"loader\" class=\"fa fa-spinner fa-spin\"></i> Submit</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                        <!-- /.tab-pane -->\n                    </div>\n                    <!-- /.tab-content -->\n                </div>\n                <!-- /.nav-tabs-custom -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n\n    </section>\n    <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_profile_profile_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    /** Service injection */
    function ProfileComponent(formBuilder, store, storeAuth, router) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.storeAuth = storeAuth;
        this.router = router;
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.selectedTab = true;
        this.loader = false;
        this.loader1 = false;
        /** Custom confirm password validator */
        this.confirmPassword = function (control) {
            var pass = control.get('password');
            var cnfPass = control.get('confPassword');
            if (!pass || !cnfPass) {
                return null;
            }
            if (pass.value === cnfPass.value) {
                return null;
            }
            else {
                control.get('confPassword').setErrors({ confirmPassword: true });
                return { confirmPassword: true };
            }
        };
    }
    /** Function to be executed when component initializes */
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authState = this.storeAuth.select('auth');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_profile_profile_actions__["j" /* GetProfileAttempt */]());
        /** Profile form initialization */
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
            'userId': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required),
            'firstName': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required),
            'company': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null),
            'phone': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(14)]),
            'email': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ value: null, disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].email])
        });
        /** Password form initialization */
        this.passwordForm = this.formBuilder.group({
            'userId': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null),
            'password': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(6)]),
            'confPassword': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null)
        }, { validator: this.confirmPassword });
        this.profileSubscription1 = this.store.select('afterLogin')
            .map(function (data) { return data.profile.resetChangePasswordForm; })
            .subscribe(function (afterLogin) {
            if (afterLogin) {
                _this.passwordForm.reset();
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_profile_profile_actions__["g" /* EditProfileChangePasswordSuccess */](false));
            }
        });
        this.profileSubscription2 = this.store.select('afterLogin')
            .map(function (data) { return data.profile.data; })
            .subscribe(function (afterLogin) {
            _this.passwordForm.reset();
            if (afterLogin && afterLogin.user_info) {
                var uInfo = afterLogin.user_info;
                _this.profileForm.patchValue({
                    userId: uInfo.id,
                    firstName: uInfo.first_name,
                    lastName: uInfo.last_name,
                    company: uInfo.company,
                    phone: uInfo.phone,
                    email: uInfo.email
                });
                _this.passwordForm.patchValue({
                    userId: uInfo.id
                });
            }
        });
    };
    /** Function call to update info */
    ProfileComponent.prototype.onUpdateInfo = function () {
        var _this = this;
        this.loader1 = true;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_profile_profile_actions__["e" /* EditProfileAttempt */](this.profileForm.value));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_auth_auth_actions__["y" /* UpdateAttempt */](this.profileForm.value));
        /** Loader Show/Hide */
        this.store.select('alert')
            .map(function (data) { return data; })
            .subscribe(function (data) {
            if (data.show && data.type === 'danger') {
                _this.loader1 = false;
            }
            else if (data.show && data.type === 'success') {
                _this.loader1 = false;
            }
        }, function (error) { console.error(error); _this.loader1 = false; }, function () { _this.loader1 = false; });
    };
    /** Function call to update password */
    ProfileComponent.prototype.onUpdatePassword = function () {
        var _this = this;
        this.loader = true;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_profile_profile_actions__["f" /* EditProfileChangePasswordAttempt */](this.passwordForm.value));
        /** Loader Show/Hide */
        this.store.select('afterLogin', 'profile', 'resetChangePasswordForm').subscribe(function (value) {
            if (value) {
                _this.loader = false;
            }
        }, function (error) { console.error(error); _this.loader = false; }, function () { _this.loader = false; });
    };
    /** Function call to highlight the selected tab */
    ProfileComponent.prototype.toggleSelectedTab = function () {
        this.selectedTab = !this.selectedTab;
    };
    /** Un-subscribing from all custom made events when component is destroyed */
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription1.unsubscribe();
        this.profileSubscription2.unsubscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/profile/profile-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__profile_component__["a" /* ProfileComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map
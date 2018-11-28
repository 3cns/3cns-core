webpackJsonp(["twilio.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n    <!--<h1>Twilio Section</h1>-->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a href=\"javascript:void(0)\">Twilio Accounts</a></li>-->\n      <!--<li class=\"active\"><a routerLink=\"/twilio/create\">Create </a></li>-->\n    <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <form #form=\"ngForm\" (submit)=\"onSubmit(form)\">\n              <!-- text input -->\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Create Twilio Credentials</h3>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': sid.invalid && sid.touched }\">\n                  <label class=\"control-label\" for=\"tSid\">\n                    <i *ngIf=\"sid.invalid && sid.touched\" class=\"fa fa-times-circle-o\"></i>\n                     Twilio SID\n                  </label>\n                  <input type=\"text\"\n                         class=\"form-control\"\n                         id=\"tSid\"\n                         name=\"twilio_sid\"\n                         [ngModel]=\"twilio.twilio_sid\"\n                         #sid=\"ngModel\"\n                         required\n                         placeholder=\"Enter ...\"\n                  >\n                  <span *ngIf=\"sid.invalid && sid.touched\" class=\"help-block\">Your Twilio SID is Required!</span>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': token.invalid && token.touched }\">\n                  <label class=\"control-label\" for=\"tToken\">\n                    <i *ngIf=\"token.invalid && token.touched\" class=\"fa fa-times-circle-o\"></i>\n                     Twilio Token\n                  </label>\n                  <input type=\"text\"\n                         class=\"form-control\"\n                         id=\"tToken\"\n                         name=\"twilio_token\"\n                         [ngModel]=\"twilio.twilio_token\"\n                         #token=\"ngModel\"\n                         required\n                         placeholder=\"Enter ...\"\n                  >\n                  <span *ngIf=\"token.invalid && token.touched\" class=\"help-block\">Your Twilio Token is Required!</span>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"box-footer\">\n                  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary pull-right\"> Submit</button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <!-- /.box-body -->\n        </div>\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTwilioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_twilio_twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateTwilioComponent = (function () {
    /** Service injection */
    function CreateTwilioComponent(store) {
        this.store = store;
        this.twilio = {
            twilio_sid: '',
            twilio_token: '',
        };
    }
    /** Function to be executed when component initializes */
    CreateTwilioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_twilio_twilio_actions__["g" /* GetTwilioAttempt */]());
        this.authState = this.store.select('auth');
        this.store.select('afterLogin')
            .map(function (data) { return data.twilio.info; })
            .subscribe(function (afterLogin) {
            if (afterLogin !== null) {
                _this.twilio.twilio_sid = afterLogin.twilio_sid;
                _this.twilio.twilio_token = afterLogin.twilio_token;
            }
        });
    };
    /** Function call to submit the form */
    CreateTwilioComponent.prototype.onSubmit = function (form) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_twilio_twilio_actions__["b" /* AddTwilioAttempt */](form.value));
    };
    return CreateTwilioComponent;
}());
CreateTwilioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-twilio',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], CreateTwilioComponent);

var _a;
//# sourceMappingURL=create-twilio.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:1024px){\n    .box{\n      overflow-x: scroll;\n  }  \n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!--<section class=\"content-header\">-->\n        <!--<h1>Twilio Section</h1>-->\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">Twilio Accounts</a></li>-->\n            <!--<li class=\"active\"><a routerLink=\"/twilio/list\">List </a></li>-->\n        <!--</ol>-->\n    <!--</section>-->\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box box-primary\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">List of Twilio Accounts</h3>\n                    </div>\n                    <!-- /.box-header -->\n                    <div class=\"box-body\">\n                        <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\"> Search : <input [(ngModel)]=\"term\" placeholder=\"All fields\"></div>\n                                <div class=\"col-sm-6\"></div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <table id=\"twilioTable\" class=\"table table-bordered table-hover dataTable\"\n                                           role=\"grid\" aria-describedby=\"example2_info\">\n                                        <thead>\n                                        <tr role=\"row\">\n                                            <th rowspan=\"1\" colspan=\"1\">#</th>\n                                            <th rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">User\n                                            </th>\n                                            <!--<th class=\"sorting\" rowspan=\"1\" colspan=\"1\" >User Name</th>-->\n                                            <th rowspan=\"1\" colspan=\"1\">Email Address</th>\n                                            <th rowspan=\"1\" colspan=\"1\">Twilio SID</th>\n                                            <th rowspan=\"1\" colspan=\"1\">Twilio Account Type</th>\n                                            <th rowspan=\"1\" colspan=\"1\" >Created Date</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr role=\"row\" class=\"odd\"\n                                            *ngFor=\"let item of (afterLoginState | async).twilio.list | filter : term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                                            <td>{{i+1}}</td>\n                                            <td>{{item.user_info.first_name}} {{item.user_info.last_name}}</td>\n                                            <!--<td>{{item.user_info.username}}</td>-->\n                                            <td>{{item.user_info.email}}</td>\n                                            <td>{{item.twilio_sid}}</td>\n                                            <td>{{ item.user_info.type == '1' ? 'Main Account' : 'Subaccount' }}</td>\n                                            <td>{{ item.created_at | amUtc | amDateFormat:'MMMM DD YYYY' }}</td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"row\">\n                                        <pagination-controls class=\"older_post_text\"\n                                                             (pageChange)=\"page=$event\"\n                                                             maxSize=\"9\"\n                                                             directionLinks=\"true\"\n                                                             autoHide=\"true\"\n                                                             previousLabel=\"\"\n                                                             nextLabel=\"\"\n                                                             screenReaderPaginationLabel=\"\"\n                                                             screenReaderPageLabel=\"page\"\n                                                             screenReaderCurrentLabel=\"You're on page\">\n                                        </pagination-controls>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.box-body -->\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTwilioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_twilio_twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListTwilioComponent = (function () {
    /** Service injection */
    function ListTwilioComponent(store, orderPipe) {
        this.store = store;
        this.orderPipe = orderPipe;
        this.order = 'info.name';
        this.reverse = false;
        this.sortedCollection = orderPipe.transform(this.afterLoginState, 'info.name');
    }
    /** Function to be executed when component initializes */
    ListTwilioComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_twilio_twilio_actions__["h" /* GetTwilioListAttempt */]());
        this.afterLoginState = this.store.select('afterLogin');
    };
    /**
     * Function for ordering the table
     * @param {string} value
     */
    ListTwilioComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return ListTwilioComponent;
}());
ListTwilioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-twilio',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__["b" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__["b" /* OrderPipe */]) === "function" && _b || Object])
], ListTwilioComponent);

var _a, _b;
//# sourceMappingURL=list-twilio.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">List of Twilio Sub-Accounts</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <table class=\"table table-bordered table-hover dataTable\"\n                         role=\"grid\" aria-describedby=\"example2_info\">\n                    <thead>\n                    <tr role=\"row\">\n                      <th rowspan=\"1\" colspan=\"1\">#</th>\n                      <th rowspan=\"1\" colspan=\"1\">Friendly Name</th>\n                      <th rowspan=\"1\" colspan=\"1\">Twilio SID</th>\n                      <th rowspan=\"1\" colspan=\"1\">Twilio token</th>\n                      <th rowspan=\"1\" colspan=\"1\">Twilio Status</th>\n                      <th rowspan=\"1\" colspan=\"1\">Admin Name</th>\n                      <th rowspan=\"1\" colspan=\"1\">Admin Status</th>\n                      <th rowspan=\"1\" colspan=\"1\" >Created Date</th>\n                      <th rowspan=\"1\" colspan=\"1\" >Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of subaccountList | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                        <td>{{ i+1 }}</td>\n                        <td>{{ item.friendlyName }}</td>\n                        <td>{{ item.sid }}</td>\n                        <td>{{ item.authToken }}</td>\n                        <td>{{ item.twilioStatus }}</td>\n                        <td>{{ item.adminName }}</td>\n                        <td>{{ item.adminStatus }}</td>\n                        <td>{{ item.dateCreated.date | amUtc | amDateFormat:'MMMM DD YYYY' }}</td>\n                        <td>\n                          <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"item.adminName === '' && (item.adminStatus !== 'Active' || item.adminStatus !== 'Deactivate') \" (click)=\"deleteSubAccount(item.userId,item.sid,item.authToken)\">\n                            <i class=\"fa fa-trash\"></i>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <div class=\"row\">\n                    <pagination-controls class=\"older_post_text\"\n                                         (pageChange)=\"page=$event\"\n                                         maxSize=\"9\"\n                                         directionLinks=\"true\"\n                                         autoHide=\"true\"\n                                         previousLabel=\"\"\n                                         nextLabel=\"\"\n                                         screenReaderPaginationLabel=\"\"\n                                         screenReaderPageLabel=\"page\"\n                                         screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubaccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_sweetalert2__ = __webpack_require__("../../../../ngx-sweetalert2/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubaccountComponent = (function () {
    function SubaccountComponent(spinnerService, httpClient, _swal) {
        this.spinnerService = spinnerService;
        this.httpClient = httpClient;
        this._swal = _swal;
    }
    SubaccountComponent.prototype.ngOnInit = function () {
        this.subaccountList = [];
        this.fetchTwillioAccount();
    };
    SubaccountComponent.prototype.deleteSubAccount = function (userId, sid, token) {
        var formData = new FormData();
        formData.append('userId', userId);
        formData.append('twilioSid', sid);
        formData.append('twilioToken', token);
        var that = this;
        this._swal.warning({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result) {
                var apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_BASE_URL + 'close-twilio-account';
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest').set('enctype', 'multipart/form-data');
                var config = {
                    headers: headers
                };
                that.spinnerService.show();
                that.httpClient.post(apiUrl, formData, config)
                    .subscribe(function (res) {
                    that.spinnerService.hide();
                    if (res.status) {
                        that.fetchTwillioAccount();
                    }
                    else {
                        console.log(res);
                    }
                });
            }
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                console.log('cancel');
            }
        });
    };
    SubaccountComponent.prototype.fetchTwillioAccount = function () {
        var _this = this;
        var apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_BASE_URL + 'list-all-twilio-accounts';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest').set('enctype', 'multipart/form-data');
        var config = {
            headers: headers
        };
        this.spinnerService.show();
        this.httpClient.post(apiUrl, config)
            .subscribe(function (res) {
            _this.spinnerService.hide();
            if (res.status) {
                _this.subaccountList = res.response;
            }
            else {
                _this.subaccountList = [];
            }
        });
    };
    return SubaccountComponent;
}());
SubaccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subaccount',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_spinner__["b" /* SpinnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_sweetalert2__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_sweetalert2__["a" /* SweetAlertService */]) === "function" && _c || Object])
], SubaccountComponent);

var _a, _b, _c;
//# sourceMappingURL=subaccount.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/twilio-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_twilio_create_twilio_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_twilio_list_twilio_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subaccount_subaccount_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__create_twilio_create_twilio_component__["a" /* CreateTwilioComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_twilio_list_twilio_component__["a" /* ListTwilioComponent */] },
    { path: 'sub-account', component: __WEBPACK_IMPORTED_MODULE_4__subaccount_subaccount_component__["a" /* SubaccountComponent */] },
];
var TwilioRoutingModule = (function () {
    function TwilioRoutingModule() {
    }
    return TwilioRoutingModule;
}());
TwilioRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], TwilioRoutingModule);

//# sourceMappingURL=twilio-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/twilio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwilioModule", function() { return TwilioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_twilio_create_twilio_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/create-twilio/create-twilio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_twilio_list_twilio_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/list-twilio/list-twilio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twilio_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/twilio-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__twilioSearch_pipe__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/twilioSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subaccount_subaccount_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/twilio/subaccount/subaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_sweetalert2__ = __webpack_require__("../../../../ngx-sweetalert2/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TwilioModule = (function () {
    function TwilioModule() {
    }
    return TwilioModule;
}());
TwilioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__twilio_routing_module__["a" /* TwilioRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__create_twilio_create_twilio_component__["a" /* CreateTwilioComponent */],
            __WEBPACK_IMPORTED_MODULE_4__list_twilio_list_twilio_component__["a" /* ListTwilioComponent */],
            __WEBPACK_IMPORTED_MODULE_10__twilioSearch_pipe__["a" /* TwilioSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_11__subaccount_subaccount_component__["a" /* SubaccountComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12_ngx_sweetalert2__["a" /* SweetAlertService */]]
    })
], TwilioModule);

//# sourceMappingURL=twilio.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/twilio/twilioSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__ = __webpack_require__("../../../../ngx-bootstrap/chronos/test/chain.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TwilioSearchPipe = (function () {
    function TwilioSearchPipe() {
    }
    TwilioSearchPipe.prototype.transform = function (items, term) {
        if (!items) {
            return [];
        }
        if (!term) {
            return items;
        }
        return items.filter(function (el) {
            // check for first name
            var termLower = term.toLowerCase().trim();
            var name = el.user_info != null ? el.user_info.first_name + ' ' + el.user_info.last_name : '';
            var userType = el.user_info != null ? (el.user_info.type === '1' ? 'Main Account' : 'Subaccount') : '';
            if (name != null && name.toLowerCase().indexOf(termLower) > -1) {
                return name.toLowerCase().indexOf(termLower) > -1;
            }
            else {
                // check for last name
                if ((el.user_info != null && el.user_info.email) && el.user_info.email.toLowerCase().indexOf(termLower) > -1) {
                    return el.user_info.email.toLowerCase().indexOf(termLower) > -1;
                }
                else {
                    // search for company
                    if (el.twilio_sid != null && el.twilio_sid.toLowerCase().indexOf(termLower) > -1) {
                        return el.twilio_sid.toLowerCase().indexOf(termLower) > -1;
                    }
                    else {
                        // search for email
                        if (userType != null && userType.toLowerCase().indexOf(termLower) > -1) {
                            return userType.toLowerCase().indexOf(termLower) > -1;
                        }
                        else {
                            // search for date
                            if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
                            }
                        }
                    }
                }
            }
        });
    };
    return TwilioSearchPipe;
}());
TwilioSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], TwilioSearchPipe);

//# sourceMappingURL=twilioSearch.pipe.js.map

/***/ })

});
//# sourceMappingURL=twilio.module.chunk.js.map
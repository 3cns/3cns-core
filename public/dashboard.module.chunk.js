webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var dashboardRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(dashboardRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products-list {\n    max-height: 400px;\n    overflow-y: auto;\n}\n.products-list .product-info {\n    margin-left: 0;\n    display: inline-block;\n    width: 50%;\n    vertical-align: top;\n}\n.button-box{\n    float: right;\n}\n.has-error {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li class=\"active\">Dashboard</li>-->\n    <!--</ol>-->\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Small boxes (Stat box) -->\n    <div class=\"row\">\n      <!-- Only for Admin and Superadmin-->\n      <div class=\"col-lg-3 col-xs-6\"   *ngIf=\"(authState | async).isSuperAdmin\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>{{admin}}</h3>\n            <p>Admins</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a routerLink=\"/admin/list\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\"  *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">\n        <!-- small box -->\n        <div class=\"small-box bg-red\">\n          <div class=\"inner\">\n            <h3>{{agent}}</h3>\n            <p>Agents</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a routerLink=\"/agent/list\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>{{depertment}}</h3>\n            <p>Departments</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a routerLink=\"/department/list\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">\n        <!-- small box -->\n        <div class=\"small-box bg-blue\">\n          <div class=\"inner\">\n            <h3>{{widgets}}</h3>\n            <p>Widgets</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a routerLink=\"/widget/list\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n\n      <div class=\"col-lg-3 col-xs-6\"  *ngIf=\"(authState | async).isAgent\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>{{pendingChatCount}}</h3>\n            <h4>New Requests</h4>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"/chat/pending\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-xs-6\"  *ngIf=\"(authState | async).isAgent\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>{{ongoingChatCount}}</h3>\n            <h4>Live Sessions</h4>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"/chat/ongoing\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n\n        <div class=\"col-lg-3 col-xs-6\"  *ngIf=\"(authState | async).isAgent\">\n            <!-- small box -->\n            <div class=\"small-box bg-blue\">\n                <div class=\"inner\">\n                    <h3>{{closedChatCount}}</h3>\n                    <h4>Closed </h4>\n                </div>\n                <div class=\"icon\">\n                    <i class=\"ion ion-person-add\"></i>\n                </div>\n                <a href=\"/chat/resolve\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-xs-6\"  *ngIf=\"(authState | async).isAgent\">\n            <!-- small box -->\n            <div class=\"small-box bg-red\">\n                <div class=\"inner\">\n                    <h3>{{rejectedChatCount}}</h3>\n                    <h4>Rejected </h4>\n                </div>\n                <div class=\"icon\">\n                    <i class=\"ion ion-person-add\"></i>\n                </div>\n                <a href=\"/chat/rejected\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n            </div>\n        </div>\n\n\n\n    </div>\n    <div class=\"row\" *ngIf=\"(authState | async).isAgent\">\n        <div class=\"col-lg-3 col-xs-12\" *ngIf=\"!!(showChats() | async).length\">\n          <div class=\"box box-primary\">\n            <div class=\"box-header with-border\">\n              <h3 class=\"box-title\">Pending chat requests </h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n              <ul class=\"products-list product-list-in-box\">\n                  <ng-container   *ngFor=\"let contact of (chatState | async).ongoing; let i = index;\">\n                <li class=\"item\" *ngIf=\"contact.status == 1 || contact.status == 6\">\n                  <div class=\"product-info\">\n                    <a href=\"javascript:void(0)\" class=\"product-title\">{{contact.client}}</a>\n                    <span class=\"product-description\">\n                      {{contact.room}} - {{contact.chatTime.date | amFromUtc | amLocal | amTimeAgo}}\n                    </span>\n                    <span >\n                      <span *ngIf=\"contact.transferInfo !== ''\">\n                        Transfer By : {{contact.transferInfo}}\n                      </span>\n                    </span>\n                  </div>\n                  <div class=\"button-box\">\n                    <button class=\"btn btn-success\" (click)=\"onSomeMsgAction(2,contact.room)\">Accept</button>\n                    <button class=\"btn btn-danger\"  (click)=\"onSomeMsgAction(3,contact.room)\">Reject</button>\n                  </div>\n                </li>\n                  </ng-container>\n              </ul>\n            </div>\n            <!-- /.box-body -->\n          </div>\n        </div>\n\n      <div class=\"col-lg-3 col-xs-12\" *ngIf=\"widgetLists.length > 0\">\n        <div class=\"box box-info\">\n          <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n            <i class=\"fa fa-envelope\"></i>\n            <h3 class=\"box-title\">Initiate chat</h3>\n          </div>\n          <div class=\"box-body\">\n            <form>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Number</label>\n                <input type=\"text\" class=\"form-control\" name=\"number\" #number placeholder=\"Please enter exactly 10 digits\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Message</label>\n                <input type=\"text\" class=\"form-control\" name=\"message\" #message placeholder=\"Message\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">File</label>\n                <input type=\"file\" class=\"form-control\" name=\"file\" #file placeholder=\"attach a file for mms\" (change)=\"uploadFile($event)\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Select a widget</label>\n                <select class=\"form-control\" #widgetSelect name=\"widgetSelect\">\n                  <option value=\"\" selected>Select a Widget</option>\n                  <ng-container *ngFor=\"let list of widgetLists\">\n                    <option [value]=\"list.widget_uuid\" *ngIf=\"list.twilio_numbers !== null\">\n                      {{ list.twilio_numbers.number }}\n                      {{ list.website !== null ? ' ( '  +list.website+ ' ) ' : '' }}\n                    </option>\n                  </ng-container>\n                </select>\n              </div>\n              <div class=\"form-group\" *ngIf=\"initiateError\">\n                <span class=\"has-error\">{{ initiateMessage }}</span>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-footer clearfix\">\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\" (click)=\"sendMessage(number.value, message.value, widgetSelect.selectedOptions[0].value)\">\n              Send\n              <i class=\"fa fa-arrow-circle-right\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n      <!--<div class=\"row\" *ngIf=\"(authState | async).isAgent\">-->\n          <!--<div class=\"col-md-4\" *ngIf=\"!!(showChats() | async).length\">-->\n              <!--<ul>-->\n                  <!--<ng-container-->\n                          <!--*ngFor=\"let contact of (chatState | async).ongoing; let i = index;\">-->\n                      <!--<li [ngClass]=\"{ active : currentChatIndex == i}\"-->\n                          <!--(click)=\"changeCurrentChat(i)\" *ngIf=\"contact.status == 1 || contact.status == 6\">-->\n                          <!--<div class=\"col-md-2\">-->\n                              <!--<div class=\"chat-head row\">-->\n                                  <!--<img src=\"../../../../assets/img/avatar5.png\"-->\n                                       <!--class=\"img-responsive\">-->\n                              <!--</div>-->\n                          <!--</div>-->\n                          <!--<div class=\"col-md-10\">-->\n                              <!--<div class=\"chat-content\">-->\n                                  <!--<h3>{{contact.client}} <span>{{contact.chatTime.date | amFromUtc | amLocal | amTimeAgo}} </span>-->\n                                  <!--</h3>-->\n                                  <!--<p>{{contact.room}}</p>-->\n                              <!--</div>-->\n                          <!--</div>-->\n                      <!--</li>-->\n                  <!--</ng-container>-->\n              <!--</ul>-->\n          <!--</div>-->\n\n\n\n\n\n      <!--</div>-->\n\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n\n  <!--<section class=\"content\">-->\n    <!--&lt;!&ndash; Info boxes &ndash;&gt;-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-3 col-sm-6 col-xs-12\">-->\n        <!--<div class=\"info-box\">-->\n          <!--<span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>-->\n\n          <!--<div class=\"info-box-content\">-->\n            <!--<span class=\"info-box-text\">CPU Traffic</span>-->\n            <!--<span class=\"info-box-number\">90<small>%</small></span>-->\n          <!--</div>-->\n          <!--&lt;!&ndash; /.info-box-content &ndash;&gt;-->\n        <!--</div>-->\n        <!--&lt;!&ndash; /.info-box &ndash;&gt;-->\n      <!--</div>-->\n      <!--&lt;!&ndash; /.col &ndash;&gt;-->\n      <!--<div class=\"col-md-3 col-sm-6 col-xs-12\">-->\n        <!--<div class=\"info-box\">-->\n          <!--<span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>-->\n\n          <!--<div class=\"info-box-content\">-->\n            <!--<span class=\"info-box-text\">Likes</span>-->\n            <!--<span class=\"info-box-number\">41,410</span>-->\n          <!--</div>-->\n          <!--&lt;!&ndash; /.info-box-content &ndash;&gt;-->\n        <!--</div>-->\n        <!--&lt;!&ndash; /.info-box &ndash;&gt;-->\n      <!--</div>-->\n      <!--&lt;!&ndash; /.col &ndash;&gt;-->\n\n      <!--&lt;!&ndash; fix for small devices only &ndash;&gt;-->\n      <!--<div class=\"clearfix visible-sm-block\"></div>-->\n\n      <!--<div class=\"col-md-3 col-sm-6 col-xs-12\">-->\n        <!--<div class=\"info-box\">-->\n          <!--<span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>-->\n\n          <!--<div class=\"info-box-content\">-->\n            <!--<span class=\"info-box-text\">Sales</span>-->\n            <!--<span class=\"info-box-number\">760</span>-->\n          <!--</div>-->\n          <!--&lt;!&ndash; /.info-box-content &ndash;&gt;-->\n        <!--</div>-->\n        <!--&lt;!&ndash; /.info-box &ndash;&gt;-->\n      <!--</div>-->\n      <!--&lt;!&ndash; /.col &ndash;&gt;-->\n      <!--<div class=\"col-md-3 col-sm-6 col-xs-12\">-->\n        <!--<div class=\"info-box\">-->\n          <!--<span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>-->\n\n          <!--<div class=\"info-box-content\">-->\n            <!--<span class=\"info-box-text\">New Members</span>-->\n            <!--<span class=\"info-box-number\">2,000</span>-->\n          <!--</div>-->\n          <!--&lt;!&ndash; /.info-box-content &ndash;&gt;-->\n        <!--</div>-->\n        <!--&lt;!&ndash; /.info-box &ndash;&gt;-->\n      <!--</div>-->\n      <!--&lt;!&ndash; /.col &ndash;&gt;-->\n    <!--</div>-->\n  <!--</section>-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_dashboard_dashboard_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/dashboard/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_spinner__ = __webpack_require__("../../../../../src/app/core/shared/spinner/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(store, chatService, httpClient, spinnerService) {
        this.store = store;
        this.chatService = chatService;
        this.httpClient = httpClient;
        this.spinnerService = spinnerService;
        this.isMMS = false;
        this.fileType = '';
        this.fileUrl = '';
        this.fileName = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initiateError = false;
        this.initiateMessage = '';
        this.authState = this.store.select('auth'); // auth user info
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAuthenticated !== false && data.isAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_dashboard_dashboard_actions__["c" /* GetDashboardItemsCountAttempt */]({ userId: data.userId }));
            }
            else if (data.isAuthenticated !== false && data.isSuperAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_dashboard_dashboard_actions__["c" /* GetDashboardItemsCountAttempt */]({ userId: null }));
            }
            else if (data.isAuthenticated !== false && data.isAgent) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_dashboard_dashboard_actions__["c" /* GetDashboardItemsCountAttempt */]({ userId: data.userId }));
                _this.agentId = data.userId;
                _this.chatService.connect();
                _this.chatState = _this.store.select('afterLogin').map(function (data) { return data.chat; });
            }
        });
        this.store.select('afterLogin', 'dashboard').subscribe(function (changes) {
            if (changes.widgets !== undefined) {
                _this.widgetLists = changes.widgets;
            }
            if (changes.list[0] !== undefined) {
                _this.admin = changes.list[0][0].adminCount;
                _this.agent = changes.list[0][0].agentCount;
                _this.depertment = changes.list[0][0].departmentCount;
                _this.widgets = changes.list[0][0].widgetCount;
                _this.pendingChatCount = changes.list[0][0].pendingChatCount;
                _this.ongoingChatCount = changes.list[0][0].ongoingChatCount;
                _this.closedChatCount = changes.list[0][0].closedChatCount;
                _this.rejectedChatCount = changes.list[0][0].rejectedChatCount;
            }
        }, function (error) {
            console.log(error);
        });
        this.afterLoginState = this.store.select('afterLogin');
    };
    /** Show chats id status is 1*/
    DashboardComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.ongoing.filter(function (chat) { return chat.status == 1; }); });
    };
    DashboardComponent.prototype.onSomeMsgAction = function (status, currentChatRoom) {
        var _this = this;
        switch (status) {
            case 2:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: currentChatRoom });
                /** redirect to the ongoing chat page */
                location.href = '/chat/ongoing';
                break;
            case 3:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: currentChatRoom });
                this.authSubscription = this.store.select('auth')
                    .subscribe(function (data) {
                    if (data.isAuthenticated !== false && data.isAgent) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_dashboard_dashboard_actions__["c" /* GetDashboardItemsCountAttempt */]({ userId: data.userId }));
                    }
                });
                break;
            case 5:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: currentChatRoom });
                break;
            default:
                console.log(status, currentChatRoom);
        }
    };
    DashboardComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var formData = new FormData();
        formData.append('file', files[0]);
        var apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_BASE_URL + 'file-upload';
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest').set('enctype', 'multipart/form-data');
        var config = {
            headers: headers
        };
        this.spinnerService.show();
        this.httpClient.post(apiUrl, formData, config)
            .subscribe(function (res) {
            _this.spinnerService.hide();
            if (res.status) {
                _this.isMMS = true;
                _this.fileUrl = res.response.url;
                _this.fileType = res.response.type;
                _this.fileName = files[0].name;
            }
            else {
                _this.isMMS = false;
                _this.fileName = '';
                _this.fileType = '';
                _this.fileUrl = '';
            }
        });
    };
    DashboardComponent.prototype.sendMessage = function (number, message, widgetSelect) {
        var _this = this;
        if (number !== '' && message !== '' && widgetSelect !== '') {
            this.initiateError = false;
            this.initiateMessage = '';
            if (this.isNumber(number) && number.length === 10) {
                var formData = new FormData();
                formData.append('to', number);
                formData.append('widget_uuid', widgetSelect);
                formData.append('widget_uuid', widgetSelect);
                formData.append('userId', this.agentId);
                formData.append('body', message);
                if (this.isMMS) {
                    formData.append('file', '1');
                }
                else {
                    formData.append('file', '0');
                }
                formData.append('fileUrl', this.fileUrl);
                formData.append('fileType', this.fileType);
                var apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_BASE_URL + 'ini-chat';
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest').set('enctype', 'multipart/form-data');
                var config = {
                    headers: headers
                };
                this.spinnerService.show();
                this.httpClient.post(apiUrl, formData, config)
                    .subscribe(function (res) {
                    _this.spinnerService.hide();
                    if (res.status) {
                        location.href = '/chat/ongoing';
                    }
                    else {
                        _this.initiateError = true;
                        _this.initiateMessage = res.message;
                    }
                });
            }
            else {
                this.initiateError = true;
                this.initiateMessage = 'Please enter a valid phone number.';
            }
        }
        else {
            this.initiateError = true;
            this.initiateMessage = 'Please enter number, message and widget to send a sms.';
        }
    };
    DashboardComponent.prototype.isNumber = function (value) {
        return !isNaN(Number(value.toString()));
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_spinner__["b" /* SpinnerService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */], __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map
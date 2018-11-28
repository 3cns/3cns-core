webpackJsonp(["chat.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/chat/chat-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ongoing_ongoing_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pending_pending_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rejected_rejected_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolve_resolve_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pending', component: __WEBPACK_IMPORTED_MODULE_3__pending_pending_component__["a" /* PendingComponent */] },
    { path: 'ongoing', component: __WEBPACK_IMPORTED_MODULE_2__ongoing_ongoing_component__["a" /* OngoingComponent */] },
    { path: 'rejected', component: __WEBPACK_IMPORTED_MODULE_4__rejected_rejected_component__["a" /* RejectedComponent */] },
    { path: 'resolve', component: __WEBPACK_IMPORTED_MODULE_5__resolve_resolve_component__["a" /* ResolveComponent */] },
];
var ChatRoutingModule = (function () {
    function ChatRoutingModule() {
    }
    return ChatRoutingModule;
}());
ChatRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ChatRoutingModule);

//# sourceMappingURL=chat-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pending_pending_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ongoing_ongoing_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rejected_rejected_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolve_resolve_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_sweetalert2__ = __webpack_require__("../../../../ngx-sweetalert2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__chat_routing_module__["a" /* ChatRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__pending_pending_component__["a" /* PendingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ongoing_ongoing_component__["a" /* OngoingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rejected_rejected_component__["a" /* RejectedComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resolve_resolve_component__["a" /* ResolveComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10_ngx_sweetalert2__["a" /* SweetAlertService */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 500px;\n}\n\n.dropdown-submenu {\n    position: relative;\n    text-align: center;\n    border-bottom: 1px solid #eee;\n    padding: 5px;\n}\n.dropdown-submenu:last-child {\n    border: none;\n}\n\n.chat-btn{\n    margin: 10px 20px 20px;\n}\n\n.chat-btn .target-drop{\n    display: inline-block;\n}\n.dropdown-submenu a{\n    color: #666;\n}\n.open>.dropdown-menu {\n    display: block;\n}\n\n.dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n    margin-top: -1px;\n    text-align: center;\n}\n.dropdown-submenu .dropdown-menu li {\n    border-bottom: 1px solid #eee;\n}\n.dropdown-submenu .dropdown-menu li:last-child {\n    border: none;\n}\n.show {\n    display: block;\n}\n\na {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n.super-sub{display: none;}\n\nli.dropdown-submenu li:hover .super-sub{display: block}\nul.super-sub{padding: 0;\n    margin: 0;\n    position: absolute;\n    right: -188px;\n    width: 194px;\n    background: #fff;\n    border: 1px solid rgba(0,0,0,.15);\n    top: 4px;\n}\nul.super-sub li{list-style: none; padding: 4px 0;}\nul.super-sub li a{display: block;}\nul.super-sub li:hover{background: #e1e3e9;}\n\n\n.btn-disabled,.btn-disabled[disabled] {\n    opacity: .4;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n@media screen and (max-width:768px){\n    .direct-chat-messages {\n        height: 300px;\n    }\n    .chat-list ul{\n        max-height: 200px;\n    }\n}\n.docImage {\n  height: 200px;\n  width: 200px;\n}\n\n.chat-notification {\n  display: inline-block;\n  text-align: center;\n  margin-left: 500px;\n  padding: 15px;\n\n}\n\n\n@media screen and (max-width:764px) {\n  .chat-notification {\n    display: inline-block;\n    text-align: center;\n    margin-left: 10px !important;\n    padding: 15px;\n\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n        <h1>Live Sessions</h1>\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">Live Sessions</a></li>-->\n            <!--<li class=\"active\">Chat</li>-->\n        <!--</ol>-->\n    </section>\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"row\">\n                            <h2>Messages</h2>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"!!(showChats() | async).length\">\n                            <div class=\"col-md-3 col-sm-3\">\n                                <div class=\"row\">\n                                    <div class=\"chat-list\">\n                                        <ul>\n                                            <ng-container\n                                                    *ngFor=\"let contact of (chatState | async).ongoing; let i = index;\">\n                                                <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                                                    *ngIf=\"contact.status != 3 && contact.status != 5   && contact.status == 2\"\n                                                    (click)=\"changeCurrentChat(i)\">\n                                                    <div class=\"col-md-2\">\n                                                        <div class=\"chat-head row\">\n                                                            <img src=\"../../../../assets/img/avatar5.png\"\n                                                                 class=\"img-responsive\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-10\">\n                                                        <div class=\"chat-content\">\n                                                            <h3>{{contact.client}} <span>{{contact.chatTime.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                                                            </h3>\n                                                            <p>{{contact.room}}</p>\n                                                        </div>\n                                                    </div>\n                                                </li>\n                                            </ng-container>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-9 col-sm-9\">\n                                <div class=\"row\">\n                                    <div class=\"box box-primary direct-chat direct-chat-primary\">\n                                        <div class=\"box-body\">\n                                            <div class=\"chat-btn\">\n                                                <div *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status == 2\">\n                                                    <button (click)=\"onSomeMsgAction(5)\" class=\"btn btn-success\">Close Chat</button>\n                                                    <button class=\"btn btn-warning\" (click)=\"chatTransferModal(template)\">Transfer</button>\n                                                  <!-- Droupdown -->\n                                                   <!-- <div class=\"dropdown target-drop\" [ngClass]=\"openStatus ? 'open' : ''\">\n                                                        <button class=\"btn btn-default\" (click)=\"openDropdown()\" type=\"button\" data-toggle=\"dropdown\">Transfer<span class=\"caret\"></span></button>\n                                                        <ul class=\"dropdown-menu\">\n                                                            <li class=\"dropdown-submenu\" *ngFor=\"let department of (chatState | async).agentList; let i = index;\">\n                                                                <div class=\"dropdown target-drop open\" [appDropdown]=\"'open'\" [disable-hover]=\"true\">\n                                                                    <a class=\"test\" tabindex=\"-1\">{{ department.department_name }} <span class=\"caret\"></span></a>\n                                                                    <ul class=\"dropdown-menu\">\n                                                                        <li><a tabindex=\"-1\" (click)=\"transferChatToDepartment(department.department_id)\">Transfer to department </a></li>\n                                                                        <li class=\"dropdown-submenu\"><a tabindex=\"-1\">Transfer to agent </a>\n                                                                            <ul class=\"super-sub\">\n                                                                                <li *ngFor=\"let agent of department.agent\">\n                                                                                    <a tabindex=\"-1\" (click)=\"transferChatToAgent(agent.agent_id)\" [ngClass]=\"(agent.agent_id === agentId)? 'btn-disabled' : ''\">{{ agent.first_name }} </a>\n                                                                                </li>\n                                                                            </ul>\n                                                                        </li>\n                                                                    </ul>\n                                                                </div>\n                                                            </li>\n                                                        </ul>\n                                                    </div>-->\n                                                    <!-- Droupdown -->\n                                                </div>\n                                                <!-- Conversations are loaded here -->\n                                                <!--<div class=\"direct-chat-messages\" #scrollChat [scrollTop]=\"scrollChat.scrollHeight\" [scrollTop]=\"scrollChat.scrollTo(0, 1000000)\">-->\n                                                <div class=\"direct-chat-messages\" *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status == 2\"  #scrollChat [scrollTop]=\"scrollChat.scrollHeight\">\n                                                    <!-- Message. Default to the left -->\n                                                    <div>\n                                                    <div class=\"direct-chat-msg\"\n                                                         [ngClass]=\"{ right: chat.direction == 2 }\"\n                                                         *ngFor=\"let chat of (chatState | async).ongoing[currentChatIndex]?.chats\">\n                                                      <div *ngIf=\"chat.direction === 1 || chat.direction === 2 || chat.direction === '1' || chat.direction === '2'\">\n                                                        <div class=\"direct-chat-info clearfix\">\n                                                            <span class=\"direct-chat-name\"\n                                                                  [ngClass]=\"chat.direction == 2 || chat.direction === '2' ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                                                            <span class=\"direct-chat-timestamp\"\n                                                                  [ngClass]=\"chat.direction == 1 || chat.direction === '1' ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date | amFromUtc | amLocal | amTimeAgo }} </span>\n                                                        </div>\n                                                        <img class=\"direct-chat-img\"\n                                                             [src]=\"chat.direction == 2 || chat.direction === '2' ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\"\n                                                             alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                                                        <div class=\"direct-chat-text\">\n                                                          <div *ngIf=\"chat.isMMS\">\n                                                            <a [href]=\"chat.fileUrl\" target=\"_blank\">\n                                                              <div *ngIf=\"chat.fileType === 'image'\">\n                                                                <img [src]=\"chat.fileUrl\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'audio'\">\n                                                                <img [src]=\"'../../../../assets/img/audio.png'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'video'\">\n                                                                <img [src]=\"'../../../../assets/img/video.jpeg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'document'\">\n                                                                <img [src]=\"'../../../../assets/img/doc.jpg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                            </a>\n                                                          </div>\n                                                            {{chat.message}}\n                                                        </div>\n                                                      </div>\n                                                      <div class=\"chat-notification\" *ngIf=\"chat.direction === 4 || chat.direction === '4'\">\n                                                        <div class=\"row\">\n                                                          <b> {{ chat.message }} </b>\n                                                        </div>\n                                                      </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!--/.direct-chat-messages-->\n\n                                        </div>\n                                        <!-- /.box-body -->\n                                      <input type=\"file\" id=\"fileInput\" style=\"display: none;\" (change)=\"fileSelected($event)\">\n                                        <div class=\"box-footer\"\n                                             *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status != 1\">\n                                            <form #form=\"ngForm\" (submit)=\"sendMsg(form)\">\n                                                <div class=\"input-group\">\n                                                  <span class=\"input-group-btn\">\n                                                    <button type=\"button\" class=\"btn\" (click)=\"triggerFileInput()\" >\n                                                      <i class=\"fa fa-paperclip\"></i>\n                                                      <span *ngIf=\"isMMS\">{{ fileName }}</span>\n                                                    </button>\n                                                  </span>\n                                                    <input type=\"text\"\n                                                           name=\"messageBody\"\n                                                           placeholder=\"Type Message ...\"\n                                                           class=\"form-control\"\n                                                           ngModel\n                                                           [required]=\"!isMMS\"\n                                                    >\n                                                    <span class=\"input-group-btn\">\n                        <!--<button type=\"button\"-->\n                                <!--[disabled]=\"!form.invalid\"-->\n                                <!--class=\"btn btn-default btn-flat\">-->\n                          <!--<i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>-->\n                        <!--</button>-->\n                        <button type=\"submit\"\n                                [disabled]=\"form.invalid\"\n                                class=\"btn btn-primary btn-flat\">\n                          Send\n                        </button>\n                      </span>\n                                                </div>\n                                            </form>\n                                        </div>\n                                        <!-- /.box-footer-->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--<div class=\"row\" *ngIf=\"!(chatState | async).ongoing.length\">-->\n                        <!--<h2>No Ongoing Chats at this Moment!</h2>-->\n                        <!--</div>-->\n\n                        <div class=\"row\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-body\" *ngIf=\"!(showChats() | async).length\">\n                                    <h4>No live sessions at this Moment!</h4>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n      <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Transfer Chat</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"transferChat(form)\">\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\">\n                  Transfer To\n                </label>\n                <div class=\"col-md-8\">\n                  <select class=\"form-control\" [ngModel]=\"transferTo\" name=\"transferTo\" (change)=\"transferChange($event)\" required>\n                    <option value=\"department\">Department</option>\n                    <option value=\"agent\">Agent</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\">\n                  Select Department\n                </label>\n                <div class=\"col-md-8\">\n                  <select class=\"form-control\" [ngModel]=\"transferToDepartment\" name=\"transferToDepartment\" (change)=\"transferChangeDepartment($event)\" required>\n                    <option value=\"\">Select a department</option>\n                    <ng-container *ngFor=\"let department of (chatState | async).agentList\">\n                      <option [value]=\"department.department_id\">{{ department.department_name }}</option>\n                    </ng-container>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"transferTo === 'agent'\">\n                <label class=\"col-md-4 control-label\">\n                  Select Agent\n                </label>\n                <div class=\"col-md-8\">\n                  <select class=\"form-control\" [ngModel]=\"transferToAgent\" name=\"transferToAgent\" required>\n                    <option value=\"\">Select agent</option>\n                    <ng-container *ngIf=\"transferToDepartment\">\n                      <ng-container *ngFor=\"let agentList of transferAgentList\">\n                        <option [value]=\"agentList.id\" *ngIf=\"agentId !== agentList.id\">{{ agentList.first_name + ' ' +agentList.last_name }}</option>\n                      </ng-container>\n                    </ng-container>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-2 pull-right\">\n                  <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"form.invalid\">Transfer</button>\n                </div>\n              </div>\n            </form>\n        </div>\n      </ng-template>\n    </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OngoingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_sweetalert2__ = __webpack_require__("../../../../ngx-sweetalert2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
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












var OngoingComponent = (function () {
    function OngoingComponent(store, chatService, activatedRoute, router, _swal2, httpClient, modalService, spinnerService) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._swal2 = _swal2;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.spinnerService = spinnerService;
        this.currentChatIndex = 0;
        this.currentChatRoom = '';
        this.chatRoomIdChangeDetection = false;
        this.openStatus = false;
        this.isMMS = false;
        this.fileType = '';
        this.fileUrl = '';
        this.fileName = '';
    }
    OngoingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transferTo = 'department';
        this.transferToDepartment = '';
        this.transferToAgent = '';
        this.transferAgentList = [];
        this.chatService.connect();
        this.chatState = this.store.select('afterLogin').map(function (data) { return data.chat; });
        this.getChatRoom();
        // this.store.dispatch(new ChatActions.GetTransferAgentListAttempt({ chatRoomId : this.currentChatRoom}));
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.userId; })
            .distinctUntilChanged()
            .subscribe(function (id) {
            _this.agentId = id;
        });
        this.changeCurrentChat(0);
        this.getAgentDepartmentList();
    };
    OngoingComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
        this.getChatRoom();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: this.currentChatRoom }));
    };
    OngoingComponent.prototype.transferChatToAgent = function (i) {
        this.toAgentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, toAgentId: this.toAgentId };
        this.onSomeMsgAction(4);
    };
    OngoingComponent.prototype.transferChatToDepartment = function (i) {
        this.departmentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, departmentId: this.departmentId };
        this.onSomeMsgAction(4);
    };
    OngoingComponent.prototype.chatTransferModal = function (template) {
        this.bsModalRef = this.modalService.show(template);
        this.transferTo = 'department';
        this.transferToDepartment = '';
        this.transferToAgent = '';
        this.transferAgentList = [];
    };
    OngoingComponent.prototype.transferChat = function (form) {
        if (form.value.transferTo === 'agent') {
            this.transferChatToAgent(form.value.transferToAgent);
        }
        else {
            this.transferChatToDepartment(form.value.transferToDepartment);
        }
        this.bsModalRef.hide();
    };
    OngoingComponent.prototype.transferChange = function (event) {
        this.transferTo = event.target.value;
    };
    OngoingComponent.prototype.transferChangeDepartment = function (event) {
        var _this = this;
        this.transferToDepartment = event.target.value;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__store_department_department_actions__["o" /* GetToEditDepartmentAttempt */]({ departmentId: this.transferToDepartment }));
        this.store.select('department')
            .distinctUntilChanged()
            .subscribe(function (dep) {
            if (dep) {
                if (dep.toEdit.department !== undefined) {
                    _this.transferAgentList = dep.toEdit.agents;
                }
            }
        });
    };
    OngoingComponent.prototype.onSomeMsgAction = function (status) {
        var _this = this;
        switch (status) {
            case 2:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 3:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 4:
                this.chatService.takeAction(this.transferData);
                this.changeCurrentChat(0);
                this.spinnerService.show();
                setInterval(function (a) {
                    _this.spinnerService.hide();
                }, 5000, []);
                break;
            case 5:
                this._swal2.warning({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then(function (result) {
                    console.log(result);
                    if (result) {
                        _this.chatService.takeAction({
                            agentId: _this.agentId,
                            status: status,
                            chatRoomId: _this.currentChatRoom
                        });
                        _this.changeCurrentChat(0);
                        location.href = '/chat/resolve';
                    }
                }, function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss === 'cancel') {
                        console.log('cancel');
                    }
                });
                break;
            default:
                console.log(status);
        }
    };
    OngoingComponent.prototype.getAgentDepartmentList = function () {
        var _this = this;
        this.chatRoomSubscription = this.store.select(function (s) { return s.afterLogin.chat.ongoing[_this.currentChatIndex]; })
            .subscribe(function (data) {
            if (data) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: data.room }));
            }
        });
    };
    OngoingComponent.prototype.getChatRoom = function () {
        var _this = this;
        this.chatRoomSubscription = this.store.select('afterLogin')
            .subscribe(function (data) {
            if (data.chat.ongoing[_this.currentChatIndex] && !data.chat.ongoing[_this.currentChatIndex].length) {
                _this.currentChatRoom = data.chat.ongoing[_this.currentChatIndex].room;
            }
        });
    };
    OngoingComponent.prototype.sendMsg = function (form) {
        this.chatService.sendMsg(__assign({}, form.value, { chatRoomId: this.currentChatRoom, file: this.isMMS, fileURL: this.fileUrl, fileType: this.fileType }));
        form.reset();
        this.isMMS = false;
        this.fileName = '';
        this.fileType = '';
        this.fileUrl = '';
    };
    /** Show chats id status is not 3 or 5 */
    OngoingComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.ongoing.filter(function (chat) { return chat.status !== 3 && chat.status !== 5; }); });
    };
    OngoingComponent.prototype.getLoggedInAgentDetails = function () {
        return this.chatService.getLoggedInAgentDetails();
    };
    OngoingComponent.prototype.openDropdown = function () {
        this.openStatus = !this.openStatus;
    };
    OngoingComponent.prototype.triggerFileInput = function () {
        document.getElementById('fileInput').click();
    };
    OngoingComponent.prototype.fileSelected = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var formData = new FormData();
        formData.append('file', files[0]);
        var apiUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].API_BASE_URL + 'file-upload';
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest').set('enctype', 'multipart/form-data');
        var config = {
            headers: headers
        };
        this.httpClient.post(apiUrl, formData, config)
            .subscribe(function (res) {
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
    OngoingComponent.prototype.ngOnDestroy = function () {
        this.chatRoomSubscription.unsubscribe();
    };
    return OngoingComponent;
}());
OngoingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ongoing',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/ongoing/ongoing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_sweetalert2__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_sweetalert2__["a" /* SweetAlertService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_spinner__["b" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_spinner__["b" /* SpinnerService */]) === "function" && _h || Object])
], OngoingComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=ongoing.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active{\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 650px;\n}\n\n@media screen and (max-width:768px){\n    .direct-chat-messages {\n        height: 300px;\n    }\n    .chat-list ul{\n        max-height: 200px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n        <h1>New Requests</h1>\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">New Requests</a></li>-->\n            <!--<li class=\"active\">Chat</li>-->\n        <!--</ol>-->\n    </section>\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"row\">\n                            <h2>Messages</h2>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"!!(showChats() | async).length\">\n                            <div class=\"col-md-3 col-sm-3\">\n                                <div class=\"row\">\n                                    <div class=\"chat-list\">\n                                        <ul>\n                                            <ng-container\n                                                    *ngFor=\"let contact of (chatState | async).ongoing; let i = index;\">\n                                                <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                                                    (click)=\"changeCurrentChat(i)\" *ngIf=\"contact.status == 1 || contact.status == 6\">\n                                                    <div class=\"col-md-2\">\n                                                        <div class=\"chat-head row\">\n                                                            <img src=\"../../../../assets/img/avatar5.png\"\n                                                                 class=\"img-responsive\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-10\">\n                                                        <div class=\"chat-content\">\n                                                            <h3>{{contact.client}} <span>{{contact.chatTime.date | amFromUtc | amLocal | amTimeAgo}} </span>\n                                                            </h3>\n                                                            <p>{{contact.room}}</p>\n                                                        </div>\n                                                    </div>\n                                                </li>\n                                            </ng-container>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-9 col-sm-9\">\n                                <div class=\"row\">\n                                    <div class=\"box box-primary direct-chat direct-chat-primary\">\n                                        <div class=\"box-body\">\n                                            <div class=\"chat-btn\">\n                                                <!-- Conversations are loaded here -->\n                                                <div class=\"direct-chat-messages\">\n                                                    <!-- Message. Default to the left -->\n                                                    <div *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status == 1\">\n                                                        <button (click)=\"onSomeMsgAction(2)\" class=\"btn btn-primary\">\n                                                            Accept\n                                                        </button>\n                                                        <button (click)=\"onSomeMsgAction(3)\" class=\"btn btn-danger\">\n                                                            Reject\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!--/.direct-chat-messages-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--<div class=\"row\" *ngIf=\"!(chatState | async).ongoing.length\">-->\n                        <!--<h2>No Ongoing Chats at this Moment!</h2>-->\n                        <!--</div>-->\n\n                        <div class=\"row\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-body\" *ngIf=\"!(showChats() | async).length\">\n                                    <h4>No new requests at this Moment!</h4>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
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






var PendingComponent = (function () {
    function PendingComponent(store, chatService, activatedRoute, router) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.currentChatIndex = 0;
        this.currentChatRoom = '';
    }
    PendingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.connect();
        this.chatState = this.store.select('afterLogin').map(function (data) { return data.chat; });
        this.getChatRoom();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: this.currentChatRoom }));
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.userId; })
            .distinctUntilChanged()
            .subscribe(function (id) {
            _this.agentId = id;
        });
    };
    PendingComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
        this.getChatRoom();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: this.currentChatRoom }));
    };
    PendingComponent.prototype.transferChatToAgent = function (i) {
        this.toAgentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, toAgentId: this.toAgentId };
        this.onSomeMsgAction(4);
    };
    PendingComponent.prototype.transferChatToDepartment = function (i) {
        this.departmentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, departmentId: this.departmentId };
        this.onSomeMsgAction(4);
    };
    PendingComponent.prototype.onSomeMsgAction = function (status) {
        switch (status) {
            case 2:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                /** redirect to the ongoing chat page */
                location.href = '/chat/ongoing';
                break;
            case 3:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 4:
                this.chatService.takeAction(this.transferData);
                this.changeCurrentChat(0);
                break;
            case 5:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                this.changeCurrentChat(0);
                break;
            default:
                console.log(status);
        }
    };
    PendingComponent.prototype.getChatRoom = function () {
        var _this = this;
        this.chatRoomSubscription = this.store.select('afterLogin')
            .subscribe(function (data) {
            if (data.chat.ongoing[_this.currentChatIndex] && !data.chat.ongoing[_this.currentChatIndex].length) {
                _this.currentChatRoom = data.chat.ongoing[_this.currentChatIndex].room;
            }
        });
    };
    PendingComponent.prototype.sendMsg = function (form) {
        this.chatService.sendMsg(__assign({}, form.value, { chatRoomId: this.currentChatRoom }));
        form.reset();
    };
    /** Show chats id status is 1*/
    PendingComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.ongoing.filter(function (chat) { return chat.status == 1; }); });
    };
    PendingComponent.prototype.getLoggedInAgentDetails = function () {
        return this.chatService.getLoggedInAgentDetails();
    };
    PendingComponent.prototype.ngOnDestroy = function () {
        this.chatRoomSubscription.unsubscribe();
    };
    return PendingComponent;
}());
PendingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pending',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/pending/pending.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PendingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pending.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active{\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 650px;\n}\n\n@media screen and (max-width:768px){\n    .direct-chat-messages {\n        height: 300px;\n    }\n    .chat-list ul{\n        max-height: 200px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n        <h1>Rejected Chats</h1>\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">Rejected Chats</a></li>-->\n            <!--<li class=\"active\">Chat</li>-->\n        <!--</ol>-->\n    </section>\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"row\">\n                            <h2>Messages</h2>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"!!(showChats() | async).length\">\n                            <div class=\"col-md-3 col-sm-3\">\n                                <div class=\"row\">\n                                    <div class=\"chat-list\">\n                                        <ul>\n                                            <ng-container\n                                                    *ngFor=\"let contact of (chatState | async).ongoing; let i = index;\">\n                                                <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                                                    *ngIf=\"contact.status == 3\">\n                                                    <div class=\"col-md-2\">\n                                                        <div class=\"chat-head row\">\n                                                            <img src=\"../../../../assets/img/avatar5.png\"\n                                                                 class=\"img-responsive\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-10\">\n                                                        <div class=\"chat-content\">\n                                                            <h3>{{contact.client}} <span>{{contact.chatTime.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                                                            </h3>\n                                                            <p>{{contact.room}}</p>\n                                                        </div>\n                                                    </div>\n                                                </li>\n                                            </ng-container>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-9 col-sm-9\">\n                                <div class=\"row\">\n                                    <div class=\"box box-primary direct-chat direct-chat-primary\">\n                                        <div class=\"box-body\">\n                                            <!--<div class=\"chat-btn\">-->\n                                            <!--<div *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status == 2\">-->\n                                            <!--<button (click)=\"onSomeMsgAction(5)\" class=\"btn btn-success\">Resolve Chat</button>-->\n                                            <!--<div class=\"dropdown target-drop\" [appDropdown]=\"'open'\" [disable-hover]=\"true\" >-->\n                                            <!--<button class=\"btn btn-default dropdown-toggle\"-->\n                                            <!--type=\"button\" data-toggle=\"dropdown\">-->\n                                            <!--Transfer-->\n                                            <!--<span class=\"caret\"></span>-->\n                                            <!--</button>-->\n                                            <!--<ul class=\"dropdown-menu\">-->\n                                            <!--<li class=\"dropdown-submenu\" *ngFor=\"let department of (chatState | async).agentList; let i = index;\">-->\n                                            <!--<div class=\"dropdown\" [appDropdown]=\"'open'\" [disable-hover]=\"false\">-->\n                                            <!--<a class=\"test\" tabindex=\"-1\">{{ department.department_name }}  <span class=\"caret\"></span></a>-->\n                                            <!--<ul class=\"dropdown-menu\">-->\n                                            <!--<li><a tabindex=\"-1\" (click)=\"transferChatToDepartment(department.department_id)\">Transfer to department </a></li>-->\n                                            <!--<li class=\"dropdown-submenu\">-->\n                                            <!--<a tabindex=\"-1\" >Transfer to agent </a>-->\n                                            <!--<ul class=\"super-sub\">-->\n                                            <!--<li *ngFor=\"let agent of department.agent\">-->\n                                            <!--<a tabindex=\"-1\" (click)=\"transferChatToAgent(agent.agent_id)\" [ngClass]=\"(agent.agent_id === agentId)? 'btn-disabled' : ''\"> {{ agent.first_name }}  </a>-->\n                                            <!--</li>-->\n                                            <!--</ul>-->\n                                            <!--</li>-->\n                                            <!--</ul>-->\n                                            <!--</div>-->\n                                            <!--</li>-->\n                                            <!--</ul>-->\n                                            <!--</div>-->\n                                            <!--</div>-->\n                                            <!--&lt;!&ndash; Conversations are loaded here &ndash;&gt;-->\n                                            <!--<div class=\"direct-chat-messages\">-->\n                                            <!--&lt;!&ndash; Message. Default to the left &ndash;&gt;-->\n                                            <!--<div *ngIf=\"(chatState | async).ongoing[currentChatIndex]?.status == 1\">-->\n                                            <!--<button (click)=\"onSomeMsgAction(2)\" class=\"btn btn-primary\">Accept</button>-->\n                                            <!--<button (click)=\"onSomeMsgAction(3)\" class=\"btn btn-danger\">Reject</button>-->\n                                            <!--</div>-->\n                                            <!--</div>-->\n                                            <!--</div>-->\n                                            <!--/.direct-chat-messages-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--<div class=\"row\" *ngIf=\"!(chatState | async).ongoing.length\">-->\n                        <!--<h2>No Ongoing Chats at this Moment!</h2>-->\n                        <!--</div>-->\n\n                        <div class=\"row\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-body\" *ngIf=\"!(showChats() | async).length\">\n                                    <h4>No Rejected Chats at this Moment!</h4>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
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






var RejectedComponent = (function () {
    function RejectedComponent(store, chatService, activatedRoute, router) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.currentChatIndex = 0;
        this.currentChatRoom = '';
    }
    RejectedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.connect();
        this.chatState = this.store.select('afterLogin').map(function (data) { return data.chat; });
        this.getChatRoom();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: this.currentChatRoom }));
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.userId; })
            .distinctUntilChanged()
            .subscribe(function (id) {
            _this.agentId = id;
        });
    };
    RejectedComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
        this.getChatRoom();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_chat_chat_actions__["z" /* GetTransferAgentListAttempt */]({ chatRoomId: this.currentChatRoom }));
    };
    RejectedComponent.prototype.transferChatToAgent = function (i) {
        this.toAgentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, toAgentId: this.toAgentId };
        this.onSomeMsgAction(4);
    };
    RejectedComponent.prototype.transferChatToDepartment = function (i) {
        this.departmentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, departmentId: this.departmentId };
        this.onSomeMsgAction(4);
    };
    RejectedComponent.prototype.onSomeMsgAction = function (status) {
        switch (status) {
            case 2:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                this.router.navigate(['/chat/ongoing']);
                break;
            case 3:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 4:
                this.chatService.takeAction(this.transferData);
                this.changeCurrentChat(0);
                break;
            case 5:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                this.changeCurrentChat(0);
                break;
            default:
                console.log(status);
        }
    };
    RejectedComponent.prototype.getChatRoom = function () {
        var _this = this;
        this.chatRoomSubscription = this.store.select('afterLogin')
            .subscribe(function (data) {
            if (data.chat.ongoing[_this.currentChatIndex] && !data.chat.ongoing[_this.currentChatIndex].length) {
                _this.currentChatRoom = data.chat.ongoing[_this.currentChatIndex].room;
            }
        });
    };
    RejectedComponent.prototype.sendMsg = function (form) {
        this.chatService.sendMsg(__assign({}, form.value, { chatRoomId: this.currentChatRoom }));
        form.reset();
    };
    /** Show chats id status is 3 */
    RejectedComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.ongoing.filter(function (chat) { return chat.status == 3; }); });
    };
    RejectedComponent.prototype.getLoggedInAgentDetails = function () {
        return this.chatService.getLoggedInAgentDetails();
    };
    RejectedComponent.prototype.ngOnDestroy = function () {
        this.chatRoomSubscription.unsubscribe();
    };
    return RejectedComponent;
}());
RejectedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rejected',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/rejected/rejected.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RejectedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rejected.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 500px;\n}\n\n.dropdown-submenu {\n    position: relative;\n    text-align: center;\n    border-bottom: 1px solid #eee;\n    padding: 5px;\n}\n.dropdown-submenu:last-child {\n    border: none;\n}\n\n.chat-btn{\n    margin: 10px 20px 20px;\n}\n\n.chat-btn .target-drop{\n    display: inline-block;\n}\n.dropdown-submenu a{\n    color: #666;\n}\n.open>.dropdown-menu {\n    display: block;\n}\n\n.dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n    margin-top: -1px;\n    text-align: center;\n}\n.dropdown-submenu .dropdown-menu li {\n    border-bottom: 1px solid #eee;\n}\n.dropdown-submenu .dropdown-menu li:last-child {\n    border: none;\n}\n.show {\n    display: block;\n}\n\na {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n.super-sub{display: none;}\n\nli.dropdown-submenu li:hover .super-sub{display: block}\nul.super-sub{padding: 0;\n    margin: 0;\n    position: absolute;\n    right: -188px;\n    width: 194px;\n    background: #fff;\n    border: 1px solid rgba(0,0,0,.15);\n    top: 4px;\n}\nul.super-sub li{list-style: none; padding: 4px 0;}\nul.super-sub li a{display: block;}\nul.super-sub li:hover{background: #e1e3e9;}\n\n\n.btn-disabled,.btn-disabled[disabled] {\n    opacity: .4;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n@media screen and (max-width:768px){\n    .direct-chat-messages {\n        height: 300px;\n    }\n    .chat-list ul{\n        max-height: 200px;\n    }\n}\n\n.docImage {\n  height: 200px;\n  width: 200px;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n        <h1>Closed</h1>\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">Resolve Chats</a></li>-->\n            <!--<li class=\"active\">Chat</li>-->\n        <!--</ol>-->\n    </section>\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"row\">\n                            <h2>Closed Chats</h2>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"(chatState | async).closedChats.length > 0\">\n                            <div class=\"col-md-3 col-sm-3\">\n                                <div class=\"row\">\n\n                                    <div class=\"chat-list\">\n                                        <ul>\n                                            <ng-container\n                                                    *ngFor=\"let contact of (chatState | async).closedChats; let i = index;\">\n                                                <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                                                    (click)=\"changeCurrentChat(i)\">\n                                                    <div class=\"col-md-2\">\n                                                        <div class=\"chat-head row\">\n                                                            <img src=\"../../../../assets/img/avatar5.png\"\n                                                                 class=\"img-responsive\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-10\">\n                                                        <div class=\"chat-content\">\n                                                            <h3>{{contact.client_name}} <span>{{contact.chat_time.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                                                            </h3>\n                                                            <p>{{contact.name}}</p>\n                                                        </div>\n                                                    </div>\n                                                </li>\n                                            </ng-container>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-9 col-sm-9\">\n                                <div class=\"row\">\n                                    <div class=\"box box-primary direct-chat direct-chat-primary\">\n                                        <div class=\"box-body\">\n                                            <div class=\"chat-btn\">\n                                                <div *ngIf=\"(chatState | async).closedChats[currentChatIndex]?.status == 2\">\n                                                    <!--<button (click)=\"onSomeMsgAction(5)\" class=\"btn btn-success\">Resolve Chat</button>-->\n                                                    <!--<div class=\"dropdown target-drop\" [appDropdown]=\"'open'\" [disable-hover]=\"true\" >-->\n                                                    <!--<button class=\"btn btn-default dropdown-toggle\"-->\n                                                    <!--type=\"button\" data-toggle=\"dropdown\">-->\n                                                    <!--Transfer-->\n                                                    <!--<span class=\"caret\"></span>-->\n                                                    <!--</button>-->\n                                                    <!--<ul class=\"dropdown-menu\">-->\n                                                    <!--<li class=\"dropdown-submenu\" *ngFor=\"let department of (chatState | async).agentList; let i = index;\">-->\n                                                    <!--<div class=\"dropdown\" [appDropdown]=\"'open'\" [disable-hover]=\"false\">-->\n                                                    <!--<a class=\"test\" tabindex=\"-1\">{{ department.department_name }}  <span class=\"caret\"></span></a>-->\n                                                    <!--<ul class=\"dropdown-menu\">-->\n                                                    <!--<li><a tabindex=\"-1\" (click)=\"transferChatToDepartment(department.department_id)\">Transfer to department </a></li>-->\n                                                    <!--<li class=\"dropdown-submenu\">-->\n                                                    <!--<a tabindex=\"-1\" >Transfer to agent </a>-->\n                                                    <!--<ul class=\"super-sub\">-->\n                                                    <!--<li *ngFor=\"let agent of department.agent\">-->\n                                                    <!--<a tabindex=\"-1\" (click)=\"transferChatToAgent(agent.agent_id)\" [ngClass]=\"(agent.agent_id === agentId)? 'btn-disabled' : ''\"> {{ agent.first_name }}  </a>-->\n                                                    <!--</li>-->\n                                                    <!--</ul>-->\n                                                    <!--</li>-->\n                                                    <!--</ul>-->\n                                                    <!--</div>-->\n                                                    <!--</li>-->\n                                                    <!--</ul>-->\n                                                    <!--</div>-->\n                                                </div>\n                                                <!-- Conversations are loaded here -->\n                                                <div class=\"direct-chat-messages\"\n                                                     #scrollChat>\n                                                    <!-- Message. Default to the left -->\n                                                    <div class=\"direct-chat-msg\"\n                                                         [ngClass]=\"{ right: chat.direction == 2 }\"\n                                                         *ngFor=\"let chat of (chatState | async).closedChats[currentChatIndex]?.chats\">\n                                                        <div class=\"direct-chat-info clearfix\">\n                                                            <span class=\"direct-chat-name\"\n                                                                  [ngClass]=\"chat.direction == 2 ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                                                            <span class=\"direct-chat-timestamp\"\n                                                                  [ngClass]=\"chat.direction == 1 ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date | amFromUtc | amLocal | amTimeAgo }} </span>\n                                                        </div>\n                                                        <img class=\"direct-chat-img\"\n                                                             [src]=\"chat.direction == 2 ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\"\n                                                             alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                                                        <div class=\"direct-chat-text\">\n                                                          <div *ngIf=\"chat.isMMS\">\n                                                            <a [href]=\"chat.fileUrl\" target=\"_blank\">\n                                                              <div *ngIf=\"chat.fileType === 'image'\">\n                                                                <img [src]=\"chat.fileUrl\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'audio'\">\n                                                                <img [src]=\"'../../../../assets/img/audio.png'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'video'\">\n                                                                <img [src]=\"'../../../../assets/img/video.jpeg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                              <div *ngIf=\"chat.fileType === 'document'\">\n                                                                <img [src]=\"'../../../../assets/img/doc.jpg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                                              </div>\n                                                            </a>\n                                                          </div>\n                                                            {{chat.message}}\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!--/.direct-chat-messages-->\n\n                                        </div>\n                                        <!-- /.box-body -->\n                                        <div class=\"box-footer\"\n                                             *ngIf=\"(chatState | async).closedChats[currentChatIndex]?.status != 5\">\n                                            <!--<form #form=\"ngForm\" (submit)=\"sendMsg(form)\">-->\n                                            <!--<div class=\"input-group\">-->\n                                            <!--<input type=\"text\"-->\n                                            <!--name=\"messageBody\"-->\n                                            <!--placeholder=\"Type Message ...\"-->\n                                            <!--class=\"form-control\"-->\n                                            <!--ngModel-->\n                                            <!--required-->\n                                            <!--&gt;-->\n                                            <!--<span class=\"input-group-btn\">-->\n                                            <!--<button type=\"button\"-->\n                                            <!--[disabled]=\"!form.invalid\"-->\n                                            <!--class=\"btn btn-default btn-flat\">-->\n                                            <!--<i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>-->\n                                            <!--</button>-->\n                                            <!--<button type=\"submit\"-->\n                                            <!--[disabled]=\"form.invalid\"-->\n                                            <!--class=\"btn btn-primary btn-flat\">-->\n                                            <!--Send-->\n                                            <!--</button>-->\n                                            <!--</span>-->\n                                            <!--</div>-->\n                                            <!--</form>-->\n                                        </div>\n                                        <!-- /.box-footer-->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--<div class=\"row\" *ngIf=\"!(chatState | async).ongoing.length\">-->\n                        <!--<h2>No Ongoing Chats at this Moment!</h2>-->\n                        <!--</div>-->\n\n                        <div class=\"row\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-body\" *ngIf=\"(chatState | async).closedChats.length == 0\">\n                                    <h4>No Resolve Chats at this Moment!</h4>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
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





var ResolveComponent = (function () {
    function ResolveComponent(store, chatService) {
        this.store = store;
        this.chatService = chatService;
        this.currentChatIndex = 0;
        this.currentChatRoom = '';
    }
    ResolveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.connect();
        // this.chatState = this.store.select('afterLogin','chat','closedChats').map(data=>data);
        // console.log(this.chatState);
        this.getChatRoom();
        // this.store.dispatch(new ChatActions.GetTransferAgentListAttempt({ chatRoomId : this.currentChatRoom}));
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.userId; })
            .distinctUntilChanged()
            .subscribe(function (id) {
            _this.agentId = id;
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_chat_chat_actions__["v" /* GetAgentClosedChatsAttempt */]({ agentId: this.agentId }));
        this.chatState = this.store.select('afterLogin').map(function (data) { return data.chat; });
    };
    ResolveComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
        //  this.getChatRoom();
        /// this.store.dispatch(new ChatActions.GetTransferAgentListAttempt({ chatRoomId : this.currentChatRoom}));
    };
    ResolveComponent.prototype.transferChatToAgent = function (i) {
        this.toAgentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, toAgentId: this.toAgentId };
        this.onSomeMsgAction(4);
    };
    ResolveComponent.prototype.transferChatToDepartment = function (i) {
        this.departmentId = i;
        this.transferData = { agentId: this.agentId, status: 4, chatRoomId: this.currentChatRoom, departmentId: this.departmentId };
        this.onSomeMsgAction(4);
    };
    ResolveComponent.prototype.onSomeMsgAction = function (status) {
        switch (status) {
            case 2:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 3:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                break;
            case 4:
                this.chatService.takeAction(this.transferData);
                this.changeCurrentChat(0);
                break;
            case 5:
                this.chatService.takeAction({ agentId: this.agentId, status: status, chatRoomId: this.currentChatRoom });
                this.changeCurrentChat(0);
                break;
            default:
                console.log(status);
        }
    };
    ResolveComponent.prototype.getChatRoom = function () {
        var _this = this;
        this.chatRoomSubscription = this.store.select('afterLogin')
            .subscribe(function (data) {
            if (data.chat.ongoing[_this.currentChatIndex] && !data.chat.ongoing[_this.currentChatIndex].length) {
                _this.currentChatRoom = data.chat.ongoing[_this.currentChatIndex].room;
            }
        });
    };
    ResolveComponent.prototype.sendMsg = function (form) {
        this.chatService.sendMsg(__assign({}, form.value, { chatRoomId: this.currentChatRoom }));
        form.reset();
    };
    /** Show chats id status is 5 */
    ResolveComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.ongoing.filter(function (chat) { return chat.status == 5; }); });
    };
    ResolveComponent.prototype.getLoggedInAgentDetails = function () {
        return this.chatService.getLoggedInAgentDetails();
    };
    ResolveComponent.prototype.ngOnDestroy = function () {
        this.chatRoomSubscription.unsubscribe();
    };
    return ResolveComponent;
}());
ResolveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resolve',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/resolve/resolve.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], ResolveComponent);

var _a, _b;
//# sourceMappingURL=resolve.component.js.map

/***/ })

});
//# sourceMappingURL=chat.module.chunk.js.map
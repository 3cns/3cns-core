webpackJsonp(["chats.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n  background: #fff;\n  text-align: center;\n  margin: 0;\n  padding: 15px;\n  color: #000;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 1px 1px #ebebeb;\n  -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n  -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n  margin-top: 5px;\n  border: 0;\n}\n.chat-list{\n  display: inline-block;\n  width: 100%;\n}\n.chat-list ul{\n  margin: 5px 0 0;\n  padding: 0;\n  list-style-type: none;\n  background: #fff;\n  max-height: 705px;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0;\n  border-bottom: 1px solid #f4f4f4;\n  cursor: pointer;\n  vertical-align: top;\n}\n.chat-list ul li:last-child{\n  border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n  background: #3c8dbc;\n  box-shadow: 1px 1px 1px 1px #666;\n  border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n  border-radius: 50%;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n}\n.chat-content h3{\n  margin: 0 0 5px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #3c8dbc;\n}\n.chat-content h3 span{\n  float: right;\n  font-weight: normal;\n  font-size: 12px;\n  color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n  color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n  color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n  color: #fff;\n}\n.chat-box{\n  padding: 20px;\n}\n.receiver, .sender{\n  display: inline-block;\n  width: 100%;\n  padding: 20px 0;\n}\n.sender .chat-content{\n  text-align: right;\n  border-radius: 5px;\n}\n.receiver .chat-content{\n  background: #3c8dbc;\n  color: #fff;\n  padding: 15px;\n  border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n  margin: 0;\n}\n.direct-chat-msg {\n  margin-bottom: 20px;\n}\n.direct-chat-messages {\n  height: 665px;\n}\n\n.dropdown-submenu {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n  padding: 5px;\n}\n.dropdown-submenu:last-child {\n  border: none;\n}\n\n.chat-btn{\n  margin: 10px 20px 20px;\n}\n\n.chat-btn .target-drop{\n  display: inline-block;\n}\n.dropdown-submenu a{\n  color: #666;\n}\n.open>.dropdown-menu {\n  display: block;\n}\n\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px;\n  text-align: center;\n}\n.dropdown-submenu .dropdown-menu li {\n  border-bottom: 1px solid #eee;\n}\n.dropdown-submenu .dropdown-menu li:last-child {\n  border: none;\n}\n.show {\n  display: block;\n}\n\na {\n  cursor: pointer;\n}\n\n.super-sub{display: none;}\n\nli.dropdown-submenu li:hover .super-sub{display: block}\nul.super-sub{padding: 0;\n  margin: 0;\n  position: absolute;\n  right: -188px;\n  width: 194px;\n  background: #fff;\n  border: 1px solid rgba(0,0,0,.15);\n  top: 4px;\n}\nul.super-sub li{list-style: none; padding: 4px 0;}\nul.super-sub li a{display: block;}\nul.super-sub li:hover{background: #e1e3e9;}\n\n\n.btn-disabled,.btn-disabled[disabled] {\n  opacity: .4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n@media screen and (max-width:768px){\n  .direct-chat-messages {\n    height: 300px;\n  }\n  .chat-list ul{\n    max-height: 200px;\n  }\n}\n\n\n.docImage {\n  height: 200px;\n  width: 200px;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Closed Sessions</h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <h2>Messages\n                <div class=\"pull-left\">Search : <input [(ngModel)]=\"searchKeywords\" placeholder=\"All keywords\" (ngModelChange)=\"agentFilterKeyUp()\"></div>\n              </h2>\n\n            </div>\n\n            <div class=\"row\" *ngIf=\"agentList !== undefined && agentList.length\">\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul>\n                      <ng-container\n                        *ngFor=\"let agent of agentList; let i = index;\">\n                        <li [ngClass]=\"{ active : agentIndex == i}\" (click)=\"changeAgent(i)\"\n                            *ngIf=\"agent.chat.length > 0 && agent.closedStatus\">\n                          <div class=\"col-md-12\">\n                            <div class=\"chat-content\">\n                              <h3>{{agent.agent.first_name + ' ' + agent.agent.last_name}}</h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul *ngIf=\"agentList[agentIndex].chat !== undefined\">\n                      <ng-container\n                        *ngFor=\"let client of agentList[agentIndex]?.chat; let j = index;\">\n                        <li [ngClass]=\"{ active : clientIndex == j}\" (click)=\"changeClient(j)\">\n                          <div class=\"col-md-2\">\n                            <div class=\"chat-head row\">\n                              <img src=\"../../../../assets/img/avatar5.png\"\n                                   class=\"img-responsive\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-10\">\n                            <div class=\"chat-content\">\n                              <h3>{{client.client_name}} <span>{{client.chat_time.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                              </h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-8 col-sm-8\" *ngIf=\"agentList[agentIndex].chat !== undefined && agentList[agentIndex].chat[clientIndex] !== undefined\">\n                <div class=\"row\">\n                  <div class=\"box box-primary direct-chat direct-chat-primary\">\n                    <div class=\"box-body\">\n                      <div class=\"chat-btn\">\n                        <div class=\"direct-chat-messages\"  #scrollChat [scrollTop]=\"scrollChat.scrollHeight\">\n                          <!-- Message. Default to the left -->\n                          <div>\n                            <div class=\"direct-chat-msg\"\n                                 [ngClass]=\"{ right: chat.direction == 2 }\"\n                                 *ngFor=\"let chat of agentList[agentIndex].chat[clientIndex].chats\">\n\n                              <div class=\"direct-chat-info clearfix\">\n                                                            <span class=\"direct-chat-name\"\n                                                                  [ngClass]=\"chat.direction == 2 ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                                <span class=\"direct-chat-timestamp\"\n                                      [ngClass]=\"chat.direction == 1 ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date | amFromUtc | amLocal | amTimeAgo }} </span>\n                              </div>\n                              <img class=\"direct-chat-img\"\n                                   [src]=\"chat.direction == 2 ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\"\n                                   alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                              <div class=\"direct-chat-text\">\n                                <div *ngIf=\"chat.isMMS\">\n                                  <a [href]=\"chat.fileUrl\" target=\"_blank\">\n                                    <div *ngIf=\"chat.fileType === 'image'\">\n                                      <img [src]=\"chat.fileUrl\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                    </div>\n                                    <div *ngIf=\"chat.fileType === 'audio'\">\n                                      <img [src]=\"'../../../../assets/img/audio.png'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                    </div>\n                                    <div *ngIf=\"chat.fileType === 'video'\">\n                                      <img [src]=\"'../../../../assets/img/video.jpeg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                    </div>\n                                    <div *ngIf=\"chat.fileType === 'document'\">\n                                      <img [src]=\"'../../../../assets/img/doc.jpg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                    </div>\n                                  </a>\n                                </div>\n                                {{chat.message}}\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!--/.direct-chat-messages-->\n\n                    </div>\n                    <!-- /.box-footer-->\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"box box-primary\">\n                <div class=\"box-body\" *ngIf=\"!close\">\n                  <h4>No Close sessions at this Moment!</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentClosedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_agent_chat_agent_chat_action__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentClosedComponent = (function () {
    function AgentClosedComponent(store, chatService, activatedRoute, router) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    AgentClosedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.close = false;
        // this.store.dispatch(new AgentChatActions.GetAgentLiveChatAttempt);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_agent_chat_agent_chat_action__["e" /* GetAgentCloseChatAttempt */]);
        this.agentChatSubscription = this.store.select('afterLogin', 'agentChats').subscribe(function (data) {
            if (data.list.length > 0) {
                _this.agentList = data.list;
                _this.allAgentList = data.list;
                data.list.forEach(function (item) {
                    if (item.closedStatus) {
                        _this.close = true;
                    }
                });
            }
        });
    };
    AgentClosedComponent.prototype.changeAgent = function (i) {
        this.agentIndex = i;
    };
    AgentClosedComponent.prototype.changeClient = function (i) {
        this.clientIndex = i;
    };
    AgentClosedComponent.prototype.agentFilterKeyUp = function () {
        var that = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.agentList = this.allAgentList.filter(function (el) {
            var termLower = that.searchKeywords.toLowerCase().trim();
            if (el.agent.name != null && el.agent.name.toLowerCase().indexOf(termLower) > -1) {
                return true;
            }
        });
    };
    return AgentClosedComponent;
}());
AgentClosedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agent-closed',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AgentClosedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=agent-closed.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n  background: #fff;\n  text-align: center;\n  margin: 0;\n  padding: 15px;\n  color: #000;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 1px 1px #ebebeb;\n  -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n  -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n  margin-top: 5px;\n  border: 0;\n}\n.chat-list{\n  display: inline-block;\n  width: 100%;\n}\n.chat-list ul{\n  margin: 5px 0 0;\n  padding: 0;\n  list-style-type: none;\n  background: #fff;\n  max-height: 705px;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0;\n  border-bottom: 1px solid #f4f4f4;\n  cursor: pointer;\n  vertical-align: top;\n}\n.chat-list ul li:last-child{\n  border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n  background: #3c8dbc;\n  box-shadow: 1px 1px 1px 1px #666;\n  border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n  border-radius: 50%;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n}\n.chat-content h3{\n  margin: 0 0 5px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #3c8dbc;\n}\n.chat-content h3 span{\n  float: right;\n  font-weight: normal;\n  font-size: 12px;\n  color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n  color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n  color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n  color: #fff;\n}\n.chat-box{\n  padding: 20px;\n}\n.receiver, .sender{\n  display: inline-block;\n  width: 100%;\n  padding: 20px 0;\n}\n.sender .chat-content{\n  text-align: right;\n  border-radius: 5px;\n}\n.receiver .chat-content{\n  background: #3c8dbc;\n  color: #fff;\n  padding: 15px;\n  border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n  margin: 0;\n}\n.direct-chat-msg {\n  margin-bottom: 20px;\n}\n.direct-chat-messages {\n  height: 665px;\n}\n\n.dropdown-submenu {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n  padding: 5px;\n}\n.dropdown-submenu:last-child {\n  border: none;\n}\n\n.chat-btn{\n  margin: 10px 20px 20px;\n}\n\n.chat-btn .target-drop{\n  display: inline-block;\n}\n.dropdown-submenu a{\n  color: #666;\n}\n.open>.dropdown-menu {\n  display: block;\n}\n\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px;\n  text-align: center;\n}\n.dropdown-submenu .dropdown-menu li {\n  border-bottom: 1px solid #eee;\n}\n.dropdown-submenu .dropdown-menu li:last-child {\n  border: none;\n}\n.show {\n  display: block;\n}\n\na {\n  cursor: pointer;\n}\n\n.super-sub{display: none;}\n\nli.dropdown-submenu li:hover .super-sub{display: block}\nul.super-sub{padding: 0;\n  margin: 0;\n  position: absolute;\n  right: -188px;\n  width: 194px;\n  background: #fff;\n  border: 1px solid rgba(0,0,0,.15);\n  top: 4px;\n}\nul.super-sub li{list-style: none; padding: 4px 0;}\nul.super-sub li a{display: block;}\nul.super-sub li:hover{background: #e1e3e9;}\n\n\n.btn-disabled,.btn-disabled[disabled] {\n  opacity: .4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n@media screen and (max-width:768px){\n  .direct-chat-messages {\n    height: 300px;\n  }\n  .chat-list ul{\n    max-height: 200px;\n  }\n}\n\n.docImage {\n  height: 200px;\n  width: 200px;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Live Sessions</h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <h2>Messages\n                <div class=\"pull-left\">Search : <input [(ngModel)]=\"searchKeywords\" placeholder=\"All keywords\" (ngModelChange)=\"agentFilterKeyUp()\"></div>\n              </h2>\n\n            </div>\n\n            <div class=\"row\" *ngIf=\"agentList !== undefined && agentList.length\">\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul>\n                      <ng-container\n                        *ngFor=\"let agent of agentList; let i = index;\">\n                        <li [ngClass]=\"{ active : agentIndex == i}\" (click)=\"changeAgent(i)\"\n                            *ngIf=\"agent.chat.length > 0 && agent.liveStatus\">\n                          <div class=\"col-md-12\">\n                            <div class=\"chat-content\">\n                              <h3>{{agent.agent.first_name + ' ' + agent.agent.last_name}}</h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul *ngIf=\"agentList[agentIndex].chat !== undefined\">\n                      <ng-container\n                        *ngFor=\"let client of agentList[agentIndex]?.chat; let j = index;\">\n                        <li [ngClass]=\"{ active : clientIndex == j}\" (click)=\"changeClient(j)\"\n                            *ngIf=\"client.status === '2'\">\n                          <div class=\"col-md-2\">\n                            <div class=\"chat-head row\">\n                              <img src=\"../../../../assets/img/avatar5.png\"\n                                   class=\"img-responsive\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-10\">\n                            <div class=\"chat-content\">\n                              <h3>{{client.client_name}} <span>{{client.chat_time.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                              </h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-8 col-sm-8\" *ngIf=\"agentList[agentIndex].chat !== undefined && agentList[agentIndex].chat[clientIndex] !== undefined\">\n                <div class=\"row\">\n                  <div class=\"box box-primary direct-chat direct-chat-primary\">\n                    <div class=\"box-body\">\n                      <div class=\"chat-btn\">\n                        <div class=\"direct-chat-messages\"  #scrollChat [scrollTop]=\"scrollChat.scrollHeight\">\n                          <!-- Message. Default to the left -->\n                          <div>\n                            <div class=\"direct-chat-msg\"\n                                 [ngClass]=\"{ right: chat.direction == 2 }\"\n                                 *ngFor=\"let chat of agentList[agentIndex].chat[clientIndex].chats\">\n                              <div *ngIf=\"agentList[agentIndex].chat[clientIndex].status === '2'\">\n                                <div class=\"direct-chat-info clearfix\">\n                                                            <span class=\"direct-chat-name\"\n                                                                  [ngClass]=\"chat.direction == 2 ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                                  <span class=\"direct-chat-timestamp\"\n                                        [ngClass]=\"chat.direction == 1 ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date | amFromUtc | amLocal | amTimeAgo }} </span>\n                                </div>\n                                <img class=\"direct-chat-img\"\n                                     [src]=\"chat.direction == 2 ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\"\n                                     alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                                <div class=\"direct-chat-text\">\n                                  <div *ngIf=\"chat.isMMS\">\n                                    <a [href]=\"chat.fileUrl\" target=\"_blank\">\n                                      <div *ngIf=\"chat.fileType === 'image'\">\n                                        <img [src]=\"chat.fileUrl\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                      </div>\n                                      <div *ngIf=\"chat.fileType === 'audio'\">\n                                        <img [src]=\"'../../../../assets/img/audio.png'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                      </div>\n                                      <div *ngIf=\"chat.fileType === 'video'\">\n                                        <img [src]=\"'../../../../assets/img/video.jpeg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                      </div>\n                                      <div *ngIf=\"chat.fileType === 'document'\">\n                                        <img [src]=\"'../../../../assets/img/doc.jpg'\" [alt]=\"chat.fileUrl\" class=\"docImage\"/>\n                                      </div>\n                                    </a>\n                                  </div>\n                                  {{chat.message}}\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!--/.direct-chat-messages-->\n\n                    </div>\n                    <!-- /.box-footer-->\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"box box-primary\">\n                <div class=\"box-body\" *ngIf=\"!live\">\n                  <h4>No live sessions at this Moment!</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentLiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_agent_chat_agent_chat_action__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgentLiveComponent = (function () {
    function AgentLiveComponent(store, chatService, activatedRoute, router) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    AgentLiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.live = false;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_agent_chat_agent_chat_action__["f" /* GetAgentLiveChatAttempt */]);
        this.agentChatSubscription = this.store.select('afterLogin', 'agentChats').subscribe(function (data) {
            if (data.list.length > 0) {
                _this.agentList = data.list;
                _this.allAgentList = data.list;
                data.list.forEach(function (item) {
                    if (item.liveStatus) {
                        _this.live = true;
                    }
                });
            }
        });
    };
    AgentLiveComponent.prototype.changeAgent = function (i) {
        this.agentIndex = i;
    };
    AgentLiveComponent.prototype.changeClient = function (i) {
        this.clientIndex = i;
    };
    AgentLiveComponent.prototype.agentFilterKeyUp = function () {
        var that = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.agentList = this.allAgentList.filter(function (el) {
            var termLower = that.searchKeywords.toLowerCase().trim();
            if (el.agent.name != null && el.agent.name.toLowerCase().indexOf(termLower) > -1) {
                return true;
            }
        });
    };
    AgentLiveComponent.prototype.ngOnDestroy = function () {
    };
    return AgentLiveComponent;
}());
AgentLiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agent-live',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AgentLiveComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=agent-live.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n  background: #fff;\n  text-align: center;\n  margin: 0;\n  padding: 15px;\n  color: #000;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 1px 1px #ebebeb;\n  -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n  -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n  margin-top: 5px;\n  border: 0;\n}\n.chat-list{\n  display: inline-block;\n  width: 100%;\n}\n.chat-list ul{\n  margin: 5px 0 0;\n  padding: 0;\n  list-style-type: none;\n  background: #fff;\n  max-height: 705px;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0;\n  border-bottom: 1px solid #f4f4f4;\n  cursor: pointer;\n  vertical-align: top;\n}\n.chat-list ul li:last-child{\n  border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n  background: #3c8dbc;\n  box-shadow: 1px 1px 1px 1px #666;\n  border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n  border-radius: 50%;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n}\n.chat-content h3{\n  margin: 0 0 5px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #3c8dbc;\n}\n.chat-content h3 span{\n  float: right;\n  font-weight: normal;\n  font-size: 12px;\n  color: #000;\n}\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n  color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n  color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n  color: #fff;\n}\n.chat-box{\n  padding: 20px;\n}\n.receiver, .sender{\n  display: inline-block;\n  width: 100%;\n  padding: 20px 0;\n}\n.sender .chat-content{\n  text-align: right;\n  border-radius: 5px;\n}\n.receiver .chat-content{\n  background: #3c8dbc;\n  color: #fff;\n  padding: 15px;\n  border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n  margin: 0;\n}\n.direct-chat-msg {\n  margin-bottom: 20px;\n}\n.direct-chat-messages {\n  height: 665px;\n}\n\n.dropdown-submenu {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n  padding: 5px;\n}\n.dropdown-submenu:last-child {\n  border: none;\n}\n\n.chat-btn{\n  margin: 10px 20px 20px;\n}\n\n.chat-btn .target-drop{\n  display: inline-block;\n}\n.dropdown-submenu a{\n  color: #666;\n}\n.open>.dropdown-menu {\n  display: block;\n}\n\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px;\n  text-align: center;\n}\n.dropdown-submenu .dropdown-menu li {\n  border-bottom: 1px solid #eee;\n}\n.dropdown-submenu .dropdown-menu li:last-child {\n  border: none;\n}\n.show {\n  display: block;\n}\n\na {\n  cursor: pointer;\n}\n\n.super-sub{display: none;}\n\nli.dropdown-submenu li:hover .super-sub{display: block}\nul.super-sub{padding: 0;\n  margin: 0;\n  position: absolute;\n  right: -188px;\n  width: 194px;\n  background: #fff;\n  border: 1px solid rgba(0,0,0,.15);\n  top: 4px;\n}\nul.super-sub li{list-style: none; padding: 4px 0;}\nul.super-sub li a{display: block;}\nul.super-sub li:hover{background: #e1e3e9;}\n\n\n.btn-disabled,.btn-disabled[disabled] {\n  opacity: .4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n@media screen and (max-width:768px){\n  .direct-chat-messages {\n    height: 300px;\n  }\n  .chat-list ul{\n    max-height: 200px;\n  }\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Rejected Chats</h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <h2>Messages\n                <div class=\"pull-left\">Search : <input [(ngModel)]=\"searchKeywords\" placeholder=\"All keywords\" (ngModelChange)=\"agentFilterKeyUp()\"></div>\n              </h2>\n\n            </div>\n\n            <div class=\"row\" *ngIf=\"agentList !== undefined && agentList.length\">\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul>\n                      <ng-container\n                        *ngFor=\"let agent of agentList; let i = index;\">\n                        <li [ngClass]=\"{ active : agentIndex == i}\" (click)=\"changeAgent(i)\"\n                            *ngIf=\"agent.chat.length > 0 && agent.rejectedStatus\">\n                          <div class=\"col-md-12\">\n                            <div class=\"chat-content\">\n                              <h3>{{agent.agent.first_name + ' ' + agent.agent.last_name}}</h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 col-sm-2\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul *ngIf=\"agentList[agentIndex].chat !== undefined\">\n                      <ng-container\n                        *ngFor=\"let client of agentList[agentIndex]?.chat; let j = index;\">\n                        <li [ngClass]=\"{ active : clientIndex == j}\" (click)=\"changeClient(j)\"\n                            *ngIf=\"client.status === '3'\">\n                          <div class=\"col-md-2\">\n                            <div class=\"chat-head row\">\n                              <img src=\"../../../../assets/img/avatar5.png\"\n                                   class=\"img-responsive\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-10\">\n                            <div class=\"chat-content\">\n                              <h3>{{client.client_name}} <span>{{client.chat_time.date | amFromUtc | amLocal | amTimeAgo}}</span>\n                              </h3>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"!rejected\">\n              <div class=\"box box-primary\">\n                <div class=\"box-body\">\n                  <h4>No Rejected Chats at this Moment!</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRejectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_agent_chat_agent_chat_action__ = __webpack_require__("../../../../../src/app/core/layout/store/agent-chat/agent-chat.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentRejectedComponent = (function () {
    function AgentRejectedComponent(store, chatService, activatedRoute, router) {
        this.store = store;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    AgentRejectedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.rejected = false;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_agent_chat_agent_chat_action__["f" /* GetAgentLiveChatAttempt */]);
        this.agentChatSubscription = this.store.select('afterLogin', 'agentChats').subscribe(function (data) {
            if (data.list.length > 0) {
                _this.agentList = data.list;
                _this.allAgentList = data.list;
                data.list.forEach(function (item) {
                    if (item.rejectedStatus) {
                        _this.rejected = true;
                    }
                });
            }
        });
    };
    AgentRejectedComponent.prototype.changeAgent = function (i) {
        this.agentIndex = i;
    };
    AgentRejectedComponent.prototype.changeClient = function (i) {
        this.clientIndex = i;
    };
    AgentRejectedComponent.prototype.agentFilterKeyUp = function () {
        var that = this;
        this.agentIndex = 0;
        this.clientIndex = 0;
        this.agentList = this.allAgentList.filter(function (el) {
            var termLower = that.searchKeywords.toLowerCase().trim();
            if (el.agent.name != null && el.agent.name.toLowerCase().indexOf(termLower) > -1) {
                return true;
            }
        });
    };
    return AgentRejectedComponent;
}());
AgentRejectedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agent-rejected',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AgentRejectedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=agent-rejected.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/chatSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__ = __webpack_require__("../../../../ngx-bootstrap/chronos/test/chain.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChatSearchPipe = (function () {
    function ChatSearchPipe() {
    }
    ChatSearchPipe.prototype.transform = function (items, term) {
        if (!items) {
            return [];
        }
        if (!term) {
            return items;
        }
        return items.filter(function (el) {
            var termLower = term.toLowerCase().trim();
            /** Search Body */
            if (el.first_name != null && el.first_name.toLowerCase().indexOf(termLower) > -1) {
                return el.first_name.toLowerCase().indexOf(termLower) > -1;
            }
            else {
                // check for last name
                if (el.last_name != null && el.last_name.toLowerCase().indexOf(termLower) > -1) {
                    return el.last_name.toLowerCase().indexOf(termLower) > -1;
                }
                else {
                    // search for company
                    if (el.company != null && el.company.toLowerCase().indexOf(termLower) > -1) {
                        return el.company.toLowerCase().indexOf(termLower) > -1;
                    }
                    else {
                        // search for email
                        if (el.email != null && el.email.toLowerCase().indexOf(termLower) > -1) {
                            return el.email.toLowerCase().indexOf(termLower) > -1;
                        }
                        else {
                            // search for phone
                            if (el.phone != null && el.phone.replace(/\D+/g, '').indexOf(termLower) > -1) {
                                return el.phone.replace(/\D+/g, '').indexOf(termLower) > -1;
                            }
                            else {
                                // search for date
                                if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                    return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
                                }
                                else {
                                    // search by twillio sid
                                    if ((el.twilio_info != null && el.twilio_info.twilio_sid != null) &&
                                        el.twilio_info.twilio_sid.toLowerCase().indexOf(termLower) > -1) {
                                        return el.twilio_info.twilio_sid.toLowerCase().indexOf(termLower) > -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /** check for the contact list search */
            if ((el.client_info != undefined && el.client_info.client_name != undefined && el.client_info.client_name != null && el.client_info.client_name.name != null) && el.client_info.client_name.name.toLowerCase().indexOf(termLower) > -1) {
                return el.client_info.client_name.name.toLowerCase().indexOf(termLower) > -1;
            }
            else {
                if ((el.client_info != undefined && el.client_info.client_name != undefined && el.client_info.client_name != null && el.client_info.client_name.email != null) && el.client_info.client_name.email.toLowerCase().indexOf(termLower) > -1) {
                    return el.client_info.client_name.email.toLowerCase().indexOf(termLower) > -1;
                }
                else {
                    if ((el.client_info != undefined && el.client_info.client_name != undefined && el.client_info.client_name != null && el.client_info.client_name.phone != null) && el.client_info.client_name.phone.replace(/\D+/g, '').indexOf(termLower) > -1) {
                        return el.client_info.client_name.phone.replace(/\D+/g, '').indexOf(termLower) > -1;
                    }
                }
            }
        });
    };
    return ChatSearchPipe;
}());
ChatSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], ChatSearchPipe);

//# sourceMappingURL=chatSearch.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/chats-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_chat_list_chat_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agent_live_agent_live_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agent_rejected_agent_rejected_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agent_closed_agent_closed_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'list-agent', component: __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__["a" /* ListAgentComponent */], data: { chatMode: true } },
    { path: 'list-chat/:id', component: __WEBPACK_IMPORTED_MODULE_2__list_chat_list_chat_component__["a" /* ListChatComponent */] },
    { path: 'list-agents-contacts', component: __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__["a" /* ListAgentComponent */], data: { chatMode: false } },
    { path: 'contact-list/:id', component: __WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list_component__["a" /* ContactListComponent */] },
    { path: 'agent-live', component: __WEBPACK_IMPORTED_MODULE_5__agent_live_agent_live_component__["a" /* AgentLiveComponent */] },
    { path: 'agent-rejected', component: __WEBPACK_IMPORTED_MODULE_6__agent_rejected_agent_rejected_component__["a" /* AgentRejectedComponent */] },
    { path: 'agent-closed', component: __WEBPACK_IMPORTED_MODULE_7__agent_closed_agent_closed_component__["a" /* AgentClosedComponent */] },
    { path: '**', redirectTo: 'list-agent' },
];
var ChatsRoutingModule = (function () {
    function ChatsRoutingModule() {
    }
    return ChatsRoutingModule;
}());
ChatsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ChatsRoutingModule);

//# sourceMappingURL=chats-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/chats.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chats_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/chats-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_chat_list_chat_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chatSearch_pipe__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/chatSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agent_live_agent_live_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-live/agent-live.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agent_rejected_agent_rejected_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-rejected/agent-rejected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agent_closed_agent_closed_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/agent-closed/agent-closed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ChatsModule = (function () {
    function ChatsModule() {
    }
    return ChatsModule;
}());
ChatsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__chats_routing_module__["a" /* ChatsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__list_chat_list_chat_component__["a" /* ListChatComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list_agent_list_agent_component__["a" /* ListAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chatSearch_pipe__["a" /* ChatSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_13__agent_live_agent_live_component__["a" /* AgentLiveComponent */],
            __WEBPACK_IMPORTED_MODULE_14__agent_rejected_agent_rejected_component__["a" /* AgentRejectedComponent */],
            __WEBPACK_IMPORTED_MODULE_15__agent_closed_agent_closed_component__["a" /* AgentClosedComponent */]
        ]
    })
], ChatsModule);

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:1024px){\n    .box{\n        overflow-x: scroll;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n    <!--<h1>Contact List</h1>-->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a routerLink=\"/chats/list-agents-contacts\">Contact</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">View</a></li>-->\n    <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h3 class=\"box-title\">Contact List</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\"><div class=\"row\"><div class=\"col-sm-6\"> Search : <input [(ngModel)]=\"term\" placeholder=\"All keyword\"> </div><div class=\"col-sm-6\"></div></div><div class=\"row\"><div class=\"col-sm-12\">\n              <table id=\"contactListTable\" class=\"table table-bordered table-hover dataTable\" role=\"grid\" aria-describedby=\"example2_info\">\n              <thead>\n              <tr role=\"row\">\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Client Name </th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Email</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Phone</th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr role=\"row\" class=\"odd\" *ngFor=\"let item of (chatState | async).contactList | filter:term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                <td>{{i+1}}</td>\n                <td>{{item['name']}}</td>\n                <td>{{item['email']}}</td>\n                <td>{{item['phone']}}</td>\n              </tr>\n              </tbody>\n            </table>\n              <div class=\"row\">\n                <pagination-controls class=\"older_post_text\"\n                                     (pageChange)=\"page=$event\"\n                                     maxSize=\"9\"\n                                     directionLinks=\"true\"\n                                     autoHide=\"true\"\n                                     previousLabel=\"\"\n                                     nextLabel=\"\"\n                                     screenReaderPaginationLabel=\"\"\n                                     screenReaderPageLabel=\"page\"\n                                     screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls>\n              </div>\n            </div>\n            </div>\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactListComponent = (function () {
    /** Service injection */
    function ContactListComponent(store, activatedRoute, router) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    /** Function to be executed when component initializes */
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.params
            .subscribe(function (id) {
            _this.agentId = _this.activatedRoute.snapshot.params['id'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["y" /* GetContactListAttempt */]({ agentId: id }));
        });
    };
    /** Function to Edit Agent */
    ContactListComponent.prototype.onViewChat = function (id) {
        this.router.navigate(['chats/list-chat/', id]);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chats-contact-list',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:1024px){\n    .box{\n        overflow-x: scroll;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1 *ngIf=\"chatMode\">Chat List </h1>\n    <h1 *ngIf=\"!chatMode\">Contact List </h1>\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li *ngIf=\"chatMode\"><a href=\"javascript:void(0)\">Chats</a></li>-->\n      <!--<li *ngIf=\"!chatMode\"><a href=\"javascript:void(0)\">Contact</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">List</a></li>-->\n    <!--</ol>-->\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\"> Search : <input [(ngModel)]=\"term\" placeholder=\"First Name,Last Name,Phone\"></div>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <table id=\"chatList\" class=\"table table-bordered table-hover dataTable\" role=\"grid\"\n                         aria-describedby=\"example2_info\">\n                    <thead>\n                    <tr role=\"row\">\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">First Name\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">Last Name\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-label=\"Engine version: activate to sort column ascending\" *ngIf=\"!chatMode\">Email</th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          aria-label=\"CSS grade: activate to sort column ascending\">Phone\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\" *ngIf=\"chatMode\">Department\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          aria-label=\"CSS grade: activate to sort column ascending\">Action\n                      </th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr role=\"row\" class=\"odd\"\n                        *ngFor=\"let item of (chatState | async).agentList | filter : term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.first_name}}</td>\n                      <td>{{item.last_name}}</td>\n                      <td *ngIf=\"!chatMode\">{{item.email}}</td>\n                      <td>{{item.phone}}</td>\n                      <td *ngIf=\"chatMode\">{{item.department_agent_mapping.department_details.department_name}}</td>\n                      <td>\n                        <!-- Single button -->\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                  *ngIf=\"chatMode\" (click)=\"onViewChat(item.id)\">\n                            View Chats\n                          </button>\n                          <button type=\"button\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                  *ngIf=\"!chatMode\" (click)=\"onViewContact(item.id)\">\n                            View Contact List\n                          </button>\n                        </div>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                  <div class=\"row\">\n                    <pagination-controls class=\"older_post_text\"\n                                         (pageChange)=\"page=$event\"\n                                         maxSize=\"9\"\n                                         directionLinks=\"true\"\n                                         autoHide=\"true\"\n                                         previousLabel=\"\"\n                                         nextLabel=\"\"\n                                         screenReaderPaginationLabel=\"\"\n                                         screenReaderPageLabel=\"page\"\n                                         screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <!--<div class=\"msg-popup\">-->\n        <!--<p>This is a success msg!</p>-->\n        <!--</div>-->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListAgentComponent = (function () {
    /** Service injection */
    function ListAgentComponent(store, activatedRoute, router) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.chatMode = false;
    }
    /** Function to be executed when component initializes */
    ListAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.chatMode = data['chatMode'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["w" /* GetAgentListAttempt */]());
        });
    };
    /** Function to View Chats of Agent */
    ListAgentComponent.prototype.onViewChat = function (id) {
        this.router.navigate(['chats/list-chat/', id]);
    };
    /** Function to View Contact List of Agent */
    ListAgentComponent.prototype.onViewContact = function (id) {
        this.router.navigate(['chats/contact-list/', id]);
    };
    return ListAgentComponent;
}());
ListAgentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chats-list-agent',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListAgentComponent);

var _a, _b, _c;
//# sourceMappingURL=list-agent.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover, .chat-list ul li.active {\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n\n.chat-list ul li:hover h3,.chat-list ul li.active h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span, .chat-list ul li.active h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p, .chat-list ul li.active p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 500px;\n}\n\n@media screen and (max-width:768px){\n    .direct-chat-messages {\n        height: 300px;\n    }\n    .chat-list ul{\n        max-height: 200px;\n    }\n\n@media screen and (max-width:1024px){\n    .box{\n        overflow-x: scroll;\n    }\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Previous Chats</h1>\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a routerLink=\"/chats/list-agent\">Chats</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">View</a></li>-->\n    <!--</ol>-->\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <h2>Messages</h2>\n            </div>\n            <div class=\"row\" *ngIf=\"!!(showChats() | async).length\">\n              <div class=\"col-md-3 col-sm-3\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul>\n                      <ng-container *ngFor=\"let contact of (chatState | async).chatList; let i = index;\">\n                        <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                            (click)=\"changeCurrentChat(i)\">\n                          <div class=\"col-md-2\">\n                            <div class=\"chat-head row\">\n                              <img src=\"../../../../assets/img/avatar5.png\" class=\"img-responsive\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-10\">\n                            <div class=\"chat-content\">\n                              <h3>{{contact.client_name}} <span>{{contact.chat_time?.date | amFromUtc | amLocal | amTimeAgo}}</span> </h3>\n                              <p>{{contact.name}}</p>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-9 col-sm-9\">\n                <div class=\"row\">\n                  <div class=\"box box-primary direct-chat direct-chat-primary\">\n                    <div class=\"box-body\">\n                      <!-- Conversations are loaded here -->\n                      <div class=\"direct-chat-messages\"    #scrollChat [scrollTop]=\"scrollChat.scrollTo(0, 1000000)\">\n                        <!-- Message. Default to the left -->\n                        <div class=\"direct-chat-msg\" [ngClass]=\"{ right: chat.direction == 2 }\" *ngFor=\"let chat of (chatState | async).chatList[currentChatIndex]?.chats\">\n                          <div class=\"direct-chat-info clearfix\">\n                            <span class=\"direct-chat-name\" [ngClass]=\"chat.direction == 2 ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                            <span class=\"direct-chat-timestamp\" [ngClass]=\"chat.direction == 1 ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date  | amFromUtc | amLocal | amDateFormat:'MMMM Do YYYY, h:mm:ss a'}} </span>\n                          </div>\n                          <img class=\"direct-chat-img\" [src]=\"chat.direction == 2 ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\" alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                          <div class=\"direct-chat-text\">\n                            {{chat.message}}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"!(showChats() | async).length\">\n              <div class=\"box box-primary\">\n                <div class=\"box-body\" >\n                  <div class=\"col-md-9 col-sm-9\">\n                    <div class=\"col-md-5 col-sm-5\">\n                      <h4>No chats found at the moment!</h4>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListChatComponent = (function () {
    /** Service injection */
    function ListChatComponent(store, activatedRoute, router) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.currentChatIndex = 0;
    }
    ListChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.params
            .subscribe(function (id) {
            _this.agentId = _this.activatedRoute.snapshot.params['id'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["x" /* GetChatListAttempt */]({ agentId: id }));
        });
    };
    ListChatComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
    };
    ListChatComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.chatList; });
    };
    return ListChatComponent;
}());
ListChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-chat',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListChatComponent);

var _a, _b, _c;
//# sourceMappingURL=list-chat.component.js.map

/***/ })

});
//# sourceMappingURL=chats.module.chunk.js.map
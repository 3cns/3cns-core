webpackJsonp(["agent.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/agent/agent-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_agent_create_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__create_agent_create_agent_component__["a" /* CreateAgentComponent */], data: { editMode: false } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__["a" /* ListAgentComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_agent_create_agent_component__["a" /* CreateAgentComponent */], data: { editMode: true } },
    { path: '**', redirectTo: 'list' }
];
var AgentRoutingModule = (function () {
    function AgentRoutingModule() {
    }
    return AgentRoutingModule;
}());
AgentRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AgentRoutingModule);

//# sourceMappingURL=agent-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/agent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agent_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/agent-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_agent_create_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agentSearch_pipe__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/agentSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AgentModule = (function () {
    function AgentModule() {
    }
    return AgentModule;
}());
AgentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__agent_routing_module__["a" /* AgentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_14_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__create_agent_create_agent_component__["a" /* CreateAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__list_agent_list_agent_component__["a" /* ListAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__agentSearch_pipe__["a" /* AgentSearchPipe */]
        ]
    })
], AgentModule);

//# sourceMappingURL=agent.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/agentSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__ = __webpack_require__("../../../../ngx-bootstrap/chronos/test/chain.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AgentSearchPipe = (function () {
    function AgentSearchPipe() {
    }
    AgentSearchPipe.prototype.transform = function (items, companySearch, term) {
        if (!items) {
            return [];
        }
        /*if (!term || !companySearch) {
          return items;
        }*/
        return items.filter(function (el) {
            // check for first name
            if (companySearch && companySearch !== '') {
                var companyLower = companySearch.toLowerCase().trim();
                if ((el.get_company != null && el.get_company.company != null) && el.get_company.company.toLowerCase() === companyLower) {
                    if (term && term !== undefined) {
                        var termLower = term.toLowerCase().trim();
                        if (el.first_name != null && el.first_name.toLowerCase().indexOf(termLower) > -1) {
                            return el.first_name.toLowerCase().indexOf(termLower) > -1;
                        }
                        else {
                            // check for last name
                            if (el.last_name != null && el.last_name.toLowerCase().indexOf(termLower) > -1) {
                                return el.last_name.toLowerCase().indexOf(termLower) > -1;
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
                                    }
                                }
                            }
                        }
                    }
                    else {
                        return el.get_company.company.toLowerCase() === companyLower;
                    }
                }
            }
            else if (companySearch === '' && term !== undefined) {
                var termLower = term.toLowerCase().trim();
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
                        if ((el.get_company != null && el.get_company.company != null) && el.get_company.company.toLowerCase().indexOf(termLower) > -1) {
                            return el.get_company.company.toLowerCase().indexOf(termLower) > -1;
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
                                }
                            }
                        }
                    }
                }
            }
            else {
                return items;
            }
        });
    };
    return AgentSearchPipe;
}());
AgentSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], AgentSearchPipe);

//# sourceMappingURL=agentSearch.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-disabled {\n    opacity: .4;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.autoListArea{\n    position: relative;\n}\n.autoList{\n    position: absolute;\n    left: 0;\n    top: 100%;\n    background: #fff;\n    width: 100%;\n    max-height: 200px;\n    overflow-y: scroll;\n    box-shadow: 0 3px 5px rgba(0,0,0,0.3);\n    border: 1px solid #e2e2e2;\n    z-index: 99;\n    padding: 0;\n}\n.autoList li{\n    list-style: none;\n}\n.autoList li span{\n    display: block;\n    padding: 5px 15px;\n}\n.autoList li:hover{\n    background: #e2e2e2;\n}\n.hideList{\n    float: right;\n    margin: -27px 10px 0 0;\n    cursor: pointer;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 87px;\n  height: 34px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 29px;\n  width: 26px;\n  left: 1px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  left: 32px;\n}\n\n.filterSubmit {\n  /*position: relative;*/\n  z-index: 1;\n  left: 0px;\n  top: 0px;\n}\n.input-box-toggel {\n  float: left;\n  width: calc(100% - 84px);\n}\n.input-label-toggel {\n  width: 100% !important;\n}\n\n.slider:after\n{\n  content:'OFF';\n  color: white;\n  display: block;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 70%;\n  font-size: 15px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider:after\n{\n  content:'ON';\n  left: 30% !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n    <!--<h1>Agent Section</h1>-->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a routerLink=\"/agent/list\">Agent</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">{{editMode ? 'Edit' : 'Create'}}</a></li>-->\n    <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <!-- /.box-header -->\n          <div class=\"box-body\" *ngIf=\"(authState | async).twilioIsActive\">\n            <form #form=\"ngForm\" (submit)=\"onSubmit(form)\">\n              <!-- text input -->\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">{{ editMode ? 'Edit': 'Create' }} Agent</h3>\n              </div>\n              <div class=\"row\">\n                <div *ngIf=\"(authState | async).isAdmin; then thenTemplateName else elseTemplateName\"></div>\n\n                <ng-template #thenTemplateName style=\"display: none;\">\n                  <input type=\"hidden\" class=\"form-control\"\n                         name=\"adminName\" autocomplete=\"off\" readonly [value]=\"(authState | async).name\">\n                </ng-template>\n                <ng-template #elseTemplateName>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group autoListArea\">\n                      <label class=\"control-label\" for=\"admin\">\n                        Admin for Agent\n                      </label>\n                      <input type=\"text\" (keyup)=\"checkAdminname($event.target.value)\"\n\n                             [ngClass]=\"editMode ?  'form-control' : 'form-control' \"\n                             [ngModel]=\"adminName\" name=\"adminName\" (click)=\"checkAdminname($event.target.value)\"\n                             autocomplete=\"off\" [readonly]=\"editMode\" class=\"listBox\" #selectOption>\n                      <span *ngIf=\"( !editMode && this.adminName)\" (click)=\"resetList()\" class=\"hideList\"> <i\n                        class=\"fa fa-close\"></i> </span>\n                      <ul *ngIf=\"showThis\" class=\"autoList\" id=\"autoList\">\n                        <li *ngFor=\"let item of updatedlistOfAdmins; let i = index\"><span\n                          (click)=\"assignValue(item.id,item.first_name,item.last_name)\">  {{item.first_name}} {{item.last_name}}  </span>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </ng-template>\n                <input type=\"hidden\" [ngModel]=\"agent.parentId\" id=\"admin\" name=\"parentId\" #selectedAdmin>\n\n                <!--<select-->\n                <!--id=\"admin\"-->\n                <!--name=\"parentId\"-->\n                <!--[ngClass]=\"editMode || (authState | async).isAdmin ?  'btn-disabled form-control' : 'form-control' \"-->\n                <!--#selectedAdmin-->\n                <!--[ngModel]=\"agent.parentId\"-->\n                <!--(change)=\"adminChanged(selectedAdmin.value)\"-->\n                <!--required style=\"opacity: 1 !important;\"-->\n                <!--&gt;-->\n                <!--<option selected value=\"0\">Choose...</option>-->\n                <!--<option [value]=\"item.first_name\"-->\n                <!--*ngFor=\"let item of listOfAdmins; let i = index\"-->\n                <!--&gt;-->\n                <!--{{item.first_name}} {{item.last_name}}-->\n                <!--</option>-->\n                <!--</select> OLD SELECT -->\n\n                <div class=\"col-md-6\">\n                 <div class=\"col-md-10\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"department\">\n                      Department for Agent\n                    </label>\n                    <!--<select class=\"form-control\"-->\n                            <!--id=\"department\"-->\n                            <!--name=\"departmentId\"-->\n                            <!--#selectedDepartment-->\n                            <!--[ngModel]=\"agent.departmentId\"-->\n                            <!--(change)=\"deptChanged(selectedDepartment.value)\"-->\n                            <!--required-->\n                    <!--&gt;-->\n                      <!--<option selected value=\"0\">Choose...</option>-->\n                      <!--<option [value]=\"item.id\"-->\n                              <!--*ngFor=\"let item of (afterLoginState | async).department.list; let i = index\">-->\n                        <!--{{item.department_name}}-->\n                      <!--</option>-->\n                      <!--<option value=\"99999991999999\" style=\"font-weight: bold;\">&#43; Create Department</option>-->\n                    <!--</select>-->\n                      <angular2-multiselect\n                              id=\"department\" name=\"departmentId\"\n                              [data]=\"(afterLoginState | async).department.list\"\n                              [(ngModel)]=\"agent.departmentId\" [settings]=\"dropdownSettings\" required>\n                          <c-badge>\n                              <ng-template let-item=\"item\">\n                                  <label style=\"margin: 0px;\">{{item.department_name}}</label>\n                              </ng-template>\n                          </c-badge>\n                      </angular2-multiselect>\n                  </div>\n                </div>\n                  <div class=\"col-md-2\">\n                    <a class=\"btn btn-warning btn-md\" style=\"margin-top: 25px;\" type=\"button\"\n                       (click)=\"createDepartment(template)\" id=\"createDepartment\"><i class=\"fa fa-plus\"></i> Create Department</a>\n                  </div>\n\n                </div>  <!-- col-md-6 End -->\n\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" [ngClass]=\"(firstName.invalid && firstName.touched) ? 'has-error': ''\">\n                    <label class=\"control-label\" for=\"firstName\">First Name\n                      <i *ngIf=\"firstName.invalid && firstName.touched\" class=\"fa fa-times-circle-o\"></i>\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"firstName\"\n                           name=\"firstName\"\n                           [ngModel]=\"agent.firstName\"\n                           #firstName=\"ngModel\"\n                           required\n                           placeholder=\"First Name\"\n                    >\n                    <span *ngIf=\"firstName.invalid && firstName.touched\" class=\"help-block\">Your First Name is Required !</span>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" [ngClass]=\"(lastName.invalid && lastName.touched) ? 'has-error': ''\">\n                    <label class=\"control-label\" for=\"lastName\">Last Name\n                      <i *ngIf=\"lastName.invalid && lastName.touched\" class=\"fa fa-times-circle-o\"></i>\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"lastName\"\n                           name=\"lastName\"\n                           [ngModel]=\"agent.lastName\"\n                           #lastName=\"ngModel\"\n                           required\n                           placeholder=\"Last Name\"\n                    >\n                    <span *ngIf=\"lastName.invalid && lastName.touched\"\n                          class=\"help-block\">Your Last Name is Required !</span>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" [ngClass]=\"(email.invalid && email.touched) ? 'has-error': ''\">\n                    <label class=\"control-label input-label-toggel\" for=\"email\">Email\n                      <i *ngIf=\"email.invalid && email.touched\" class=\"fa fa-times-circle-o\"></i>\n                    </label>\n                    <input type=\"email\"\n                           class=\"form-control input-box-toggel\"\n                           id=\"email\"\n                           name=\"email\"\n                           [ngModel]=\"agent.email\"\n                           #email=\"ngModel\"\n                           email\n                           required\n                           [disabled]=\"editMode\"\n                           placeholder=\"email\"\n                    >\n                    <div class=\"row filterSubmit\">\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" name=\"isEmailNotification\" [(ngModel)]=\"isemailNotification\" [checked]=\"isemailNotification\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n\n                    <span *ngIf=\"email.invalid && email.touched && form.controls.email?.errors.email\"\n                          class=\"help-block\">Please Enter a Proper Email Address!</span>\n                    <span *ngIf=\"email.invalid && email.touched && form.controls.email?.errors.required\"\n                          class=\"help-block\">Your Email Address is Required!</span>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <!--<div class=\"form-group\" [ngClass]=\"(userName.invalid && userName.touched) ? 'has-error': ''\">-->\n                  <!--<label class=\"control-label\" for=\"userName\">Username-->\n                  <!--<i *ngIf=\"userName.invalid && userName.touched\" class=\"fa fa-times-circle-o\"></i>-->\n                  <!--</label>-->\n                  <!--<input type=\"text\"-->\n                  <!--class=\"form-control\"-->\n                  <!--id=\"userName\"-->\n                  <!--placeholder=\"Username\"-->\n                  <!--[ngModel]=\"agent.userName\"-->\n                  <!--name=\"userName\"-->\n                  <!--required-->\n                  <!--ngModel-->\n                  <!--#userName=\"ngModel\"-->\n                  <!--&gt;-->\n                  <!--<span *ngIf=\"userName.invalid && userName.touched\" class=\"help-block\">Your Username is Required !</span>-->\n                  <!--</div>-->\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" [ngClass]=\"(phone.invalid && phone.touched) ? 'has-error': ''\">\n                    <label class=\"control-label input-label-toggel\" for=\"phone\">Phone\n                      <i *ngIf=\"phone.invalid && phone.touched\" class=\"fa fa-times-circle-o\"></i>\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control input-box-toggel\"\n                           [textMask]=\"{mask: mask, guide: false}\"\n                           id=\"phone\"\n                           placeholder=\"phone\"\n                           [ngModel]=\"agent.phone\"\n                           name=\"phone\"\n                           required\n                           ngModel\n                           #phone=\"ngModel\"\n                    >\n                    <div class=\"row filterSubmit\">\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" name=\"isPhoneNotification\" [(ngModel)]=\"isPhoneNotification\" [checked]=\"isPhoneNotification\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n                    <span *ngIf=\"phone.invalid && phone.touched\"\n                          class=\"help-block\">Your Phone Number is Required !</span>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <div class=\"box-footer\">\n                  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary pull-right\"><i\n                    *ngIf=\"loader\" class=\"fa fa-spinner fa-spin\"></i> Submit\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-body\" *ngIf=\"!(authState | async).twilioIsActive\">\n            <h4>Twilio Credentials Not Added by SuperAdmin :-(</h4>\n          </div>\n          <!-- /.box-body -->\n        </div>\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Create Department </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body row\">\n        <form #form=\"ngForm\" (submit)=\"onCreateDep(form)\">\n          <input type=\"hidden\"\n                 id=\"userId\"\n                 name=\"userId\"\n                 [ngModel]=\"dep.userId\"\n                 #userId=\"ngModel\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"(dName.invalid && dName.touched) ? 'has-error': ''\">\n              <label class=\"control-label\" for=\"name\">\n                <i *ngIf=\"dName.invalid && dName.touched\" class=\"fa fa-times-circle-o\"></i>\n                Department Name\n              </label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     id=\"name\"\n                     name=\"departmentName\"\n                     [ngModel]=\"dep.departmentName\"\n                     #dName=\"ngModel\"\n                     required\n                     placeholder=\"Enter ...\"\n              >\n              <span *ngIf=\"dName.invalid && dName.touched\" class=\"help-block\">Your Department Name is Required!</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': dDes.invalid && dDes.touched }\">\n              <label class=\"control-label\" for=\"detail\">\n                <i *ngIf=\"dDes.invalid && dDes.touched\" class=\"fa fa-times-circle-o\"></i>\n                Department Description\n              </label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     id=\"detail\"\n                     name=\"departmentDetails\"\n                     ngModel\n                     [ngModel]=\"dep.departmentDetails\"\n                     #dDes=\"ngModel\"\n                     required\n                     placeholder=\"Enter ...\"\n              >\n              <span *ngIf=\"dDes.invalid && dDes.touched\"\n                    class=\"help-block\">Your Department Description is Required!</span>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <button type=\"submit\"\n                    [disabled]=\"form.invalid\"\n                    class=\"btn btn-primary pull-right\"\n            >\n              <i *ngIf=\"loader\" class=\"fa fa-spinner fa-spin\"></i> Submit\n            </button>\n          </div>\n        </form>\n      </div>\n    </ng-template>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_admin_admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
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









var CreateAgentComponent = (function () {
    /** Service injection */
    function CreateAgentComponent(store, activatedRoute, cdr, router, modalService, deptStore) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.router = router;
        this.modalService = modalService;
        this.deptStore = deptStore;
        this.editMode = false;
        this.selectAdmin = false;
        this.selectDept = false;
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.agent = {
            userId: 0,
            parentId: 0,
            departmentId: [],
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            phone: ''
        };
        // departments: any;
        this.loader = false;
        this.listOfAdmins = [];
        this.updatedlistOfAdmins = [];
        this.showThis = false;
        this.isemailNotification = true;
        this.isPhoneNotification = true;
        this.dropdownSettings = {}; /** dropDown settings blank obj*/
    }
    /** Function to be executed when component initializes */
    CreateAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_admin_admin_actions__["q" /* GetAdminListAttempt */]());
        this.authState = this.store.select('auth');
        this.afterLoginState = this.store.select('afterLogin');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.agent.parentId = data.userId;
                _this.loggedInAdminId = data.userId;
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: data.userId }));
            }
        });
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.editMode = data['editMode'];
            if (_this.editMode) {
                /** Perform operation is present mode is edit mode */
                _this.selectDept = true;
                _this.userId = _this.activatedRoute.snapshot.params['id'];
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_agent_agent_actions__["z" /* GetToEditAgentAttempt */]({ agentId: _this.userId }));
                _this.updateAgent = _this.store.select('afterLogin')
                    .map(function (data) { return data.agent.toEdit; })
                    .distinctUntilChanged()
                    .subscribe(function (agent) {
                    if (agent) {
                        _this.adminUserId = agent.parent_id;
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: agent.parent_id }));
                        _this.agent.parentId = agent.parent_id;
                        _this.agent.firstName = agent.first_name;
                        _this.agent.lastName = agent.last_name;
                        _this.agent.userName = agent.username;
                        _this.agent.email = agent.email;
                        _this.agent.phone = agent.phone;
                        _this.agent.departmentId = agent.departments;
                        _this.adminName = agent.admin_first_name + ' ' + agent.admin_last_name;
                        _this.isemailNotification = agent.is_email_notification;
                        _this.isPhoneNotification = agent.is_phone_notification;
                    }
                });
                _this.selectAdmin = true;
            }
        });
        // this.afterLoginSubscription = this.store.select('afterLogin')
        //   .map(data => data.agent.resetAgentForm)
        //   .subscribe(
        //     (data) => {
        //         console.log(data);
        //       if (data) {
        //         this.loader = false;
        //         this.form.reset();
        //         this.selectDept = false;
        //         this.store.dispatch(new AgentActions.ResetAgentForm());
        //         if (!!this.loggedInAdminId) {
        //           this.form.form.patchValue({ parentId: this.loggedInAdminId, departmentId: 0 });
        //         }
        //       }
        //     }
        //   );
        this.dep = {
            userId: '',
            departmentName: '',
            departmentDetails: ''
        };
        this.adminList = this.store.select('afterLogin').map(function (data) { return data; })
            .subscribe(function (data) {
            if (data.admin.list) {
                _this.listOfAdmins = data.admin.list;
            }
        });
        /** iniciate drop down settings */
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Department',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: 'myclass custom-class',
            primaryKey: 'id',
            labelKey: 'department_name'
        };
    };
    CreateAgentComponent.prototype.checkAdminname = function ($event) {
        this.showThis = true;
        return this.updatedlistOfAdmins = this.listOfAdmins.filter(function (item) { return item.first_name.toLowerCase().indexOf($event) !== -1; });
    };
    CreateAgentComponent.prototype.assignValue = function (id, first_name, last_name) {
        this.agent.parentId = id;
        this.adminName = first_name + ' ' + last_name;
        this.showThis = false;
        this.adminChanged(id);
    };
    CreateAgentComponent.prototype.resetList = function () {
        this.adminName = '';
        this.showThis = true;
        this.agent.parentId = 0;
    };
    CreateAgentComponent.prototype.ngAfterViewChecked = function () {
        this.cdr.detectChanges();
    };
    /** Function call to create or edit a admin */
    CreateAgentComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loader = true;
        if (this.editMode) {
            var data = __assign({}, form.value, { userId: this.userId });
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_agent_agent_actions__["n" /* EditAgentAttempt */](__assign({}, data)));
            /** Loader Show/Hide */
            this.store.select('alert')
                .map(function (data) { return data; })
                .subscribe(function (data) {
                if (data.show && data.type === 'danger') {
                    _this.loader = false;
                }
                else if (data.show && data.type === 'success') {
                    _this.router.navigate(['/agent/list']);
                }
            }, function (error) { console.error(error); _this.loader = false; }, function () { _this.loader = false; });
        }
        else {
            /** Create Agent */
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_agent_agent_actions__["i" /* AddAgentAttempt */](form.value));
            /** Loader Show/Hide */
            this.store.select('alert')
                .map(function (data) { return data; })
                .subscribe(function (data) {
                if (data.show && data.type === 'danger') {
                    _this.loader = false;
                }
                else if (data.show && data.type === 'success') {
                    _this.router.navigate(['/agent/list']);
                }
            }, function (error) { console.error(error); _this.loader = false; }, function () { _this.loader = false; });
        }
    };
    /** Un-subscribing from all custom made events when component is destroyed */
    CreateAgentComponent.prototype.ngOnDestroy = function () {
        // this.afterLoginSubscription.unsubscribe();
        this.authSubscription.unsubscribe();
    };
    /** Function to fetch department list with respect to adminId/userId */
    CreateAgentComponent.prototype.adminChanged = function (id) {
        if (!!id) {
            this.adminUserId = id;
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: id }));
        }
    };
    /** Function to check if valid department is selected */
    CreateAgentComponent.prototype.deptChanged = function (id) {
        this.selectDept = id > 0;
        if (id === '99999991999999') {
            var element = document.getElementById('createDepartment'); /** open modal on click */
            element.click();
        }
    };
    /** Function to create a department from the create agent page */
    CreateAgentComponent.prototype.createDepartment = function (template) {
        this.dep.userId = this.adminUserId;
        this.bsModalRef = this.modalService.show(template);
    };
    // /** function to create a department */
    // onCreateDep(form) {
    //   this.store.dispatch(new DepartmentActions.AddDepartmentAttempt(form.value));
    //
    //   this.afterLoginSubscription = this.store.select('afterLogin')
    //     .map(data => data.department.newDepartmentId)
    //     .subscribe(
    //       (data) => {
    //         if (data) {
    //          /// this.agent.departmentId = data;
    //         }
    //       }
    //     );
    //
    //   this.bsModalRef.hide();
    // }
    /** function to create a department */
    CreateAgentComponent.prototype.onCreateDep = function (form) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_department_department_actions__["c" /* AddDepartmentAttempt */](form.value));
        var newArray = [];
        this.afterLoginSubscription = this.store.select('department')
            .subscribe(function (data) {
            if (data.newDepartmentId > 0 && data) {
                newArray.push(data);
                var oldArray = _this.agent.departmentId;
                var newObj_1 = [{ id: newArray[newArray.length - 1].newDepartmentId, department_name: newArray[newArray.length - 1].newDepartmentName }];
                var fIndex_1 = -1;
                if (oldArray.length > 0) {
                    oldArray.forEach(function (elem, index) {
                        if (elem.id === newObj_1[0].id) {
                            fIndex_1 = index;
                        }
                    });
                }
                if (fIndex_1 !== -1) {
                    oldArray.splice(fIndex_1, 1);
                }
                _this.agent.departmentId = oldArray.concat(newObj_1);
            }
        });
        this.bsModalRef.hide();
    };
    return CreateAgentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], CreateAgentComponent.prototype, "form", void 0);
CreateAgentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-create-agent',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/create-agent/create-agent.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _g || Object])
], CreateAgentComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create-agent.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:1024px){\n    .box{\n      overflow-x: scroll;\n  }\n  }\n.filter{\n  padding-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n    <!--<h1>Agent List</h1>-->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a href=\"javascript:void(0)\">Agent</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">List</a></li>-->\n    <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h3 class=\"box-title\">Agent List</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n              <div class=\"row filter\">\n                <div class=\"col-sm-4\" *ngIf=\"!(authState | async).isAdmin;\">\n                  company :\n                  <select class='select-option' [(ngModel)]='companySearch'>\n                    <option value=\"\">Filter by company</option>\n                    <option class='option' *ngFor='let option of companyList' [value]=\"option.company\">{{option.company}}</option>\n                  </select>\n                </div>\n                <div class=\"col-sm-8\">Search : <input [(ngModel)]=\"term\" placeholder=\"All keywords\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <table id=\"agentListTable\" class=\"table table-bordered table-hover dataTable\" role=\"grid\"\n                         aria-describedby=\"example2_info\">\n                    <thead>\n                    <tr role=\"row\">\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">First Name\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">Last Name\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">Company\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Email</th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          aria-label=\"CSS grade: activate to sort column ascending\">Phone\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          class=\"mdl-data-table__cell--non-numeric\">Register Date\n                      </th>\n                      <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\"\n                          aria-label=\"CSS grade: activate to sort column ascending\">Action\n                      </th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr role=\"row\" class=\"odd\"\n                        *ngFor=\"let item of (afterLoginState | async).agent.list | filter : companySearch: term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.first_name}}</td>\n                      <td>{{item.last_name}}</td>\n                      <td>{{item.get_company?.company}}</td>\n                      <td>{{item.email}}</td>\n                      <td>{{item.phone}}</td>\n                      <td>{{item.created_at | amUtc | amDateFormat:'MMMM DD YYYY' }}</td>\n                      <td>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"onEditAgent(item.id)\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button *ngIf=\"item.is_block == '1'\" type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"blockUser(item.id)\">\n                          <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button *ngIf=\"item.is_block != '1'\" type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"UnblockUser(item.id)\">\n                          <i class=\"fa fa-unlock\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"chatList(item.id)\">\n                          <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"DeleteAgent(item.id)\">\n                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                        </button>\n                        <!-- Single button -->\n                        <!--<div class=\"btn-group\" [appDropdown]=\"'open'\" [disable-hover]=\"true\">\n                          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                                  aria-haspopup=\"true\" aria-expanded=\"false\">\n                            Action <span class=\"caret\"></span>\n                          </button>\n                          <ul class=\"dropdown-menu\">\n                            <li><a (click)=\"onEditAgent(item.id)\"><i class=\"fa fa-pencil\"\n                                                                     aria-hidden=\"true\"></i>Edit</a></li>\n                            <li *ngIf=\"item.is_block == '1'\"> <a (click)=\"blockUser(item.id)\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>Block</a> </li>\n                            <li *ngIf=\"item.is_block != '1'\"> <a (click)=\"UnblockUser(item.id)\"><i class=\"fa fa-unlock\" aria-hidden=\"true\"></i>Unblock</a> </li>\n                            <li> <a (click)=\"DeleteAgent(item.id)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>Delete</a> </li>\n                          </ul>\n                        </div>-->\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                  <div class=\"row\">\n                    <pagination-controls class=\"older_post_text\"\n                                         (pageChange)=\"page=$event\"\n                                         maxSize=\"9\"\n                                         directionLinks=\"true\"\n                                         autoHide=\"true\"\n                                         previousLabel=\"\"\n                                         nextLabel=\"\"\n                                         screenReaderPaginationLabel=\"\"\n                                         screenReaderPageLabel=\"page\"\n                                         screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
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
    function ListAgentComponent(store, router, orderPipe) {
        this.store = store;
        this.router = router;
        this.orderPipe = orderPipe;
        this.order = 'info.name';
        this.reverse = false;
        this.sortedCollection = orderPipe.transform(this.afterLoginState, 'info.name');
    }
    /** Function to be executed when component initializes */
    ListAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__["x" /* GetAgentListAttempt */]());
        this.authState = this.store.select('auth');
        this.page = 1;
        this.companySearch = '';
        this.afterLoginState = this.store.select('afterLogin');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isSuperAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__["y" /* GetCompanyListAttempt */]({ userId: data.token }));
            }
        });
        /* Company List droupdown */
        this.companySubscription = this.store.select('afterLogin', 'agent').subscribe(function (data) {
            if (data.comapnyList) {
                _this.companyList = data.comapnyList;
            }
        });
    };
    /** Function to Edit Agent */
    ListAgentComponent.prototype.onEditAgent = function (id) {
        this.router.navigate(['agent/edit/', id]);
    };
    /**
     * Function for ordering the table
     * @param {string} value
     */
    ListAgentComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    /**
     * Block a agent
     * @param user_id
     */
    ListAgentComponent.prototype.blockUser = function (user_id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__["j" /* BlockAgentAttempt */]({ userId: user_id }));
    };
    /**
     * Unblock agent
     * @param user_id
     * @constructor
     */
    ListAgentComponent.prototype.UnblockUser = function (user_id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__["B" /* UnblockAgentAttempt */]({ userId: user_id }));
    };
    /**
     * Delete a agent
     * @param user_id
     * @constructor
     */
    ListAgentComponent.prototype.DeleteAgent = function (user_id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_agent_agent_actions__["k" /* DeleteAgentAttempt */]({ userId: user_id }));
    };
    /**
     * Show Chat List
     * @param id
     */
    ListAgentComponent.prototype.chatList = function (id) {
        this.router.navigate(['chats/list-chat/', id]);
    };
    /** Un-subscribe from all subscription when component destroys */
    ListAgentComponent.prototype.ngOnDestroy = function () {
        // this.companySubscription.unsubscribe();
    };
    return ListAgentComponent;
}());
ListAgentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-agent',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/agent/list-agent/list-agent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */]) === "function" && _c || Object])
], ListAgentComponent);

var _a, _b, _c;
//# sourceMappingURL=list-agent.component.js.map

/***/ })

});
//# sourceMappingURL=agent.module.chunk.js.map
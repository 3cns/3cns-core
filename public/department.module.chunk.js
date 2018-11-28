webpackJsonp(["department.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-disabled {\n    opacity: .4;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.autoListArea{\n    position: relative;\n}\n.autoList{\n    position: absolute;\n    left: 0;\n    top: 100%;\n    background: #fff;\n    width: 100%;\n    max-height: 200px;\n    overflow-y: scroll;\n    box-shadow: 0 3px 5px rgba(0,0,0,0.3);\n    border: 1px solid #e2e2e2;\n    z-index: 99;\n    padding: 0;\n}\n.autoList li{\n    list-style: none;\n}\n.autoList li span{\n    display: block;\n    padding: 5px 15px;\n}\n.autoList li:hover{\n    background: #e2e2e2;\n}\n.hideList{\n    float: right;\n    margin: -27px 10px 0 0;\n    cursor: pointer;\n}\n.createAgentBtn{\n    padding-top: 29px;\n}\n\n/*Media Query for responsive*/\n@media screen and (max-width:764px) {\n    .createAgentBtn {\n        padding-top: 0px !important;\n    }\n}\n\n/* toggle switch  */\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 87px;\n    height: 34px;\n}\n\n.switch input {display:none;}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 29px;\n    width: 26px;\n    left: 1px;\n    bottom: 2px;\n    background-color: white;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #2196F3;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    transform: translateX(26px);\n    left: 32px;\n}\n\n.filterSubmit {\n    /*position: relative;*/\n    z-index: 1;\n    left: 0px;\n    top: 0px;\n}\n.input-box-toggel {\n    float: left;\n    width: calc(100% - 84px);\n}\n.input-label-toggel {\n    width: 100% !important;\n}\n\n.slider:after\n{\n    content:'OFF';\n    color: white;\n    display: block;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 70%;\n    font-size: 15px;\n    font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider:after\n{\n    content:'ON';\n    left: 30% !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n    <!--<h1>Department Section</h1>-->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n      <!--<li><a routerLink=\"/department/list\">Department</a></li>-->\n      <!--<li class=\"active\"><a href=\"javascript:void(0)\">{{ editMode ? 'Edit' : 'Create' }}</a></li>-->\n    <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <!-- /.box-header -->\n          <div class=\"box-body\" *ngIf=\"(authState | async).twilioIsActive\">\n            <form #form=\"ngForm\" (submit)=\"onCreateDep(form)\">\n              <!-- text input -->\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">{{ editMode ? 'Edit' : 'Create' }} Department</h3>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n\n                  <div *ngIf=\"(authState | async).isAdmin; then thenTemplateName else elseTemplateName\"></div>\n\n                  <ng-template #thenTemplateName>\n                    <input type=\"hidden\" class=\"form-control\"\n                           name=\"adminName\" autocomplete=\"off\" readonly [value]=\"(authState | async).name\">\n                  </ng-template>\n\n                  <ng-template #elseTemplateName>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group autoListArea\">\n                        <label class=\"control-label\" for=\"admin\">\n                          Admin for Department\n                        </label>\n\n                        <input type=\"text\" (keyup)=\"checkAdminname($event.target.value)\"\n                               [ngClass]=\"editMode ?  'form-control' : 'form-control' \"\n                               [ngModel]=\"adminName\" name=\"adminName\" (click)=\"checkAdminname($event.target.value)\"\n                               autocomplete=\"off\" [readonly]=\"editMode\" class=\"listBox\" #selectOption>\n                        <span *ngIf=\"( !editMode && this.adminName)\" (click)=\"resetList()\" class=\"hideList\"> <i\n                          class=\"fa fa-close\"></i> </span>\n                        <ul *ngIf=\"showThis\" class=\"autoList\" id=\"autoList\">\n                          <li *ngFor=\"let item of updatedlistOfAdmins; let i = index\"><span\n                            (click)=\"assignValue(item.id,item.first_name,item.last_name)\">  {{item.first_name}} {{item.last_name}}  </span>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </ng-template>\n                  <input type=\"hidden\" [ngModel]=\"dep.userId\" id=\"admin\" name=\"userId\" #selected>\n\n                  <div class=\"col-md-5\" *ngIf=\"selected.value > 0\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"agents\">\n                        Select Agents\n                      </label>\n                      <angular2-multiselect\n                        id=\"agents\" name=\"agentIds\"\n                        [data]=\"(afterLoginState | async).agent.list\"\n                        [(ngModel)]=\"dep.agents\" [settings]=\"dropdownSettings\"\n                      >\n                        <c-badge>\n                          <ng-template let-item=\"item\">\n                            <label style=\"margin: 0px;\">{{item.first_name}} {{ item.last_name}}</label>\n                          </ng-template>\n                        </c-badge>\n                      </angular2-multiselect>\n                      <!--<select class=\"form-control\"-->\n                              <!--id=\"agents\"-->\n                              <!--name=\"agentIds\"-->\n                              <!--[(ngModel)]=\"dep.agents\"-->\n                              <!--multiple>-->\n                          <!--<option [value]=\"item.id\" *ngFor=\"let item of (afterLoginState | async).agent.list; let i = index\">-->\n                              <!--{{item.first_name}} {{item.last_name}}-->\n                          <!--</option>-->\n                      <!--</select>-->\n                    </div>\n                  </div>\n                    <div class=\"col-md-1 createAgentBtn\"  *ngIf=\"selected.value > 0\">\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"CreateAgent(template)\" id=\"createAgent\"><i class=\"fa fa-plus\"> </i> Create Agent</button>\n                        </div>\n                    </div>\n\n                </div>\n              </div>\n              <div class=\"col-md-6\" *ngIf=\"selected.value > 0\">\n                <div class=\"form-group\" [ngClass]=\"(dName.invalid && dName.touched) ? 'has-error': ''\">\n                  <label class=\"control-label\" for=\"name\">\n                    <i *ngIf=\"dName.invalid && dName.touched\" class=\"fa fa-times-circle-o\"></i>\n                    Department Name\n                  </label>\n                  <input type=\"text\"\n                         class=\"form-control\"\n                         id=\"name\"\n                         name=\"departmentName\"\n                         [ngModel]=\"dep.departmentName\"\n                         #dName=\"ngModel\"\n                         required\n                         placeholder=\"Enter ...\"\n                  >\n                  <span *ngIf=\"dName.invalid && dName.touched\"\n                        class=\"help-block\">Your Department Name is Required!</span>\n                </div>\n              </div>\n              <div class=\"col-md-6\" *ngIf=\"selected.value > 0\">\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': dDes.invalid && dDes.touched }\">\n                  <label class=\"control-label\" for=\"detail\">\n                    <i *ngIf=\"dDes.invalid && dDes.touched\" class=\"fa fa-times-circle-o\"></i>\n                    Department Description\n                  </label>\n                  <input type=\"text\"\n                         class=\"form-control\"\n                         id=\"detail\"\n                         name=\"departmentDetails\"\n                         ngModel\n                         [ngModel]=\"dep.departmentDetails\"\n                         #dDes=\"ngModel\"\n                         required\n                         placeholder=\"Enter ...\"\n                  >\n                  <span *ngIf=\"dDes.invalid && dDes.touched\"\n                        class=\"help-block\">Your Department Description is Required!</span>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"box-footer\">\n                  <button type=\"submit\"\n                          [disabled]=\"form.invalid || selected.value <= 0\"\n                          class=\"btn btn-primary pull-right\"\n                  >\n                    <i *ngIf=\"loader\" class=\"fa fa-spinner fa-spin\"></i> Submit\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-body\" *ngIf=\"!(authState | async).twilioIsActive\">\n            <h4>Twilio Credentials Not Added by SuperAdmin :-(</h4>\n          </div>\n          <!-- /.box-body -->\n        </div>\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n      <ng-template #template>\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Create Agent </h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </div>\n          <div class=\"modal-body\">\n              <form #form=\"ngForm\">\n                  <input type=\"hidden\"\n                         id=\"parentId\"\n                         name=\"parentId\"\n                         [ngModel]=\"dep.userId\"\n                         #userId=\"ngModel\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\" [ngClass]=\"(firstName.invalid && firstName.touched) ? 'has-error': ''\">\n                              <label class=\"control-label\" for=\"firstName\">First Name\n                                  <i *ngIf=\"firstName.invalid && firstName.touched\" class=\"fa fa-times-circle-o\"></i>\n                              </label>\n                              <input type=\"text\"\n                                     class=\"form-control\"\n                                     id=\"firstName\"\n                                     name=\"firstName\"\n                                     [ngModel]=\"agent.firstName\"\n                                     #firstName=\"ngModel\"\n                                     required\n                                     placeholder=\"First Name\"\n                              >\n                              <span *ngIf=\"firstName.invalid && firstName.touched\" class=\"help-block\">Your First Name is Required !</span>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\" [ngClass]=\"(lastName.invalid && lastName.touched) ? 'has-error': ''\">\n                              <label class=\"control-label\" for=\"lastName\">Last Name\n                                  <i *ngIf=\"lastName.invalid && lastName.touched\" class=\"fa fa-times-circle-o\"></i>\n                              </label>\n                              <input type=\"text\"\n                                     class=\"form-control\"\n                                     id=\"lastName\"\n                                     name=\"lastName\"\n                                     [ngModel]=\"agent.lastName\"\n                                     #lastName=\"ngModel\"\n                                     required\n                                     placeholder=\"Last Name\"\n                              >\n                              <span *ngIf=\"lastName.invalid && lastName.touched\"\n                                    class=\"help-block\">Your Last Name is Required !</span>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\" [ngClass]=\"(email.invalid && email.touched) ? 'has-error': ''\">\n                              <label class=\"control-label input-label-toggel\" for=\"email\">Email\n                                  <i *ngIf=\"email.invalid && email.touched\" class=\"fa fa-times-circle-o\"></i>\n                              </label>\n                              <input type=\"email\"\n                                     class=\"form-control input-box-toggel\"\n                                     id=\"email\"\n                                     name=\"email\"\n                                     [ngModel]=\"agent.email\"\n                                     #email=\"ngModel\"\n                                     email\n                                     required\n                                     placeholder=\"email\"\n                              >\n                              <div class=\"row filterSubmit\">\n                                  <label class=\"switch\">\n                                      <input type=\"checkbox\" name=\"isEmailNotification\" [(ngModel)]=\"agent.isemailNotification\" [checked]=\"isemailNotification\">\n                                      <span class=\"slider\"></span>\n                                  </label>\n                              </div>\n\n                              <span *ngIf=\"email.invalid && email.touched && form.controls.email?.errors.email\"\n                                    class=\"help-block\">Please Enter a Proper Email Address!</span>\n                              <span *ngIf=\"email.invalid && email.touched && form.controls.email?.errors.required\"\n                                    class=\"help-block\">Your Email Address is Required!</span>\n                          </div>\n                        </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\" [ngClass]=\"(phone.invalid && phone.touched) ? 'has-error': ''\">\n                                  <label class=\"control-label input-label-toggel\" for=\"phone\">Phone\n                                      <i *ngIf=\"phone.invalid && phone.touched\" class=\"fa fa-times-circle-o\"></i>\n                                  </label>\n                                  <input type=\"text\"\n                                         class=\"form-control input-box-toggel\"\n                                         [textMask]=\"{mask: mask, guide: false}\"\n                                         id=\"phone\"\n                                         placeholder=\"phone\"\n                                         [ngModel]=\"agent.phone\"\n                                         name=\"phone\"\n                                         required\n                                         ngModel\n                                         #phone=\"ngModel\"\n                                  >\n                                  <div class=\"row filterSubmit\">\n                                      <label class=\"switch\">\n                                          <input type=\"checkbox\" name=\"isPhoneNotification\" [(ngModel)]=\"agent.isPhoneNotification\" [checked]=\"isPhoneNotification\">\n                                          <span class=\"slider\"></span>\n                                      </label>\n                                  </div>\n                                  <span *ngIf=\"phone.invalid && phone.touched\"\n                                        class=\"help-block\">Your Phone Number is Required !</span>\n                              </div>\n                          </div>\n                      </div>\n                  <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-primary pull-right\" (click)=\"onCreateAgentSubmit(form)\"> <i *ngIf=\"createAgentLoader\" class=\"fa fa-spinner fa-spin\"></i> Submit</button>\n                  </div>\n                  </div>\n              </form>\n          </div>\n      </ng-template>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_admin_admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
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









var CreateDepartmentComponent = (function () {
    /** Service injection */
    function CreateDepartmentComponent(store, activatedRoute, cdr, router, modalService) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.router = router;
        this.modalService = modalService;
        this.editMode = false;
        this.dep = {
            userId: 0,
            departmentName: '',
            departmentDetails: '',
            agents: []
        };
        this.loader = false;
        this.createAgentLoader = false; /** Loader for add agent button */
        this.changedDepFlag = false;
        this.listOfAdmins = [];
        this.updatedlistOfAdmins = [];
        this.showThis = false;
        this.dropdownSettings = {};
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    /** Function to be executed when component initializes */
    CreateDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_admin_admin_actions__["q" /* GetAdminListAttempt */]());
        this.authState = this.store.select('auth');
        this.afterLoginState = this.store.select('afterLogin');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.dep.userId = data.userId;
                _this.loggedInAdminId = data.userId;
            }
        });
        if (this.dep.userId !== 0) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_agent_agent_actions__["w" /* GetAdminAgentListAttempt */]({ userId: this.dep.userId }));
        }
        this.afterLoginSubscription = this.store.select('afterLogin')
            .map(function (data) { return data.department.resetDepartmentForm; })
            .subscribe(function (data) {
            if (data) {
                _this.loader = false;
                _this.form.reset();
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_department_department_actions__["u" /* ResetDepartmentForm */]());
                if (!!_this.loggedInAdminId) {
                    _this.form.form.patchValue({ userId: _this.loggedInAdminId });
                }
            }
        });
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.editMode = data['editMode'];
            /** Perform operation is present mode is edit mode */
            if (_this.editMode) {
                /** Checking route params to get id of department to edit */
                _this.depId = _this.activatedRoute.snapshot.params['id'];
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_department_department_actions__["o" /* GetToEditDepartmentAttempt */]({ departmentId: _this.depId }));
                _this.updateDep = _this.store.select('department')
                    .distinctUntilChanged()
                    .subscribe(function (dep) {
                    if (dep) {
                        if (dep.toEdit.department !== undefined) {
                            _this.changedDepFlag = true;
                            _this.dep.userId = dep.toEdit.department.user_id;
                            _this.dep.departmentName = dep.toEdit.department.department_name;
                            _this.dep.departmentDetails = dep.toEdit.department.department_details;
                            _this.dep.agents = dep.toEdit.agents;
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_agent_agent_actions__["w" /* GetAdminAgentListAttempt */]({ userId: _this.dep.userId }));
                            _this.adminName = dep.toEdit.department.user_details.first_name + ' ' + dep.toEdit.department.user_details.last_name;
                        }
                    }
                });
            }
        });
        this.adminList = this.store.select('afterLogin').map(function (data) { return data; })
            .subscribe(function (data) {
            if (data.admin.list) {
                _this.listOfAdmins = data.admin.list;
            }
        });
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Agents",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            primaryKey: 'id',
            labelKey: 'name'
        };
        /** Empty Agent option */
        this.agent = {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            isemailNotification: true,
            isPhoneNotification: true,
        };
    };
    /** Your code to update the model */
    CreateDepartmentComponent.prototype.ngAfterViewChecked = function () {
        this.cdr.detectChanges();
    };
    /** Un-subscribe from all subscription when component destroys */
    CreateDepartmentComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
        this.afterLoginSubscription.unsubscribe();
        this.adminList.unsubscribe();
    };
    /** Function call to create a new department */
    CreateDepartmentComponent.prototype.onCreateDep = function (form) {
        var _this = this;
        this.loader = true;
        if (this.editMode) {
            var data = __assign({}, form.value, { departmentId: this.depId });
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_department_department_actions__["i" /* EditDepartmentAttempt */](__assign({}, data)));
            /** Loader Show/Hide */
            this.store.select('alert')
                .map(function (data) { return data; })
                .subscribe(function (data) {
                if (data.show && data.type === 'danger') {
                    _this.loader = false;
                }
                else if (data.show && data.type === 'success') {
                    _this.router.navigate(['/department/list']);
                }
            }, function (error) { console.error(error); _this.loader = false; }, function () { _this.loader = false; });
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_department_department_actions__["c" /* AddDepartmentAttempt */](form.value));
        }
    };
    /** Function to get agent list depending on the selected admin */
    CreateDepartmentComponent.prototype.adminChanged = function (id) {
        if (!!id) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_agent_agent_actions__["w" /* GetAdminAgentListAttempt */]({ userId: id }));
        }
    };
    /** Function to filter by admin names */
    CreateDepartmentComponent.prototype.checkAdminname = function ($event) {
        this.showThis = true;
        return this.updatedlistOfAdmins = this.listOfAdmins.filter(function (item) { return item.first_name.toLowerCase().indexOf($event) !== -1; });
    };
    /** function to assign value to the hidden field */
    CreateDepartmentComponent.prototype.assignValue = function (id, first_name, last_name) {
        this.dep.userId = id;
        this.adminName = first_name + ' ' + last_name;
        this.showThis = false;
        this.adminChanged(id);
    };
    /** Function to reset the admin list when click on close */
    CreateDepartmentComponent.prototype.resetList = function () {
        this.adminName = "";
        this.showThis = true;
        this.dep.userId = 0;
    };
    /** Function to create agent modal*/
    CreateDepartmentComponent.prototype.CreateAgent = function (template) {
        console.log(this.dep.userId);
        this.bsModalRef = this.modalService.show(template);
    };
    /** Function to create agent */
    CreateDepartmentComponent.prototype.onCreateAgentSubmit = function (form) {
        var _this = this;
        this.createAgentLoader = true;
        /** Create Agent */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store_agent_agent_actions__["i" /* AddAgentAttempt */](form.value));
        /** Loader Show/Hide */
        this.store.select('alert')
            .map(function (data) { return data; })
            .subscribe(function (data) {
            if (data.show && data.type === 'danger') {
                _this.createAgentLoader = false;
            }
            else if (data.show && data.type === 'success') {
                _this.bsModalRef.hide();
                _this.store.select('afterLogin', 'agent', 'newAgentInfo')
                    .subscribe(function (data) {
                    _this.dep.agents.push({ id: data.id, first_name: data.first_name, last_name: data.last_name });
                });
            }
        }, function (error) { console.error(error); _this.createAgentLoader = false; }, function () { _this.createAgentLoader = false; });
    };
    return CreateDepartmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], CreateDepartmentComponent.prototype, "form", void 0);
CreateDepartmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-create-department',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _f || Object])
], CreateDepartmentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create-department.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/department-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_department_create_department_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_department_list_department_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__create_department_create_department_component__["a" /* CreateDepartmentComponent */], data: { editMode: false } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_department_list_department_component__["a" /* ListDepartmentComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_department_create_department_component__["a" /* CreateDepartmentComponent */], data: { editMode: true } },
    { path: '**', redirectTo: 'list' }
];
var DepartmentRoutingModule = (function () {
    function DepartmentRoutingModule() {
    }
    return DepartmentRoutingModule;
}());
DepartmentRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], DepartmentRoutingModule);

//# sourceMappingURL=department-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/department.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_department_create_department_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/create-department/create-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_department_list_department_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__department_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/department-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__departmentSearch_pipe__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/departmentSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DepartmentModule = (function () {
    function DepartmentModule() {
    }
    return DepartmentModule;
}());
DepartmentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__department_routing_module__["a" /* DepartmentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__["TextMaskModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__create_department_create_department_component__["a" /* CreateDepartmentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__list_department_list_department_component__["a" /* ListDepartmentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__departmentSearch_pipe__["a" /* DepartmentSearchPipe */]
        ]
    })
], DepartmentModule);

//# sourceMappingURL=department.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/departmentSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__ = __webpack_require__("../../../../ngx-bootstrap/chronos/test/chain.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DepartmentSearchPipe = (function () {
    function DepartmentSearchPipe() {
    }
    DepartmentSearchPipe.prototype.transform = function (items, companySearch, term) {
        if (!items) {
            return [];
        }
        return items.filter(function (el) {
            // check for first name
            if (companySearch && companySearch !== '') {
                var companyLower = companySearch.toLowerCase().trim();
                if (el.company_name != null && el.company_name.toLowerCase() === companyLower) {
                    if (term && term !== undefined) {
                        var termLower = term.toLowerCase().trim();
                        if (el.department_name != null && el.department_name.toLowerCase().indexOf(termLower) > -1) {
                            return el.department_name.toLowerCase().indexOf(termLower) > -1;
                        }
                        else {
                            // check for department details
                            if (el.department_details != null && el.department_details.toLowerCase().indexOf(termLower) > -1) {
                                return el.department_details.toLowerCase().indexOf(termLower) > -1;
                            }
                            else {
                                // search for company name
                                if (el.company_name != null && el.company_name.toLowerCase().indexOf(termLower) > -1) {
                                    return el.company_name.toLowerCase().indexOf(termLower) > -1;
                                }
                                else {
                                    // check with date field
                                    if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                        return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        return el.company_name.toLowerCase() === companyLower;
                    }
                }
            }
            else if (companySearch === '' && term !== undefined) {
                var termLower = term.toLowerCase().trim();
                if (el.department_name != null && el.department_name.toLowerCase().indexOf(termLower) > -1) {
                    return el.department_name.toLowerCase().indexOf(termLower) > -1;
                }
                else {
                    // check for department details
                    if (el.department_details != null && el.department_details.toLowerCase().indexOf(termLower) > -1) {
                        return el.department_details.toLowerCase().indexOf(termLower) > -1;
                    }
                    else {
                        // search for company name
                        if (el.company_name != null && el.company_name.toLowerCase().indexOf(termLower) > -1) {
                            return el.company_name.toLowerCase().indexOf(termLower) > -1;
                        }
                        else {
                            // check with date field
                            if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
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
    return DepartmentSearchPipe;
}());
DepartmentSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], DepartmentSearchPipe);

//# sourceMappingURL=departmentSearch.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:520px){\n  .box{\n    overflow-x: scroll;\n}\n}\n.filter {\n  padding-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!--<section class=\"content-header\">-->\n        <!--<h1>Departments</h1>-->\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a href=\"javascript:void(0)\">Department</a></li>-->\n            <!--<li class=\"active\"><a href=\"javascript:void(0)\">List</a></li>-->\n        <!--</ol>-->\n    <!--</section>-->\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box box-primary\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">List of all Departments</h3>\n                    </div>\n                    <!-- /.box-header -->\n                    <div class=\"box-body\">\n                        <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n                          <div class=\"row filter\">\n                            <div class=\"col-sm-4\" *ngIf=\"!(authState | async).isAdmin;\">\n                              company :\n                              <select class='select-option' [(ngModel)]='companySearch'>\n                                <option value=\"\">Filter by company</option>\n                                <option class='option' *ngFor='let option of companyList' [value]=\"option.company\">{{option.company}}</option>\n                              </select>\n                            </div>\n                            <div class=\"col-sm-8\">Search : <input [(ngModel)]=\"term\" placeholder=\"All keywords\"></div>\n                          </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <table id=\"departmentListTable\" class=\"table table-bordered table-hover dataTable\" role=\"grid\" aria-describedby=\"example2_info\">\n                                        <thead>\n                                        <tr role=\"row\">\n                                            <th rowspan=\"1\" colspan=\"1\" >#</th>\n                                            <th rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Department Name </th>\n                                            <th rowspan=\"1\" colspan=\"1\" >Department Description</th>\n                                            <th rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Company </th>\n                                            <th rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Created Date</th>\n                                            <th rowspan=\"1\" colspan=\"1\" >Actions</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr role=\"row\" class=\"odd\" *ngFor=\"let item of (afterLoginState | async).department.list | filter : companySearch: term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                                            <td>{{i+1}}</td>\n                                            <td>{{item.department_name}}</td>\n                                            <td>{{item.department_details | slice:0:120 }}</td>\n                                            <!--<td>{{item.user_details?.company}}</td>-->\n                                            <td>{{item.company_name}}</td>\n                                            <td>{{item.created_at | amUtc | amDateFormat:'MMMM DD YYYY' }}</td>\n                                            <td>\n                                                <!--<button type=\"button\" class=\"btn btn-primary btn-xs\">-->\n                                                    <!--<i class=\"fa fa-search\" aria-hidden=\"true\"></i>-->\n                                                     <!--View-->\n                                                <!--</button>-->\n                                                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"onEdit(item.id)\">\n                                                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                                </button>\n                                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"preDelete(item.id, template)\">\n                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"row\">\n                                        <pagination-controls class=\"older_post_text\"\n                                                             (pageChange)=\"page=$event\"\n                                                             maxSize=\"9\"\n                                                             directionLinks=\"true\"\n                                                             autoHide=\"true\"\n                                                             previousLabel=\"\"\n                                                             nextLabel=\"\"\n                                                             screenReaderPaginationLabel=\"\"\n                                                             screenReaderPageLabel=\"page\"\n                                                             screenReaderCurrentLabel=\"You're on page\">\n                                        </pagination-controls>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- Pagination -->\n                        </div>\n                    </div>\n                    <!-- /.box-body -->\n                </div>\n                <!-- /.box -->\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Department Delete</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\" *ngIf=\"deleteCheckList['agents'] !== undefined && deleteCheckList['agents'].length > 0\">\n        <div class=\"col-md-12\">\n          <div class=\"col-md-8\">\n          <h5>Following agents will be free after deleting this department:</h5>\n        </div>\n          <div class=\"col-md-4\">\n            <div class=\"row\" *ngFor=\"let department of deleteCheckList['agents']\">\n              <div class=\"col-md-12\">\n                <h5>{{ department.first_name + ' ' + department.last_name}}</h5>\n              </div>\n            </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"deleteCheckList['widgets'] !== undefined && deleteCheckList['widgets'].length > 0\">\n        <div class=\"col-md-12\">\n          <div class=\"col-md-8\">\n            <h5>Following widgets will be free after deleting this department:</h5>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"row\" *ngFor=\"let widgets of deleteCheckList['widgets']\">\n              <div class=\"col-md-12\">\n                <h5>{{ widgets.website }}</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"deleteCheckList['isSingleDepartmentWidgets']\">\n        <div class=\"col-md-12\">\n          <h4>There is some widgets which contains this department only,can't able to delete this department.</h4>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-warning btn-lg pull-right\" [disabled]=\"deleteCheckList['isSingleDepartmentWidgets']\" (click)=\"deleteDepartment(deleteCheckList.department.id)\">Delete</button>\n          <button class=\"btn btn-success btn-lg\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">Skip</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListDepartmentComponent = (function () {
    function ListDepartmentComponent(store, router, modalService) {
        this.store = store;
        this.router = router;
        this.modalService = modalService;
        this.order = 'info.name';
    }
    /** Function to be executed when component initializes */
    ListDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.companySearch = '';
        this.authState = this.store.select('auth');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: data.userId }));
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({}));
            }
        });
        this.afterLoginState = this.store.select('afterLogin');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isSuperAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_agent_agent_actions__["y" /* GetCompanyListAttempt */]({ userId: data.token }));
            }
        });
        /* Company List droupdown */
        this.companySubscription = this.store.select('afterLogin', 'agent').subscribe(function (data) {
            _this.companyList = data.comapnyList;
        });
    };
    /** Function call to start editing a department */
    ListDepartmentComponent.prototype.onEdit = function (depId) {
        this.router.navigate(['department/edit/', depId]);
    };
    ListDepartmentComponent.prototype.preDelete = function (dept_id, template) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_department_department_actions__["r" /* PreDeleteAttempt */]({ deptId: dept_id }));
        this.preDeleteSubscription = this.store.select('afterLogin', 'department', 'preDelete').subscribe(function (data) {
            _this.deleteCheckList = data;
        });
        this.bsModalRef = this.modalService.show(template);
    };
    ListDepartmentComponent.prototype.deleteDepartment = function (id) {
        this.bsModalRef.hide();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_department_department_actions__["f" /* DepartmentDeleteAttempt */]({ deptId: id }));
    };
    ListDepartmentComponent.prototype.ngOnDestroy = function () {
        this.companyList = null;
        this.authSubscription.unsubscribe();
        this.companySubscription.unsubscribe();
    };
    return ListDepartmentComponent;
}());
ListDepartmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-department',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/department/list-department/list-department.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object])
], ListDepartmentComponent);

var _a, _b, _c;
//# sourceMappingURL=list-department.component.js.map

/***/ })

});
//# sourceMappingURL=department.module.chunk.js.map
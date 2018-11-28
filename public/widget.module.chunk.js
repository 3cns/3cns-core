webpackJsonp(["widget.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n    display: block;\n}\n\ni.fa-upload {\n    position: absolute;\n}\n\ni.fa-upload, i.fa-times-circle {\n    cursor: pointer;\n}\n\ninput[type=file] {\n    opacity: 0;\n}\n\n\n\n\n/** css for auto complite droupdown */\n\n.btn-disabled {\n    opacity: .4;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.autoListArea{\n    position: relative;\n}\n.autoList{\n    position: absolute;\n    left: 0;\n    top: 100%;\n    background: #fff;\n    width: 100%;\n    max-height: 200px;\n    overflow-y: scroll;\n    box-shadow: 0 3px 5px rgba(0,0,0,0.3);\n    border: 1px solid #e2e2e2;\n    z-index: 99;\n    padding: 0;\n}\n.autoList li{\n    list-style: none;\n}\n.autoList li span{\n    display: block;\n    padding: 5px 15px;\n}\n.autoList li:hover{\n    background: #e2e2e2;\n}\n.hideList{\n    float: right;\n    margin: -27px 10px 0 0;\n    cursor: pointer;\n}\n\n.createAgentBtn{\n    padding-top: 29px;\n}\n\n/*Media Query for responsive*/\n@media screen and (max-width:764px) {\n    .createAgentBtn {\n        padding-top: 0px !important;\n    }\n}\n\n\n.checkbox label:after,\n.radio label:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n.checkbox .cr,\n.radio .cr {\n  position: relative;\n  display: inline-block;\n  border: 1px solid #a9a9a9;\n  border-radius: .25em;\n  width: 1.3em;\n  height: 1.3em;\n  float: left;\n  margin-right: .5em;\n}\n\n.radio .cr {\n  border-radius: 50%;\n}\n\n.checkbox .cr .cr-icon,\n.radio .cr .cr-icon {\n  position: absolute;\n  font-size: .8em;\n  line-height: 0;\n  top: 50%;\n  left: 20%;\n}\n\n.radio .cr .cr-icon {\n  margin-left: 0.04em;\n}\n\n.checkbox label input[type=\"checkbox\"],\n.radio label input[type=\"radio\"] {\n  display: none;\n}\n\n.checkbox label input[type=\"checkbox\"] + .cr > .cr-icon,\n.radio label input[type=\"radio\"] + .cr > .cr-icon {\n  transform: scale(3) rotateZ(-20deg);\n  opacity: 0;\n  transition: all .3s ease-in;\n}\n\n.checkbox label input[type=\"checkbox\"]:checked + .cr > .cr-icon,\n.radio label input[type=\"radio\"]:checked + .cr > .cr-icon {\n  transform: scale(1) rotateZ(0deg);\n  opacity: 1;\n}\n\n.checkbox label input[type=\"checkbox\"]:disabled + .cr,\n.radio label input[type=\"radio\"]:disabled + .cr {\n  opacity: .5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!--<section class=\"content-header\">-->\n  <!--<h1><span>Widget Section</span></h1>-->\n  <!--<ol class=\"breadcrumb\">-->\n  <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n  <!--<li><a routerLink=\"/widget/list\"> Widget</a></li>-->\n  <!--<li class=\"active\"><a  href=\"javascript:void(0)\"> {{ editMode ? 'Edit' : 'Create' }} </a></li>-->\n  <!--</ol>-->\n  <!--</section>-->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <!-- /.box-header -->\n          <div class=\"box-body\" *ngIf=\"(authState | async).twilioIsActive\">\n            <form #form=\"ngForm\">\n\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">\n                  <span *ngIf=\"editMode\">Edit </span>\n                  <span *ngIf=\"!editMode\">Create </span>\n                  Widget\n                </h3>\n              </div>\n\n              <div class=\"row\">\n\n                <!-- Admin for Widget -->\n                <div class=\"col-md-6\" [hidden]=\"(authState | async).isAdmin\">\n                  <div class=\"form-group autoListArea\">\n                    <label class=\"control-label\" for=\"admin\">\n                      Admin for Widget\n                    </label>\n\n                    <div *ngIf=\"(authState | async).isAdmin; then thenTemplateName else elseTemplateName\"></div>\n\n                    <ng-template #thenTemplateName>\n                      <input type=\"text\" class=\"form-control\"\n                             name=\"adminName\" autocomplete=\"off\" readonly [value]=\"(authState | async).name\">\n                    </ng-template>\n\n                    <ng-template #elseTemplateName>\n                      <input type=\"text\" (keyup)=\"checkAdminname($event.target.value)\"\n\n                        [ngClass]=\"editMode ?  'form-control' : 'form-control' \"\n                        [ngModel]=\"adminName\" name=\"adminName\" (click)=\"checkAdminname($event.target.value)\"\n                             autocomplete=\"off\" [readonly]=\"editMode\">\n                      <span *ngIf=\"( !editMode && this.adminName)\" (click)=\"resetList()\" class=\"hideList\"> <i\n                        class=\"fa fa-close\"></i> </span>\n                      <ul *ngIf=\"showThis\" class=\"autoList\">\n                        <li *ngFor=\"let item of updatedlistOfAdmins; let i = index\">\n                          <span (click)=\"assignValue(item.id,item.first_name,item.last_name)\">  {{item.first_name}} {{item.last_name}}  </span>\n                        </li>\n                      </ul>\n                    </ng-template>\n                    <input type=\"hidden\"  [ngModel]=\"widget.userId\" id=\"admin\" name=\"userId\" #selectedAdmin>\n\n\n                    <!--<select class=\"form-control\"-->\n                    <!--id=\"admin\"-->\n                    <!--name=\"userId\"-->\n                    <!--[disabled]=\"editMode || (authState | async).isAdmin\"-->\n                    <!--#selectedAdmin-->\n                    <!--[ngModel]=\"widget.userId\"-->\n                    <!--(change)=\"adminChanged(selectedAdmin.value)\">-->\n                    <!--<option selected value=\"0\">Choose...</option>-->\n                    <!--<option [value]=\"item.id\"-->\n                    <!--*ngFor=\"let item of (afterLoginState | async).admin?.list; let i = index\">-->\n                    <!--{{item.first_name}} {{item.last_name}}-->\n                    <!--</option>-->\n                    <!--</select> OLD SELECT -->\n                  </div>\n                </div>\n\n                <!-- Department -->\n                <div class=\"col-md-6\">\n                  <div class=\"col-md-10\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"department\">\n                        Department for Widget\n                      </label>\n                      <angular2-multiselect\n                        id=\"department\" name=\"departmentIdArray\"\n                        [data]=\"(afterLoginState | async).department.list\"\n                        [(ngModel)]=\"widget.departmentIdArray\" [settings]=\"dropdownSettings\"\n                      >\n                        <c-badge>\n                          <ng-template let-item=\"item\">\n                            <label style=\"margin: 0px;\">{{item.department_name}}</label>\n                          </ng-template>\n                        </c-badge>\n                      </angular2-multiselect>\n                      <!--<select class=\"form-control\"\n                              id=\"department\"\n                              name=\"departmentIdArray\"\n                              #selectedDepartment=\"ngModel\"\n                              [ngModel]=\"widget.departmentIdArray\" multiple>\n                          <option [value]=\"item.id\"\n                                  *ngFor=\"let item of (afterLoginState | async).department.list\">\n                              {{item.department_name}}\n                          </option>\n                      </select>-->\n                    </div>\n                  </div>\n                  <div class=\"col-md-2 createAgentBtn\">\n                    <div class=\"form-group\">\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"CreateDepartment(template)\"><i\n                        class=\"fa fa-plus\"> </i> Create Department\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- Widget Description -->\n                <div class=\"col-md-6\"  [hidden]=\"!(authState | async).isAdmin\">\n                  <div class=\"form-group\"\n                    [ngClass]=\"(details.invalid && details.touched) ? 'has-error': ''\">\n                    <label class=\"control-label\" for=\"details\">\n                      <i *ngIf=\"details.invalid && details.touched\"\n                        class=\"fa fa-times-circle-o\">\n                      </i>\n                      Widget Description\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"details\"\n                           name=\"details\"\n                      [ngModel]=\"widget.details\"\n                      #details=\"ngModel\"\n                           placeholder=\"Description about the widget ....\"\n                    >\n                    <span *ngIf=\"details.invalid && details.touched\"\n                      class=\"help-block\">Widget Description is Required !</span>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n\n                <!-- Web Site URL -->\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\"\n                    [ngClass]=\"(website.invalid && website.touched) ? 'has-error': ''\">\n                    <label class=\"control-label\" for=\"website\">\n                      <i *ngIf=\"website.invalid && website.touched\"\n                        class=\"fa fa-times-circle-o\">\n                      </i>\n                      Website URL\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"website\"\n                           name=\"website\"\n                      [ngModel]=\"widget.website\"\n                      #website=\"ngModel\"\n                           placeholder=\"Website URL\"\n                    >\n                    <span *ngIf=\"website.invalid && website.touched\" class=\"help-block\">Website URL is Required !</span>\n                  </div>\n                </div>\n\n                <!-- Widget Description -->\n                <div class=\"col-md-6\"   [hidden]=\"(authState | async).isAdmin\">\n                  <div class=\"form-group\"\n                    [ngClass]=\"(details.invalid && details.touched) ? 'has-error': ''\">\n                    <label class=\"control-label\" for=\"details\">\n                      <i *ngIf=\"details.invalid && details.touched\"\n                        class=\"fa fa-times-circle-o\">\n                      </i>\n                      Widget Description\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"details\"\n                           name=\"details\"\n                      [ngModel]=\"widget.details\"\n                      #details=\"ngModel\"\n                           placeholder=\"Description about the widget ....\"\n                    >\n                    <span *ngIf=\"details.invalid && details.touched\"\n                      class=\"help-block\">Widget Description is Required !</span>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\" *ngIf=\"widget.script_url\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">\n                      Script URL\n                    </label>\n                  </div>\n                  {{widget.script_url}}\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n\n                <!-- TimeZone -->\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"timezone\">\n                      Timezone\n                    </label>\n                    <select class=\"form-control\"\n                            id=\"timezone\"\n                            name=\"scheduleTimezone\"\n                      #selectedTimezone\n                            required\n                      [ngModel]=\"widget.scheduleTimezone\"\n                    >\n                      <option selected value=\"0\">Choose...</option>\n                      <option [value]=\"item.id\"\n                        *ngFor=\"let item of (afterLoginState | async).widget?.timezoneList; let i = index\"\n                      >\n                        {{item.timezone_name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"timeout\">\n                      Transfer Timeout\n                    </label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"timeout\"\n                           name=\"timeout\"\n                      [ngModel]=\"widget.transferTimeout\"\n                      #transferTimeout=\"ngModel\"\n                           placeholder=\"Please put a timout in 00:00 format\"\n                    >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"control-label\" for=\"image\">Widget Logo </label>\n                    <i class=\"fa fa-upload fa-4x\" aria-hidden=\"true\"></i>\n                    <input type=\"file\"\n                           class=\"form-control\"\n                           id=\"image\"\n                      (change)=\"fileUploaded($event)\"\n                           accept=\"image/*\"\n                           name=\"image\"\n                           ngModel\n                      #fileUpload=\"ngModel\"\n\n                    >\n                  </div>\n                  <span *ngIf=\"fileUpload.invalid && fileUpload.touched && postedImage===undefined\" class=\"help-block\">Website URL is Required!</span>\n                  <div class=\"col-md-6\" *ngIf=\"!hideUploadedImage\">\n                    <div class=\"image\" *ngIf=\"imgSrc\">\n                      <i class=\"fa fa-times-circle fa-pull-right\"\n                         aria-hidden=\"true\"\n                        (click)=\"removeUploadedImage()\"\n                      ></i>\n                      <img class=\"img-responsive uploaded-image\"\n                           width=\"100%\"\n                           height=\"auto\"\n                        [src]=\"imgSrc\"\n                      />\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Limit setting time & days </label>\n                    <!--<div *ngFor=\"let data of limitArray\" id=\"settings\">-->\n                    <!--<input type=\"checkbox\" name=\"daysArray\" [checked]=\"widget.daysArray.indexOf(data) > -1\" (change)=\"onChangeDaysArray(data, $event.target.checked)\"> {{data}}<br>-->\n                    <!--</div>-->\n                    <div class=\"table-striped\">\n                      <table class=\"table table-responsive \">\n                        <tr>\n                          <th>Day</th>\n                          <th>Start Time</th>\n                          <th>End Time</th>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"sunCbk\"\n                                       id=\"sunCbk\" [checked]=\"checkSun\" (click)=\"OpenTimer(1)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Sunday\n                              </label>\n                            </div>\n                          </td>\n                          <td  *ngIf=\"checkSun\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(sunStartTime.invalid && sunStartTime.touched) ? 'has-error': ''\">\n                              <!--<div class=\"col-md-6\">-->\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.sunCbk.startTime\" name=\"sunStartTime\"\n                                                                             class=\"form-control\" #sunStartTime=\"ngModel\"\n                                                                             required id=\"sunStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(1)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"sunStartTime.invalid && sunStartTime.touched && sunStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td  *ngIf=\"checkSun\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(sunEndTime.invalid && sunEndTime.touched) || sunTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.sunCbk.endTime\" name=\"sunEndTime\" #sunEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"sunEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(1)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"sunTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"sunEndTime.invalid && sunEndTime.touched && sunEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"monCbk\"  [checked]=\"checkMon\"   (click)=\"OpenTimer(2)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Monday\n                              </label>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkMon\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(monStartTime.invalid && monStartTime.touched) ? 'has-error': ''\">\n                              <!--<div class=\"col-md-6\">-->\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.monCbk.startTime\" name=\"monStartTime\"\n                                                                             class=\"form-control\" #monStartTime=\"ngModel\"\n                                                                             required id=\"startTime1\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(2)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"monStartTime.invalid && monStartTime.touched && monStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkMon\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(monEndTime.invalid && monEndTime.touched) || monTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.monCbk.endTime\" name=\"monEndTime\" #monEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"endTime1\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(2)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"monTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"monEndTime.invalid && monEndTime.touched && monEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"tueCbk\" [checked]=\"checkTue\"  (click)=\"OpenTimer(3)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Tuesday\n                              </label>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkTue\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(tueStartTime.invalid && tueStartTime.touched) ? 'has-error': ''\">\n                              <!--<div class=\"col-md-6\">-->\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.tueCbk.startTime\" name=\"tueStartTime\"\n                                                                             class=\"form-control\" #tueStartTime=\"ngModel\"\n                                                                             required id=\"tueStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(3)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"tueStartTime.invalid && tueStartTime.touched && tueStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkTue\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(tueEndTime.invalid && tueEndTime.touched) || tueTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.tueCbk.endTime\" name=\"tueEndTime\" #tueEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"tueEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(3)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"tueTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"tueEndTime.invalid && tueEndTime.touched && tueEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"wedCbk\"\n                                       id=\"wedCbk\" [checked]=\"checkWed\" (click)=\"OpenTimer(4)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Wednesday\n                              </label>\n                            </div>\n                          </td>\n\n                          <td *ngIf=\"checkWed\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(wedStartTime.invalid && wedStartTime.touched) ? 'has-error': ''\">\n                              <!--<div class=\"col-md-6\">-->\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.wedCbk.startTime\" name=\"wedStartTime\"\n                                                                             class=\"form-control\" #wedStartTime=\"ngModel\"\n                                                                             required id=\"wedStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(4)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"wedStartTime.invalid && wedStartTime.touched && wedStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkWed\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(wedEndTime.invalid && wedEndTime.touched) || wedTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.wedCbk.endTime\" name=\"wedEndTime\" #wedEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"wedEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(4)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"wedTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"wedEndTime.invalid && wedEndTime.touched && wedEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"thuCbk\"\n                                       id=\"thuCbk\" [checked]=\"checkThu\" (click)=\"OpenTimer(5)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Thursday\n                              </label>\n                            </div>\n                          </td>\n\n\n                          <td *ngIf=\"checkThu\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(thuStartTime.invalid && thuStartTime.touched) ? 'has-error': ''\">\n                              <!--<div class=\"col-md-6\">-->\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.thuCbk.startTime\" name=\"thuStartTime\"\n                                                                             class=\"form-control\" #thuStartTime=\"ngModel\"\n                                                                             required id=\"thuStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(5)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"thuStartTime.invalid && thuStartTime.touched && thuStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkThu\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(thuEndTime.invalid && thuEndTime.touched) || thuTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.thuCbk.endTime\" name=\"thuEndTime\" #thuEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"thuEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(5)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"thuTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"thuEndTime.invalid && thuEndTime.touched && thuEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"friCbk\"  [checked]=\"checkFri\" (click)=\"OpenTimer(6)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Friday\n                              </label>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkFri\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(friStartTime.invalid && friStartTime.touched) ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.friCbk.startTime\" name=\"friStartTime\"\n                                                                             class=\"form-control\" #friStartTime=\"ngModel\"\n                                                                             required id=\"friStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(6)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"friStartTime.invalid && friStartTime.touched && friStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkFri\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(friEndTime.invalid && friEndTime.touched) || friTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.friCbk.endTime\" name=\"friEndTime\" #friEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"friEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(6)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"friTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"friEndTime.invalid && friEndTime.touched && friEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" name=\"satCbk\"\n                                       id=\"satCbk\"  [checked]=\"checkSat\" (click)=\"OpenTimer(7)\">\n                                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                                Saturday\n                              </label>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkSat\">\n                            <div\n                              class=\"col-md-6\" [ngClass]=\"(satStartTime.invalid && satStartTime.touched) ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.satCbk.startTime\" name=\"satStartTime\"\n                                                                             class=\"form-control\" #satStartTime=\"ngModel\"\n                                                                             required id=\"satStartTime\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openStartTimePiker(7)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"satStartTime.invalid && satStartTime.touched && satStartTime.errors?.required\"\n                                  class=\"help-block\">Start Time is Required!</span>\n                              </div>\n                            </div>\n                          </td>\n                          <td *ngIf=\"checkSat\">\n                            <div\n                              class=\"col-md-6\"  [ngClass]=\"(satEndTime.invalid && satEndTime.touched) || satTimePikerError ? 'has-error': ''\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input [ngModel]=\"widget.satCbk.endTime\" name=\"satEndTime\" #satEndTime=\"ngModel\"\n                                                                           class=\"form-control\"  [required]=\"'required'\"\n                                                                           type=\"text\"\n                                                                           id=\"satEndTime\" (ngModelChange)=\"log2($event)\"/>\n                                  <span class=\"input-group-addon\" (click)=\"openEndTimePiker(7)\"><i\n                                    class=\"glyphicon glyphicon-time\"></i></span>\n                                </div>\n                                <span *ngIf=\"satTimePikerError\"\n                                  class=\"help-block\">End Time Should after Start Time</span>\n                                <span *ngIf=\"satEndTime.invalid && satEndTime.touched && satEndTime.errors?.required\"\n                                  class=\"help-block\">End Time is Required</span>\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                      </table>\n                    </div>\n                    <!--<span *ngIf=\"widget.daysArray.length === 0\" class=\"help-block\" style=\"color: red !important;\">Choosing Available Days is Required!</span>-->\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <!-- From Time -->\n                <!--<div class=\"col-md-6\" [ngClass]=\"(startTime.invalid && startTime.touched) ? 'has-error': ''\">-->\n                <!--&lt;!&ndash;<div class=\"col-md-6\">&ndash;&gt;-->\n                <!--<div class=\"form-group\">-->\n                <!--<label class=\"control-label\" for=\"startTime\">-->\n                <!--<i *ngIf=\"startTime.invalid && startTime.touched\"-->\n                <!--class=\"fa fa-times-circle-o\">-->\n                <!--</i>-->\n                <!--From Time-->\n                <!--</label>-->\n                <!--<div class=\"input-group\">-->\n                <!--<input [ngModel]=\"widget.startTime\" name=\"startTime\" class=\"form-control\" #startTime=\"ngModel\" required id=\"startTime\"/>-->\n                <!--<span class=\"input-group-addon\" (click)=\"openTimer()\"><i class=\"glyphicon glyphicon-time\"></i></span>-->\n                <!--</div>-->\n                <!--<span *ngIf=\"startTime.invalid && startTime.touched && startTime.errors?.required\" class=\"help-block\">Start Time is Required!</span>-->\n                <!--</div>-->\n\n                <!--</div>-->\n\n                <!-- To Time -->\n                <!--<div class=\"col-md-6\"  [ngClass]=\"(endTime.invalid && endTime.touched) || timePikerError ? 'has-error': ''\">-->\n                <!--<div class=\"form-group\" >-->\n                <!--<label class=\"control-label\" for=\"endTime\">-->\n                <!--<i *ngIf=\"(endTime.invalid && endTime.touched) || timePikerError\" class=\"fa fa-times-circle-o\"> </i>-->\n                <!--To Time-->\n                <!--</label>-->\n                <!--<div class=\"input-group\">-->\n                <!--<input [ngModel]=\"widget.endTime\" name=\"endTime\" #endTime=\"ngModel\" class=\"form-control\"  [required]=\"'required'\" type=\"text\" id=\"endTime\" (ngModelChange)=\"log2($event)\"/>-->\n                <!--<span class=\"input-group-addon\" (click)=\"openEndTimer()\"><i class=\"glyphicon glyphicon-time\"></i></span>-->\n                <!--</div>-->\n                <!--<span *ngIf=\"timePikerError\" class=\"help-block\">End Time Should after Start Time</span>-->\n                <!--<span *ngIf=\"endTime.invalid && endTime.touched && endTime.errors?.required\" class=\"help-block\">End Time is Required</span>-->\n\n                <!--</div>-->\n                <!--</div>-->\n              </div>\n              <div class=\"row\">\n                <!-- Area Code -->\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"areaCode\">Area Code</label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           id=\"areaCode\"\n                           name=\"areaCode\"\n                      #areaCode\n                      [ngModel]=\"widget.areaCode\"\n                           placeholder=\"Area Code\"\n                    >\n                  </div>\n                </div>\n\n                <!-- Widget Details -->\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"contains\">\n                      Number Contains\n                    </label>\n                    <input type=\"number\"\n                           class=\"form-control\"\n                           id=\"contains\"\n                           name=\"contains\"\n                      [ngModel]=\"widget.contains\"\n                      #contains\n                           placeholder=\"Number Contains ....\"\n                    >\n                  </div>\n                </div>\n                <!--Buy number buttons -->\n                <div class=\"col-md-2\" *ngIf=\"!editMode\">\n                  <label class=\"control-label\"> &nbsp; </label>\n                  <button type=\"button\"\n                          class=\"form-control btn btn-success\" (click)=\"buyNumber(areaCode.value,contains.value)\">\n                    <i *ngIf =\"buyButtonLoader\" class=\"fa fa-spinner fa-spin\"> </i> Get Number\n                  </button>\n                </div>\n                <div class=\"col-md-2\" *ngIf=\"editMode\">\n                  <label class=\"control-label\"> &nbsp; </label>\n                  <button type=\"button\"\n                          class=\"form-control btn btn-success\" (click)=\"buyNumber(areaCode.value,contains.value)\">\n                    <i *ngIf =\"buyButtonLoader\" class=\"fa fa-spinner fa-spin\"> </i> Change Number\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"numberError && !isBuyNumber\">\n                <div class=\"col-md-10\">\n                  <span style=\"color: red;\">{{ numberErrorMessage }}</span>\n                </div>\n              </div>\n              <div\n                class=\"row\" *ngIf=\"(afterLoginState | async).widget.numberError && !(afterLoginState | async).widget.newSuccessBuyNumberCall\">\n                <div class=\"col-md-10\">\n                  <span style=\"color: red;\">{{ (afterLoginState | async).widget.numberMessage }}</span>\n                </div>\n              </div>\n              <div\n                class=\"row\" *ngIf=\"(afterLoginState | async).widget.numbers.length > 0 && !editMode && isBuyNumber && (afterLoginState | async).widget.newSuccessBuyNumberCall\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"numbers\">\n                      Choose a Number\n                    </label>\n                    <select class=\"form-control\"\n                            id=\"numbers\"\n                            name=\"number\"\n                      [ngModel]=\"widget.phoneNumber\" required>\n                      <option value=''>Choose a phone number</option>\n                      <option *ngFor=\"let item of (afterLoginState | async).widget.numbers\"\n                        [value]=\"item.number\"\n                      >\n                        {{ item.number }} &nbsp;&nbsp;&nbsp; (  {{item.capabilities.voice ? 'Voice  ' : '' }}\n                        {{ item.capabilities.SMS ? '/ SMS  ' : '' }}\n                        {{ item.capabilities.MMS ? '/ MMS  ' : ''}}\n                        {{ item.capabilities.fax ? '/ Fax  ' : '' }}  )\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div\n                class=\"row\" *ngIf=\"(afterLoginState | async).widget.numbers.length > 0 && editMode && isBuyNumber && (afterLoginState | async).widget.newSuccessBuyNumberCall\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"numbers\">\n                      Choose a Number\n                    </label>\n                    <select class=\"form-control\"\n                            id=\"numbers\"\n                            name=\"number\"\n                      [ngModel]=\"widget.phoneNumber\" required>\n                      <option value=''>Choose a phone number</option>\n                      <option *ngFor=\"let item of (afterLoginState | async).widget.numbers\"\n                        [value]=\"item.number\"\n                      >\n                        {{ item.number }} &nbsp;&nbsp;&nbsp; (  {{item.capabilities.voice ? 'Voice  ' : '' }}\n                        {{ item.capabilities.SMS ? '/ SMS  ' : '' }}\n                        {{ item.capabilities.MMS ? '/ MMS  ' : ''}}\n                        {{ item.capabilities.fax ? '/ Fax  ' : '' }}  )\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"editMode && !isBuyNumber\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"numbers\">\n                      Number\n                    </label>\n                    <input type=\"text\" name=\"number\" readonly [ngModel]=\"widget.phoneNumber\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"box-footer\">\n                  <button\n                    type=\"button\" [disabled]=\"form.invalid || ( (afterLoginState | async).widget.numbers.length == 0 && !editMode)\"\n                    class=\"btn btn-primary pull-right\" (click)=\"onSubmit(form)\">\n                    <i *ngIf =\"loader\" class=\"fa fa-spinner fa-spin\"></i>\n                    Submit\n                  </button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <div class=\"box-body\" *ngIf=\"!(authState | async).twilioIsActive\">\n            <h4>Twilio Credentials Not Added by SuperAdmin :-(</h4>\n          </div>\n          <!-- /.box-body -->\n        </div>\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Create Department </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body row\">\n        <form #form=\"ngForm\" (submit)=\"onCreateDep(form)\">\n          <input type=\"hidden\"\n                 id=\"userId\"\n                 name=\"userId\"\n            [ngModel]=\"dep.userId\"\n            #userId=\"ngModel\">\n          <div class=\"col-md-6\">\n\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"agents\">\n                Select Agents\n              </label>\n              <angular2-multiselect\n                id=\"agents\" name=\"agentIds\"\n                [data]=\"(afterLoginState | async).agent.list\"\n                [(ngModel)]=\"dep.agents\" [settings]=\"agentListDropdownSettings\"\n              >\n                <c-badge>\n                  <ng-template let-item=\"item\">\n                    <label style=\"margin: 0px;\">{{item.first_name}} {{ item.last_name}}</label>\n                  </ng-template>\n                </c-badge>\n              </angular2-multiselect>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"(dName.invalid && dName.touched) ? 'has-error': ''\">\n              <label class=\"control-label\" for=\"name\">\n                <i *ngIf=\"dName.invalid && dName.touched\" class=\"fa fa-times-circle-o\"></i>\n                Department Name\n              </label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     id=\"name\"\n                     name=\"departmentName\"\n                [ngModel]=\"dep.departmentName\"\n                #dName=\"ngModel\"\n                     required\n                     placeholder=\"Enter ...\"\n              >\n              <span *ngIf=\"dName.invalid && dName.touched\" class=\"help-block\">Your Department Name is Required!</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': dDes.invalid && dDes.touched }\">\n              <label class=\"control-label\" for=\"detail\">\n                <i *ngIf=\"dDes.invalid && dDes.touched\" class=\"fa fa-times-circle-o\"></i>\n                Department Description\n              </label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     id=\"detail\"\n                     name=\"departmentDetails\"\n                     ngModel\n                [ngModel]=\"dep.departmentDetails\"\n                #dDes=\"ngModel\"\n                     required\n                     placeholder=\"Enter ...\"\n              >\n              <span *ngIf=\"dDes.invalid && dDes.touched\"\n                class=\"help-block\">Your Department Description is Required!</span>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <button type=\"submit\"\n              [disabled]=\"form.invalid\"\n                    class=\"btn btn-primary pull-right\"\n            >\n              <i *ngIf=\"loader\" class=\"fa fa-spinner fa-spin\"></i> Submit\n            </button>\n          </div>\n        </form>\n      </div>\n    </ng-template>\n\n\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_admin_admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_amazing_time_picker__ = __webpack_require__("../../../../amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CreateWidgetComponent = (function () {
    /** Service injection */
    function CreateWidgetComponent(store, activatedRoute, cdr, element, atp, router, modalService) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.element = element;
        this.atp = atp;
        this.router = router;
        this.modalService = modalService;
        this.editMode = false;
        // startTime:any;
        this.widget = {
            id: 0,
            userId: 0,
            parentId: 0,
            departmentIdArray: [],
            website: '',
            scheduleTimezone: 0,
            details: '',
            areaCode: '',
            contains: '',
            daysArray: [],
            sunCbk: {
                startTime: '',
                endTime: '',
            },
            monCbk: {
                startTime: '',
                endTime: '',
            },
            tueCbk: {
                startTime: '',
                endTime: '',
            },
            wedCbk: {
                startTime: '',
                endTime: '',
            },
            thuCbk: {
                startTime: '',
                endTime: '',
            },
            friCbk: {
                startTime: '',
                endTime: '',
            },
            satCbk: {
                startTime: '',
                endTime: '',
            },
            startTime: '',
            endTime: '',
            image: '',
            script_url: '',
            phoneNumber: '',
            transferTimeout: '00:30',
        };
        this.loader = false;
        this.hideUploadedImage = true;
        this.listOfAdmins = [];
        this.updatedlistOfAdmins = [];
        this.showThis = true;
        this.dropdownSettings = {};
        this.agentListDropdownSettings = {};
        this.limitArray = [];
        this.departmentArrayId = [];
        this.departmentIdList = '';
        this.numberError = false;
        this.numberErrorMessage = '';
        this.isBuyNumber = false;
        this.availableNumbers = [];
        this.buyButtonLoader = false;
        this.departmentIdNewArray = [];
    }
    /** Function call when component initializes */
    CreateWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_admin_admin_actions__["q" /* GetAdminListAttempt */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["r" /* GetTimeZoneListAttempt */]());
        this.authState = this.store.select('auth');
        this.afterLoginState = this.store.select('afterLogin');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.widget.userId = data.userId;
                _this.loggedInAdminId = data.userId;
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: data.userId }));
                // this.store.dispatch(new AgentActions.GetAdminAgentListAttempt( { userId: data.userId}));
            }
        });
        this.activatedRoute.data.subscribe(function (data) {
            _this.editMode = data['editMode'];
            /** Perform operation is present mode is edit mode */
            if (_this.editMode) {
                _this.widgetId = _this.activatedRoute.snapshot.params['id'];
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["t" /* GetWidgetToEditAttempt */]({ widgetId: _this.widgetId }));
                _this.updateWidget = _this.store.select('afterLogin')
                    .map(function (data) { return data.widget.toEdit; })
                    .distinctUntilChanged()
                    .subscribe(function (widget) {
                    if (widget) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: widget.user_id }));
                        _this.widget.id = widget.id;
                        _this.widget.userId = widget.user_id;
                        _this.widget.website = widget.website;
                        _this.widget.details = widget.details;
                        _this.widget.scheduleTimezone = widget.schedule_timezone;
                        _this.widget.areaCode = widget.area_code;
                        _this.widget.contains = widget.number_contains;
                        _this.widget.script_url = widget.script_url;
                        _this.widget.transferTimeout = widget.transfer_timeout;
                        // this.widget.startTime = widget.widget_schedule ? widget.widget_schedule.start_time : '';
                        // this.widget.endTime = widget.widget_schedule ? widget.widget_schedule.end_time : '';
                        // this.widget.daysArray = widget.widget_schedule ? (widget.widget_schedule.day).split(',') : '';
                        var that_1 = _this;
                        if (widget.widget_schedule) {
                            widget.widget_schedule.forEach(function (value) {
                                if (value.day == 'Sun') {
                                    that_1.checkSun = true;
                                    that_1.widget.sunCbk.startTime = value.start_time;
                                    that_1.widget.sunCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Mon') {
                                    that_1.checkMon = true;
                                    that_1.widget.monCbk.startTime = value.start_time;
                                    that_1.widget.monCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Tue') {
                                    that_1.checkTue = true;
                                    that_1.widget.tueCbk.startTime = value.start_time;
                                    that_1.widget.tueCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Wed') {
                                    that_1.checkWed = true;
                                    that_1.widget.wedCbk.startTime = value.start_time;
                                    that_1.widget.wedCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Thu') {
                                    that_1.checkThu = true;
                                    that_1.widget.thuCbk.startTime = value.start_time;
                                    that_1.widget.thuCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Fri') {
                                    that_1.checkFri = true;
                                    that_1.widget.friCbk.startTime = value.start_time;
                                    that_1.widget.friCbk.endTime = value.end_time;
                                }
                                if (value.day == 'Sat') {
                                    that_1.checkSat = true;
                                    that_1.widget.satCbk.startTime = value.start_time;
                                    that_1.widget.satCbk.endTime = value.end_time;
                                }
                            });
                        } // Top IF
                        _this.widget.departmentIdArray = widget.departments;
                        _this.hideUploadedImage = false;
                        _this.imgSrc = widget.image;
                        _this.adminName = widget.first_name + ' ' + widget.last_name;
                        if (typeof widget.twilio_numbers === 'object' && (widget.twilio_numbers !== undefined && widget.twilio_numbers !== null)) {
                            _this.widget.phoneNumber = widget.twilio_numbers.number;
                        }
                        //  const image = this.element.nativeElement.querySelector('.uploaded-image');
                        //  image.src = widget.image;
                    }
                });
            }
        });
        this.afterLoginSubscription = this.store.select('afterLogin')
            .map(function (data) { return data.widget.resetWidgetForm; })
            .subscribe(function (data) {
            if (data) {
                _this.form.reset();
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["v" /* ResetWidgetForm */]());
                if (!!_this.loggedInAdminId) {
                    _this.form.form.patchValue({ userId: _this.loggedInAdminId });
                }
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
            text: 'Select Department',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: 'myclass custom-class',
            primaryKey: 'id',
            labelKey: 'department_name'
        };
        this.agentListDropdownSettings = {
            singleSelection: false,
            text: 'Select Agent',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: 'myclass custom-class',
            primaryKey: 'id',
            labelKey: 'name'
        };
        this.limitArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.dep = {
            userId: '',
            departmentName: '',
            departmentDetails: ''
        };
    };
    CreateWidgetComponent.prototype.onChangeDaysArray = function (data, checked) {
        if (checked) {
            this.widget.daysArray.push(data);
        }
        else {
            this.removeDaysArray(data);
        }
    };
    CreateWidgetComponent.prototype.removeDaysArray = function (data) {
        this.widget.daysArray = this.widget.daysArray.filter(function (item) {
            return item !== data;
        });
    };
    /** Function to detect changes */
    CreateWidgetComponent.prototype.ngAfterViewChecked = function () {
        this.cdr.detectChanges();
    };
    /** Function call to create or edit a admin */
    CreateWidgetComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loader = true;
        for (var departmentId in form.value.departmentIdArray) {
            this.departmentArrayId.push(form.value.departmentIdArray[departmentId].id);
        }
        if (this.editMode) {
            var formDataEdit = new FormData();
            formDataEdit.append('id', this.widget.id);
            formDataEdit.append('image', this.postedImage);
            formDataEdit.append('userId', this.widget.userId);
            formDataEdit.append('departmentIdArray', this.departmentArrayId);
            formDataEdit.append('website', form.value.website);
            formDataEdit.append('details', form.value.details);
            formDataEdit.append('scheduleTimezone', form.value.scheduleTimezone);
            formDataEdit.append('areaCode', form.value.areaCode);
            formDataEdit.append('daysArray', this.widget.daysArray);
            formDataEdit.append('startTime', form.value.startTime);
            formDataEdit.append('endTime', form.value.endTime);
            formDataEdit.append('phoneNumber', form.value.number);
            formDataEdit.append('sunCbk', this.checkSun);
            formDataEdit.append('sunStartTime', form.value.sunStartTime);
            formDataEdit.append('sunEndTime', form.value.sunEndTime);
            formDataEdit.append('monCbk', this.checkMon);
            formDataEdit.append('monStartTime', form.value.monStartTime);
            formDataEdit.append('monEndTime', form.value.monEndTime);
            formDataEdit.append('tueCbk', this.checkTue);
            formDataEdit.append('tueStartTime', form.value.tueStartTime);
            formDataEdit.append('tueEndTime', form.value.tueEndTime);
            formDataEdit.append('wedCbk', this.checkWed);
            formDataEdit.append('wedStartTime', form.value.wedStartTime);
            formDataEdit.append('wedEndTime', form.value.wedEndTime);
            formDataEdit.append('thuCbk', this.checkThu);
            formDataEdit.append('thuStartTime', form.value.thuStartTime);
            formDataEdit.append('thuEndTime', form.value.thuEndTime);
            formDataEdit.append('friCbk', this.checkFri);
            formDataEdit.append('friStartTime', form.value.friStartTime);
            formDataEdit.append('friEndTime', form.value.friEndTime);
            formDataEdit.append('satCbk', this.checkSat);
            formDataEdit.append('satStartTime', form.value.satStartTime);
            formDataEdit.append('satEndTime', form.value.satEndTime);
            formDataEdit.append('transferTimeout', form.value.timeout);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["g" /* EditWidgetAttempt */](formDataEdit));
            /** Loader Show/Hide */
            this.store.select('alert')
                .map(function (data) { return data; })
                .subscribe(function (data) {
                if (data.show && data.type === 'danger') {
                    _this.loader = false;
                }
                if (data.show && data.type === 'success') {
                    _this.loader = false;
                    _this.router.navigate(['/widget/edit', _this.widget.id]);
                }
            }, function (error) {
                console.error(error);
                _this.loader = false;
            }, function () {
                _this.loader = false;
            });
        }
        else {
            var formData = new FormData();
            formData.append('image', this.postedImage);
            formData.append('userId', form.value.userId);
            formData.append('departmentIdArray', this.departmentArrayId);
            formData.append('website', form.value.website);
            formData.append('details', form.value.details);
            formData.append('scheduleTimezone', form.value.scheduleTimezone);
            formData.append('areaCode', form.value.areaCode);
            formData.append('numberContains', form.value.contains);
            formData.append('phoneNumber', form.value.number);
            formData.append('sunCbk', this.checkSun);
            formData.append('sunStartTime', form.value.sunStartTime);
            formData.append('sunEndTime', form.value.sunEndTime);
            formData.append('monCbk', this.checkMon);
            formData.append('monStartTime', form.value.monStartTime);
            formData.append('monEndTime', form.value.monEndTime);
            formData.append('tueCbk', this.checkTue);
            formData.append('tueStartTime', form.value.tueStartTime);
            formData.append('tueEndTime', form.value.tueEndTime);
            formData.append('wedCbk', this.checkWed);
            formData.append('wedStartTime', form.value.wedStartTime);
            formData.append('wedEndTime', form.value.wedEndTime);
            formData.append('thuCbk', this.checkThu);
            formData.append('thuStartTime', form.value.thuStartTime);
            formData.append('thuEndTime', form.value.thuEndTime);
            formData.append('friCbk', this.checkFri);
            formData.append('friStartTime', form.value.friStartTime);
            formData.append('friEndTime', form.value.friEndTime);
            formData.append('satCbk', this.checkSat);
            formData.append('satStartTime', form.value.satStartTime);
            formData.append('satEndTime', form.value.satEndTime);
            formData.append('transferTimeout', form.value.timeout);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["c" /* AddWidgetAttempt */](formData));
            /** Loader Show/Hide */
            this.store.select('alert')
                .map(function (data) { return data; })
                .subscribe(function (data) {
                if (data.show && data.type === 'danger') {
                    _this.loader = false;
                }
                if (data.show && data.type === 'success') {
                    _this.loader = false;
                    _this.router.navigate(['widget/create']);
                }
            }, function (error) {
                console.error(error);
                _this.loader = false;
            }, function () {
                _this.loader = false;
            });
        }
        this.isBuyNumber = false;
    };
    /** Un-subscribing from all custom made events when component is destroyed */
    CreateWidgetComponent.prototype.ngOnDestroy = function () {
        this.afterLoginSubscription.unsubscribe();
        this.authSubscription.unsubscribe();
        this.adminList.unsubscribe();
    };
    /** Function call to upload image or video */
    CreateWidgetComponent.prototype.fileUploaded = function (event) {
        var _this = this;
        // console.log(event);
        if (event.target.files.length > 0) {
            this.hideUploadedImage = false;
            this.postedImage = event.target.files[0];
            // const ImageSize = size
            if (this.postedImage.size > 2000000) {
                alert('The specified file could not be uploaded.The file is exceeding the maximum file upload size of 2MB.');
                return false;
            }
            //  const image = this.element.nativeElement.querySelector('.uploaded-image')
            var reader = new FileReader();
            reader.onload = function (fre) {
                _this.imgSrc = fre.target.result;
                //    image.src = src
                // if(event.target.files[0] > 2000000)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        else {
            this.hideUploadedImage = true;
            this.postedImage = undefined;
        }
    };
    /** Function to fetch department list with respect to adminId/userId */
    CreateWidgetComponent.prototype.adminChanged = function (id) {
        if (!!id) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_department_department_actions__["n" /* GetDepartmentListAttempt */]({ userId: id }));
        }
    };
    /** Function to remove uploaded image */
    CreateWidgetComponent.prototype.removeUploadedImage = function () {
        this.hideUploadedImage = true;
        this.postedImage = undefined;
        this.imgSrc = '';
    };
    /** function to open time in the Start Time */
    // openTimer() {
    //   const amazingTimePicker = this.atp.open({
    //     onlyHour: true,
    //   });
    //   amazingTimePicker.afterClose().subscribe(time => {
    //     this.widget.startTime = time;
    //   });
    // }
    /** function to open time in the End Time */
    // openEndTimer() {
    //   const amazingTimePicker = this.atp.open({
    //     onlyHour: true,
    //   });
    //   amazingTimePicker.afterClose().subscribe(time => {
    //     this.widget.endTime = time;
    //     this.log2(time);
    //   });
    // }
    /** Function to check filter admin name */
    CreateWidgetComponent.prototype.checkAdminname = function ($event) {
        this.showThis = true;
        return this.updatedlistOfAdmins = this.listOfAdmins.filter(function (item) { return item.first_name.toLowerCase().indexOf($event) !== -1; });
    };
    /** function to assign value to the models */
    CreateWidgetComponent.prototype.assignValue = function (id, first_name, last_name) {
        this.widget.userId = id;
        this.adminName = first_name + ' ' + last_name;
        this.showThis = false;
        this.adminChanged(id);
    };
    /** function to reset the droupdown when click on close*/
    CreateWidgetComponent.prototype.resetList = function () {
        this.adminName = '';
        this.showThis = true;
        this.widget.userId = 0;
    };
    /**
     * Buy Number
     */
    CreateWidgetComponent.prototype.buyNumber = function (areaCode, contains) {
        var _this = this;
        if (areaCode || contains) {
            this.buyButtonLoader = true;
            this.isBuyNumber = true;
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_widget_widget_actions__["q" /* GetNumberListAttempt */]({ areaCode: areaCode, contains: contains }));
            this.store.select('afterLogin', 'widget', 'buttonLoader').map(function (data) { return data; }).subscribe(function (data) {
                if (data === 'danger' || data === 'success') {
                    _this.buyButtonLoader = false;
                }
            });
        }
        else {
            this.numberErrorMessage = 'Please put area code or number contains for buy any number.';
            this.numberError = true;
            this.buyButtonLoader = false;
        }
    };
    /** Function to create modal for creating department */
    CreateWidgetComponent.prototype.CreateDepartment = function (template) {
        this.dep.userId = this.widget.userId;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__store_agent_agent_actions__["w" /* GetAdminAgentListAttempt */]({ userId: this.widget.userId }));
        this.bsModalRef = this.modalService.show(template);
    };
    /** function to create a department */
    CreateWidgetComponent.prototype.onCreateDep = function (form) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_department_department_actions__["c" /* AddDepartmentAttempt */](form.value));
        var newArray = [];
        this.newAfterLoginSubscription = this.store.select('department')
            .subscribe(function (data) {
            if (data.newDepartmentId > 0 && data) {
                newArray.push(data);
                var oldArray = _this.widget.departmentIdArray;
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
                _this.widget.departmentIdArray = oldArray.concat(newObj_1);
            }
        });
        this.bsModalRef.hide();
    };
    /** function to toggle timer */
    CreateWidgetComponent.prototype.OpenTimer = function (value) {
        if (value == 1) {
            this.checkSun = !this.checkSun;
        }
        if (value == 2) {
            this.checkMon = !this.checkMon;
        }
        if (value == 3) {
            this.checkTue = !this.checkTue;
        }
        if (value == 4) {
            this.checkWed = !this.checkWed;
        }
        if (value == 5) {
            this.checkThu = !this.checkThu;
        }
        if (value == 6) {
            this.checkFri = !this.checkFri;
        }
        if (value == 7) {
            this.checkSat = !this.checkSat;
        }
    };
    /** Function to open start time piker */
    CreateWidgetComponent.prototype.openStartTimePiker = function (value) {
        var _this = this;
        if (value == 1) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.sunCbk.startTime = time;
            });
        }
        if (value == 2) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.monCbk.startTime = time;
            });
        }
        if (value == 3) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.tueCbk.startTime = time;
            });
        }
        if (value == 4) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.wedCbk.startTime = time;
            });
        }
        if (value == 5) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.thuCbk.startTime = time;
            });
        }
        if (value == 6) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.friCbk.startTime = time;
            });
        }
        if (value == 7) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.satCbk.startTime = time;
            });
        }
    };
    /** Function to open end time piker */
    CreateWidgetComponent.prototype.openEndTimePiker = function (value) {
        var _this = this;
        if (value == 1) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.sunCbk.endTime = time;
                _this.log2(time, 1);
            });
        }
        if (value == 2) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.monCbk.endTime = time;
                _this.log2(time, 2);
            });
        }
        if (value == 3) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.tueCbk.endTime = time;
                _this.log2(time, 3);
            });
        }
        if (value == 4) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.wedCbk.endTime = time;
                _this.log2(time, 4);
            });
        }
        if (value == 5) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.thuCbk.endTime = time;
                _this.log2(time, 5);
            });
        }
        if (value == 6) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.friCbk.endTime = time;
                _this.log2(time, 6);
            });
        }
        if (value == 7) {
            var amazingTimePicker = this.atp.open({
                onlyHour: true,
            });
            amazingTimePicker.afterClose().subscribe(function (time) {
                _this.widget.satCbk.endTime = time;
                _this.log2(time, 7);
            });
        }
    };
    /** Function to check start and end time **** call on change of 'to' date */
    CreateWidgetComponent.prototype.log2 = function (event, value) {
        if (event) {
            if (value == 1) {
                this.sunTimePikerError = false;
                this.validationMinTime = this.form.value.sunStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.sunTimePikerError = true;
                    this.form.controls['sunEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 2) {
                this.monTimePikerError = false;
                this.validationMinTime = this.form.value.monStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.monTimePikerError = true;
                    this.form.controls['monEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 3) {
                this.tueTimePikerError = false;
                this.validationMinTime = this.form.value.tueStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.tueTimePikerError = true;
                    this.form.controls['tueEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 4) {
                this.wedTimePikerError = false;
                this.validationMinTime = this.form.value.wedStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.wedTimePikerError = true;
                    this.form.controls['wedEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 5) {
                this.thuTimePikerError = false;
                this.validationMinTime = this.form.value.thuStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.thuTimePikerError = true;
                    this.form.controls['thuEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 6) {
                this.friTimePikerError = false;
                this.validationMinTime = this.form.value.friStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.friTimePikerError = true;
                    this.form.controls['friEndTime'].setErrors({ 'incorrect': true });
                }
            }
            if (value == 7) {
                this.satTimePikerError = false;
                this.validationMinTime = this.form.value.satStartTime;
                this.validationMaxTime = event;
                if (this.validationMinTime >= this.validationMaxTime) {
                    this.satTimePikerError = true;
                    this.form.controls['satEndTime'].setErrors({ 'incorrect': true });
                }
            }
        }
    };
    return CreateWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], CreateWidgetComponent.prototype, "form", void 0);
CreateWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-create-widget',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_amazing_time_picker__["b" /* AmazingTimePickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_amazing_time_picker__["b" /* AmazingTimePickerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _h || Object])
], CreateWidgetComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=create-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n.filter {\n  padding-bottom: 10px;\n}\n@media screen and (max-width:520px){\n    .box{\n      overflow-x: scroll;\n  }\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!--<section class=\"content-header\">-->\n        <!--<h1>Widget Section</h1>-->\n        <!--<ol class=\"breadcrumb\">-->\n            <!--<li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>-->\n            <!--<li><a routerLink=\"/widget/list\"> Widget</a></li>-->\n            <!--<li class=\"active\">List</li>-->\n        <!--</ol>-->\n    <!--</section>-->\n    <section class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"box\">\n                    <div class=\"box-header\">\n                        <h3 class=\"box-title\">List of all Widgets</h3>\n                    </div>\n                    <!-- /.box-header -->\n                    <div class=\"box-body\">\n                        <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n                            <div class=\"row filter\">\n                                <div class=\"col-sm-4\" *ngIf=\"!(authState | async).isAdmin;\">\n                                    company :\n                                    <select class='select-option' [(ngModel)]='companySearch'>\n                                        <option value=\"\">Filter by company</option>\n                                        <option class='option' *ngFor='let option of companyList' [value]=\"option.company\">\n                                            {{option.company}}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div class=\"col-sm-8\">Search : <input [(ngModel)]=\"term\" placeholder=\"All keywords\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\"\n                                           aria-describedby=\"example2_info\">\n                                        <thead>\n                                        <tr role=\"row\">\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">\n                                                Fristname\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Lastname\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Company\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Number\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">\n                                                Department\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Created\n                                                At\n                                            </th>\n                                            <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Action\n                                            </th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr role=\"row\" class=\"odd\"\n                                            *ngFor=\"let item of (afterLoginState | async).widget.list | filter : companySearch: term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                                            <td>{{ i+1 }}</td>\n                                            <td>{{ item.first_name }}</td>\n                                            <td>{{ item.last_name }}</td>\n                                            <td>{{ item.company }}</td>\n                                            <td>{{ item.twilio_numbers }}</td>\n                                            <td>{{ item.widget_department | slice:0:120 }}</td>\n                                            <td>{{ item.created_at | amUtc | amDateFormat:'MMMM DD YYYY' }}</td>\n                                            <td>\n                                              <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"onEditWidget(item.id)\">\n                                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                              </button>\n                                              <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"DeleteWidget(item.id)\">\n                                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                              </button>\n                                                <!-- Single button -->\n                                                <!--<div class=\"btn-group\" [appDropdown]=\"'open'\" disable-hover=\"true\">\n                                                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\"\n                                                            data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                            aria-expanded=\"false\">\n                                                        Action <span class=\"caret\"></span>\n                                                    </button>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li><a (click)=\"onEditWidget(item.id)\"><i class=\"fa fa-pencil\"\n                                                                                                  aria-hidden=\"true\"></i>Edit</a>\n                                                        </li>\n                                                      <li> <a (click)=\"DeleteWidget(item.id)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>Delete</a> </li>\n                                                    </ul>\n                                                </div>-->\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <!-- Pagination -->\n                            <div class=\"row\">\n                                <pagination-controls class=\"older_post_text\"\n                                                     (pageChange)=\"page=$event\"\n                                                     maxSize=\"9\"\n                                                     directionLinks=\"true\"\n                                                     autoHide=\"true\"\n                                                     previousLabel=\"\"\n                                                     nextLabel=\"\"\n                                                     screenReaderPaginationLabel=\"\"\n                                                     screenReaderPageLabel=\"page\"\n                                                     screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.box-body -->\n                </div>\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_widget_widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_agent_agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListWidgetComponent = (function () {
    /** Service injection */
    function ListWidgetComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /** Function to be executed when component initializes */
    ListWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companySearch = '';
        this.authState = this.store.select('auth');
        this.authSubscription = this.store.select('auth')
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_widget_widget_actions__["s" /* GetWidgetListAttempt */]({ userId: data.userId }));
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_widget_widget_actions__["s" /* GetWidgetListAttempt */]({}));
            }
        });
        this.afterLoginState = this.store.select('afterLogin');
        // this.companySubscription = this.store.select('afterLogin')
        //   .subscribe(
        //     (data) => {
        //       this.companyList = data.widget.list.map(item => item.company)
        //         .filter((value, index, self) => self.indexOf(value) === index && value !== null && value !== '');
        //     }
        //   );
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
    /** Function to Edit Widget */
    ListWidgetComponent.prototype.onEditWidget = function (id) {
        this.router.navigate(['widget/edit/', id]);
    };
    /**
     * Delete Widget
     * @param id
     * @constructor
     */
    ListWidgetComponent.prototype.DeleteWidget = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_widget_widget_actions__["d" /* DeleteWidgetAttempt */]({ widget_id: id }));
    };
    ListWidgetComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    return ListWidgetComponent;
}());
ListWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-widget',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListWidgetComponent);

var _a, _b;
//# sourceMappingURL=list-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/tableSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__ = __webpack_require__("../../../../ngx-bootstrap/chronos/test/chain.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TableSearchPipe = (function () {
    function TableSearchPipe() {
    }
    TableSearchPipe.prototype.transform = function (items, companySearch, term) {
        if (!items) {
            return [];
        }
        return items.filter(function (el) {
            // check for first name
            if (companySearch && companySearch !== '') {
                var companyLower = companySearch.toLowerCase().trim();
                if (el.company !== null && el.company.toLowerCase() === companyLower) {
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
                                // search for phone
                                if (el.twilio_numbers != null && el.twilio_numbers.replace(/\D+/g, '').indexOf(termLower) > -1) {
                                    return el.twilio_numbers.replace(/\D+/g, '').indexOf(termLower) > -1;
                                }
                                else {
                                    // search for date
                                    if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                        return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
                                    }
                                    else {
                                        // search for department
                                        if (el.widget_department != null && el.widget_department.toString().toLowerCase().indexOf(termLower) > -1) {
                                            return el.widget_department.toString().toLowerCase().indexOf(termLower) > -1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        return el.company.toLowerCase() === companyLower;
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
                        // search for phone
                        if (el.twilio_numbers != null && el.twilio_numbers.replace(/\D+/g, '').indexOf(termLower) > -1) {
                            return el.twilio_numbers.replace(/\D+/g, '').indexOf(termLower) > -1;
                        }
                        else {
                            // search for date
                            if (el.created_at != null && Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1) {
                                return Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_bootstrap_chronos_test_chain__["a" /* moment */])(el.created_at).format('MMMM DD YYYY').toLowerCase().indexOf(termLower) > -1;
                            }
                            else {
                                // search for department
                                if (el.widget_department != null && el.widget_department.toString().toLowerCase().indexOf(termLower) > -1) {
                                    return el.widget_department.toString().toLowerCase().indexOf(termLower) > -1;
                                }
                                else {
                                    if (el.company != null && el.company.toLowerCase().indexOf(termLower) > -1) {
                                        return el.company != null && el.company.toLowerCase().indexOf(termLower) > -1;
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
    return TableSearchPipe;
}());
TableSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], TableSearchPipe);

//# sourceMappingURL=tableSearch.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/widget-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_widget_create_widget_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_widget_list_widget_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__create_widget_create_widget_component__["a" /* CreateWidgetComponent */], data: { editMode: false } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_widget_list_widget_component__["a" /* ListWidgetComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_widget_create_widget_component__["a" /* CreateWidgetComponent */], data: { editMode: true } },
    { path: '**', redirectTo: 'list' }
];
var WidgetRoutingModule = (function () {
    function WidgetRoutingModule() {
    }
    return WidgetRoutingModule;
}());
WidgetRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], WidgetRoutingModule);

//# sourceMappingURL=widget-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/widget/widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/widget-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_widget_list_widget_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/list-widget/list-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_widget_create_widget_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/create-widget/create-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_amazing_time_picker__ = __webpack_require__("../../../../amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tableSearch_pipe__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/widget/tableSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var WidgetModule = (function () {
    function WidgetModule() {
    }
    return WidgetModule;
}());
WidgetModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__widget_routing_module__["a" /* WidgetRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8_amazing_time_picker__["a" /* AmazingTimePickerModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        providers: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__create_widget_create_widget_component__["a" /* CreateWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list_widget_list_widget_component__["a" /* ListWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tableSearch_pipe__["a" /* TableSearchPipe */],
        ]
    })
], WidgetModule);

//# sourceMappingURL=widget.module.js.map

/***/ }),

/***/ "../../../../amazing-time-picker/amazing-time-picker.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmazingTimePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AmazingTimePickerService; });
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");




var AtpCoreService = (function () {
    function AtpCoreService() {
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    AtpCoreService.prototype.allowedTimes = function (min, max) {
        var /** @type {?} */ allTimes = [];
        var /** @type {?} */ nowMinHour = +min.split(':')[0];
        var /** @type {?} */ nowMaxHour = +max.split(':')[0];
        var /** @type {?} */ nowMinMin = +min.split(':')[1];
        var /** @type {?} */ nowMaxMin = +max.split(':')[1];
        for (var /** @type {?} */ i = nowMinHour; i <= nowMaxHour; i++) {
            var /** @type {?} */ j = 0, /** @type {?} */ jDest = 59;
            if (i === nowMinHour) {
                j = nowMinMin;
            }
            else if (i === nowMaxHour) {
                jDest = nowMaxMin;
            }
            for (j; j <= jDest; j++) {
                var /** @type {?} */ hour = i <= 12 ? i : i - 12;
                var /** @type {?} */ minute = j;
                var /** @type {?} */ ampm = i < 12 ? 'AM' : 'PM';
                allTimes.push(hour + ':' + minute + ' ' + ampm);
            }
        }
        return allTimes;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AtpCoreService.prototype.ClockMaker = function (type) {
        var /** @type {?} */ items = [];
        var /** @type {?} */ timeVal = (type === 'minute') ? 60 : 12;
        var /** @type {?} */ timeStep = (type === 'minute') ? 5 : 1;
        var /** @type {?} */ timeStart = (type === 'minute') ? 0 : 1;
        var /** @type {?} */ r = 124;
        var /** @type {?} */ j = r - 25;
        for (var /** @type {?} */ min = timeStart; min <= timeVal; min += timeStep) {
            if (min !== 60) {
                var /** @type {?} */ str = String(min);
                var /** @type {?} */ x = j * Math.sin(Math.PI * 2 * (min / timeVal));
                var /** @type {?} */ y = j * Math.cos(Math.PI * 2 * (min / timeVal));
                items.push({
                    time: str,
                    left: (x + r - 17) + 'px',
                    top: (-y + r - 17) + 'px',
                    type: type
                });
            }
        }
        return items;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    AtpCoreService.prototype.TimeToString = function (time) {
        var ampm = time.ampm, minute = time.minute, hour = time.hour;
        var /** @type {?} */ hh = ampm === 'PM' ? +hour + 12 : +hour;
        if (ampm === 'AM' && hh === 12) {
            hh = 0;
        }
        if (hh === 24) {
            hh = 12;
        }
        hh = hh < 10 ? '0' + hh : ('' + hh);
        var /** @type {?} */ mm = minute < 10 ? '0' + minute : minute;
        return hh + ":" + mm;
    };
    /**
     * Converts 00:00 format to ITime object
     * @param {?} time
     * @return {?}
     */
    AtpCoreService.prototype.StringToTime = function (time) {
        var _a = time.split(':'), h = _a[0], m = _a[1];
        var /** @type {?} */ hour = +h > 12 ? +h - 12 : +h;
        hour = hour === 0 ? 12 : hour;
        var /** @type {?} */ ampm = +h >= 12 ? 'PM' : 'AM';
        return {
            ampm: ampm, minute: +m, hour: hour
        };
    };
    /**
     * \@experimental
     * @param {?} ele
     * @param {?} parrentPos
     * @param {?} step
     * @return {?}
     */
    AtpCoreService.prototype.CalcDegrees = function (ele, parrentPos, step) {
        var /** @type {?} */ clock = {
            width: ele.currentTarget.offsetWidth,
            height: ele.currentTarget.offsetHeight
        };
        var /** @type {?} */ targetX = clock.width / 2;
        var /** @type {?} */ targetY = clock.height / 2;
        var /** @type {?} */ Vx = Math.round((ele.clientX - parrentPos.left) - targetX);
        var /** @type {?} */ Vy = Math.round(targetY - (ele.clientY - parrentPos.top));
        var /** @type {?} */ radians = -Math.atan2(Vy, Vx);
        radians += 2.5 * Math.PI;
        var /** @type {?} */ degrees = Math.round(radians * 180 / Math.PI);
        var /** @type {?} */ degMod = degrees % step;
        if (degMod >= step / 2) {
            degrees = degrees + (step - degMod);
        }
        else if (degMod < step / 2) {
            degrees = degrees - degMod;
        }
        return degrees;
    };
    return AtpCoreService;
}());
AtpCoreService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
AtpCoreService.ctorParameters = function () { return []; };
var TimePickerComponent = (function () {
    /**
     * @param {?} core
     */
    function TimePickerComponent(core$$1) {
        var _this = this;
        this.core = core$$1;
        this.subject = null;
        this.activeModal = false;
        this.clockType = 'hour';
        this.time = {
            ampm: 'AM',
            minute: 0,
            hour: 12
        };
        this.nowTime = this.time.hour;
        this.isPopup = true;
        this.clockMaker = function () {
            var /** @type {?} */ type = _this.clockType;
            _this.clockObject = _this.core.ClockMaker(type);
            _this.setArrow(null);
        };
        this.setActiveTime = function () {
            _this.nowTime = (_this.clockType === 'minute' ? _this.time.minute : _this.time.hour);
        };
        this.setArrow = function (obj) {
            if (obj) {
                _this.clockType = obj.type;
                if (_this.clockType === 'minute') {
                    _this.time.minute = obj.time;
                }
                else {
                    _this.time.hour = obj.time;
                }
            }
            var /** @type {?} */ step = (_this.clockType === 'minute') ? 6 : 30;
            var /** @type {?} */ time = (_this.clockType === 'minute') ? _this.time.minute : _this.time.hour;
            var /** @type {?} */ degrees = time * step;
            _this.rotationClass(degrees);
            _this.setActiveTime();
        };
        this.rotationClass = function (degrees) {
            _this.degree = degrees;
        };
        this.getDegree = function (ele) {
            var /** @type {?} */ step = _this.clockType === 'minute' ? 6 : 30;
            var /** @type {?} */ parrentPos = ele.currentTarget.getBoundingClientRect();
            if (_this.isClicked && (ele.currentTarget === ele.target || ele.target.nodeName === 'BUTTON')) {
                var /** @type {?} */ clock = {
                    width: ele.currentTarget.offsetWidth,
                    height: ele.currentTarget.offsetHeight
                };
                var /** @type {?} */ degrees = _this.core.CalcDegrees(ele, parrentPos, step);
                var /** @type {?} */ hour = _this.time.hour, /** @type {?} */ minute = _this.time.minute;
                if (_this.clockType === 'hour') {
                    hour = (degrees / step);
                    hour = (hour > 12) ? hour - 12 : hour;
                }
                else if (_this.clockType === 'minute') {
                    minute = (degrees / step);
                    minute = (minute > 59) ? minute - 60 : minute;
                }
                var /** @type {?} */ min = _this.config.rangeTime.start, /** @type {?} */ max = _this.config.rangeTime.end;
                var /** @type {?} */ nowMinHour = +min.split(':')[0] < 12 ? +min.split(':')[0] : +min.split(':')[0] - 12;
                var /** @type {?} */ nowMaxHour = +max.split(':')[0] < 12 ? +max.split(':')[0] : +max.split(':')[0] - 12;
                var /** @type {?} */ nowMinMin = +min.split(':')[1];
                var /** @type {?} */ nowMaxMin = +max.split(':')[1];
                var /** @type {?} */ nowTime = _this.GetNowTime(hour, _this.time.ampm, minute);
                if (_this.allowed.indexOf(nowTime) > -1) {
                    _this.time.hour = hour;
                    _this.time.minute = minute;
                    _this.rotationClass(degrees);
                    _this.setActiveTime();
                }
                else if (_this.clockType === 'hour' && (hour === nowMinHour && minute <= nowMinMin)) {
                    _this.time.hour = nowMinHour;
                    _this.time.minute = nowMinMin;
                }
                else if (_this.clockType === 'hour' && (hour === nowMaxHour && minute >= nowMaxMin)) {
                    _this.time.hour = nowMaxHour;
                    _this.time.minute = nowMaxMin;
                }
            }
        };
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimePickerComponent.prototype.ParseStringToTime = function (time) {
        time = (time === '' || time === undefined || time === null) ? this.time.hour + ':' + this.time.minute : time;
        this.time = this.core.StringToTime(time);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetTime = function () {
        var /** @type {?} */ time = this.core.TimeToString(this.time);
        this.subject.next(time);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.setTime = function () {
        this.isClicked = false;
        if (this.config.changeToMinutes && this.clockType === 'hour') {
            this.clockType = 'minute';
            this.clockMaker();
        }
    };
    /**
     * @param {?} hour
     * @param {?} ampm
     * @param {?} minute
     * @return {?}
     */
    TimePickerComponent.prototype.GetNowTime = function (hour, ampm, minute) {
        var /** @type {?} */ Hour = (hour === 12 && ampm === 'AM') ? '0' : hour;
        var /** @type {?} */ nowTime = Hour + ':' + minute + ' ' + ampm;
        return nowTime;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.checkBet = function () {
        var /** @type {?} */ nowTime = this.GetNowTime(this.time.hour, this.time.ampm, this.time.minute);
        if (this.allowed.indexOf(nowTime) === -1) {
            this.ParseStringToTime(this.config.rangeTime.start);
            this.setArrow(null);
            this.setActiveTime();
        }
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.modalAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeModal = true;
        }, 1);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = function () {
        this.allowed = this.core.allowedTimes(this.config.rangeTime.start, this.config.rangeTime.end);
        if (this.config && this.config.onlyMinute) {
            this.clockType = 'minute';
        }
        if (this.config && this.config.onlyPM) {
            this.time.ampm = 'PM';
        }
        this.clockMaker();
        this.modalAnimation();
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.MinuteClick = function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyHour) {
            return false;
        }
        this.clockType = 'minute';
        this.clockMaker();
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.HourClick = function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyMinute) {
            return false;
        }
        this.clockType = 'hour';
        this.clockMaker();
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.SetAM = function () {
        if (this.config && this.config.onlyPM) {
            return false;
        }
        this.time.ampm = 'AM';
        this.checkBet();
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.SetPM = function () {
        if (this.config && this.config.onlyAM) {
            return false;
        }
        this.time.ampm = 'PM';
        this.checkBet();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TimePickerComponent.prototype.Close = function (e) {
        var _this = this;
        if (e.target === e.currentTarget) {
            if (this.isPopup === true) {
                this.activeModal = false;
                setTimeout(function () {
                    _this.appRef.detachView(_this._ref.hostView);
                    _this._ref.destroy();
                }, 400);
            }
        }
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetSeparator = function () {
        if (this.preference && this.preference.separator) {
            return this.preference.separator;
        }
        return ':';
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TimePickerComponent.prototype.GetPeriod = function (period) {
        if (this.preference && this.preference.period) {
            return this.preference.period(period);
        }
        return period;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetMinute = function () {
        if (this.preference && this.preference.minute) {
            return this.preference.minute(this.time.minute);
        }
        var /** @type {?} */ min = this.time.minute.toString();
        if (+min < 10) {
            min = '0' + min;
        }
        return min;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetHour = function () {
        if (this.preference && this.preference.hour) {
            return this.preference.hour(this.time.hour);
        }
        return this.time.hour;
    };
    /**
     * @param {?} clock
     * @return {?}
     */
    TimePickerComponent.prototype.GetClockTime = function (clock) {
        if (!this.preference) {
            return clock.time;
        }
        if (this.clockType === 'hour' && this.preference.clockHour) {
            return this.preference.clockHour(clock.time);
        }
        if (this.clockType === 'minute' && this.preference.clockMinute) {
            return this.preference.clockMinute(clock.time);
        }
        return clock.time;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TimePickerComponent.prototype.GetLabel = function (key) {
        var /** @type {?} */ defaults = {
            'ok': 'Ok',
            'cancel': 'Cancel'
        };
        if ((this.preference && this.preference.labels && this.preference.labels.ok)) {
            defaults.ok = this.preference.labels.ok;
        }
        if ((this.preference && this.preference.labels && this.preference.labels.cancel)) {
            defaults.cancel = this.preference.labels.cancel;
        }
        return defaults[key];
    };
    return TimePickerComponent;
}());
TimePickerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'time-picker',
                template: "\n    <div id=\"time-picker-wrapper\" class=\"{{config.theme}}\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\" (click)=\"Close($event);\">\n      <div id=\"time-picker\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\">\n        <div class=\"time-picker-header\">\n          <div class=\"time-picker-selected-time\">\n              <div class=\"time-picker-hour\" (click)=\"HourClick()\" [attr.disabled]=\"(config.onlyMinute) ? 'disabled' : null\"\n                [ngClass]=\"{'selected' : clockType == 'hour'}\">{{GetHour()}}</div>\n              <span class=\"time-seprator\">{{GetSeparator()}}</span>\n              <div class=\"time-picker-minute\" (click)=\"MinuteClick();\" [attr.disabled]=\"(config.onlyHour) ? 'disabled' : null\"\n                [ngClass]=\"{'selected' : clockType == 'minute'}\">{{GetMinute()}}</div>\n          </div>\n          <div class=\"time-picker-selected-ampm\">\n            <div class=\"time-picker-am\" (click)=\"SetAM();\" [attr.disabled]=\"(config.onlyPM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'AM'}\">{{GetPeriod('AM')}}</div>\n            <div class=\"time-picker-pm\" (click)=\"SetPM();\" [attr.disabled]=\"(config.onlyAM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'PM'}\">{{GetPeriod('PM')}}</div>\n\n          </div>\n        </div>\n        <div class=\"time-picker-content\">\n            <div class=\"time-picker-clock\" (mousemove)=\"getDegree($event);\" (mousedown)=\"isClicked=true; getDegree($event);\" (mouseup)=\"setTime()\">\n              <button *ngFor=\"let clock of clockObject\" [ngClass]=\"{'active' : nowTime == clock.time}\" \n                [id]=\"'timepicker-item-id-' + clock.time\" \n                [ngStyle]=\"{top: clock.top,left: clock.left, color: nowTime == clock.time ? config.arrowStyle.color :  '', background: nowTime == clock.time ? config.arrowStyle.background : 'transparent'}\">\n                {{GetClockTime(clock)}}\n              </button>\n              <div class=\"time-picker-clock-origin\" [ngStyle]=\"{ background: config.arrowStyle.background}\"></div>\n              <div id=\"tpc-arrow\" class=\"time-picker-clock-arrow\" [ngStyle]=\"{transform: 'rotate(' + this.degree + 'deg)','-webkit-transform': 'rotate(' + this.degree + 'deg)', background: config.arrowStyle.background}\">\n                <span [ngStyle]=\"{ background: config.arrowStyle.background }\"></span>\n              </div>\n            </div>\n        </div>\n        <div class=\"time-picker-footer\">\n            <button (click)=\"Close($event);\">{{GetLabel('cancel')}}</button>\n            <button (click)=\"GetTime();Close($event);\" class=\"atp-ref-dialog-close\">{{GetLabel('ok')}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n    #time-picker-wrapper {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: transparent;\n      -webkit-transition: background 0.4s;\n      transition: background 0.4s;\n      font-family: 'Roboto', sans-serif;\n      z-index: 1000; }\n      #time-picker-wrapper.static {\n        position: relative !important;\n        background: transparent !important;\n        display: inline-block;\n        z-index: 0; }\n      #time-picker-wrapper.active {\n        background: rgba(0, 0, 0, 0.3); }\n      #time-picker-wrapper.dark #time-picker {\n        background: #424242; }\n        #time-picker-wrapper.dark #time-picker .time-picker-header {\n          border-bottom: none;\n          background: #555555; }\n          #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time {\n            color: #999; }\n            #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: #999; }\n            #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.dark #time-picker .time-picker-clock {\n          background: #555555; }\n          #time-picker-wrapper.dark #time-picker .time-picker-clock > button {\n            color: #fff; }\n        #time-picker-wrapper.dark #time-picker .time-picker-footer {\n          border-top: none; }\n          #time-picker-wrapper.dark #time-picker .time-picker-footer button {\n            background: #555555;\n            color: #fff; }\n            #time-picker-wrapper.dark #time-picker .time-picker-footer button:hover {\n              background: #777; }\n      #time-picker-wrapper.light #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.light #time-picker .time-picker-header {\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time {\n            color: #aaa; }\n            #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #000; }\n          #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: #aaa; }\n            #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #000; }\n        #time-picker-wrapper.light #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.light #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.light #time-picker .time-picker-clock > button.active {\n              background: blue;\n              color: #fff; }\n          #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: blue; }\n          #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: blue; }\n            #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: blue; }\n        #time-picker-wrapper.light #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.light #time-picker .time-picker-footer button {\n            background: #f1f1f1; }\n            #time-picker-wrapper.light #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-green #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.material-green #time-picker .time-picker-header {\n          background-color: #00897b;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.material-green #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.material-green #time-picker .time-picker-clock > button.active {\n              background: #00897b;\n              color: #fff; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: #00897b; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: #00897b; }\n            #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: #00897b; }\n        #time-picker-wrapper.material-green #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-green #time-picker .time-picker-footer button {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #00897b; }\n            #time-picker-wrapper.material-green #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-blue #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.material-blue #time-picker .time-picker-header {\n          background-color: #3F51B5;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.material-blue #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.material-blue #time-picker .time-picker-clock > button.active {\n              background: #3F51B5;\n              color: #fff; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: #3F51B5; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: #3F51B5; }\n            #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: #3F51B5; }\n        #time-picker-wrapper.material-blue #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-blue #time-picker .time-picker-footer button {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #3F51B5; }\n            #time-picker-wrapper.material-blue #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-red #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.material-red #time-picker .time-picker-header {\n          background-color: #F44336;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.material-red #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.material-red #time-picker .time-picker-clock > button.active {\n              background: #F44336;\n              color: #fff; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: #F44336; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: #F44336; }\n            #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: #F44336; }\n        #time-picker-wrapper.material-red #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-red #time-picker .time-picker-footer button {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #F44336; }\n            #time-picker-wrapper.material-red #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-purple #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.material-purple #time-picker .time-picker-header {\n          background-color: #9C27B0;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.material-purple #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.material-purple #time-picker .time-picker-clock > button.active {\n              background: #9C27B0;\n              color: #fff; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: #9C27B0; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: #9C27B0; }\n            #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: #9C27B0; }\n        #time-picker-wrapper.material-purple #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-purple #time-picker .time-picker-footer button {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #9C27B0; }\n            #time-picker-wrapper.material-purple #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-orange #time-picker {\n        background: #fff; }\n        #time-picker-wrapper.material-orange #time-picker .time-picker-header {\n          background-color: #FF9800;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time div.selected {\n              color: #fff; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n              color: #fff; }\n        #time-picker-wrapper.material-orange #time-picker .time-picker-clock {\n          background: #ededed; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-clock > button {\n            color: #000; }\n            #time-picker-wrapper.material-orange #time-picker .time-picker-clock > button.active {\n              background: #FF9800;\n              color: #fff; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-origin {\n            background: #FF9800; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow {\n            background: #FF9800; }\n            #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow span {\n              background: #FF9800; }\n        #time-picker-wrapper.material-orange #time-picker .time-picker-footer {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-orange #time-picker .time-picker-footer button {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #FF9800; }\n            #time-picker-wrapper.material-orange #time-picker .time-picker-footer button:hover {\n              background: #ddd; }\n      #time-picker-wrapper #time-picker {\n        width: 325px;\n        height: auto;\n        -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n                box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n        border-radius: 2px;\n        margin: 15vh auto !important;\n        -webkit-transform: scale(0.5) !important;\n                transform: scale(0.5) !important;\n        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n        transition: opacity 0.3s, -webkit-transform 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n        opacity: 0; }\n        #time-picker-wrapper #time-picker.static {\n          margin: 0px !important;\n          -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n        #time-picker-wrapper #time-picker.active {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n          opacity: 1; }\n        #time-picker-wrapper #time-picker .time-picker-header {\n          text-align: center;\n          padding: 15px 0px; }\n          #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time {\n            font-size: 35px;\n            padding: 5px 0px; }\n            #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div {\n              display: inline-block;\n              cursor: pointer; }\n              #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div[disabled=true] {\n                cursor: default; }\n          #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm {\n            font-size: 18px; }\n            #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div {\n              display: inline-block;\n              padding: 0 5px;\n              cursor: pointer; }\n              #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div[disabled=true] {\n                cursor: default; }\n        #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock {\n          width: 200px;\n          height: 200px;\n          padding: 24px;\n          border-radius: 50%;\n          cursor: pointer;\n          margin: 25px auto;\n          position: relative;\n          user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          -webkit-user-select: none; }\n          #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock button {\n            border: none;\n            position: absolute;\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n            cursor: pointer;\n            font-size: 17px;\n            text-align: center;\n            padding: 0;\n            -webkit-transition: all .2s;\n            transition: all .2s;\n            z-index: 3; }\n          #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-origin {\n            width: 6px;\n            height: 6px;\n            border-radius: 50%;\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            margin-left: -3px;\n            margin-top: -3px; }\n          #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow {\n            width: 2px;\n            height: 41%;\n            position: absolute;\n            left: 0;\n            top: 22px;\n            right: 0;\n            margin: auto;\n            -webkit-transform-origin: top left;\n            transform-origin: bottom; }\n            #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow span {\n              width: 8px;\n              height: 8px;\n              border-radius: 50%;\n              position: absolute;\n              top: 0;\n              right: -3px; }\n        #time-picker-wrapper #time-picker .time-picker-footer {\n          padding: 15px;\n          text-align: right; }\n          #time-picker-wrapper #time-picker .time-picker-footer button {\n            border: transparent;\n            margin-left: 10px;\n            padding: 10px;\n            font-size: 14px;\n            border-radius: 2px;\n            cursor: pointer; }\n\n    * {\n      outline: none;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
TimePickerComponent.ctorParameters = function () { return [
    { type: AtpCoreService, },
]; };
var AtpTimePickerComponent = (function () {
    /**
     * @param {?} resolver
     * @param {?} appRef
     */
    function AtpTimePickerComponent(resolver, appRef) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.timeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = {};
    }
    /**
     * @return {?}
     */
    AtpTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ config = this.config;
        config = {
            time: config.time || '00:00',
            theme: ['light', 'dark', 'material'].indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {}
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : 'blue' : 'blue',
            color: config.arrowStyle.color || '#fff'
        };
        var /** @type {?} */ cfr = this.resolver.resolveComponentFactory(TimePickerComponent);
        var /** @type {?} */ tsc = this.container.createComponent(cfr);
        tsc.instance.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        tsc.instance.activeModal = true;
        tsc.instance.isPopup = false;
        tsc.instance.ParseStringToTime(config.time);
        tsc.instance.subject.asObservable().subscribe(function (time) {
            _this.timeSelected.emit(time);
        });
    };
    return AtpTimePickerComponent;
}());
AtpTimePickerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'atp-time-picker',
                template: "\n    <div #container></div>\n  ",
                styles: ["\n    .atp-time-picker .icon-container {\n      display: inline-block;\n      margin-right: .2em; }\n      .atp-time-picker .icon-container svg {\n        cursor: pointer;\n        position: relative;\n        top: .5em; }\n      .atp-time-picker .icon-container /deep/ i {\n        cursor: pointer; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
AtpTimePickerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
]; };
AtpTimePickerComponent.propDecorators = {
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'timeSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
var arabic = new Intl.NumberFormat('ar-AE');
var persian = new Intl.NumberFormat('fa-IR');
var PersianPreference = {
    hour: function (x) { return persian.format(x); },
    minute: function (x) {
        var /** @type {?} */ exp = persian.format(x);
        if (exp.length === 1) {
            exp = persian.format(0) + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? 'صبح' : 'عصر'; },
    clockHour: function (x) { return persian.format(x); },
    clockMinute: function (x) { return persian.format(x); },
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
var ArabicPreference = {
    hour: function (x) { return arabic.format(x); },
    minute: function (x) {
        var /** @type {?} */ exp = arabic.format(x);
        if (exp.length === 1) {
            exp = arabic.format(0) + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? 'صباحا' : 'مساء'; },
    clockHour: function (x) { return arabic.format(x); },
    clockMinute: function (x) { return arabic.format(x); },
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
var ChinesePreference = {
    hour: function (x) { return x; },
    minute: function (x) {
        var /** @type {?} */ exp = x;
        if (exp.length === 1) {
            exp = '۰' + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? '上午' : '下午'; },
    clockHour: function (x) { return x; },
    clockMinute: function (x) { return x; },
    labels: {
        ok: '好',
        cancel: '取消'
    }
};
var Preference = function (locale) {
    switch (locale) {
        case 'fa':
            return PersianPreference;
        case 'ar':
            return ArabicPreference;
        case 'ch':
            return ChinesePreference;
        default:
            return null;
    }
};
var AmazingTimePickerService = (function () {
    /**
     * @param {?} resolver
     * @param {?} appRef
     * @param {?} injector
     */
    function AmazingTimePickerService(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AmazingTimePickerService.prototype.open = function (config) {
        var /** @type {?} */ thems = ['light', 'dark', 'material-red', 'material-green', 'material-blue', 'material-purple', 'material-orange'];
        config = config || {};
        config = ({
            time: config.time || '00:00',
            theme: thems.indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {},
            locale: config.locale || 'en',
            changeToMinutes: config.changeToMinutes || false,
            preference: config.preference || null,
            onlyHour: config.onlyHour || false,
            onlyMinute: config.onlyMinute || false,
            onlyAM: config.onlyAM || false,
            onlyPM: config.onlyPM || false,
        });
        config.rangeTime = {
            start: config.rangeTime.start || '0:0',
            end: config.rangeTime.end || '24:0',
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : '' : '',
            color: config.arrowStyle.color || ''
        };
        var /** @type {?} */ componentRef = this.resolver.resolveComponentFactory(TimePickerComponent);
        var /** @type {?} */ tsc = componentRef.create(this.injector);
        this.appRef.attachView(tsc.hostView);
        var /** @type {?} */ domElem = (((tsc.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        tsc.instance.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        if (config.preference) {
            tsc.instance.preference = config.preference;
        }
        else {
            tsc.instance.preference = Preference(config.locale);
        }
        tsc.instance.ParseStringToTime(config.time);
        return {
            afterClose: function () {
                return tsc.instance.subject.asObservable();
            }
        };
    };
    return AmazingTimePickerService;
}());
AmazingTimePickerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
AmazingTimePickerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
var AtpDirective = (function () {
    /**
     * @param {?} viewContainerRef
     * @param {?} atp
     */
    function AtpDirective(viewContainerRef, atp) {
        this.viewContainerRef = viewContainerRef;
        this.atp = atp;
        this.myClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = function (x) { };
        this.elementRef = this.viewContainerRef.element;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    AtpDirective.prototype.onClick = function (e) {
        var _this = this;
        var /** @type {?} */ ele = this.viewContainerRef.element.nativeElement;
        var /** @type {?} */ time = ele.value;
        var /** @type {?} */ theme = ele.getAttribute('theme');
        var /** @type {?} */ start = ele.getAttribute('start');
        var /** @type {?} */ end = ele.getAttribute('end');
        var /** @type {?} */ locale = ele.getAttribute('locale') || 'en';
        var /** @type {?} */ changeToMinutes = ele.getAttribute('changeToMinutes') === 'true';
        var /** @type {?} */ preference = ele.getAttribute('preference') || null;
        var /** @type {?} */ onlyHour = ele.getAttribute('onlyHour') || false;
        var /** @type {?} */ onlyMinute = ele.getAttribute('onlyMinute') || false;
        var /** @type {?} */ onlyAM = ele.getAttribute('onlyAM') || false;
        var /** @type {?} */ onlyPM = ele.getAttribute('onlyPM') || false;
        var /** @type {?} */ arrowStyle = ele.getAttribute('arrowStyle');
        arrowStyle = (arrowStyle) ? JSON.parse(arrowStyle.replace(new RegExp('\'', 'g'), '"')) : '';
        var /** @type {?} */ timePickerFunction = this.atp.open({
            time: time,
            theme: theme,
            rangeTime: { start: start, end: end },
            'arrowStyle': arrowStyle,
            locale: locale,
            changeToMinutes: changeToMinutes,
            onlyHour: onlyHour,
            onlyMinute: onlyMinute,
            onlyAM: onlyAM,
            onlyPM: onlyPM,
            preference: preference
        });
        timePickerFunction.afterClose().subscribe(function (retTime) {
            _this.writeValue(retTime); // update the native element
            _this.onChange(retTime); // update the form value (if there's a form)
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AtpDirective.prototype.writeValue = function (value) {
        if (this.elementRef) {
            this.elementRef.nativeElement.value = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AtpDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AtpDirective.prototype.registerOnTouched = function (fn) { };
    return AtpDirective;
}());
AtpDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[atp-time-picker]',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: AtpDirective,
                        multi: true
                    }]
            },] },
];
/**
 * @nocollapse
 */
AtpDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: AmazingTimePickerService, },
]; };
AtpDirective.propDecorators = {
    'myClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
};
var AmazingTimePickerModule = (function () {
    function AmazingTimePickerModule() {
    }
    return AmazingTimePickerModule;
}());
AmazingTimePickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                ],
                declarations: [
                    TimePickerComponent,
                    AtpTimePickerComponent,
                    AtpDirective
                ],
                providers: [
                    AmazingTimePickerService,
                    AtpCoreService
                ],
                entryComponents: [TimePickerComponent],
                exports: [
                    TimePickerComponent,
                    AtpTimePickerComponent,
                    AtpDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AmazingTimePickerModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=amazing-time-picker.es5.js.map


/***/ })

});
//# sourceMappingURL=widget.module.chunk.js.map
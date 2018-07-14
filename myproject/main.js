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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loginform/loginform.component */ "./src/app/loginform/loginform.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import{CustomFormsModule } from 'ng2-validation';
var routes = [
    {
        path: '', component: _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_12__["LoginformComponent"],
    },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        children: [
            {
                path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
            },
            {
                path: 'createrole', component: _form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
            },
            {
                path: 'notification', component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
            },
            {
                path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
            },
            {
                path: 'chart', component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"],
            },
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
                _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_12__["LoginformComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chart works!\n</p>\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
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

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n\n  \n</head>\n\n<div id=\"wrapper\">\n  <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n   </nav>\n  </div>\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return this.http.post('http://localhost/mypro/index.php/My_controller/check_session', { responseType: 'text' }).subscribe(function (res) {
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red\r\n{\r\n\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h1 class=\"page-header\">Create User</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"panel panel-default\">\n\n            <div class=\"panel-heading\">\n                  User Registration Form     <span *ngIf= \"showSuccess()\" class=\"alert alert-success\">{{this.msg}}</span>\n                                </div>\n              <div class=\"panel-body\">\n                  <div class=\"row\">\n                      <div class=\"col-lg-12\">\n                          <form role=\"form\" method=\"POST\" name=\"NgForm\" [formGroup]='signupform' (ngSubmit)='PostData(Userinfo)'>\n                            \n\n                            <div class=\"row\">\n                              <div class=\"col-lg-6\">\n                              <div class=\"form-group\">\n                                  <label>Full Name</label>\n                                    <input class=\"form-control\" #fname formControlName='full_name' ng-model=\"Userinfo.fname\">\n                                    <div *ngIf=\"signupform.controls['full_name'].touched && !signupform.controls['full_name'].valid\">  \n                                        <span class=\"red\" *ngIf=\"signupform.controls['full_name'].hasError('required') \">  \n                                            Enter Your Full Name*\n                                             </span>  </div>\n                            </div>\n                              </div>\n                              <div class=\"col-lg-6\">\n                              <div class=\"form-group\">\n                                  <label>Email</label>\n                                  <input class=\"form-control\" #email placeholder=\"Enter text\" formControlName='email' ng-model=\"Userinfo.email\">\n                                  <div *ngIf=\"signupform.controls['email'].touched && !signupform.controls['email'].valid\">  \n                                    <span class=\"red\" *ngIf=\"signupform.controls['email'].hasError('required') \">  \n                                        This field is required*\n                                         </span>  \n                                 <span  class=\"red\" *ngIf=\"signupform.controls['email'].hasError('email') && !signupform.controls['email'].hasError('required')\">  \n                                       Invalid Email ID  \n                                        </span>  \n                                </div> \n                             \n\n                              </div>\n                          </div>\n                          </div>\n                          <div class=\"row\">\n                          <div class=\"col-lg-6\">\n                                  <div class=\"form-group\">\n                                      <label>Password</label>\n                                      <input type=\"password\"#pass ng-model=\"Userinfo.pwd\"class=\"form-control\" formControlName='password' >\n                                      <div *ngIf=\"signupform.controls['password'].touched && !signupform.controls['password'].valid\">  \n                                        <span class=\"red\" *ngIf=\"signupform.controls['password'].hasError('required') \">  \n                                            This field is required*\n                                             </span>  \n                                     \n                                    </div>  \n                                 \n                                  </div>\n                                  </div>\n                                  <div class=\"col-lg-6\">\n                                          <div class=\"form-group\">\n                                              <label>Contact No.</label>\n                                              <input class=\"form-control\" #contact ng-model=\"Userinfo.contact\"formControlName='contact_no' >\n                                              <div *ngIf=\"signupform.controls['contact_no'].touched && !signupform.controls['contact_no'].valid\">  \n                                                <span class=\"red\" *ngIf=\"signupform.controls['contact_no'].hasError('required') \">  \n                                                    Please Enter Your Contact No*\n                                                     </span>  </div>\n                                          </div>\n                                      </div>\n</div>\n<div class=\"row\">\n                           <div class=\"col-lg-12\">                  \n                              <div class=\"form-group\">\n                                  <label>Address</label>\n                                  <textarea class=\"form-control\"  #address rows=\"2\" formControlName='Address' ng-model=\"Userinfo.address\"></textarea>\n                              </div>\n                              </div>\n                              <div class=\"col-lg-6\">\n                                      <div class=\"form-group\">\n                              <button type=\"submit\" class=\"btn btn-default\"    [disabled]=\"!signupform.valid\" >Submit Button</button>\n                              <button type=\"reset\" class=\"btn btn-default\">Reset Button</button>\n                              </div>\n                              </div>\n                              </div>\n                          </form>\n                      </div>\n                     \n                  </div>\n                  <!-- /.row (nested) -->\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = /** @class */ (function () {
    function FormComponent(http, frmbuilder, router) {
        this.http = http;
        this.frmbuilder = frmbuilder;
        this.router = router;
        this.success = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.signupform = this.frmbuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Address: ['']
        });
    };
    FormComponent.prototype.PostData = function () {
        // const email = signupform.controls.email.value;
        // const full_name = signupform.controls.fname.value;
        // const password = signupform.controls.pass.value;
        // const contact_no = signupform.controls.contact.value;
        // const address = signupform.controls.address.value;
        // console.log(this.signupform.value);
        var _this = this;
        //  const data1 = { email :email,full_name: full_name,password:password,contact_no:contact_no ,address:address};
        this.http.post('http://localhost/mypro/index.php/My_controller/signup', this.signupform.value, { responseType: 'text' }).subscribe(function (res) {
            var myJSON = JSON.parse(res);
            if (myJSON > 0) {
                _this.msg = myJSON.info;
                _this.success = true;
            }
            // if(myJSON.info=='Duplicate Record')
            // {
            // } else if(myJSON.info=='Data Inserted')
            // {
            // }
            // else
            // {
            // }
            console.log(res);
            return false;
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"index.html\">Construction Management</a>\n  </div>\n  <!-- /.navbar-header -->\n\n  <ul class=\"nav navbar-top-links navbar-right\">\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"#\">\n              <i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-messages\">\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <strong>John Smith</strong>\n                          <span class=\"pull-right text-muted\">\n                              <em>Yesterday</em>\n                          </span>\n                      </div>\n                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <strong>John Smith</strong>\n                          <span class=\"pull-right text-muted\">\n                              <em>Yesterday</em>\n                          </span>\n                      </div>\n                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <strong>John Smith</strong>\n                          <span class=\"pull-right text-muted\">\n                              <em>Yesterday</em>\n                          </span>\n                      </div>\n                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a class=\"text-center\" routerLink=\"#\">\n                      <strong>Read All Messages</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n          </ul>\n          <!-- /.dropdown-messages -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"#\">\n              <i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-tasks\">\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <p>\n                              <strong>Task 1</strong>\n                              <span class=\"pull-right text-muted\">40% Complete</span>\n                          </p>\n                          <div class=\"progress progress-striped active\">\n                              <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                                  <span class=\"sr-only\">40% Complete (success)</span>\n                              </div>\n                          </div>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <p>\n                              <strong>Task 2</strong>\n                              <span class=\"pull-right text-muted\">20% Complete</span>\n                          </p>\n                          <div class=\"progress progress-striped active\">\n                              <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n                                  <span class=\"sr-only\">20% Complete</span>\n                              </div>\n                          </div>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <p>\n                              <strong>Task 3</strong>\n                              <span class=\"pull-right text-muted\">60% Complete</span>\n                          </p>\n                          <div class=\"progress progress-striped active\">\n                              <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                                  <span class=\"sr-only\">60% Complete (warning)</span>\n                              </div>\n                          </div>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <p>\n                              <strong>Task 4</strong>\n                              <span class=\"pull-right text-muted\">80% Complete</span>\n                          </p>\n                          <div class=\"progress progress-striped active\">\n                              <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n                                  <span class=\"sr-only\">80% Complete (danger)</span>\n                              </div>\n                          </div>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a class=\"text-center\" routerLink=\"#\">\n                      <strong>See All Tasks</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n          </ul>\n          <!-- /.dropdown-tasks -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"#\">\n              <i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-alerts\">\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <i class=\"fa fa-comment fa-fw\"></i> New Comment\n                          <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                          <span class=\"pull-right text-muted small\">12 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n                          <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <i class=\"fa fa-tasks fa-fw\"></i> New Task\n                          <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a routerLink=\"#\">\n                      <div>\n                          <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                          <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a class=\"text-center\" routerLink=\"#\">\n                      <strong>See All Alerts</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n          </ul>\n          <!-- /.dropdown-alerts -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"#\">\n              <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-user\">\n              <li><a routerLink=\"userprofile\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n              </li>\n              <li><a routerLink=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"logout();\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n              </li>\n          </ul>\n          <!-- /.dropdown-user -->\n      </li>\n      <!-- /.dropdown -->\n  </ul>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('http://localhost/mypro/index.php/My_controller/logout', { responseType: 'text' }).subscribe(function (res) {
            _this.router.navigateByUrl('');
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/loginform/loginform.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginform/loginform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red\r\n{\r\n    color: red;\r\n}\r\n\r\n.green\r\n{\r\n    color: green;\r\n}"

/***/ }),

/***/ "./src/app/loginform/loginform.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginform/loginform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n          <div class=\"login-panel panel panel-default\">\n              <div class=\"panel-heading\">\n                  <h3 class=\"panel-title\">Please Sign In</h3>\n              </div>\n              <div class=\"green\" *ngIf=\"successMsg\">\n                    Please Check your mail for complete registration </div>\n              <div class=\"panel-body\">\n                    \n                <form  #loginForm='ngForm' name=\"loginForm\">\n                    <div class=\"login-form\">\n                      <div class=\"section-field mb-10\">\n                        <label class=\"mb-10\" for=\"name\">User name* </label>\n                        \n                        <span class=\"red\"  *ngIf=\"emailErrM\">\n                         This field is required</span>\n                          <input id=\"name\" class=\"web form-control\" type=\"text\"  #username1 [(ngModel)]=\"username\" placeholder=\"User name\" name=\"web\">\n                       </div>\n                       <div class=\"section-field mb-20\">\n                        <label class=\"mb-10\" for=\"Password\">Password* </label><span class=\"red\"  *ngIf=\"passwordErrM\">\n                         This field is required</span>\n                          <input id=\"Password\" data-toggle=\"password\" class=\"Password form-control\"  [(ngModel)]=\"password\"   #password1 type=\"password\" placeholder=\"Password\" name=\"Password\">\n                       </div>\n                       <div class=\"section-field\">\n                         <!-- <div class=\"remember-checkbox mb-30\">\n                            <input type=\"checkbox\" class=\"form-control\"  [checked]=\"ischecked\"  [(ngModel)]=\"rememberme1\" #rememberme name=\"two\" id=\"two\" />\n                            <label for=\"two\"> Remember me</label>  -->\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input name=\"remember\" type=\"checkbox\" value=\"Remember Me\"  [checked]=\"ischecked\"  [(ngModel)]=\"rememberme1\" #rememberme name=\"two\" id=\"two\" >Remember Me\n                               \n                                </label>\n                                \n                            <a  routerLink=\"/change-password\" class=\"pull-right\">Forgot Password?</a>\n                           </div>\n                         </div>\n                         <!-- <a  style=\"cursor: pointer;\" (click)=\"getUserDetail(username1.value,password1.value,rememberme1)\" class=\"button border black small\">\n                           <span>Log in</span>\n                           <i class=\"fa fa-check\"></i>\n                        </a> -->\n                        <a (click)=\"getUserDetail(username1.value,password1.value,rememberme1)\"  class=\"btn btn-lg btn-success btn-block\">Login</a>\n\n                        <!-- <span class=\"red\"  *ngIf=\"emailvalidation\">\n                         Invalid username\n                         </span>\n                         <span class=\"red\"  *ngIf=\"passwordValidation\">\n                             Invalid Password\n                             </span>\n                              -->\n                      </div>\n             </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loginform/loginform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginform/loginform.component.ts ***!
  \**************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(http, frmbuilder, router, cookieService) {
        this.http = http;
        this.frmbuilder = frmbuilder;
        this.router = router;
        this.cookieService = cookieService;
        this.status = {};
        this.password = this.cookieService.get('password');
        this.username = this.cookieService.get('email');
        this.isVisible = false;
        this.cookieValue = 'UNKNOWN';
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.getUserDetail = function (email, password, rememberme) {
        var _this = this;
        this.emailErrM = false;
        this.isVisible = false;
        this.passwordErrM = false;
        this.errCount = 0;
        if (email == '') {
            this.emailErrM = true;
            this.errCount++;
        }
        if (password == '') {
            this.passwordErrM = true;
            this.errCount++;
        }
        if (rememberme) {
            this.cookieService.set('email', email);
            this.cookieService.set('password', password);
        }
        else {
            this.cookieService.set('email', '');
            this.cookieService.set('password', '');
        }
        if (this.errCount == 0) {
            var data1 = { email: email, password: password };
            // this.http.post('login/', data1).subscribe(res => 
            return this.http.post('http://localhost/mypro/index.php/My_controller/login', data1, { responseType: 'text' }).subscribe(function (res) {
                console.log(res);
                var myJSON = JSON.parse(res);
                if (myJSON.info == 'Login SuccessFull') {
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    alert(myJSON.info);
                }
            });
        }
    };
    LoginformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LoginformComponent);
    return LoginformComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h1 class=\"page-header\">Notifications</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n    \n      <!-- /.col-lg-6 -->\n      <div class=\"col-lg-12\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  Dismissable Alerts\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <div class=\"alert alert-success alert-dismissable\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\" class=\"alert-link\">Alert Link</a>.\n                  </div>\n                  <div class=\"alert alert-info alert-dismissable\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\" class=\"alert-link\">Alert Link</a>.\n                  </div>\n                  <div class=\"alert alert-warning alert-dismissable\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\" class=\"alert-link\">Alert Link</a>.\n                  </div>\n                  <div class=\"alert alert-danger alert-dismissable\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\" class=\"alert-link\">Alert Link</a>.\n                  </div>\n              </div>\n              <!-- .panel-body -->\n          </div>\n          <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-6 -->\n  </div>\n\n  <!-- /.row -->\n</div> "

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\n    <div class=\"sidebar-nav navbar-collapse\">\n        <ul class=\"nav\" id=\"side-menu\">\n            <li class=\"sidebar-search\">\n                <div class=\"input-group custom-search-form\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                    <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"button\">\n                        <i class=\"fa fa-search\"></i>\n                    </button>\n                </span>\n                </div>\n                <!-- /input-group -->\n            </li>\n            <li>\n                <a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-user-md   fa-fw\">\n\n                </i> Create User<span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"createrole\">Manager</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"createrole\">Supervisors</a>\n                  \n                </ul>\n                <!-- /.nav-second-level -->\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-table fa-fw\"></i>Manage Report\n                    <span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"signup\">Create Report</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"createrole\">Submit Report</a>\n                  </li>\n\n                  <li>\n                    <a routerLink=\"createrole\">View Report</a>\n              </li>\n                </ul>\n                \n            </li>\n            <li>\n                <a routerLink=\"viewchart\"><i class=\"fa fa-bar-chart-o   fa-fw\">\n\n                </i> View Chart<span class=\"fa arrow\"></span></a></li>\n            <li>\n                <a routerLink=\"notification\"><i class=\"fa fa-edit fa-fw\"></i> Notifications<span class=\"fa arrow\"></span></a>\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-money fa-fw\"></i>Project Financial Status<span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"panels-wells.html\">Total Budget</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"buttons.html\">Total Expanse</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"notifications.html\">Total Remaning</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"typography.html\">Overall Details</a>\n                    </li>\n                   \n                </ul>\n\n                <!-- /.nav-second-level -->\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-signal fa-fw\"></i>Project Status<span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"panels-wells.html\">Project Deadline</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"buttons.html\">Pending Work</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"notifications.html\">Complete Work</a>\n                    </li>\n                   \n                </ul>\n\n                <!-- /.nav-second-level -->\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-sitemap fa-fw\"></i> Multi-Level Dropdown<span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"#\">Second Level Item</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"#\">Second Level Item</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"#\">Third Level <span class=\"fa arrow\"></span></a>\n                        <ul class=\"nav nav-third-level\">\n                            <li>\n                                <a routerLink=\"#\">Third Level Item</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"#\">Third Level Item</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"#\">Third Level Item</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"#\">Third Level Item</a>\n                            </li>\n                        </ul>\n                        <!-- /.nav-third-level -->\n                    </li>\n                </ul>\n                <!-- /.nav-second-level -->\n            </li>\n            <li>\n                <a routerLink=\"#\"><i class=\"fa fa-files-o fa-fw\"></i> Sample Pages<span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level\">\n                    <li>\n                        <a routerLink=\"blank.html\">Blank Page</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"login.html\">Login Page</a>\n                    </li>\n                </ul>\n                <!-- /.nav-second-level -->\n            </li>\n        </ul>\n    </div>\n    <!-- /.sidebar-collapse -->\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"parallax gray-bg page-section-ptb\">\n  \n   \n  <!--=================================\n   login-->\n  \n  <section class=\"section-transparent page-section-pb\">\n    <div class=\"container\">\n       <div class=\"row\">\n         <div class=\"col-md-6 col-md-offset-3\">\n         <div class=\"text-center\">\n             <h3>Registration</h3>\n          </div>\n         <div class=\"divider\"></div><br>\n          <div class=\"login-bg clearfix\">\n             <div class=\"red\" *ngIf=\"uniqueEmailErrM\">\n                Please check your Email, You have already registered, you need to Complete your Full registration,<a  (click)=\"sendMail(signupForm)\" style=\"cursor:pointer\">(Click here to resend mail)</a>\n  <!-- This email address is already registered with Datanyze. To log in to your account, please <a  routerLink=\"/login\">click here </a>  You can also reset your password <a  routerLink=\"/change-password\" >here    </a> -->\n         </div>\n             \n             <div class=\"green\" *ngIf=\"successMsg\">\n                Please Check your mail for complete registration </div>\n               <h6 class=\" mb-0\">Enter a company email address to get started:</h6>\n              <form ng-form=\"registration\" method=\"POST\" name=\"reg_form\" [formGroup]='signupForm' (ngSubmit)=\"PostData(email.value)\">\n                \n               <div class=\"login-form\" ng-app=\"\">\n                 <div class=\"section-field mb-20\">\n                   <!-- <label class=\"mb-10\" for=\"name\">Company Email* </label><span class=\"red\"  *ngIf=\"EmailErrM\">\n                    This field is required</span> -->\n                     <input id=\"email\" ng-model=\"email\" #email   name=\"email\" formControlName='email'  class=\"web form-control\" type=\"text\" placeholder=\"User name\" name=\"web\">\n                     <!-- <div *ngIf=\"signupForm.controls['email'].touched && !signupForm.controls['email'].valid\">  \n                        <span class=\"red\" *ngIf=\"signupForm.controls['email'].hasError('required') \">  \n                            This field is required\n                             </span>  \n                     <span  class=\"red\" *ngIf=\"signupForm.controls['email'].hasError('email') && !signupForm.controls['email'].hasError('required')\">  \n                           Invalid Email ID  \n                            </span>  \n                    </div>   -->\n                    </div>\n                    <input type=\"Submit\" class=\"button border black small\" value=\"Create Free Account\" [disabled]='!signupForm.valid' >  \n                    \n                 </div>\n                 \n                 </form>\n                <div class=\"login-social text-center clearfix\">\n                  \n                  <p>Already have a Datanyze account? Please <a routerLink=\"/login\">log in here.</a></p>\n                </div>\n             </div>\n             \n          </div>\n        </div>\n    </div>\n  </section>\n  \n  <!--=================================\n   login-->\n  \n   </div>\n  </div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, router, frmbuilder) {
        this.http = http;
        this.router = router;
        this.frmbuilder = frmbuilder;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.frmbuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.signupForm = this.frmbuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
        });
    };
    SignupComponent.prototype.sendMail = function (signupForm) {
        var _this = this;
        var email = signupForm.controls.email.value;
        var data1 = { email: email };
        this.http.post('login/sendmail', data1).subscribe(function (res) {
            var CountData = Object.keys(res);
            _this.successMsg = true;
            _this.EmailErrM = false;
            _this.uniqueEmailErrM = false;
            setTimeout(function () {
                _this.router.navigateByUrl('/login');
            }, 6000);
            return false;
        });
    };
    SignupComponent.prototype.PostData = function (email) {
        var _this = this;
        // const email = signupForm.controls.email.value;
        // const full_name = signupForm.controls.full_name.value;
        // const password = signupForm.controls.passord.value;
        // const contact_no = signupForm.controls.contact_no.value;
        // const address = signupForm.controls.address.value;
        this.EmailErrM = false;
        // tslint:disable-next-line:triple-equals
        if (email == '') {
            this.EmailErrM = true;
            this.successMsg = false;
        }
        else {
            var data1 = { email: email };
            this.http.post('http://localhost/mypro/index.php/My_controller/signup', data1).subscribe(function (res) {
                var CountData = Object.keys(res);
                console.log(res);
                if (res['code'] == 'ER_DUP_ENTRY') {
                    _this.uniqueEmailErrM = true;
                }
                else if (CountData.length > 0) {
                    _this.successMsg = true;
                    setTimeout(function () {
                        _this.router.navigateByUrl('/login');
                    }, 6000);
                }
                else {
                    _this.router.navigateByUrl('/');
                }
                return false;
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n <div id=\"page-wrapper\">\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              Hover Rows\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <th>#</th>\n                              <th>First Name</th>\n                              <th>Last Name</th>\n                              <th>Username</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>1</td>\n                              <td>Mark</td>\n                              <td>Otto</td>\n                              <td>@mdo</td>\n                          </tr>\n                          <tr>\n                              <td>2</td>\n                              <td>Jacob</td>\n                              <td>Thornton</td>\n                              <td>@fat</td>\n                          </tr>\n                          <tr>\n                              <td>3</td>\n                              <td>Larry</td>\n                              <td>the Bird</td>\n                              <td>@twitter</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n              <!-- /.table-responsive -->\n          </div>\n          <!-- /.panel-body -->\n      </div>\n      <!-- /.panel -->\n  </div>\n  \n</div>\n</div>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
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

var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent() {
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserprofileComponent);
    return UserprofileComponent;
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

module.exports = __webpack_require__(/*! H:\testdemo\myproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
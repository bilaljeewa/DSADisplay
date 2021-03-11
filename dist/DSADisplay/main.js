(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\DSADisplay\src\main.ts */"zUnb");


/***/ }),

/***/ "06Pq":
/*!**********************************************************************!*\
  !*** ./src/app/Component/view-all-event/view-all-event.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewAllEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllEventComponent", function() { return ViewAllEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");








function ViewAllEventComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllEventComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendTo(event_r3.eventcode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r3.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", event_r3.address1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, event_r3.BeginDate, "EEEE, MMMM d, y"), ", ", ctx_r0.dateFormate(event_r3.BeginDate), " - ", ctx_r0.dateFormate(event_r3.endDate), "");
} }
function ViewAllEventComponent_div_31_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewAllEventComponent_div_31_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewAllEventComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewAllEventComponent_div_31_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewAllEventComponent_div_31_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r1.letInform.get("email")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r1.letInform.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.letInform.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r1.letInform.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
function ViewAllEventComponent_div_68_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewAllEventComponent_div_68_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewAllEventComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewAllEventComponent_div_68_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewAllEventComponent_div_68_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r2.letInform.get("email")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r2.letInform.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.letInform.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r2.letInform.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
class ViewAllEventComponent {
    constructor(settingsService, _snackBar, fb) {
        this.settingsService = settingsService;
        this._snackBar = _snackBar;
        this.fb = fb;
        this.searchArray = [];
        this.eventData = Array();
        this.sharedData = Array();
        this.zipState = Array();
        this.createTable();
    }
    createTable() {
        this.letInform = this.fb.group({
            fName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
            acceptCondtion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        setTimeout(() => {
            var elements = document.querySelectorAll(".ViewAllLocation");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', () => {
                    jQuery("#viewAllEventModal").modal('show');
                });
            }
            var elements = document.querySelectorAll(".LetsTalk");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', () => {
                    jQuery("#viewAllEventModals").modal('show');
                });
            }
            var elements = document.querySelectorAll(".StayInformed");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', () => {
                    jQuery("#viewAllEventModalss").modal('show');
                });
            }
        }, 100);
        this.settingsService.getEventDatas("$/DSA/FTF/All FTF Events").subscribe(values => {
            this.eventData = values;
            this.eventData.forEach(resp => {
                let city = '';
                let address1 = '';
                let BeginDate = '';
                let eventcode = '';
                let endDate = '';
                resp.Properties.$values.forEach(element => {
                    if (element.Name == 'City') {
                        city = element.Value;
                    }
                    else if (element.Name == 'Address1') {
                        address1 = element.Value;
                    }
                    else if (element.Name == 'StartDateTime') {
                        BeginDate = element.Value;
                    }
                    else if (element.Name == 'EndDateTime') {
                        endDate = element.Value;
                    }
                    else if (element.Name == 'EventId') {
                        eventcode = element.Value;
                    }
                });
                this.sharedData.push({ city, address1, BeginDate, eventcode, endDate });
            });
        });
    }
    sendTo(event) {
        this.settingsService.getEventDetails(event);
    }
    sendStayInformed() {
        var _a, _b, _c, _d, _e;
        console.log(this.letInform);
        if (this.letInform.status == 'VALID') {
            let jsonData = String.raw `{"message":"{\"value\":\"` + ((_a = this.letInform.get(`message`)) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\",\"score\":0}","mobile":"{\"value\":\"` + ((_b = this.letInform.get(`mobile`)) === null || _b === void 0 ? void 0 : _b.value) + String.raw `\",\"score\":0}","firstname":"{\"value\":\"` + ((_c = this.letInform.get(`fName`)) === null || _c === void 0 ? void 0 : _c.value) + String.raw `\",\"score\":0}","lastname":"{\"value\":\"` + ((_d = this.letInform.get(`lName`)) === null || _d === void 0 ? void 0 : _d.value) + String.raw `\",\"score\":0}","email":"{\"value\":\"` + ((_e = this.letInform.get(`email`)) === null || _e === void 0 ? void 0 : _e.value) + String.raw `\",\"score\":0}","Type":"{\"value\":\"StayInformed\"}"}`;
            this.settingsService.postGPdata(jsonData, 'FaceTheFactsStayInformed').subscribe(resp => {
                console.log(resp);
                this.letInform.reset();
                // this.openSnackBar('Information Sent Successfully','')
            });
            this.letInform.reset();
            jQuery("#viewAllEventModalss").modal('hide');
            this.openSnackBar('Information Sent Successfully', '');
        }
    }
    sendLoginInformed() {
        var _a, _b, _c, _d, _e;
        console.log(this.letInform);
        if (this.letInform.status == 'VALID') {
            let jsonData = String.raw `{"message":"{\"value\":\"` + ((_a = this.letInform.get(`message`)) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\",\"score\":0}","mobile":"{\"value\":\"` + ((_b = this.letInform.get(`mobile`)) === null || _b === void 0 ? void 0 : _b.value) + String.raw `\",\"score\":0}","firstname":"{\"value\":\"` + ((_c = this.letInform.get(`fName`)) === null || _c === void 0 ? void 0 : _c.value) + String.raw `\",\"score\":0}","lastname":"{\"value\":\"` + ((_d = this.letInform.get(`lName`)) === null || _d === void 0 ? void 0 : _d.value) + String.raw `\",\"score\":0}","email":"{\"value\":\"` + ((_e = this.letInform.get(`email`)) === null || _e === void 0 ? void 0 : _e.value) + String.raw `\",\"score\":0}","Type":"{\"value\":\"LetsTalk\"}"}`;
            this.settingsService.postGPdata(jsonData, 'FaceTheFactsLetsTalk').subscribe(resp => {
                console.log(resp);
                // this.openSnackBar('Information Sent Successfully','')
            });
            this.letInform.reset();
            jQuery("#viewAllEventModals").modal('hide');
            this.openSnackBar('Information Sent Successfully', '');
        }
    }
    do(event) {
        event.preventDefault();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
            panelClass: ['red-snackbar']
        });
    }
    openNew() {
        window.open('https://www.facethefacts.org.au/Info/terms_and_conditions.aspx');
    }
    dateFormate(value) {
        console.log(value);
        var time = new Date(value);
        let ampm = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return ampm;
    }
}
ViewAllEventComponent.ɵfac = function ViewAllEventComponent_Factory(t) { return new (t || ViewAllEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ViewAllEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAllEventComponent, selectors: [["app-view-all-event"]], inputs: { settings: "settings" }, decls: 87, vars: 5, consts: [["id", "viewAllEventModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "view-modal", 2, "z-index", "9999!important"], ["role", "document", 1, "modal-dialog", "modal-dialogs"], [1, "modal-content", "mt-5", "pt-5", "backgound-none", "event-heights"], [1, "modal-header", "border-none"], ["id", "exampleModalLabel", 1, "modal-title", "headings"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 2, "font-size", "65px", "color", "#fff"], [1, "modal-body"], [1, "row"], ["class", "col-6 my-3 pointer-cursor", 3, "click", 4, "ngFor", "ngForOf"], ["id", "viewAllEventModals", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel1", "aria-hidden", "true", 1, "modal", "fade", "view-modal", 2, "z-index", "9999!important"], [1, "modal-content", "mt-5", "pt-5", "backgound-none"], ["id", "exampleModalLabel1", 1, "modal-title", "headings"], [1, "modal-body", 3, "formGroup"], [1, "row", "my-4"], [1, "col-6"], ["formControlName", "fName", "type", "text", "placeholder", "First Name*", 1, "input-box", "full-width"], ["formControlName", "lName", "type", "text", "placeholder", "Last Name*", 1, "input-box", "full-width"], [1, "col-12"], ["formControlName", "email", "type", "text", "placeholder", "Email*", 1, "input-box", "full-width"], ["class", "error", 4, "ngIf"], ["formControlName", "mobile", "type", "text", "placeholder", "Mobile*", 1, "input-box", "full-width"], [1, "col"], ["formControlName", "message", "placeholder", "How can we help you", 1, "input-box", "full-width", "text-boxDSA"], [1, "col", "text-left", "text-white"], ["formControlName", "acceptCondtion", 1, "example-margin"], [1, "text-white"], [1, "terms_cond", 3, "click"], [1, "col", "text-center"], [1, "btn-primarys", 3, "click"], ["id", "viewAllEventModalss", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel1", "aria-hidden", "true", 1, "modal", "fade", "view-modal", 2, "z-index", "9999!important"], [1, "col-6", "my-3", "pointer-cursor", 3, "click"], [1, "city-bold"], [1, "error"], [4, "ngIf"]], template: function ViewAllEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All event locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewAllEventComponent_div_12_Template, 8, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Let's Talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewAllEventComponent_div_31_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllEventComponent_Template_span_click_44_listener($event) { ctx.openNew(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllEventComponent_Template_button_click_48_listener($event) { ctx.sendLoginInformed(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Stay Informed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ViewAllEventComponent_div_68_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllEventComponent_Template_span_click_81_listener($event) { ctx.openNew(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllEventComponent_Template_button_click_85_listener($event) { ctx.sendStayInformed(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sharedData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.letInform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.letInform.get("email")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.letInform.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.letInform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.letInform.get("email")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.letInform.get("email")) == null ? null : tmp_4_0.touched));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n  \r\n  .view-all-event[_ngcontent-%COMP%]{\r\n        color: #404141;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n  \r\n  .heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n  \r\n  .headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n  \r\n  .view-modal[_ngcontent-%COMP%]{\r\n        background: #000000ed;\r\n        \r\n        color: #fff\r\n    }\r\n  \r\n  .border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #ed1c24;\r\n  border-color: #ed1c24;\r\n  border-radius: 20px;\r\n  padding: 5px 25px;\r\n  outline: none;\r\n}\r\n  \r\n  \r\n  \r\n  .mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n  \r\n  .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n  \r\n  \r\n  \r\n  .event-heights[_ngcontent-%COMP%]{\r\n  max-height: calc(100vh - 20px)!important;\r\n  \r\n}\r\n  \r\n  .event-heights[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  scrollbar-width: none; \r\n  -ms-overflow-style: none;  \r\n}\r\n  \r\n  .event-heights[_ngcontent-%COMP%]::-webkit-scrollbar { \r\n  width: 0;\r\n  height: 0;\r\n}\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  \r\n  .city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]:hover{\r\n    color:#ed1c24\r\n}\r\n  \r\n  .btn-primarys[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background: #ed1c24!important;\r\n  border: #ed1c24!important;\r\n  border-radius: 20px!important;\r\n  padding: 5px 60px!important;\r\n  margin: 1rem!important;\r\n  outline: none;\r\n}\r\n  \r\n  .input-box[_ngcontent-%COMP%]{\r\n  border-radius: 20px;\r\n\r\n}\r\n  \r\n  .full-width[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n    .mat-checkbox-inner-container {\r\n  border: 1px solid white!important;\r\n}\r\n  \r\n  .text-boxDSA[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n}\r\n  \r\n  .accptcondition[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\r\n  line-height: 24px;\r\n  color: #fff!important;\r\n}\r\n  \r\n  label[_ngcontent-%COMP%], .Label[_ngcontent-%COMP%], .PanelFieldLabelFont[_ngcontent-%COMP%] {\r\n  color: #fff!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYWxsLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7S0FJSzs7RUFFSDtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7RUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEIsZUFBZTtJQUNmOztFQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7RUFDQTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjs7RUFFQTtRQUNJLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0I7SUFDSjs7RUFDQTtRQUNJLDZCQUE2QjtJQUNqQzs7RUFFSjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztFQUNBOztHQUVHOztFQUNIO0VBQ0UsZ0NBQWdDO0FBQ2xDOztFQUNBOzs7O0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7RUFDQTs7OztHQUlHOztFQUNIO0VBQ0Usd0NBQXdDOztBQUUxQzs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBRSxZQUFZO0VBQ25DLHdCQUF3QixHQUFHLDBCQUEwQjtBQUN2RDs7RUFDQSxvQ0FBb0MsV0FBVztFQUM3QyxRQUFRO0VBQ1IsU0FBUztBQUNYOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFDQTtJQUNJO0FBQ0o7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSxtQkFBbUI7O0FBRXJCOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztFQUNBO0VBQ0UsYUFBYTtBQUNmOztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7RUFDQztFQUNDLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ2aWV3LWFsbC1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9ICovXHJcbiAgXHJcbiAgLndpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC52aWV3LWFsbC1ldmVudHtcclxuICAgICAgICBjb2xvcjogIzQwNDE0MTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmdze1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy1tb2RhbHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwZWQ7XHJcbiAgICAgICAgLyogb3BhY2l0eTogLjghaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLW5vbmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfSAgXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSAgIFxyXG4vKiAuY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn0gKi9cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwIWltcG9ydGFudDtcclxufVxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLyogLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcbi5ldmVudC1oZWlnaHRze1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KSFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuLmV2ZW50LWhlaWdodHMge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxufVxyXG4uZXZlbnQtaGVpZ2h0czo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNpdHktYm9sZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucG9pbnRlci1jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wb2ludGVyLWN1cnNvcjpob3ZlcntcclxuICAgIGNvbG9yOiNlZDFjMjRcclxufVxyXG4uYnRuLXByaW1hcnlze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogI2VkMWMyNCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4IDYwcHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSBcclxuLmlucHV0LWJveHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxufVxyXG4uZnVsbC13aWR0aHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ib3hEU0F7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYWNjcHRjb25kaXRpb24gLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbiBsYWJlbCwgLkxhYmVsLCAuUGFuZWxGaWVsZExhYmVsRm9udCB7XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAllEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-all-event',
                templateUrl: './view-all-event.component.html',
                styleUrls: ['./view-all-event.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7FDL":
/*!*************************************!*\
  !*** ./src/app/pipe/common.pipe.ts ***!
  \*************************************/
/*! exports provided: SanitizeHtmlPipe, DaysLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysLeft", function() { return DaysLeft; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        if (value) {
            value = value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SanitizeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanitizeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sanitizeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();
class DaysLeft {
    transform(value) {
        let todayDate = new Date();
        let eDate = new Date(value);
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((todayDate - eDate) / oneDay));
        return diffDays;
    }
}
DaysLeft.ɵfac = function DaysLeft_Factory(t) { return new (t || DaysLeft)(); };
DaysLeft.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "daysLeft", type: DaysLeft, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaysLeft, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'daysLeft'
            }]
    }], null, null); })();


/***/ }),

/***/ "7Gpe":
/*!*********************************************!*\
  !*** ./src/app/service/settings.service.ts ***!
  \*********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-base */ "AzAJ");
/* harmony import */ var _content_keys_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-keys.service */ "z2z+");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context.service */ "uCTQ");









class SettingsService extends _service_base__WEBPACK_IMPORTED_MODULE_4__["ServiceBase"] {
    constructor(http, contentKeysService, contextService) {
        super(contextService);
        this.http = http;
        this.contentKeysService = contentKeysService;
        this.sharedData = Array();
        this.contentItmeKeyCounter = 0;
    }
    GetSettingsDSA() {
        let params;
        for (let i = 0; i < this.contentKeysService.contentItemKey.length; i++) {
            if (i == this.contentItmeKeyCounter) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                    .set('contentKey', this.contentKeysService.contentKey[i])
                    .set('contentItemKey', this.contentKeysService.contentItemKey[i]);
                this.contentItmeKeyCounter++;
                const headers = this.getHeaders();
                const url = this.getUrl('ContentItem');
                return this.http.get(url, { params, headers, withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
            }
            else {
                console.log("return null");
            }
        }
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('contentKey', this.contentKeysService.contentKey[0])
            .set('contentItemKey', this.contentKeysService.contentItemKey[0]);
        this.contentItmeKeyCounter++;
        const headers = this.getHeaders();
        const url = this.getUrl('ContentItem');
        return this.http.get(url, { params, headers, withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getEventData(value, event) {
        const httpOptions = {
            headers: this.getHeaders()
        };
        let url = this.getUrl('iqa');
        let par = this.getQueryParameters(value);
        url = url + '?QueryName=' + value + '&parameter=&parameter=' + event;
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.Items.$values;
        }));
    }
    getEventDatas(value) {
        const httpOptions = {
            headers: this.getHeaders()
        };
        let url = this.getUrl('iqa');
        url = url + '?QueryName=' + value;
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.Items.$values;
        }));
    }
    getGIData(value, event) {
        const httpOptions = {
            headers: this.getHeaders()
        };
        let url = this.getUrl('iqa');
        url = url + '?QueryName=' + value + '&parameter=' + event;
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.Items.$values;
        }));
    }
    getEventDetails(event) {
        let base = this.getUrl('');
        let url = this.getBase('');
        url = url + 'event.aspx?EventKey=' + event;
        window.open(url);
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    getQueryParameters(queryPath) {
        return this.getLiveQueryParameters(queryPath);
    }
    getLiveQueryParameters(queryPath) {
        const httpOptions = {
            headers: this.getHeaders()
        };
        let findBypath = {
            "$type": "Asi.Soa.Core.DataContracts.GenericExecuteRequest, Asi.Contracts",
            "OperationName": "FindByPath",
            "EntityTypeName": "QueryDefinition",
            "Parameters": {
                "$type": "System.Collections.ObjectModel.Collection`1[[System.Object, mscorlib]], mscorlib",
                "$values": [
                    {
                        "$type": "System.String",
                        "$value": queryPath //particular query.
                    }
                ]
            },
            "ParameterTypeName": {
                "$type": "System.Collections.ObjectModel.Collection`1[[System.String, mscorlib]], mscorlib",
                "$values": [
                    "System.String"
                ]
            },
            "UseJson": false
        };
        let url = this.baseURL + 'api/QueryDefinition/_execute';
        return this.http.post(url, findBypath, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    postGPdata(dataJson, urls) {
        let findBypath = dataJson;
        let url = 'https://api.facethefacts.org.au/DSAWebApi/api/FaceTheFacts/' + this.getSelectedID();
        return this.http.post(url, findBypath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    getSupportRef(event, testId) {
        if (event == 0) {
            window.open(this.getWebSiteRoot('') + 'Info/poc?TestId=' + testId);
        }
        else {
            window.open(this.getWebSiteRoot('') + 'Info/poc');
        }
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_content_keys_service__WEBPACK_IMPORTED_MODULE_5__["ContentKeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_context_service__WEBPACK_IMPORTED_MODULE_6__["ContextService"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _content_keys_service__WEBPACK_IMPORTED_MODULE_5__["ContentKeysService"] }, { type: _context_service__WEBPACK_IMPORTED_MODULE_6__["ContextService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzAJ":
/*!*****************************************!*\
  !*** ./src/app/service/service-base.ts ***!
  \*****************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class ServiceBase {
    constructor(contextService) {
        this.contextService = contextService;
        this.baseURL = this.contextService.baseUrl;
    }
    getHeaders() {
        if (this.contextService.proxy)
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.contextService.authToken).set('Content-Type', 'application/json');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('RequestVerificationToken', this.contextService.authToken).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'OPTIONS, HEAD, DELETE, POST, GET');
    }
    getUrl(request) {
        if (this.contextService.proxy)
            return 'api/' + request;
        return this.contextService.baseUrl + 'api/' + request;
    }
    getBase(request) {
        if (this.contextService.proxy)
            return '' + request;
        return window.location.origin + this.contextService.baseUrl;
    }
    getWebSiteRoot(request) {
        if (this.contextService.proxy)
            return 'api/' + request;
        return this.contextService.webSiteRoot + request;
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    getSelectedID() {
        return this.contextService.selectedPartyId;
    }
}


/***/ }),

/***/ "KgMQ":
/*!******************************************************************!*\
  !*** ./src/app/Component/event-detail/event-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipe/common.pipe */ "7FDL");





function EventDetailComponent_div_0_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "daysLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.sharedData[0].dayLeft), " Days");
} }
function EventDetailComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sharedData[0].address);
} }
function EventDetailComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "sanitizeHtml");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.sharedData[0].desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EventDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "THE EVENT IS IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventDetailComponent_div_0_h2_3_Template, 3, 3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventDetailComponent_div_0_p_4_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailComponent_div_0_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.openViewModal(); return ctx_r4.do($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find a Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Event Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventDetailComponent_div_0_div_9_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].dayLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].desc);
} }
class EventDetailComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.eventData = Array();
        this.sharedData = Array();
        this.check = "2021-02-20T18:00:00";
    }
    ngOnInit() {
        let url = window.location.search;
        if (url && url.split && url.split("EventKey=")) {
            let KeyEvents = url.split('EventKey=');
            let keys = KeyEvents[1];
            if (keys) {
                let keys2 = keys.split('&').length;
                let keys3;
                if (keys2 > 1) {
                    keys3 = keys.split('&')[0];
                }
                else {
                    keys3 = keys;
                }
                if (this.settings && this.settings.IQA) {
                    this.settingsService.getEventData(this.settings.IQA, keys3).subscribe(values => {
                        this.eventData = values[0].Properties.$values;
                        let desc;
                        let dayLeft;
                        let address;
                        this.eventData.forEach(resp => {
                            if (resp.Name == 'AdditionalDescription') {
                                desc = resp.Value;
                            }
                            else if (resp.Name == 'StartDateTime') {
                                dayLeft = resp.Value;
                            }
                            else if (resp.Name == 'Address1') {
                                address = resp.Value;
                            }
                        });
                        this.sharedData.push({ desc, dayLeft, address });
                    });
                }
            }
        }
    }
    openViewModal() {
        setTimeout(() => {
            jQuery('#viewAllEventModal').modal('show');
        }, 500);
    }
    do(event) {
        event.preventDefault();
    }
}
EventDetailComponent.ɵfac = function EventDetailComponent_Factory(t) { return new (t || EventDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
EventDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailComponent, selectors: [["app-event-detail"]], inputs: { settings: "settings" }, decls: 1, vars: 1, consts: [["class", "text-center padding-body", 4, "ngIf"], [1, "text-center", "padding-body"], [1, "first-heading"], ["class", "day-heading", 4, "ngIf"], ["class", "first-heading", 4, "ngIf"], [1, "btn", "btn-primary", "ViewAllLocation", 3, "click"], [1, "event-inform-heading"], ["class", "event-inform-detail", 3, "innerHTML", 4, "ngIf"], [1, "day-heading"], [1, "event-inform-detail", 3, "innerHTML"]], template: function EventDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventDetailComponent_div_0_Template, 10, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharedData && ctx.sharedData[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__["DaysLeft"], _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__["SanitizeHtmlPipe"]], styles: [".form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n  \r\n  .view-all-event[_ngcontent-%COMP%]{\r\n      color: #fff;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n  \r\n  .heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n  \r\n  .headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n    }\r\n  \r\n  .view-modal[_ngcontent-%COMP%]{\r\n        background: #000;\r\n        opacity: .8!important;\r\n        color: #fff\r\n    }\r\n  \r\n  .border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n  \r\n  .modal-dialogs[_ngcontent-%COMP%]{\r\n  max-width: 800px!important;\r\n}\r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #ed1c24!important;\r\n    border: #ed1c24!important;\r\n    border-radius: 20px!important;\r\n    padding: 5px 60px!important;\r\n    margin: 1rem!important;\r\n}\r\n  \r\n  .container[_ngcontent-%COMP%]{\r\n  max-width: 500px;\r\n}\r\n  \r\n  .mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n  \r\n  .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n  \r\n  \r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  \r\n  .city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n  \r\n  .first-heading[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    margin-bottom: 0;\r\n}\r\n  \r\n  .day-heading[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    border: none!important;\r\n}\r\n  \r\n  .second-heading[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n\r\n}\r\n  \r\n  .event-inform-heading[_ngcontent-%COMP%]{\r\n    font-size: 37px;\r\n    font-weight: bold;\r\n}\r\n  \r\n  .event-inform-detail[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    max-width: 510px!important;\r\n    margin: 0 auto;\r\n}\r\n  \r\n  .padding-body[_ngcontent-%COMP%]{\r\n  padding: 95px 0;\r\n  color: #fff!important;\r\n}\r\n  \r\n  .after_modal_appended[_ngcontent-%COMP%]\r\n{  \r\n  position:relative;\r\n}\r\n  \r\n  .modal[_ngcontent-%COMP%], .modal-backdrop[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n}\r\n  \r\n  .blue[_ngcontent-%COMP%]\r\n{\r\n \r\n  position: relative;\r\n}\r\n  \r\n  .red[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n  \r\n  .block[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: calc(100vh - 20px);\r\n\r\n}\r\n  \r\n  .modal-backdrop[_ngcontent-%COMP%]{\r\n    position: absolute!important;\r\n}\r\n  \r\n  .diabetes[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\r\n    position: absolute!important;\r\n    \r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1040;\r\n    background-color: #000;\r\n}\r\n  \r\n  .eventDetails-container[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient( rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.73)), url(https://www.imisconsulting.com.au//iMIS0/images/Site_Info/DSAGroup172.png);\r\n   \r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOztFQUNBO01BQ0UsV0FBVztRQUNULGdCQUFnQjtJQUNwQixlQUFlO0lBQ2Y7O0VBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCOztFQUNBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7O0VBRUE7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCO0lBQ0o7O0VBQ0E7UUFDSSw2QkFBNkI7SUFDakM7O0VBQ0o7RUFDRSwwQkFBMEI7QUFDNUI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFDQTs7OztJQUlJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0VBQ0E7Ozs7R0FJRzs7RUFFSDtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztFQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0VBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjs7RUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0VBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztFQUNBOztFQUVFLGlCQUFpQjtBQUNuQjs7RUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7RUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztFQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztFQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE4Qjs7QUFFbEM7O0VBQ0M7SUFDRyw0QkFBNEI7QUFDaEM7O0VBQ0E7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztFQUNBO0VBQ0UsNEpBQTRKOztJQUUxSixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLndpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC52aWV3LWFsbC1ldmVudHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzN3B4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5nc3tcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctbW9kYWx7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICBvcGFjaXR5OiAuOCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgIH1cclxuICAgIC5ib3JkZXItbm9uZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxuLm1vZGFsLWRpYWxvZ3N7XHJcbiAgbWF4LXdpZHRoOiA4MDBweCFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAjZWQxYzI0IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDYwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxcmVtIWltcG9ydGFudDtcclxufSAgIFxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwIWltcG9ydGFudDtcclxufVxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLyogLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2l0eS1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wb2ludGVyLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpcnN0LWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5kYXktaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4uc2Vjb25kLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmV2ZW50LWluZm9ybS1oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmV2ZW50LWluZm9ybS1kZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUxMHB4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5wYWRkaW5nLWJvZHl7XHJcbiAgcGFkZGluZzogOTVweCAwO1xyXG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4uYWZ0ZXJfbW9kYWxfYXBwZW5kZWRcclxueyAgXHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLm1vZGFsLCAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVlXHJcbntcclxuIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5ibG9ja3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xyXG5cclxufSAgXHJcbiAubW9kYWwtYmFja2Ryb3B7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG59XHJcbi5kaWFiZXRlcyAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwNDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5ldmVudERldGFpbHMtY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiYSgwLCAwLCAwLCAwLjcyKSwgcmdiYSgwLCAwLCAwLCAwLjczKSksIHVybChodHRwczovL3d3dy5pbWlzY29uc3VsdGluZy5jb20uYXUvL2lNSVMwL2ltYWdlcy9TaXRlX0luZm8vRFNBR3JvdXAxNzIucG5nKTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-detail',
                templateUrl: './event-detail.component.html',
                styleUrls: ['./event-detail.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Mxwq":
/*!******************************************************************!*\
  !*** ./src/app/Component/event-search/event-search.component.ts ***!
  \******************************************************************/
/*! exports provided: EventSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSearchComponent", function() { return EventSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EventSearchComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventSearchComponent_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const country_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendTo(country_r1.eventCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r1.Name);
} }
class EventSearchComponent {
    constructor(settingsService, dialog) {
        this.settingsService = settingsService;
        this.dialog = dialog;
        this.searchArray = [];
        this.eventData = Array();
        this.sharedData = Array();
        this.zipState = Array();
        this.countryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.countryCtrl.valueChanges.subscribe(value => {
            if (value) {
                this.filtercountry(value);
            }
        });
    }
    ngOnInit() {
        if (this.settings && this.settings.IQA) {
            this.settingsService.getEventDatas(this.settings.IQA).subscribe(values => {
                this.eventData = values;
                this.eventData.forEach(resp => {
                    let city = '';
                    let address1 = '';
                    let BeginDate = '';
                    let eventcode = '';
                    resp.Properties.$values.forEach(element => {
                        if (element.Name == 'City') {
                            city = element.Value;
                        }
                        else if (element.Name == 'Address1') {
                            address1 = element.Value;
                        }
                        else if (element.Name == 'StartDateTime') {
                            BeginDate = element.Value;
                        }
                        else if (element.Name == 'EventId') {
                            eventcode = element.Value;
                        }
                    });
                    this.sharedData.push({ city, address1, BeginDate, eventcode });
                });
            });
        }
        let clcikc = document.getElementById('MainBody');
        clcikc.onclick = function (e) {
            if (e.target != document.getElementsByClassName('sep-event')[document.getElementsByClassName('sep-event').length - 1]) {
                const elmd = document.getElementsByClassName('dropdownMenuBtnSCTs');
                let nextsb = elmd[elmd.length - 1];
                if (nextsb) {
                    nextsb.style.display = 'none';
                }
            }
        };
    }
    filtercountry(name) {
        this.zipState = [];
        this.eventData.filter(country => {
            let eventCODEValue = '';
            country['Properties']['$values'].forEach(element => {
                if (element.Name == "EventId") {
                    eventCODEValue = element.Value;
                }
                if (element.Name == "ZipLocality") {
                    if (element.Value.toLowerCase().includes(name.toLowerCase())) {
                        const elmd = document.getElementsByClassName('dropdownMenuBtnSCTs');
                        let nextsb = elmd[elmd.length - 1];
                        if (nextsb) {
                            nextsb.style.display = 'block';
                        }
                        this.zipState.push({ 'eventCode': eventCODEValue, 'Name': element.Value });
                    }
                }
            });
        });
    }
    sendTo(event) {
        this.settingsService.getEventDetails(event);
    }
    openViewModal() {
        setTimeout(() => {
            jQuery('#viewAllEventModal').modal('show');
        }, 500);
    }
    do(event) {
        event.preventDefault();
    }
}
EventSearchComponent.ɵfac = function EventSearchComponent_Factory(t) { return new (t || EventSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
EventSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventSearchComponent, selectors: [["app-event-search"]], inputs: { settings: "settings" }, decls: 12, vars: 2, consts: [[1, "container", "pt-5", "search-events"], [1, "my-3"], ["src", "https://www.imisconsulting.com.au/iMIS0/images/Site_Info/DSApin.png"], [1, "heading"], [1, "form", "mt-3"], [1, "dropdown", "sep-event"], ["type", "text", "placeholder", "Search City or Town", "data-toggle", "dropdown", "aria-expanded", "false", 1, "dropdownMenuButtonsSCT", 3, "formControl"], ["aria-labelledby", "dropdownMenuButtonsSCT", 1, "dropdown-menu", "dropdownMenuBtnSCTs"], ["class", "dropdown-item list-result-data", 3, "click", 4, "ngFor", "ngForOf"], [1, "view-all-event", "ViewAllLocation", 3, "click"], [1, "dropdown-item", "list-result-data", 3, "click"]], template: function EventSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Find an event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventSearchComponent_span_9_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventSearchComponent_Template_p_click_10_listener() { return ctx.openViewModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "view all locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.countryCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zipState);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n  \r\n  .view-all-event[_ngcontent-%COMP%]{\r\n        color: #404141;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n  \r\n  .heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n  \r\n  .headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n    }\r\n  \r\n  .view-modal[_ngcontent-%COMP%]{\r\n        background: #000;\r\n        opacity: .8!important;\r\n        color: #fff\r\n    }\r\n  \r\n  .border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n  \r\n  .modal-dialogs[_ngcontent-%COMP%]{\r\n  max-width: 800px!important;\r\n}\r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #ed1c24;\r\n  border-color: #ed1c24;\r\n  border-radius: 20px;\r\n  padding: 5px 25px;\r\n}\r\n  \r\n  .container[_ngcontent-%COMP%]{\r\n  max-width: 500px;\r\n}\r\n  \r\n  .mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n  \r\n  .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n  \r\n  \r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  \r\n  .city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n  \r\n  .dropdownMenuButtonsSCT[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px 10px;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  border: 1px solid;\r\n  font-size: 14px;\r\n  height: 25px;\r\n  max-width: 365px;\r\n  margin: 13px 0;\r\n}\r\n  \r\n  .dropdownMenuBtnSCTs[_ngcontent-%COMP%]{\r\n  font-size: 14px!important;\r\n  width: 100%;\r\n  max-width: 365px;\r\n}\r\n  \r\n  .dropdownMenuBtnSCTs[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  color: #ed1c24!important;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7O0VBQ0E7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCLGVBQWU7SUFDZjs7RUFDQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7O0VBQ0E7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjs7RUFFQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckI7SUFDSjs7RUFDQTtRQUNJLDZCQUE2QjtJQUNqQzs7RUFDSjtFQUNFLDBCQUEwQjtBQUM1Qjs7RUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0VBQ0E7Ozs7SUFJSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztFQUNBOzs7O0dBSUc7O0VBRUg7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQiIsImZpbGUiOiJldmVudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC53aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudmlldy1hbGwtZXZlbnR7XHJcbiAgICAgICAgY29sb3I6ICM0MDQxNDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzN3B4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5nc3tcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctbW9kYWx7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICBvcGFjaXR5OiAuOCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgIH1cclxuICAgIC5ib3JkZXItbm9uZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxuLm1vZGFsLWRpYWxvZ3N7XHJcbiAgbWF4LXdpZHRoOiA4MDBweCFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcclxuICBib3JkZXItY29sb3I6ICNlZDFjMjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjVweDtcclxufSAgIFxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwIWltcG9ydGFudDtcclxufVxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLyogLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2l0eS1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wb2ludGVyLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duTWVudUJ1dHRvbnNTQ1Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXgtd2lkdGg6IDM2NXB4O1xyXG4gIG1hcmdpbjogMTNweCAwO1xyXG59XHJcbi5kcm9wZG93bk1lbnVCdG5TQ1Rze1xyXG4gIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzNjVweDtcclxufVxyXG4uZHJvcGRvd25NZW51QnRuU0NUcyAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-search',
                templateUrl: './event-search.component.html',
                styleUrls: ['./event-search.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PyQ/":
/*!******************************************************!*\
  !*** ./src/app/Component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FooterComponent_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_4_p_1_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_4_p_2_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r0.footerGroup.get("email")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r0.footerGroup.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r0.footerGroup.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r0.footerGroup.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
function FooterComponent_div_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_8_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_8_p_1_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_8_p_2_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r1.footerGroup.get("pEmail")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r1.footerGroup.get("pEmail")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.footerGroup.get("pEmail")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r1.footerGroup.get("pEmail")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
class FooterComponent {
    constructor(settingsService, _snackBar, fb) {
        this.settingsService = settingsService;
        this._snackBar = _snackBar;
        this.fb = fb;
        this.createTable();
    }
    createTable() {
        this.footerGroup = this.fb.group({
            pEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
            Type: ['CheckIn']
        });
    }
    ngOnInit() {
        let url = window.location.search;
        console.log("url >>>>>>", url);
        if (url && url.split && url.split("EventKey=")) {
            let KeyEvents = url.split('EventKey=');
            console.log("KeyEvents >>>>>>>>", KeyEvents);
            let keys = KeyEvents[1];
            if (keys) {
                console.log("KeyEvents if >>>>>>>>", keys);
                let keys2 = keys.split('&').length;
                let keys3;
                if (keys2 > 1) {
                    keys3 = keys.split('&')[0];
                }
                else {
                    keys3 = keys;
                }
                console.log("KeyEvents final >>>>>>", keys3);
                this.MainKeyValue = keys3;
            }
        }
    }
    do(event) {
        event.preventDefault();
    }
    saveFooterEmail() {
        var _a, _b;
        console.log(this.footerGroup);
        if (this.footerGroup.status == 'VALID') {
            let jsonData = String.raw `{"youremail":"{\"value\":\"` + ((_a = this.footerGroup.get(`pEmail`)) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\",\"score\":0}","email":"{\"value\":\"` + ((_b = this.footerGroup.get(`email`)) === null || _b === void 0 ? void 0 : _b.value) + String.raw `\",\"score\":0}","Type":"{\"value\":\"SpreadTheWord\"}"}`;
            this.settingsService.postGPdata(jsonData, 'FaceTheFactsCheckIn').subscribe(resp => {
                console.log(resp);
                this.footerGroup.reset();
                // this.openSnackBar('Information Sent Successfully','')
            });
            this.openSnackBar('Information Sent Successfully', '');
            this.footerGroup.reset();
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
            panelClass: ['red-snackbar']
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 3, consts: [[1, "footers-email", 3, "formGroup"], [1, "row", "my-4"], [1, "col-12"], ["formControlName", "email", "type", "text", "placeholder", "Email address", 1, "input-box", "full-width"], ["class", "error", 4, "ngIf"], ["formControlName", "pEmail", "type", "text", "placeholder", "Your email address", 1, "input-box", "full-width"], [1, "col", "text-center"], [1, "btn-primarys", 3, "click"], [1, "error"], [4, "ngIf"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_div_4_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_11_listener($event) { ctx.saveFooterEmail(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.footerGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.footerGroup.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.footerGroup.get("email")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.footerGroup.get("pEmail")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.footerGroup.get("pEmail")) == null ? null : tmp_2_0.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".input-box[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    border-radius: 20px;\r\n    background: none;\r\n    color: #fff!important;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    border: 1px solid #ed1c24;\r\n   \r\n  }\r\n  .full-width[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .btn-primarys[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background: #ed1c24!important;\r\n    border: #ed1c24!important;\r\n    border-radius: 20px!important;\r\n    padding: 5px 60px!important;\r\n    width: 100%;\r\n    font-size: 10px;\r\n    font-weight: 900;\r\n    outline: none!important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7RUFFM0I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQxYzI0O1xyXG4gICBcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5c3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2VkMWMyNCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggNjBweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxuICB9ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_SectionsSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/SectionsSettings */ "Twvj");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/settings.service */ "7Gpe");
/* harmony import */ var _Component_risk_test_risk_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/risk-test/risk-test.component */ "p8Ej");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Component_view_all_event_view_all_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/view-all-event/view-all-event.component */ "06Pq");
/* harmony import */ var _Component_date_location_date_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/date-location/date-location.component */ "ZkEl");
/* harmony import */ var _Component_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/event-detail/event-detail.component */ "KgMQ");
/* harmony import */ var _Component_event_search_event_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/event-search/event-search.component */ "Mxwq");
/* harmony import */ var _Component_upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Component/upcoming-event/upcoming-event.component */ "WQfy");
/* harmony import */ var _Component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Component/check-in/check-in.component */ "WBLT");
/* harmony import */ var _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Component/footer/footer.component */ "PyQ/");















function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-date-location", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.settings);
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-detail", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r1.settings);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-search", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r2.settings);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-upcoming-event", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r3.settings);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title = 'DSADisplay';
        this.settings = new _models_SectionsSettings__WEBPACK_IMPORTED_MODULE_3__["SectionsSettings"]();
        this.eventData = Array();
        this.sharedData = Array();
        this.check = "2021-02-20T18:00:00";
        this.counts = 0;
        this.countryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.settingsService.GetSettingsDSA().subscribe(value => {
            if (value && value['Settings']) {
                this.settings = value['Settings'];
                this.contentkeyItems = value['ContentItemKey'];
                console.log(this.contentkeyItems, ">>>>>>>>>>content key item>>>>>>>>>>>>>>");
                if (this.settings && this.settings.DSAType) {
                    this.DSAType = this.settings.DSAType;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 6, consts: [[1, "diabetes"], [1, "risktestMain"], ["class", "eventDetails-container", 4, "ngIf"], [4, "ngIf"], ["class", "footer_DSA", 4, "ngIf"], [1, "eventDetails-container"], [3, "settings"], [1, "footer_DSA"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-risk-test", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-view-all-event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DSAType == 6);
    } }, directives: [_Component_risk_test_risk_test_component__WEBPACK_IMPORTED_MODULE_5__["RiskTestComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _Component_view_all_event_view_all_event_component__WEBPACK_IMPORTED_MODULE_7__["ViewAllEventComponent"], _Component_date_location_date_location_component__WEBPACK_IMPORTED_MODULE_8__["DateLocationComponent"], _Component_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailComponent"], _Component_event_search_event_search_component__WEBPACK_IMPORTED_MODULE_10__["EventSearchComponent"], _Component_upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_11__["UpcomingEventComponent"], _Component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_12__["CheckInComponent"], _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "Twvj":
/*!********************************************!*\
  !*** ./src/app/models/SectionsSettings.ts ***!
  \********************************************/
/*! exports provided: SectionsSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsSettings", function() { return SectionsSettings; });
class SectionsSettings {
}


/***/ }),

/***/ "WBLT":
/*!**********************************************************!*\
  !*** ./src/app/Component/check-in/check-in.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");








function CheckInComponent_div_11_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_11_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckInComponent_div_11_p_1_Template, 2, 0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckInComponent_div_11_p_2_Template, 2, 0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r0.checkInform.get("email")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r0.checkInform.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r0.checkInform.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r0.checkInform.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
class CheckInComponent {
    constructor(settingsService, _snackBar, fb) {
        this.settingsService = settingsService;
        this._snackBar = _snackBar;
        this.fb = fb;
        this.createTable();
    }
    createTable() {
        this.checkInform = this.fb.group({
            fName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            noOfChildren: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            noOfAdults: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
            acceptCondtion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Type: ['CheckIn']
        });
    }
    ngOnInit() {
        let url = window.location.search;
        console.log("url >>>>>>", url);
        if (url && url.split && url.split("EventKey=")) {
            let KeyEvents = url.split('EventKey=');
            console.log("KeyEvents >>>>>>>>", KeyEvents);
            let keys = KeyEvents[1];
            if (keys) {
                console.log("KeyEvents if >>>>>>>>", keys);
                let keys2 = keys.split('&').length;
                let keys3;
                if (keys2 > 1) {
                    keys3 = keys.split('&')[0];
                }
                else {
                    keys3 = keys;
                }
                console.log("KeyEvents final >>>>>>", keys3);
                this.MainKeyValue = keys3;
            }
        }
    }
    do(event) {
        event.preventDefault();
    }
    saveCheckIn() {
        var _a, _b, _c, _d, _e, _f;
        console.log(this.checkInform);
        if (this.checkInform.status == 'VALID') {
            let jsonData = String.raw `{"EventKey":"{\"value\":\"` + this.MainKeyValue + String.raw `\",\"score\":0}","adults":"{\"value\":\"` + ((_a = this.checkInform.get(`noOfAdults`)) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\",\"score\":0}","children":"{\"value\":\"` + ((_b = this.checkInform.get(`noOfChildren`)) === null || _b === void 0 ? void 0 : _b.value) + String.raw `\",\"score\":0}","mobile":"{\"value\":\"` + ((_c = this.checkInform.get(`mobile`)) === null || _c === void 0 ? void 0 : _c.value) + String.raw `\",\"score\":0}","firstname":"{\"value\":\"` + ((_d = this.checkInform.get(`fName`)) === null || _d === void 0 ? void 0 : _d.value) + String.raw `\",\"score\":0}","lastname":"{\"value\":\"` + ((_e = this.checkInform.get(`lName`)) === null || _e === void 0 ? void 0 : _e.value) + String.raw `\",\"score\":0}","email":"{\"value\":\"` + ((_f = this.checkInform.get(`email`)) === null || _f === void 0 ? void 0 : _f.value) + String.raw `\",\"score\":0}","Type":"{\"value\":\"CheckIn\"}"}`;
            this.settingsService.postGPdata(jsonData, 'FaceTheFactsCheckIn').subscribe(resp => {
                console.log(resp);
            });
            // this.openSnackBar('Information Sent Successfully','')
            this.checkInform.reset();
            window.open('https://www.facethefacts.org.au/Info/NextSteps.aspx?EventKey=' + this.MainKeyValue);
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
            panelClass: ['red-snackbar']
        });
    }
    openNew() {
        window.open('https://www.facethefacts.org.au/Info/terms_and_conditions.aspx');
    }
}
CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], decls: 61, vars: 2, consts: [[1, "checkIns", 3, "formGroup"], ["id", "exampleModalLabel1", 1, "headings"], [1, "row", "my-5"], [1, "col-6"], ["formControlName", "fName", "type", "text", "placeholder", "First Name*", 1, "input-box", "full-width"], ["formControlName", "lName", "type", "text", "placeholder", "Last Name*", 1, "input-box", "full-width"], [1, "col-12"], ["formControlName", "email", "type", "text", "placeholder", "Email*", 1, "input-box", "full-width"], ["class", "error", 4, "ngIf"], ["formControlName", "mobile", "type", "text", "placeholder", "Mobile*", 1, "input-box", "full-width"], [1, "form-group"], ["formControlName", "noOfAdults", 1, "form-control", "select_style"], ["value", "", "selected", "", "disabled", "", 1, "select_data"], ["value", "0", 1, "select_data"], ["value", "1", 1, "select_data"], ["value", "2", 1, "select_data"], ["value", "3", 1, "select_data"], ["value", "4", 1, "select_data"], ["value", "5", 1, "select_data"], ["formControlName", "noOfChildren", 1, "form-control", "select_style"], [1, "col", "text-left", "text-white"], ["formControlName", "acceptCondtion", 1, "example-margin", "accptcondition"], [1, "text-white", "accpted"], [1, "terms_cond", 3, "click"], [1, "col", "text-center"], [1, "btn-primarys", 3, "click"], [1, "error"], [4, "ngIf"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CheckInComponent_div_11_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No. of adults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "No. of children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_Template_span_click_55_listener($event) { ctx.openNew(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_59_listener($event) { ctx.saveCheckIn(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkInform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.checkInform.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.checkInform.get("email")) == null ? null : tmp_1_0.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], styles: [".width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n  \r\n  .view-all-event[_ngcontent-%COMP%]{\r\n        color: #404141;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n  \r\n  .heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n  \r\n  .headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n  \r\n  .view-modal[_ngcontent-%COMP%]{\r\n        background: #000000ed;\r\n        \r\n        color: #fff\r\n    }\r\n  \r\n  .border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #ed1c24;\r\n  border-color: #ed1c24;\r\n  border-radius: 20px;\r\n  padding: 5px 25px;\r\n}\r\n  \r\n  \r\n  \r\n  .mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n  \r\n  .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n  \r\n  \r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  \r\n  .city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n  \r\n  .pointer-cursor[_ngcontent-%COMP%]:hover{\r\n    color:#ed1c24\r\n}\r\n  \r\n  .btn-primarys[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background: #ed1c24!important;\r\n  border: #ed1c24!important;\r\n  border-radius: 20px!important;\r\n  padding: 5px 60px!important;\r\n  margin: 1rem!important;\r\n  outline: none!important;\r\n}\r\n  \r\n  .input-box[_ngcontent-%COMP%]{\r\n  border-radius: 20px;\r\n\r\n}\r\n  \r\n  .full-width[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n    .mat-checkbox-inner-container {\r\n  border: 1px solid white!important;\r\n}\r\n  \r\n  .text-boxDSA[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n}\r\n  \r\n  .accptcondition[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\r\n  line-height: 24px;\r\n  color: #fff!important;\r\n}\r\n  \r\n  label[_ngcontent-%COMP%], .Label[_ngcontent-%COMP%], .PanelFieldLabelFont[_ngcontent-%COMP%] {\r\n  color: #fff!important;\r\n}\r\n  \r\n  .select_style[_ngcontent-%COMP%]{\r\n    height: 37px!important;\r\n    border-radius: 20px!important;\r\n    font-size: 100%!important;\r\n    line-height: 1.8!important;\r\n     color: #555555!important;\r\n}\r\n  \r\n  .dsams_event[_ngcontent-%COMP%]   .leftcol[_ngcontent-%COMP%]   .eventDetails-container[_ngcontent-%COMP%]:before {\r\n    z-index: 0!important;\r\n}\r\n  \r\n  .checkIns[_ngcontent-%COMP%]{\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    font-size: 12px;\r\n    padding: 200px 0;\r\n    z-index: 9999!important;\r\n    position: relative;\r\n}\r\n  \r\n  .select_data[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\r\n  \r\n  .headings[_ngcontent-%COMP%]{\r\n    color: #fff!Important;\r\n    font-weight: bold;\r\n    font-size: 37px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .terms_cond[_ngcontent-%COMP%]{\r\n    color: #fff!important;\r\n    font-weight: 700!important;\r\n  }\r\n  \r\n  .accpted[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7S0FJSzs7RUFFSDtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7RUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEIsZUFBZTtJQUNmOztFQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7RUFDQTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjs7RUFFQTtRQUNJLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0I7SUFDSjs7RUFDQTtRQUNJLDZCQUE2QjtJQUNqQzs7RUFFSjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0VBQ0E7O0dBRUc7O0VBQ0g7RUFDRSxnQ0FBZ0M7QUFDbEM7O0VBQ0E7Ozs7SUFJSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztFQUNBOzs7O0dBSUc7O0VBRUg7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0lBQ0k7QUFDSjs7RUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7RUFDQTtFQUNFLG1CQUFtQjs7QUFFckI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0VBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztFQUNDO0VBQ0MscUJBQXFCO0FBQ3ZCOztFQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsMEJBQTBCO0tBQ3pCLHdCQUF3QjtBQUM3Qjs7RUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztFQUNBO0lBQ0ksZUFBZTtBQUNuQjs7RUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsMEJBQTBCO0VBQzVCOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6ImNoZWNrLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0gKi9cclxuICBcclxuICAud2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnZpZXctYWxsLWV2ZW50e1xyXG4gICAgICAgIGNvbG9yOiAjNDA0MTQxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZ3N7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWV3LW1vZGFse1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDBlZDtcclxuICAgICAgICAvKiBvcGFjaXR5OiAuOCFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgIH1cclxuICAgIC5ib3JkZXItbm9uZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcclxuICBib3JkZXItY29sb3I6ICNlZDFjMjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjVweDtcclxufSAgIFxyXG4vKiAuY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn0gKi9cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwIWltcG9ydGFudDtcclxufVxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLyogLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2l0eS1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wb2ludGVyLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvaW50ZXItY3Vyc29yOmhvdmVye1xyXG4gICAgY29sb3I6I2VkMWMyNFxyXG59XHJcbi5idG4tcHJpbWFyeXN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2VkMWMyNCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAjZWQxYzI0IWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggNjBweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxcmVtIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufSBcclxuLmlucHV0LWJveHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxufVxyXG4uZnVsbC13aWR0aHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ib3hEU0F7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYWNjcHRjb25kaXRpb24gLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbiBsYWJlbCwgLkxhYmVsLCAuUGFuZWxGaWVsZExhYmVsRm9udCB7XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3Rfc3R5bGV7XHJcbiAgICBoZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOCFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1NTU1NTUhaW1wb3J0YW50O1xyXG59XHJcbi5kc2Ftc19ldmVudCAubGVmdGNvbCAuZXZlbnREZXRhaWxzLWNvbnRhaW5lcjpiZWZvcmUge1xyXG4gICAgei1pbmRleDogMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoZWNrSW5ze1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMjAwcHggMDtcclxuICAgIHotaW5kZXg6IDk5OTkhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWxlY3RfZGF0YXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uaGVhZGluZ3N7XHJcbiAgICBjb2xvcjogI2ZmZiFJbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGVybXNfY29uZHtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWNjcHRlZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in',
                templateUrl: './check-in.component.html',
                styleUrls: ['./check-in.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "WQfy":
/*!**********************************************************************!*\
  !*** ./src/app/Component/upcoming-event/upcoming-event.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpcomingEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingEventComponent", function() { return UpcomingEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipe/common.pipe */ "7FDL");





function UpcomingEventComponent_div_0_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "daysLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.sharedData[0].dayLeft), " Days");
} }
function UpcomingEventComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sharedData[0].address);
} }
function UpcomingEventComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "sanitizeHtml");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.sharedData[0].desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UpcomingEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "THE NEXT EVENT IS IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpcomingEventComponent_div_0_h2_3_Template, 3, 3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UpcomingEventComponent_div_0_p_4_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpcomingEventComponent_div_0_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.openViewModal(); return ctx_r4.do($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find a Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Event Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpcomingEventComponent_div_0_div_9_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].dayLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].desc);
} }
class UpcomingEventComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.eventData = Array();
        this.sharedData = Array();
        this.check = "2021-02-20T18:00:00";
    }
    ngOnInit() {
        if (this.settings && this.settings.IQA) {
            this.settingsService.getEventDatas(this.settings.IQA).subscribe(values => {
                this.eventData = values[0].Properties.$values;
                let desc;
                let dayLeft;
                let address;
                this.eventData.forEach(resp => {
                    if (resp.Name == 'AdditionalDescription') {
                        desc = resp.Value;
                    }
                    else if (resp.Name == 'StartDateTime') {
                        dayLeft = resp.Value;
                    }
                    else if (resp.Name == 'Address1') {
                        address = resp.Value;
                    }
                });
                this.sharedData.push({ desc, dayLeft, address });
            });
        }
    }
    openViewModal() {
        setTimeout(() => {
            jQuery('#viewAllEventModal').modal('show');
        }, 500);
    }
    do(event) {
        event.preventDefault();
    }
}
UpcomingEventComponent.ɵfac = function UpcomingEventComponent_Factory(t) { return new (t || UpcomingEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
UpcomingEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpcomingEventComponent, selectors: [["app-upcoming-event"]], inputs: { settings: "settings" }, decls: 1, vars: 1, consts: [["class", "text-center widget_next", 4, "ngIf"], [1, "text-center", "widget_next"], [1, "first-heading"], ["class", "day-heading", 4, "ngIf"], ["class", "first-heading", 4, "ngIf"], [1, "btn", "btn-primary", "ViewAllLocation", 3, "click"], [1, "event-inform-heading"], ["class", "event-inform-detail", 3, "innerHTML", 4, "ngIf"], [1, "day-heading"], [1, "event-inform-detail", 3, "innerHTML"]], template: function UpcomingEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UpcomingEventComponent_div_0_Template, 10, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharedData && ctx.sharedData[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__["DaysLeft"], _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_3__["SanitizeHtmlPipe"]], styles: [".widget_next[_ngcontent-%COMP%] {\r\n  padding-top: 100px!important;\r\n  padding-bottom: 100px!important;\r\n}\r\n\r\n.width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n.view-all-event[_ngcontent-%COMP%]{\r\n        color: #fff;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n.heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n.headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n    }\r\n.view-modal[_ngcontent-%COMP%]{\r\n        background: #000;\r\n        opacity: .8!important;\r\n        color: #fff\r\n    }\r\n.border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n.modal-dialogs[_ngcontent-%COMP%]{\r\n  max-width: 800px!important;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #ed1c24!important;\r\n    border: #ed1c24!important;\r\n    border-radius: 20px!important;\r\n    padding: 5px 60px!important;\r\n    margin: 1rem!important;\r\n}\r\n\r\n.mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n.autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.first-heading[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    margin-bottom: 0;\r\n}\r\n.day-heading[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    border: none!important;\r\n}\r\n.second-heading[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n\r\n}\r\n.event-inform-heading[_ngcontent-%COMP%]{\r\n    font-size: 37px;\r\n    font-weight: bold;\r\n}\r\n.event-inform-detail[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    max-width: 510px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n.padding-body[_ngcontent-%COMP%]{\r\n  padding: 4rem;\r\n  color: #fff!important;\r\n}\r\n.after_modal_appended[_ngcontent-%COMP%]\r\n{  \r\n  position:relative;\r\n}\r\n.modal[_ngcontent-%COMP%], .modal-backdrop[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n}\r\n.blue[_ngcontent-%COMP%]\r\n{\r\n \r\n  position: relative;\r\n}\r\n.red[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n.block[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: calc(100vh - 20px);\r\n\r\n}\r\n.modal-backdrop[_ngcontent-%COMP%]{\r\n    position: absolute!important;\r\n}\r\n.diabetes[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\r\n    position: absolute!important;\r\n    \r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1040;\r\n    background-color: #000;\r\n}\r\n.eventDetails-container[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient( rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.73)), url(https://www.imisconsulting.com.au//iMIS0/images/Site_Info/DSAGroup172.png);\r\n   \r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwY29taW5nLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDO0FBQ0E7Ozs7S0FJSztBQUVIO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSwwQkFBMEI7SUFDMUI7QUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEIsZUFBZTtJQUNmO0FBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCO0FBQ0E7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtBQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjtJQUNKO0FBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7Ozs7SUFJSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7Ozs7R0FJRztBQUVIO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsOEJBQThCOztBQUVsQztBQUNDO0lBQ0csNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSw0SkFBNEo7O0lBRTFKLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJ1cGNvbWluZy1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldF9uZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9ICovXHJcbiAgXHJcbiAgLndpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC52aWV3LWFsbC1ldmVudHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmdze1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy1tb2RhbHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IC44IWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgfVxyXG4gICAgLmJvcmRlci1ub25lIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG4ubW9kYWwtZGlhbG9nc3tcclxuICBtYXgtd2lkdGg6IDgwMHB4IWltcG9ydGFudDtcclxufSBcclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2VkMWMyNCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggNjBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDFyZW0haW1wb3J0YW50O1xyXG59ICAgXHJcbi8qIC5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufSAqL1xyXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAhaW1wb3J0YW50O1xyXG59XHJcbi5hdXRvY29tcGxldGUtY29udGFpbmVyLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsXHJcbi5hdXRvY29tcGxldGUtY29udGFpbmVyLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZFxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4vKiAuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaXR5LWJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnBvaW50ZXItY3Vyc29ye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlyc3QtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmRheS1oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5zZWNvbmQtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZXZlbnQtaW5mb3JtLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZXZlbnQtaW5mb3JtLWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1heC13aWR0aDogNTEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4ucGFkZGluZy1ib2R5e1xyXG4gIHBhZGRpbmc6IDRyZW07XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5hZnRlcl9tb2RhbF9hcHBlbmRlZFxyXG57ICBcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ubW9kYWwsIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsdWVcclxue1xyXG4gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLmJsb2Nre1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjBweCk7XHJcblxyXG59ICBcclxuIC5tb2RhbC1iYWNrZHJvcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpYWJldGVzIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA0MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLmV2ZW50RGV0YWlscy1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuNzIpLCByZ2JhKDAsIDAsIDAsIDAuNzMpKSwgdXJsKGh0dHBzOi8vd3d3LmltaXNjb25zdWx0aW5nLmNvbS5hdS8vaU1JUzAvaW1hZ2VzL1NpdGVfSW5mby9EU0FHcm91cDE3Mi5wbmcpO1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpcomingEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upcoming-event',
                templateUrl: './upcoming-event.component.html',
                styleUrls: ['./upcoming-event.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/elements */ "Dti6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe/common.pipe */ "7FDL");
/* harmony import */ var _Component_risk_test_risk_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/risk-test/risk-test.component */ "p8Ej");
/* harmony import */ var _Component_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/event-detail/event-detail.component */ "KgMQ");
/* harmony import */ var _Component_date_location_date_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/date-location/date-location.component */ "ZkEl");
/* harmony import */ var _Component_event_search_event_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Component/event-search/event-search.component */ "Mxwq");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _Component_upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Component/upcoming-event/upcoming-event.component */ "WQfy");
/* harmony import */ var _Component_view_all_event_view_all_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Component/view-all-event/view-all-event.component */ "06Pq");
/* harmony import */ var _Component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Component/check-in/check-in.component */ "WBLT");
/* harmony import */ var _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Component/footer/footer.component */ "PyQ/");


















class AppModule {
    constructor(injector) {
        this.injector = injector;
        const appElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], { injector });
        if (!customElements.get('app-root')) {
            customElements.define('app-root', appElement);
        }
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizeHtmlPipe"],
        _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_7__["DaysLeft"],
        _Component_risk_test_risk_test_component__WEBPACK_IMPORTED_MODULE_8__["RiskTestComponent"],
        _Component_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailComponent"],
        _Component_date_location_date_location_component__WEBPACK_IMPORTED_MODULE_10__["DateLocationComponent"],
        _Component_event_search_event_search_component__WEBPACK_IMPORTED_MODULE_11__["EventSearchComponent"],
        _Component_upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_13__["UpcomingEventComponent"],
        _Component_view_all_event_view_all_event_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllEventComponent"],
        _Component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_15__["CheckInComponent"],
        _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizeHtmlPipe"],
                    _pipe_common_pipe__WEBPACK_IMPORTED_MODULE_7__["DaysLeft"],
                    _Component_risk_test_risk_test_component__WEBPACK_IMPORTED_MODULE_8__["RiskTestComponent"],
                    _Component_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailComponent"],
                    _Component_date_location_date_location_component__WEBPACK_IMPORTED_MODULE_10__["DateLocationComponent"],
                    _Component_event_search_event_search_component__WEBPACK_IMPORTED_MODULE_11__["EventSearchComponent"],
                    _Component_upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_13__["UpcomingEventComponent"],
                    _Component_view_all_event_view_all_event_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllEventComponent"],
                    _Component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_15__["CheckInComponent"],
                    _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "ZkEl":
/*!********************************************************************!*\
  !*** ./src/app/Component/date-location/date-location.component.ts ***!
  \********************************************************************/
/*! exports provided: DateLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateLocationComponent", function() { return DateLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DateLocationComponent_div_1_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.sharedData[0].dayLeft, "EEEE d MMMM y"));
} }
function DateLocationComponent_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sharedData[0].address);
} }
function DateLocationComponent_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.dateFormate(ctx_r3.sharedData[0].dayLeft), " - ", ctx_r3.dateFormate(ctx_r3.sharedData[0].endDate), "");
} }
function DateLocationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DateLocationComponent_div_1_h2_9_Template, 3, 4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DateLocationComponent_div_1_p_10_Template, 2, 1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DateLocationComponent_div_1_p_11_Template, 2, 2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r0.sharedData[0].city));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].dayLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sharedData && ctx_r0.sharedData[0] && ctx_r0.sharedData[0].dayLeft);
} }
class DateLocationComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.eventData = Array();
        this.sharedData = Array();
        this.check = "2021-02-20T18:00:00";
        this.countryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        let url = window.location.search;
        if (url && url.split && url.split("EventKey=")) {
            let KeyEvents = url.split('EventKey=');
            let keys = KeyEvents[1];
            let keys2 = keys.split('&').length;
            let keys3;
            if (keys2 > 1) {
                keys3 = keys.split('&')[0];
            }
            else {
                keys3 = keys;
            }
            if (this.settings && this.settings) {
                this.settingsService.getEventData(this.settings.IQA, keys3).subscribe(values => {
                    this.eventData = values[0].Properties.$values;
                    let desc;
                    let dayLeft;
                    let address;
                    let city;
                    let endDate;
                    this.eventData.forEach(resp => {
                        if (resp.Name == 'AdditionalDescription') {
                            desc = resp.Value;
                        }
                        else if (resp.Name == 'StartDateTime') {
                            dayLeft = resp.Value;
                        }
                        else if (resp.Name == 'Address1') {
                            address = resp.Value;
                        }
                        else if (resp.Name == 'City') {
                            city = resp.Value;
                        }
                        else if (resp.Name == 'EndDateTime') {
                            endDate = resp.Value;
                        }
                    });
                    this.sharedData.push({ desc, dayLeft, address, city, endDate });
                });
            }
        }
    }
    dateFormate(value) {
        var time = new Date(value);
        let ampm = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        return ampm;
    }
}
DateLocationComponent.ɵfac = function DateLocationComponent_Factory(t) { return new (t || DateLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
DateLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateLocationComponent, selectors: [["app-date-location"]], inputs: { settings: "settings" }, decls: 2, vars: 1, consts: [[1, "event-contes"], ["class", " padding-body", 4, "ngIf"], [1, "padding-body"], [1, "row"], [1, "col-2"], ["src", "https://www.imisconsulting.com.au/iMIS0/images/Site_Info/Ellipse 108.png", 1, "map-image1"], ["src", "https://www.imisconsulting.com.au/iMIS0/images/Site_Info/map-marker-light.png", 1, "map-image"], [1, "col-10"], [1, "city-name"], ["class", "day-heading", 4, "ngIf"], ["class", "first-heading", 4, "ngIf"], [1, "day-heading"], [1, "first-heading"]], template: function DateLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateLocationComponent_div_1_Template, 12, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharedData && ctx.sharedData[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .modal-content[_ngcontent-%COMP%]{\r\n    background: none!important;\r\n    }\r\n  .view-all-event[_ngcontent-%COMP%]{\r\n        color: #404141;\r\n        font-weight: 600;\r\n    font-size: 18px;\r\n    }\r\n  .heading[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n        font-size: 37px!important;\r\n    }\r\n  .headings[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n      font-size: 37px;\r\n    }\r\n  .view-modal[_ngcontent-%COMP%]{\r\n        background: #000;\r\n        opacity: .8!important;\r\n        color: #fff\r\n    }\r\n  .border-none[_ngcontent-%COMP%] {\r\n        border-bottom: none!important;\r\n    }\r\n  .modal-dialogs[_ngcontent-%COMP%]{\r\n  max-width: 800px!important;\r\n}\r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #ed1c24!important;\r\n    border: #ed1c24!important;\r\n    border-radius: 20px!important;\r\n    padding: 5px 60px!important;\r\n    margin: 1rem!important;\r\n}\r\n  \r\n  .mat-form-field-infix[_ngcontent-%COMP%] {\r\n  border: 1px solid #000!important;\r\n}\r\n  .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%], .autocomplete-container.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: none;\r\n    border-radius: 20px;\r\n}\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  .city-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n  .pointer-cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n  .first-heading[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    margin-bottom: 0;\r\n    \r\n}\r\n  .day-heading[_ngcontent-%COMP%]{\r\n  width: 276px;\r\n    font-size: 39px;\r\n    font-weight: bold;\r\n    border: none!important;\r\n    padding: 30px 0;\r\n}\r\n  .second-heading[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n\r\n}\r\n  .event-inform-heading[_ngcontent-%COMP%]{\r\n    font-size: 37px;\r\n    font-weight: bold;\r\n}\r\n  .event-inform-detail[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    max-width: 510px!important;\r\n    margin: 0 auto;\r\n}\r\n  .padding-body[_ngcontent-%COMP%]{\r\n  padding: 4rem;\r\n  color: #fff!important;\r\n}\r\n  .after_modal_appended[_ngcontent-%COMP%]\r\n{  \r\n  position:relative;\r\n}\r\n  .modal[_ngcontent-%COMP%], .modal-backdrop[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n}\r\n  .blue[_ngcontent-%COMP%]\r\n{\r\n \r\n  position: relative;\r\n}\r\n  .red[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n  .block[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: calc(100vh - 20px);\r\n\r\n}\r\n  .modal-backdrop[_ngcontent-%COMP%]{\r\n  position: absolute!important;\r\n}\r\n  .diabetes[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\r\n  position: absolute!important;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\r\n}\r\n  .event-contes[_ngcontent-%COMP%]{\r\n  background: #ed1c24;\r\n  background-size: cover;\r\n}\r\n  .map-image[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 24px;\r\n  min-width: 22px!important;\r\n  min-height: 29px!important;\r\n}\r\n  .map-image1[_ngcontent-%COMP%]{\r\n  min-width: 40px!important;\r\n  min-height: 40px!important;\r\n}\r\n  .city-name[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n  margin-left: 0!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0lBS0k7RUFDRjtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCO0VBQ0E7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCLGVBQWU7SUFDZjtFQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtFQUNBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7RUFFQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckI7SUFDSjtFQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0VBQ0o7RUFDRSwwQkFBMEI7QUFDNUI7RUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0VBQ0E7O0dBRUc7RUFDSDtFQUNFLGdDQUFnQztBQUNsQztFQUNBOzs7O0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtFQUNBOzs7O0dBSUc7RUFFSDtFQUNFLFdBQVc7QUFDYjtFQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0VBQ0E7RUFDRSxlQUFlO0FBQ2pCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtFQUNBO0VBQ0UsWUFBWTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7RUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7RUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7RUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7RUFDQTtJQUNJLDZCQUE2QjtBQUNqQztFQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7RUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtFQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE4Qjs7QUFFbEM7RUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtFQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0VBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJkYXRlLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgICovXHJcbiAgLndpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC52aWV3LWFsbC1ldmVudHtcclxuICAgICAgICBjb2xvcjogIzQwNDE0MTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmdze1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy1tb2RhbHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IC44IWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgfVxyXG4gICAgLmJvcmRlci1ub25lIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG4ubW9kYWwtZGlhbG9nc3tcclxuICBtYXgtd2lkdGg6IDgwMHB4IWltcG9ydGFudDtcclxufSBcclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2VkMWMyNCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggNjBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDFyZW0haW1wb3J0YW50O1xyXG59ICAgXHJcbi8qIC5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufSAqL1xyXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAhaW1wb3J0YW50O1xyXG59XHJcbi5hdXRvY29tcGxldGUtY29udGFpbmVyLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LFxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lci5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsXHJcbi5hdXRvY29tcGxldGUtY29udGFpbmVyLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZFxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4vKiAuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaXR5LWJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnBvaW50ZXItY3Vyc29ye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlyc3QtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxufVxyXG4uZGF5LWhlYWRpbmd7XHJcbiAgd2lkdGg6IDI3NnB4O1xyXG4gICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5zZWNvbmQtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZXZlbnQtaW5mb3JtLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZXZlbnQtaW5mb3JtLWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1heC13aWR0aDogNTEwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnBhZGRpbmctYm9keXtcclxuICBwYWRkaW5nOiA0cmVtO1xyXG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4uYWZ0ZXJfbW9kYWxfYXBwZW5kZWRcclxueyAgXHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLm1vZGFsLCAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVlXHJcbntcclxuIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5ibG9ja3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xyXG5cclxufSAgXHJcbi5tb2RhbC1iYWNrZHJvcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG59XHJcbi5kaWFiZXRlcyAubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4uZXZlbnQtY29udGVze1xyXG4gIGJhY2tncm91bmQ6ICNlZDFjMjQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hcC1pbWFnZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogMjRweDtcclxuICBtaW4td2lkdGg6IDIycHghaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFwLWltYWdlMXtcclxuICBtaW4td2lkdGg6IDQwcHghaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2l0eS1uYW1le1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date-location',
                templateUrl: './date-location.component.html',
                styleUrls: ['./date-location.component.css']
            }]
    }], function () { return [{ type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "p8Ej":
/*!************************************************************!*\
  !*** ./src/app/Component/risk-test/risk-test.component.ts ***!
  \************************************************************/
/*! exports provided: RiskTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskTestComponent", function() { return RiskTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/settings.service */ "7Gpe");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");














function RiskTestComponent_p_377_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Less than 90cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_378_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Less than 80cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_379_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Less than 102cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_380_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Less than 88cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_396_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Between 90-100cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_397_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Between 80-90cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_398_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Between 102-110cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_399_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Between 88-100cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_415_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More than 100cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_416_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More than 90cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_417_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More than 110cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_p_418_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More than 100cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_div_491_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_div_491_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Correct Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_div_491_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RiskTestComponent_div_491_p_1_Template, 2, 0, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RiskTestComponent_div_491_p_2_Template, 2, 0, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r13.finalFormGroup.get("email")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r13.finalFormGroup.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r13.finalFormGroup.get("email")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx_r13.finalFormGroup.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern));
} }
function RiskTestComponent_div_504_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please tick terms & conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_div_504_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RiskTestComponent_div_504_p_1_Template, 2, 0, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r14.finalFormGroup.get("termsCondition")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r14.finalFormGroup.get("termsCondition")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required));
} }
function RiskTestComponent_div_510_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Score ", ctx_r19.riskScore, "");
} }
function RiskTestComponent_div_510_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Score ", ctx_r20.riskScore, "");
} }
function RiskTestComponent_div_510_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Score ", ctx_r21.riskScore, "");
} }
function RiskTestComponent_div_510_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.suggestionTag1);
} }
function RiskTestComponent_div_510_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.suggestionTag2);
} }
function RiskTestComponent_div_510_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_div_29_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.getsupport(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Book a point for care test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskTestComponent_div_510_div_30_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_div_30_div_4_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const i_r31 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r32.setValueGP(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r30.descp);
} }
function RiskTestComponent_div_510_div_30_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RiskTestComponent_div_510_div_30_div_4_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.getsupportData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RiskTestComponent_div_510_div_30_div_4_span_4_Template, 2, 1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_div_30_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.sentToGP(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Send to GP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.GPDataResults);
} }
const _c0 = function (a0, a1) { return { "col-4": a0, "col-6": a1 }; };
function RiskTestComponent_div_510_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_div_30_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.gpResutl(ctx_r37.showDrop); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Mail a GP my result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RiskTestComponent_div_510_div_30_div_4_Template, 7, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r25.sum >= 12, ctx_r25.sum < 12 && ctx_r25.sum >= 6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.showDrop);
} }
const _c1 = function (a0) { return { "riskDiabetes": a0 }; };
const _c2 = function (a0) { return { "riskDiabetess": a0 }; };
const _c3 = function (a0, a1, a2) { return { "col-4": a0, "col-6": a1, "col-12": a2 }; };
function RiskTestComponent_div_510_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " of developing diabetes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RiskTestComponent_div_510_span_8_Template, 2, 1, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RiskTestComponent_div_510_span_10_Template, 2, 1, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RiskTestComponent_div_510_span_12_Template, 2, 1, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOW RISK 0-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MEDIUM RISK 6-11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "HIGH RISK 12+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RiskTestComponent_div_510_p_24_Template, 2, 1, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RiskTestComponent_div_510_p_25_Template, 2, 1, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Your Next Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RiskTestComponent_div_510_div_29_Template, 4, 0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RiskTestComponent_div_510_div_30_Template, 5, 5, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_Template_img_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.getsupport(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Get Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "We\u2019re here to give you all the support you need.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Talk to one of our health professionals or arrange a face to face consultation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Discounts apply for members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Call 1300 198 204");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_div_510_Template_button_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r41.becomeMember(); return ctx_r41.do($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Become a member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r15.sum >= 12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.riskRangeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isRiskRange == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isRiskRange == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isRiskRange == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r15.isRiskRange == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx_r15.isRiskRange == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx_r15.isRiskRange == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.sum >= 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.sum >= 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.sum >= 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.sum >= 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](21, _c3, ctx_r15.sum >= 12, ctx_r15.sum < 12 && ctx_r15.sum >= 6, ctx_r15.sum < 6));
} }
const _c4 = function (a0) { return { "pb-5": a0 }; };
class RiskTestComponent {
    constructor(_formBuilder, _snackBar, contenItem) {
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.contenItem = contenItem;
        this.resultStatus = false;
        this.MainKeyValue = '';
        this.Q1 = 0;
        this.Q2 = 0;
        this.Q3a = 0;
        this.Q3b = 0;
        this.Q4 = 0;
        this.Q5 = 0;
        this.Q6 = 0;
        this.Q7 = 0;
        this.Q8 = 0;
        this.Q9 = 0;
        this.Q10 = 0;
        this.sum = 0;
        this.GPDataResults = Array();
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        let url = window.location.search;
        console.log("url >>>>>>", url);
        if (url && url.split && url.split("EventKey=")) {
            let KeyEvents = url.split('EventKey=');
            console.log("KeyEvents >>>>>>>>", KeyEvents);
            let keys = KeyEvents[1];
            if (keys) {
                console.log("KeyEvents if >>>>>>>>", keys);
                let keys2 = keys.split('&').length;
                let keys3;
                if (keys2 > 1) {
                    keys3 = keys.split('&')[0];
                }
                else {
                    keys3 = keys;
                }
                console.log("KeyEvents final >>>>>>", keys3);
                this.MainKeyValue = keys3;
            }
        }
        let test = document.querySelectorAll(".RiskTestClass");
        setTimeout(() => {
            var elements = document.getElementsByClassName("RiskTestClass");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', () => {
                    console.log("hello >>>>>>> testing");
                    jQuery("#exampleModal12345").modal('show');
                    // const elmd = document.querySelectorAll<HTMLElement>('.exampleModal1234')!;
                    // if(elmd && elmd[elmd.length - 1] ){
                    //   elmd[elmd.length-1].style.display ='block';
                    // }else{
                    // }
                    // const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
                    // const elemp = <HTMLElement>elm.parentElement;
                    this.interval = setInterval(() => {
                        //  this.doStuff()
                    }, 50); // 2000 ms = start after 2sec 
                    // elm.style.display = 'none';
                    // jQuery("#exampleModal1234").modal('show')
                });
            }
        }, 100);
        this.div2 = document.querySelector(".dsa-body-content");
        let clcikc = document.getElementsByClassName('risktestMain');
        for (let i = 0; i <= clcikc.length - 1; i++) {
            clcikc[i].onclick = function (e) {
                if (e.target != document.getElementsByClassName('dropdown')[0]) {
                    const elmd = document.getElementsByClassName('dropdownMenuBtn');
                    let nextsb = elmd[elmd.length - 1];
                    console.log(nextsb);
                    if (nextsb) {
                        nextsb.style.display = 'none';
                    }
                }
            };
        }
        this.firstFormGroup = this._formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['0']
        });
        this.secondFormGroup = this._formBuilder.group({
            aboriginal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bornOptions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['1']
        });
        this.thirdFormGroup = this._formBuilder.group({
            typeDiabetes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            highBP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['2']
        });
        this.fourthFormGroup = this._formBuilder.group({
            tobacco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hBP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['3']
        });
        this.fifthFormGroup = this._formBuilder.group({
            vegetable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            exercise: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['4']
        });
        this.sixthFormGroup = this._formBuilder.group({
            waist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['5']
        });
        this.finalFormGroup = this._formBuilder.group({
            fName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagination: ['6'],
            termsCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gpResult: [''],
            sendEmail: ['']
        });
        (_a = this.firstFormGroup) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(value => {
            if (this.firstFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click')as HTMLCollectionOf<HTMLElement>;
                // var status=jQuery('.disable-click')[0].checked;
                // if(status == false){
                //     elements[0].removeAttribute('disabled')
                //     elements[0].click()
                //     elements[0].setAttribute('disabled', 'disabled');
                //   }
                let butn = document.getElementsByClassName('stepeNext');
                butn[0].children[0].removeAttribute('disabled');
                butn[0].children[1].removeAttribute('disabled');
            }
        });
        (_b = this.secondFormGroup) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(value => {
            if (this.secondFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click1')as HTMLCollectionOf<HTMLElement>;
                // for(let i =0 ; i <=1; i++){
                //   var status=jQuery('.disable-click1')[i].checked;
                //   if(status == false){
                //     elements[i].removeAttribute('disabled')
                //     elements[i].click()
                //     elements[i].setAttribute('disabled', 'disabled');
                //   }
                // }
                let butn = document.getElementsByClassName('stepeNext');
                butn[1].children[0].removeAttribute('disabled');
                butn[1].children[1].removeAttribute('disabled');
            }
        });
        (_c = this.thirdFormGroup) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe(value => {
            if (this.thirdFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click2')as HTMLCollectionOf<HTMLElement>;
                // for(let i =0 ; i <=2; i++){
                //   var status=jQuery('.disable-click2')[i].checked;
                //   if(status == false){
                //     elements[i].removeAttribute('disabled')
                //     elements[i].click()
                //     elements[i].setAttribute('disabled', 'disabled');
                //   }
                // }
                let butn = document.getElementsByClassName('stepeNext');
                butn[2].children[0].removeAttribute('disabled');
                butn[2].children[1].removeAttribute('disabled');
            }
        });
        (_d = this.fourthFormGroup) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe(value => {
            if (this.fourthFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click3')as HTMLCollectionOf<HTMLElement>;
                // for(let i =0 ; i <=3; i++){
                //   var status=jQuery('.disable-click3')[i].checked;
                //   if(status == false){
                //     elements[i].removeAttribute('disabled')
                //     elements[i].click()
                //     elements[i].setAttribute('disabled', 'disabled');
                //   }
                // }
                let butn = document.getElementsByClassName('stepeNext');
                butn[3].children[0].removeAttribute('disabled');
                butn[3].children[1].removeAttribute('disabled');
            }
        });
        (_e = this.fifthFormGroup) === null || _e === void 0 ? void 0 : _e.valueChanges.subscribe(value => {
            if (this.fifthFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click4')as HTMLCollectionOf<HTMLElement>;
                // for(let i =0 ; i <=4; i++){
                //   var status=jQuery('.disable-click4')[i].checked;
                //   if(status == false){
                //     elements[i].removeAttribute('disabled')
                //     elements[i].click()
                //     elements[i].setAttribute('disabled', 'disabled');
                //   }
                // }
                let butn = document.getElementsByClassName('stepeNext');
                butn[4].children[0].removeAttribute('disabled');
                butn[4].children[1].removeAttribute('disabled');
            }
        });
        (_f = this.sixthFormGroup) === null || _f === void 0 ? void 0 : _f.valueChanges.subscribe(value => {
            if (this.sixthFormGroup.status == 'VALID') {
                // let elements = document.getElementsByClassName('disable-click5')as HTMLCollectionOf<HTMLElement>;
                // for(let i =0 ; i <=5; i++){
                //   var status=jQuery('.disable-click5')[i].checked;
                //   if(status == false){
                //     elements[i].removeAttribute('disabled')
                //     elements[i].click()
                //     elements[i].setAttribute('disabled', 'disabled');
                //   }
                // }
                let butn = document.getElementsByClassName('stepeNext');
                butn[5].children[0].removeAttribute('disabled');
                butn[5].children[1].removeAttribute('disabled');
            }
        });
    }
    doStuff() {
        let heigtht = document.getElementsByClassName('exampleModal1234');
        this.newHeight = heigtht[heigtht.length - 1].clientHeight;
        console.log(this.newHeight, ">>>>>>", this.prevHeight);
        if (this.newHeight == this.prevHeight) {
            heigtht[heigtht.length - 1].style.position = 'absolute';
            heigtht[heigtht.length - 1].style.top = -this.newHeight - 116 + "px";
            const elm = document.querySelector('.dsa-body-content');
            const elemp = elm.parentElement;
            elemp.style.height = heigtht[heigtht.length - 1].clientHeight + "px";
            this.div2.style.minHeight = heigtht[heigtht.length - 1].clientHeight + "px";
        }
        else {
            heigtht[heigtht.length - 1].style.position = 'absolute';
            heigtht[heigtht.length - 1].style.top = -this.newHeight - 116 + "px";
            const elm = document.querySelector('.dsa-body-content');
            const elemp = elm.parentElement;
            elemp.style.height = heigtht[heigtht.length - 1].clientHeight + "px";
            this.div2.style.minHeight = heigtht[heigtht.length - 1].clientHeight + "px";
            this.prevHeight = this.newHeight;
        }
    }
    finish() {
        console.log("finish");
        let buttons = document.getElementsByTagName('mat-step-header')[6];
        buttons.click();
        // this.resultStatus=true;
    }
    do(event) {
        event.preventDefault();
    }
    showResultdata() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (this.finalFormGroup.status == 'VALID') {
            this.testID = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            this.viewResultData = true;
            const elm = document.querySelector('.dsa-body-content');
            console.log(elm.parentElement);
            const elemp = elm.parentElement;
            console.log(elemp.style.minHeight);
            elemp.style.height = '1000px';
            this.sum = this.sum + Number(this.Q1) + Number(this.Q2) + Number(this.Q3a) + Number(this.Q3b) + Number(this.Q4) + Number(this.Q5) + Number(this.Q6) + Number(this.Q7) + Number(this.Q8) + Number(this.Q9) + Number(this.Q10);
            console.log(this.sum);
            this.riskScore = this.sum;
            if (this.sum <= 5 && this.sum >= 0) {
                console.log("Your Result Range  0-5 >>>>>>>>> ");
                this.riskRangeLabel = "Low Risk";
                this.isRiskRange = 0;
            }
            else if (this.sum >= 6 && this.sum <= 11) {
                console.log("Your Result Range  6-11 >>>>>>>>> ");
                this.riskRangeLabel = "Intermediate Risk";
                this.isRiskRange = 1;
                this.suggestionTag1 = "Discuss your score with your doctor as you are at risk of developing type 2 diabetes.";
                this.suggestionTag2 = "Improving your lifestyle through healthy eating and regular physical activity can reduce your risk, or delay the onset of type 2 diabetes.";
            }
            else if (this.sum >= 12) {
                console.log("Your Result Range  12 >>>>>>>>> ");
                this.riskRangeLabel = "High Risk";
                this.isRiskRange = 2;
                this.suggestionTag1 = "You may have undiagnosed type 2 diabetes or be at a high risk of developing the condition.";
                this.suggestionTag2 = "See your doctor about having a fasting blood glucose test. Act now to prevent type 2 diabetes.";
            }
            this.viewResultbutton = true;
            let resultrange;
            if (this.sum <= 5) {
                resultrange = '0 - 5';
            }
            else if (this.sum > 5 && this.sum <= 8) {
                resultrange = '6 - 8';
            }
            else if (this.sum > 8 && this.sum <= 11) {
                resultrange = '9 - 11';
            }
            else if (this.sum > 11 && this.sum <= 15) {
                resultrange = '12 - 15';
            }
            else if (this.sum > 15 && this.sum <= 19) {
                resultrange = '16 - 19';
            }
            else if (this.sum > 19) {
                resultrange = '20+';
            }
            this.resultDataJSON = String.raw `{"q1":"{\"value\":\"` + ((_a = this.firstFormGroup.get('gender')) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\",\"score\":` + this.Q1 + String.raw `}","q2":"{\"value\":\"` + ((_b = this.firstFormGroup.get(`age`)) === null || _b === void 0 ? void 0 : _b.value) + String.raw `\",\"score\":` + this.Q2 + String.raw `}","q3":"{\"value\":\"` + ((_c = this.secondFormGroup.get(`aboriginal`)) === null || _c === void 0 ? void 0 : _c.value) + String.raw `\",\"score\":` + this.Q3a + String.raw `}","q3b":"{\"value\":\"` + ((_d = this.secondFormGroup.get(`bornOptions`)) === null || _d === void 0 ? void 0 : _d.value) + String.raw `\",\"score\":` + this.Q3b + String.raw `}","q4":"{\"value\":\"` + ((_e = this.thirdFormGroup.get(`typeDiabetes`)) === null || _e === void 0 ? void 0 : _e.value) + String.raw `\",\"score\":` + this.Q4 + String.raw `}","q5":"{\"value\":\"` + ((_f = this.thirdFormGroup.get(`highBP`)) === null || _f === void 0 ? void 0 : _f.value) + String.raw `\",\"score\":` + this.Q5 + String.raw `}","q6":"{\"value\":\"` + ((_g = this.fourthFormGroup.get(`hBP`)) === null || _g === void 0 ? void 0 : _g.value) + String.raw `\",\"score\":` + this.Q6 + String.raw `}","q7":"{\"value\":\"` + ((_h = this.fourthFormGroup.get(`tobacco`)) === null || _h === void 0 ? void 0 : _h.value) + String.raw `\",\"score\":` + this.Q7 + String.raw `}","q8":"{\"value\":\"` + ((_j = this.fifthFormGroup.get(`vegetable`)) === null || _j === void 0 ? void 0 : _j.value) + String.raw `\",\"score\":` + this.Q8 + String.raw `}","q9":"{\"value\":\"` + ((_k = this.fifthFormGroup.get(`exercise`)) === null || _k === void 0 ? void 0 : _k.value) + String.raw `\",\"score\":` + this.Q9 + String.raw `}","q10":"{\"value\":\"` + ((_l = this.sixthFormGroup.get(`waist`)) === null || _l === void 0 ? void 0 : _l.value) + String.raw `\",\"score\":` + this.Q10 + String.raw `}","sendemail":"{\"value\":\"yes\",\"score\":0}","mobile":"{\"value\":\"` + ((_m = this.finalFormGroup.get(`phone`)) === null || _m === void 0 ? void 0 : _m.value) + String.raw `\",\"score\":0}","firstname":"{\"value\":\"` + ((_o = this.finalFormGroup.get(`fName`)) === null || _o === void 0 ? void 0 : _o.value) + String.raw `\",\"score\":0}","lastname":"{\"value\":\"` + ((_p = this.finalFormGroup.get(`lName`)) === null || _p === void 0 ? void 0 : _p.value) + String.raw `\",\"score\":0}","email":"{\"value\":\"` + ((_q = this.finalFormGroup.get(`email`)) === null || _q === void 0 ? void 0 : _q.value) + String.raw `\",\"score\":0}","totalscore":"{\"value\":` + this.sum + String.raw `}","resultrange":"{\"value\":\"` + resultrange + String.raw `\"}","TestID":"{\"value\":\"` + this.testID + String.raw `\"}","Type":"{\"value\":\"AusRiskTest\"}","EventKey":"{\"value\":\"` + this.MainKeyValue + String.raw `\"}"}`;
            this.contenItem.postGPdata(this.resultDataJSON, 'FaceTheFacts').subscribe(resp => {
                console.log(resp);
                if (resp) {
                    console.log("success");
                }
            });
        }
        else {
            this.finalFormGroup.markAllAsTouched();
            return;
        }
    }
    radioClick(event) {
        if (event.target.previousSibling) {
            event.target.previousSibling.click();
        }
    }
    QA1(event) {
        this.Q1 = event.target.dataset.score;
    }
    QA2(event) {
        this.Q2 = event.target.dataset.score;
    }
    QA3a(event) {
        this.Q3a = event.target.dataset.score;
    }
    QA3b(event) {
        this.Q3b = event.target.dataset.score;
    }
    QA4(event) {
        this.Q4 = event.target.dataset.score;
    }
    QA5(event) {
        this.Q5 = event.target.dataset.score;
    }
    QA6(event) {
        this.Q6 = event.target.dataset.score;
    }
    QA7(event) {
        this.Q7 = event.target.dataset.score;
    }
    QA8(event) {
        this.Q8 = event.target.dataset.score;
    }
    QA9(event) {
        this.Q9 = event.target.dataset.score;
    }
    QA10(event) {
        this.Q10 = event.target.dataset.score;
    }
    getsupport(event) {
        this.contenItem.getSupportRef(event, this.testID);
    }
    gpResutl(showDrop) {
        this.showDrop = !showDrop;
    }
    getsupportData(event) {
        this.contenItem.getGIData('$/DSA/FTF/GP List', event.target.value).subscribe(resp => {
            console.log(resp);
            this.GPDataResults = [];
            let sendEmail;
            let descp;
            resp.forEach(ele => {
                console.log(ele.Properties.$values[2].Value);
                sendEmail = ele.Properties.$values[1].Value;
                descp = ele.Properties.$values[2].Value;
                this.GPDataResults.push({ descp, sendEmail });
            });
            const elmd = document.getElementsByClassName('dropdownMenuBtn');
            let nextsb = elmd[elmd.length - 1];
            if (nextsb) {
                nextsb.style.display = 'block';
            }
        });
    }
    setValueGP(i) {
        var _a, _b;
        this.GPDataResults[i].descp;
        (_a = this.finalFormGroup.get('gpResult')) === null || _a === void 0 ? void 0 : _a.setValue(this.GPDataResults[i].descp);
        (_b = this.finalFormGroup.get('sendEmail')) === null || _b === void 0 ? void 0 : _b.setValue(this.GPDataResults[i].sendEmail);
    }
    sentToGP() {
        var _a;
        this.openSnackBar('Information Sent Successfully', '');
        let jsondata = String.raw `{"TestId":"{\"value\":\"` + this.testID + String.raw `\"}","GPEmail":"{\"value\":\"` + ((_a = this.finalFormGroup.get('sendEmail')) === null || _a === void 0 ? void 0 : _a.value) + String.raw `\"}","Type":"{\"value\":\"SendToGP\"}"}`;
        this.contenItem.postGPdata(jsondata, 'FaceTheFactsGP').subscribe(resp => {
            if (resp) {
                console.log("success");
                // this.openSnackBar('Information Sent Successfully','')
            }
        });
    }
    stepperPrev(event) {
        console.log(event.target.parentElement.nextElementSibling);
        event.target.parentElement.nextElementSibling.click();
        // event.n
    }
    stepperNext(event) {
        console.log(event.target.parentElement.previousElementSibling);
        event.target.parentElement.previousElementSibling.click();
    }
    becomeMember() {
        window.open('https://www.diabetessa.com.au/Web/Get_Involved/Membership/Become_a_Member/Web/Get_Involved/Membership/Become_a_Member.aspx');
    }
    restStepper() {
        var _a;
        if (document.getElementById('setpRestID')) {
            (_a = document.getElementById('setpRestID')) === null || _a === void 0 ? void 0 : _a.click();
        }
        this.Q1 = 0;
        this.Q2 = 0;
        this.Q3a = 0;
        this.Q3b = 0;
        this.Q4 = 0;
        this.Q5 = 0;
        this.Q6 = 0;
        this.Q7 = 0;
        this.Q8 = 0;
        this.Q9 = 0;
        this.Q10 = 0;
        this.sum = 0;
        this.finalFormGroup.reset();
        this.finalFormGroup.markAsUntouched();
        this.viewResultData = false;
        this.viewResultbutton = false;
        this.showDrop = false;
        let butn = document.getElementsByClassName('stepeNext');
        for (let i = 0; i <= butn.length - 1; i++) {
            butn[i].children[0].setAttribute('disabled', 'disabled');
            butn[i].children[1].setAttribute('disabled', 'disabled');
        }
        // let elements = document.getElementsByClassName('disable-click')as HTMLCollectionOf<HTMLElement>;
        // var status=jQuery('.disable-click')[0].checked;
        // if(status == true){
        //     elements[0].removeAttribute('disabled')
        //     elements[0].click()
        //     elements[0].setAttribute('disabled', 'disabled');
        // }
        // let elements1 = document.getElementsByClassName('disable-click1')as HTMLCollectionOf<HTMLElement>;
        // console.log(elements1)
        // for(let i =0 ; i <=1; i++){
        //   var status=jQuery('.disable-click1')[i].checked;
        //   if(status == true){
        //     elements1[i].removeAttribute('disabled')
        //     elements1[i].click()
        //     elements1[i].setAttribute('disabled', 'disabled');
        //   }
        // }
        // let elements2 = document.getElementsByClassName('disable-click2')as HTMLCollectionOf<HTMLElement>;
        // for(let i =0 ; i <=2; i++){
        //       var status=jQuery('.disable-click2')[i].checked;
        //       if(status == true){
        //         elements2[i].removeAttribute('disabled')
        //         elements2[i].click()
        //         elements2[i].setAttribute('disabled', 'disabled');
        //       }
        // }
        // let elements3 = document.getElementsByClassName('disable-click3')as HTMLCollectionOf<HTMLElement>;
        // console.log(elements3)
        // for(let i =0 ; i <=3; i++){
        //       var status=jQuery('.disable-click3')[i].checked;
        //       if(status == true){
        //         elements3[i].removeAttribute('disabled')
        //         elements3[i].click()
        //         elements3[i].setAttribute('disabled', 'disabled');
        //       }
        //     }
        // let elements4 = document.getElementsByClassName('disable-click4')as HTMLCollectionOf<HTMLElement>;
        // for(let i =0 ; i <=4; i++){
        //   var status=jQuery('.disable-click4')[i].checked;
        //   if(status == true){
        //     elements4[i].removeAttribute('disabled')
        //     elements4[i].click()
        //     elements4[i].setAttribute('disabled', 'disabled');
        //   }
        // }
        // let elements5 = document.getElementsByClassName('disable-click5')as HTMLCollectionOf<HTMLElement>;
        // for(let i =0 ; i <=5; i++){
        //   var status=jQuery('.disable-click5')[i].checked;
        //   if(status == true){
        //     elements5[i].removeAttribute('disabled')
        //     elements5[i].click()
        //     elements5[i].setAttribute('disabled', 'disabled');
        //   }
        // }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
            panelClass: ['red-snackbar']
        });
    }
    openNew() {
        window.open('https://www.facethefacts.org.au/Info/terms_and_conditions.aspx');
    }
}
RiskTestComponent.ɵfac = function RiskTestComponent_Factory(t) { return new (t || RiskTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"])); };
RiskTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RiskTestComponent, selectors: [["app-risk-test"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
            }])], decls: 511, vars: 93, consts: [["id", "exampleModal12345", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "view-modal", 2, "z-index", "9999999!important", "padding", "0!important"], ["role", "document", 1, "modal-dialog", "modal-dialogs"], [1, "modal-content", 2, "background", "none!important"], [1, "modal-body", 2, "padding", "0!important"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "close-btn-cross", 3, "click"], ["aria-hidden", "true", 2, "font-size", "65px"], [1, ""], ["stepper", ""], [3, "stepControl"], [1, "card_box", "position-relative"], [1, "form_risk", 3, "formGroup"], ["src", "https://www.facethefacts.org.au/images/Site_Info/iStock-1135943635.png", 1, "imm"], [1, "bg_gradient"], [1, "text-center", "text-white", "card_text", "position-relative", "content-dsa"], [1, "text-white", "m-5"], [1, "form-check", "form-check-inline", "answer_check"], ["data-score", "0", "formControlName", "gender", "type", "radio", "name", "gender", "value", "Female", 1, "form-check-input", "check-inputs", 3, "change"], [1, "text-white", "form-check-label", "font_results", 3, "click"], ["data-score", "3", "formControlName", "gender", "type", "radio", "name", "gender", "value", "Male", 1, "form-check-input", "check-inputs", 3, "change"], [1, "mt-5"], ["data-score", "0", "type", "radio", "name", "age", "formControlName", "age", "value", "Under 35 years", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "type", "radio", "name", "age", "formControlName", "age", "value", "35 - 44 years", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "4", "type", "radio", "name", "age", "formControlName", "age", "value", "45 - 54 years", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "6", "type", "radio", "name", "age", "formControlName", "age", "value", "55 - 64 years", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "8", "type", "radio", "name", "age", "formControlName", "age", "value", "65 years or older", 1, "form-check-input", "check-inputs", 3, "change"], [1, "my-5", "padding-container"], [1, "form-check", "form-check-inline", "page-media-btn"], [1, "mr-3", "next-btn-cusror", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-button", "", "matStepperPrevious", ""], [1, "form-check", "form-check-inline", "pagemedia-btn"], [1, "containers"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click"], [1, "checkmark"], ["disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click1"], ["disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click2"], ["disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click3"], ["disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click4"], ["disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click5"], ["mat-button", "", "matStepperNext", "", 1, "form-check", "form-check-inline", "page-media-btn", "stepeNext"], ["disabled", "", "mat-button", "", "matStepperNext", "", 1, "next-btn-cusror"], ["disabled", "", "mat-button", "", "matStepperNext", "", 1, "ml-3", "next-btn-cusror", 3, "click"], [1, "fas", "fa-arrow-right"], ["id", "setpRestID", "mat-button", "", 2, "display", "none", 3, "click"], ["src", "https://www.facethefacts.org.au/images/Site_Info/Layer 0.png", 1, "imm11"], [1, "bg_gradient1"], ["data-score", "2", "formControlName", "aboriginal", "type", "radio", "name", "aboriginal", "value", "Yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "aboriginal", "type", "radio", "name", "aboriginal", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "Australia", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "Asia", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "Middle East", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "North Africa", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "Southern European", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "bornOptions", "type", "radio", "name", "bornOptions", "value", "Other", 1, "form-check-input", "check-inputs", 3, "change"], ["disabled", "", "type", "checkbox", "checked", "checked", "name", "radio"], ["disabled", "", "checked", "checked", "type", "checkbox", "name", "radio", 1, "disable-click1"], ["src", "https://www.facethefacts.org.au/images/Site_Info/Rectangle 1533.png", 1, "imm3"], ["data-score", "3", "formControlName", "typeDiabetes", "type", "radio", "name", "typeDiabetes", "value", "Yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "typeDiabetes", "type", "radio", "name", "typeDiabetes", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "6", "formControlName", "highBP", "type", "radio", "name", "highBP", "value", "Yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "highBP", "type", "radio", "name", "highBP", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["matStepperPrevious", "", 1, "mr-3", "next-btn-cusror", 3, "click"], ["disabled", "", "checked", "checked", "type", "checkbox", "name", "radio"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click2"], ["disabled", "", 1, "ml-3", "next-btn-cusror", 3, "click"], ["src", "https://www.facethefacts.org.au/images/Site_Info/iStock-476291300.png", 1, "imm1"], ["data-score", "2", "formControlName", "hBP", "type", "radio", "name", "hBP", "value", "Yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "hBP", "type", "radio", "name", "hBP", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "tobacco", "type", "radio", "name", "tobacco", "value", "Yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "tobacco", "type", "radio", "name", "tobacco", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click3"], ["src", "https://www.facethefacts.org.au/images/Site_Info/iStock-1174449982-young-indian-girl.png", 1, "imm4"], ["data-score", "0", "formControlName", "vegetable", "type", "radio", "name", "vegetable", "value", "Every Day", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "1", "formControlName", "vegetable", "type", "radio", "name", "vegetable", "value", "Not Every Day", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "0", "formControlName", "exercise", "type", "radio", "name", "exercise", "value", "yes", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "2", "formControlName", "exercise", "type", "radio", "name", "exercise", "value", "No", 1, "form-check-input", "check-inputs", 3, "change"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click4"], ["src", "https://www.facethefacts.org.au/images/Site_Info/iStock-1135081673.png", 1, "imm1"], [1, "hint-waist"], [1, "row", "mx-3"], [1, "col-4", "p-0", "range-media"], [1, "mx-3", "range-heading"], [1, "range-heading2"], [1, "range-heading3"], [1, "waist-headings", "mt-3"], ["class", "waist-value", 4, "ngIf"], [1, "waist-headings"], [1, "waist-value"], [1, "form-check", "form-check-inline", "mt-4"], ["data-score", "0", "formControlName", "waist", "type", "radio", "name", "waist", "value", "Range 1", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "4", "formControlName", "waist", "type", "radio", "name", "waist", "value", "Range 2", 1, "form-check-input", "check-inputs", 3, "change"], ["data-score", "7", "formControlName", "waist", "type", "radio", "name", "waist", "value", "Range 3", 1, "form-check-input", "check-inputs", 3, "change"], ["checked", "checked", "disabled", "", "type", "checkbox", "name", "radio", 1, "disable-click5"], ["src", "https://www.facethefacts.org.au/images/Site_Info/iStock-1135943688.png", 1, "imm"], [1, "mx-5", "p-5", "details-box"], [1, "text-left", "m-0"], [1, "row", "fourm_field"], [1, "col-3", "result-media"], [1, "inner_result_media"], ["matInput", "", "placeholder", "First Name*", "formControlName", "fName"], ["matInput", "", "placeholder", "Last Name*", "formControlName", "lName"], ["matInput", "", "placeholder", "Email*", "formControlName", "email"], ["class", "error", 4, "ngIf"], ["matInput", "", "placeholder", "Contact Number*", "formControlName", "phone"], [1, "row"], [1, "col", "text-left"], ["formControlName", "termsCondition", 1, "example-margin", "accptcond"], [2, "font-weight", "100"], [1, "terms_cond", 3, "click"], [1, "mx-5", "mt-4", "details-box1"], [1, "col", "mb-5", 3, "ngClass"], [1, "btn", "primary-btn", "view-final-btn", 3, "disabled", "click"], ["class", " mx-5 mb-5 p-5 details-box", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "mx-5", "mb-5", "p-5", "details-box"], [1, "text-left", "m-0", "resutlTest"], [3, "ngClass"], [1, "chart"], [1, "bar-chart", "text-center"], [1, "bar-chart"], [1, "bar-chartMin", 3, "ngClass"], [1, "bar-chartMed", 3, "ngClass"], [1, "bar-chartMax", 3, "ngClass"], [1, "bar-chart-range"], ["class", "text-left m-0 glucoseB", 4, "ngIf"], ["class", "text-left m-0 glucose", 4, "ngIf"], [1, "next-step", "mb-4"], ["class", "col-4 gp_result_media", 4, "ngIf"], ["class", "gp_result_media", 3, "ngClass", 4, "ngIf"], [1, "gp_result_media", 3, "ngClass"], [1, "my-3"], ["src", "https://www.facethefacts.org.au/images/Site_Info/B - Get support.png", 3, "click"], [1, "row", "bottom-result"], [1, "col-12", "mt-3"], [1, "col-12", "my-3"], [1, "btn", "btnprimaryss", 3, "click"], [1, "text-left", "m-0", "glucoseB"], [1, "text-left", "m-0", "glucose"], [1, "col-4", "gp_result_media"], ["src", "https://www.facethefacts.org.au/images/Site_Info/Component 108 \u2013 2.png", 3, "click"], ["src", "https://www.facethefacts.org.au/images/Site_Info/Component 108 \u2013 1.png", 3, "click"], [1, "dropdown"], ["type", "text", "formControlName", "gpResult", "placeholder", "Medical Practice", "data-toggle", "dropdown", "aria-expanded", "false", 1, "dropdownMenuButtons", 3, "keyup"], ["aria-labelledby", "dropdownMenuButtons", 1, "dropdown-menu", "dropdownMenuBtn"], ["class", "dropdown-item list-result-data", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "dropdown-item", "list-result-data", 3, "click"]], template: function RiskTestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_button_click_4_listener() { return ctx.restStepper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-horizontal-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Demographic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Q1. What is your gender?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_20_listener($event) { return ctx.QA1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_21_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_24_listener($event) { return ctx.QA1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_25_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Q2. How old you are?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_30_listener($event) { return ctx.QA2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_31_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Under 35 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_34_listener($event) { return ctx.QA2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_35_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "35-44 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_38_listener($event) { return ctx.QA2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_39_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "45-54 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_42_listener($event) { return ctx.QA2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_43_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "55-64 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_46_listener($event) { return ctx.QA2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_47_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "65 years or over");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_51_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_82_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Your Demographic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Q3A. Are you of Aboriginal, Torres Strait Islander, Pacific Islander or Maori Descent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_97_listener($event) { return ctx.QA3a($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_98_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_101_listener($event) { return ctx.QA3a($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_102_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Q3B. Where were you born?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_107_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_108_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_111_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_112_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_115_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_116_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Middle East");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_119_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_120_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "North Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_123_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_124_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Southern European");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_127_listener($event) { return ctx.QA3b($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_128_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_132_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_163_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Your Demographic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Q4. Have either your parents, or any of your brothers and sisters been diagnosed with diabetes (Type 1 or 2)? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_176_listener($event) { return ctx.QA4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_177_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_180_listener($event) { return ctx.QA4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_181_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Q5. Have you ever been found to have High Blood Glucose (Sugar) e.g. in a health examination, during an illness or during pregnancy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_186_listener($event) { return ctx.QA5($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_187_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_190_listener($event) { return ctx.QA5($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_191_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_195_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_226_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Tell us a bit about your health and lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Q6. Are you currently taking medication for high blood pressure? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_239_listener($event) { return ctx.QA6($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_240_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_243_listener($event) { return ctx.QA6($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_244_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Q7. Do you smoke tobacco every day?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_249_listener($event) { return ctx.QA7($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_250_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_253_listener($event) { return ctx.QA7($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_254_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_258_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_289_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Tell us a bit about your health and lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Q8. How often do you eat vegetables or fruit? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_302_listener($event) { return ctx.QA8($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_303_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Every Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_306_listener($event) { return ctx.QA8($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_307_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Not Every Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Q9. On average, would you do at least 2.5 hours of physical activity per week (for example, half an hour on 5 or more days)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_312_listener($event) { return ctx.QA9($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_313_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_316_listener($event) { return ctx.QA9($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_317_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_321_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_352_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Tell us bit about your health and lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Q10. What is your waist measurement? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Hint: Measure your waist below the ribs while standing (usually around the belly button). If you don't have a tape measure refer to the clothing sizes in the table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Which range does your waist measurement fall under?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Range 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "WAIST MEASUREMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](377, RiskTestComponent_p_377_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](378, RiskTestComponent_p_378_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](379, RiskTestComponent_p_379_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](380, RiskTestComponent_p_380_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "CLOTHING SIZE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "8 / 10 / 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_386_listener($event) { return ctx.QA10($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_387_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Range 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Range 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "WAIST MEASUREMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](396, RiskTestComponent_p_396_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](397, RiskTestComponent_p_397_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](398, RiskTestComponent_p_398_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](399, RiskTestComponent_p_399_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "CLOTHING SIZE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "14 / 16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_405_listener($event) { return ctx.QA10($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_406_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Range 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Range 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "WAIST MEASUREMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](415, RiskTestComponent_p_415_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](416, RiskTestComponent_p_416_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](417, RiskTestComponent_p_417_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](418, RiskTestComponent_p_418_Template, 2, 0, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "CLOTHING SIZE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "18 / 20 / 22 / 24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskTestComponent_Template_input_change_424_listener($event) { return ctx.QA10($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_label_click_425_listener($event) { return ctx.radioClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Range 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_429_listener($event) { return ctx.stepperPrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_460_listener($event) { return ctx.stepperNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Your Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "One person is diagnosed with diabetes every 5 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Please enter your details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "mat-form-field", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "First Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "mat-form-field", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Last Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "mat-form-field", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](491, RiskTestComponent_div_491_Template, 3, 2, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "mat-form-field", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Contact Number*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "mat-checkbox", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "span", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_span_click_502_listener($event) { ctx.openNew(); return ctx.do($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](504, RiskTestComponent_div_504_Template, 2, 1, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskTestComponent_Template_button_click_508_listener() { return ctx.showResultdata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "VIEW RESULTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](510, RiskTestComponent_div_510_Template, 47, 25, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_66_0 = null;
        let tmp_67_0 = null;
        let tmp_68_0 = null;
        let tmp_69_0 = null;
        let tmp_72_0 = null;
        let tmp_73_0 = null;
        let tmp_74_0 = null;
        let tmp_75_0 = null;
        let tmp_78_0 = null;
        let tmp_79_0 = null;
        let tmp_80_0 = null;
        let tmp_81_0 = null;
        let tmp_86_0 = null;
        let tmp_87_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "gender1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "gender1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "gender2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "gender2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "age1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "age1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "age2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "age2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "age3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "age3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "age4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "age4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "age5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "age5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "aboriginal1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "aboriginal1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "aboriginal2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "aboriginal2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "born6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "born6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "typeDiabetes1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "typeDiabetes1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "typeDiabetes2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "typeDiabetes2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "highBP1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "highBP1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "highBP2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "highBP2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.fourthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fourthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "hBP1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "hBP1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "hBP2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "hBP2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "tobacco1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "tobacco1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "tobacco2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "tobacco2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.fifthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fifthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "vegetable1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "vegetable1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "vegetable2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "vegetable2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "exercise1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "exercise1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "exercise2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "exercise2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.sixthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sixthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_66_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_66_0.value) == "Male" && (((tmp_66_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_66_0.value) == "Yes" || ((tmp_66_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_66_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_67_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_67_0.value) == "Female" && (((tmp_67_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_67_0.value) == "Yes" || ((tmp_67_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_67_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_68_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_68_0.value) == "Male" && !(((tmp_68_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_68_0.value) == "Yes" || ((tmp_68_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_68_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_69_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_69_0.value) == "Female" && !(((tmp_69_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_69_0.value) == "Yes" || ((tmp_69_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_69_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "waist1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "waist1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_72_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_72_0.value) == "Male" && (((tmp_72_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_72_0.value) == "Yes" || ((tmp_72_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_72_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_73_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_73_0.value) == "Female" && (((tmp_73_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_73_0.value) == "Yes" || ((tmp_73_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_73_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_74_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_74_0.value) == "Male" && !(((tmp_74_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_74_0.value) == "Yes" || ((tmp_74_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_74_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_75_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_75_0.value) == "Female" && !(((tmp_75_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_75_0.value) == "Yes" || ((tmp_75_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_75_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "waist2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "waist2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_78_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_78_0.value) == "Male" && (((tmp_78_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_78_0.value) == "Yes" || ((tmp_78_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_78_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_79_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_79_0.value) == "Female" && (((tmp_79_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_79_0.value) == "Yes" || ((tmp_79_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_79_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_80_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_80_0.value) == "Male" && !(((tmp_80_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_80_0.value) == "Yes" || ((tmp_80_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_80_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_81_0 = ctx.firstFormGroup.get("gender")) == null ? null : tmp_81_0.value) == "Female" && !(((tmp_81_0 = ctx.secondFormGroup.get("aboriginal")) == null ? null : tmp_81_0.value) == "Yes" || ((tmp_81_0 = ctx.secondFormGroup.get("bornOptions")) == null ? null : tmp_81_0.value) == "Asia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "", ctx.contentID, "waist3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "", ctx.contentID, "waist3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.finalFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.finalFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_86_0 = ctx.finalFormGroup.get("email")) == null ? null : tmp_86_0.errors) && ((tmp_86_0 = ctx.finalFormGroup.get("email")) == null ? null : tmp_86_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_87_0 = ctx.finalFormGroup.get("termsCondition")) == null ? null : tmp_87_0.errors) && ((tmp_87_0 = ctx.finalFormGroup.get("termsCondition")) == null ? null : tmp_87_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c4, !ctx.viewResultData));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.viewResultbutton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewResultData);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.content-1[_ngcontent-%COMP%]{\r\n    background-image:  url(https://www.imisconsulting.com.au//iMIS0/images/Site_Info/iStock-1135943635.png);\r\n   \r\n    background-size: cover;\r\n    border: 2px solid red;\r\n    width: 800px;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content-2[_ngcontent-%COMP%]{\r\n    \r\n   \r\n    background-size: cover;\r\n    border: 2px solid blue;\r\n    width: 800px;\r\n    height: 400px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 125px;\r\n    z-index: 9;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -362px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 1000px;\r\n    height: 1000px;\r\n}\r\n\r\n.parent-content[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    height: 700px;\r\n    margin: 0 auto;\r\n    border: 3px solid yellow;\r\n    display: block;\r\n    clear: both;\r\n    overflow: hidden;\r\n}\r\n\r\n.child-content[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 45%;\r\n\r\n    \r\n    margin: 10px 5px;\r\n}\r\n\r\n.child-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 1050px;\r\n    height: 1052px;\r\n    position: relative;\r\n    top: -150px;\r\n}\r\n\r\n.child-content-2[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    position: absolute;\r\n    \r\n    background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,.7));\r\n    height: 700px;\r\n    max-width: 1000px;\r\n    color: #ffffff;\r\n}\r\n\r\n.card_box[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    overflow: hidden;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.bg_gradient[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    background-image: linear-gradient(to right, black , #000000b8);\r\n}\r\n\r\n.imm[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 200px;\r\n    right: -600px;\r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(1.5);\r\n    \r\n}\r\n\r\n.imm1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 200px;\r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(1.8);\r\n   \r\n}\r\n\r\n.imm123[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 250px;\r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(1.2);\r\n   \r\n}\r\n\r\n.imm11[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 260px;\r\n    \r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(2.4);\r\n    \r\n}\r\n\r\n.imm3[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 300px;\r\n    right: -169px;\r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(1.4);\r\n}\r\n\r\n.imm4[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 350px;\r\n    right: -640px;\r\n    max-width: 597px;\r\n    object-fit: cover;\r\n    transform: translate(-50%,-50%) scale(2.2);\r\n}\r\n\r\n.bg_gradient1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    background-image: linear-gradient(to left, black , #000000b8);\r\n}\r\n\r\n  .diabetes .mat-stepper-horizontal .mat-horizontal-stepper-header-container{\r\n    display: none!important;\r\n}\r\n\r\n.hint-waist[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n\r\n}\r\n\r\n.range-heading[_ngcontent-%COMP%]{\r\n   \r\n\r\n}\r\n\r\n.range-heading2[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    border-top-right-radius:  20px;\r\n  border-top-left-radius: 20px;\r\n  padding: 10px 0\r\n}\r\n\r\n.range-heading3[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    border-bottom-right-radius:  20px;\r\n    border-bottom-left-radius: 20px;\r\n    padding: 10px 0\r\n}\r\n\r\n.waist-headings[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-size: 12px;\r\n    margin-bottom: .7rem;\r\n}\r\n\r\n.waist-value[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    font-weight: 700;\r\n    margin-bottom: .7rem;\r\n}\r\n\r\n.content-dsa[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.modal-dialogs[_ngcontent-%COMP%]{\r\n      max-width: 3000px!important;\r\n      margin: 0!important;\r\n      background: #0d0d0d!important;\r\n  }\r\n\r\n  .mat-horizontal-content-container {\r\n    overflow: hidden;\r\n    padding: 0!important;\r\n}\r\n\r\n.view-modal[_ngcontent-%COMP%]{\r\n    padding-right: 0!important;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    min-height: 100%;\r\n    border-radius: 0;\r\n    \r\n  }\r\n\r\n.details-box[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    color: black;\r\n  }\r\n\r\n.step-containers[_ngcontent-%COMP%]{\r\n   \r\n    max-height: 800px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n.view-final-btn[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background: red;\r\n    width: 100%;\r\n    padding: 5px;\r\n    border-radius: unset!important;\r\n  }\r\n\r\n.riskDiabetes[_ngcontent-%COMP%]{\r\n      color: red;\r\n\r\n     \r\n  }\r\n\r\n.riskDiabetess[_ngcontent-%COMP%]{\r\n    background: #ed1c24!important;\r\n  }\r\n\r\n.resutlTest[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    font-weight: 700;\r\n  }\r\n\r\n.bar-chartMin[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n    min-height: 20px!important;\r\n    background: #404141;\r\n    max-height: 20px!important;\r\n    color: #fff;\r\n    position: relative;\r\n    top: 50px;\r\n}\r\n\r\n.next-btn-cusror[_ngcontent-%COMP%]{\r\n   \r\n    cursor: pointer!important;\r\n}\r\n\r\n\r\n\r\n.bar-chartMed[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n    min-height: 40px!important;\r\n    background: #404141;\r\n    max-height: 40px!important;\r\n    color: #fff;\r\n    position: relative;\r\n    top: 30px;\r\n}\r\n\r\n.bar-chartMax[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n    min-height: 70px!important;\r\n    background: #404141;\r\n    max-height: 70px!important;\r\n    color: #fff;\r\n    font-size: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.chart[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n}\r\n\r\n.bar-chart[_ngcontent-%COMP%]{\r\n    width: 33.33%;\r\n    margin: 45px 0 10px 0;\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.bar-chart-range[_ngcontent-%COMP%]{\r\n    width: 33.33%;\r\n    margin: 5px 0 10px 0;\r\n    text-align: center;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n.glucose[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    margin: 10px 0 30px 0!important;\r\n}\r\n\r\n.glucoseB[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-top: 30px!important;\r\n}\r\n\r\n  .diabetes .mat-stepper-horizontal .mat-horizontal-stepper-header-container{\r\n    display: none!important;\r\n}\r\n\r\n.exampleModal1234[_ngcontent-%COMP%]{\r\n    display: none;\r\n    position: absolute;\r\n        \r\n        left: 0px;\r\n    width: 100%;\r\n    z-index: 999;\r\n    \r\n      }\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .answer_check[_ngcontent-%COMP%] {\r\n      \r\n        padding-left: 75px!important;\r\n    }\r\n    .form-check-inline[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        position: relative;\r\n       \r\n        margin: 5px 0;\r\n    }\r\n    .range-media[_ngcontent-%COMP%]{\r\n        max-width: 100%!important;\r\n        flex: auto!important;\r\n        padding: 15px!important;\r\n    }\r\n    .page-media-btn[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        position: initial!important;\r\n    }\r\n    .result-media[_ngcontent-%COMP%]{\r\n        max-width: 100%!important;\r\n        flex: unset!important;\r\n    }\r\n    .inner_result_media[_ngcontent-%COMP%]{\r\n        width: 100%!important;\r\n    }\r\n    .gp_result_media[_ngcontent-%COMP%]{\r\n        max-width: 100%!important;\r\n        flex: none!important;\r\n    }\r\n    .details-box[_ngcontent-%COMP%]{\r\n        padding: 20px!important;\r\n        margin: 0 20px 20px 20px!important;\r\n    }\r\n    .bar-chart-range[_ngcontent-%COMP%]{\r\n        font-size: 14px!important;\r\n    }\r\n    .resutlTest[_ngcontent-%COMP%]{\r\n        font-size: 20px!important;\r\n    }\r\n    .imm[_ngcontent-%COMP%] {\r\n        top: 250px!important;\r\n    }\r\n    .imm11[_ngcontent-nym-c88][_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 310px;\r\n        max-width: 597px;\r\n        object-fit: cover;\r\n        transform: translate(-50%,-50%) scale(1.8);\r\n    }\r\n}\r\n\r\n.padding-container[_ngcontent-%COMP%]{\r\n    padding-top: 3rem!important;\r\n    padding-bottom: 50rem!important;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.pagemedia-btn[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    position: relative;\r\n    left: 0px;\r\n    top: -12px;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n    cursor: default;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ed1c24;\r\n}\r\n\r\n\r\n\r\n.checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n.containers[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n       top: 5px;\r\n      left: 5px;\r\n      width: 0px;\r\n      height: 0px;\r\n      border-radius: 50%;\r\n      background: white;\r\n}\r\n\r\n.check-inputs[_ngcontent-%COMP%]{\r\n      width: 20px;\r\n      height: 20px;\r\n}\r\n\r\n.page-inputs[_ngcontent-%COMP%]{\r\n      width: 10px;\r\n}\r\n\r\n.stepeNext[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n      color: #fff;\r\n}\r\n\r\n.stepeNext[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{\r\n    color: #999;\r\n}\r\n\r\n.accptcond[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\r\n    line-height: 24px;\r\n    color: #0000008c!important;\r\n  }\r\n\r\n.next-step[_ngcontent-%COMP%]{\r\n      font-size: 28px;\r\n      color: #ed1c24;\r\n  }\r\n\r\n.bottom-result[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    background: #404141;\r\n    color: white;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.dropdownMenuButtons[_ngcontent-%COMP%]{\r\n    padding: 0px 10px;\r\n    margin: 20px 10px 15px 10px;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    border: 1px solid;\r\n    font-size: 14px;\r\n    height: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.list-result-data[_ngcontent-%COMP%]{\r\n    font-size: 14px!important;\r\n}\r\n\r\n.fourm_field[_ngcontent-%COMP%]{\r\n    min-height: 88px!important;\r\n\r\n}\r\n\r\n.btnprimaryss[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #ed1c24!important;\r\n    border: #ed1c24!important;\r\n    border-radius: 20px!important;\r\n    padding: 5px 60px!important;\r\n    margin: 1rem!important;\r\n    outline: none;\r\n}\r\n\r\n.mat-horizontal-content-container[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    padding: 0!important;\r\n}\r\n\r\n.close-btn-cross[_ngcontent-%COMP%]{\r\n    position: absolute!important;\r\n    top: 35px!important;\r\n    z-index: 999!important;\r\n    right: 25px!important;\r\n    font-size: 24px!important;\r\n    color: #fff!important;\r\n}\r\n\r\n.font_results[_ngcontent-%COMP%]{\r\n    font-weight: 100!important;\r\n}\r\n\r\n.form_risk[_ngcontent-%COMP%]{\r\n    height: calc(100vh - 18px);\r\n    overflow: scroll;\r\n}\r\n\r\n.card_text[_ngcontent-%COMP%]{\r\n    margin: 50px auto!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpc2stdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSx1R0FBdUc7R0FDeEcsbUNBQW1DO0lBQ2xDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksd0tBQXdLO0dBQ3pLLG1DQUFtQztJQUNsQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7O0lBRVYsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwwRUFBMEU7SUFDMUUsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQVdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXOztBQUVmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsOERBQThEO0FBQ2xFOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQzs7QUFFOUM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMENBQTBDOztBQUU5Qzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw2REFBNkQ7QUFDakU7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBOzs7QUFHQTs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw4QkFBOEI7RUFDaEMsNEJBQTRCO0VBQzVCO0FBQ0Y7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQjtBQUNKOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO01BQ0ksMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw2QkFBNkI7RUFDakM7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0VBRWxCOztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQzs7QUFDQTtNQUNJLFVBQVU7OztFQUdkOztBQUNBO0lBQ0UsNkJBQTZCO0VBQy9COztBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBQ0E7OztHQUdHOztBQUNIO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7O0FBRWxDOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtRQUNkLGVBQWU7UUFDZixTQUFTO0lBQ2IsV0FBVztJQUNYLFlBQVk7O01BRVY7O0FBS047SUFDSTs7UUFFSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7O1FBRWxCLGFBQWE7SUFDakI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiwwQ0FBMEM7SUFDOUM7QUFDSjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7O0FBQ0Esa0JBQWtCOztBQUNsQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUd6QixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBQ0UsNENBQTRDOztBQUM5QztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFRSxpQ0FBaUM7O0FBQ25DO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUUsK0NBQStDOztBQUNqRDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFRSw0REFBNEQ7O0FBQzlEO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVFLG9FQUFvRTs7QUFDdEU7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUUsaURBQWlEOztBQUNuRDtJQUNJLGNBQWM7QUFDbEI7O0FBRUUscUNBQXFDOztBQUN2QztPQUNPLFFBQVE7TUFDVCxTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsaUJBQWlCO0FBQ3ZCOztBQUdBO01BQ00sV0FBVztNQUNYLFlBQVk7QUFDbEI7O0FBQ0E7TUFDTSxXQUFXO0FBQ2pCOztBQUNBO01BQ00sV0FBVztBQUNqQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7RUFDNUI7O0FBQ0E7TUFDSSxlQUFlO01BQ2YsY0FBYztFQUNsQjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwwQkFBMEI7O0FBRTlCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoicmlzay10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4uY29udGVudC0xe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybChodHRwczovL3d3dy5pbWlzY29uc3VsdGluZy5jb20uYXUvL2lNSVMwL2ltYWdlcy9TaXRlX0luZm8vaVN0b2NrLTExMzU5NDM2MzUucG5nKTtcclxuICAgLyogLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjBweCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59IFxyXG4uY29udGVudC0ye1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuNzIpLCByZ2JhKDAsIDAsIDAsIDAuNzMpKSwgdXJsKGh0dHBzOi8vd3d3LmltaXNjb25zdWx0aW5nLmNvbS5hdS8vaU1JUzAvaW1hZ2VzL1NpdGVfSW5mby9pU3RvY2stMTEzNTk0MzYzNS5wbmcpOyAqL1xyXG4gICAvKiAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMjVweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn0gIFxyXG4uY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zNjJweDtcclxufVxyXG4uY29udGVudCBpbWd7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuXHJcblxyXG4ucGFyZW50LWNvbnRlbnR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jaGlsZC1jb250ZW50e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG5cclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxufVxyXG4uY2hpbGQtY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDEwNTBweDtcclxuICAgIGhlaWdodDogMTA1MnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTUwcHg7XHJcbn1cclxuLmNoaWxkLWNvbnRlbnQtMntcclxuICAgIC8qIC8vYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHdpZHRoOiBjYWxjKDgwdncgLSAyMHB4KTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwuNykpO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jYXJkX2JveCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLmJnX2dyYWRpZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmxhY2sgLCAjMDAwMDAwYjgpO1xyXG59XHJcbi5pbW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHJpZ2h0OiAtNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU5N3B4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEuNSk7XHJcbiAgICAvKiBvYmplY3QtcG9zaXRpb246IHJpZ2h0OyAqL1xyXG59XHJcbi5pbW0xIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU5N3B4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEuOCk7XHJcbiAgIFxyXG59XHJcbi5pbW0xMjMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogNTk3cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMS4yKTtcclxuICAgXHJcbn1cclxuLmltbTExIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjYwcHg7XHJcbiAgICAvKiByaWdodDogLTYwMHB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiA1OTdweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgyLjQpO1xyXG4gICAgLyogb2JqZWN0LXBvc2l0aW9uOiByaWdodDsgKi9cclxufVxyXG4uaW1tMyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICAgcmlnaHQ6IC0xNjlweDtcclxuICAgIG1heC13aWR0aDogNTk3cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMS40KTtcclxufVxyXG4uaW1tNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG4gICAgcmlnaHQ6IC02NDBweDtcclxuICAgIG1heC13aWR0aDogNTk3cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMi4yKTtcclxufVxyXG4uYmdfZ3JhZGllbnQxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjayAsICMwMDAwMDBiOCk7XHJcbn1cclxuOjpuZy1kZWVwIC5kaWFiZXRlcyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmhpbnQtd2Fpc3R7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59XHJcbi5yYW5nZS1oZWFkaW5ne1xyXG4gICBcclxuXHJcbn1cclxuLnJhbmdlLWhlYWRpbmcye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAyMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwXHJcbn1cclxuLnJhbmdlLWhlYWRpbmcze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAgMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBcclxufVxyXG4ud2Fpc3QtaGVhZGluZ3N7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xyXG59XHJcbi53YWlzdC12YWx1ZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xyXG59XHJcbi5jb250ZW50LWRzYXtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tb2RhbC1kaWFsb2dze1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwZDBkMGQhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG4udmlldy1tb2RhbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xyXG59XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBcclxuICB9XHJcbiAgLmRldGFpbHMtYm94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnN0ZXAtY29udGFpbmVyc3tcclxuICAgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWZpbmFsLWJ0bntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yaXNrRGlhYmV0ZXN7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcblxyXG4gICAgIFxyXG4gIH1cclxuICAucmlza0RpYWJldGVzc3tcclxuICAgIGJhY2tncm91bmQ6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVzdXRsVGVzdHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5iYXItY2hhcnRNaW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQwNDE0MTtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbn1cclxuLm5leHQtYnRuLWN1c3JvcntcclxuICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5uZXh0LWJ0bi1jdXNyb3I6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCFpbXBvcnRhbnQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLmJhci1jaGFydE1lZCB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgbWluLWhlaWdodDogNDBweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0MTQxO1xyXG4gICAgbWF4LWhlaWdodDogNDBweCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzBweDtcclxufVxyXG4uYmFyLWNoYXJ0TWF4IHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4IWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM0MDQxNDE7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmNoYXJ0e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG4uYmFyLWNoYXJ0e1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG1hcmdpbjogNDVweCAwIDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYmFyLWNoYXJ0LXJhbmdle1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG1hcmdpbjogNXB4IDAgMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufVxyXG4uZ2x1Y29zZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDMwcHggMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmdsdWNvc2VCe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmRpYWJldGVzIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZU1vZGFsMTIzNHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogdG9wOiA4NXB4OyAqL1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hbnN3ZXJfY2hlY2sge1xyXG4gICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDc1cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY2hlY2staW5saW5lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgfVxyXG4gICAgLnJhbmdlLW1lZGlhe1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFnZS1tZWRpYS1idG57XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWwhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1tZWRpYXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IHVuc2V0IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbm5lcl9yZXN1bHRfbWVkaWF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmdwX3Jlc3VsdF9tZWRpYXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtYm94e1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmFyLWNoYXJ0LXJhbmdle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmVzdXRsVGVzdHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmltbSB7XHJcbiAgICAgICAgdG9wOiAyNTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW1tMTFbX25nY29udGVudC1ueW0tYzg4XSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1OTdweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEuOCk7XHJcbiAgICB9XHJcbn1cclxuLnBhZGRpbmctY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW0haW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcmVtIWltcG9ydGFudDtcclxufVxyXG4vKiBUaGUgY29udGFpbmVyICovXHJcbi5jb250YWluZXJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLnBhZ2VtZWRpYS1idG57XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogLTEycHg7XHJcbn1cclxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cclxuLmNvbnRhaW5lcnMgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cclxuLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbiAgXHJcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5jb250YWluZXJzOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbiAgXHJcbiAgLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVycyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xyXG59XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICBcclxuICAvKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xyXG4uY29udGFpbmVycyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXHJcbi5jb250YWluZXJzIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY2hlY2staW5wdXRze1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5wYWdlLWlucHV0c3tcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuLnN0ZXBlTmV4dCBidXR0b257XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zdGVwZU5leHQgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn0gICAgXHJcbi5hY2NwdGNvbmQgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwOGMhaW1wb3J0YW50O1xyXG4gIH0gIFxyXG4gIC5uZXh0LXN0ZXB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgY29sb3I6ICNlZDFjMjQ7XHJcbiAgfSBcclxuICAuYm90dG9tLXJlc3VsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogIzQwNDE0MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcbi5kcm9wZG93bk1lbnVCdXR0b25ze1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweCAxNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gXHJcbi5saXN0LXJlc3VsdC1kYXRhe1xyXG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxufVxyXG4uZm91cm1fZmllbGR7XHJcbiAgICBtaW4taGVpZ2h0OiA4OHB4IWltcG9ydGFudDtcclxuXHJcbn1cclxuLmJ0bnByaW1hcnlzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNlZDFjMjQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAjZWQxYzI0IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDYwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxcmVtIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0gXHJcbi5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNsb3NlLWJ0bi1jcm9zc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDM1cHghaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5IWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAyNXB4IWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnRfcmVzdWx0c3tcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtX3Jpc2t7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOHB4KTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLmNhcmRfdGV4dHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risk-test',
                templateUrl: './risk-test.component.html',
                styleUrls: ['./risk-test.component.css'],
                providers: [{
                        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
                    }]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "uCTQ":
/*!********************************************!*\
  !*** ./src/app/service/context.service.ts ***!
  \********************************************/
/*! exports provided: ContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextService", function() { return ContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContextService {
    constructor() {
        this.proxy = false;
        var data = document.querySelector('#__ClientContext').value; // document.querySelector("#__ClientContext").value;
        var appContext = JSON.parse(data);
        appContext.authToken = document.querySelector('#__RequestVerificationToken').value; //document.querySelector("#__RequestVerificationToken").value;
        this.baseUrl = appContext.baseUrl;
        this.authToken = appContext.authToken;
        this.webSiteRoot = appContext.websiteRoot;
        this.selectedPartyId = appContext.selectedPartyId;
        this.loggedInPartyId = appContext.loggedInPartyId;
    }
}
ContextService.ɵfac = function ContextService_Factory(t) { return new (t || ContextService)(); };
ContextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContextService, factory: ContextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");













































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "z2z+":
/*!*************************************************!*\
  !*** ./src/app/service/content-keys.service.ts ***!
  \*************************************************/
/*! exports provided: ContentKeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentKeysService", function() { return ContentKeysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContentKeysService {
    // Grab our setting keys for this iPart from the DOM
    constructor() {
        this.contentKey = [];
        this.contentItemKey = [];
        var elms = document.querySelectorAll("[id='x-contentItemKey']");
        var ck = (document.querySelectorAll("#x-contentKey"));
        console.log(elms);
        localStorage.setItem("indexCount", String(elms.length));
        for (let i = 0; i < elms.length; i++) {
            this.contentItemKey.push(elms[i].attributes[2].value);
            console.log(ck);
            this.contentKey.push(ck[i].attributes[2].value);
        }
    }
}
ContentKeysService.ɵfac = function ContentKeysService_Factory(t) { return new (t || ContentKeysService)(); };
ContentKeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentKeysService, factory: ContentKeysService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentKeysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
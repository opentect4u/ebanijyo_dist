"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_coupons_coupons_module_ts"],{

/***/ 63233:
/*!************************************************************************!*\
  !*** ./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponDialogComponent": () => (/* binding */ CouponDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 67926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 47752);



















function CouponDialogComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CouponDialogComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CouponDialogComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", type_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](type_r9.name);
} }
function CouponDialogComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const store_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", store_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](store_r10.name);
} }
function CouponDialogComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Minimum Spend is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CouponDialogComponent_mat_chip_86_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("removed", function CouponDialogComponent_mat_chip_86_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const product_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.removeProduct(product_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", product_r11, " ");
} }
function CouponDialogComponent_mat_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", cat_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cat_r14.name);
} }
class CouponDialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.COMMA];
        this.products = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            desc: null,
            discountType: null,
            amount: null,
            expiryDate: null,
            allowFreeShipping: false,
            storeId: null,
            showOnStore: false,
            restriction: this.fb.group({
                minimumSpend: null,
                maximumSpend: null,
                individualUseOnly: false,
                excludeSaleItems: false,
                products: [[]],
                categories: [[]]
            }),
            limit: this.fb.group({
                perCoupon: null,
                perItems: null,
                perUser: null
            })
        });
        if (this.data.coupon) {
            this.form.patchValue(this.data.coupon);
            this.products = this.data.coupon.restriction.products;
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    }
    addProduct(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.products.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.form['controls'].restriction['controls'].products.patchValue(this.products);
    }
    removeProduct(fruit) {
        const index = this.products.indexOf(fruit);
        if (index >= 0) {
            this.products.splice(index, 1);
        }
        this.form['controls'].restriction['controls'].products.patchValue(this.products);
    }
}
CouponDialogComponent.??fac = function CouponDialogComponent_Factory(t) { return new (t || CouponDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
CouponDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CouponDialogComponent, selectors: [["app-coupon-dialog"]], decls: 133, vars: 13, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 1, "user-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], [1, "tab-content-wrapped"], ["label", "General Info"], ["fxLayout", "row wrap", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-md", "25", 1, "px-1"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "title", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "code", "required", ""], ["formControlName", "discountType"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "amount"], ["matInput", "", "formControlName", "expiryDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["expiryDate", ""], ["formControlName", "storeId"], [1, "py-1"], ["formControlName", "allowFreeShipping", "color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "mr-1"], ["color", "primary", "matTooltip", "Check this box if the coupon grants free shipping. The free shipping method must be enabled and be set to require.", 1, "mat-icon-sm"], ["formControlName", "showOnStore", "color", "primary"], ["color", "primary", "matTooltip", "Check this box if you want to show this coupon in store page.", 1, "mat-icon-sm"], ["fxFlex", "100", 1, "px-1"], ["matInput", "", "formControlName", "desc"], ["label", "Restriction", "formGroupName", "restriction"], ["fxFlex", "100", "fxFlex.gt-md", "50", 1, "px-1"], ["matInput", "", "formControlName", "minimumSpend", "required", ""], ["matInput", "", "formControlName", "maximumSpend"], ["productsChipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add products...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["formControlName", "categories", "multiple", ""], ["formControlName", "individualUseOnly", "color", "primary"], ["color", "primary", "matTooltip", "Check this box if the coupon cannot be used in conjunction with other coupons.", 1, "mat-icon-sm"], ["formControlName", "excludeSaleItems", "color", "primary"], ["color", "primary", "matTooltip", "Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are no sale items in the cart.", 1, "mat-icon-sm"], ["label", "Limit", "formGroupName", "limit"], ["fxFlex", "100", "fxFlex.gt-md", "33.3", 1, "px-1"], ["matInput", "", "formControlName", "perCoupon", "type", "number"], ["matInput", "", "formControlName", "perItems", "type", "number"], ["matInput", "", "formControlName", "perUser", "type", "number"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""]], template: function CouponDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CouponDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CouponDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CouponDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Discount Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, CouponDialogComponent_mat_option_26_Template, 3, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Coupon expiry date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "mat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, CouponDialogComponent_mat_option_47_Template, 3, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Allow free shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "live_help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Show on store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "live_help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Minimum Spend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, CouponDialogComponent_mat_error_76_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Maximum Spend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-chip-list", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, CouponDialogComponent_mat_chip_86_Template, 4, 3, "mat-chip", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("matChipInputTokenEnd", function CouponDialogComponent_Template_input_matChipInputTokenEnd_87_listener($event) { return ctx.addProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Product categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](93, CouponDialogComponent_mat_option_93_Template, 3, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "mat-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Individual use only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "live_help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "mat-checkbox", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Exclude sale items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "mat-icon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "live_help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "mat-tab", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Usage limit per coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Limit usage to X items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Usage limit per user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls.code.errors == null ? null : ctx.form.controls.code.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.discountTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.stores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("restriction")["controls"].minimumSpend.errors == null ? null : ctx.form.get("restriction")["controls"].minimumSpend.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matChipInputFor", _r6)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.categories);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipRemove], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vwb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65975:
/*!****************************************************!*\
  !*** ./src/app/admin/coupons/coupons.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponsComponent": () => (/* binding */ CouponsComponent)
/* harmony export */ });
/* harmony import */ var _coupons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupons */ 157);
/* harmony import */ var _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon-dialog/coupon-dialog.component */ 63233);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/pipes/filter-by-id.pipe */ 78583);
















function CouponsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](9, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](14, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function CouponsComponent_div_25_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r4); const coupon_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r3.openCouponDialog(coupon_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](24, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function CouponsComponent_div_25_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r4); const coupon_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r5.remove(coupon_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const coupon_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    let tmp_2_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](coupon_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](coupon_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](9, 7, ctx_r0.discountTypes, coupon_r2.discountType)) == null ? null : tmp_2_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](coupon_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](14, 10, ctx_r0.stores, coupon_r2.storeId)) == null ? null : tmp_4_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](coupon_r2.limit.perCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](19, 13, coupon_r2.expiryDate, "dd MMMM, yyyy"));
} }
function CouponsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "pagination-controls", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("pageChange", function CouponsComponent_div_27_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r6.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class CouponsComponent {
    constructor(appService, dialog, appSettings) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.coupons = [];
        this.stores = [
            { id: 1, name: 'Store 1' },
            { id: 2, name: 'Store 2' }
        ];
        this.discountTypes = [
            { id: 1, name: 'Percentage discount' },
            { id: 2, name: 'Fixed Cart Discount' },
            { id: 3, name: 'Fixed Product Discount' }
        ];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.coupons = _coupons__WEBPACK_IMPORTED_MODULE_0__.coupons;
        this.getCategories();
    }
    getCategories() {
        this.appService.getCategories().subscribe(data => {
            this.categories = data;
            this.categories.shift();
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openCouponDialog(data) {
        const dialogRef = this.dialog.open(_coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CouponDialogComponent, {
            data: {
                coupon: data,
                stores: this.stores,
                categories: this.categories,
                discountTypes: this.discountTypes
            },
            panelClass: ['theme-dialog'],
            autoFocus: false,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(coupon => {
            if (coupon) {
                const index = this.coupons.findIndex(x => x.id == coupon.id);
                if (index !== -1) {
                    this.coupons[index] = coupon;
                }
                else {
                    let last_coupon = this.coupons[this.coupons.length - 1];
                    coupon.id = last_coupon.id + 1;
                    this.coupons.push(coupon);
                }
            }
        });
    }
    remove(coupon) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this coupon?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.coupons.indexOf(coupon);
                if (index !== -1) {
                    this.coupons.splice(index, 1);
                }
            }
        });
    }
}
CouponsComponent.??fac = function CouponsComponent_Factory(t) { return new (t || CouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings)); };
CouponsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: CouponsComponent, selectors: [["app-coupons"]], decls: 28, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "primary-text"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function CouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, "Coupons List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function CouponsComponent_Template_button_click_5_listener() { return ctx.openCouponDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Add Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, "Discount Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "Usage Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](25, CouponsComponent_div_25_Template, 28, 16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](26, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](27, CouponsComponent_div_27_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](26, 2, ctx.coupons, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.coupons.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterByIdPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vwb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6540:
/*!*************************************************!*\
  !*** ./src/app/admin/coupons/coupons.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "CouponsModule": () => (/* binding */ CouponsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _coupons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupons.component */ 65975);
/* harmony import */ var _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-dialog/coupon-dialog.component */ 63233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);









const routes = [
    { path: '', component: _coupons_component__WEBPACK_IMPORTED_MODULE_2__.CouponsComponent, pathMatch: 'full' }
];
class CouponsModule {
}
CouponsModule.??fac = function CouponsModule_Factory(t) { return new (t || CouponsModule)(); };
CouponsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: CouponsModule });
CouponsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](CouponsModule, { declarations: [_coupons_component__WEBPACK_IMPORTED_MODULE_2__.CouponsComponent,
        _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CouponDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule] }); })();


/***/ }),

/***/ 157:
/*!******************************************!*\
  !*** ./src/app/admin/coupons/coupons.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coupons": () => (/* binding */ coupons)
/* harmony export */ });
const coupons = [
    {
        id: 1,
        title: '10% Off',
        code: '#2491',
        desc: 'lorem ipsum',
        discountType: 1,
        amount: 10,
        expiryDate: new Date(2020, 11, 15),
        allowFreeShipping: false,
        storeId: 1,
        showOnStore: false,
        restriction: {
            minimumSpend: 10,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: ["Keyboard", "Headset"],
            categories: [30, 31, 32]
        },
        limit: {
            perCoupon: 1,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 2,
        title: '20% Off',
        code: '#3274',
        desc: 'lorem ipsum',
        discountType: 2,
        amount: 20,
        expiryDate: new Date(2020, 8, 5),
        allowFreeShipping: false,
        storeId: 2,
        showOnStore: false,
        restriction: {
            minimumSpend: 20,
            maximumSpend: 50,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 3,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 3,
        title: '10% Off',
        code: '#5247',
        desc: 'lorem ipsum',
        discountType: 3,
        amount: 10,
        expiryDate: new Date(2021, 11, 25),
        allowFreeShipping: false,
        storeId: 1,
        showOnStore: false,
        restriction: {
            minimumSpend: 10,
            maximumSpend: 50,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 1,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 4,
        title: '10% Off',
        code: '#9585',
        desc: 'lorem ipsum',
        discountType: 2,
        amount: 10,
        expiryDate: new Date(2020, 4, 22),
        allowFreeShipping: false,
        storeId: 1,
        showOnStore: false,
        restriction: {
            minimumSpend: 10,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 2,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 5,
        title: '5% Off',
        code: '#3258',
        desc: 'lorem ipsum',
        discountType: 2,
        amount: 30,
        expiryDate: new Date(2020, 5, 12),
        allowFreeShipping: false,
        storeId: 2,
        showOnStore: false,
        restriction: {
            minimumSpend: 5,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 4,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 6,
        title: '25% Off',
        code: '#7425',
        desc: 'lorem ipsum',
        discountType: 3,
        amount: 25,
        expiryDate: new Date(2020, 3, 29),
        allowFreeShipping: false,
        storeId: 1,
        showOnStore: false,
        restriction: {
            minimumSpend: 25,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 2,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 7,
        title: '15% Off',
        code: '#5688',
        desc: 'lorem ipsum',
        discountType: 1,
        amount: 20,
        expiryDate: new Date(2020, 12, 24),
        allowFreeShipping: false,
        storeId: 2,
        showOnStore: false,
        restriction: {
            minimumSpend: 15,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 6,
            perItems: 1,
            perUser: 1
        }
    },
    {
        id: 8,
        title: '10% Off',
        code: '#5962',
        desc: 'lorem ipsum',
        discountType: 1,
        amount: 30,
        expiryDate: new Date(2020, 8, 12),
        allowFreeShipping: false,
        storeId: 2,
        showOnStore: false,
        restriction: {
            minimumSpend: 10,
            maximumSpend: 30,
            individualUseOnly: true,
            excludeSaleItems: false,
            products: [],
            categories: []
        },
        limit: {
            perCoupon: 3,
            perItems: 1,
            perUser: 1
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_admin_coupons_coupons_module_ts.js.map
"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_pages_brands_brands_module_ts"],{

/***/ 10334:
/*!*******************************************************!*\
  !*** ./src/app/pages/brands/brand/brand.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandComponent": () => (/* binding */ BrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/products-carousel/product-dialog/product-dialog.component */ 48327);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 85082);
/* harmony import */ var _shared_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/category-list/category-list.component */ 77060);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ 35291);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/rating/rating.component */ 23145);
/* harmony import */ var _shared_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/controls/controls.component */ 81924);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/pipes/filter-by-id.pipe */ 78583);



























const _c0 = ["sidenav"];
function BrandComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????styleProp"]("background", color_r13);
} }
function BrandComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const size_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](size_r14);
} }
function BrandComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_button_64_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????reference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} }
function BrandComponent_button_74_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_button_74_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r19); const sort_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](); return ctx_r18.changeSorting(sort_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const sort_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](sort_r17);
} }
function BrandComponent_button_84_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_button_84_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r22); const count_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](); return ctx_r21.changeCount(count_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const count_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](count_r20);
} }
function BrandComponent_div_94_div_1_mat_chip_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-chip", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("", product_r24.discount, "% OFF");
} }
function BrandComponent_div_94_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](2, 1, product_r24.oldPrice, "1.2-2"), "");
} }
const _c1 = function (a1, a2) { return ["/products", a1, a2]; };
function BrandComponent_div_94_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](2, BrandComponent_div_94_div_1_mat_chip_list_2_Template, 3, 1, "mat-chip-list", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](4, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](5, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](7, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](12, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](13, BrandComponent_div_94_div_1_span_13_Template, 3, 4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](14, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](17, "app-rating", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](18, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](20, "app-controls", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("onOpenProductDialog", function BrandComponent_div_94_div_1_Template_app_controls_onOpenProductDialog_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r30); const product_r24 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2); return ctx_r29.openProductDialog(product_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("fxFlex.gt-sm", ctx_r23.viewCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", product_r24.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](19, _c1, product_r24.id, product_r24.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("src", product_r24.images[0].medium, _angular_core__WEBPACK_IMPORTED_MODULE_8__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](7, 13, ctx_r23.appService.Data.categories, product_r24.categoryId)) == null ? null : tmp_4_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](22, _c1, product_r24.id, product_r24.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"](" ", product_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", product_r24.oldPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](16, 16, product_r24.newPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ratingsCount", product_r24.ratingsCount)("ratingsValue", product_r24.ratingsValue)("direction", "column");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("product", product_r24);
} }
const _c2 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
function BrandComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](1, BrandComponent_div_94_div_1_Template, 21, 25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](2, 1, ctx_r10.products, _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](4, _c2, ctx_r10.count, ctx_r10.page)));
} }
function BrandComponent_div_95_div_1_mat_chip_list_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "mat-chip-list", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-chip", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("", product_r32.discount, "% OFF");
} }
function BrandComponent_div_95_div_1_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](2, 1, product_r32.oldPrice, "1.2-2"), "");
} }
function BrandComponent_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](4, BrandComponent_div_95_div_1_mat_chip_list_4_Template, 3, 1, "mat-chip-list", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](5, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](6, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](8, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](10, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](11, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](13, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](17, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](18, BrandComponent_div_95_div_1_span_18_Template, 3, 4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](19, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](22, "app-rating", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](23, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](24, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](25, "app-controls", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("onOpenProductDialog", function BrandComponent_div_95_div_1_Template_app_controls_onOpenProductDialog_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r38); const product_r32 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2); return ctx_r37.openProductDialog(product_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const product_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", product_r32.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](19, _c1, product_r32.id, product_r32.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("src", product_r32.images[0].medium, _angular_core__WEBPACK_IMPORTED_MODULE_8__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](10, 13, ctx_r31.appService.Data.categories, product_r32.categoryId)) == null ? null : tmp_3_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](22, _c1, product_r32.id, product_r32.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"](" ", product_r32.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](product_r32.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", product_r32.oldPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](21, 16, product_r32.newPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ratingsCount", product_r32.ratingsCount)("ratingsValue", product_r32.ratingsValue)("direction", "column");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("product", product_r32);
} }
function BrandComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](1, BrandComponent_div_95_div_1_Template, 26, 25, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pipeBind2"](2, 1, ctx_r11.products, _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction2"](4, _c2, ctx_r11.count, ctx_r11.page)));
} }
function BrandComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](2, "mat-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](3, "pagination-controls", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("pageChange", function BrandComponent_div_96_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](); return ctx_r39.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
} }
const _c3 = function () { return ["/products/electronics"]; };
class BrandComponent {
    constructor(appSettings, activatedRoute, appService, dialog, router, platformId) {
        this.appSettings = appSettings;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.platformId = platformId;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.products = [];
        this.brands = [];
        this.priceFrom = 750;
        this.priceTo = 1599;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#000000"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(params => {
            // console.log(params['name']);
        });
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
        this.getCategories();
        this.getAllProducts();
    }
    getAllProducts() {
        this.appService.getProducts("brand").subscribe(data => {
            this.products = data;
            //for show more product  
            for (var index = 0; index < 3; index++) {
                this.products = this.products.concat(this.products);
            }
        });
    }
    getCategories() {
        if (this.appService.Data.categories.length == 0) {
            this.appService.getCategories().subscribe(data => {
                this.categories = data;
                this.appService.Data.categories = data;
            });
        }
        else {
            this.categories = this.appService.Data.categories;
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }
    changeCount(count) {
        this.count = count;
        this.getAllProducts();
    }
    changeSorting(sort) {
        this.sort = sort;
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ProductDialogComponent, {
            data: product,
            panelClass: 'product-dialog',
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.getAllProducts();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    onChangeCategory(event) {
        if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
        }
    }
}
BrandComponent.??fac = function BrandComponent_Factory(t) { return new (t || BrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID)); };
BrandComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineComponent"]({ type: BrandComponent, selectors: [["app-brand"]], viewQuery: function BrandComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????loadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function BrandComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("resize", function BrandComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["????resolveWindow"]);
    } }, decls: 97, vars: 22, consts: [["perfectScrollbar", "", 1, "filter-sidenav", 3, "opened", "mode"], ["sidenav", ""], ["displayMode", "flat", "multi", "true"], ["expanded", ""], ["perfectScrollbar", "", 1, "categories-wrapper", "categories-dropdown"], [3, "categories", "categoryParentId", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "text-muted"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "filter-price"], ["color", "primary", "max", "2000", "min", "1", "thumb-label", "true", 3, "ngModel", "ngModelChange"], ["color", "warn", "max", "2000", "min", "1", "thumb-label", "true", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "filter-buttons"], ["mat-raised-button", "", 3, "background", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 4, "ngFor", "ngForOf"], ["fxLayout", "column"], ["color", "primary"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], [3, "routerLink"], ["src", "assets/images/products/probook/2-medium.png", "alt", "", 1, "mw-100"], ["ngClass.gt-sm", "p-left", 1, "all-products"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "filter-row", "mat-elevation-z1", "text-muted"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["sortMenuTrigger", "matMenuTrigger"], [1, "mat-icon-sm", "caret"], ["xPosition", "before", "overlapTrigger", "true", 1, "app-dropdown"], ["sortMenu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["countsMenuTrigger", "matMenuTrigger"], ["countsMenu", "matMenu"], ["mat-icon-button", "", 3, "click"], ["fxLayout", "row wrap", "class", "products-wrapper", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["mat-raised-button", ""], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row wrap", 1, "products-wrapper"], ["fxFlex", "100", "fxFlex.sm", "50", "class", "col", 3, "fxFlex.gt-sm", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.sm", "50", 1, "col", 3, "fxFlex.gt-sm"], [1, "product-item", "text-center"], [4, "ngIf"], [1, "image-link", 3, "routerLink"], ["alt", "", 3, "src"], [1, "category", "text-muted"], [1, "title", "text-truncate", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "prices"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "old-price", "text-muted"], [1, "new-price"], [3, "ratingsCount", "ratingsValue", "direction"], [1, "divider"], [1, "icons"], [3, "product", "onOpenProductDialog"], ["color", "warn", "selected", "true"], ["fxFlex", "100", "class", "col", 4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "col"], [1, "product-item"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-xs", "40", 1, "p-2"], ["class", "list-view", 4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-xs", "60", 1, "p-2"], [1, "title", 3, "routerLink"], [1, "py-1", "text-muted", "lh"], [1, "list-view"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function BrandComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](3, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](4, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](8, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](10, "app-category-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("change", function BrandComponent_Template_app_category_list_change_10_listener($event) { return ctx.onChangeCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](11, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](12, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](13, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](18, "From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](22, "To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](26, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("ngModelChange", function BrandComponent_Template_mat_slider_ngModelChange_26_listener($event) { return ctx.priceFrom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](27, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("ngModelChange", function BrandComponent_Template_mat_slider_ngModelChange_27_listener($event) { return ctx.priceTo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](28, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](29, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](30, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](32, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](34, BrandComponent_button_34_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](35, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](36, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](37, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](39, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](41, BrandComponent_button_41_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](42, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](43, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](44, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](46, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](48, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](49, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](50, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](51, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](52, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](53, "Not Specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](54, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](55, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](56, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](58, "Now starting at $1379");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](60, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????element"](61, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](62, "mat-sidenav-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](64, BrandComponent_button_64_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](66, "a", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](69, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](70, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](71, "mat-menu", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](73, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("mouseleave", function BrandComponent_Template_span_mouseleave_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r41); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????reference"](67); return _r4.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](74, BrandComponent_button_74_Template, 3, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](76, "a", 21, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](79, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](80, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](81, "mat-menu", 24, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](83, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("mouseleave", function BrandComponent_Template_span_mouseleave_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r41); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????reference"](77); return _r7.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](84, BrandComponent_button_84_Template, 3, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](85, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_Template_button_click_85_listener() { return ctx.changeViewType("list", 100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](87, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](88, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_Template_button_click_88_listener() { return ctx.changeViewType("grid", 33.3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](90, "view_module");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](91, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function BrandComponent_Template_button_click_91_listener() { return ctx.changeViewType("grid", 25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](93, "view_comfy");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](94, BrandComponent_div_94_Template, 3, 7, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](95, BrandComponent_div_95_Template, 3, 7, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](96, BrandComponent_div_96_Template, 4, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????reference"](72);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????reference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("opened", ctx.sidenavOpen)("mode", ctx.sidenavOpen ? "side" : "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("categories", ctx.categories)("categoryParentId", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", ctx.priceFrom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"]("$", ctx.priceTo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngModel", ctx.priceFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngModel", ctx.priceTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", ctx.sizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["????pureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", !ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"](" ", ctx.sort, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", ctx.sortings);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("matMenuTriggerFor", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"](" Show ", ctx.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngForOf", ctx.counts);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx.viewType == "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx.viewType == "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx.products.length > 0);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenav, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelTitle, _shared_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__.CategoryListComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatAnchor, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCard, _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__.RatingComponent, _shared_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__.ControlsComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChip, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe, _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterByIdPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: [".filter-sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.filter-row[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products[_ngcontent-%COMP%] {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.products-wrapper[_ngcontent-%COMP%] {\n  margin: 8px -8px;\n}\n.products-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.categories-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price[_ngcontent-%COMP%]   .mat-slider-horizontal[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUZJO0VBQ0ksa0JBQUE7QUFJUjtBQUFBO0VBQ0ksZ0JBQUE7QUFHSjtBQUZJO0VBQ0ksWUFBQTtBQUlSO0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUFFUjtBQUdJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJicmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 236:
/*!**************************************************!*\
  !*** ./src/app/pages/brands/brands.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsComponent": () => (/* binding */ BrandsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.service */ 38198);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _theme_pipes_filter_brands_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/pipes/filter-brands.pipe */ 63815);
/* harmony import */ var _theme_pipes_brand_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/pipes/brand-search.pipe */ 79934);











function BrandsComponent_mat_button_toggle_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-button-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const letter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", letter_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", letter_r3, " ");
} }
const _c0 = function (a1) { return ["/brands", a1]; };
function BrandsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, brand_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", brand_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
} }
class BrandsComponent {
    constructor(appService) {
        this.appService = appService;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
        this.brands = [];
    }
    ngOnInit() {
        this.brands = this.appService.getBrands();
        // this.brands.sort((a, b)=>{
        //   if(a.name < b.name) return -1;
        //   if(a.name > b.name) return 1;
        //   return 0;
        // });
    }
}
BrandsComponent.??fac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
BrandsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], decls: 16, vars: 9, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch"], [1, "py-1", "text-center"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-sm", "50", 1, "w-100", "brand-search"], ["matInput", "", "placeholder", "Search For Brands...", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", "value", "all", 1, "letters", "mt-2"], ["group", "matButtonToggleGroup"], ["value", "all", 1, "letter"], ["class", "letter", 3, "value", 4, "ngFor", "ngForOf"], [1, "brands-container"], ["class", "brand-block text-center", 4, "ngFor", "ngForOf"], [1, "letter", 3, "value"], [1, "brand-block", "text-center"], [1, "brand", "mat-elevation-z3", 3, "routerLink"], [3, "src"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "We've Got The Brands You're Looking For");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function BrandsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-button-toggle-group", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, " Show All Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, BrandsComponent_mat_button_toggle_11_Template, 2, 2, "mat-button-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, BrandsComponent_div_13_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](14, "filterBrands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](15, "brandSearchPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.letters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](14, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](15, 6, ctx.brands, ctx.searchText), _r0.value));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], pipes: [_theme_pipes_filter_brands_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterBrandsPipe, _theme_pipes_brand_search_pipe__WEBPACK_IMPORTED_MODULE_2__.BrandSearchPipe], styles: [".letters[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  white-space: unset !important;\n  background: #fff;\n}\n\n.letter[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.brand-search.mat-form-field[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.brands-container[_ngcontent-%COMP%] {\n  column-count: 1;\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  margin-top: 30px;\n}\n\n.brands-container[_ngcontent-%COMP%]   .brand-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.brands-container[_ngcontent-%COMP%]   .brand-block[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 16px;\n  display: inline-block;\n  margin: 8px 0;\n}\n\n.brands-container[_ngcontent-%COMP%]   .brand-block[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n@media only screen and (min-width: 320px) {\n  .brands-container[_ngcontent-%COMP%] {\n    column-count: 2;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .brands-container[_ngcontent-%COMP%] {\n    column-count: 3;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .brands-container[_ngcontent-%COMP%] {\n    column-count: 4;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .brands-container[_ngcontent-%COMP%] {\n    column-count: 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBRFE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFHWjs7QUFGWTtFQUNJLGVBQUE7QUFJaEI7O0FBRUE7RUFDSTtJQUdJLGVBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFHSSxlQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJO0lBR0ksZUFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSTtJQUdJLGVBQUE7RUFITjtBQUNGIiwiZmlsZSI6ImJyYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXR0ZXJze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxldHRlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJhbmQtc2VhcmNoLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgY29sdW1uLWdhcDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAuYnJhbmQtYmxvY2t7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLmJyYW5ke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIC5icmFuZHMtY29udGFpbmVyIHtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcclxuICAgICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDU7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDU7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 92486:
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "BrandsModule": () => (/* binding */ BrandsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ 69684);
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brands.component */ 236);
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand/brand.component */ 10334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);










const routes = [
    { path: '', component: _brands_component__WEBPACK_IMPORTED_MODULE_3__.BrandsComponent, pathMatch: 'full' },
    { path: ':name', component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_4__.BrandComponent }
];
class BrandsModule {
}
BrandsModule.??fac = function BrandsModule_Factory(t) { return new (t || BrandsModule)(); };
BrandsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: BrandsModule });
BrandsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](BrandsModule, { declarations: [_brands_component__WEBPACK_IMPORTED_MODULE_3__.BrandsComponent,
        _brand_brand_component__WEBPACK_IMPORTED_MODULE_4__.BrandComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_brands_brands_module_ts.js.map
"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_reviews_reviews_module_ts"],{

/***/ 64550:
/*!****************************************************!*\
  !*** ./src/app/admin/reviews/reviews.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsComponent": () => (/* binding */ ReviewsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/rating/rating.component */ 23145);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/pipes/filter-by-id.pipe */ 78583);













function ReviewsComponent_div_22_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ReviewsComponent_div_22_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6); const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r4.unApprove(review_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ReviewsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](3, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "app-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](15, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](21, ReviewsComponent_div_22_button_21_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ReviewsComponent_div_22_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r8); const review_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r7.remove(review_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_1_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("color", review_r2.statusId == 1 ? "primary" : "warn")("matTooltip", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](3, 13, ctx_r0.statuses, review_r2.statusId)) == null ? null : tmp_1_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](review_r2.statusId == 1 ? "check_circle" : "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("src", review_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](review_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](review_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ratingsCount", review_r2 == null ? null : review_r2.ratingsCount)("ratingsValue", review_r2 == null ? null : review_r2.ratingsValue)("showText", false)("direction", "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](15, 16, ctx_r0.stores, review_r2.storeId)) == null ? null : tmp_10_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](18, 19, review_r2.date, "dd MMMM, yyyy 'at' HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", review_r2.statusId == 1);
} }
function ReviewsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "pagination-controls", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("pageChange", function ReviewsComponent_div_24_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r9.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ReviewsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.reviews = [
            { id: 1, statusId: 1, image: 'assets/images/profile/michael.jpg', author: 'Michael Blair', comment: 'lorem ipsum', ratingsCount: 4, ratingsValue: 350, storeId: 1, date: new Date(2020, 1, 15, 14, 30) },
            { id: 2, statusId: 2, image: 'assets/images/profile/tereza.jpg', author: 'Tereza Stiles', comment: 'lorem ipsum', ratingsCount: 3, ratingsValue: 290, storeId: 2, date: new Date(2020, 2, 5, 22, 20) },
            { id: 3, statusId: 2, image: 'assets/images/profile/adam.jpg', author: 'Adam Sandler', comment: 'lorem ipsum', ratingsCount: 5, ratingsValue: 450, storeId: 1, date: new Date(2020, 3, 29, 13, 15) },
            { id: 4, statusId: 1, image: 'assets/images/profile/julia.jpg', author: 'Julia Aniston', comment: 'lorem ipsum', ratingsCount: 4, ratingsValue: 350, storeId: 2, date: new Date(2020, 4, 12, 11, 50) },
            { id: 5, statusId: 2, image: 'assets/images/profile/bruno.jpg', author: 'Bruno Vespa', comment: 'lorem ipsum', ratingsCount: 3, ratingsValue: 300, storeId: 2, date: new Date(2020, 5, 5, 16, 25) },
            { id: 6, statusId: 1, image: 'assets/images/profile/ashley.jpg', author: 'Ashley Ahlberg', comment: 'lorem ipsum', ratingsCount: 5, ratingsValue: 300, storeId: 1, date: new Date(2020, 6, 18, 12, 30) },
            { id: 7, statusId: 1, image: 'assets/images/avatars/avatar-5.png', author: 'Michelle Ormond', comment: 'lorem ipsum', ratingsCount: 4, ratingsValue: 300, storeId: 1, date: new Date(2020, 6, 28, 17, 23) }
        ];
        this.statuses = [
            { id: 1, name: 'Approved' },
            { id: 2, name: 'Pending' }
        ];
        this.stores = [
            { id: 1, name: 'Store 1' },
            { id: 2, name: 'Store 2' }
        ];
        this.count = 6;
    }
    ngOnInit() {
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    unApprove(review) {
        const index = this.reviews.findIndex(x => x.id == review.id);
        if (index !== -1) {
            review.statusId = 2;
            this.reviews[index] = review;
        }
    }
    remove(review) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this review?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.reviews.indexOf(review);
                if (index !== -1) {
                    this.reviews.splice(index, 1);
                }
            }
        });
    }
}
ReviewsComponent.??fac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
ReviewsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], decls: 25, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell", "status"], [1, "mat-header-cell", "image"], [1, "mat-header-cell"], [1, "mat-header-cell", "ratings"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell", "status"], [3, "color", "matTooltip"], [1, "mat-cell", "image"], ["alt", "", "width", "50", 3, "src"], [1, "mat-cell"], [1, "mat-cell", "ratings"], [3, "ratingsCount", "ratingsValue", "showText", "direction"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "UnApprove", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "UnApprove", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "Store Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, ReviewsComponent_div_22_Template, 25, 22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](23, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](24, ReviewsComponent_div_24_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](23, 2, ctx.reviews, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.reviews.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe, _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterByIdPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 89552:
/*!*************************************************!*\
  !*** ./src/app/admin/reviews/reviews.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ReviewsModule": () => (/* binding */ ReviewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _reviews_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.component */ 64550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    { path: '', component: _reviews_component__WEBPACK_IMPORTED_MODULE_2__.ReviewsComponent, pathMatch: 'full' }
];
class ReviewsModule {
}
ReviewsModule.??fac = function ReviewsModule_Factory(t) { return new (t || ReviewsModule)(); };
ReviewsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ReviewsModule });
ReviewsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ReviewsModule, { declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_2__.ReviewsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_reviews_reviews_module_ts.js.map
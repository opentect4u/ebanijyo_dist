"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_analytics_analytics_module_ts"],{

/***/ 53035:
/*!********************************************************!*\
  !*** ./src/app/admin/analytics/analytics.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-summary/sales-summary.component */ 66232);
/* harmony import */ var _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./montly-sales/montly-sales.component */ 62911);
/* harmony import */ var _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-views-stats/daily-views-stats.component */ 17176);
/* harmony import */ var _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./most-viewed-products/most-viewed-products.component */ 62535);
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions/transactions.component */ 71712);
/* harmony import */ var _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refunds/refunds.component */ 54158);








class AnalyticsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 13, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "60", 1, "p-1"], ["fxFlex", "100", "fxFlex.gt-sm", "40", 1, "p-1"], ["fxFlex", "100", 1, "p-1"], ["fxFlex", "100", "fxFlex.gt-sm", "50", 1, "p-1"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sales-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-montly-sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-daily-views-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-most-viewed-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-refunds");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_0__.SalesSummaryComponent, _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_1__.MontlySalesComponent, _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_2__.DailyViewsStatsComponent, _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_3__.MostViewedProductsComponent, _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__.TransactionsComponent, _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_5__.RefundsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 48459:
/*!***************************************************!*\
  !*** ./src/app/admin/analytics/analytics.data.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sales_summary": () => (/* binding */ sales_summary),
/* harmony export */   "daily_views_stats": () => (/* binding */ daily_views_stats),
/* harmony export */   "montly_sales": () => (/* binding */ montly_sales),
/* harmony export */   "most_viewed_products": () => (/* binding */ most_viewed_products),
/* harmony export */   "transactions": () => (/* binding */ transactions),
/* harmony export */   "refunds": () => (/* binding */ refunds)
/* harmony export */ });
const sales_summary = [
    {
        name: 'Germany',
        series: [
            {
                name: '2017',
                value: 71632
            },
            {
                name: '2010',
                value: 40632
            },
            {
                name: '2000',
                value: 76953
            },
            {
                name: '1990',
                value: 31476
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2017',
                value: 82632
            },
            {
                name: '2010',
                value: 49737
            },
            {
                name: '2000',
                value: 55986
            },
            {
                name: '1990',
                value: 37060
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2017',
                value: 51732
            },
            {
                name: '2010',
                value: 36745
            },
            {
                name: '2000',
                value: 34774
            },
            {
                name: '1990',
                value: 29476
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2017',
                value: 95652
            },
            {
                name: '2010',
                value: 36240
            },
            {
                name: '2000',
                value: 32543
            },
            {
                name: '1990',
                value: 26424
            }
        ]
    }
];
const daily_views_stats = [
    {
        name: 'Store 1',
        series: [
            {
                name: 'Day 1',
                value: 71632
            },
            {
                name: 'Day 2',
                value: 50632
            },
            {
                name: 'Day 3',
                value: 66953
            },
            {
                name: 'Day 4',
                value: 31476
            },
            {
                name: 'Day 5',
                value: 31632
            },
            {
                name: 'Day 6',
                value: 40632
            },
            {
                name: 'Day 7',
                value: 56953
            },
            {
                name: 'Day 8',
                value: 31476
            },
            {
                name: 'Day 9',
                value: 71632
            },
            {
                name: 'Day 10',
                value: 40632
            },
            {
                name: 'Day 11',
                value: 16953
            },
            {
                name: 'Day 12',
                value: 31476
            },
            {
                name: 'Day 13',
                value: 41632
            },
            {
                name: 'Day 14',
                value: 40632
            },
            {
                name: 'Day 15',
                value: 76953
            }
        ]
    },
    {
        name: 'Store 2',
        series: [
            {
                name: 'Day 1',
                value: 61632
            },
            {
                name: 'Day 2',
                value: 40632
            },
            {
                name: 'Day 3',
                value: 86953
            },
            {
                name: 'Day 4',
                value: 51476
            },
            {
                name: 'Day 5',
                value: 41632
            },
            {
                name: 'Day 6',
                value: 50632
            },
            {
                name: 'Day 7',
                value: 36953
            },
            {
                name: 'Day 8',
                value: 21476
            },
            {
                name: 'Day 9',
                value: 61632
            },
            {
                name: 'Day 10',
                value: 40632
            },
            {
                name: 'Day 11',
                value: 26953
            },
            {
                name: 'Day 12',
                value: 35476
            },
            {
                name: 'Day 13',
                value: 46632
            },
            {
                name: 'Day 14',
                value: 40632
            },
            {
                name: 'Day 15',
                value: 76953
            }
        ]
    },
];
const montly_sales = [
    {
        "name": "Offline Stores",
        "value": 178
    },
    {
        "name": "Digital Stores",
        "value": 340
    },
    {
        "name": "Others",
        "value": 280
    }
];
const most_viewed_products = [
    {
        "name": "Product 1",
        "value": 178
    },
    {
        "name": "Product 2",
        "value": 340
    },
    {
        "name": "Product 3",
        "value": 280
    },
    {
        "name": "Product 4",
        "value": 310
    },
    {
        "name": "Product 5",
        "value": 385
    },
    {
        "name": "Product 6",
        "value": 240
    }
];
const transactions = [
    {
        name: 'Store 1',
        value: 40632
    },
    {
        name: 'Store 2',
        value: 49737
    },
    {
        name: 'Store 3',
        value: 36745
    },
    {
        name: 'Store 4',
        value: 36240
    },
    {
        name: 'Store 5',
        value: 33000
    },
    {
        name: 'Store 6',
        value: 35800
    }
];
const refunds = [
    {
        name: 'Store 1',
        value: 31632
    },
    {
        name: 'Store 2',
        value: 42737
    },
    {
        name: 'Store 3',
        value: 33745
    },
    {
        name: 'Store 4',
        value: 29240
    },
    {
        name: 'Store 5',
        value: 28250
    },
    {
        name: 'Store 6',
        value: 31800
    }
];


/***/ }),

/***/ 46237:
/*!*****************************************************!*\
  !*** ./src/app/admin/analytics/analytics.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AnalyticsModule": () => (/* binding */ AnalyticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.component */ 53035);
/* harmony import */ var _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./montly-sales/montly-sales.component */ 62911);
/* harmony import */ var _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-summary/sales-summary.component */ 66232);
/* harmony import */ var _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily-views-stats/daily-views-stats.component */ 17176);
/* harmony import */ var _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./most-viewed-products/most-viewed-products.component */ 62535);
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions/transactions.component */ 71712);
/* harmony import */ var _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refunds/refunds.component */ 54158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);













const routes = [
    { path: '', component: _analytics_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsComponent, pathMatch: 'full' }
];
class AnalyticsModule {
}
AnalyticsModule.ɵfac = function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); };
AnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsComponent,
        _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_2__.MontlySalesComponent,
        _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_3__.SalesSummaryComponent,
        _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_4__.DailyViewsStatsComponent,
        _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_5__.MostViewedProductsComponent,
        _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__.TransactionsComponent,
        _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_7__.RefundsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule] }); })();


/***/ }),

/***/ 17176:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyViewsStatsComponent": () => (/* binding */ DailyViewsStatsComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





class DailyViewsStatsComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Days';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Views';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        Object.assign(this, { daily_views_stats: _analytics_data__WEBPACK_IMPORTED_MODULE_0__.daily_views_stats });
    }
    onSelect(event) {
        console.log(event);
    }
}
DailyViewsStatsComponent.ɵfac = function DailyViewsStatsComponent_Factory(t) { return new (t || DailyViewsStatsComponent)(); };
DailyViewsStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DailyViewsStatsComponent, selectors: [["app-daily-views-stats"]], decls: 7, vars: 11, consts: [["fxLayoutAlign", "center center"], [1, "w-100", "h-400p"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "select"]], template: function DailyViewsStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Daily Views Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-charts-line-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DailyViewsStatsComponent_Template_ngx_charts_line_chart_select_6_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.daily_views_stats)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.LineChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYWlseS12aWV3cy1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 62911:
/*!************************************************************************!*\
  !*** ./src/app/admin/analytics/montly-sales/montly-sales.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MontlySalesComponent": () => (/* binding */ MontlySalesComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





const _c0 = ["resizedDiv"];
class MontlySalesComponent {
    constructor() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.data = _analytics_data__WEBPACK_IMPORTED_MODULE_0__.montly_sales;
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [..._analytics_data__WEBPACK_IMPORTED_MODULE_0__.montly_sales]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
}
MontlySalesComponent.ɵfac = function MontlySalesComponent_Factory(t) { return new (t || MontlySalesComponent)(); };
MontlySalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MontlySalesComponent, selectors: [["app-montly-sales"]], viewQuery: function MontlySalesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.resizedDiv = _t.first);
    } }, decls: 9, vars: 7, consts: [["fxLayoutAlign", "center"], [1, "w-100", "h-300p"], ["resizedDiv", ""], [3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "gradient", "select"]], template: function MontlySalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Montly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-charts-pie-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function MontlySalesComponent_Template_ngx_charts_pie_chart_select_8_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.data)("legend", ctx.showLegend)("explodeSlices", ctx.explodeSlices)("labels", ctx.showLabels)("doughnut", ctx.doughnut)("gradient", ctx.gradient);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PieChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250bHktc2FsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 62535:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostViewedProductsComponent": () => (/* binding */ MostViewedProductsComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





const _c0 = ["resizedDiv"];
class MostViewedProductsComponent {
    constructor() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#42A5F5', '#7E57C2', '#AFB42B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.data = _analytics_data__WEBPACK_IMPORTED_MODULE_0__.most_viewed_products;
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [..._analytics_data__WEBPACK_IMPORTED_MODULE_0__.most_viewed_products]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
}
MostViewedProductsComponent.ɵfac = function MostViewedProductsComponent_Factory(t) { return new (t || MostViewedProductsComponent)(); };
MostViewedProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MostViewedProductsComponent, selectors: [["app-most-viewed-products"]], viewQuery: function MostViewedProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.resizedDiv = _t.first);
    } }, decls: 9, vars: 7, consts: [["fxLayoutAlign", "center"], [1, "w-100", "h-300p"], ["resizedDiv", ""], [3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "gradient", "select"]], template: function MostViewedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Most Viewed Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-charts-pie-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function MostViewedProductsComponent_Template_ngx_charts_pie_chart_select_8_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.data)("legend", ctx.showLegend)("explodeSlices", ctx.explodeSlices)("labels", ctx.showLabels)("doughnut", ctx.doughnut)("gradient", ctx.gradient);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PieChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LXZpZXdlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54158:
/*!**************************************************************!*\
  !*** ./src/app/admin/analytics/refunds/refunds.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundsComponent": () => (/* binding */ RefundsComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





class RefundsComponent {
    constructor() {
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        Object.assign(this, { refunds: _analytics_data__WEBPACK_IMPORTED_MODULE_0__.refunds });
    }
    onSelect(event) {
        console.log(event);
    }
}
RefundsComponent.ɵfac = function RefundsComponent_Factory(t) { return new (t || RefundsComponent)(); };
RefundsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RefundsComponent, selectors: [["app-refunds"]], decls: 7, vars: 2, consts: [["fxLayoutAlign", "center center"], [1, "w-100", "h-300p"], [3, "scheme", "results", "select"]], template: function RefundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Refunds by Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-charts-pie-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function RefundsComponent_Template_ngx_charts_pie_grid_select_6_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.refunds);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PieGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 66232:
/*!**************************************************************************!*\
  !*** ./src/app/admin/analytics/sales-summary/sales-summary.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesSummaryComponent": () => (/* binding */ SalesSummaryComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





class SalesSummaryComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sales';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        Object.assign(this, { sales_summary: _analytics_data__WEBPACK_IMPORTED_MODULE_0__.sales_summary });
    }
    ngOnInit() {
    }
    onSelect(event) {
        console.log(event);
    }
}
SalesSummaryComponent.ɵfac = function SalesSummaryComponent_Factory(t) { return new (t || SalesSummaryComponent)(); };
SalesSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SalesSummaryComponent, selectors: [["app-sales-summary"]], decls: 7, vars: 10, consts: [["fxLayoutAlign", "center center"], [1, "w-100", "h-300p"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"]], template: function SalesSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sales Summary (Top Regions)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-charts-bar-vertical-2d", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function SalesSummaryComponent_Template_ngx_charts_bar_vertical_2d_select_6_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.sales_summary)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.BarVertical2DComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 71712:
/*!************************************************************************!*\
  !*** ./src/app/admin/analytics/transactions/transactions.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsComponent": () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.data */ 48459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 56018);





class TransactionsComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Store';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Transactions';
        this.colorScheme = {
            domain: ['#3F51B5', '#E91E63', '#43A047', '#FDD835', '#F4511E', '#606060']
        };
        Object.assign(this, { transactions: _analytics_data__WEBPACK_IMPORTED_MODULE_0__.transactions });
    }
    onSelect(event) {
        console.log(event);
    }
}
TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) { return new (t || TransactionsComponent)(); };
TransactionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransactionsComponent, selectors: [["app-transactions"]], decls: 7, vars: 10, consts: [["fxLayoutAlign", "center center"], [1, "w-100", "h-300p"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"]], template: function TransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-charts-bar-horizontal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function TransactionsComponent_Template_ngx_charts_bar_horizontal_select_6_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.transactions)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.yAxisLabel)("yAxisLabel", ctx.xAxisLabel);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.BarHorizontalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_analytics_analytics_module_ts.js.map
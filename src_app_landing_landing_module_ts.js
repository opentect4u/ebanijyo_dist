"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 35325:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);










class LandingComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.settings.rtl = false;
    }
    getDemo(number) {
        if (number == 1) {
            this.settings.theme = 'green';
            this.settings.rtl = false;
            this.router.navigate(['/']);
        }
        if (number == 2) {
            this.settings.theme = 'green';
            this.settings.rtl = true;
            this.router.navigate(['/']);
        }
        if (number == 3) {
            this.settings.theme = 'blue';
            this.settings.rtl = false;
            this.router.navigate(['/admin']);
        }
        if (number == 4) {
            this.settings.theme = 'blue';
            this.settings.rtl = true;
            this.router.navigate(['/admin']);
        }
    }
    getSkin(num) {
        if (num == 1) {
            this.settings.theme = 'blue';
        }
        if (num == 2) {
            this.settings.theme = 'green';
        }
        if (num == 3) {
            this.settings.theme = 'red';
        }
        if (num == 4) {
            this.settings.theme = 'pink';
        }
        if (num == 5) {
            this.settings.theme = 'purple';
        }
        if (num == 6) {
            this.settings.theme = 'grey';
        }
        this.settings.rtl = false;
        this.router.navigate(['/']);
    }
    scrollToDemos() {
        var elmnt = document.getElementById("demos");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
    goToTop() {
        var elmnt = document.getElementById("top");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
}
LandingComponent.??fac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LandingComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 88, vars: 16, consts: [[1, "landing-page"], ["id", "top", 1, "p-3", "header-section"], [1, "theme-container"], ["fxLayout", "row wrap", 1, "content"], ["fxFlex", "100", 1, "mb-5", "py-3"], ["routerLink", "/admin", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo"], ["fxFlex", "100", 1, "py-5"], [1, "mt-3"], [1, "py-5"], ["mat-raised-button", "", "color", "primary", 1, "uppercase", "mx-2", 3, "click"], ["mat-raised-button", "", "color", "warn", "href", "https://themeforest.net/item/emporium-angular-material-design-ecommerce-template/21668189", "target", "_blank", 1, "uppercase", "mx-2"], [1, "p-3"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", "id", "demos"], ["fxFlex", "100", 1, "text-center", "py-4"], [1, "fw-500"], ["fxFlex", "100", 1, "main-wrapper"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "50", 1, "box"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "click"], ["mat-raised-button", "", "color", "warn", "type", "submit", 1, "uppercase", 3, "click"], ["fxFlex", "100", 1, "text-center", "mt-3"], ["fxFlex", "100", "fxFlex.gt-sm", "33.3", "fxFlex.sm", "50", 1, "box"], ["fxFlex", "100", 1, "py-4", "px-3", "text-right"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "copyright"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "w-100"], ["ngClass.xs", "mt-1"], ["mat-button", "", "href", "http://themeseason.com/", "target", "_blank"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Emporium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Angular Material Design eCommerce Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Emporium implements the official Angular Material Design components and built with Angular CLI.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Emporium template, 6 color styles, 20+ pages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_16_listener() { return ctx.scrollToDemos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "View demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Purchase now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Check out our demo styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "eCommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_34_listener() { return ctx.getDemo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "View demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_36_listener() { return ctx.getDemo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_42_listener() { return ctx.getDemo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "View demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_44_listener() { return ctx.getDemo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Skins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Choose one of your favorite color style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Pink");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Grey");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LandingComponent_Template_button_click_76_listener() { return ctx.goToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "keyboard_arrow_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "mat-toolbar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Copyright \u00A9 2019 All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Designed & Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "ThemeSeason");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/homepage.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/admin.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/blue.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/green.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/red.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/pink.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/purple.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", "url(assets/images/demos/grey.jpg)");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective], styles: [".landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('bg.jpg');\n}\n.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.81);\n}\n.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 9;\n  color: #fff;\n  text-align: center;\n}\n.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 400;\n}\n.landing-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 850px;\n  margin: 0 auto;\n}\n.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%] {\n  margin: -16px;\n}\n.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  font-weight: 500;\n}\n.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  background-size: cover;\n  height: 300px;\n  background-position: top;\n  transition: 5s;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.landing-page[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .mat-card[_ngcontent-%COMP%] {\n  background-position: bottom;\n}\n.landing-page[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.landing-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.landing-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  height: 64px;\n}\n.landing-page[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRWhCO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx5SEFBQTtBQUVoQjtBQUdnQjtFQUNJLDJCQUFBO0FBRHBCO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFPSTtFQUNJLGVBQUE7QUFMUjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBTFI7QUFNUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKWiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZXsgIFxyXG4gICAgLmhlYWRlci1zZWN0aW9ueyBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL2JnLmpwZycpOyAgICAgICBcclxuICAgICAgICAmOmJlZm9yZXsgICAgICAgIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuODEpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAtMTZweDtcclxuICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7ICBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgICAgICAgICBcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtY2FyZHsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA1czsgXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 73707:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 35325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent, pathMatch: 'full' }
];
class LandingModule {
}
LandingModule.??fac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: LandingModule });
LandingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map
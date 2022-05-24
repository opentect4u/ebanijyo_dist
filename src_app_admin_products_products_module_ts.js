"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_products_products_module_ts"],{

/***/ 55350:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-image-zoom/__ivy_ngcc__/fesm2015/ngx-image-zoom.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxImageZoomComponent": () => (/* binding */ NgxImageZoomComponent),
/* harmony export */   "NgxImageZoomModule": () => (/* binding */ NgxImageZoomModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);







const _c0 = ["zoomContainer"];
const _c1 = ["imageThumbnail"];
const _c2 = ["fullSizeImage"];
const _c3 = function (a1) { return { "ngxImageZoomFullContainer": true, "ngxImageZoomLensEnabled": a1 }; };
var NgxImageZoomComponent_1;
let NgxImageZoomComponent = NgxImageZoomComponent_1 = class NgxImageZoomComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.zoomScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.zoomPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.enableLens = false;
        this.lensBorderRadius = 0;
        this.lensWidth = 100;
        this.lensHeight = 100;
        this.zoomMode = 'hover';
        this.magnification = 1;
        this.enableScrollZoom = false;
        this.scrollStepSize = 0.1;
        this.circularLens = false;
        this.maxZoomRatio = 2;
        this.zoomingEnabled = false;
        this.zoomFrozen = false;
        this.isReady = false;
        this.thumbImageLoaded = false;
        this.fullImageLoaded = false;
        this.eventListeners = [];
    }
    set setThumbImage(thumbImage) {
        this.thumbImageLoaded = false;
        this.isReady = false;
        this.thumbImage = thumbImage;
    }
    set setFullImage(fullImage) {
        this.fullImageLoaded = false;
        this.isReady = false;
        this.fullImage = fullImage;
    }
    set setZoomMode(zoomMode) {
        if (NgxImageZoomComponent_1.validZoomModes.some(m => m === zoomMode)) {
            this.zoomMode = zoomMode;
        }
    }
    set setMagnification(magnification) {
        this.magnification = Number(magnification) || this.magnification;
        this.zoomScroll.emit(this.magnification);
    }
    set setMinZoomRatio(minZoomRatio) {
        const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
        this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
    }
    set setMaxZoomRatio(maxZoomRatio) {
        this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
    }
    set setScrollStepSize(stepSize) {
        this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
    }
    set setEnableLens(enable) {
        this.enableLens = Boolean(enable);
    }
    set setLensWidth(width) {
        this.lensWidth = Number(width) || this.lensWidth;
    }
    set setLensHeight(height) {
        this.lensHeight = Number(height) || this.lensHeight;
    }
    set setCircularLens(enable) {
        this.circularLens = Boolean(enable);
    }
    set setEnableScrollZoom(enable) {
        this.enableScrollZoom = Boolean(enable);
    }
    ngOnInit() {
        this.setUpEventListeners();
    }
    ngOnChanges() {
        if (this.enableLens) {
            if (this.circularLens) {
                this.lensBorderRadius = this.lensWidth / 2;
            }
            else {
                this.lensBorderRadius = 0;
            }
        }
        this.calculateRatioAndOffset();
        this.calculateImageAndLensPosition();
    }
    ngOnDestroy() {
        this.eventListeners.forEach((destroyFn) => destroyFn());
    }
    /**
     * Template helper methods
     */
    onThumbImageLoaded() {
        this.thumbImageLoaded = true;
        this.checkImagesLoaded();
    }
    onFullImageLoaded() {
        this.fullImageLoaded = true;
        this.checkImagesLoaded();
    }
    setUpEventListeners() {
        if (this.zoomMode === 'hover') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverMouseMove(event)));
        }
        else if (this.zoomMode === 'toggle') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.toggleClick(event)));
        }
        else if (this.zoomMode === 'click') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.clickStarter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.clickMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.clickMouseMove(event)));
        }
        else if (this.zoomMode === 'hover-freeze') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverFreezeMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverFreezeMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverFreezeMouseMove(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.hoverFreezeClick(event)));
        }
        if (this.enableScrollZoom) {
            // Chrome: 'mousewheel', Firefox: 'DOMMouseScroll', IE: 'onmousewheel'
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousewheel', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'DOMMouseScroll', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'onmousewheel', (event) => this.onMouseWheel(event)));
        }
        if (this.enableLens && this.circularLens) {
            this.lensBorderRadius = this.lensWidth / 2;
        }
    }
    checkImagesLoaded() {
        this.calculateRatioAndOffset();
        if (this.thumbImageLoaded && this.fullImageLoaded) {
            this.calculateImageAndLensPosition();
            this.isReady = true;
        }
    }
    /**
     * Zoom position setters
     */
    setZoomPosition(left, top) {
        this.latestMouseLeft = Number(left) || this.latestMouseLeft;
        this.latestMouseTop = Number(top) || this.latestMouseTop;
        const c = {
            x: this.latestMouseLeft,
            y: this.latestMouseTop
        };
        this.zoomPosition.emit(c);
    }
    /**
     * Mouse wheel event
     */
    onMouseWheel(event) {
        // Don't eat events if zooming isn't active
        if (!this.zoomingEnabled || this.zoomFrozen) {
            return;
        }
        event = window.event || event; // old IE
        const direction = Math.max(Math.min((event.wheelDelta || -event.detail), 1), -1);
        if (direction > 0) {
            // up
            this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
        }
        else {
            // down
            this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
        }
        this.calculateRatio();
        this.calculateZoomPosition(event);
        // Prevent scrolling on page.
        event.returnValue = false; // IE
        if (event.preventDefault) {
            event.preventDefault(); // Chrome & FF
        }
    }
    /**
     * Hover mode
     */
    hoverMouseEnter(event) {
        this.zoomOn(event);
    }
    hoverMouseLeave() {
        this.zoomOff();
    }
    hoverMouseMove(event) {
        this.calculateZoomPosition(event);
    }
    /**
     * Toggle mode
     */
    toggleClick(event) {
        if (this.zoomingEnabled) {
            this.zoomOff();
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Click mode
     */
    clickStarter(event) {
        if (this.zoomingEnabled === false) {
            this.zoomOn(event);
        }
    }
    clickMouseLeave() {
        this.zoomOff();
    }
    clickMouseMove(event) {
        if (this.zoomingEnabled) {
            this.calculateZoomPosition(event);
        }
    }
    /**
     * Hover freeze mode
     */
    hoverFreezeMouseEnter(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOn(event);
        }
    }
    hoverFreezeMouseLeave() {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOff();
        }
    }
    hoverFreezeMouseMove(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.calculateZoomPosition(event);
        }
    }
    hoverFreezeClick(event) {
        if (this.zoomingEnabled && this.zoomFrozen) {
            this.zoomFrozen = false;
            this.zoomOff();
        }
        else if (this.zoomingEnabled) {
            this.zoomFrozen = true;
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Private helper methods
     */
    zoomOn(event) {
        if (this.isReady) {
            this.zoomingEnabled = true;
            this.calculateRatioAndOffset();
            this.display = 'block';
            this.calculateZoomPosition(event);
        }
    }
    zoomOff() {
        this.zoomingEnabled = false;
        this.display = 'none';
    }
    calculateZoomPosition(event) {
        const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
        const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
        this.setZoomPosition(newLeft, newTop);
        this.calculateImageAndLensPosition();
    }
    calculateImageAndLensPosition() {
        let lensLeftMod = 0;
        let lensTopMod = 0;
        if (this.enableLens) {
            lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
            lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
        }
        this.fullImageLeft = (this.latestMouseLeft * -this.xRatio) - lensLeftMod;
        this.fullImageTop = (this.latestMouseTop * -this.yRatio) - lensTopMod;
    }
    calculateRatioAndOffset() {
        this.thumbWidth = this.imageThumbnail.nativeElement.width;
        this.thumbHeight = this.imageThumbnail.nativeElement.height;
        // If lens is disabled, set lens size to equal thumb size and position it on top of the thumb
        if (!this.enableLens) {
            this.lensWidth = this.thumbWidth;
            this.lensHeight = this.thumbHeight;
            this.lensLeft = 0;
            this.lensTop = 0;
        }
        // getBoundingClientRect() ? https://stackoverflow.com/a/44008873
        this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
        this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
        if (this.fullImage === undefined) {
            this.fullImage = this.thumbImage;
        }
        if (this.fullImageLoaded) {
            this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
            this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
            this.baseRatio = Math.max((this.thumbWidth / this.fullWidth), (this.thumbHeight / this.fullHeight));
            // Don't allow zooming to smaller than thumbnail size
            this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
            this.calculateRatio();
        }
    }
    calculateRatio() {
        this.magnifiedWidth = (this.fullWidth * this.magnification);
        this.magnifiedHeight = (this.fullHeight * this.magnification);
        this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
        this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
    }
};
NgxImageZoomComponent.ɵfac = function NgxImageZoomComponent_Factory(t) { return new (t || NgxImageZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NgxImageZoomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxImageZoomComponent, selectors: [["lib-ngx-image-zoom"]], viewQuery: function NgxImageZoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.zoomContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageThumbnail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullSizeImage = _t.first);
    } }, inputs: { setThumbImage: ["thumbImage", "setThumbImage"], setFullImage: ["fullImage", "setFullImage"], setZoomMode: ["zoomMode", "setZoomMode"], setMagnification: ["magnification", "setMagnification"], setMinZoomRatio: ["minZoomRatio", "setMinZoomRatio"], setMaxZoomRatio: ["maxZoomRatio", "setMaxZoomRatio"], setScrollStepSize: ["scrollStepSize", "setScrollStepSize"], setEnableLens: ["enableLens", "setEnableLens"], setLensWidth: ["lensWidth", "setLensWidth"], setLensHeight: ["lensHeight", "setLensHeight"], setCircularLens: ["circularLens", "setCircularLens"], setEnableScrollZoom: ["enableScrollZoom", "setEnableScrollZoom"] }, outputs: { zoomScroll: "zoomScroll", zoomPosition: "zoomPosition" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 31, consts: [[1, "ngxImageZoomContainer"], ["zoomContainer", ""], [1, "ngxImageZoomThumbnail", 3, "src", "load"], ["imageThumbnail", ""], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "src", "load"], ["fullSizeImage", ""]], template: function NgxImageZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_2_listener() { return ctx.onThumbImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_5_listener() { return ctx.onFullImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, ctx.enableLens));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fullImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"] });
NgxImageZoomComponent.validZoomModes = ['hover', 'toggle', 'click', 'hover-freeze'];
NgxImageZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('zoomContainer', { static: true })
], NgxImageZoomComponent.prototype, "zoomContainer", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('imageThumbnail', { static: true })
], NgxImageZoomComponent.prototype, "imageThumbnail", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('fullSizeImage', { static: true })
], NgxImageZoomComponent.prototype, "fullSizeImage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], NgxImageZoomComponent.prototype, "zoomScroll", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], NgxImageZoomComponent.prototype, "zoomPosition", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('thumbImage')
], NgxImageZoomComponent.prototype, "setThumbImage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('fullImage')
], NgxImageZoomComponent.prototype, "setFullImage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('zoomMode')
], NgxImageZoomComponent.prototype, "setZoomMode", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('magnification')
], NgxImageZoomComponent.prototype, "setMagnification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('minZoomRatio')
], NgxImageZoomComponent.prototype, "setMinZoomRatio", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('maxZoomRatio')
], NgxImageZoomComponent.prototype, "setMaxZoomRatio", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('scrollStepSize')
], NgxImageZoomComponent.prototype, "setScrollStepSize", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('enableLens')
], NgxImageZoomComponent.prototype, "setEnableLens", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('lensWidth')
], NgxImageZoomComponent.prototype, "setLensWidth", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('lensHeight')
], NgxImageZoomComponent.prototype, "setLensHeight", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('circularLens')
], NgxImageZoomComponent.prototype, "setCircularLens", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('enableScrollZoom')
], NgxImageZoomComponent.prototype, "setEnableScrollZoom", null);

let NgxImageZoomModule = class NgxImageZoomModule {
};
NgxImageZoomModule.ɵfac = function NgxImageZoomModule_Factory(t) { return new (t || NgxImageZoomModule)(); };
NgxImageZoomModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxImageZoomModule });
NgxImageZoomModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxImageZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'lib-ngx-image-zoom',
                template: "<div #zoomContainer class=\"ngxImageZoomContainer\"\n     [style.width.px]=\"this.thumbWidth\" [style.height.px]=\"this.thumbHeight\">\n\n  <img #imageThumbnail class=\"ngxImageZoomThumbnail\" [src]=\"thumbImage\" (load)=\"onThumbImageLoaded()\"/>\n\n  <div [ngClass]=\"{'ngxImageZoomFullContainer': true, 'ngxImageZoomLensEnabled': this.enableLens}\"\n       [style.display]=\"this.display\"\n       [style.top.px]=\"this.lensTop\"\n       [style.left.px]=\"this.lensLeft\"\n       [style.width.px]=\"this.lensWidth\"\n       [style.height.px]=\"this.lensHeight\"\n       [style.border-radius.px]=\"this.lensBorderRadius\"\n  >\n    <img #fullSizeImage class=\"ngxImageZoomFull\" [src]=\"fullImage\"\n         (load)=\"onFullImageLoaded()\"\n         [style.display]=\"this.display\"\n         [style.top.px]=\"this.fullImageTop\"\n         [style.left.px]=\"this.fullImageLeft\"\n         [style.width.px]=\"this.magnifiedWidth\"\n         [style.height.px]=\"this.magnifiedHeight\"\n    />\n  </div>\n</div>\n",
                styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { zoomScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], zoomPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], setThumbImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['thumbImage']
        }], setFullImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['fullImage']
        }], setZoomMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['zoomMode']
        }], setMagnification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['magnification']
        }], setMinZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['minZoomRatio']
        }], setMaxZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['maxZoomRatio']
        }], setScrollStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['scrollStepSize']
        }], setEnableLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['enableLens']
        }], setLensWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['lensWidth']
        }], setLensHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['lensHeight']
        }], setCircularLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['circularLens']
        }], setEnableScrollZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['enableScrollZoom']
        }], zoomContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['zoomContainer', { static: true }]
        }], imageThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['imageThumbnail', { static: true }]
        }], fullSizeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['fullSizeImage', { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxImageZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    NgxImageZoomComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
                ],
                exports: [
                    NgxImageZoomComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxImageZoomModule, { declarations: function () { return [NgxImageZoomComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [NgxImageZoomComponent]; } }); })();

/*
 * Public API Surface of ngx-image-zoom
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 87214:
/*!*********************************************************************!*\
  !*** ./src/app/admin/products/add-product/add-product.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_globalVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/globalVar */ 55366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ 21792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 58852);




















function AddProductComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Basic Info.");
} }
function AddProductComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cat_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r17.name, " ");
} }
function AddProductComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcat_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", subcat_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subcat_r18.name, " ");
} }
function AddProductComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r19.type_name, " ");
} }
function AddProductComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", mat_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mat_r20.name, " ");
} }
function AddProductComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", color_r21.color_name, " ");
} }
function AddProductComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", u_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", u_r22.value, " ");
} }
function AddProductComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Pricing");
} }
function AddProductComponent_div_126_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_div_126_div_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.delete_img(i_r23.id, i_r23.img_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "img_", i_r23.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r24.url + "/" + i_r23.img_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddProductComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddProductComponent_div_126_div_1_Template, 6, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.id);
} }
function AddProductComponent_button_130_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_button_130_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return _r0.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AddProductComponent {
    constructor(http, router, _snackBar, dataServe, _formBuilder, appService, formBuilder, activatedRoute) {
        this.http = http;
        this.router = router;
        this._snackBar = _snackBar;
        this.dataServe = dataServe;
        this._formBuilder = _formBuilder;
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#696969"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
        this.adminCategories = [];
        this.user = "admin@gmail.com";
        this.isLinear = true;
        this.adminSubs = [];
        this.adminTypes = [];
        this.adminMaterials = [];
        this.adminColors = [];
        this.getProductData = [];
        this.getProductData_copy = [];
        this.images = [];
        this.url = src_app_globalVar__WEBPACK_IMPORTED_MODULE_0__.globalData.apiUrl;
        this.units = [
            { id: 'cm', value: 'cm' },
            { id: 'm', value: 'm' },
            { id: 'inch', value: 'inch' }
        ];
    }
    ngOnInit() {
        this.infoFormGroup = this._formBuilder.group({
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cat_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            subcat_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            hsn_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.descFormGroup = this._formBuilder.group({
            p_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            materials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            colors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            itemWeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            itemHeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            itemWidth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            // itemdepth: ['', Validators.required],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            // vendor: ['', Validators.required],
            history: [''],
            desc: ['']
        });
        this.imgFormGroup = this._formBuilder.group({
            images: ['']
        });
        this.priceFormGroup = this._formBuilder.group({
            cp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            sp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            dis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            op: [''],
            sgst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cgst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.form = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)])],
            'images': null,
            "oldPrice": null,
            "newPrice": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            "discount": null,
            "description": null,
            "availibilityCount": null,
            "color": null,
            "size": null,
            "weight": null,
            "categoryId": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.getCategories();
        this.getMaterials();
        this.getColors();
        this.getTypes();
        this.sub = this.activatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.isLinear = this.id ? false : true;
                this.getProductsById(this.id);
                // this.getProductById();
            }
        });
    }
    getProductsById(p_id) {
        this.dataServe.adminGetAllProductsById(p_id).subscribe(data => {
            console.log(data);
            this.getProductData = data;
            this.getProductData_copy = data;
            this.getProductData = this.getProductData.msg[0];
            this.getProductData_copy = this.id > 0 ? this.getProductData_copy.msg[1] : null;
            this.getCat = this.getProductData.cat_id;
            this.getSub = this.getProductData.sub_cat_id;
            this.prodName = this.getProductData.prod_name;
            this.getProdType = this.getProductData.prod_type_id;
            this.getProdCol = this.getProductData.prod_color_id;
            this.getProdMat = this.getProductData.prod_material_id;
            this.getWeight = this.getProductData.prod_weight;
            this.getHeight = this.getProductData.prod_height;
            this.getWidth = this.getProductData.prod_width;
            this.getDepth = this.getProductData.prod_depth;
            this.getU = this.getProductData.dimention_unit;
            this.getHistory = this.getProductData.prod_history;
            // this.getVendor = this.getProductData.prod_vendor;
            this.getDesc = this.getProductData.prod_desc;
            console.log(this.getHistory + " " + this.getDesc + " " + this.getVendor);
            this.getCp = this.getProductData.prod_cp;
            this.getSp = this.getProductData.prod_sp;
            this.getOp = this.getProductData.offer_price;
            this.getDis = this.getProductData.discount;
            this.getCGST = this.getProductData.cgst;
            this.getSGST = this.getProductData.sgst;
            this.getHSN = this.getProductData.hsn_code;
            this.getImageData = this.getProductData_copy ? this.getProductData_copy.img : [];
            this.getSubs(this.getProductData.cat_id);
            this.getCol(this.getProdCol);
            this.getMat(this.getProdMat);
            this.getUnit(this.getU);
            this.getType(this.getProdType);
            console.log(this.adminSubs);
            this.infoFormGroup.patchValue({
                "itemName": this.prodName,
                "cat_id": this.getCat,
                "subcat_id": this.getSub,
                "hsn_code": this.getHSN
            });
            this.descFormGroup.patchValue({
                "p_type": this.getProdType,
                "materials": this.getProdMat,
                "colors": this.getProdCol,
                "itemWeight": this.getWeight,
                "itemHeight": this.getHeight,
                "itemWidth": this.getWidth,
                // "itemDepth":  this.getDepth,
                "unit": this.getU,
                // "vendor":this.getVendor,
                "history": this.getHistory,
                "desc": this.getDesc
            });
            this.priceFormGroup.patchValue({
                "cp": this.getCp,
                "sp": this.getSp,
                "dis": this.getDis,
                "op": this.getOp,
                "sgst": this.getSGST,
                "cgst": this.getCGST,
            });
        });
    }
    getColors() {
        this.dataServe.adminGetColors().subscribe(data => {
            this.adminColors = data;
            this.adminColors = this.adminColors.msg;
            console.log(this.adminColors);
        });
    }
    getMaterials() {
        this.dataServe.adminGetMaterials().subscribe(data => {
            this.adminMaterials = data;
            this.adminMaterials = this.adminMaterials.msg;
            console.log(this.adminMaterials);
        });
    }
    getCategories() {
        this.dataServe.adminGetCategories().subscribe(data => {
            this.adminCategories = data;
            this.adminCategories = this.adminCategories.msg;
        });
    }
    getTypes() {
        //for fetching admin categories
        this.dataServe.adminGetProducts().subscribe(data => {
            this.adminTypes = data;
            this.adminTypes = this.adminTypes.msg;
            console.log(this.adminTypes);
        });
    }
    // public getProductById() {
    //   this.appService.getProductById(this.id).subscribe((data: any) => {
    //     this.form.patchValue(data);
    //     this.selectedColors = data.color;
    //     const images: any[] = [];
    //     data.images.forEach(item => {
    //       let image = {
    //         link: item.medium,
    //         preview: item.medium
    //       }
    //       images.push(image);
    //     })
    //     this.form.controls.images.setValue(images);
    //   });
    // }
    onSubmit() {
        console.log(this.form.value);
    }
    onColorSelectionChange(event) {
        if (event.value) {
            this.selectedColors = event.value.join();
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getSubs(v) {
        this.catval = v;
        this.infoFormGroup.value.cat_id = this.catval;
        this.dataServe.adminGetSubcategoriesbyCat_id(v).subscribe(data => {
            this.adminSubs = data;
            this.adminSubs = this.adminSubs.msg;
            console.log(this.adminSubs);
        });
    }
    getSubCat(v) {
        this.subcatval = v;
        this.infoFormGroup.value.subcat_id = this.subcatval;
    }
    getType(v) {
        this.ptype = v;
        this.descFormGroup.value.p_type = this.ptype;
    }
    getMat(v) {
        this.material = v;
        this.descFormGroup.value.materials = this.material;
    }
    getCol(v) {
        this.color = v;
        this.descFormGroup.value.colors = v;
    }
    getUnit(v) {
        this.unitval = v;
        this.descFormGroup.value.unit = v;
    }
    submitInfo() {
        console.log({ "itemName": this.infoFormGroup.get('itemName').value, 'cat_id': this.infoFormGroup.get('cat_id').value, 'subcat_id': this.infoFormGroup.get('subcat_id').value });
    }
    submitDesc() {
        console.log(this.descFormGroup.value);
    }
    submitPrice() {
        console.log(this.priceFormGroup.value);
    }
    submitImage() {
        console.log(this.imgFormGroup.value);
    }
    submitData() {
        console.log(this.infoFormGroup.value);
        console.log(this.descFormGroup.value);
        console.log(this.priceFormGroup.value);
        console.log(this.imgFormGroup.value);
        var info_dt = {
            id: this.id ? this.id : 0,
            cat_id: this.infoFormGroup.value.cat_id,
            sub_cat_id: this.infoFormGroup.value.subcat_id,
            prod_name: this.infoFormGroup.value.itemName,
            offer_price: this.infoFormGroup.value.op,
            hsn_code: this.infoFormGroup.value.hsn_code,
            user: this.user
        };
        if (this.id) {
            this.dataServe.adminPostInfo(info_dt).subscribe(data => {
                console.log(data);
                this.submitInfoData = data;
                if (this.submitInfoData.suc == 1) {
                    var desc_dt = {
                        id: this.id ? this.id : 0,
                        item_id: this.submitInfoData.item_id,
                        prod_type_id: this.descFormGroup.value.p_type,
                        prod_color_id: this.descFormGroup.value.colors,
                        prod_material_id: this.descFormGroup.value.materials,
                        prod_height: this.descFormGroup.value.itemHeight,
                        prod_width: this.descFormGroup.value.itemWidth,
                        // prod_depth: this.descFormGroup.value.itemDepth,
                        dimention_unit: this.descFormGroup.value.unit,
                        prod_weight: this.descFormGroup.value.itemWeight,
                        // prod_vendor: this.descFormGroup.value.vendor,
                        prod_history: this.descFormGroup.value.history,
                        prod_desc: this.descFormGroup.value.desc,
                        user: this.user
                    };
                    var price_dt = {
                        id: this.id ? this.id : 0,
                        item_id: this.submitInfoData.item_id,
                        prod_cp: this.priceFormGroup.value.cp,
                        prod_sp: this.priceFormGroup.value.sp,
                        discount: this.priceFormGroup.value.dis,
                        offer_price: this.priceFormGroup.value.op,
                        // offer_price: this.offer_price,
                        sgst: this.priceFormGroup.value.sgst,
                        cgst: this.priceFormGroup.value.cgst,
                        user: this.user
                    };
                    this.dataServe.adminPostDesc(desc_dt).subscribe(data => {
                        console.log(data);
                    });
                    this.dataServe.adminPostPrice(price_dt).subscribe(data => {
                        console.log(data);
                        this.submitConfirmData = data;
                        // if (this.submitConfirmData.suc == 1) {
                        //   // this.stepperVal = document.getElementById('resetStep');
                        //   // this.stepperVal.click();
                        //   this.openSnackBar(this.submitConfirmData.msg, 'Redirecting...');
                        // }
                    });
                    var imgDt = {
                        prod_name: this.infoFormGroup.value.itemName,
                        img: this.imgFormGroup.value
                    };
                    for (let i = 0; i < this.imgFormGroup.value.images.length; i++) {
                        this.images[i] = this.imgFormGroup.value.images[i].file;
                    }
                    this.dataServe.adminPostImages(imgDt.prod_name, this.images, this.id, this.user).subscribe(data => {
                        console.log(data);
                        this.submitImgData = data;
                        if (this.submitImgData.suc == 1) {
                            // this.stepperVal = document.getElementById('resetStep');
                            // this.stepperVal.click();
                            this.openSnackBar(this.submitImgData.msg, 'Redirecting...');
                        }
                    });
                }
            });
        }
        else {
            this.dataServe.adminPostInfo(info_dt).subscribe(data => {
                console.log(data);
                this.submitInfoData = data;
                this.infoItemId = this.submitInfoData.item_id;
                var desc_dt = {
                    id: this.id ? this.id : 0,
                    item_id: this.infoItemId,
                    prod_type_id: this.descFormGroup.value.p_type,
                    prod_color_id: this.descFormGroup.value.colors,
                    prod_material_id: this.descFormGroup.value.materials,
                    prod_height: this.descFormGroup.value.itemHeight,
                    prod_width: this.descFormGroup.value.itemWidth,
                    // prod_depth: this.descFormGroup.value.itemDepth,
                    dimention_unit: this.descFormGroup.value.unit,
                    prod_weight: this.descFormGroup.value.itemWeight,
                    // prod_vendor: this.descFormGroup.value.vendor,
                    prod_history: this.descFormGroup.value.history,
                    prod_desc: this.descFormGroup.value.desc,
                    user: this.user
                };
                var price_dt = {
                    id: this.id ? this.id : 0,
                    item_id: this.infoItemId,
                    prod_cp: this.priceFormGroup.value.cp,
                    prod_sp: this.priceFormGroup.value.sp,
                    discount: this.priceFormGroup.value.dis,
                    // offer_price:this.priceFormGroup.value.op,
                    offer_price: this.offer_price,
                    sgst: this.priceFormGroup.value.sgst,
                    cgst: this.priceFormGroup.value.cgst,
                    user: this.user
                };
                var imgDt = {
                    prod_name: this.infoFormGroup.value.itemName,
                    img: this.imgFormGroup.value
                };
                for (let i = 0; i < this.imgFormGroup.value.images.length; i++) {
                    this.images[i] = this.imgFormGroup.value.images[i].file;
                }
                this.dataServe.adminPostDesc(desc_dt).subscribe(data => {
                    console.log(data);
                });
                this.dataServe.adminPostPrice(price_dt).subscribe(data => {
                    console.log(data);
                    this.submitConfirmData = data;
                });
                this.dataServe.adminPostImages(imgDt.prod_name, this.images, this.infoItemId, this.user).subscribe(data => {
                    console.log(data);
                    this.submitImgData = data;
                    if (this.submitImgData.suc == 1) {
                        // this.stepperVal = document.getElementById('resetStep');
                        // this.stepperVal.click();
                        this.openSnackBar(this.submitImgData.msg, 'Redirecting...');
                    }
                });
            });
        }
    }
    calc_dis(e) {
        this.sell_price = document.getElementById('sell_price');
        this.discount_val = e.target.value;
        this.offer_price = Number(this.sell_price.value) - Number(this.sell_price.value * (this.discount_val / 100));
        this.priceFormGroup.value.op = this.offer_price;
        console.log(this.offer_price);
        this.priceFormGroup.patchValue({ "op": this.offer_price }); // this.offer_price=Number(this.offer_price)
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
        setTimeout(() => {
            this._snackBar.dismiss();
            this.router.navigate(['/admin/products/product-list']);
        }, 2500);
    }
    show() {
        alert('eii');
    }
    delete_img(id, path) {
        console.log(id);
        console.log(path);
        this.dataServe.adminDelPrevImg(id, path).subscribe(data => {
            console.log(data);
            this.delImgData = data;
            if (this.delImgData.suc == 1) {
                this.hideImgId = document.getElementById('img_' + id);
                this.hideImgId.remove();
            }
        });
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
AddProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 131, vars: 30, consts: [[1, "p-1"], ["id", "stepper", 3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill", 1, "shift_field"], ["formControlName", "cat_id", 3, "selectionChange"], ["catVal", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subcat_id", 3, "selectionChange"], ["subVal", ""], ["matInput", "", "formControlName", "itemName", "required", ""], ["matInput", "", "formControlName", "hsn_code", "required", "", 3, "value"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "click"], ["label", "Description", 3, "stepControl"], ["formControlName", "p_type", 3, "selectionChange"], ["typeVal", ""], ["formControlName", "materials", 3, "selectionChange"], ["matVal", ""], ["formControlName", "colors", 3, "selectionChange"], ["colVal", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "itemWeight", "required", "", 3, "value"], ["appearance", "fill", 1, "field_measure", 2, "width", "8%"], ["matInput", "", "formControlName", "itemHeight", "required", "", 3, "value"], ["appearance", "fill", 2, "width", "8%"], ["matInput", "", "formControlName", "itemWidth", "required", "", 3, "value"], ["appearance", "fill", 1, "shift_field", 2, "width", "8%"], ["formControlName", "unit", 3, "selectionChange"], ["uVal", ""], ["appearance", "fill", 2, "width", "98%"], ["matInput", "", "formControlName", "history", 3, "value"], ["matInput", "", "formControlName", "desc", 3, "value"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", "", 1, "shift_field"], ["matInput", "", "formControlName", "cp", "required", "", 3, "value"], ["id", "sell_price", "matInput", "", "formControlName", "sp", "required", "", 3, "value"], ["id", "discount_per", "matInput", "", "formControlName", "dis", "required", "", 3, "value", "change"], ["readonly", "", "matInput", "", "formControlName", "op", 3, "value"], ["matInput", "", "formControlName", "sgst", "required", "", 3, "value"], ["matInput", "", "formControlName", "cgst", "required", "", 3, "value"], ["label", "Images", 3, "stepControl"], ["fxFlex", "40", 1, "px-2"], [1, "mt-1"], [1, "uppercase", "fw-500"], [1, "text-muted", "px-1"], ["formControlName", "images", "fileLimit", "6", "fileAccept", "image/*"], [4, "ngFor", "ngForOf"], [1, "px-2"], ["mat-raised-button", "", "id", "resetStep", "color", "warn", 3, "click", 4, "ngIf"], [3, "value"], [1, "row"], [1, "col-8"], [1, "col-4"], ["class", "container", 3, "id", 4, "ngIf"], [1, "container", 3, "id"], ["height", "100", "width", "100", "clas", "image", "alt", "", 3, "src"], [1, "overlay"], ["title", "User Profile", 1, "icon", 2, "cursor", "pointer", 3, "click"], ["mat-raised-button", "", "id", "resetStep", "color", "warn", 3, "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddProductComponent_ng_template_10_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15); return ctx.getSubs(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddProductComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Sub-Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); return ctx.getSubCat(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AddProductComponent_mat_option_22_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "HSN Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_32_listener() { return ctx.submitInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-step", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40); return ctx.getType(_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, AddProductComponent_mat_option_41_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46); return ctx.getMat(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, AddProductComponent_mat_option_47_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](52); return ctx.getCol(_r10.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AddProductComponent_mat_option_53_Template, 5, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-select", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](72); return ctx.getUnit(_r12.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, AddProductComponent_mat_option_73_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-form-field", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "History/About Artisan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-form-field", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Short Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_85_listener() { return ctx.submitDesc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, AddProductComponent_ng_template_89_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Cost Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Selling Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Discount (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_101_listener($event) { return ctx.calc_dis($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Offer Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "SGST (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "CGST (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_115_listener() { return ctx.submitPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "mat-step", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "(max 6 images)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "input-file", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](126, AddProductComponent_div_126_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_128_listener() { return ctx.submitData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](130, AddProductComponent_button_130_Template, 2, 0, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.id ? "Edit" : "Add New", " Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.infoFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.infoFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.adminCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.adminSubs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getHSN);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.descFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.descFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.adminTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.adminMaterials);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.adminColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.priceFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.priceFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getCp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getSp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.offer_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getSGST);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.getCGST);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.imgFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.imgFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getImageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.id);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperPrevious, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, ngx_input_file__WEBPACK_IMPORTED_MODULE_16__.InputFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.shift_field[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.color_div[_ngcontent-%COMP%] {\n  margin-top: -20%;\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  border: 1px solid gray;\n}\n\n.field_measure[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\nmat-form-field.mat-form-field.ng-tns-c148-22.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 67% !important;\n}\n\nmat-form-field.mat-form-field.ng-tns-c148-22.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  width: 67% !important;\n}\n\nmat-form-field.mat-form-field.ng-tns-c148-22.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-has-label.ng-pristine.ng-invalid.ng-star-inserted.mat-form-field-invalid.ng-touched.mat-form-field-hide-placeholder[_ngcontent-%COMP%] {\n  width: 67% !important;\n}\n\nmat-form-field.mat-form-field.ng-tns-c148-23.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-valid.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\nmat-form-field.mat-form-field.ng-tns-c148-24.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-valid.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\nsnack-bar-container.mat-snack-bar-container.ng-tns-c263-34.ng-trigger.ng-trigger-state.mat-snack-bar-center.ng-star-inserted[_ngcontent-%COMP%] {\n  background-color: #1976d2 !important;\n}\n\n#resetStep[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.3s ease;\n  background-color: rgba(160, 156, 156, 0.5);\n}\n\n.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 55px;\n  font-weight: lighter;\n  position: absolute;\n  top: 7%;\n  left: 85%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtBQUlKOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSxxQkFBQTtBQUtGOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtBQU1GOztBQUhBO0VBQ0Usb0NBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFRRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUUYiLCJmaWxlIjoiYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuLnNoaWZ0X2ZpZWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4uY29sb3JfZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogLTIwJTtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmZpZWxkX21lYXN1cmV7XHJcbiAgICB3aWR0aDoyMCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubmctdG5zLWMxNDgtMjIubWF0LXByaW1hcnkubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1oYXMtbGFiZWwubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlci5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctaW52YWxpZC5uZy1zdGFyLWluc2VydGVkIHtcclxuICB3aWR0aDogNjclICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm5nLXRucy1jMTQ4LTIyLm1hdC1wcmltYXJ5Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LWlucHV0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtaGFzLWxhYmVsLm1hdC1mb3JtLWZpZWxkLWhpZGUtcGxhY2Vob2xkZXIubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLWludmFsaWQubmctc3Rhci1pbnNlcnRlZCA6Zm9jdXN7XHJcbiAgd2lkdGg6IDY3JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5uZy10bnMtYzE0OC0yMi5tYXQtcHJpbWFyeS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1pbnB1dC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLWhhcy1sYWJlbC5uZy1wcmlzdGluZS5uZy1pbnZhbGlkLm5nLXN0YXItaW5zZXJ0ZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZC5uZy10b3VjaGVkLm1hdC1mb3JtLWZpZWxkLWhpZGUtcGxhY2Vob2xkZXIge1xyXG4gIHdpZHRoOiA2NyUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubmctdG5zLWMxNDgtMjMubWF0LXByaW1hcnkubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1oYXMtbGFiZWwubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlci5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQubmctc3Rhci1pbnNlcnRlZHtcclxuICB3aWR0aDo5OCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubmctdG5zLWMxNDgtMjQubWF0LXByaW1hcnkubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1oYXMtbGFiZWwubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlci5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQubmctc3Rhci1pbnNlcnRlZHtcclxuICB3aWR0aDo5OCU7XHJcblxyXG59XHJcbnNuYWNrLWJhci1jb250YWluZXIubWF0LXNuYWNrLWJhci1jb250YWluZXIubmctdG5zLWMyNjMtMzQubmctdHJpZ2dlci5uZy10cmlnZ2VyLXN0YXRlLm1hdC1zbmFjay1iYXItY2VudGVyLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuI3Jlc2V0U3RlcHtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE1NiwgMTU2LDAuNSk7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDclO1xyXG4gIGxlZnQ6IDg1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 81591:
/*!*******************************************************************!*\
  !*** ./src/app/admin/products/categories/categories.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-dialog/category-dialog.component */ 15917);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 9560);















function CategoriesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const cat_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.openCategoryDialog(cat_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const cat_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.remove(cat_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cat_r2.name);
} }
function CategoriesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function CategoriesComponent_div_17_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class CategoriesComponent {
    constructor(appService, dialog, appSettings, dataServe) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.dataServe = dataServe;
        this.categories = [];
        this.adminCategories = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        //for fetching admin categories
        this.dataServe.adminGetCategories().subscribe(data => {
            this.adminCategories = data;
            this.adminCategories = this.adminCategories.msg;
            console.log(this.adminCategories);
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openCategoryDialog(data) {
        console.log(data);
        const dialogRef = this.dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDialogComponent, {
            data: {
                category: data,
                categories: this.adminCategories
            },
            panelClass: ['theme-dialog'],
            autoFocus: true,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(category => {
            if (category) {
                const index = this.adminCategories.findIndex(x => x.id == category.id);
                if (index !== -1) {
                    this.adminCategories[index] = category;
                }
                else {
                    let last_category = this.adminCategories[this.adminCategories.length - 1];
                    category.id = last_category.id + 1;
                    this.adminCategories.push(category);
                }
            }
        });
    }
    remove(category) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this category?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.adminCategories.indexOf(category);
                if (index !== -1) {
                    this.dataServe.adminDeleteCategories(category).subscribe(data => {
                        console.log(data);
                    });
                    this.adminCategories.splice(index, 1);
                }
            }
        });
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 18, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Category List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_5_listener() { return ctx.openCategoryDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CategoriesComponent_div_15_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CategoriesComponent_div_17_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 2, ctx.adminCategories, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.adminCategories.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 15917:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/products/categories/category-dialog/category-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDialogComponent": () => (/* binding */ CategoryDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);











function CategoryDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoryDialogComponent {
    constructor(dialogRef, data, fb, dataServe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.dataServe = dataServe;
        this.user = "admin@gmail.com";
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            user: this.user
        });
        if (this.data.category) {
            this.form.patchValue(this.data.category);
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
            this.dataServe.adminPostCategories(this.form.value).subscribe(data => {
                console.log(data);
            });
        }
    }
}
CategoryDialogComponent.ɵfac = function CategoryDialogComponent_Factory(t) { return new (t || CategoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
CategoryDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryDialogComponent, selectors: [["app-category-dialog"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "name", "autofocus", "", "required", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function CategoryDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoryDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CategoryDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 43161:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/products/material/material-dialog/material-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialDialogComponent": () => (/* binding */ MaterialDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);











function MaterialDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MaterialDialogComponent {
    constructor(dialogRef, data, fb, dataServe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.dataServe = dataServe;
        this.user = "admin@gmail.com";
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            user: this.user
        });
        if (this.data.material) {
            this.form.patchValue(this.data.material);
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
            this.dataServe.adminPostMaterials(this.form.value).subscribe(data => {
                console.log(data);
            });
        }
    }
}
MaterialDialogComponent.ɵfac = function MaterialDialogComponent_Factory(t) { return new (t || MaterialDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
MaterialDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaterialDialogComponent, selectors: [["app-material-dialog"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "name", "autofocus", "", "required", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function MaterialDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MaterialDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MaterialDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 10640:
/*!***************************************************************!*\
  !*** ./src/app/admin/products/material/material.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialComponent": () => (/* binding */ MaterialComponent)
/* harmony export */ });
/* harmony import */ var _material_dialog_material_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-dialog/material-dialog.component */ 43161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 9560);
// import { CategoryDialogComponent } from './category-dialog/category-dialog.component';














function MaterialComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_div_15_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const mat_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.openMatDialog(mat_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_div_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const mat_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.remove(mat_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mat_r2.name);
} }
function MaterialComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function MaterialComponent_div_17_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class MaterialComponent {
    constructor(appService, dialog, appSettings, dataServe) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.dataServe = dataServe;
        this.categories = [];
        this.adminMaterials = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getMaterials();
    }
    getMaterials() {
        //template
        // this.appService.getCategories().subscribe(data => {
        //   this.categories = data; 
        //   this.categories.shift();
        // }); 
        //for fetching admin categories
        this.dataServe.adminGetMaterials().subscribe(data => {
            this.adminMaterials = data;
            this.adminMaterials = this.adminMaterials.msg;
            console.log(this.adminMaterials);
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openMatDialog(data) {
        const dialogRef = this.dialog.open(_material_dialog_material_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MaterialDialogComponent, {
            data: {
                material: data,
                materials: this.adminMaterials
            },
            panelClass: ['theme-dialog'],
            autoFocus: true,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(material => {
            if (material) {
                const index = this.adminMaterials.findIndex(x => x.id == material.id);
                if (index !== -1) {
                    this.adminMaterials[index] = material;
                }
                else {
                    let last_material = this.adminMaterials[this.adminMaterials.length - 1];
                    material.id = last_material.id + 1;
                    this.adminMaterials.push(material);
                }
            }
        });
    }
    remove(material) {
        const dialogRef = this.dialog.open(_material_dialog_material_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MaterialDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this material?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.adminMaterials.indexOf(material);
                if (index !== -1) {
                    this.dataServe.adminDeleteMaterials(material).subscribe(data => {
                        console.log(data);
                    });
                    this.adminMaterials.splice(index, 1);
                }
            }
        });
    }
}
MaterialComponent.ɵfac = function MaterialComponent_Factory(t) { return new (t || MaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
MaterialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MaterialComponent, selectors: [["app-material"]], decls: 18, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function MaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Material List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_Template_button_click_5_listener() { return ctx.openMatDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Add Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MaterialComponent_div_15_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MaterialComponent_div_17_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 2, ctx.adminMaterials, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.adminMaterials.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 36169:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/products/product-color/color-dialog/color-dialog.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorDialogComponent": () => (/* binding */ ColorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);











function ColorDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ColorDialogComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ColorDialogComponent {
    constructor(dialogRef, data, fb, dataServe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.dataServe = dataServe;
        this.user = "admin@gmail.com";
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            color_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            color_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            user: this.user
        });
        if (this.data.color) {
            this.form.patchValue(this.data.color);
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
            this.dataServe.adminPostColors(this.form.value).subscribe(data => {
                console.log(data);
            });
        }
    }
}
ColorDialogComponent.ɵfac = function ColorDialogComponent_Factory(t) { return new (t || ColorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ColorDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorDialogComponent, selectors: [["app-color-dialog"]], decls: 23, vars: 3, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "color_name", "autofocus", "", "required", ""], [4, "ngIf"], ["type", "color", "matInput", "", "formControlName", "color_code", "autofocus", "", "required", ""], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function ColorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ColorDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ColorDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ColorDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.color_name.errors == null ? null : ctx.form.controls.color_name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.color_code.errors == null ? null : ctx.form.controls.color_code.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75325:
/*!*************************************************************************!*\
  !*** ./src/app/admin/products/product-color/product-color.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductColorComponent": () => (/* binding */ ProductColorComponent)
/* harmony export */ });
/* harmony import */ var _color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-dialog/color-dialog.component */ 36169);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 9560);
// import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
















const _c0 = function (a0) { return { "background-color": a0 }; };
function ProductColorComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductColorComponent_div_18_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const color_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.openColorDialog(color_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductColorComponent_div_18_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const color_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.remove(color_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](color_r2.color_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", color_r2.color_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, color_r2.color_code));
} }
function ProductColorComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ProductColorComponent_div_20_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ProductColorComponent {
    constructor(appService, dialog, appSettings, dataServe) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.dataServe = dataServe;
        this.categories = [];
        this.adminColors = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getColors();
    }
    getColors() {
        //template
        // this.appService.getCategories().subscribe(data => {
        //   this.categories = data; 
        //   this.categories.shift();
        // }); 
        //for fetching admin categories
        this.dataServe.adminGetColors().subscribe(data => {
            this.adminColors = data;
            this.adminColors = this.adminColors.msg;
            console.log(this.adminColors);
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openColorDialog(data) {
        const dialogRef = this.dialog.open(_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ColorDialogComponent, {
            data: {
                color: data,
                colors: this.adminColors
            },
            panelClass: ['theme-dialog'],
            autoFocus: true,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(color => {
            if (color) {
                const index = this.adminColors.findIndex(x => x.id == color.id);
                if (index !== -1) {
                    this.adminColors[index] = color;
                }
                else {
                    let last_color = this.adminColors[this.adminColors.length - 1];
                    color.id = last_color.id + 1;
                    this.adminColors.push(color);
                }
            }
        });
    }
    remove(color) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this color?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.adminColors.indexOf(color);
                if (index !== -1) {
                    this.dataServe.adminDeleteColors(color).subscribe(data => {
                        console.log(data);
                    });
                    this.adminColors.splice(index, 1);
                }
            }
        });
    }
}
ProductColorComponent.ɵfac = function ProductColorComponent_Factory(t) { return new (t || ProductColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
ProductColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductColorComponent, selectors: [["app-product-color"]], decls: 21, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "color_div", 3, "ngStyle"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ProductColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Color List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductColorComponent_Template_button_click_5_listener() { return ctx.openColorDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ProductColorComponent_div_18_Template, 17, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ProductColorComponent_div_20_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 2, ctx.adminColors, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c1, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.adminColors.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultStyleDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe], styles: [".color_div[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  border: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY29sb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0LWNvbG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yX2RpdntcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 52801:
/*!***************************************************************************!*\
  !*** ./src/app/admin/products/product-detail/product-detail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ 60692);
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ 52280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 49224);
/* harmony import */ var src_app_globalVar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globalVar */ 55366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _shared_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/controls/controls.component */ 81924);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 71933);





















const _c0 = ["zoomViewer"];
function ProductDetailComponent_mat_chip_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.product == null ? null : ctx_r0.product.discount, "% OFF");
} }
function ProductDetailComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousemove", function ProductDetailComponent_img_7_Template_img_mousemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onMouseMove($event); })("mouseleave", function ProductDetailComponent_img_7_Template_img_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onMouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.url + "/" + ctx_r1.lgImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProductDetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_Template_mat_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const image_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.selectImage(image_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.url + "/" + image_r8.img_path, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProductDetailComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r4.product == null ? null : ctx_r4.product.prod_sp, "1.2-2"), "");
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
class ProductDetailComponent {
    constructor(dataServe, appService, activatedRoute, dialog, formBuilder) {
        this.dataServe = dataServe;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.config = {};
        this.product = [];
        this.url = src_app_globalVar__WEBPACK_IMPORTED_MODULE_2__.globalData.apiUrl;
        this.prodCol = [];
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.getProductById(params['id']);
            }
            // else{
            //   this.getProductById(1); 
            // }
        });
        this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_1__.emailValidator])]
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
        };
    }
    getProductById(id) {
        this.dataServe.adminGetProductList(id).subscribe(data => {
            console.log(data);
            this.product = data;
            this.prodCol = data;
            this.product = this.product.msg[0];
            this.lgImg = this.product.img_path;
            this.prodCol = this.prodCol.msg[1];
            this.selectImage(this.prodCol.img[0]);
            this.config = {
                observer: false,
                slidesPerView: 4,
                spaceBetween: 10,
                keyboard: true,
                navigation: true,
                pagination: false,
                loop: false,
                preloadImages: false,
                lazy: true,
                breakpoints: {
                    480: {
                        slidesPerView: 2
                    },
                    600: {
                        slidesPerView: 3,
                    }
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
            };
        });
        // this.appService.getProductById(id).subscribe(data=>{
        //   this.product = data;
        //   this.image = data.images[0].medium;
        //   this.zoomImage = data.images[0].big;
        //   setTimeout(() => { 
        //     this.config.observer = true;
        //    // this.directiveRef.setIndex(0);
        //   });
        // });
    }
    selectImage(image) {
        // this.image = image.medium;
        // this.image = "/assets/images/products/headset/2-medium.png";
        // this.image=this.url+'/'+image.img_path
        this.image = image;
        // this.zoomImage = image.big;
        this.zoomImage = this.url + '/' + image.img_path;
        this.lgImg = image.img_path;
    }
    onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_0__.ProductZoomComponent, {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value);
        }
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], viewQuery: function ProductDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__.SwiperDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.zoomViewer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, decls: 89, vars: 19, consts: [["fxLayout", "row wrap", 1, "p-1"], ["fxFlex", "100", "fxFlex.gt-md", "45"], [1, "product-image"], [4, "ngIf"], ["mat-icon-button", "", "fxHide", "false", "fxHide.gt-md", "", 3, "click"], [3, "src", "mousemove", "mouseleave", 4, "ngIf"], [1, "small-carousel"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "swiper-button-prev", "swipe-arrow"], ["mat-icon-button", "", 1, "swiper-button-next", "swipe-arrow"], ["fxFlex", "100", "fxFlex.gt-md", "55", "ngClass.gt-sm", "px-3 m-0", "ngClass.sm", "mt-2", "ngClass.xs", "mt-2"], ["fxShow", "false", "fxShow.gt-md", ""], ["zoomViewer", ""], [1, "zoom-viewer", "mat-elevation-z18", 3, "ngStyle"], [1, "py-1", "lh"], [1, "text-muted", "fw-500"], ["hidden", ""], [1, "py-1"], [1, "py-1", "text-muted", "lh"], [1, "divider", "mt-1"], [1, "py-2"], [1, "old-price", "text-muted"], [1, "new-price"], [3, "product", "type"], [1, "divider"], ["fxLayout", "row wrap", 1, "p-1", "mt-2"], ["fxFlex", "100"], [3, "selectedIndex"], ["label", "History"], [1, "full-desc", "lh"], ["label", "Additional information"], [1, "px-2", "mt-1"], ["color", "warn", "selected", "true"], [3, "src", "mousemove", "mouseleave"], [1, "swiper-slide"], [1, "p-1", 3, "click"], [1, "swiper-lazy", "prod_img", 3, "src"], [1, "swiper-lazy-preloader"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductDetailComponent_mat_chip_list_3_Template, 3, 1, "mat-chip-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_4_listener() { return ctx.openZoomViewer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProductDetailComponent_img_7_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ProductDetailComponent_div_11_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Availibility: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Vendor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ProductDetailComponent_span_46_Template, 3, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "app-controls", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-tab-group", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-tab", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Donec et elit at nulla congue interdum sit amet varius erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Nunc sodales justo ut nisi euismod, quis condimentum leo varius.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Phasellus eu justo dictum, varius eros ut, posuere sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Nulla eu erat sit amet enim lobortis rhoncus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Etiam eu mauris in massa convallis ornare non id ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Nam sagittis augue at pretium pharetra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Sed a sem id massa egestas porta a sit amet felis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Duis aliquam urna in sapien cursus consequat. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.lgImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.prodCol.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c1, "url(" + ctx.zoomImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.prod_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.cat_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]( true ? "In stock" : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.prod_vendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.prod_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product.prod_sp != ctx.product.offer_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", ctx.product == null ? null : ctx.product.offer_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx.product)("type", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@.disabled", true)("selectedIndex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.product.prod_history, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__.SwiperDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultStyleDirective, _shared_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__.ControlsComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTab, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe], styles: [".mat-card.product-image[_ngcontent-%COMP%] {\n  padding: 6px;\n  text-align: center;\n}\n.mat-card.product-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n}\n.mat-card.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.mat-card.product-image[_ngcontent-%COMP%]   .mat-chip-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  pointer-events: none;\n}\n.small-carousel[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%], .small-carousel[_ngcontent-%COMP%]   .swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  left: -10px;\n}\n.small-carousel[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  right: -10px;\n}\n.mat-card.zoom-viewer[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.mat-list.reviews[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-avatar.review-author[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.mat-list.reviews[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line.text[_ngcontent-%COMP%] {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0;\n}\n.full-desc[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n}\n@media (min-width: 1280px) {\n  .mat-card.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in;\n  }\n}\n.prod_img[_ngcontent-%COMP%] {\n  height: 164px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRVI7QUFFQTtFQUNJLGVBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBQUk7O0VBRUksVUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFJQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLHNDQUFBO0VBRE47QUFDRjtBQUdBO0VBQ0ksYUFBQTtBQURKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jaGlwLWxpc3R7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDsgXHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsLWNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLCBcclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldntcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQuem9vbS12aWV3ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubXQtMTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscyBidXR0b257XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QucmV2aWV3c3tcclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvcntcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcbi5mdWxsLWRlc2N7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7ICBcclxuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZ3tcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgY3Vyc29yOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcclxuICAgIH1cclxufVxyXG4ucHJvZF9pbWd7XHJcbiAgICBoZWlnaHQ6MTY0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 52280:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/products/product-detail/product-zoom/product-zoom.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductZoomComponent": () => (/* binding */ ProductZoomComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 58852);





const _c0 = ["zoomImage"];
class ProductZoomComponent {
    constructor(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
    zoomIn() {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    }
    zoomOut() {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    }
}
ProductZoomComponent.ɵfac = function ProductZoomComponent_Factory(t) { return new (t || ProductZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ProductZoomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductZoomComponent, selectors: [["app-product-zoom"]], viewQuery: function ProductZoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.zoomImage = _t.first);
    } }, decls: 14, vars: 1, consts: [[1, "controls"], ["mat-mini-fab", "", "color", "primary", 1, "zoom-in", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "zoom-out", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "close", 3, "click"], ["mat-dialog-content", ""], [1, "viewer"], [3, "src"], ["zoomImage", ""]], template: function ProductZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductZoomComponent_Template_button_click_1_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductZoomComponent_Template_button_click_4_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductZoomComponent_Template_button_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent], styles: [".zoom-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.zoom-dialog .mat-dialog-container .controls {\n  position: relative;\n}\n.zoom-dialog .mat-dialog-container .controls button {\n  position: absolute;\n  top: -44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-in {\n  right: 44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-out {\n  right: 0;\n}\n.zoom-dialog .mat-dialog-container .controls .close {\n  right: -44px;\n}\n.zoom-dialog .mat-dialog-container .viewer {\n  width: 100%;\n  text-align: center;\n}\n.zoom-dialog .mat-dialog-container .viewer img {\n  max-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDRCQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtBQUVoQjtBQUFZO0VBQ0ksUUFBQTtBQUVoQjtBQUFZO0VBQ0ksWUFBQTtBQUVoQjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGNBQUE7QUFFaEIiLCJmaWxlIjoicHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20tZGlhbG9ne1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRyb2xze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20taW57XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDRweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20tb3V0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDRweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXdlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 83499:
/*!***********************************************************************!*\
  !*** ./src/app/admin/products/product-list/product-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var src_app_globalVar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/globalVar */ 55366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 9560);

















function ProductListComponent_div_9_div_1_mat_chip_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", product_r5.discount, "% OFF");
} }
function ProductListComponent_div_9_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r7.url + "/" + product_r5.img_path, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ProductListComponent_div_9_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 27);
} }
function ProductListComponent_div_9_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, product_r5.prod_sp, "1.2-2"), "");
} }
const _c0 = function (a1) { return ["/admin/products/add-product", a1]; };
const _c1 = function (a1) { return ["/admin/products/product-detail", a1]; };
function ProductListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProductListComponent_div_9_div_1_mat_chip_list_2_Template, 3, 1, "mat-chip-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProductListComponent_div_9_div_1_img_3_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProductListComponent_div_9_div_1_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProductListComponent_div_9_div_1_span_12_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const product_r5 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.remove(product_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fxFlex.gt-sm", ctx_r4.viewCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r5.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r5.img_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !product_r5.img_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r5.cat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", product_r5.prod_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r5.prod_sp != product_r5.offer_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 10, product_r5.offer_price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, product_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, product_r5.id));
} }
const _c2 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
function ProductListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductListComponent_div_9_div_1_Template, 28, 17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r1.products, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c2, ctx_r1.count, ctx_r1.page)));
} }
function ProductListComponent_div_10_div_1_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 50);
} if (rf & 2) {
    const product_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r19.url + "/" + product_r16.img_path, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ProductListComponent_div_10_div_1_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
} }
function ProductListComponent_div_10_div_1_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, product_r16.prod_sp, "1.2-2"), " ");
} }
function ProductListComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-menu", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseleave", function ProductListComponent_div_10_div_1_Template_span_mouseleave_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6); return _r17.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductListComponent_div_10_div_1_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const product_r16 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.remove(product_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ProductListComponent_div_10_div_1_img_30_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProductListComponent_div_10_div_1_img_31_Template, 1, 0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "texture");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "filter_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "art_track");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, ProductListComponent_div_10_div_1_span_58_Template, 3, 4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r16 = ctx.$implicit;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", product_r16.prod_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, product_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c1, product_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r16.img_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !product_r16.img_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r16.cat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r16.sub_cat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r16.type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r16.prod_vendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r16.prod_sp != product_r16.offer_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", product_r16.discount, "% OFF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](67, 13, product_r16.offer_price, "1.2-2"), "");
} }
const _c3 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function ProductListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductListComponent_div_10_div_1_Template, 68, 20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r2.products, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c3, ctx_r2.page)));
} }
function ProductListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProductListComponent_div_11_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProductListComponent {
    constructor(appService, dialog, dataServe) {
        this.appService = appService;
        this.dialog = dialog;
        this.dataServe = dataServe;
        this.products = [];
        this.viewCol = 25;
        this.count = 12;
        this.url = src_app_globalVar__WEBPACK_IMPORTED_MODULE_1__.globalData.apiUrl;
        this.viewGrid = true;
    }
    ngOnInit() {
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
        this.getAllProducts();
    }
    // public getAllProducts(){
    //   this.appService.getProducts("featured").subscribe(data=>{
    //     this.products = data; 
    //     //for show more product  
    //     for (var index = 0; index < 3; index++) {
    //       this.products = this.products.concat(this.products);        
    //     }
    //   });
    // }
    getAllProducts() {
        this.dataServe.adminGetProductList(null).subscribe(data => {
            console.log(data);
            this.products = data;
            this.products = this.products.msg;
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    onWindowResize() {
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }
    remove(product) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this product?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.products.indexOf(product);
                if (index !== -1) {
                    this.products.splice(index, 1);
                    this.dataServe.adminDelProduct(product.id, product.prod_name).subscribe(data => {
                        console.log(data);
                        this.getAllProducts();
                    });
                }
            }
        });
    }
    openUserDialog(user) {
        // let dialogRef = this.dialog.open(UserDialogComponent, {
        //     data: user
        // });
        // dialogRef.afterClosed().subscribe(user => {
        //     // if(user){
        //     //     (user.id) ? this.updateUser(user) : this.addUser(user);
        //     // }
        // });
    }
    changeView(view) {
        if (view == 'grid')
            this.viewGrid = true;
        else
            this.viewGrid = false;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], hostBindings: function ProductListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function ProductListComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "float", "right"], ["appearance", "legacy", "value", "grid"], ["viewType", "matButtonToggleGroup"], ["value", "grid", 3, "click"], ["value", "list", 3, "click"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "50", "class", "p-1", 3, "fxFlex.gt-sm", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.sm", "50", 1, "p-1", 3, "fxFlex.gt-sm"], [1, "product-item", "text-center"], [4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["src", "/assets/images/products/headset/2-medium.png", "alt", "", 4, "ngIf"], [1, "category", "text-muted"], [1, "title", "text-truncate"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "prices"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "old-price", "text-muted"], [1, "new-price"], [1, "divider", "mt-2"], [1, "icons"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "routerLink"], [1, "px-1"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "View", 3, "routerLink"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Remove", 3, "click"], ["color", "warn", "selected", "true"], ["alt", "", 3, "src"], ["src", "/assets/images/products/headset/2-medium.png", "alt", ""], ["fxFlex", "100", "class", "p-1", 4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "p-1"], [1, "p-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "bg-primary"], [1, "user-name", "pl-2"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", "matMenuTrigger"], ["xPosition", "before", "overlapTrigger", "true"], ["menu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "user-content"], ["fxFlex", "20", "fxFlex.xs", "30", "fxLayout", "column"], [1, "user-img"], ["height", "50", "width", "50", 3, "src", 4, "ngIf"], ["height", "50", "width", "50", "src", "/assets/images/products/headset/2-medium.png", 4, "ngIf"], ["fxFlex", "80", "fxFlex.xs", "70", "fxLayout", "row", "fxLayout.xs", "column", 1, "user-details", "transition-2"], ["fxFlex", "30", "fxFlex.xs", "100", "fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "text-muted"], ["class", "old-price text-muted", 4, "ngIf"], ["height", "50", "width", "50", 3, "src"], ["height", "50", "width", "50", "src", "/assets/images/products/headset/2-medium.png"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-button-toggle-group", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductListComponent_Template_mat_button_toggle_click_3_listener() { return ctx.changeView("grid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "view_module");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductListComponent_Template_mat_button_toggle_click_6_listener() { return ctx.changeView("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProductListComponent_div_9_Template, 3, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProductListComponent_div_10_Template, 3, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProductListComponent_div_11_Template, 4, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.viewGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.viewGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe], styles: [".user-name[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]   img.blocked[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-details.blocked[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.user-search[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.user-search[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.user-search.show[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 188px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQURJO0VBQ0ksa0JBQUE7QUFHUjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJWjs7QUFIWTtFQUNJLFlBQUE7QUFLaEI7O0FBRlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSVo7O0FBREk7RUFDSSxnQkFBQTtBQUdSOztBQUFRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVo7O0FBQVE7RUFDSSxpQkFBQTtBQUVaOztBQUFRO0VBQ0ksWUFBQTtBQUVaOztBQUdBO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFBTyxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7QUFHaEM7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1le1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udXNlci1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC51c2VyLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDk2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1zbGlkZS10b2dnbGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbHN7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4udXNlci1zZWFyY2h7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OjA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnByb2R1Y3QtaXRlbSBpbWd7XHJcbiAgICBtYXgtaGVpZ2h0OjE4OHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 68728:
/*!***********************************************************************!*\
  !*** ./src/app/admin/products/product-type/product-type.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTypeComponent": () => (/* binding */ ProductTypeComponent)
/* harmony export */ });
/* harmony import */ var _producttypedialog_producttypedialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producttypedialog/producttypedialog.component */ 35022);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 9560);














function ProductTypeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTypeComponent_div_15_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const p_type_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.openTypeDialog(p_type_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTypeComponent_div_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const p_type_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.remove(p_type_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_type_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_type_r2.type_name);
} }
function ProductTypeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProductTypeComponent_div_17_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ProductTypeComponent {
    constructor(dialog, appSettings, dataServe) {
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.dataServe = dataServe;
        // public categories:Category[] = []; 
        this.adminTypes = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getTypes();
    }
    getTypes() {
        //template
        // this.appService.getCategories().subscribe(data => {
        //   this.categories = data; 
        //   this.categories.shift();
        // }); 
        //for fetching admin categories
        this.dataServe.adminGetProducts().subscribe(data => {
            this.adminTypes = data;
            this.adminTypes = this.adminTypes.msg;
            console.log(this.adminTypes);
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openTypeDialog(dt) {
        console.log(dt);
        // console.log(this.adminTypes)
        const dialogRef = this.dialog.open(_producttypedialog_producttypedialog_component__WEBPACK_IMPORTED_MODULE_0__.ProducttypedialogComponent, {
            data: {
                type: dt,
                types: this.adminTypes
            },
            panelClass: ['theme-dialog'],
            autoFocus: true,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        // console.log(dialogRef);
        dialogRef.afterClosed().subscribe(type => {
            if (type) {
                const index = this.adminTypes.findIndex(x => x.id == type.id);
                if (index !== -1) {
                    this.adminTypes[index] = type;
                }
                else {
                    let last_type = this.adminTypes[this.adminTypes.length - 1];
                    type.id = last_type.id + 1;
                    this.adminTypes.push(type);
                }
            }
        });
    }
    remove(type) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this type?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.adminTypes.indexOf(type);
                if (index !== -1) {
                    this.dataServe.adminDeleteProducts(type).subscribe(data => {
                        console.log(data);
                    });
                    this.adminTypes.splice(index, 1);
                }
            }
        });
    }
}
ProductTypeComponent.ɵfac = function ProductTypeComponent_Factory(t) { return new (t || ProductTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
ProductTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductTypeComponent, selectors: [["app-product-type"]], decls: 18, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ProductTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Product Type List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTypeComponent_Template_button_click_5_listener() { return ctx.openTypeDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Add Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ProductTypeComponent_div_15_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProductTypeComponent_div_17_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 2, ctx.adminTypes, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.adminTypes.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 35022:
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/products/product-type/producttypedialog/producttypedialog.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProducttypedialogComponent": () => (/* binding */ ProducttypedialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);











function ProducttypedialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProducttypedialogComponent {
    constructor(dialogRef, data, fb, dataServe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.dataServe = dataServe;
        this.user = "admin@gmail.com";
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            type_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            user: this.user
        });
        // console.log(this.data);
        if (this.data.type) {
            // console.log('IF here');
            this.form.patchValue(this.data.type);
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
            this.dataServe.adminPostProducts(this.form.value).subscribe(data => {
                console.log(data);
            });
        }
    }
}
ProducttypedialogComponent.ɵfac = function ProducttypedialogComponent_Factory(t) { return new (t || ProducttypedialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ProducttypedialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProducttypedialogComponent, selectors: [["app-producttypedialog"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "type_name", "autofocus", "", "required", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function ProducttypedialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProducttypedialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProducttypedialogComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.type_name.errors == null ? null : ctx.form.controls.type_name.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0dHlwZWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 42516:
/*!***************************************************!*\
  !*** ./src/app/admin/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-swiper-wrapper */ 60692);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 83499);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 52801);
/* harmony import */ var _product_detail_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-zoom/product-zoom.component */ 52280);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ 87214);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ 81591);
/* harmony import */ var _categories_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/category-dialog/category-dialog.component */ 15917);
/* harmony import */ var _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcategories/subcategories.component */ 32653);
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.component */ 10640);
/* harmony import */ var _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-type/product-type.component */ 68728);
/* harmony import */ var _material_material_dialog_material_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material-dialog/material-dialog.component */ 43161);
/* harmony import */ var _product_type_producttypedialog_producttypedialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-type/producttypedialog/producttypedialog.component */ 35022);
/* harmony import */ var _product_color_product_color_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-color/product-color.component */ 75325);
/* harmony import */ var _product_color_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-color/color-dialog/color-dialog.component */ 36169);
/* harmony import */ var _subcategories_subcat_dialog_subcat_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subcategories/subcat-dialog/subcat-dialog.component */ 78136);
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-zoom */ 55350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
























const routes = [
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesComponent, data: { breadcrumb: 'Categories' } },
    { path: 'subcategories', component: _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_8__.SubcategoriesComponent, data: { breadcrumb: 'SubCategories' } },
    { path: 'producttype', component: _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_10__.ProductTypeComponent, data: { breadcrumb: 'Product Type' } },
    { path: 'material', component: _material_material_component__WEBPACK_IMPORTED_MODULE_9__.MaterialComponent, data: { breadcrumb: 'Material' } },
    { path: 'color', component: _product_color_product_color_component__WEBPACK_IMPORTED_MODULE_13__.ProductColorComponent, data: { breadcrumb: 'Color' } },
    { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent, data: { breadcrumb: 'Product List' } },
    { path: 'product-detail', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailComponent, data: { breadcrumb: 'Product Detail' } },
    { path: 'product-detail/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailComponent, data: { breadcrumb: 'Product Detail' } },
    { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent, data: { breadcrumb: 'Add Product' } },
    { path: 'add-product/:id', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent, data: { breadcrumb: 'Edit Product' } },
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__.NgxImageZoomModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_21__.SwiperModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_22__.InputFileModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent,
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailComponent,
        _product_detail_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__.ProductZoomComponent,
        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent,
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesComponent,
        _categories_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_7__.CategoryDialogComponent,
        _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_8__.SubcategoriesComponent,
        _material_material_component__WEBPACK_IMPORTED_MODULE_9__.MaterialComponent,
        _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_10__.ProductTypeComponent,
        _material_material_dialog_material_dialog_component__WEBPACK_IMPORTED_MODULE_11__.MaterialDialogComponent,
        _product_type_producttypedialog_producttypedialog_component__WEBPACK_IMPORTED_MODULE_12__.ProducttypedialogComponent,
        _product_color_product_color_component__WEBPACK_IMPORTED_MODULE_13__.ProductColorComponent,
        _product_color_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_14__.ColorDialogComponent,
        _subcategories_subcat_dialog_subcat_dialog_component__WEBPACK_IMPORTED_MODULE_15__.SubcatDialogComponent], imports: [ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__.NgxImageZoomModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_21__.SwiperModule,
        ngx_input_file__WEBPACK_IMPORTED_MODULE_22__.InputFileModule] }); })();


/***/ }),

/***/ 78136:
/*!***************************************************************************************!*\
  !*** ./src/app/admin/products/subcategories/subcat-dialog/subcat-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcatDialogComponent": () => (/* binding */ SubcatDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 34357);













function SubcatDialogComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r4.name);
} }
function SubcatDialogComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubcatDialogComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SubcatDialogComponent {
    constructor(dialogRef, data, fb, dataServe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.dataServe = dataServe;
        this.user = "admin@gmail.com";
        this.categories = [];
        this.adminCategories = [];
        this.selectedCatId = this.data.catId;
        console.log(this.selectedCatId);
        console.log(this.data);
    }
    ngOnInit() {
        this.getCategories();
        this.form = this.fb.group({
            id: 0,
            cat_id: [this.selectedCatId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            user: this.user
        });
        console.log(this.form);
        if (this.data.subcat) {
            this.form.patchValue(this.data.subcat);
        }
        ;
    }
    getCategories() {
        //for fetching admin categories
        this.dataServe.adminGetCategories().subscribe(data => {
            this.adminCategories = data;
            this.adminCategories = this.adminCategories.msg;
            console.log(this.adminCategories);
        });
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
            this.dataServe.adminPostSubcategories(this.form.value).subscribe(data => {
                console.log(data);
            });
        }
    }
    disp(v) {
        // console.log(v)
        this.selectedCatId = v;
    }
}
SubcatDialogComponent.ɵfac = function SubcatDialogComponent_Factory(t) { return new (t || SubcatDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
SubcatDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubcatDialogComponent, selectors: [["app-subcat-dialog"]], decls: 24, vars: 5, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["appearance", "fill"], ["formControlName", "cat_id", 3, "value", "valueChange", "selectionChange"], ["s_cat", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "name", "autofocus", "", "required", ""], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]], template: function SubcatDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sub-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SubcatDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SubcatDialogComponent_Template_mat_select_valueChange_9_listener($event) { return ctx.selectedCatId = $event; })("selectionChange", function SubcatDialogComponent_Template_mat_select_selectionChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.disp(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SubcatDialogComponent_mat_option_11_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SubcatDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SubcatDialogComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedCatId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.adminCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedCatId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 32653:
/*!*************************************************************************!*\
  !*** ./src/app/admin/products/subcategories/subcategories.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoriesComponent": () => (/* binding */ SubcategoriesComponent)
/* harmony export */ });
/* harmony import */ var _subcat_dialog_subcat_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcat-dialog/subcat-dialog.component */ 78136);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ 74391);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 9560);
// import { CategoryDialogComponent } from './category-dialog/category-dialog.component';















function SubcategoriesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubcategoriesComponent_div_17_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const cat_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.openSubDialog(cat_r2, cat_r2.cat_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubcategoriesComponent_div_17_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const cat_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.remove(cat_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cat_r2.cat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cat_r2.name, " ");
} }
function SubcategoriesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function SubcategoriesComponent_div_19_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class SubcategoriesComponent {
    constructor(appService, dialog, appSettings, dataServe) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.dataServe = dataServe;
        this.categories = [];
        this.adminSubs = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getSubcat();
    }
    getSubcat() {
        //template
        // this.appService.getCategories().subscribe(data => {
        //   this.categories = data; 
        //   this.categories.shift();
        // }); 
        //for fetching admin categories
        this.dataServe.adminGetSubcategories().subscribe(data => {
            this.adminSubs = data;
            this.adminSubs = this.adminSubs.msg;
            console.log(this.adminSubs);
        });
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openSubDialog(data, cat_id) {
        console.log(data);
        console.log(cat_id);
        const dialogRef = this.dialog.open(_subcat_dialog_subcat_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SubcatDialogComponent, {
            data: {
                subcat: data,
                catId: cat_id,
                subcats: this.adminSubs
            },
            panelClass: ['theme-dialog'],
            autoFocus: true,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(sub => {
            if (sub) {
                console.log(sub);
                const index = this.adminSubs.findIndex(x => x.id == sub.id);
                if (index !== -1) {
                    console.log(sub);
                    this.adminSubs[index] = sub;
                    this.getSubcat();
                }
                else {
                    console.log(sub);
                    let last_sub = this.adminSubs[this.adminSubs.length - 1];
                    sub.id = last_sub.id + 1;
                    this.adminSubs.push(sub);
                    this.getSubcat();
                }
            }
        });
    }
    remove(sub) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this sub-category?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.adminSubs.indexOf(sub);
                if (index !== -1) {
                    this.dataServe.adminDeleteSubcategories(sub).subscribe(data => {
                        console.log(data);
                    });
                    this.adminSubs.splice(index, 1);
                }
            }
        });
    }
}
SubcategoriesComponent.ɵfac = function SubcategoriesComponent_Factory(t) { return new (t || SubcategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
SubcategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SubcategoriesComponent, selectors: [["app-subcategories"]], decls: 20, vars: 8, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function SubcategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Sub-category List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubcategoriesComponent_Template_button_click_5_listener() { return ctx.openSubDialog(null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Sub-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Subcategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SubcategoriesComponent_div_17_Template, 15, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SubcategoriesComponent_div_19_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 2, ctx.adminSubs, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.adminSubs.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_products_products_module_ts.js.map
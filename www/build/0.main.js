webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trophy__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrophyPageModule", function() { return TrophyPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrophyPageModule = (function () {
    function TrophyPageModule() {
    }
    return TrophyPageModule;
}());
TrophyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__trophy__["a" /* TrophyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trophy__["a" /* TrophyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__trophy__["a" /* TrophyPage */]
        ]
    })
], TrophyPageModule);

//# sourceMappingURL=trophy.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrophyPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrophyPage = (function () {
    function TrophyPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    TrophyPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        console.log(data);
    };
    TrophyPage.prototype.closeTrophy = function () {
        this.view.dismiss();
    };
    return TrophyPage;
}());
TrophyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-trophy',template:/*ion-inline-start:"C:\Users\pierr\Documents\Apps\S-Fit_Application\src\pages\trophy\trophy.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Détails trophée</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeTrophy()">\n\n        <span ion-text showWhen="ios">Fermer</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="../../assets/img/trophies/premier1.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title>Mon premier trophée</ion-card-title>\n\n      <p>Bienvenue dans notre application ! Pour vous encourager dans votre programme connecté nous vous offrons votre premier Trophée ! Bon courage pour la suite !</p>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'ribbon\' item-start color="bright"></ion-icon>\n\n      Points\n\n      <ion-badge item-end>1</ion-badge>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\Documents\Apps\S-Fit_Application\src\pages\trophy\trophy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
], TrophyPage);

//# sourceMappingURL=trophy.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersPageModule = (function () {
    function UsersPageModule() {
    }
    return UsersPageModule;
}());
UsersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]
        ]
    })
], UsersPageModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UsersPage = (function () {
    function UsersPage(navParams, view, alertCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
    }
    UsersPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        console.log(data);
    };
    UsersPage.prototype.closeUsers = function () {
        this.view.dismiss();
    };
    UsersPage.prototype.createUsers = function () {
        var alert = this.alertCtrl.create({
            title: 'Nouvel utilisateur ajouté!',
            subTitle: 'Votre compte est désormais opérationnel.',
            buttons: ['OK']
        });
        alert.present();
        this.view.dismiss();
    };
    return UsersPage;
}());
UsersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"C:\Users\Malefor\Documents\Miroir\S-Fit_Application\src\pages\users\users.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajouter un profil</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeUsers()">\n\n        <span ion-text color="primary" showWhen="ios">Annuler</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Nom"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Prénom"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label> Sexe</ion-label>\n\n      <ion-select>\n\n        <ion-option value="M">Homme</ion-option>\n\n        <ion-option value="F">Femme</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Taille (en cm)"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Poids (en Kg)"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Date de Naissance :</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="date"></ion-input>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n<div padding>\n\n  <button ion-button (click)="createUsers()" block>Enregistrer</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Malefor\Documents\Miroir\S-Fit_Application\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], UsersPage);

//# sourceMappingURL=users.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
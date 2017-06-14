webpackJsonp([1],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPageModule = (function () {
    function AddPageModule() {
    }
    return AddPageModule;
}());
AddPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */]
        ]
    })
], AddPageModule);

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
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
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPage = (function () {
    function AddPage(navParams, view, alertCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
    }
    AddPage.prototype.closeadd = function () {
        this.view.dismiss();
    };
    AddPage.prototype.addUsers = function () {
        var alert = this.alertCtrl.create({
            title: 'Nouvel utilisateur ajouté!',
            subTitle: 'Votre compte est désormais opérationnel.',
            buttons: ['OK']
        });
        alert.present();
        this.view.dismiss();
    };
    return AddPage;
}());
AddPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-add',template:/*ion-inline-start:"C:\Users\Malefor\Documents\Miroir\S-Fit_Application\src\pages\add\add.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajouter un profil</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeadd()">\n\n        <span ion-text color="primary" showWhen="ios">Annuler</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input id =\'nom\' type="text" placeholder="Nom"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input id =\'prenom\' type="text" placeholder="Prénom"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label>Sexe</ion-label>\n\n      <ion-select>\n\n        <ion-option value="M">Homme</ion-option>\n\n        <ion-option value="F">Femme</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Taille (en cm)"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Poids (en Kg)"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Code Miroir"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Date de Naissance :</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="date"></ion-input>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n<div padding>\n\n  <button ion-button (click)="addUsers()" block>Enregistrer</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Malefor\Documents\Miroir\S-Fit_Application\src\pages\add\add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], AddPage);

//# sourceMappingURL=add.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map
System.register(['rxjs/add/operator/switchMap', '@angular/core', '@angular/router', '@angular/common', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route, location) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = location;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
                        .subscribe(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-detail',
                        templateUrl: './hero-detail.component.html',
                        styleUrls: ['./hero-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _b) || Object])
                ], HeroDetailComponent);
                return HeroDetailComponent;
                var _a, _b;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-detail.component.js.map
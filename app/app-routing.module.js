System.register(['@angular/core', '@angular/router', './dashboard.component', './heroes.component', './hero-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var routes, AppRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
                { path: 'heroes', component: heroes_component_1.HeroesComponent }
            ];
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forRoot(routes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    }
});
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app-routing.module.js.map
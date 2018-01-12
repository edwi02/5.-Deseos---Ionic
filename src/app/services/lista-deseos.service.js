var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';
var ListaDeseosService = (function () {
    function ListaDeseosService() {
        this.listas = [];
        var lista1 = new Lista('Compras de supermercado');
        var lista2 = new Lista('Juegos que deseo');
        var lista3 = new Lista('Cosas de la universidad');
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        console.log("Servicio inicializado.!!");
    }
    ListaDeseosService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ListaDeseosService);
    return ListaDeseosService;
}());
export { ListaDeseosService };
//# sourceMappingURL=lista-deseos.service.js.map
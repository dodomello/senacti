"use strict";
exports.__esModule = true;
var arma = /** @class */ (function () {
    function arma(projeteis, capacidade) {
        this.capacidade = capacidade;
        this.projeteisNoPente = projeteis;
    }
    arma.prototype.atirar = function (n) {
        if (n === void 0) { n = 1; }
        if (this.projeteisNoPente == 0) {
            console.log('Não há balas, por favor recarregue');
        }
        else {
            this.projeteisNoPente = this.projeteisNoPente - n;
            console.log('Bang!!!');
        }
    };
    arma.prototype.recarregar = function () {
        this.projeteisNoPente = this.capacidade;
    };
    arma.prototype.informarBalas = function () {
        return this.projeteisNoPente;
    };
    return arma;
}());
exports["default"] = arma;

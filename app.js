"use strict";
exports.__esModule = true;
var metralhadora_1 = require("./metralhadora");
var arma_1 = require("./arma");
var pistola = new arma_1["default"](10, 10);
pistola.atirar(1);
pistola.informarBalas();
var m16 = new metralhadora_1["default"](10, 10, 5);
m16.atirar();
m16.informarBalas();
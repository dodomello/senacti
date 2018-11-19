import metralhadora from './metralhadora'
import arma from './arma';

let pistola = new arma(10, 10);
pistola.atirar(1);
pistola.informarBalas();

let m16 = new metralhadora (10, 10, 5);
m16.atirar();
m16.informarBalas();



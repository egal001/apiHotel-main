const express = require('express');
const clienteRouter = require('./clientes.route');
const reservasRouter = require('./reservas.route')
const empleadoRouter = require('./recepcionista.route')
function rutas(app){
  const router = express.Router();
  //cliente
  app.use('/cliente/r1',router);
  router.use('/habitaciones', clienteRouter); //ver habitaciones, ver una habitacion -> get
  router.use('/solicitarReserva',clienteRouter); //solicitar reserva -> pos
  //Recepcion
  app.use('/recepcion/r1',router);
  router.use('/datos',reservasRouter);
  //empleados
  app.use('/Personal/r1',router);
  router.use('/empleados',empleadoRouter);
}
module.exports = rutas;

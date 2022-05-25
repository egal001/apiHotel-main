const express = require("express")
const router = express.Router()

const HabitacionesService = require('../services/habitaciones.service')
const ReservaService = require('../services/reserva.service')

const servicioHabitaciones = new HabitacionesService()
const servicioReservas = new ReservaService()

router.get('/',(req,res) => {
  const habitaciones = servicioHabitaciones.findAll()
  res.status(200).json(habitaciones)
})

router.get('/:idHabitacion',(req,res) => {
  const {idHabitacion} = req.params;
  const habitacion = servicioHabitaciones.findBy(idHabitacion)
  res.status(200).json(habitacion)
})

router.post('/',(req,res) => {
  const body = req.body
  servicioReservas.create(body)
  res.status(200).json({
    mensaje: 'reserva exitosa',
    datosReserva: body
  })
})

module.exports = router

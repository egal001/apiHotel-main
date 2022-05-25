const express = require("express")
const router = express.Router()

const HabitacionesService = require('../services/habitaciones.service')
const ReservaService = require('../services/reserva.service')

const servicioHabitaciones = new HabitacionesService()
const servicioReservas = new ReservaService()

router.get('/solicitudReservas',(req,res) => {
  const solicitudesReservas = servicioReservas.findAll()
  res.status(200).json(solicitudesReservas)
})

router.get('/habitaciones',(req,res) => {
  const habitaciones = servicioHabitaciones.findAll()
  res.status(200).json(habitaciones)
})

router.get('/reservas',(req,res) => {
  const reservas = servicioReservas.findAll()
  res.status(200).json(reservas)
})

router.get('/habitaciones/:idHabitacion',(req,res) => {
  const {idHabitacion} = req.params
  const habitacion = servicioHabitaciones.findBy(idHabitacion)
  res.status(200).json(habitacion)
})

router.get('/solicitudReservas/:idSolicitudReserva',(req,res) => {
  const {idSolicitudReserva} = req.params
  const solicitudReserva = servicioReservas.findBy(idSolicitudReserva)
  res.status(200).json(solicitudReserva)
})

router.get('/Reservas/:idReserva',(req,res) => {
  const {idReserva} = req.params
  const reserva = servicioReservas.findBy(idReserva)
  res.status(200).json(reserva)
})

router.post('/crearReserva',(req,res) => {
  const body = req.body
  servicioReservas.create(body)
  res.status(200).json({
    mensaje: 'reserva creada',
    datosReserva: body
  })
})

router.post('/crearHabitacion',(req,res) => {
  const body = req.body
  servicioHabitaciones.create(body)
  res.status(200).json({
    mensaje: 'habitacion creada',
    datosHabitacion: body
  })
})

router.put('/habitacionPut/:idHabitacion',(req,res) =>{
  const {idHabitacion} = req.params
  const body = req.body
  servicioHabitaciones.update(idHabitacion,body)
  res.status(200).json({
    mensaje: 'habitacion actualizada -> metodo put',
    datos: servicioHabitaciones.findBy(idHabitacion)
  })
})

router.put('/reservaPut/:idReserva',(req,res) =>{
  const {idReserva} = req.params
  const body = req.body
  servicioReservas.update(idReserva,body)
  res.status(200).json({
    mensaje: 'habitacion actualizada -> metodo put',
    datos: servicioReservas.findBy(idReserva)
  })
})

router.patch('/HabitacionPatch/:idHabitacion',(req,res) => {
  const {idHabitacion} = req.params
  const body = req.body
  servicioHabitaciones.update(idHabitacion,body)
  res.status(200).json({
    mensaje: 'habitacion actualizada -> metodo patch',
    datos: servicioHabitaciones.findBy(idHabitacion)
  })
})
router.patch('/ReservaPatch/:idReserva',(req,res) => {
  const {idReserva} = req.params
  const body = req.body
  servicioReservas.update(idReserva,body)
  res.status(200).json({
    mensaje: 'habitacion actualizada -> metodo patch',
    datos: servicioReservas.findBy(idReserva)
  })
})

router.delete('/EliminarHabitacion/:idHabitacion',(req,res) => {
  const {idHabitacion} = req.params
  servicioHabitaciones.delete(idHabitacion);
  res.status(200).json({
    mensaje: 'se elimno habitacion'
  })
})

router.delete('/EliminarReserva/:idReserva',(req,res) => {
  const {idReserva} = req.params
  servicioReservas.delete(idReserva)
  res.status(200).json({
    mensaje: 'se elimno reserva'
  })
})

router.delete('/EliminarSolicitudReserva/id:SolicitudReserva',(req,res) => {
  const {SolicitudReserva} = req.params
  servicioReservas.delete(solicitudReserva)
  res.status(200).json({
    mensaje: 'se elimno solicitud de reserva'
  })
})


module.exports = router


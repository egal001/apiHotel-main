const express = require("express")
const router = express.Router()//ENCARGARDO DEL PROCESO DE ROUTING

const EmpleadosService = require('../services/recepcionista.service')
const servicioEmpleado = new EmpleadosService()

router.get('/',(req,res) => {
  const empleados = servicioEmpleado.findAll()
  res.status(200).json(empleados)
})

router.get('/:id',(req,res) => {
  const {id} = req.params
  const empleado = servicioEmpleado.findBy(id);
  res.status(200).json(empleado)
})

router.post('/crearEmpleado',(req,res) => {
  const body = req.body
  servicioEmpleado.create(body)
  res.status(200).json({
    mensaje: 'empleado añadido',
    datosEmpleado: body
  })
})

router.put('/editarEmpleadoPut/:idEmpleado',(req,res) =>{
  const {idEmpleado} = req.params
  const body = req.body
  servicioEmpleado.update(idEmpleado,body)
  res.status(200).json({
    mensaje: 'empleado actualizo -> metodo put',
    datos: servicioEmpleado.findBy(idEmpleado)
  })
})

router.patch('/editarEmpleadoPatch/:idEmpleado',(req,res) => {
  const {idEmpleado} = req.params
  const body = req.body
  servicioEmpleado.update(idEmpleado,body)
  res.status(200).json({
    mensaje: 'empleado actualizo -> metodo patch',
    datos: servicioEmpleado.findBy(idEmpleado)
  })
})

router.delete('/EliminarEmpleado/:id',(req,res) => {
  const {id} = req.params
  const datos = servicioEmpleado.findBy(id)
  servicioEmpleado.delete(id)
  res.status(200).json({
    mensaje: 'se elimno empleado',
    datos: datos
  })
})

module.exports = router

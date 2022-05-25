const faker = require("faker")
class HabitacionesService{
  constructor(){
    this.Habitaciones = []
    this.generarHabitaciones()
  }
  generarHabitaciones(){
     const tipoHabitacion = ["Matromonial","Duplex","Cuadruples","Suite","Junio Suite","Familiar"]
     const limite = 10
     for (let index = 0; index < limite; index++) {
      var rand = Math.floor(Math.random() * tipoHabitacion.length);
       this.Habitaciones.push({
        codH: faker.datatype.uuid(),
        caracteristicas: faker.commerce.productDescription(),
        tipoHabitacionH: tipoHabitacion[rand],
        nroHabitacion: Math.floor(Math.random() * (50 - 1)) + 1,
        precioHabitacion: Math.floor(Math.random() * (500 - 100)) + 100,
        pisoHabitacion: Math.floor(Math.random() * (10 - 1)) + 1,
        capacidad: Math.floor(Math.random() * (6 - 1)) + 1
       })
     }
  }
  create(Habitacion){
    Habitacion.codH = faker.datatype.uuid()
    this.Habitaciones.push(Habitacion)
  }
  update(cod,Habitacion){
    const Update = this.findBy(cod)
    if(Update != undefined){
      Update.caracteristicas = (Habitacion.caracteristicas != undefined)? Habitacion.caracteristicas:Update.caracteristicas
      Update.tipoHabitacion = (Habitacion.tipoHabitacion != undefined)? Habitacion.tipoHabitacion:Update.tipoHabitacion
      Update.nroHabitacion = (Habitacion.nroHabitacion != undefined)? Habitacion.nroHabitacion:Update.nroHabitacion
      Update.precioHabitacion = (Habitacion.precioHabitacion != undefined)? Habitacion.precioHabitacion:Update.precioHabitacion
      Update.pisoHabitacion = (Habitacion.pisoHabitacion != undefined)? Habitacion.pisoHabitacion:Update.pisoHabitacion
      Update.capacidad = (Habitacion.capacidad != undefined)? Habitacion.capacidad:Update.capacidad
    }
    // else{
    //   console.log("No existe habitacion")
    // }
  }
  delete(id){
    const Eliminar = this.findBy(id)
    if(Eliminar != undefined){
      this.Habitaciones.splice(this.Habitaciones.indexOf(Eliminar),1)
    }
  }
  findAll(){
    return this.Habitaciones
  }
  findBy(id){
    return this.Habitaciones.find(item => item.codH === id)
  }
}

module.exports = HabitacionesService

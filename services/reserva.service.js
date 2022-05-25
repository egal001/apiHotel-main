const faker = require("faker")
class ReservaService{
  constructor(){
    this.Reservas = []
    this.generarReservas()
  }
  generarReservas(){
    const tipoHabitacion = ["Matromonial","Duplex","Cuadruples","Suite","Junio Suite","Familiar"]
    const limite = 10
    for (let index = 0; index < limite; index++) {
      var rand = Math.floor(Math.random() * tipoHabitacion.length);
      this.Reservas.push({
      codR: faker.datatype.uuid(),
      nombreCliente: faker.name.firstName(),
      apellidosCliente: faker.name.lastName(),
      correoCliente: faker.internet.email(),
      numeroCelularCliente: faker.phone.phoneNumber(),
      fechaIngreso: faker.datatype.datetime(),
      fechaSalida: faker.datatype.datetime(),
      cantidadPersonas: Math.floor(Math.random() * (6 - 1)) + 1,
      tipoHabitacion: tipoHabitacion[rand],
      Estado: "SIN CONFIRMAR",
      pagado: "NO"
      })
    }
  }
  create(Reserva){
    Reserva.codR = faker.datatype.uuid()
    this.Reservas.push(Reserva)
  }
  update(id,Reserva){
    const Update = this.findBy(id)
    if(Update != undefined){
      Update.nombreCliente = (Reserva.nombreCliente != undefined)? Reserva.nombreCliente:Update.nombreCliente
      Update.apellidosCliente = (Reserva.apellidosCliente != undefined)? Reserva.apellidosCliente:Update.apellidosCliente
      Update.correoCliente = (Reserva.correoCliente != undefined)? Reserva.correoCliente:Update.correoCliente
      Update.numeroCelularCliente = (Reserva.numeroCelularCliente != undefined)?  Reserva.numeroCelularCliente:Update.numeroCelularCliente
      Update.fechaIngreso = (Reserva.fechaIngreso != undefined)? Reserva.fechaIngreso:Update.fechaIngreso
      Update.fechaSalida = (Reserva.fechaSalida != undefined)? Reserva.fechaSalida:Update.fechaSalida
      Update.cantidadPersonas = (Reserva.cantidadPersonas != undefined)? Reserva.cantidadPersonas:Update.cantidadPersonas
      Update.tipoHabitacion = (Reserva.tipoHabitacion != undefined)? Reserva.tipoHabitacion:Update.tipoHabitacion
      Update.Estado = (Reserva.Estado != undefined)? Reserva.Estado:Update.Estado
      Update.pagado = (Reserva.pagado != undefined)? Reserva.pagado:Update.pagado
    }
    // else{
    //   console.log("No existe reserva")
    // }
  }
  delete(id){
    const Eliminar = this.findBy(id)
    if(Eliminar != undefined){
      this.Reservas.splice(this.Reservas.indexOf(Eliminar),1)
    }
  }
  findAll(){
    return this.Reservas
  }
  findBy(id){
    return this.Reservas.find(item => item.codR === id)
  }
}

module.exports = ReservaService
